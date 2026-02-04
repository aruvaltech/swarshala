import { NextResponse } from 'next/server';
import { trialFormSchema, validateForm, isHoneypotFilled, containsSpam } from '@/lib/validators';
import { checkRateLimit, getClientIP, rateLimitConfigs, rateLimitHeaders } from '@/lib/rate-limit';

export async function POST(request: Request) {
    try {
        // Rate limiting
        const ip = getClientIP(request.headers);
        const rateLimitResult = checkRateLimit(ip, 'leadForm', rateLimitConfigs.leadForm);

        if (!rateLimitResult.success) {
            return NextResponse.json(
                {
                    success: false,
                    message: `Too many requests. Please try again in ${Math.ceil(rateLimitResult.resetIn / 1000)} seconds.`,
                },
                {
                    status: 429,
                    headers: rateLimitHeaders(rateLimitResult, rateLimitConfigs.leadForm),
                }
            );
        }

        const body = await request.json();

        // Honeypot check
        if (isHoneypotFilled(body.website)) {
            // Silently accept but don't process (looks like success to bots)
            return NextResponse.json({ success: true, message: 'Thank you for your submission.' });
        }

        // Spam check
        const textToCheck = `${body.name} ${body.message || ''} ${body.preferredTime || ''}`;
        if (containsSpam(textToCheck)) {
            return NextResponse.json(
                { success: false, message: 'Your submission could not be processed.' },
                { status: 400 }
            );
        }

        // Validate form data
        const validation = validateForm(trialFormSchema, body);

        if (!validation.success) {
            return NextResponse.json(
                { success: false, errors: validation.errors },
                { status: 400 }
            );
        }

        const { data } = validation;

        // Here you would typically:
        // 1. Save to database
        // 2. Send to CRM (e.g., HubSpot, Salesforce)
        // 3. Send notification email
        // 4. Trigger automation workflows

        // For now, we'll just log and return success
        console.log('New lead submission:', {
            name: data.name,
            email: data.email,
            phone: data.phone,
            city: data.city,
            instrument: data.instrument,
            level: data.level,
            mode: data.mode,
            preferredTime: data.preferredTime,
            timestamp: new Date().toISOString(),
        });

        // Simulate async processing
        // await saveToDatabase(data);
        // await sendToHubSpot(data);
        // await sendConfirmationEmail(data.email, data.name);

        return NextResponse.json(
            {
                success: true,
                message: 'Thank you! We will contact you within 2 hours to schedule your trial class.',
            },
            {
                headers: rateLimitHeaders(rateLimitResult, rateLimitConfigs.leadForm),
            }
        );
    } catch (error) {
        console.error('Lead submission error:', error);
        return NextResponse.json(
            { success: false, message: 'An error occurred. Please try again.' },
            { status: 500 }
        );
    }
}

export async function GET() {
    return NextResponse.json(
        { message: 'Method not allowed' },
        { status: 405 }
    );
}

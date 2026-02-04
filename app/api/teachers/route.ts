import { NextResponse } from 'next/server';
import { teacherFormSchema, validateForm, isHoneypotFilled, containsSpam } from '@/lib/validators';
import { checkRateLimit, getClientIP, rateLimitConfigs, rateLimitHeaders } from '@/lib/rate-limit';

export async function POST(request: Request) {
    try {
        // Rate limiting
        const ip = getClientIP(request.headers);
        const rateLimitResult = checkRateLimit(ip, 'teacherForm', rateLimitConfigs.teacherForm);

        if (!rateLimitResult.success) {
            return NextResponse.json(
                {
                    success: false,
                    message: `Too many requests. Please try again later.`,
                },
                {
                    status: 429,
                    headers: rateLimitHeaders(rateLimitResult, rateLimitConfigs.teacherForm),
                }
            );
        }

        const body = await request.json();

        // Honeypot check
        if (isHoneypotFilled(body.website)) {
            return NextResponse.json({ success: true, message: 'Application received.' });
        }

        // Spam check
        const textToCheck = `${body.name} ${body.message || ''} ${body.certifications || ''}`;
        if (containsSpam(textToCheck)) {
            return NextResponse.json(
                { success: false, message: 'Your submission could not be processed.' },
                { status: 400 }
            );
        }

        // Validate form data
        const validation = validateForm(teacherFormSchema, body);

        if (!validation.success) {
            return NextResponse.json(
                { success: false, errors: validation.errors },
                { status: 400 }
            );
        }

        const { data } = validation;

        // Log the application
        console.log('New teacher application:', {
            name: data.name,
            email: data.email,
            phone: data.phone,
            city: data.city,
            instruments: data.instruments,
            experience: data.experience,
            languages: data.languages,
            timestamp: new Date().toISOString(),
        });

        // Here you would:
        // 1. Save to database
        // 2. Send to HR/recruitment system
        // 3. Send confirmation email to applicant
        // 4. Notify recruitment team

        return NextResponse.json(
            {
                success: true,
                message: 'Thank you for your application! Our team will review and contact you within 3 business days.',
            },
            {
                headers: rateLimitHeaders(rateLimitResult, rateLimitConfigs.teacherForm),
            }
        );
    } catch (error) {
        console.error('Teacher application error:', error);
        return NextResponse.json(
            { success: false, message: 'An error occurred. Please try again.' },
            { status: 500 }
        );
    }
}

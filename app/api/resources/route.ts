import { NextResponse } from 'next/server';
import { resourceFormSchema, validateForm, isHoneypotFilled } from '@/lib/validators';
import { checkRateLimit, getClientIP, rateLimitConfigs, rateLimitHeaders } from '@/lib/rate-limit';
import { resources } from '@/content/resources';

export async function POST(request: Request) {
    try {
        // Rate limiting
        const ip = getClientIP(request.headers);
        const rateLimitResult = checkRateLimit(ip, 'resourceDownload', rateLimitConfigs.resourceDownload);

        if (!rateLimitResult.success) {
            return NextResponse.json(
                {
                    success: false,
                    message: `Too many requests. Please try again later.`,
                },
                {
                    status: 429,
                    headers: rateLimitHeaders(rateLimitResult, rateLimitConfigs.resourceDownload),
                }
            );
        }

        const body = await request.json();

        // Honeypot check
        if (isHoneypotFilled(body.website)) {
            return NextResponse.json({ success: true, downloadUrl: '#' });
        }

        // Validate form data
        const validation = validateForm(resourceFormSchema, body);

        if (!validation.success) {
            return NextResponse.json(
                { success: false, errors: validation.errors },
                { status: 400 }
            );
        }

        const { data } = validation;

        // Find the resource
        const resource = resources.find((r) => r.id === data.resourceId);

        if (!resource) {
            return NextResponse.json(
                { success: false, message: 'Resource not found.' },
                { status: 404 }
            );
        }

        // Log the download
        console.log('Resource download:', {
            email: data.email,
            name: data.name,
            resource: resource.title,
            timestamp: new Date().toISOString(),
        });

        // Here you would:
        // 1. Save email to newsletter/CRM
        // 2. Track download analytics
        // 3. Send email with download link

        return NextResponse.json(
            {
                success: true,
                message: 'Download link sent to your email!',
                downloadUrl: resource.downloadUrl,
                resource: {
                    title: resource.title,
                    type: resource.type,
                },
            },
            {
                headers: rateLimitHeaders(rateLimitResult, rateLimitConfigs.resourceDownload),
            }
        );
    } catch (error) {
        console.error('Resource download error:', error);
        return NextResponse.json(
            { success: false, message: 'An error occurred. Please try again.' },
            { status: 500 }
        );
    }
}

// GET endpoint to list available resources
export async function GET() {
    const publicResources = resources.map((r) => ({
        id: r.id,
        title: r.title,
        description: r.description,
        category: r.category,
        type: r.type,
        thumbnailUrl: r.thumbnailUrl,
    }));

    return NextResponse.json({
        success: true,
        resources: publicResources,
    });
}

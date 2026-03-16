import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    const baseUrl = 'https://swarshala.com';

    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: [
                    '/api/',
                    '/admin/',
                    '/_next/',
                    '/private/',
                    '/api/private/',
                    '/dashboard/',
                    '/onboarding/',
                    '/callback/',
                    '/login/',
                    '/signup/',
                    '/forgot-password/',
                ],
            },
            {
                userAgent: 'Googlebot',
                allow: '/',
                disallow: ['/api/', '/admin/', '/private/'],
            },
            {
                userAgent: 'Googlebot-Image',
                allow: ['/images/', '/public/'],
            },
            {
                userAgent: 'GPTBot',
                allow: '/',
            },
            {
                userAgent: 'ChatGPT-User',
                allow: '/',
            },
            {
                userAgent: 'Claude-Web',
                allow: '/',
            },
            {
                userAgent: 'Anthropic-AI',
                allow: '/',
            },
            {
                userAgent: 'Google-Extended',
                allow: '/',
            },
            {
                userAgent: 'Bingbot',
                allow: '/',
                disallow: ['/api/', '/admin/', '/private/'],
            },
            // Block bad bots
            {
                userAgent: 'AhrefsBot',
                disallow: ['/'],
            },
            {
                userAgent: 'SemrushBot',
                disallow: ['/'],
            },
            {
                userAgent: 'MJ12bot',
                disallow: ['/'],
            },
        ],
        sitemap: `${baseUrl}/sitemap.xml`,
        host: baseUrl,
    };
}

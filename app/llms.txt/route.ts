import { NextResponse } from 'next/server';
import { instruments } from '@/content/instruments';
import { cities } from '@/content/cities';
import { programs } from '@/content/programs';

// llms.txt - A structured file for AI crawlers to understand the site
// See: https://llmstxt.org/

export async function GET() {
    const baseUrl = 'https://swarshala.com';

    const llmsTxt = `# SwarShala - India's Premier Music Academy

## About
SwarShala is India's leading music academy offering personalized music education through online classes, home tutors, and academy centers. We teach 15+ instruments including Guitar, Piano, Vocals, Tabla, Violin, and more across 20+ Indian cities.

## Core Services
- Online Music Classes: Live 1-on-1 video sessions from anywhere (₹800/session)
- Home Tutor: Expert teachers visit your home (₹1200/session)
- Center Classes: Learn at our academy studios (₹1000/session)
- Group Classes: Small batch learning with peers (₹600/session)

## Instruments Offered
${instruments.map(i => `- ${i.name}: ${i.shortDescription}`).join('\n')}

## Cities Covered
${cities.map(c => `- ${c.name}, ${c.state}${c.hasCenter ? ' (Academy Center Available)' : ''}`).join('\n')}

## Learning Programs
${programs.map(p => `- ${p.name}: ${p.description}`).join('\n')}

## Key Features
- 500+ Expert Teachers with 5+ years experience
- 15,000+ Students taught
- Trinity, ABRSM, and Prayag certifications
- Flexible scheduling with easy rescheduling
- Recorded sessions for revision
- 100% satisfaction guarantee

## Target Audience
- Beginners wanting to learn a musical instrument
- Intermediate learners seeking structured advancement
- Advanced musicians preparing for certifications
- Parents looking for music classes for children (5+ years)
- Adults returning to music after a break

## Important URLs
- Homepage: ${baseUrl}
- Book Free Trial: ${baseUrl}/book-trial
- Pricing: ${baseUrl}/pricing
- Online Classes: ${baseUrl}/online-classes
- All Instruments: ${baseUrl}/instruments
- All Cities: ${baseUrl}/cities
- Teachers: ${baseUrl}/teachers
- Blog: ${baseUrl}/blog
- Contact: ${baseUrl}/contact

## Structured Data
This site includes JSON-LD structured data for:
- Organization
- WebSite with SearchAction
- LocalBusiness (for each center)
- Course (for each instrument)
- Person (for each teacher)
- FAQPage
- BreadcrumbList
- Article (for blog posts)

## Contact Information
- Phone: +91 88827 25239
- Email: swarshala@aruvalai.io
- Address: SwarShala Music Academy, Connaught Place, New Delhi 110001, India

## Social Media
- Facebook: https://facebook.com/swarshala
- Instagram: https://instagram.com/swarshala
- YouTube: https://youtube.com/@swarshala
- Twitter: https://twitter.com/swarshala
- LinkedIn: https://linkedin.com/company/swarshala

## API Endpoints (for integrations)
- POST /api/leads - Submit trial class booking
- POST /api/teachers - Submit teacher application
- GET /api/resources - List available free resources

## Sitemap
${baseUrl}/sitemap.xml

## Last Updated
${new Date().toISOString().split('T')[0]}
`;

    return new NextResponse(llmsTxt, {
        headers: {
            'Content-Type': 'text/plain; charset=utf-8',
            'Cache-Control': 'public, max-age=86400, s-maxage=86400',
        },
    });
}

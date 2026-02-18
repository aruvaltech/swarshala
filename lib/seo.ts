import { Metadata } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://swarshala.com';
const SITE_NAME = 'SwarShala';
const DEFAULT_DESCRIPTION = 'SwarShala is India\'s premium music academy offering expert instruction in guitar, piano, vocals, violin, tabla & more. Online and offline classes across India. Book a free trial!';

interface SEOConfig {
    title: string;
    description: string;
    path: string;
    image?: string;
    noIndex?: boolean;
    canonical?: string;
    type?: 'website' | 'article' | 'profile';
    publishedTime?: string;
    modifiedTime?: string;
    authors?: string[];
    tags?: string[];
}

export function generateMetadata({
    title,
    description,
    path,
    image,
    noIndex = false,
    canonical,
    type = 'website',
    publishedTime,
    modifiedTime,
    authors,
    tags,
}: SEOConfig): Metadata {
    const url = `${SITE_URL}${path}`;
    const canonicalUrl = canonical ? `${SITE_URL}${canonical}` : url;
    const imageUrl = image ? `${SITE_URL}${image}` : `${SITE_URL}/og-image.png`;

    const metadata: Metadata = {
        title: `${title} | ${SITE_NAME}`,
        description,
        metadataBase: new URL(SITE_URL),
        alternates: {
            canonical: canonicalUrl,
        },
        openGraph: {
            title: `${title} | ${SITE_NAME}`,
            description,
            url,
            siteName: SITE_NAME,
            images: [
                {
                    url: imageUrl,
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
            locale: 'en_IN',
            type: type === 'article' ? 'article' : 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: `${title} | ${SITE_NAME}`,
            description,
            images: [imageUrl],
        },
        robots: {
            index: !noIndex,
            follow: true,
            googleBot: {
                index: !noIndex,
                follow: true,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
    };

    if (type === 'article' && metadata.openGraph) {
        (metadata.openGraph as Record<string, unknown>).publishedTime = publishedTime;
        (metadata.openGraph as Record<string, unknown>).modifiedTime = modifiedTime;
        (metadata.openGraph as Record<string, unknown>).authors = authors;
        (metadata.openGraph as Record<string, unknown>).tags = tags;
    }

    return metadata;
}

export function generateCityMeta(cityName: string, citySlug: string, hasCenter: boolean): Metadata {
    const title = `Music Classes in ${cityName}`;
    const description = `Premium music classes in ${cityName}. Learn guitar, piano, vocals, violin & more ${hasCenter ? 'at our center or ' : ''}with home tutors. Online classes available. Book a free trial!`;

    return generateMetadata({
        title,
        description,
        path: `/cities/${citySlug}`,
        image: `/images/cities/${citySlug}.jpg`,
    });
}

export function generateInstrumentMeta(instrumentName: string, instrumentSlug: string): Metadata {
    const title = `${instrumentName} Classes (Online & Offline)`;
    const description = `Learn ${instrumentName} from expert teachers at SwarShala. Beginner to advanced ${instrumentName.toLowerCase()} classes online and at centers across India. Book a free trial!`;

    return generateMetadata({
        title,
        description,
        path: `/instruments/${instrumentSlug}`,
        image: `/images/instruments/${instrumentSlug}.jpg`,
    });
}

export function generateCourseMeta(
    instrumentName: string,
    instrumentSlug: string,
    level: string
): Metadata {
    const levelCapitalized = level.charAt(0).toUpperCase() + level.slice(1);
    const title = `${levelCapitalized} ${instrumentName} Classes`;
    const description = `${levelCapitalized} ${instrumentName.toLowerCase()} course at SwarShala. Structured curriculum, expert instruction, and proven results. Online and offline. Book a free trial!`;

    return generateMetadata({
        title,
        description,
        path: `/courses/${instrumentSlug}/${level}`,
        image: `/images/courses/${instrumentSlug}-${level}.jpg`,
    });
}

export function generateTeacherMeta(teacherName: string, teacherSlug: string, instruments: string[], city: string): Metadata {
    const title = `${teacherName} - ${instruments[0]} Teacher in ${city}`;
    const description = `Learn ${instruments.join(', ')} from ${teacherName} at SwarShala ${city}. Expert instruction with personalized attention. Book a free trial!`;

    return generateMetadata({
        title,
        description,
        path: `/teachers/${teacherSlug}`,
        type: 'profile',
    });
}

export function generateBlogMeta(
    title: string,
    description: string,
    slug: string,
    date: string,
    author: string,
    tags: string[],
    image?: string
): Metadata {
    return generateMetadata({
        title,
        description,
        path: `/blog/${slug}`,
        image: image || '/images/blog/default.jpg',
        type: 'article',
        publishedTime: date,
        authors: [author],
        tags,
    });
}

export const defaultMetadata: Metadata = {
    title: {
        default: `${SITE_NAME} - Premium Music Academy`,
        template: `%s | ${SITE_NAME}`,
    },
    description: DEFAULT_DESCRIPTION,
    metadataBase: new URL(SITE_URL),
    keywords: [
        'music classes',
        'guitar lessons',
        'piano classes',
        'vocal training',
        'music academy India',
        'online music classes',
        'learn music',
        'music teacher',
        'Hindustani classical',
        'Carnatic music',
        'drums lessons',
        'violin classes',
        'tabla classes',
    ],
    authors: [{ name: SITE_NAME, url: SITE_URL }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    openGraph: {
        title: `${SITE_NAME} - Premium Music Academy`,
        description: DEFAULT_DESCRIPTION,
        url: SITE_URL,
        siteName: SITE_NAME,
        images: [
            {
                url: `${SITE_URL}/images/og-default.jpg`,
                width: 1200,
                height: 630,
                alt: SITE_NAME,
            },
        ],
        locale: 'en_IN',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: `${SITE_NAME} - Premium Music Academy`,
        description: DEFAULT_DESCRIPTION,
        images: [`${SITE_URL}/images/og-default.jpg`],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    verification: {
        // Add verification tokens when available
        // google: 'google-site-verification-token',
        // yandex: 'yandex-verification-token',
    },
};

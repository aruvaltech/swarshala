/**
 * SEO Middleware - Next.js utilities for automated meta tag optimization
 *
 * Provides reusable metadata generation patterns for:
 * - Title tags with proper formatting
 * - Meta descriptions within optimal length
 * - OpenGraph tags for social sharing
 * - Twitter Cards
 * - Canonical tags to prevent duplicate content
 * - Hreflang tags for multi-region support
 */

import { Metadata } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://swarshala.com';
const SITE_NAME = 'SwarShala';

// ── Title Optimization ─────────────────────────────────────────────

const MAX_TITLE_LENGTH = 60;
const MAX_DESCRIPTION_LENGTH = 160;

/**
 * Optimize title tag length. Google typically displays 50-60 characters.
 */
export function optimizeTitle(title: string, suffix = SITE_NAME): string {
    const fullTitle = `${title} | ${suffix}`;
    if (fullTitle.length <= MAX_TITLE_LENGTH) return fullTitle;

    // Trim title to fit within limit with suffix
    const maxTitlePart = MAX_TITLE_LENGTH - suffix.length - 3; // 3 for ' | '
    return `${title.slice(0, maxTitlePart).trim()} | ${suffix}`;
}

/**
 * Optimize meta description length. Google typically displays 150-160 characters.
 */
export function optimizeDescription(description: string): string {
    if (description.length <= MAX_DESCRIPTION_LENGTH) return description;
    return description.slice(0, MAX_DESCRIPTION_LENGTH - 3).trim() + '...';
}

// ── Canonical URL Handling ─────────────────────────────────────────

/**
 * Build a canonical URL, ensuring consistency (no trailing slashes, lowercase).
 */
export function buildCanonicalUrl(path: string): string {
    const normalizedPath = path
        .toLowerCase()
        .replace(/\/+$/, '') // Remove trailing slashes
        .replace(/\/+/g, '/'); // Collapse multiple slashes

    return `${SITE_URL}${normalizedPath || '/'}`;
}

// ── Auto Meta Generator ────────────────────────────────────────────

interface AutoMetaConfig {
    title: string;
    description: string;
    path: string;
    image?: string;
    type?: 'website' | 'article' | 'profile';
    noIndex?: boolean;
    keywords?: string[];
    publishedTime?: string;
    modifiedTime?: string;
    authors?: string[];
    section?: string;
    tags?: string[];
    locale?: string;
    alternateLocales?: string[];
}

/**
 * Generate complete metadata object with optimized fields.
 */
export function autoGenerateMetadata(config: AutoMetaConfig): Metadata {
    const title = optimizeTitle(config.title);
    const description = optimizeDescription(config.description);
    const canonicalUrl = buildCanonicalUrl(config.path);
    const imageUrl = config.image
        ? (config.image.startsWith('http') ? config.image : `${SITE_URL}${config.image}`)
        : `${SITE_URL}/images/og-default.jpg`;
    const locale = config.locale || 'en_IN';

    const metadata: Metadata = {
        title,
        description,
        metadataBase: new URL(SITE_URL),
        alternates: {
            canonical: canonicalUrl,
            ...(config.alternateLocales && {
                languages: Object.fromEntries(
                    config.alternateLocales.map(loc => [loc, `${SITE_URL}/${loc}${config.path}`])
                ),
            }),
        },
        ...(config.keywords && { keywords: config.keywords }),
        openGraph: {
            title,
            description,
            url: canonicalUrl,
            siteName: SITE_NAME,
            images: [
                {
                    url: imageUrl,
                    width: 1200,
                    height: 630,
                    alt: config.title,
                    type: 'image/jpeg',
                },
            ],
            locale,
            type: config.type === 'article' ? 'article' : 'website',
            ...(config.type === 'article' && {
                publishedTime: config.publishedTime,
                modifiedTime: config.modifiedTime,
                authors: config.authors,
                section: config.section,
                tags: config.tags,
            }),
        },
        twitter: {
            card: 'summary_large_image',
            title: optimizeTitle(config.title),
            description: optimizeDescription(config.description),
            images: [imageUrl],
            site: '@swarshala',
            creator: '@swarshala',
        },
        robots: {
            index: !config.noIndex,
            follow: true,
            nocache: false,
            googleBot: {
                index: !config.noIndex,
                follow: true,
                noimageindex: false,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
    };

    return metadata;
}

// ── Template-based Meta Generators ─────────────────────────────────

/**
 * Generate metadata for a city landing page.
 */
export function generateCityLandingMeta(city: string, state: string, slug: string): Metadata {
    return autoGenerateMetadata({
        title: `Music Classes in ${city} - Guitar, Piano, Vocals & More`,
        description: `Best music classes in ${city}, ${state}. Learn guitar, piano, vocals, tabla & more from expert teachers. Online & offline options. Book a free trial at SwarShala!`,
        path: `/music-classes-${slug}`,
        keywords: [
            `music classes in ${city}`,
            `guitar lessons ${city}`,
            `piano classes ${city}`,
            `vocal training ${city}`,
            `music academy ${city}`,
            `learn music ${city}`,
        ],
    });
}

/**
 * Generate metadata for a blog category page.
 */
export function generateBlogCategoryMeta(category: string, categorySlug: string): Metadata {
    return autoGenerateMetadata({
        title: `${category} - Music Blog`,
        description: `Read articles about ${category.toLowerCase()} on the SwarShala music blog. Expert tips, guides, and insights from professional musicians and educators.`,
        path: `/blog/category/${categorySlug}`,
        keywords: [category.toLowerCase(), 'music blog', 'music tips', 'music education'],
    });
}

/**
 * Generate metadata for a blog tag page.
 */
export function generateBlogTagMeta(tag: string, tagSlug: string): Metadata {
    return autoGenerateMetadata({
        title: `Articles tagged "${tag}" - Music Blog`,
        description: `Browse all articles tagged with "${tag}" on the SwarShala music blog. Expert insights and practical tips for music learners.`,
        path: `/blog/tag/${tagSlug}`,
        keywords: [tag.toLowerCase(), 'music articles', 'music education'],
    });
}

/**
 * Generate metadata for comparison pages.
 */
export function generateComparisonMeta(title: string, slug: string, description: string): Metadata {
    return autoGenerateMetadata({
        title,
        description,
        path: `/compare/${slug}`,
        keywords: ['comparison', 'music classes', 'which is better'],
    });
}

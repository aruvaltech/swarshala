import { MetadataRoute } from 'next';
import { instruments } from '@/content/instruments';
import { cities } from '@/content/cities';
import { teachers } from '@/content/teachers';
import { courseLevels } from '@/content/courseLevels';
import { blogPosts, blogCategories } from '@/content/blog';
import { comparisons } from '@/content/comparisons';
import { musicClassesCities } from '@/content/seo-landing-pages';

const baseUrl = 'https://swarshala.com';

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date().toISOString();

    // ── Static pages ────────────────────────────────────────────
    const staticPages: MetadataRoute.Sitemap = [
        { url: baseUrl, lastModified: now, changeFrequency: 'daily', priority: 1 },
        { url: `${baseUrl}/classes`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
        { url: `${baseUrl}/online-classes`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
        { url: `${baseUrl}/offline-classes`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
        { url: `${baseUrl}/instruments`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
        { url: `${baseUrl}/cities`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
        { url: `${baseUrl}/teachers`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${baseUrl}/pricing`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${baseUrl}/book-trial`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
        { url: `${baseUrl}/resources`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
        { url: `${baseUrl}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
        { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
        { url: `${baseUrl}/become-a-teacher`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
        { url: `${baseUrl}/showcase`, lastModified: now, changeFrequency: 'weekly', priority: 0.5 },
        { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: 'daily', priority: 0.7 },
        { url: `${baseUrl}/privacy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
        { url: `${baseUrl}/terms`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
        { url: `${baseUrl}/compare`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    ];

    // ── Instrument pages ────────────────────────────────────────
    const instrumentPages: MetadataRoute.Sitemap = instruments.map((instrument) => ({
        url: `${baseUrl}/instruments/${instrument.slug}`,
        lastModified: now,
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    // ── City pages ──────────────────────────────────────────────
    const cityPages: MetadataRoute.Sitemap = cities.map((city) => ({
        url: `${baseUrl}/cities/${city.slug}`,
        lastModified: now,
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    // ── Center pages (for cities with centers) ──────────────────
    const centerPages: MetadataRoute.Sitemap = cities
        .filter((city) => city.hasCenter)
        .map((city) => ({
            url: `${baseUrl}/centers/${city.slug}`,
            lastModified: now,
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        }));

    // ── Teacher pages ───────────────────────────────────────────
    const teacherPages: MetadataRoute.Sitemap = teachers.map((teacher) => ({
        url: `${baseUrl}/teachers/${teacher.slug}`,
        lastModified: now,
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    // ── Course pages (instrument + level combinations) ──────────
    const coursePages: MetadataRoute.Sitemap = instruments.flatMap((instrument) =>
        courseLevels.map((level) => ({
            url: `${baseUrl}/courses/${instrument.slug}/${level.slug}`,
            lastModified: now,
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        }))
    );

    // ── Comparison pages ────────────────────────────────────────
    const comparisonPages: MetadataRoute.Sitemap = comparisons.map((comparison) => ({
        url: `${baseUrl}/compare/${comparison.slug}`,
        lastModified: now,
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    // ── Blog pages ──────────────────────────────────────────────
    const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: post.updatedAt || post.publishedAt,
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    // ── Blog category pages ─────────────────────────────────────
    const blogCategoryPages: MetadataRoute.Sitemap = blogCategories.map((category) => ({
        url: `${baseUrl}/blog/category/${encodeURIComponent(category.toLowerCase().replace(/\s+/g, '-'))}`,
        lastModified: now,
        changeFrequency: 'weekly' as const,
        priority: 0.5,
    }));

    // ── Blog tag pages ──────────────────────────────────────────
    const allTags = [...new Set(blogPosts.flatMap((p) => p.tags))];
    const blogTagPages: MetadataRoute.Sitemap = allTags.map((tag) => ({
        url: `${baseUrl}/blog/tag/${encodeURIComponent(tag.toLowerCase().replace(/\s+/g, '-'))}`,
        lastModified: now,
        changeFrequency: 'weekly' as const,
        priority: 0.4,
    }));

    // ── Programmatic SEO landing pages ──────────────────────────
    const musicClassesCityPages: MetadataRoute.Sitemap = musicClassesCities.map((city) => ({
        url: `${baseUrl}/music-classes-${city.slug}`,
        lastModified: now,
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }));

    return [
        ...staticPages,
        ...instrumentPages,
        ...cityPages,
        ...centerPages,
        ...teacherPages,
        ...coursePages,
        ...comparisonPages,
        ...blogPages,
        ...blogCategoryPages,
        ...blogTagPages,
        ...musicClassesCityPages,
    ];
}

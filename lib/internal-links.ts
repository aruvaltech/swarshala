/**
 * Internal Linking Automation System
 *
 * Generates contextual internal links between related pages to improve:
 * - Crawl depth and discoverability
 * - PageRank distribution
 * - Topical relevance signals
 * - User engagement (lower bounce rate)
 */

import { instruments } from '@/content/instruments';
import { cities } from '@/content/cities';
import { blogPosts } from '@/content/blog';
import { teachers } from '@/content/teachers';
import { courseLevels } from '@/content/courseLevels';

// ── Types ──────────────────────────────────────────────────────────

export interface InternalLink {
    href: string;
    anchor: string;
    relevance: number; // 0-1 score
    context: 'instrument' | 'city' | 'blog' | 'course' | 'teacher' | 'program';
}

interface LinkNode {
    path: string;
    title: string;
    keywords: string[];
    type: 'page' | 'instrument' | 'city' | 'blog' | 'course' | 'teacher';
}

// ── Link Graph ─────────────────────────────────────────────────────

function buildLinkGraph(): LinkNode[] {
    const nodes: LinkNode[] = [];

    // Static pages
    nodes.push(
        { path: '/', title: 'SwarShala - Premium Music Academy', keywords: ['music classes', 'learn music', 'music academy'], type: 'page' },
        { path: '/classes', title: 'Music Classes', keywords: ['music classes', 'learn music', 'music lessons'], type: 'page' },
        { path: '/online-classes', title: 'Online Music Classes', keywords: ['online music', 'virtual lessons', 'learn music online'], type: 'page' },
        { path: '/offline-classes', title: 'Offline Music Classes', keywords: ['offline classes', 'in-person classes', 'center classes'], type: 'page' },
        { path: '/pricing', title: 'Pricing', keywords: ['pricing', 'fees', 'cost', 'plans'], type: 'page' },
        { path: '/book-trial', title: 'Book Free Trial', keywords: ['free trial', 'book trial', 'demo class'], type: 'page' },
        { path: '/teachers', title: 'Our Teachers', keywords: ['music teachers', 'instructors', 'faculty'], type: 'page' },
        { path: '/blog', title: 'Music Learning Blog', keywords: ['blog', 'articles', 'tips', 'guides'], type: 'page' },
    );

    // Instrument pages
    for (const instrument of instruments) {
        nodes.push({
            path: `/instruments/${instrument.slug}`,
            title: `${instrument.name} Classes`,
            keywords: [instrument.name.toLowerCase(), `${instrument.name.toLowerCase()} classes`, `learn ${instrument.name.toLowerCase()}`],
            type: 'instrument',
        });
    }

    // City pages
    for (const city of cities) {
        nodes.push({
            path: `/cities/${city.slug}`,
            title: `Music Classes in ${city.name}`,
            keywords: [`music classes ${city.name.toLowerCase()}`, city.name.toLowerCase(), ...city.localKeywords.slice(0, 3)],
            type: 'city',
        });
    }

    // Course pages
    for (const instrument of instruments) {
        for (const level of courseLevels) {
            nodes.push({
                path: `/courses/${instrument.slug}/${level.slug}`,
                title: `${level.name} ${instrument.name} Course`,
                keywords: [`${level.slug} ${instrument.name.toLowerCase()}`, `${instrument.name.toLowerCase()} course`],
                type: 'course',
            });
        }
    }

    // Teacher pages
    for (const teacher of teachers) {
        nodes.push({
            path: `/teachers/${teacher.slug}`,
            title: teacher.name,
            keywords: [teacher.name.toLowerCase(), ...teacher.instruments.map(i => i.toLowerCase())],
            type: 'teacher',
        });
    }

    // Blog pages
    for (const post of blogPosts) {
        nodes.push({
            path: `/blog/${post.slug}`,
            title: post.title,
            keywords: post.tags.map(t => t.toLowerCase()),
            type: 'blog',
        });
    }

    return nodes;
}

let _linkGraph: LinkNode[] | null = null;

function getLinkGraph(): LinkNode[] {
    if (!_linkGraph) {
        _linkGraph = buildLinkGraph();
    }
    return _linkGraph;
}

// ── Relevance Scoring ──────────────────────────────────────────────

function computeRelevance(source: string[], target: LinkNode): number {
    const sourceKeywords = new Set(source.map(k => k.toLowerCase()));
    let matches = 0;
    for (const keyword of target.keywords) {
        for (const sk of sourceKeywords) {
            if (keyword.includes(sk) || sk.includes(keyword)) {
                matches++;
                break;
            }
        }
    }
    return Math.min(matches / Math.max(target.keywords.length, 1), 1);
}

// ── Public API ─────────────────────────────────────────────────────

/**
 * Get related internal links for a given page.
 * @param currentPath - The current page path (e.g., '/instruments/guitar')
 * @param keywords - Keywords/tags associated with the current page content
 * @param maxLinks - Maximum number of links to return
 * @param excludeTypes - Node types to exclude from results
 */
export function getRelatedLinks(
    currentPath: string,
    keywords: string[],
    maxLinks = 6,
    excludeTypes: LinkNode['type'][] = [],
): InternalLink[] {
    const graph = getLinkGraph();

    const candidates = graph
        .filter((node) => node.path !== currentPath && !excludeTypes.includes(node.type))
        .map((node) => ({
            node,
            relevance: computeRelevance(keywords, node),
        }))
        .filter(({ relevance }) => relevance > 0)
        .sort((a, b) => b.relevance - a.relevance)
        .slice(0, maxLinks);

    return candidates.map(({ node, relevance }) => ({
        href: node.path,
        anchor: node.title,
        relevance,
        context: node.type === 'page' ? 'program' : node.type,
    }));
}

/**
 * Get contextual links to inject into content (blog posts, descriptions).
 * These are short anchor text links suitable for inline use.
 */
export function getContextualLinks(
    text: string,
    currentPath: string,
    maxLinks = 4,
): InternalLink[] {
    const graph = getLinkGraph();
    const links: InternalLink[] = [];
    const textLower = text.toLowerCase();
    const usedPaths = new Set<string>();

    // Find keyword mentions in text and link to relevant pages
    for (const node of graph) {
        if (node.path === currentPath || usedPaths.has(node.path)) continue;
        if (links.length >= maxLinks) break;

        for (const keyword of node.keywords) {
            if (keyword.length >= 4 && textLower.includes(keyword)) {
                links.push({
                    href: node.path,
                    anchor: node.title,
                    relevance: 0.8,
                    context: node.type === 'page' ? 'program' : node.type,
                });
                usedPaths.add(node.path);
                break;
            }
        }
    }

    return links;
}

/**
 * Get related blog posts for a product/service page.
 */
export function getRelatedBlogLinks(keywords: string[], maxLinks = 3): InternalLink[] {
    return getRelatedLinks('', keywords, maxLinks, ['page', 'city', 'course', 'teacher', 'instrument']);
}

/**
 * Get related product pages for a blog post.
 */
export function getRelatedProductLinks(keywords: string[], maxLinks = 4): InternalLink[] {
    return getRelatedLinks('', keywords, maxLinks, ['blog']);
}

/**
 * Get breadcrumb-style navigation links for a given path.
 */
export function getBreadcrumbLinks(path: string): { name: string; href: string }[] {
    const segments = path.split('/').filter(Boolean);
    const crumbs: { name: string; href: string }[] = [{ name: 'Home', href: '/' }];

    const labels: Record<string, string> = {
        instruments: 'Instruments',
        cities: 'Cities',
        courses: 'Courses',
        teachers: 'Teachers',
        blog: 'Blog',
        compare: 'Compare',
        resources: 'Resources',
        pricing: 'Pricing',
        classes: 'Classes',
        'online-classes': 'Online Classes',
        'offline-classes': 'Offline Classes',
    };

    let currentPath = '';
    for (const segment of segments) {
        currentPath += `/${segment}`;
        const label = labels[segment] || segment
            .split('-')
            .map(w => w.charAt(0).toUpperCase() + w.slice(1))
            .join(' ');
        crumbs.push({ name: label, href: currentPath });
    }

    return crumbs;
}

/**
 * Get instrument cross-links for an instrument page (related instruments).
 */
export function getRelatedInstrumentLinks(currentSlug: string, maxLinks = 4): InternalLink[] {
    const current = instruments.find(i => i.slug === currentSlug);
    if (!current) return [];

    return instruments
        .filter(i => i.slug !== currentSlug)
        .slice(0, maxLinks)
        .map(i => ({
            href: `/instruments/${i.slug}`,
            anchor: `${i.name} Classes`,
            relevance: 0.7,
            context: 'instrument' as const,
        }));
}

/**
 * Get city cross-links for a city page (nearby/related cities).
 */
export function getRelatedCityLinks(currentSlug: string, maxLinks = 4): InternalLink[] {
    return cities
        .filter(c => c.slug !== currentSlug)
        .slice(0, maxLinks)
        .map(c => ({
            href: `/cities/${c.slug}`,
            anchor: `Music Classes in ${c.name}`,
            relevance: 0.6,
            context: 'city' as const,
        }));
}

/**
 * Get teacher links teaching a specific instrument.
 */
export function getTeachersForInstrument(instrumentName: string, maxLinks = 3): InternalLink[] {
    return teachers
        .filter(t => t.instruments.some(i => i.toLowerCase() === instrumentName.toLowerCase()))
        .slice(0, maxLinks)
        .map(t => ({
            href: `/teachers/${t.slug}`,
            anchor: `${t.name} - ${instrumentName} Teacher`,
            relevance: 0.8,
            context: 'teacher' as const,
        }));
}

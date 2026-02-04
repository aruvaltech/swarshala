import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merge Tailwind CSS classes with clsx
 */
export function cn(...inputs: ClassValue[]): string {
    return twMerge(clsx(inputs));
}

/**
 * Format phone number for display
 */
export function formatPhone(phone: string): string {
    // Remove all non-digits
    const digits = phone.replace(/\D/g, '');

    // Indian phone number format
    if (digits.length === 10) {
        return `+91 ${digits.slice(0, 5)} ${digits.slice(5)}`;
    }
    if (digits.length === 12 && digits.startsWith('91')) {
        return `+91 ${digits.slice(2, 7)} ${digits.slice(7)}`;
    }

    return phone;
}

/**
 * Format price in INR
 */
export function formatPrice(price: number): string {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0,
    }).format(price);
}

/**
 * Format date for display
 */
export function formatDate(date: string | Date): string {
    return new Intl.DateTimeFormat('en-IN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }).format(new Date(date));
}

/**
 * Format date for schema.org
 */
export function formatDateISO(date: string | Date): string {
    return new Date(date).toISOString();
}

/**
 * Generate a URL-friendly slug
 */
export function slugify(text: string): string {
    return text
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_-]+/g, '-')
        .replace(/^-+|-+$/g, '');
}

/**
 * Capitalize first letter of each word
 */
export function titleCase(text: string): string {
    return text
        .toLowerCase()
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

/**
 * Truncate text with ellipsis
 */
export function truncate(text: string, length: number): string {
    if (text.length <= length) return text;
    return text.slice(0, length).trim() + '...';
}

/**
 * Strip HTML tags from string
 */
export function stripHtml(html: string): string {
    return html.replace(/<[^>]*>/g, '');
}

/**
 * Calculate reading time for text
 */
export function readingTime(text: string, wordsPerMinute = 200): number {
    const words = text.trim().split(/\s+/).length;
    return Math.ceil(words / wordsPerMinute);
}

/**
 * Generate breadcrumb items from path
 */
export function generateBreadcrumbs(
    path: string,
    labels?: Record<string, string>
): Array<{ name: string; href: string }> {
    const segments = path.split('/').filter(Boolean);
    const breadcrumbs: Array<{ name: string; href: string }> = [
        { name: 'Home', href: '/' },
    ];

    let currentPath = '';
    for (const segment of segments) {
        currentPath += `/${segment}`;
        const name = labels?.[segment] || titleCase(segment.replace(/-/g, ' '));
        breadcrumbs.push({ name, href: currentPath });
    }

    return breadcrumbs;
}

/**
 * Debounce function
 */
export function debounce<T extends (...args: Parameters<T>) => ReturnType<T>>(
    func: T,
    wait: number
): (...args: Parameters<T>) => void {
    let timeout: NodeJS.Timeout | null = null;

    return (...args: Parameters<T>) => {
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), wait);
    };
}

/**
 * Generate a random ID
 */
export function generateId(length = 8): string {
    return Math.random()
        .toString(36)
        .substring(2, length + 2);
}

/**
 * Check if running on server
 */
export function isServer(): boolean {
    return typeof window === 'undefined';
}

/**
 * Get base URL for the site
 */
export function getBaseUrl(): string {
    if (process.env.NEXT_PUBLIC_SITE_URL) {
        return process.env.NEXT_PUBLIC_SITE_URL;
    }
    if (process.env.VERCEL_URL) {
        return `https://${process.env.VERCEL_URL}`;
    }
    return 'https://swarshala.com';
}

/**
 * Build full URL from path
 */
export function buildUrl(path: string): string {
    const base = getBaseUrl();
    return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}

/**
 * Extract YouTube video ID from URL
 */
export function getYouTubeId(url: string): string | null {
    const match = url.match(
        /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/
    );
    return match ? match[1] : null;
}

/**
 * Check if email is valid
 */
export function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Check if phone is valid Indian number
 */
export function isValidIndianPhone(phone: string): boolean {
    const digits = phone.replace(/\D/g, '');
    // 10 digits or 12 digits starting with 91
    return (
        digits.length === 10 ||
        (digits.length === 12 && digits.startsWith('91'))
    );
}

/**
 * Shuffle array (Fisher-Yates)
 */
export function shuffle<T>(array: T[]): T[] {
    const result = [...array];
    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
}

/**
 * Pick random items from array
 */
export function pickRandom<T>(array: T[], count: number): T[] {
    return shuffle(array).slice(0, count);
}

/**
 * Group array by key
 */
export function groupBy<T, K extends keyof T>(
    array: T[],
    key: K
): Record<string, T[]> {
    return array.reduce(
        (result, item) => {
            const groupKey = String(item[key]);
            if (!result[groupKey]) {
                result[groupKey] = [];
            }
            result[groupKey].push(item);
            return result;
        },
        {} as Record<string, T[]>
    );
}

/**
 * Sort by multiple keys
 */
export function sortBy<T>(
    array: T[],
    ...keys: Array<keyof T | ((item: T) => number | string)>
): T[] {
    return [...array].sort((a, b) => {
        for (const key of keys) {
            const aVal = typeof key === 'function' ? key(a) : a[key];
            const bVal = typeof key === 'function' ? key(b) : b[key];

            if (aVal < bVal) return -1;
            if (aVal > bVal) return 1;
        }
        return 0;
    });
}

/**
 * Delay execution
 */
export function delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Safe JSON parse
 */
export function safeJsonParse<T>(json: string, fallback: T): T {
    try {
        return JSON.parse(json);
    } catch {
        return fallback;
    }
}

/**
 * Get initials from name
 */
export function getInitials(name: string): string {
    return name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2);
}

/**
 * Constants for the site
 */
export const SITE_NAME = 'SwarShala';
export const SITE_URL = 'https://swarshala.com';
export const SITE_TAGLINE = 'India\'s Premier Music Academy';
export const SITE_DESCRIPTION =
    'Learn music from expert teachers. Piano, Guitar, Vocals, Tabla & more. Online classes, home tutors & academy centers across India.';
export const CONTACT_PHONE = '+91 88827 25239';
export const CONTACT_EMAIL = 'swarshala@aruvalai.io';
export const CONTACT_ADDRESS = 'SwarShala Music Academy, Connaught Place, New Delhi 110001, India';

/**
 * Social media links
 */
export const SOCIAL_LINKS = {
    facebook: 'https://facebook.com/swarshala',
    instagram: 'https://instagram.com/swarshala',
    youtube: 'https://youtube.com/@swarshala',
    twitter: 'https://twitter.com/swarshala',
    linkedin: 'https://linkedin.com/company/swarshala',
} as const;

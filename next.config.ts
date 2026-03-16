import type { NextConfig } from 'next';
import createMDX from '@next/mdx';

const nextConfig: NextConfig = {
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
        ],
        formats: ['image/avif', 'image/webp'],
        // Performance: enable image size optimization
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    },
    experimental: {
        mdxRs: true,
    },
    // Performance: Compress responses
    compress: true,
    // Performance: Enable strict mode for better error detection
    reactStrictMode: true,
    // Performance: Optimize package imports
    modularizeImports: {
        'lucide-react': {
            transform: 'lucide-react/dist/esm/icons/{{member}}',
        },
    },
    // SEO: Custom headers for caching and security
    async headers() {
        return [
            {
                // Cache static assets aggressively
                source: '/images/:path*',
                headers: [
                    { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
                ],
            },
            {
                // Cache fonts
                source: '/fonts/:path*',
                headers: [
                    { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
                ],
            },
            {
                // Cache sitemap for 1 hour
                source: '/sitemap.xml',
                headers: [
                    { key: 'Cache-Control', value: 'public, max-age=3600, s-maxage=3600' },
                ],
            },
            {
                // Security and performance headers for all pages
                source: '/:path*',
                headers: [
                    { key: 'X-DNS-Prefetch-Control', value: 'on' },
                    { key: 'X-Content-Type-Options', value: 'nosniff' },
                    { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
                    { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
                ],
            },
        ];
    },
    // SEO: Redirects for legacy or alternate URLs
    async redirects() {
        return [
            // Redirect common alternate patterns to canonical URLs
            {
                source: '/music-classes',
                destination: '/classes',
                permanent: true,
            },
            {
                source: '/online-music-classes',
                destination: '/online-classes',
                permanent: true,
            },
            {
                source: '/offline-music-classes',
                destination: '/offline-classes',
                permanent: true,
            },
            {
                source: '/courses',
                destination: '/instruments',
                permanent: false,
            },
        ];
    },
};

const withMDX = createMDX({
    options: {
        remarkPlugins: [],
        rehypePlugins: [],
    },
});

export default withMDX(nextConfig);

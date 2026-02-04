// Simple in-memory rate limiter for API routes
// In production, use Redis or similar for distributed rate limiting

interface RateLimitEntry {
    count: number;
    resetTime: number;
}

const rateLimitStore = new Map<string, RateLimitEntry>();

// Clean up expired entries periodically
setInterval(() => {
    const now = Date.now();
    for (const [key, entry] of rateLimitStore.entries()) {
        if (now > entry.resetTime) {
            rateLimitStore.delete(key);
        }
    }
}, 60000); // Clean up every minute

export interface RateLimitConfig {
    // Maximum number of requests allowed
    limit: number;
    // Time window in milliseconds
    windowMs: number;
}

export interface RateLimitResult {
    success: boolean;
    remaining: number;
    resetIn: number;
}

// Default configs for different endpoints
export const rateLimitConfigs = {
    // Lead form submissions - 5 per hour per IP
    leadForm: { limit: 5, windowMs: 60 * 60 * 1000 },
    // Teacher applications - 3 per day per IP
    teacherForm: { limit: 3, windowMs: 24 * 60 * 60 * 1000 },
    // Resource downloads - 10 per hour per IP
    resourceDownload: { limit: 10, windowMs: 60 * 60 * 1000 },
    // Contact form - 5 per hour per IP
    contactForm: { limit: 5, windowMs: 60 * 60 * 1000 },
    // General API - 100 per minute per IP
    general: { limit: 100, windowMs: 60 * 1000 },
} as const;

/**
 * Check if a request should be rate limited
 * @param identifier - Unique identifier (usually IP address)
 * @param endpoint - The endpoint being accessed (for namespacing)
 * @param config - Rate limit configuration
 */
export function checkRateLimit(
    identifier: string,
    endpoint: string,
    config: RateLimitConfig
): RateLimitResult {
    const key = `${endpoint}:${identifier}`;
    const now = Date.now();

    const entry = rateLimitStore.get(key);

    // No existing entry, create new one
    if (!entry) {
        rateLimitStore.set(key, {
            count: 1,
            resetTime: now + config.windowMs,
        });
        return {
            success: true,
            remaining: config.limit - 1,
            resetIn: config.windowMs,
        };
    }

    // Entry expired, reset it
    if (now > entry.resetTime) {
        rateLimitStore.set(key, {
            count: 1,
            resetTime: now + config.windowMs,
        });
        return {
            success: true,
            remaining: config.limit - 1,
            resetIn: config.windowMs,
        };
    }

    // Entry still valid
    const remaining = config.limit - entry.count - 1;
    const resetIn = entry.resetTime - now;

    // Rate limit exceeded
    if (entry.count >= config.limit) {
        return {
            success: false,
            remaining: 0,
            resetIn,
        };
    }

    // Increment count
    entry.count++;

    return {
        success: true,
        remaining: Math.max(0, remaining),
        resetIn,
    };
}

/**
 * Get client IP from request headers
 * Works with common reverse proxies and CDNs
 */
export function getClientIP(headers: Headers): string {
    // Check various headers in order of preference
    const forwardedFor = headers.get('x-forwarded-for');
    if (forwardedFor) {
        // Get the first IP in the chain (original client)
        return forwardedFor.split(',')[0].trim();
    }

    const realIP = headers.get('x-real-ip');
    if (realIP) {
        return realIP.trim();
    }

    const cfConnectingIP = headers.get('cf-connecting-ip');
    if (cfConnectingIP) {
        return cfConnectingIP.trim();
    }

    // Fallback for development
    return '127.0.0.1';
}

/**
 * Create rate limit headers for response
 */
export function rateLimitHeaders(result: RateLimitResult, config: RateLimitConfig): HeadersInit {
    return {
        'X-RateLimit-Limit': config.limit.toString(),
        'X-RateLimit-Remaining': result.remaining.toString(),
        'X-RateLimit-Reset': Math.ceil(result.resetIn / 1000).toString(),
    };
}

/**
 * Higher-order function to apply rate limiting to API handlers
 */
export function withRateLimit(
    endpoint: keyof typeof rateLimitConfigs,
    handler: (request: Request) => Promise<Response>
): (request: Request) => Promise<Response> {
    return async (request: Request): Promise<Response> => {
        const config = rateLimitConfigs[endpoint];
        const ip = getClientIP(request.headers);
        const result = checkRateLimit(ip, endpoint, config);

        if (!result.success) {
            return new Response(
                JSON.stringify({
                    error: 'Too many requests',
                    message: `Rate limit exceeded. Please try again in ${Math.ceil(result.resetIn / 1000)} seconds.`,
                }),
                {
                    status: 429,
                    headers: {
                        'Content-Type': 'application/json',
                        ...rateLimitHeaders(result, config),
                    },
                }
            );
        }

        const response = await handler(request);

        // Add rate limit headers to successful response
        const newHeaders = new Headers(response.headers);
        Object.entries(rateLimitHeaders(result, config)).forEach(([key, value]) => {
            newHeaders.set(key, value as string);
        });

        return new Response(response.body, {
            status: response.status,
            statusText: response.statusText,
            headers: newHeaders,
        });
    };
}

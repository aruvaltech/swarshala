/**
 * Google Analytics 4 (GA4) Integration
 * Shared measurement ID: G-VF9DN91PY6 (Aruvalai cross-platform property)
 *
 * This module provides type-safe GA4 event tracking for SwarShala.
 * All methods are SSR-safe and only execute on the client side.
 */

// Extend Window interface for gtag
declare global {
    interface Window {
        gtag: (
            command: 'config' | 'event' | 'js' | 'set',
            targetId: string | Date,
            config?: GtagConfig | GtagEventParams
        ) => void;
        dataLayer: unknown[];
    }
}

// GA4 Configuration options
interface GtagConfig {
    page_path?: string;
    page_title?: string;
    page_location?: string;
    send_page_view?: boolean;
    user_id?: string;
    [key: string]: unknown;
}

// Event parameters interface
interface GtagEventParams {
    event_category?: string;
    event_label?: string;
    value?: number;
    currency?: string;
    items?: unknown[];
    [key: string]: unknown;
}

// Standard event parameters for tracking
export interface EventParams {
    action: string;
    category: string;
    label?: string;
    value?: number;
}

// SwarShala-specific event types
export type SwarShalaEventAction =
    | 'trial_booking'
    | 'teacher_signup'
    | 'whatsapp_click'
    | 'payment_initiated'
    | 'lead_magnet_download'
    | 'form_start'
    | 'form_submit'
    | 'cta_click'
    | 'outbound_link'
    | 'video_play'
    | 'scroll_depth';

export type SwarShalaEventCategory =
    | 'conversion'
    | 'engagement'
    | 'ecommerce'
    | 'lead'
    | 'navigation'
    | 'content';

// GA Measurement ID from environment variable
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-VF9DN91PY6';

/**
 * Check if GA is available (client-side only)
 */
const isGtagAvailable = (): boolean => {
    return typeof window !== 'undefined' && typeof window.gtag === 'function';
};

/**
 * Track page views
 * Called automatically on route changes via Analytics component
 *
 * @param url - The page path to track
 * @param title - Optional page title
 */
export const pageview = (url: string, title?: string): void => {
    if (!isGtagAvailable()) return;

    window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: url,
        page_title: title,
        page_location: window.location.href,
    });
};

/**
 * Track custom events
 *
 * @param params - Event parameters including action, category, label, and value
 *
 * @example
 * event({
 *   action: 'trial_booking',
 *   category: 'conversion',
 *   label: 'Guitar - Delhi'
 * })
 */
export const event = ({ action, category, label, value }: EventParams): void => {
    if (!isGtagAvailable()) return;

    window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
    });
};

// ═══════════════════════════════════════════════════════════════════════════
// SWARSHALA STANDARD EVENTS
// ═══════════════════════════════════════════════════════════════════════════

/**
 * Track trial class booking
 * Use when user submits the book-trial form
 *
 * @param instrument - Selected instrument (e.g., 'Guitar', 'Piano')
 * @param city - Selected city (e.g., 'Delhi', 'Mumbai')
 * @param mode - Class mode (e.g., 'online', 'offline', 'home-tutor')
 */
export const trackTrialBooking = (
    instrument: string,
    city: string,
    mode?: string
): void => {
    event({
        action: 'trial_booking',
        category: 'conversion',
        label: `${instrument} - ${city}${mode ? ` (${mode})` : ''}`,
        value: 1,
    });
};

/**
 * Track teacher signup/application
 * Use when a teacher submits the become-a-teacher form
 *
 * @param instrument - Teacher's primary instrument
 * @param city - Teacher's city
 */
export const trackTeacherSignup = (instrument?: string, city?: string): void => {
    event({
        action: 'teacher_signup',
        category: 'conversion',
        label: instrument && city ? `${instrument} - ${city}` : undefined,
        value: 1,
    });
};

/**
 * Track WhatsApp button clicks
 * Use for any WhatsApp CTA interactions
 *
 * @param context - Where the click occurred (e.g., 'header', 'footer', 'pricing')
 */
export const trackWhatsAppClick = (context?: string): void => {
    event({
        action: 'whatsapp_click',
        category: 'engagement',
        label: context,
    });
};

/**
 * Track payment initiation
 * Use when user starts the payment flow
 *
 * @param plan - Selected plan name
 * @param amount - Payment amount in INR
 */
export const trackPaymentInitiated = (plan: string, amount?: number): void => {
    event({
        action: 'payment_initiated',
        category: 'ecommerce',
        label: plan,
        value: amount,
    });
};

/**
 * Track lead magnet/resource downloads
 * Use when user downloads free resources
 *
 * @param resourceName - Name of the downloaded resource
 * @param resourceType - Type (e.g., 'pdf', 'video', 'checklist')
 */
export const trackLeadMagnetDownload = (
    resourceName: string,
    resourceType?: string
): void => {
    event({
        action: 'lead_magnet_download',
        category: 'lead',
        label: resourceType ? `${resourceName} (${resourceType})` : resourceName,
    });
};

/**
 * Track CTA button clicks
 * Use for important call-to-action buttons
 *
 * @param ctaName - Name/text of the CTA
 * @param location - Page or section where CTA is located
 */
export const trackCTAClick = (ctaName: string, location?: string): void => {
    event({
        action: 'cta_click',
        category: 'engagement',
        label: location ? `${ctaName} - ${location}` : ctaName,
    });
};

/**
 * Track form interactions
 * Use for form start and submission tracking
 *
 * @param formName - Name of the form
 * @param action - 'start' or 'submit'
 */
export const trackFormInteraction = (
    formName: string,
    formAction: 'start' | 'submit'
): void => {
    event({
        action: formAction === 'start' ? 'form_start' : 'form_submit',
        category: formAction === 'submit' ? 'conversion' : 'engagement',
        label: formName,
    });
};

/**
 * Track outbound link clicks
 * Use for external links
 *
 * @param url - External URL clicked
 * @param linkText - Text of the link
 */
export const trackOutboundLink = (url: string, linkText?: string): void => {
    event({
        action: 'outbound_link',
        category: 'navigation',
        label: linkText ? `${linkText}: ${url}` : url,
    });
};

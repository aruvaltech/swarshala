"use client";

import { useEffect, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { pageview, GA_MEASUREMENT_ID } from "@/lib/gtag";

/**
 * Analytics component for tracking page views on route changes
 *
 * This component uses Next.js navigation hooks to detect route changes
 * and sends pageview events to Google Analytics 4.
 *
 * Must be rendered inside <body> as a client component.
 */
function AnalyticsTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Only track if GA ID is configured
    if (!GA_MEASUREMENT_ID) return;

    // Construct full URL with search params
    const url = searchParams?.toString()
      ? `${pathname}?${searchParams.toString()}`
      : pathname;

    // Track pageview
    pageview(url);
  }, [pathname, searchParams]);

  return null;
}

/**
 * Analytics wrapper with Suspense boundary
 *
 * useSearchParams() requires a Suspense boundary in Next.js 13+
 */
export default function Analytics() {
  return (
    <Suspense fallback={null}>
      <AnalyticsTracker />
    </Suspense>
  );
}

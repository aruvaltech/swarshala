"use client";

import { useEffect } from "react";
import { Section, LinkButton } from "@/components/ui";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <Section className="min-h-[60vh] flex items-center">
      <div className="text-center max-w-2xl mx-auto">
        <div className="text-8xl mb-6">😕</div>
        <h1 className="text-4xl font-bold font-serif text-midnight mb-4">
          Something Went Wrong
        </h1>
        <p className="text-xl text-text-secondary mb-8">
          We apologize for the inconvenience. Our team has been notified and is
          working on a fix.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="px-6 py-3 bg-gold text-white font-semibold rounded-lg hover:bg-gold-dark transition-colors"
          >
            Try Again
          </button>
          <LinkButton href="/" variant="outline" size="lg">
            Go to Homepage
          </LinkButton>
        </div>
        {error.digest && (
          <p className="mt-8 text-sm text-text-muted">
            Error ID: {error.digest}
          </p>
        )}
      </div>
    </Section>
  );
}

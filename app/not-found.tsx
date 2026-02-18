import Link from "next/link";
import { Section, LinkButton } from "@/components/ui";
import { LogoIconGold } from "@/components/Logo";

export default function NotFound() {
  return (
    <Section className="min-h-[60vh] flex items-center">
      <div className="text-center max-w-2xl mx-auto">
        <div className="mb-6 flex justify-center">
          <LogoIconGold size="lg" className="opacity-50" />
        </div>
        <h1 className="text-4xl font-bold font-serif text-midnight mb-4">
          Page Not Found
        </h1>
        <p className="text-xl text-text-secondary mb-8">
          Oops! The page you're looking for seems to have hit a wrong note.
          Let's get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <LinkButton href="/" variant="primary" size="lg">
            Go to Homepage
          </LinkButton>
          <LinkButton href="/instruments" variant="outline" size="lg">
            Explore Instruments
          </LinkButton>
        </div>

        {/* Helpful Links */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-text-muted mb-4">Popular Pages</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/book-trial" className="text-gold hover:underline">
              Book Free Trial
            </Link>
            <span className="text-border">•</span>
            <Link href="/classes" className="text-gold hover:underline">
              Our Classes
            </Link>
            <span className="text-border">•</span>
            <Link href="/teachers" className="text-gold hover:underline">
              Meet Teachers
            </Link>
            <span className="text-border">•</span>
            <Link href="/pricing" className="text-gold hover:underline">
              Pricing
            </Link>
            <span className="text-border">•</span>
            <Link href="/contact" className="text-gold hover:underline">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}

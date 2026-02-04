import type { Metadata } from "next";
import Link from "next/link";
import {
  PageHeader,
  Section,
  Card,
  LinkButton,
  Breadcrumbs,
} from "@/components/ui";
import { comparisons } from "@/content/comparisons";

export const metadata: Metadata = {
  title: "Compare Music Learning Options - Make the Right Choice | SwarShala",
  description:
    "Compare different music learning options: online vs offline, 1:1 vs group, home tutor vs center. Expert analysis to help you choose the best option.",
  alternates: {
    canonical: "https://swarshala.com/compare",
  },
};

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Compare Options", href: "/compare" },
];

export default function ComparePage() {
  return (
    <>
      <PageHeader
        title="Compare Music Learning Options"
        subtitle="Not sure which option is best for you? Our detailed comparisons help you make an informed decision."
        breadcrumbs={<Breadcrumbs items={breadcrumbs} />}
      />

      <Section>
        <div className="grid md:grid-cols-3 gap-8">
          {comparisons.map((comparison) => (
            <Link key={comparison.slug} href={`/compare/${comparison.slug}`}>
              <Card
                padding="lg"
                className="h-full hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">⚖️</span>
                  <h2 className="text-xl font-bold text-midnight">
                    {comparison.title}
                  </h2>
                </div>
                <p className="text-text-secondary mb-6">
                  {comparison.intro.slice(0, 150)}...
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2 text-sm">
                    <span className="text-gold">✓</span>
                    <span className="text-text-secondary">
                      {comparison.optionA.name} vs {comparison.optionB.name}
                    </span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <span className="text-gold">✓</span>
                    <span className="text-text-secondary">
                      Pros & Cons Comparison
                    </span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <span className="text-gold">✓</span>
                    <span className="text-text-secondary">
                      Expert Recommendations
                    </span>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-border">
                  <span className="text-gold font-medium text-sm">
                    Read Full Comparison →
                  </span>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </Section>

      {/* Quick Decision Helper */}
      <Section background="muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold font-serif text-midnight mb-8 text-center">
            Quick Decision Guide
          </h2>
          <Card padding="lg">
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row gap-4 items-start md:items-center p-4 bg-surface-alt rounded-lg">
                <div className="text-3xl">🎯</div>
                <div className="flex-1">
                  <p className="font-medium text-midnight">
                    I want maximum convenience and flexibility
                  </p>
                  <p className="text-sm text-text-secondary mt-1">
                    Consider: Online classes with 1:1 sessions
                  </p>
                </div>
                <LinkButton href="/online-classes" variant="outline" size="sm">
                  Learn More
                </LinkButton>
              </div>

              <div className="flex flex-col md:flex-row gap-4 items-start md:items-center p-4 bg-surface-alt rounded-lg">
                <div className="text-3xl">💰</div>
                <div className="flex-1">
                  <p className="font-medium text-midnight">
                    I'm on a budget but want quality
                  </p>
                  <p className="text-sm text-text-secondary mt-1">
                    Consider: Online group classes at our centers
                  </p>
                </div>
                <LinkButton href="/pricing" variant="outline" size="sm">
                  View Pricing
                </LinkButton>
              </div>

              <div className="flex flex-col md:flex-row gap-4 items-start md:items-center p-4 bg-surface-alt rounded-lg">
                <div className="text-3xl">🎓</div>
                <div className="flex-1">
                  <p className="font-medium text-midnight">
                    I'm preparing for exams or competitions
                  </p>
                  <p className="text-sm text-text-secondary mt-1">
                    Consider: 1:1 offline classes with exam-specialized teachers
                  </p>
                </div>
                <LinkButton href="/offline-classes" variant="outline" size="sm">
                  Explore
                </LinkButton>
              </div>

              <div className="flex flex-col md:flex-row gap-4 items-start md:items-center p-4 bg-surface-alt rounded-lg">
                <div className="text-3xl">👶</div>
                <div className="flex-1">
                  <p className="font-medium text-midnight">
                    I'm enrolling my young child (5-10 years)
                  </p>
                  <p className="text-sm text-text-secondary mt-1">
                    Consider: Offline group classes for social learning
                  </p>
                </div>
                <LinkButton href="/cities" variant="outline" size="sm">
                  Find Center
                </LinkButton>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* Still confused CTA */}
      <Section>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold font-serif text-midnight mb-4">
            Still Not Sure?
          </h2>
          <p className="text-text-secondary mb-6">
            Talk to our learning advisors who can recommend the best option
            based on your goals, schedule, and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <LinkButton href="/book-trial" variant="primary">
              Book Free Trial
            </LinkButton>
            <LinkButton href="/contact" variant="outline">
              Talk to an Advisor
            </LinkButton>
          </div>
        </div>
      </Section>
    </>
  );
}

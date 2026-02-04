import type { Metadata } from "next";
import {
  PageHeader,
  Section,
  Card,
  LinkButton,
  Breadcrumbs,
} from "@/components/ui";
import { resources } from "@/content/resources";

export const metadata: Metadata = {
  title:
    "Free Music Learning Resources - Guides, PDFs & Worksheets | SwarShala",
  description:
    "Download free music learning resources: beginner guides, practice worksheets, chord charts, scale diagrams, and lesson plans. Expert-curated by SwarShala teachers.",
  alternates: {
    canonical: "https://swarshala.com/resources",
  },
};

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Resources", href: "/resources" },
];

const categoryIcons: Record<string, string> = {
  "Beginner Guides": "📚",
  "Practice Materials": "📝",
  "Sheet Music": "🎼",
  "Video Tutorials": "🎬",
  "Lesson Plans": "📋",
};

// Group resources by category
const resourcesByCategory = resources.reduce(
  (acc, resource) => {
    if (!acc[resource.category]) {
      acc[resource.category] = [];
    }
    acc[resource.category].push(resource);
    return acc;
  },
  {} as Record<string, typeof resources>,
);

export default function ResourcesPage() {
  return (
    <>
      <PageHeader
        title="Free Music Learning Resources"
        subtitle="Expert-curated guides, worksheets, and materials to accelerate your musical journey"
        breadcrumbs={<Breadcrumbs items={breadcrumbs} />}
      />

      {/* Stats */}
      <Section>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-4xl font-bold text-gold">
              {resources.length}+
            </div>
            <div className="text-text-secondary mt-1">Free Resources</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-gold">50,000+</div>
            <div className="text-text-secondary mt-1">Downloads</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-gold">15+</div>
            <div className="text-text-secondary mt-1">Instruments</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-gold">100%</div>
            <div className="text-text-secondary mt-1">Free Forever</div>
          </div>
        </div>
      </Section>

      {/* Resources by Category */}
      {Object.entries(resourcesByCategory).map(([category, items]) => (
        <Section
          key={category}
          background={category === "Practice Materials" ? "muted" : "white"}
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="text-3xl">{categoryIcons[category] || "📄"}</span>
            <h2 className="text-2xl font-bold font-serif text-midnight">
              {category}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((resource) => (
              <Card key={resource.id} padding="lg" className="flex flex-col">
                <div className="flex items-start gap-3 mb-4">
                  <span className="text-2xl">
                    {resource.type === "pdf"
                      ? "📄"
                      : resource.type === "video"
                        ? "🎬"
                        : resource.type === "guide"
                          ? "📖"
                          : "✅"}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-semibold text-midnight">
                      {resource.title}
                    </h3>
                    <p className="text-sm text-text-muted mt-1">
                      {resource.instrument || "All"} • {resource.level || "all"}
                    </p>
                  </div>
                </div>
                <p className="text-text-secondary text-sm flex-1 mb-4">
                  {resource.description}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-xs text-text-muted uppercase tracking-wide">
                    {resource.type}{" "}
                    {resource.pages ? `• ${resource.pages} pages` : ""}{" "}
                    {resource.duration ? `• ${resource.duration}` : ""}
                  </span>
                  <span className="text-green-600 font-medium text-sm">
                    Free
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </Section>
      ))}

      {/* Email Gate CTA */}
      <Section background="dark">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold font-serif mb-4">
            Get Access to All Resources
          </h2>
          <p className="text-gray-300 mb-8">
            Enter your email to download any resource instantly. We'll also send
            you weekly tips and new resources.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-midnight focus:outline-none focus:ring-2 focus:ring-gold"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-gold text-white font-semibold rounded-lg hover:bg-gold-dark transition-colors whitespace-nowrap"
            >
              Get Access
            </button>
          </form>
          <p className="text-sm text-gray-400 mt-4">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </Section>

      {/* Request Resource */}
      <Section>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold font-serif text-midnight mb-4">
            Can't Find What You Need?
          </h2>
          <p className="text-text-secondary mb-6">
            Request a specific resource and our expert teachers will create it
            for you. Popular requests are added to our library.
          </p>
          <LinkButton href="/contact" variant="outline">
            Request a Resource
          </LinkButton>
        </div>
      </Section>

      {/* Premium Resources */}
      <Section background="muted">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold font-serif text-midnight mb-4">
              Want More?
            </h2>
            <p className="text-text-secondary">
              Our students get access to exclusive premium resources as part of
              their course
            </p>
          </div>
          <Card padding="lg">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-2">🎯</div>
                <h3 className="font-semibold text-midnight mb-1">
                  Personalized Curriculum
                </h3>
                <p className="text-sm text-text-secondary">
                  Custom learning paths based on your goals
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🎥</div>
                <h3 className="font-semibold text-midnight mb-1">
                  Recorded Sessions
                </h3>
                <p className="text-sm text-text-secondary">
                  Review your lessons anytime
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">📊</div>
                <h3 className="font-semibold text-midnight mb-1">
                  Progress Tracking
                </h3>
                <p className="text-sm text-text-secondary">
                  Detailed analytics and milestones
                </p>
              </div>
            </div>
            <div className="text-center mt-8">
              <LinkButton href="/book-trial" variant="primary">
                Start Free Trial
              </LinkButton>
            </div>
          </Card>
        </div>
      </Section>
    </>
  );
}

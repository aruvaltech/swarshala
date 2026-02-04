import type { Metadata } from "next";
import {
  PageHeader,
  Section,
  Card,
  LinkButton,
  Breadcrumbs,
  FAQSection,
} from "@/components/ui";
import { comparisons } from "@/content/comparisons";

export const metadata: Metadata = {
  title: "Online vs Offline Music Classes - Which is Better? | SwarShala",
  description:
    "Compare online vs offline music classes. Learn the pros, cons, costs, and best fit for your learning style. Expert analysis from SwarShala.",
  alternates: {
    canonical: "https://swarshala.com/compare/online-vs-offline",
  },
};

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Compare", href: "/compare" },
  { name: "Online vs Offline", href: "/compare/online-vs-offline" },
];

const comparisonData = comparisons.find((c) => c.slug === "online-vs-offline");

const detailedComparison = [
  {
    category: "Convenience & Flexibility",
    online: {
      points: [
        "Learn from anywhere with internet",
        "No travel time or commute costs",
        "Flexible scheduling options",
        "Easy to reschedule classes",
      ],
      score: 9,
    },
    offline: {
      points: [
        "Fixed schedule builds discipline",
        "Dedicated learning environment",
        "No technical setup required",
        "Face-to-face accountability",
      ],
      score: 7,
    },
  },
  {
    category: "Learning Experience",
    online: {
      points: [
        "Screen sharing for theory lessons",
        "Recorded sessions for review",
        "Digital learning materials",
        "Access to global teachers",
      ],
      score: 8,
    },
    offline: {
      points: [
        "Physical posture correction",
        "Real-time instrument adjustment",
        "Immersive acoustic experience",
        "Better for beginners",
      ],
      score: 9,
    },
  },
  {
    category: "Cost",
    online: {
      points: [
        "No travel expenses",
        "Lower average fees",
        "No venue costs passed on",
        "More affordable instruments ok",
      ],
      score: 9,
    },
    offline: {
      points: [
        "Center provides instruments",
        "No internet/tech costs",
        "Group class discounts available",
        "Practice rooms included",
      ],
      score: 7,
    },
  },
  {
    category: "Instrument Suitability",
    online: {
      points: [
        "Excellent for vocals",
        "Good for keyboard instruments",
        "Suitable for guitar",
        "Theory and composition ideal",
      ],
      score: 8,
    },
    offline: {
      points: [
        "Best for all instruments",
        "Essential for percussion",
        "Better for string instruments",
        "Required for ensemble practice",
      ],
      score: 10,
    },
  },
];

const faqs = [
  {
    question: "Can beginners learn music effectively online?",
    answer:
      "Yes, beginners can learn effectively online, especially for vocals, keyboard, and guitar. However, for instruments requiring precise posture like violin or tabla, we recommend starting with a few offline sessions to establish proper technique.",
  },
  {
    question: "Is online learning cheaper than offline?",
    answer:
      "Generally yes. Online classes at SwarShala are 15-20% more affordable than center classes, plus you save on travel costs. However, you need a stable internet connection and basic audio equipment.",
  },
  {
    question: "Can I switch between online and offline?",
    answer:
      "Absolutely! Our hybrid model allows you to switch between modes based on your schedule. Many students do 3 online classes and 1 offline class per month for the best of both worlds.",
  },
  {
    question: "What equipment do I need for online classes?",
    answer:
      "You need a device with camera and microphone (laptop/tablet recommended), stable internet (minimum 10 Mbps), your instrument, and a quiet learning space. We provide a free tech check before your first class.",
  },
  {
    question: "Are exam preparations better done offline?",
    answer:
      "For practical exams like Trinity or ABRSM, we recommend at least 4-6 offline sessions before the exam to simulate exam conditions. Theory exams can be fully prepared online.",
  },
];

export default function OnlineVsOfflinePage() {
  return (
    <>
      <PageHeader
        title="Online vs Offline Music Classes"
        subtitle="A comprehensive comparison to help you choose the right learning mode"
        breadcrumbs={<Breadcrumbs items={breadcrumbs} />}
      />

      {/* Quick Summary */}
      <Section>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Online */}
          <Card padding="lg" className="border-2 border-blue-500">
            <div className="text-center mb-6">
              <span className="text-4xl mb-3 block">💻</span>
              <h2 className="text-2xl font-bold text-midnight">
                Online Classes
              </h2>
              <p className="text-text-secondary mt-2">
                Learn from home, anywhere in India
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-green-600">
                <span>✓</span>
                <span>Maximum flexibility & convenience</span>
              </div>
              <div className="flex items-center gap-2 text-green-600">
                <span>✓</span>
                <span>15-20% lower cost</span>
              </div>
              <div className="flex items-center gap-2 text-green-600">
                <span>✓</span>
                <span>Access to best teachers nationally</span>
              </div>
              <div className="flex items-center gap-2 text-green-600">
                <span>✓</span>
                <span>Recorded sessions for review</span>
              </div>
              <div className="flex items-center gap-2 text-amber-600">
                <span>△</span>
                <span>Requires stable internet</span>
              </div>
              <div className="flex items-center gap-2 text-amber-600">
                <span>△</span>
                <span>Limited physical correction</span>
              </div>
            </div>
            <div className="mt-6 text-center">
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                Best for: Convenience seekers, vocals, theory
              </span>
            </div>
          </Card>

          {/* Offline */}
          <Card padding="lg" className="border-2 border-green-500">
            <div className="text-center mb-6">
              <span className="text-4xl mb-3 block">🏫</span>
              <h2 className="text-2xl font-bold text-midnight">
                Offline Classes
              </h2>
              <p className="text-text-secondary mt-2">
                Learn at our centers across India
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-green-600">
                <span>✓</span>
                <span>Complete hands-on experience</span>
              </div>
              <div className="flex items-center gap-2 text-green-600">
                <span>✓</span>
                <span>Physical posture & technique correction</span>
              </div>
              <div className="flex items-center gap-2 text-green-600">
                <span>✓</span>
                <span>Access to center instruments</span>
              </div>
              <div className="flex items-center gap-2 text-green-600">
                <span>✓</span>
                <span>Immersive learning environment</span>
              </div>
              <div className="flex items-center gap-2 text-amber-600">
                <span>△</span>
                <span>Travel time required</span>
              </div>
              <div className="flex items-center gap-2 text-amber-600">
                <span>△</span>
                <span>Fixed scheduling</span>
              </div>
            </div>
            <div className="mt-6 text-center">
              <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                Best for: Beginners, percussion, advanced practice
              </span>
            </div>
          </Card>
        </div>
      </Section>

      {/* Detailed Comparison */}
      <Section background="muted">
        <h2 className="text-3xl font-bold font-serif text-midnight mb-8 text-center">
          Detailed Comparison
        </h2>
        <div className="space-y-8">
          {detailedComparison.map((item) => (
            <Card key={item.category} padding="lg">
              <h3 className="text-xl font-semibold text-midnight mb-6 text-center">
                {item.category}
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                {/* Online */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-medium text-blue-600">Online</span>
                    <span className="text-sm text-text-muted">
                      Score: {item.online.score}/10
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: `${item.online.score * 10}%` }}
                    />
                  </div>
                  <ul className="space-y-2">
                    {item.online.points.map((point, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-sm text-text-secondary"
                      >
                        <span className="text-blue-500">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Offline */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-medium text-green-600">Offline</span>
                    <span className="text-sm text-text-muted">
                      Score: {item.offline.score}/10
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                    <div
                      className="bg-green-500 h-2 rounded-full"
                      style={{ width: `${item.offline.score * 10}%` }}
                    />
                  </div>
                  <ul className="space-y-2">
                    {item.offline.points.map((point, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-sm text-text-secondary"
                      >
                        <span className="text-green-500">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Recommendation */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold font-serif text-midnight mb-6">
            Our Recommendation
          </h2>
          <Card
            padding="lg"
            className="bg-gradient-to-br from-gold/10 to-gold/5 border-gold/30"
          >
            <p className="text-lg text-text-primary mb-6">
              <strong>Try our Hybrid Approach!</strong> Start with 1-2 offline
              sessions to establish proper technique and posture, then continue
              with online classes for convenience. Schedule monthly offline
              check-ins to maintain progress.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <LinkButton href="/online-classes" variant="outline">
                Explore Online
              </LinkButton>
              <LinkButton href="/offline-classes" variant="outline">
                Explore Offline
              </LinkButton>
              <LinkButton href="/book-trial" variant="primary">
                Book Free Trial
              </LinkButton>
            </div>
          </Card>
        </div>
      </Section>

      {/* FAQ */}
      <FAQSection title="Common Questions" items={faqs} />

      {/* Other Comparisons */}
      <Section background="muted">
        <h2 className="text-2xl font-bold font-serif text-midnight mb-6 text-center">
          More Comparisons
        </h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <LinkButton
            href="/compare/one-to-one-vs-group"
            variant="outline"
            className="w-full"
          >
            1:1 vs Group Classes
          </LinkButton>
          <LinkButton
            href="/compare/home-tutor-vs-center"
            variant="outline"
            className="w-full"
          >
            Home Tutor vs Center
          </LinkButton>
        </div>
      </Section>
    </>
  );
}

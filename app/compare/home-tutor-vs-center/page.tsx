import type { Metadata } from "next";
import {
  PageHeader,
  Section,
  Card,
  LinkButton,
  Breadcrumbs,
  FAQSection,
} from "@/components/ui";

export const metadata: Metadata = {
  title: "Home Tutor vs Music Center - Which is Better? | SwarShala",
  description:
    "Compare home music tutors vs learning at a music center. Understand costs, convenience, and quality differences to make the right choice.",
  alternates: {
    canonical: "https://swarshala.com/compare/home-tutor-vs-center",
  },
};

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Compare", href: "/compare" },
  { name: "Home Tutor vs Center", href: "/compare/home-tutor-vs-center" },
];

const detailedComparison = [
  {
    category: "Convenience",
    homeTutor: {
      points: [
        "No travel required",
        "Learn in familiar environment",
        "Flexible timing",
        "Perfect for children & elderly",
      ],
      score: 10,
    },
    center: {
      points: [
        "Dedicated learning space",
        "Free from home distractions",
        "Professional environment",
        "Structured schedule",
      ],
      score: 7,
    },
  },
  {
    category: "Quality & Resources",
    homeTutor: {
      points: [
        "Varies by tutor",
        "Limited curriculum support",
        "Your own instrument required",
        "No quality monitoring",
      ],
      score: 6,
    },
    center: {
      points: [
        "Verified expert teachers",
        "Standardized curriculum",
        "Professional instruments available",
        "Regular quality audits",
      ],
      score: 9,
    },
  },
  {
    category: "Cost",
    homeTutor: {
      points: [
        "Travel charges extra",
        "Higher per-session fees",
        "Hidden costs common",
        "No refund policies",
      ],
      score: 5,
    },
    center: {
      points: [
        "All-inclusive pricing",
        "Transparent fee structure",
        "Group class discounts",
        "Clear refund policies",
      ],
      score: 8,
    },
  },
  {
    category: "Learning Experience",
    homeTutor: {
      points: [
        "Personalized attention",
        "Comfortable environment",
        "Family can observe",
        "One-on-one focus",
      ],
      score: 8,
    },
    center: {
      points: [
        "Acoustic-optimized rooms",
        "Peer learning opportunities",
        "Performance practice",
        "Multiple teacher exposure",
      ],
      score: 9,
    },
  },
  {
    category: "Accountability & Progress",
    homeTutor: {
      points: [
        "No formal progress tracking",
        "Cancellations common",
        "Inconsistent quality",
        "No backup if tutor unavailable",
      ],
      score: 5,
    },
    center: {
      points: [
        "Digital progress reports",
        "Makeup class policies",
        "Teacher substitution available",
        "Regular assessments",
      ],
      score: 9,
    },
  },
];

const riskFactors = [
  {
    risk: "Unverified Credentials",
    homeTutor: "High - No systematic verification",
    center: "Low - All teachers background-checked",
  },
  {
    risk: "Inconsistent Teaching",
    homeTutor: "High - No oversight or quality control",
    center: "Low - Regular training & audits",
  },
  {
    risk: "No Curriculum",
    homeTutor: "Common - Many tutors lack structured plans",
    center: "None - Research-backed curriculum",
  },
  {
    risk: "Sudden Unavailability",
    homeTutor: "High - No backup options",
    center: "Managed - Substitute teachers available",
  },
  {
    risk: "Safety Concerns",
    homeTutor: "Present - Unknown person at home",
    center: "Minimal - Supervised environment",
  },
];

const swarshalaAdvantage = [
  {
    title: "Best of Both Worlds",
    description:
      "SwarShala offers both center classes AND verified home tutors with center-level quality standards",
  },
  {
    title: "Verified Teachers",
    description:
      "All our home tutors undergo the same rigorous verification as center teachers",
  },
  {
    title: "Same Curriculum",
    description:
      "Whether at home or center, students follow our proven structured curriculum",
  },
  {
    title: "Progress Tracking",
    description:
      "Digital progress reports and parent updates regardless of learning location",
  },
];

const faqs = [
  {
    question: "Is a home tutor more expensive than center classes?",
    answer:
      "Typically yes. Home tutors charge 20-40% more to cover travel time and costs. At SwarShala, our home tutor fees are only 15% higher than center rates, and include all quality assurances.",
  },
  {
    question: "Are home tutors safe for children?",
    answer:
      "Safety varies with independent tutors. SwarShala's home tutors are background-verified, and we recommend parents be present during initial sessions. Our center classes offer fully supervised environments.",
  },
  {
    question: "Can I switch from home tutor to center?",
    answer:
      "Yes, you can switch anytime. Your progress is tracked digitally, so the transition is seamless. Many families start with home tutoring and move to center as children grow older.",
  },
  {
    question: "Do I need to own an instrument for home tutoring?",
    answer:
      "Yes, you need to have the instrument at home. For center classes, instruments are available for use during sessions. We can help you select and purchase instruments at partner discounts.",
  },
  {
    question: "What if my home tutor is sick?",
    answer:
      "Independent tutors often cancel with no backup. SwarShala provides substitute teachers from our network to ensure continuous learning.",
  },
];

export default function HomeTutorVsCenterPage() {
  return (
    <>
      <PageHeader
        title="Home Tutor vs Music Center"
        subtitle="Make an informed choice between learning at home or at a professional center"
        breadcrumbs={<Breadcrumbs items={breadcrumbs} />}
      />

      {/* Quick Summary */}
      <Section>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Home Tutor */}
          <Card padding="lg" className="border-2 border-teal-500">
            <div className="text-center mb-6">
              <span className="text-4xl mb-3 block">🏠</span>
              <h2 className="text-2xl font-bold text-midnight">Home Tutor</h2>
              <p className="text-text-secondary mt-2">
                Private tutor comes to your home
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-green-600">
                <span>✓</span>
                <span>Maximum convenience</span>
              </div>
              <div className="flex items-center gap-2 text-green-600">
                <span>✓</span>
                <span>Familiar learning environment</span>
              </div>
              <div className="flex items-center gap-2 text-green-600">
                <span>✓</span>
                <span>Flexible scheduling</span>
              </div>
              <div className="flex items-center gap-2 text-red-500">
                <span>✗</span>
                <span>Quality varies significantly</span>
              </div>
              <div className="flex items-center gap-2 text-red-500">
                <span>✗</span>
                <span>Higher costs with travel charges</span>
              </div>
              <div className="flex items-center gap-2 text-red-500">
                <span>✗</span>
                <span>No accountability or tracking</span>
              </div>
            </div>
            <div className="mt-6 text-center">
              <span className="inline-block px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-medium">
                Best for: Elderly, very young kids, mobility issues
              </span>
            </div>
          </Card>

          {/* Center */}
          <Card padding="lg" className="border-2 border-indigo-500">
            <div className="text-center mb-6">
              <span className="text-4xl mb-3 block">🏫</span>
              <h2 className="text-2xl font-bold text-midnight">Music Center</h2>
              <p className="text-text-secondary mt-2">
                Learn at a professional academy
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-green-600">
                <span>✓</span>
                <span>Verified expert teachers</span>
              </div>
              <div className="flex items-center gap-2 text-green-600">
                <span>✓</span>
                <span>Professional environment</span>
              </div>
              <div className="flex items-center gap-2 text-green-600">
                <span>✓</span>
                <span>Structured curriculum & progress</span>
              </div>
              <div className="flex items-center gap-2 text-green-600">
                <span>✓</span>
                <span>Performance & peer opportunities</span>
              </div>
              <div className="flex items-center gap-2 text-amber-600">
                <span>△</span>
                <span>Travel required</span>
              </div>
              <div className="flex items-center gap-2 text-amber-600">
                <span>△</span>
                <span>Fixed batch timings (group)</span>
              </div>
            </div>
            <div className="mt-6 text-center">
              <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
                Best for: Serious learners, quality seekers, children
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
                {/* Home Tutor */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-medium text-teal-600">
                      Home Tutor
                    </span>
                    <span className="text-sm text-text-muted">
                      Score: {item.homeTutor.score}/10
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                    <div
                      className="bg-teal-500 h-2 rounded-full"
                      style={{ width: `${item.homeTutor.score * 10}%` }}
                    />
                  </div>
                  <ul className="space-y-2">
                    {item.homeTutor.points.map((point, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-sm text-text-secondary"
                      >
                        <span className="text-teal-500">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Center */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-medium text-indigo-600">
                      Music Center
                    </span>
                    <span className="text-sm text-text-muted">
                      Score: {item.center.score}/10
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                    <div
                      className="bg-indigo-500 h-2 rounded-full"
                      style={{ width: `${item.center.score * 10}%` }}
                    />
                  </div>
                  <ul className="space-y-2">
                    {item.center.points.map((point, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-sm text-text-secondary"
                      >
                        <span className="text-indigo-500">•</span>
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

      {/* Risk Factors */}
      <Section>
        <h2 className="text-3xl font-bold font-serif text-midnight mb-8 text-center">
          Risk Assessment
        </h2>
        <div className="max-w-4xl mx-auto">
          <Card padding="lg">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 font-semibold text-midnight">
                    Risk Factor
                  </th>
                  <th className="text-left py-3 font-semibold text-teal-600">
                    Home Tutor
                  </th>
                  <th className="text-left py-3 font-semibold text-indigo-600">
                    Center
                  </th>
                </tr>
              </thead>
              <tbody>
                {riskFactors.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b border-border last:border-0"
                  >
                    <td className="py-3 font-medium text-text-primary">
                      {item.risk}
                    </td>
                    <td className="py-3 text-sm text-text-secondary">
                      {item.homeTutor}
                    </td>
                    <td className="py-3 text-sm text-text-secondary">
                      {item.center}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        </div>
      </Section>

      {/* SwarShala Advantage */}
      <Section background="muted">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-serif text-midnight mb-4">
            The SwarShala Advantage
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            We offer verified home tutors with the same quality standards as our
            centers
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {swarshalaAdvantage.map((item) => (
            <Card
              key={item.title}
              padding="lg"
              className="text-center bg-gradient-to-br from-gold/10 to-gold/5"
            >
              <h3 className="font-semibold text-midnight mb-2">{item.title}</h3>
              <p className="text-sm text-text-secondary">{item.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold font-serif text-midnight mb-6">
            Experience the Difference
          </h2>
          <p className="text-text-secondary mb-8">
            Whether you prefer learning at home or at our center, SwarShala
            ensures the same premium quality. Book a free trial to experience
            both!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <LinkButton href="/book-trial" variant="primary" size="lg">
              Book Free Trial
            </LinkButton>
            <LinkButton href="/cities" variant="outline" size="lg">
              Find Nearest Center
            </LinkButton>
          </div>
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
            href="/compare/online-vs-offline"
            variant="outline"
            className="w-full"
          >
            Online vs Offline
          </LinkButton>
          <LinkButton
            href="/compare/one-to-one-vs-group"
            variant="outline"
            className="w-full"
          >
            1:1 vs Group Classes
          </LinkButton>
        </div>
      </Section>
    </>
  );
}

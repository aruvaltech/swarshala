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
  title: "1:1 vs Group Music Classes - Which is Better for You? | SwarShala",
  description:
    "Compare one-to-one vs group music classes. Understand the benefits, costs, and learning outcomes of private and group music lessons.",
  alternates: {
    canonical: "https://swarshala.com/compare/one-to-one-vs-group",
  },
};

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Compare", href: "/compare" },
  { name: "1:1 vs Group", href: "/compare/one-to-one-vs-group" },
];

const detailedComparison = [
  {
    category: "Personalization",
    oneToOne: {
      points: [
        "100% customized curriculum",
        "Pace adapted to your speed",
        "Focus on your specific goals",
        "Immediate error correction",
      ],
      score: 10,
    },
    group: {
      points: [
        "Standardized curriculum",
        "Fixed pace for all students",
        "General learning objectives",
        "Group feedback sessions",
      ],
      score: 6,
    },
  },
  {
    category: "Learning Dynamics",
    oneToOne: {
      points: [
        "Full teacher attention",
        "No distractions",
        "Intensive practice time",
        "Shy students comfortable",
      ],
      score: 9,
    },
    group: {
      points: [
        "Learn from peers",
        "Healthy competition",
        "Social motivation",
        "Ensemble opportunities",
      ],
      score: 8,
    },
  },
  {
    category: "Cost Effectiveness",
    oneToOne: {
      points: [
        "Higher per-session cost",
        "Faster progress = fewer classes",
        "More value per hour",
        "Premium investment",
      ],
      score: 7,
    },
    group: {
      points: [
        "30-50% lower cost",
        "Budget-friendly option",
        "More sessions for same price",
        "Great for exploration",
      ],
      score: 9,
    },
  },
  {
    category: "Schedule Flexibility",
    oneToOne: {
      points: [
        "Choose your time slots",
        "Easy to reschedule",
        "No dependency on others",
        "Last-minute changes possible",
      ],
      score: 9,
    },
    group: {
      points: [
        "Fixed batch timings",
        "Limited flexibility",
        "Consistent schedule",
        "Advance planning needed",
      ],
      score: 6,
    },
  },
];

const scenarioRecommendations = [
  {
    scenario: "Complete Beginners",
    recommendation: "1:1",
    reason:
      "Need personalized attention to build proper foundation and technique",
  },
  {
    scenario: "Casual Hobby Learners",
    recommendation: "Group",
    reason: "More affordable, social, and fun for recreational learning",
  },
  {
    scenario: "Exam Preparation",
    recommendation: "1:1",
    reason: "Focused preparation on your specific weaknesses and exam pieces",
  },
  {
    scenario: "Children (under 10)",
    recommendation: "Group",
    reason: "Social learning environment keeps young learners engaged",
  },
  {
    scenario: "Professional Goals",
    recommendation: "1:1",
    reason: "Intensive training and personalized career guidance",
  },
  {
    scenario: "Limited Budget",
    recommendation: "Group",
    reason: "Get quality instruction at 30-50% lower cost",
  },
];

const faqs = [
  {
    question: "How many students are in a group class?",
    answer:
      "Our group classes typically have 3-6 students, ensuring everyone gets adequate attention while maintaining the benefits of peer learning.",
  },
  {
    question: "Can I switch from group to 1:1 later?",
    answer:
      "Absolutely! Many students start with group classes and transition to 1:1 when they want to accelerate their progress or prepare for exams.",
  },
  {
    question: "Are group classes available for all instruments?",
    answer:
      "Group classes are available for popular instruments like guitar, vocals, keyboard, and tabla. Some specialized instruments like sitar or santoor are typically 1:1 only.",
  },
  {
    question: "Which format is better for adults?",
    answer:
      "Adults often prefer 1:1 classes due to flexible scheduling and faster progress. However, adult group classes are great for socializing and building a music community.",
  },
  {
    question: "Do you offer hybrid options?",
    answer:
      "Yes! You can combine group classes with occasional 1:1 sessions. Many students do weekly group classes with monthly 1:1 check-ins.",
  },
];

export default function OneToOneVsGroupPage() {
  return (
    <>
      <PageHeader
        title="1:1 vs Group Music Classes"
        subtitle="Find the perfect learning format for your musical journey"
        breadcrumbs={<Breadcrumbs items={breadcrumbs} />}
      />

      {/* Quick Summary */}
      <Section>
        <div className="grid md:grid-cols-2 gap-8">
          {/* 1:1 */}
          <Card padding="lg" className="border-2 border-purple-500">
            <div className="text-center mb-6">
              <span className="text-4xl mb-3 block">👤</span>
              <h2 className="text-2xl font-bold text-midnight">
                One-to-One Classes
              </h2>
              <p className="text-text-secondary mt-2">
                Private lessons with dedicated attention
              </p>
              <div className="mt-4">
                <span className="text-2xl font-bold text-gold">
                  ₹800 - ₹2,000
                </span>
                <span className="text-text-muted text-sm"> /session</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-green-600">
                <span>✓</span>
                <span>100% personalized curriculum</span>
              </div>
              <div className="flex items-center gap-2 text-green-600">
                <span>✓</span>
                <span>Flexible scheduling</span>
              </div>
              <div className="flex items-center gap-2 text-green-600">
                <span>✓</span>
                <span>Faster progress</span>
              </div>
              <div className="flex items-center gap-2 text-green-600">
                <span>✓</span>
                <span>Immediate feedback</span>
              </div>
              <div className="flex items-center gap-2 text-amber-600">
                <span>△</span>
                <span>Higher cost per session</span>
              </div>
              <div className="flex items-center gap-2 text-amber-600">
                <span>△</span>
                <span>No peer interaction</span>
              </div>
            </div>
            <div className="mt-6 text-center">
              <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                Best for: Serious learners, exam prep, fast progress
              </span>
            </div>
          </Card>

          {/* Group */}
          <Card padding="lg" className="border-2 border-orange-500">
            <div className="text-center mb-6">
              <span className="text-4xl mb-3 block">👥</span>
              <h2 className="text-2xl font-bold text-midnight">
                Group Classes
              </h2>
              <p className="text-text-secondary mt-2">
                Learn with 3-6 peers in a batch
              </p>
              <div className="mt-4">
                <span className="text-2xl font-bold text-gold">
                  ₹400 - ₹800
                </span>
                <span className="text-text-muted text-sm"> /session</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-green-600">
                <span>✓</span>
                <span>30-50% more affordable</span>
              </div>
              <div className="flex items-center gap-2 text-green-600">
                <span>✓</span>
                <span>Learn from peer progress</span>
              </div>
              <div className="flex items-center gap-2 text-green-600">
                <span>✓</span>
                <span>Social & fun environment</span>
              </div>
              <div className="flex items-center gap-2 text-green-600">
                <span>✓</span>
                <span>Ensemble practice opportunities</span>
              </div>
              <div className="flex items-center gap-2 text-amber-600">
                <span>△</span>
                <span>Fixed schedule</span>
              </div>
              <div className="flex items-center gap-2 text-amber-600">
                <span>△</span>
                <span>Less individual attention</span>
              </div>
            </div>
            <div className="mt-6 text-center">
              <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                Best for: Budget-conscious, social learners, children
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
                {/* 1:1 */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-medium text-purple-600">
                      One-to-One
                    </span>
                    <span className="text-sm text-text-muted">
                      Score: {item.oneToOne.score}/10
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                    <div
                      className="bg-purple-500 h-2 rounded-full"
                      style={{ width: `${item.oneToOne.score * 10}%` }}
                    />
                  </div>
                  <ul className="space-y-2">
                    {item.oneToOne.points.map((point, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-sm text-text-secondary"
                      >
                        <span className="text-purple-500">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Group */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-medium text-orange-600">Group</span>
                    <span className="text-sm text-text-muted">
                      Score: {item.group.score}/10
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                    <div
                      className="bg-orange-500 h-2 rounded-full"
                      style={{ width: `${item.group.score * 10}%` }}
                    />
                  </div>
                  <ul className="space-y-2">
                    {item.group.points.map((point, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-sm text-text-secondary"
                      >
                        <span className="text-orange-500">•</span>
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

      {/* Scenario Recommendations */}
      <Section>
        <h2 className="text-3xl font-bold font-serif text-midnight mb-8 text-center">
          Which Should You Choose?
        </h2>
        <div className="max-w-3xl mx-auto">
          <Card padding="lg">
            <div className="space-y-4">
              {scenarioRecommendations.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row md:items-center gap-4 py-4 border-b border-border last:border-0"
                >
                  <div className="md:w-1/4">
                    <span className="font-semibold text-midnight">
                      {item.scenario}
                    </span>
                  </div>
                  <div className="md:w-1/4">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                        item.recommendation === "1:1"
                          ? "bg-purple-100 text-purple-700"
                          : "bg-orange-100 text-orange-700"
                      }`}
                    >
                      {item.recommendation}
                    </span>
                  </div>
                  <div className="md:w-1/2">
                    <span className="text-sm text-text-secondary">
                      {item.reason}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </Section>

      {/* CTA */}
      <Section background="muted">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold font-serif text-midnight mb-6">
            Not Sure Yet?
          </h2>
          <p className="text-text-secondary mb-8">
            Book a free trial class and our counselors will help you choose the
            right format based on your goals, budget, and learning style.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <LinkButton href="/book-trial" variant="primary" size="lg">
              Book Free Trial
            </LinkButton>
            <LinkButton href="/contact" variant="outline" size="lg">
              Talk to a Counselor
            </LinkButton>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <FAQSection title="Common Questions" items={faqs} />

      {/* Other Comparisons */}
      <Section>
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

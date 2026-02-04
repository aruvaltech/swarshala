import type { Metadata } from "next";
import Link from "next/link";
import {
  PageHeader,
  Section,
  SectionHeader,
  Card,
  CardContent,
  LinkButton,
  Breadcrumbs,
  FAQSection,
} from "@/components/ui";
import { getFAQsByCategory } from "@/content/faqs";

export const metadata: Metadata = {
  title: "Pricing - Music Class Fees | SwarShala",
  description:
    "Transparent pricing for music classes. Online classes from ₹800/session, home tutors from ₹1200/session. View all packages and choose what fits your budget.",
  alternates: {
    canonical: "https://swarshala.com/pricing",
  },
};

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Pricing", href: "/pricing" },
];

const pricingFaqs = getFAQsByCategory("Pricing");

const plans = [
  {
    name: "Online Classes",
    description: "Live 1-on-1 video sessions from anywhere",
    icon: "💻",
    price: "₹800",
    unit: "per session",
    features: [
      "Live 1-on-1 video classes",
      "Flexible scheduling",
      "Recorded sessions for revision",
      "Digital learning materials",
      "Progress tracking dashboard",
      "Reschedule up to 12 hours before",
    ],
    packages: [
      { sessions: 4, price: "₹3,200", perSession: "₹800", savings: null },
      { sessions: 8, price: "₹6,000", perSession: "₹750", savings: "₹400" },
      { sessions: 12, price: "₹8,400", perSession: "₹700", savings: "₹1,200" },
    ],
    popular: true,
    cta: "Start Online Classes",
  },
  {
    name: "Home Tutor",
    description: "Expert teachers visit your home",
    icon: "🏠",
    price: "₹1,200",
    unit: "per session",
    features: [
      "Teacher visits your home",
      "Personalized attention",
      "No commute hassle",
      "Use your own instrument",
      "Family members can observe",
      "Flexible timing",
    ],
    packages: [
      { sessions: 4, price: "₹4,800", perSession: "₹1,200", savings: null },
      { sessions: 8, price: "₹8,800", perSession: "₹1,100", savings: "₹800" },
      {
        sessions: 12,
        price: "₹12,000",
        perSession: "₹1,000",
        savings: "₹2,400",
      },
    ],
    popular: false,
    cta: "Book Home Tutor",
  },
  {
    name: "Center Classes",
    description: "Learn at our academy studios",
    icon: "🏫",
    price: "₹1,000",
    unit: "per session",
    features: [
      "Professional studio environment",
      "Quality instruments provided",
      "Group class options available",
      "Practice rooms access",
      "Performance opportunities",
      "Meet fellow students",
    ],
    packages: [
      { sessions: 4, price: "₹4,000", perSession: "₹1,000", savings: null },
      { sessions: 8, price: "₹7,200", perSession: "₹900", savings: "₹800" },
      { sessions: 12, price: "₹9,600", perSession: "₹800", savings: "₹2,400" },
    ],
    popular: false,
    cta: "Visit Center",
  },
  {
    name: "Group Classes",
    description: "Learn with 3-6 fellow students",
    icon: "👥",
    price: "₹600",
    unit: "per session",
    features: [
      "Small batch (3-6 students)",
      "Learn with peers",
      "Fixed weekly schedule",
      "Collaborative learning",
      "Performance practice",
      "Most affordable option",
    ],
    packages: [
      { sessions: 4, price: "₹2,400", perSession: "₹600", savings: null },
      { sessions: 8, price: "₹4,400", perSession: "₹550", savings: "₹400" },
      { sessions: 12, price: "₹6,000", perSession: "₹500", savings: "₹1,200" },
    ],
    popular: false,
    cta: "Join Group Class",
  },
];

const addons = [
  {
    name: "Exam Preparation",
    description: "Trinity, ABRSM, or Prayag exam prep",
    price: "₹500/session extra",
  },
  {
    name: "Practice Room Access",
    description: "Use our center practice rooms",
    price: "₹200/hour",
  },
  {
    name: "Recording Session",
    description: "Professional recording of your performance",
    price: "₹1,500/session",
  },
  {
    name: "Theory Classes",
    description: "Music theory and ear training",
    price: "Included",
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHeader
        title="Simple, Transparent Pricing"
        subtitle="No hidden fees. Choose a plan that fits your budget and learning goals."
        breadcrumbs={<Breadcrumbs items={breadcrumbs} />}
      />

      {/* Pricing Cards */}
      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative ${plan.popular ? "border-gold ring-2 ring-gold" : ""}`}
              padding="none"
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-3 py-1 bg-gold text-white text-xs font-semibold rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              <CardContent className="p-6">
                <div className="text-4xl mb-3">{plan.icon}</div>
                <h3 className="text-xl font-semibold font-serif text-midnight">
                  {plan.name}
                </h3>
                <p className="text-sm text-text-muted mt-1 mb-4">
                  {plan.description}
                </p>

                <div className="mb-6">
                  <span className="text-3xl font-bold text-midnight">
                    {plan.price}
                  </span>
                  <span className="text-text-muted">
                    /{plan.unit.replace("per ", "")}
                  </span>
                </div>

                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-text-secondary"
                    >
                      <svg
                        className="w-4 h-4 text-success flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <LinkButton
                  href="/book-trial"
                  variant={plan.popular ? "gold" : "outline"}
                  className="w-full"
                >
                  {plan.cta}
                </LinkButton>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Package Deals */}
      <Section background="muted">
        <SectionHeader
          title="Package Deals"
          subtitle="Save more when you buy multiple sessions"
        />
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-xl border border-border-light">
            <thead>
              <tr className="border-b border-border-light">
                <th className="px-6 py-4 text-left font-semibold text-midnight">
                  Sessions
                </th>
                {plans.map((plan) => (
                  <th
                    key={plan.name}
                    className="px-6 py-4 text-center font-semibold text-midnight"
                  >
                    {plan.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[4, 8, 12].map((sessionCount, idx) => (
                <tr
                  key={sessionCount}
                  className="border-b border-border-light last:border-0"
                >
                  <td className="px-6 py-4 font-medium text-midnight">
                    {sessionCount} Sessions
                  </td>
                  {plans.map((plan) => {
                    const pkg = plan.packages[idx];
                    return (
                      <td key={plan.name} className="px-6 py-4 text-center">
                        <div className="font-semibold text-midnight">
                          {pkg.price}
                        </div>
                        <div className="text-sm text-text-muted">
                          {pkg.perSession}/session
                        </div>
                        {pkg.savings && (
                          <div className="text-xs text-success mt-1">
                            Save {pkg.savings}
                          </div>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* Add-ons */}
      <Section>
        <SectionHeader
          title="Add-on Services"
          subtitle="Enhance your learning experience"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {addons.map((addon) => (
            <Card key={addon.name} padding="lg">
              <h3 className="font-semibold text-midnight">{addon.name}</h3>
              <p className="text-sm text-text-muted mt-1">
                {addon.description}
              </p>
              <p className="text-gold font-semibold mt-3">{addon.price}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Money Back Guarantee */}
      <Section background="muted">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-5xl mb-4">🛡️</div>
          <h2 className="text-2xl font-bold font-serif text-midnight mb-4">
            100% Satisfaction Guarantee
          </h2>
          <p className="text-text-secondary mb-6">
            Not satisfied after your first paid session? We&apos;ll refund your
            money or match you with a different teacher. No questions asked.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-text-muted">
            <span className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-success"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Free trial class
            </span>
            <span className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-success"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              No lock-in contracts
            </span>
            <span className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-success"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Cancel anytime
            </span>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <FAQSection title="Pricing FAQs" items={pricingFaqs} />

      {/* CTA */}
      <Section background="dark">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold font-serif mb-4">
            Start with a Free Trial
          </h2>
          <p className="text-gray-300 mb-6">
            Book a complimentary 30-minute trial class. No payment required.
          </p>
          <LinkButton href="/book-trial" variant="gold" size="lg">
            Book Free Trial Class
          </LinkButton>
        </div>
      </Section>
    </>
  );
}

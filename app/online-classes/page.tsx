import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  PageHeader,
  Section,
  SectionHeader,
  Grid,
  Card,
  CardContent,
  LinkButton,
  Breadcrumbs,
  FAQSection,
  TestimonialSection,
} from "@/components/ui";
import { Schema } from "@/components/Schema";
import { generateServiceSchema, generateFAQSchema } from "@/lib/schema";
import { getFAQsByCategory } from "@/content/faqs";
import { testimonials } from "@/content/testimonials";

export const metadata: Metadata = {
  title: "Online Music Classes | Learn from Home | SwarShala",
  description:
    "Learn music online from expert teachers. Live 1-on-1 video classes for Guitar, Piano, Vocals & more. Flexible scheduling, recorded sessions & personalized curriculum.",
  alternates: {
    canonical: "https://swarshala.com/online-classes",
  },
};

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Classes", href: "/classes" },
  { name: "Online Classes", href: "/online-classes" },
];

const onlineFaqs = getFAQsByCategory("Online Classes");
const onlineTestimonials = testimonials
  .filter((t) => t.program === "online")
  .slice(0, 3);

const features = [
  {
    icon: "🎥",
    title: "Live Video Sessions",
    description:
      "Real-time 1-on-1 classes via Zoom/Google Meet with screen sharing for sheet music.",
  },
  {
    icon: "📱",
    title: "Learn on Any Device",
    description:
      "Join classes from laptop, tablet, or smartphone. All you need is a stable internet connection.",
  },
  {
    icon: "🔄",
    title: "Recorded Sessions",
    description:
      "Every class is recorded so you can review lessons anytime and practice effectively.",
  },
  {
    icon: "⏰",
    title: "Flexible Scheduling",
    description:
      "Choose your preferred time slots. Reschedule up to 12 hours before class.",
  },
  {
    icon: "📚",
    title: "Digital Resources",
    description:
      "Access to sheet music, practice tracks, and learning materials through our student portal.",
  },
  {
    icon: "🌏",
    title: "Learn from Anywhere",
    description:
      "No commute, no boundaries. Learn from the comfort of your home, anywhere in the world.",
  },
];

const howItWorks = [
  {
    step: 1,
    title: "Book Your Free Trial",
    description:
      "Choose your instrument and preferred time slot for a 30-minute trial session.",
  },
  {
    step: 2,
    title: "Meet Your Teacher",
    description:
      "Get matched with an expert teacher who specializes in your chosen instrument and style.",
  },
  {
    step: 3,
    title: "Start Learning",
    description:
      "Begin your musical journey with personalized lessons tailored to your goals.",
  },
  {
    step: 4,
    title: "Track Progress",
    description:
      "Regular assessments and progress reports to keep you motivated and on track.",
  },
];

const requirements = [
  "Stable internet connection (minimum 5 Mbps)",
  "Laptop, tablet, or smartphone with camera",
  "Your instrument (we can help you choose one)",
  "Quiet space for focused learning",
  "Headphones (recommended for better audio)",
];

export default function OnlineClassesPage() {
  return (
    <>
      <Schema
        schema={generateServiceSchema({
          name: "Online Music Classes",
          slug: "online-classes",
          description:
            "Learn music online from expert teachers through live video sessions with flexible scheduling.",
          serviceType: "OnlineMusicEducation",
        })}
      />
      <Schema
        schema={generateFAQSchema(
          onlineFaqs.map((f) => ({ question: f.question, answer: f.answer })),
        )}
      />

      <PageHeader
        title="Online Music Classes"
        subtitle="Learn music from expert teachers through live video sessions. Flexible scheduling, personalized curriculum, and learn from anywhere in the world."
        breadcrumbs={<Breadcrumbs items={breadcrumbs} />}
      />

      {/* Hero Features */}
      <Section>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold font-serif text-midnight mb-4">
              Premium Music Education, Delivered Online
            </h2>
            <p className="text-text-secondary mb-6 leading-relaxed">
              Our online music classes bring the academy experience to your
              home. With live 1-on-1 video sessions, you get the same
              personalized attention and expert guidance as in-person classes –
              without the commute.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-3 text-text-secondary">
                <span className="text-gold font-bold">✓</span>
                Live 1-on-1 video sessions (not pre-recorded)
              </li>
              <li className="flex items-center gap-3 text-text-secondary">
                <span className="text-gold font-bold">✓</span>
                500+ expert teachers available
              </li>
              <li className="flex items-center gap-3 text-text-secondary">
                <span className="text-gold font-bold">✓</span>
                Flexible scheduling across time zones
              </li>
              <li className="flex items-center gap-3 text-text-secondary">
                <span className="text-gold font-bold">✓</span>
                Free class recordings for revision
              </li>
            </ul>
            <div className="flex flex-wrap gap-4">
              <LinkButton href="/book-trial" variant="gold" size="lg">
                Book Free Online Trial
              </LinkButton>
              <LinkButton href="/pricing" variant="outline">
                View Pricing
              </LinkButton>
            </div>
          </div>
          <div className="aspect-video relative rounded-xl overflow-hidden bg-surface-muted">
            <Image
              src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=800"
              alt="Student learning music online"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </Section>

      {/* Features Grid */}
      <Section background="muted">
        <SectionHeader
          title="Why Choose Online Classes?"
          subtitle="All the benefits of personal music lessons, with the convenience of learning from home"
        />
        <Grid cols={3} gap="md">
          {features.map((feature) => (
            <Card key={feature.title} className="text-center" padding="lg">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold font-serif text-midnight mb-2">
                {feature.title}
              </h3>
              <p className="text-text-secondary text-sm">
                {feature.description}
              </p>
            </Card>
          ))}
        </Grid>
      </Section>

      {/* How It Works */}
      <Section>
        <SectionHeader
          title="How It Works"
          subtitle="Get started with online music classes in 4 simple steps"
        />
        <div className="grid md:grid-cols-4 gap-6">
          {howItWorks.map((item) => (
            <div key={item.step} className="text-center">
              <div className="w-12 h-12 rounded-full bg-gold text-white font-bold text-xl flex items-center justify-center mx-auto mb-4">
                {item.step}
              </div>
              <h3 className="font-semibold text-midnight mb-2">{item.title}</h3>
              <p className="text-sm text-text-secondary">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Requirements */}
      <Section background="muted">
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            title="What You'll Need"
            subtitle="Simple requirements to get started with online classes"
          />
          <Card padding="lg">
            <ul className="space-y-4">
              {requirements.map((req, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-success flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-text-secondary">{req}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      {/* Testimonials */}
      {onlineTestimonials.length > 0 && (
        <TestimonialSection
          title="What Online Students Say"
          testimonials={onlineTestimonials}
        />
      )}

      {/* FAQ */}
      <FAQSection title="Online Classes FAQs" items={onlineFaqs} />

      {/* CTA */}
      <Section background="dark">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold font-serif mb-4">
            Ready to Start Learning Online?
          </h2>
          <p className="text-gray-300 mb-6">
            Book a free 30-minute trial class and experience the convenience of
            learning music from home.
          </p>
          <LinkButton href="/book-trial" variant="gold" size="lg">
            Book Free Online Trial
          </LinkButton>
        </div>
      </Section>
    </>
  );
}

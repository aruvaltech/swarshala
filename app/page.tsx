import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  Hero,
  Section,
  SectionHeader,
  Grid,
  LinkButton,
  Card,
  CardContent,
  FAQSection,
  TestimonialSection,
} from "@/components/ui";
import { Schema, MultiSchema } from "@/components/Schema";
import {
  generateOrganizationSchema,
  generateOfferCatalogSchema,
  generateFAQSchema,
} from "@/lib/schema";
import { instruments } from "@/content/instruments";
import { cities } from "@/content/cities";
import { programs } from "@/content/programs";
import { testimonials } from "@/content/testimonials";
import { getFAQsByCategory } from "@/content/faqs";

export const metadata: Metadata = {
  title:
    "SwarShala - India's Premier Music Academy | Online & Offline Music Classes",
  description:
    "Learn Guitar, Piano, Vocals, Tabla & more from expert teachers. Online classes, home tutors & academy centers in 20+ Indian cities. Book your free trial today!",
  alternates: {
    canonical: "https://swarshala.com",
  },
};

const featuredInstruments = instruments.slice(0, 6);
const featuredCities = cities.slice(0, 8);
const featuredTestimonials = testimonials.slice(0, 6);
const homeFaqs = [
  ...getFAQsByCategory("General"),
  ...getFAQsByCategory("Programs"),
].slice(0, 8);

const stats = [
  { label: "Students Taught", value: "15,000+" },
  { label: "Expert Teachers", value: "500+" },
  { label: "Cities Covered", value: "20+" },
  { label: "Years of Excellence", value: "12+" },
];

const whyChooseUs = [
  {
    icon: "🎓",
    title: "Expert Teachers",
    description:
      "Learn from certified musicians with 5+ years of teaching experience and performance backgrounds.",
  },
  {
    icon: "🎯",
    title: "Personalized Learning",
    description:
      "Customized curriculum based on your goals, pace, and preferred music genres.",
  },
  {
    icon: "📱",
    title: "Flexible Scheduling",
    description:
      "Choose from online classes, home tutors, or center visits. Reschedule anytime.",
  },
  {
    icon: "🏆",
    title: "Recognized Certifications",
    description:
      "Earn certificates recognized by Trinity, ABRSM, and Prayag Sangeet Samiti.",
  },
  {
    icon: "💰",
    title: "Affordable Pricing",
    description:
      "Quality music education starting at ₹800/session with flexible payment options.",
  },
  {
    icon: "🎵",
    title: "Performance Opportunities",
    description:
      "Regular recitals, concerts, and showcases to build confidence and experience.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Schema Markup */}
      <MultiSchema
        schemas={[
          generateOfferCatalogSchema(),
          generateFAQSchema(
            homeFaqs.map((f) => ({ question: f.question, answer: f.answer })),
          ),
        ]}
      />

      {/* Hero Section */}
      <Hero
        title="Discover the Joy of Music"
        subtitle="India's premier music academy offering personalized training in classical and contemporary music. Learn from expert teachers through online classes, home tutors, or at our academy centers across 20+ cities."
      >
        <div className="flex flex-wrap gap-4">
          <LinkButton href="/book-trial" variant="gold" size="lg">
            Book Free Trial Class
          </LinkButton>
          <LinkButton
            href="/instruments"
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-midnight"
          >
            Explore Instruments
          </LinkButton>
        </div>

        {/* Trust Badges */}
        <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-gray-400">
          <span className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-gold"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            4.9/5 Rating
          </span>
          <span>15,000+ Students</span>
          <span>500+ Teachers</span>
        </div>
      </Hero>

      {/* Stats Section */}
      <Section background="muted">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold font-serif text-gold">
                {stat.value}
              </div>
              <div className="mt-2 text-text-secondary">{stat.label}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Programs Section */}
      <Section>
        <SectionHeader
          title="Choose Your Learning Mode"
          subtitle="Flexible programs designed to fit your lifestyle and learning preferences"
        />
        <Grid cols={3} gap="lg">
          {programs.slice(0, 3).map((program) => (
            <Card key={program.slug} className="text-center" padding="lg">
              <div className="text-4xl mb-4">{program.icon}</div>
              <h3 className="text-xl font-semibold font-serif text-midnight mb-2">
                {program.name}
              </h3>
              <p className="text-text-secondary mb-4">{program.summary}</p>
              <LinkButton
                href={`/classes#${program.slug}`}
                variant="outline"
                size="sm"
              >
                Learn More
              </LinkButton>
            </Card>
          ))}
        </Grid>
        <div className="mt-8 text-center">
          <LinkButton href="/classes" variant="secondary">
            View All Programs →
          </LinkButton>
        </div>
      </Section>

      {/* Instruments Section */}
      <Section background="muted">
        <SectionHeader
          title="Learn Any Instrument"
          subtitle="From Western classics to Indian traditional, we teach them all"
        />
        <Grid cols={3} gap="md">
          {featuredInstruments.map((instrument) => (
            <Link
              key={instrument.slug}
              href={`/instruments/${instrument.slug}`}
              className="group"
            >
              <Card padding="none" className="overflow-hidden">
                <div className="aspect-square relative bg-surface-muted p-4">
                  <Image
                    src={`/images/instruments/${instrument.imageSlug}.svg`}
                    alt={instrument.name}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-midnight group-hover:text-gold transition-colors">
                    {instrument.name}
                  </h3>
                  <p className="text-sm text-text-muted mt-1">
                    {instrument.category}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </Grid>
        <div className="mt-8 text-center">
          <LinkButton href="/instruments" variant="primary">
            View All Instruments →
          </LinkButton>
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section>
        <SectionHeader
          title="Why Choose SwarShala?"
          subtitle="We're committed to making quality music education accessible to everyone"
        />
        <Grid cols={3} gap="md">
          {whyChooseUs.map((item) => (
            <Card key={item.title} className="text-center" padding="lg">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold font-serif text-midnight mb-2">
                {item.title}
              </h3>
              <p className="text-text-secondary text-sm">{item.description}</p>
            </Card>
          ))}
        </Grid>
      </Section>

      {/* Cities Section */}
      <Section background="muted">
        <SectionHeader
          title="Music Classes Near You"
          subtitle="Find expert music teachers in your city"
        />
        <div className="flex flex-wrap justify-center gap-3">
          {featuredCities.map((city) => (
            <Link
              key={city.slug}
              href={`/cities/${city.slug}`}
              className="px-4 py-2 bg-white rounded-full text-text-secondary hover:text-midnight hover:shadow-md transition-all border border-border-light"
            >
              {city.name}
            </Link>
          ))}
        </div>
        <div className="mt-6 text-center">
          <LinkButton href="/cities" variant="ghost">
            View All 20+ Cities →
          </LinkButton>
        </div>
      </Section>

      {/* Testimonials Section */}
      <TestimonialSection
        title="What Our Students Say"
        subtitle="Join thousands of happy learners who have transformed their musical journey with SwarShala"
        testimonials={featuredTestimonials}
      />

      {/* FAQ Section */}
      <FAQSection title="Frequently Asked Questions" items={homeFaqs} />

      {/* CTA Section */}
      <Section background="dark">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold font-serif mb-6">
            Start Your Musical Journey Today
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Book a free trial class and experience the SwarShala difference. No
            commitment required.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <LinkButton href="/book-trial" variant="gold" size="lg">
              Book Free Trial Class
            </LinkButton>
            <LinkButton
              href="tel:+918595025239"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-midnight"
            >
              Call Us: +91 85950 25239
            </LinkButton>
          </div>
        </div>
      </Section>
    </>
  );
}

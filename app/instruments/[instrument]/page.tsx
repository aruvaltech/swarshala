import type { Metadata } from "next";
import { notFound } from "next/navigation";
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
import { generateCourseSchema, generateFAQSchema } from "@/lib/schema";
import { generateInstrumentMeta } from "@/lib/seo";
import { instruments, type Instrument } from "@/content/instruments";
import { testimonials } from "@/content/testimonials";
import { courseLevels } from "@/content/courseLevels";

interface Props {
  params: Promise<{ instrument: string }>;
}

// Generate static params for all instruments
export async function generateStaticParams() {
  return instruments.map((instrument) => ({
    instrument: instrument.slug,
  }));
}

// Generate metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { instrument: slug } = await params;
  const instrument = instruments.find((i) => i.slug === slug);

  if (!instrument) {
    return { title: "Instrument Not Found" };
  }

  return generateInstrumentMeta(instrument.name, instrument.slug);
}

export default async function InstrumentPage({ params }: Props) {
  const { instrument: slug } = await params;
  const instrument = instruments.find((i) => i.slug === slug);

  if (!instrument) {
    notFound();
  }

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Instruments", href: "/instruments" },
    { name: instrument.name, href: `/instruments/${instrument.slug}` },
  ];

  const instrumentTestimonials = testimonials
    .filter(
      (t) => t.instrument?.toLowerCase() === instrument.name.toLowerCase(),
    )
    .slice(0, 3);

  const relatedInstruments = instruments
    .filter(
      (i) => i.category === instrument.category && i.slug !== instrument.slug,
    )
    .slice(0, 3);

  return (
    <>
      <Schema
        schema={generateCourseSchema({
          name: `${instrument.name} Course`,
          instrument: instrument.name,
          level: "all",
          description: instrument.shortDescription,
          duration: "3-12 months",
          slug: instrument.slug,
        })}
      />
      <Schema schema={generateFAQSchema(instrument.faqs)} />

      <PageHeader
        title={`Learn ${instrument.name}`}
        subtitle={instrument.shortDescription}
        breadcrumbs={<Breadcrumbs items={breadcrumbs} />}
      />

      {/* Hero Section */}
      <Section>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div>
            <div className="aspect-video relative rounded-xl overflow-hidden bg-surface-muted mb-6">
              <Image
                src={`/images/instruments/${instrument.imageSlug}.jpg`}
                alt={instrument.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>

            {/* Quick Info */}
            <Card padding="lg">
              <h3 className="font-semibold text-midnight mb-4">Quick Info</h3>
              <dl className="space-y-3">
                <div className="flex justify-between">
                  <dt className="text-text-secondary">Category</dt>
                  <dd className="font-medium text-midnight">
                    {instrument.category}
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-text-secondary">Levels</dt>
                  <dd className="font-medium text-midnight">
                    {instrument.levels.join(", ")}
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-text-secondary">Available In</dt>
                  <dd className="font-medium text-midnight">
                    {instrument.popularCities.slice(0, 2).join(", ")}
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-text-secondary">Session Duration</dt>
                  <dd className="font-medium text-midnight">45-60 minutes</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-text-secondary">Starting Price</dt>
                  <dd className="font-medium text-gold">₹800/session</dd>
                </div>
              </dl>
            </Card>
          </div>

          <div>
            <div className="prose">
              <p className="text-lg text-text-secondary leading-relaxed mb-6">
                {instrument.longDescription}
              </p>
            </div>

            {/* Benefits / Outcomes */}
            <h3 className="font-semibold text-midnight mb-4 mt-8">
              What You'll Learn
            </h3>
            <ul className="space-y-3 mb-8">
              {instrument.outcomes.slice(0, 5).map((outcome, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-success flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-text-secondary">{outcome}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">
              <LinkButton href="/book-trial" variant="gold" size="lg">
                Book Free {instrument.name} Trial
              </LinkButton>
              <LinkButton href="/pricing" variant="outline">
                View Pricing
              </LinkButton>
            </div>
          </div>
        </div>
      </Section>

      {/* Curriculum Section */}
      <Section background="muted">
        <SectionHeader
          title={`${instrument.name} Curriculum`}
          subtitle="Our structured curriculum takes you from beginner to advanced levels"
        />
        <Grid cols={3} gap="md">
          {courseLevels.map((level) => {
            const curriculum = instrument.curriculumOutline.find(
              (c) => c.level === level.name,
            );
            return (
              <Link
                key={level.slug}
                href={`/courses/${instrument.slug}/${level.slug}`}
              >
                <Card
                  className="h-full hover:border-gold transition-colors"
                  padding="lg"
                >
                  <div
                    className={`text-3xl mb-4 ${
                      level.slug === "beginner"
                        ? "text-green-500"
                        : level.slug === "intermediate"
                          ? "text-blue-500"
                          : "text-purple-500"
                    }`}
                  >
                    {level.slug === "beginner"
                      ? "🌱"
                      : level.slug === "intermediate"
                        ? "🌿"
                        : "🌳"}
                  </div>
                  <h3 className="text-xl font-semibold font-serif text-midnight mb-2">
                    {level.name}
                  </h3>
                  <p className="text-sm text-text-secondary mb-4">
                    {level.duration}
                  </p>
                  {curriculum && (
                    <ul className="space-y-2 text-sm text-text-secondary">
                      {curriculum.topics.slice(0, 3).map((topic, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                          {topic}
                        </li>
                      ))}
                      {curriculum.topics.length > 3 && (
                        <li className="text-gold">
                          + {curriculum.topics.length - 3} more topics
                        </li>
                      )}
                    </ul>
                  )}
                </Card>
              </Link>
            );
          })}
        </Grid>
      </Section>

      {/* What You'll Learn */}
      <Section>
        <SectionHeader
          title="What You'll Learn"
          subtitle={`A comprehensive ${instrument.name} education covering technique, theory, and performance`}
        />
        <Grid cols={2} gap="lg">
          <Card padding="lg">
            <h3 className="font-semibold text-midnight mb-4">Techniques</h3>
            <ul className="space-y-2">
              {instrument.curriculumOutline[0]?.topics
                .slice(0, 5)
                .map((topic, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-text-secondary"
                  >
                    <span className="w-2 h-2 bg-gold rounded-full" />
                    {topic}
                  </li>
                ))}
            </ul>
          </Card>
          <Card padding="lg">
            <h3 className="font-semibold text-midnight mb-4">
              Learning Outcomes
            </h3>
            <ul className="space-y-2">
              {instrument.outcomes.slice(0, 5).map((outcome, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 text-text-secondary"
                >
                  <span className="w-2 h-2 bg-gold rounded-full" />
                  {outcome}
                </li>
              ))}
            </ul>
          </Card>
        </Grid>
      </Section>

      {/* Testimonials */}
      {instrumentTestimonials.length > 0 && (
        <TestimonialSection
          title={`${instrument.name} Student Stories`}
          testimonials={instrumentTestimonials}
        />
      )}

      {/* FAQs */}
      <FAQSection
        title={`${instrument.name} Class FAQs`}
        items={instrument.faqs}
      />

      {/* Related Instruments */}
      {relatedInstruments.length > 0 && (
        <Section background="muted">
          <SectionHeader
            title="Explore Similar Instruments"
            subtitle={`Other ${instrument.category} instruments you might like`}
          />
          <Grid cols={3} gap="md">
            {relatedInstruments.map((inst) => (
              <Link key={inst.slug} href={`/instruments/${inst.slug}`}>
                <Card
                  padding="none"
                  className="overflow-hidden hover:border-gold transition-colors"
                >
                  <div className="aspect-video relative bg-surface-muted">
                    <Image
                      src={`/images/instruments/${inst.imageSlug}.jpg`}
                      alt={inst.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-midnight">{inst.name}</h3>
                    <p className="text-sm text-text-muted mt-1">
                      {inst.category}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </Grid>
        </Section>
      )}

      {/* CTA */}
      <Section background="dark">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold font-serif mb-4">
            Start Your {instrument.name} Journey
          </h2>
          <p className="text-gray-300 mb-6">
            Book a free trial class and learn from expert {instrument.name}{" "}
            teachers.
          </p>
          <LinkButton href="/book-trial" variant="gold" size="lg">
            Book Free Trial Class
          </LinkButton>
        </div>
      </Section>
    </>
  );
}

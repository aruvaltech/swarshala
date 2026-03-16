import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  PageHeader,
  Section,
  Card,
  LinkButton,
  Breadcrumbs,
} from "@/components/ui";
import { Schema, MultiSchema } from "@/components/Schema";
import {
  musicClassesCities,
  getMusicClassesCityBySlug,
} from "@/content/seo-landing-pages";
import {
  generateMusicClassesCitySchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
} from "@/lib/schema";
import { RelatedLinks } from "@/components/InternalLinks";
import {
  getRelatedCityLinks,
  getRelatedInstrumentLinks,
} from "@/lib/internal-links";

interface Props {
  params: Promise<{ "music-classes-city": string }>;
}

// Generate all static paths at build time
export async function generateStaticParams() {
  return musicClassesCities.map((city) => ({
    "music-classes-city": `music-classes-${city.slug}`,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { "music-classes-city": rawSlug } = await params;
  const citySlug = rawSlug.replace("music-classes-", "");
  const city = getMusicClassesCityBySlug(citySlug);

  if (!city) {
    return { title: "Page Not Found | SwarShala" };
  }

  return {
    title: city.metaTitle,
    description: city.metaDescription,
    alternates: {
      canonical: `https://swarshala.com/music-classes-${city.slug}`,
    },
    openGraph: {
      title: city.metaTitle,
      description: city.metaDescription,
      type: "website",
      url: `https://swarshala.com/music-classes-${city.slug}`,
    },
  };
}

export default async function MusicClassesCityPage({ params }: Props) {
  const { "music-classes-city": rawSlug } = await params;
  const citySlug = rawSlug.replace("music-classes-", "");
  const city = getMusicClassesCityBySlug(citySlug);

  if (!city) {
    notFound();
  }

  const breadcrumbItems = [
    { name: "Home", href: "/" },
    { name: "Cities", href: "/cities" },
    { name: city.h1, href: `/music-classes-${city.slug}` },
  ];

  const schemas = [
    generateMusicClassesCitySchema({
      name: city.city,
      slug: city.slug,
      state: city.state,
      instruments: city.instruments,
      nearbyAreas: city.nearbyAreas,
    }),
    generateFAQSchema(city.faqs),
    generateBreadcrumbSchema(
      breadcrumbItems.map((b) => ({ name: b.name, path: b.href })),
    ),
  ];

  const relatedCityLinks = getRelatedCityLinks(city.slug, 4);
  const relatedInstrumentLinks = getRelatedInstrumentLinks(
    city.instruments[0] || "guitar",
    4,
  );

  return (
    <>
      <MultiSchema schemas={schemas} />

      <PageHeader
        title={city.h1}
        subtitle={`Expert music instruction in ${city.city}, ${city.state}. Online & offline classes available.`}
        breadcrumbs={<Breadcrumbs items={breadcrumbItems} />}
      />

      {/* Introduction */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-text-secondary leading-relaxed">
            {city.intro}
          </p>
        </div>
      </Section>

      {/* Instruments Available */}
      <Section background="muted">
        <h2 className="text-2xl font-bold font-serif text-midnight mb-8 text-center">
          Instruments You Can Learn in {city.city}
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {city.instruments.map((instrument) => (
            <Link
              key={instrument}
              href={`/instruments/${instrument}`}
              className="p-4 bg-white rounded-lg border border-border hover:border-gold hover:shadow-md transition-all text-center group"
            >
              <span className="font-medium text-midnight group-hover:text-gold capitalize">
                {instrument.replace("-", " ")}
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* Programs */}
      <Section>
        <h2 className="text-2xl font-bold font-serif text-midnight mb-8 text-center">
          Music Programs in {city.city}
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {city.programs.map((program) => {
            const programLabels: Record<
              string,
              { title: string; desc: string }
            > = {
              "one-to-one": {
                title: "One-to-One Classes",
                desc: "Personalized lessons with a dedicated instructor",
              },
              group: {
                title: "Group Classes",
                desc: "Learn with peers in small batches",
              },
              online: {
                title: "Online Classes",
                desc: "Live sessions from the comfort of home",
              },
              "home-tutor": {
                title: "Home Tutor",
                desc: "Expert teachers at your doorstep",
              },
              center: {
                title: "Center Classes",
                desc: "Learn at our academy center",
              },
            };
            const info = programLabels[program] || { title: program, desc: "" };
            return (
              <Card key={program} className="text-center p-6">
                <h3 className="font-semibold text-midnight mb-2">
                  {info.title}
                </h3>
                <p className="text-sm text-text-secondary">{info.desc}</p>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* Nearby Areas */}
      <Section background="muted">
        <h2 className="text-2xl font-bold font-serif text-midnight mb-6 text-center">
          Areas We Serve in {city.city}
        </h2>
        <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
          {city.nearbyAreas.map((area) => (
            <span
              key={area}
              className="px-4 py-2 bg-white border border-border rounded-full text-sm text-text-primary"
            >
              {area}
            </span>
          ))}
        </div>
      </Section>

      {/* FAQs */}
      {city.faqs.length > 0 && (
        <Section>
          <h2 className="text-2xl font-bold font-serif text-midnight mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {city.faqs.map((faq, index) => (
              <div key={index} className="border-b border-border pb-6">
                <h3 className="font-semibold text-midnight mb-2">
                  {faq.question}
                </h3>
                <p className="text-text-secondary">{faq.answer}</p>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* Internal Links */}
      <Section background="muted">
        <div className="max-w-4xl mx-auto space-y-8">
          <RelatedLinks
            links={relatedCityLinks}
            title={`Music Classes in Other Cities`}
          />
          <RelatedLinks
            links={relatedInstrumentLinks}
            title={`Explore Instruments`}
          />
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold font-serif text-midnight mb-4">
            Start Learning Music in {city.city}
          </h2>
          <p className="text-text-secondary mb-6">
            Book a free trial class and experience the SwarShala difference.
          </p>
          <LinkButton href="/book-trial" variant="primary">
            Book Free Trial Class
          </LinkButton>
        </div>
      </Section>
    </>
  );
}

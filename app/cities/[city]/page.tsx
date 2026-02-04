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
import {
  generateLocalBusinessSchema,
  generateFAQSchema,
  generateServiceAreaSchema,
} from "@/lib/schema";
import { generateCityMeta } from "@/lib/seo";
import { cities, type City } from "@/content/cities";
import { instruments } from "@/content/instruments";
import { testimonials } from "@/content/testimonials";

interface Props {
  params: Promise<{ city: string }>;
}

// Generate static params for all cities
export async function generateStaticParams() {
  return cities.map((city) => ({
    city: city.slug,
  }));
}

// Generate metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: slug } = await params;
  const city = cities.find((c) => c.slug === slug);

  if (!city) {
    return { title: "City Not Found" };
  }

  return generateCityMeta(city.name, city.slug, city.hasCenter);
}

export default async function CityPage({ params }: Props) {
  const { city: slug } = await params;
  const city = cities.find((c) => c.slug === slug);

  if (!city) {
    notFound();
  }

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Cities", href: "/cities" },
    { name: city.name, href: `/cities/${city.slug}` },
  ];

  const cityTestimonials = testimonials
    .filter((t) => t.location?.toLowerCase() === city.name.toLowerCase())
    .slice(0, 3);

  const nearbyCity = cities.find(
    (c) => c.slug !== city.slug && c.state === city.state,
  );

  const popularInstruments = instruments.slice(0, 6);

  return (
    <>
      {city.hasCenter && city.center && (
        <Schema
          schema={generateLocalBusinessSchema({
            name: `SwarShala ${city.name}`,
            city: city.name,
            address: city.center.address,
            phone: city.center.phone,
            hours: city.center.hours,
            mapEmbedUrl: city.center.mapEmbedUrl,
            slug: city.slug,
          })}
        />
      )}
      <Schema schema={generateFAQSchema(city.faqs)} />

      <PageHeader
        title={`Music Classes in ${city.name}`}
        subtitle={city.metaDescription}
        breadcrumbs={<Breadcrumbs items={breadcrumbs} />}
      />

      {/* Overview Section */}
      <Section>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div>
            <h2 className="text-2xl font-bold font-serif text-midnight mb-4">
              Learn Music in {city.name}
            </h2>
            <p className="text-text-secondary mb-6 leading-relaxed">
              {city.intro}
            </p>

            {/* Available Programs */}
            <h3 className="font-semibold text-midnight mb-3">
              Available Programs
            </h3>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-3 text-text-secondary">
                <span className="text-gold">✓</span>
                Online Classes - Learn from anywhere
              </li>
              <li className="flex items-center gap-3 text-text-secondary">
                <span className="text-gold">✓</span>
                Home Tutors - Teachers visit your home
              </li>
              {city.hasCenter && (
                <li className="flex items-center gap-3 text-text-secondary">
                  <span className="text-gold">✓</span>
                  Academy Center - Visit our {city.name} center
                </li>
              )}
            </ul>

            <div className="flex flex-wrap gap-4">
              <LinkButton href="/book-trial" variant="gold" size="lg">
                Book Free Trial in {city.name}
              </LinkButton>
              {city.hasCenter && (
                <LinkButton href={`/centers/${city.slug}`} variant="outline">
                  Visit Our Center
                </LinkButton>
              )}
            </div>
          </div>

          {/* Quick Info Card */}
          <Card padding="lg">
            <h3 className="font-semibold text-midnight mb-4">
              Music Classes in {city.name}
            </h3>
            <dl className="space-y-4">
              <div>
                <dt className="text-sm text-text-muted">
                  Available Instruments
                </dt>
                <dd className="font-medium text-midnight">15+ Instruments</dd>
              </div>
              <div>
                <dt className="text-sm text-text-muted">Teachers Available</dt>
                <dd className="font-medium text-midnight">
                  50+ Expert Teachers
                </dd>
              </div>
              <div>
                <dt className="text-sm text-text-muted">Programs</dt>
                <dd className="font-medium text-midnight">
                  Online, Home Tutor{city.hasCenter ? ", Center" : ""}
                </dd>
              </div>
              <div>
                <dt className="text-sm text-text-muted">Starting Price</dt>
                <dd className="font-medium text-gold">₹800/session</dd>
              </div>
              {city.hasCenter && city.center && (
                <div>
                  <dt className="text-sm text-text-muted">Center Address</dt>
                  <dd className="font-medium text-midnight">
                    {city.center.address}
                  </dd>
                </div>
              )}
            </dl>

            {/* Map placeholder */}
            <div className="mt-6 aspect-video bg-surface-muted rounded-lg flex items-center justify-center">
              <span className="text-text-muted">📍 View on Map</span>
            </div>
          </Card>
        </div>
      </Section>

      {/* Instruments Section */}
      <Section background="muted">
        <SectionHeader
          title={`Instruments You Can Learn in ${city.name}`}
          subtitle="Choose from 15+ musical instruments with expert local teachers"
        />
        <Grid cols={3} gap="md">
          {popularInstruments.map((instrument) => (
            <Link
              key={instrument.slug}
              href={`/instruments/${instrument.slug}`}
            >
              <Card
                padding="none"
                className="overflow-hidden hover:border-gold transition-colors"
              >
                <div className="aspect-video relative bg-surface-muted">
                  <Image
                    src={`/images/instruments/${instrument.imageSlug}.jpg`}
                    alt={`${instrument.name} classes in ${city.name}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-midnight">
                    {instrument.name} Classes
                  </h3>
                  <p className="text-sm text-text-muted mt-1">
                    Learn {instrument.name} in {city.name}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </Grid>
        <div className="mt-8 text-center">
          <LinkButton href="/instruments" variant="secondary">
            View All Instruments →
          </LinkButton>
        </div>
      </Section>

      {/* Service Areas */}
      {city.serviceAreas && city.serviceAreas.length > 0 && (
        <Section>
          <SectionHeader
            title={`Areas We Serve in ${city.name}`}
            subtitle="Home tutors and services available across these localities"
          />
          <div className="flex flex-wrap gap-3">
            {city.serviceAreas.map((area) => (
              <span
                key={area}
                className="px-4 py-2 bg-surface-muted rounded-full text-text-secondary text-sm"
              >
                {area}
              </span>
            ))}
          </div>
        </Section>
      )}

      {/* Testimonials */}
      {cityTestimonials.length > 0 ? (
        <TestimonialSection
          title={`What ${city.name} Students Say`}
          testimonials={cityTestimonials}
        />
      ) : (
        city.testimonials &&
        city.testimonials.length > 0 && (
          <Section background="muted">
            <SectionHeader title={`What ${city.name} Students Say`} />
            <Grid cols={2} gap="md">
              {city.testimonials.map((testimonialId, i) => {
                const testimonial = testimonials.find(
                  (t) => t.id === testimonialId,
                );
                if (!testimonial) return null;
                return (
                  <Card key={i} padding="lg">
                    <blockquote className="text-text-secondary italic mb-4">
                      &ldquo;{testimonial.shortText}&rdquo;
                    </blockquote>
                    <p className="font-medium text-midnight">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-text-muted">
                      {testimonial.instrument} Student
                    </p>
                  </Card>
                );
              })}
            </Grid>
          </Section>
        )
      )}

      {/* FAQs */}
      <FAQSection
        title={`FAQs About Music Classes in ${city.name}`}
        items={city.faqs}
      />

      {/* Nearby Cities */}
      {nearbyCity && (
        <Section background="muted">
          <SectionHeader
            title="Also Available In"
            subtitle={`Explore music classes in nearby cities`}
          />
          <div className="flex flex-wrap gap-3">
            {cities
              .filter((c) => c.state === city.state && c.slug !== city.slug)
              .slice(0, 4)
              .map((c) => (
                <Link
                  key={c.slug}
                  href={`/cities/${c.slug}`}
                  className="px-4 py-2 bg-white rounded-lg text-text-secondary hover:text-midnight hover:shadow-md transition-all border border-border-light"
                >
                  {c.name}
                </Link>
              ))}
          </div>
        </Section>
      )}

      {/* CTA */}
      <Section background="dark">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold font-serif mb-4">
            Start Learning Music in {city.name}
          </h2>
          <p className="text-gray-300 mb-6">
            Book a free trial class and get matched with the perfect teacher in
            your area.
          </p>
          <LinkButton href="/book-trial" variant="gold" size="lg">
            Book Free Trial Class
          </LinkButton>
        </div>
      </Section>
    </>
  );
}

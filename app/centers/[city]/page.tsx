import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  PageHeader,
  Section,
  Card,
  LinkButton,
  Breadcrumbs,
  FAQSection,
} from "@/components/ui";
import { Schema } from "@/components/Schema";
import { cities } from "@/content/cities";
import { instruments } from "@/content/instruments";
import { teachers } from "@/content/teachers";
import { generateLocalBusinessSchema } from "@/lib/schema";
import { SITE_URL, CONTACT_PHONE, CONTACT_EMAIL } from "@/lib/utils";

interface Props {
  params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
  return cities.map((city) => ({
    city: city.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: citySlug } = await params;
  const city = cities.find((c) => c.slug === citySlug);

  if (!city) {
    return {
      title: "Center Not Found | SwarShala",
    };
  }

  return {
    title: `Music Classes Center in ${city.name} - Visit SwarShala | SwarShala`,
    description: `Visit SwarShala music center in ${city.name}. ${city.centerCount} locations across ${city.areas.slice(0, 3).join(", ")}. Learn ${instruments
      .slice(0, 5)
      .map((i) => i.name)
      .join(", ")}. Book a visit!`,
    keywords: [
      `music center ${city.name}`,
      `music school ${city.name}`,
      `music academy ${city.name}`,
      `music classes center ${city.name}`,
      ...city.areas.map((a) => `music center ${a} ${city.name}`),
    ],
    alternates: {
      canonical: `https://swarshala.com/centers/${city.slug}`,
    },
  };
}

export default async function CenterDetailPage({ params }: Props) {
  const { city: citySlug } = await params;
  const city = cities.find((c) => c.slug === citySlug);

  if (!city) {
    notFound();
  }

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Cities", href: "/cities" },
    { name: city.name, href: `/cities/${city.slug}` },
    { name: "Centers", href: `/centers/${city.slug}` },
  ];

  // Local teachers
  const localTeachers = teachers
    .filter((t) => t.citySlug === city.slug)
    .slice(0, 4);

  // Sample center data (in production, this would come from a database)
  const centers = city.areas.slice(0, city.centerCount).map((area, index) => ({
    id: `${city.slug}-${index + 1}`,
    name: `SwarShala ${area}`,
    area,
    address: `${Math.floor(Math.random() * 100) + 1}, ${area} Main Road, ${city.name}, ${city.state}`,
    phone: CONTACT_PHONE,
    email: `${area.toLowerCase().replace(/\s/g, "")}@swarshala.com`,
    timing: "Mon-Sat: 9 AM - 9 PM, Sun: 10 AM - 4 PM",
    instruments: instruments.slice(0, 6).map((i) => i.name),
    facilities: [
      "AC Classrooms",
      "Practice Rooms",
      "Instrument Library",
      "Parking",
    ],
    rating: (4.5 + Math.random() * 0.4).toFixed(1),
    reviews: Math.floor(Math.random() * 200) + 50,
  }));

  const localBusinessSchema = generateLocalBusinessSchema({
    name: `SwarShala Music Academy ${city.name}`,
    city: city.name,
    address:
      city.center?.address ||
      `${city.areas[0]}, ${city.name}, ${city.state} - 000000`,
    phone: city.center?.phone || CONTACT_PHONE,
    hours:
      city.center?.hours ||
      "Mon-Sat: 9:00 AM - 8:00 PM, Sun: 10:00 AM - 6:00 PM",
    mapEmbedUrl: city.center?.mapEmbedUrl || "",
    slug: city.slug,
  });

  const faqs = [
    {
      question: `Where are SwarShala centers located in ${city.name}?`,
      answer: `We have ${city.centerCount} centers in ${city.name}, located in ${city.areas.join(", ")}. Each center is easily accessible by public transport and has parking facilities.`,
    },
    {
      question: "What instruments can I learn at the center?",
      answer: `Our ${city.name} centers offer classes for ${instruments
        .slice(0, 8)
        .map((i) => i.name)
        .join(
          ", ",
        )}, and more. We have specialized teachers for each instrument.`,
    },
    {
      question: "Do I need to bring my own instrument?",
      answer:
        "Not for classes! We provide instruments at our centers for use during sessions. However, we recommend having your own instrument for home practice. We can help you purchase one at partner discounts.",
    },
    {
      question: "Can I try a class before enrolling?",
      answer:
        "Absolutely! We offer a free trial class at any of our centers. Book online or walk in during operating hours. Our counselors will help you choose the right program.",
    },
    {
      question: "Is parking available at the centers?",
      answer:
        "Yes, all our centers have dedicated parking spaces for students. Two-wheeler and four-wheeler parking is available at no extra cost.",
    },
  ];

  return (
    <>
      <Schema schema={localBusinessSchema} />

      <PageHeader
        title={`SwarShala Centers in ${city.name}`}
        subtitle={`${city.centerCount} premium music learning centers across ${city.name}`}
        breadcrumbs={<Breadcrumbs items={breadcrumbs} />}
      />

      {/* Overview Stats */}
      <Section>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <Card padding="lg" className="text-center">
            <div className="text-3xl font-bold text-gold">
              {city.centerCount}
            </div>
            <div className="text-text-secondary text-sm mt-1">Centers</div>
          </Card>
          <Card padding="lg" className="text-center">
            <div className="text-3xl font-bold text-gold">
              {localTeachers.length}+
            </div>
            <div className="text-text-secondary text-sm mt-1">Teachers</div>
          </Card>
          <Card padding="lg" className="text-center">
            <div className="text-3xl font-bold text-gold">
              {city.studentCount}+
            </div>
            <div className="text-text-secondary text-sm mt-1">Students</div>
          </Card>
          <Card padding="lg" className="text-center">
            <div className="text-3xl font-bold text-gold">15+</div>
            <div className="text-text-secondary text-sm mt-1">Instruments</div>
          </Card>
        </div>
      </Section>

      {/* Center Listings */}
      <Section background="muted">
        <h2 className="text-2xl font-bold font-serif text-midnight mb-8">
          Our Centers in {city.name}
        </h2>
        <div className="space-y-6">
          {centers.map((center) => (
            <Card key={center.id} padding="lg">
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Map Placeholder */}
                <div className="lg:w-64 flex-shrink-0">
                  <div className="aspect-video lg:aspect-square bg-surface-alt rounded-lg flex items-center justify-center">
                    <span className="text-4xl">📍</span>
                  </div>
                </div>

                {/* Center Info */}
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-midnight">
                        {center.name}
                      </h3>
                      <p className="text-text-secondary text-sm mt-1">
                        {center.address}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-gold">★</span>
                      <span className="font-semibold text-midnight">
                        {center.rating}
                      </span>
                      <span className="text-text-muted text-sm">
                        ({center.reviews} reviews)
                      </span>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-text-muted mb-1">Timing</p>
                      <p className="text-sm text-text-primary">
                        {center.timing}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-text-muted mb-1">Contact</p>
                      <p className="text-sm text-text-primary">
                        {center.phone}
                      </p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm text-text-muted mb-2">
                      Instruments Available
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {center.instruments.map((instrument) => (
                        <span
                          key={instrument}
                          className="px-2 py-1 bg-surface-alt text-text-secondary text-xs rounded"
                        >
                          {instrument}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <p className="text-sm text-text-muted mb-2">Facilities</p>
                    <div className="flex flex-wrap gap-3">
                      {center.facilities.map((facility) => (
                        <span
                          key={facility}
                          className="flex items-center gap-1 text-sm text-text-secondary"
                        >
                          <span className="text-green-600">✓</span>
                          {facility}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <LinkButton href="/book-trial" variant="primary" size="sm">
                      Book Free Trial
                    </LinkButton>
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(center.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 border border-border rounded-lg text-sm font-medium text-text-primary hover:border-gold transition-colors"
                    >
                      Get Directions
                    </a>
                    <a
                      href={`tel:${center.phone.replace(/\s/g, "")}`}
                      className="inline-flex items-center justify-center px-4 py-2 border border-border rounded-lg text-sm font-medium text-text-primary hover:border-gold transition-colors"
                    >
                      Call Now
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Teachers at this location */}
      {localTeachers.length > 0 && (
        <Section>
          <h2 className="text-2xl font-bold font-serif text-midnight mb-8">
            Meet Our {city.name} Teachers
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {localTeachers.map((teacher) => (
              <Link key={teacher.slug} href={`/teachers/${teacher.slug}`}>
                <Card
                  padding="lg"
                  className="text-center hover:shadow-lg transition-shadow cursor-pointer"
                >
                  <div className="w-20 h-20 rounded-full bg-surface-muted flex items-center justify-center text-3xl mx-auto mb-4">
                    👤
                  </div>
                  <h3 className="font-semibold text-midnight">
                    {teacher.name}
                  </h3>
                  <p className="text-sm text-gold">
                    {teacher.specializations.join(", ")}
                  </p>
                  <p className="text-xs text-text-muted mt-1">
                    {teacher.experienceYears} years experience
                  </p>
                </Card>
              </Link>
            ))}
          </div>
          <div className="text-center mt-6">
            <LinkButton href="/teachers" variant="outline">
              View All Teachers
            </LinkButton>
          </div>
        </Section>
      )}

      {/* Facilities */}
      <Section background="muted">
        <h2 className="text-2xl font-bold font-serif text-midnight mb-8 text-center">
          Center Facilities
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card padding="lg" className="text-center">
            <span className="text-4xl block mb-3">🎹</span>
            <h3 className="font-semibold text-midnight mb-2">
              Instrument Library
            </h3>
            <p className="text-sm text-text-secondary">
              Access to professional instruments during classes
            </p>
          </Card>
          <Card padding="lg" className="text-center">
            <span className="text-4xl block mb-3">🏠</span>
            <h3 className="font-semibold text-midnight mb-2">Practice Rooms</h3>
            <p className="text-sm text-text-secondary">
              Soundproof rooms for focused practice sessions
            </p>
          </Card>
          <Card padding="lg" className="text-center">
            <span className="text-4xl block mb-3">❄️</span>
            <h3 className="font-semibold text-midnight mb-2">AC Classrooms</h3>
            <p className="text-sm text-text-secondary">
              Climate-controlled learning environment
            </p>
          </Card>
          <Card padding="lg" className="text-center">
            <span className="text-4xl block mb-3">🅿️</span>
            <h3 className="font-semibold text-midnight mb-2">Free Parking</h3>
            <p className="text-sm text-text-secondary">
              Ample parking for two and four wheelers
            </p>
          </Card>
        </div>
      </Section>

      {/* FAQ */}
      <FAQSection
        title={`FAQs about SwarShala ${city.name} Centers`}
        items={faqs}
      />

      {/* CTA */}
      <Section>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold font-serif text-midnight mb-4">
            Visit a Center Near You
          </h2>
          <p className="text-text-secondary mb-6">
            Walk in for a free tour or book a trial class. Our counselors are
            ready to help you start your musical journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <LinkButton href="/book-trial" variant="primary" size="lg">
              Book Free Trial
            </LinkButton>
            <LinkButton
              href={`/cities/${city.slug}`}
              variant="outline"
              size="lg"
            >
              Online Classes in {city.name}
            </LinkButton>
          </div>
        </div>
      </Section>
    </>
  );
}

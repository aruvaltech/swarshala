import type { Metadata } from "next";
import Link from "next/link";
import {
  PageHeader,
  Section,
  SectionHeader,
  Grid,
  Card,
  CardContent,
  LinkButton,
  Breadcrumbs,
} from "@/components/ui";
import { cities } from "@/content/cities";

export const metadata: Metadata = {
  title: "Music Classes in 20+ Indian Cities | SwarShala",
  description:
    "Find music classes near you. SwarShala offers Guitar, Piano, Vocals & more in Delhi, Mumbai, Bengaluru, Hyderabad, Chennai, Kolkata, Pune & 15+ cities across India.",
  alternates: {
    canonical: "https://swarshala.com/cities",
  },
};

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Cities", href: "/cities" },
];

const regions: Record<string, typeof cities> = {
  "North India": cities.filter((c) =>
    ["Delhi", "Noida", "Gurugram", "Jaipur", "Lucknow", "Chandigarh"].includes(
      c.name,
    ),
  ),
  "South India": cities.filter((c) =>
    [
      "Bengaluru",
      "Chennai",
      "Hyderabad",
      "Kochi",
      "Coimbatore",
      "Thiruvananthapuram",
    ].includes(c.name),
  ),
  "West India": cities.filter((c) =>
    ["Mumbai", "Pune", "Ahmedabad", "Goa", "Indore", "Nagpur"].includes(c.name),
  ),
  "East India": cities.filter((c) => ["Kolkata"].includes(c.name)),
};

export default function CitiesPage() {
  return (
    <>
      <PageHeader
        title="Music Classes Across India"
        subtitle="SwarShala brings quality music education to your city. Find expert teachers, academy centers, and home tutors near you."
        breadcrumbs={<Breadcrumbs items={breadcrumbs} />}
      />

      {/* All Cities Grid */}
      <Section>
        <Grid cols={4} gap="md">
          {cities.map((city) => (
            <Link key={city.slug} href={`/cities/${city.slug}`}>
              <Card
                className="h-full hover:border-gold transition-colors text-center"
                padding="lg"
              >
                <h3 className="text-lg font-semibold font-serif text-midnight mb-2">
                  {city.name}
                </h3>
                <p className="text-sm text-text-muted mb-3">{city.state}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {city.hasCenter && (
                    <span className="px-2 py-1 bg-gold/10 text-gold text-xs font-medium rounded-full">
                      Academy Center
                    </span>
                  )}
                  <span className="px-2 py-1 bg-surface-muted text-text-secondary text-xs rounded-full">
                    Home Tutors
                  </span>
                </div>
              </Card>
            </Link>
          ))}
        </Grid>
      </Section>

      {/* By Region */}
      <Section background="muted">
        <SectionHeader
          title="Browse by Region"
          subtitle="Find music classes in your region"
        />
        {Object.entries(regions).map(
          ([region, regionCities]) =>
            regionCities.length > 0 && (
              <div key={region} className="mb-10 last:mb-0">
                <h3 className="text-xl font-semibold font-serif text-midnight mb-4">
                  {region}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {regionCities.map((city) => (
                    <Link
                      key={city.slug}
                      href={`/cities/${city.slug}`}
                      className="px-4 py-2 bg-white rounded-lg text-text-secondary hover:text-midnight hover:shadow-md transition-all border border-border-light"
                    >
                      {city.name}
                    </Link>
                  ))}
                </div>
              </div>
            ),
        )}
      </Section>

      {/* Online Classes CTA */}
      <Section>
        <div className="bg-gradient-to-r from-midnight to-midnight-light rounded-2xl p-8 lg:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold font-serif mb-4">
                Not in These Cities?
              </h2>
              <p className="text-gray-300 mb-6">
                Our online music classes are available anywhere in India and
                worldwide. Get the same quality education from the comfort of
                your home.
              </p>
              <LinkButton href="/online-classes" variant="gold" size="lg">
                Explore Online Classes
              </LinkButton>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">🌏</div>
              <p className="text-xl font-semibold">Learn from Anywhere</p>
              <p className="text-gray-400">
                All you need is an internet connection
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Why Local */}
      <Section background="muted">
        <SectionHeader title="Why Choose Local Music Classes?" />
        <Grid cols={3} gap="md">
          <Card padding="lg" className="text-center">
            <div className="text-4xl mb-4">🏠</div>
            <h3 className="font-semibold text-midnight mb-2">Home Tutors</h3>
            <p className="text-sm text-text-secondary">
              Expert teachers come to your home. No commute, no hassle.
            </p>
          </Card>
          <Card padding="lg" className="text-center">
            <div className="text-4xl mb-4">🏫</div>
            <h3 className="font-semibold text-midnight mb-2">
              Academy Centers
            </h3>
            <p className="text-sm text-text-secondary">
              Professional studios with quality instruments and group classes.
            </p>
          </Card>
          <Card padding="lg" className="text-center">
            <div className="text-4xl mb-4">🎭</div>
            <h3 className="font-semibold text-midnight mb-2">
              Local Performances
            </h3>
            <p className="text-sm text-text-secondary">
              Participate in local recitals, concerts, and music events.
            </p>
          </Card>
        </Grid>
      </Section>

      {/* CTA */}
      <Section background="dark">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold font-serif mb-4">
            Find Music Teachers Near You
          </h2>
          <p className="text-gray-300 mb-6">
            Enter your city and instrument preference to get matched with the
            perfect teacher.
          </p>
          <LinkButton href="/book-trial" variant="gold" size="lg">
            Book Free Trial Class
          </LinkButton>
        </div>
      </Section>
    </>
  );
}

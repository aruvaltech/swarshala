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
} from "@/components/ui";
import { instruments } from "@/content/instruments";

export const metadata: Metadata = {
  title: "Music Instruments - Guitar, Piano, Vocals & More | SwarShala",
  description:
    "Learn 15+ musical instruments including Guitar, Piano, Violin, Tabla, Vocals & more. Expert teachers, structured curriculum, and certifications available.",
  alternates: {
    canonical: "https://swarshala.com/instruments",
  },
};

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Instruments", href: "/instruments" },
];

const categories = ["Western", "Indian Classical", "Percussion", "Vocal"];

export default function InstrumentsPage() {
  const groupedInstruments = categories.reduce(
    (acc, category) => {
      acc[category] = instruments.filter((i) => i.category === category);
      return acc;
    },
    {} as Record<string, typeof instruments>,
  );

  return (
    <>
      <PageHeader
        title="Learn Any Musical Instrument"
        subtitle="From Western classics to Indian traditional, we offer expert training in 15+ instruments. Start your musical journey today."
        breadcrumbs={<Breadcrumbs items={breadcrumbs} />}
      />

      {/* All Instruments Grid */}
      <Section>
        <Grid cols={3} gap="md">
          {instruments.map((instrument) => (
            <Link
              key={instrument.slug}
              href={`/instruments/${instrument.slug}`}
              className="group"
            >
              <Card padding="none" className="overflow-hidden h-full">
                <div className="aspect-video relative bg-surface-muted">
                  <Image
                    src={`/images/instruments/${instrument.imageSlug}.jpg`}
                    alt={instrument.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-1 bg-white/90 text-xs font-medium rounded-full text-midnight">
                      {instrument.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-midnight group-hover:text-gold transition-colors text-lg">
                    {instrument.name}
                  </h3>
                  <p className="text-sm text-text-secondary mt-2 line-clamp-2">
                    {instrument.shortDescription}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm text-text-muted">
                      {instrument.levels.length} levels available
                    </span>
                    <span className="text-sm text-gold font-medium group-hover:underline">
                      Learn More →
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </Grid>
      </Section>

      {/* By Category */}
      <Section background="muted">
        <SectionHeader
          title="Browse by Category"
          subtitle="Find instruments that match your musical interests"
        />
        <Grid cols={4} gap="md">
          {categories.map((category) => (
            <Card key={category} className="text-center" padding="lg">
              <h3 className="text-xl font-semibold font-serif text-midnight mb-2">
                {category}
              </h3>
              <p className="text-text-muted text-sm mb-3">
                {groupedInstruments[category]?.length || 0} instruments
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {groupedInstruments[category]?.slice(0, 3).map((inst) => (
                  <Link
                    key={inst.slug}
                    href={`/instruments/${inst.slug}`}
                    className="text-xs text-gold hover:underline"
                  >
                    {inst.name}
                  </Link>
                ))}
              </div>
            </Card>
          ))}
        </Grid>
      </Section>

      {/* Why Learn With Us */}
      <Section>
        <SectionHeader title="Why Learn an Instrument with SwarShala?" />
        <Grid cols={3} gap="md">
          <Card padding="lg" className="text-center">
            <div className="text-4xl mb-4">📚</div>
            <h3 className="font-semibold text-midnight mb-2">
              Structured Curriculum
            </h3>
            <p className="text-sm text-text-secondary">
              Grade-wise syllabus aligned with Trinity, ABRSM, and Indian
              certification boards.
            </p>
          </Card>
          <Card padding="lg" className="text-center">
            <div className="text-4xl mb-4">🎓</div>
            <h3 className="font-semibold text-midnight mb-2">
              Expert Teachers
            </h3>
            <p className="text-sm text-text-secondary">
              Learn from professional musicians with 5+ years of teaching
              experience.
            </p>
          </Card>
          <Card padding="lg" className="text-center">
            <div className="text-4xl mb-4">🏆</div>
            <h3 className="font-semibold text-midnight mb-2">
              Recognized Certifications
            </h3>
            <p className="text-sm text-text-secondary">
              Prepare for and earn certificates from globally recognized music
              boards.
            </p>
          </Card>
        </Grid>
      </Section>

      {/* CTA */}
      <Section background="dark">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold font-serif mb-4">
            Not Sure Which Instrument to Learn?
          </h2>
          <p className="text-gray-300 mb-6">
            Book a free consultation and our experts will help you choose the
            perfect instrument based on your interests, age, and goals.
          </p>
          <LinkButton href="/book-trial" variant="gold" size="lg">
            Get Free Consultation
          </LinkButton>
        </div>
      </Section>
    </>
  );
}

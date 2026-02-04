import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  PageHeader,
  Section,
  Grid,
  Card,
  CardContent,
  LinkButton,
  Breadcrumbs,
} from "@/components/ui";
import { Schema } from "@/components/Schema";
import { generatePersonSchema } from "@/lib/schema";
import { generateTeacherMeta } from "@/lib/seo";
import { teachers, type Teacher } from "@/content/teachers";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return teachers.map((teacher) => ({
    slug: teacher.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const teacher = teachers.find((t) => t.slug === slug);

  if (!teacher) {
    return { title: "Teacher Not Found" };
  }

  return generateTeacherMeta(
    teacher.name,
    teacher.slug,
    teacher.instruments,
    teacher.citySlug,
  );
}

export default async function TeacherPage({ params }: Props) {
  const { slug } = await params;
  const teacher = teachers.find((t) => t.slug === slug);

  if (!teacher) {
    notFound();
  }

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Teachers", href: "/teachers" },
    { name: teacher.name, href: `/teachers/${teacher.slug}` },
  ];

  const similarTeachers = teachers
    .filter(
      (t) =>
        t.slug !== teacher.slug &&
        t.instruments.some((i) => teacher.instruments.includes(i)),
    )
    .slice(0, 3);

  return (
    <>
      <Schema
        schema={generatePersonSchema({
          name: teacher.name,
          slug: teacher.slug,
          title: teacher.title,
          bio: teacher.bio,
          instruments: teacher.instruments,
          city: teacher.citySlug,
          experienceYears: teacher.experienceYears,
          rating: teacher.rating,
        })}
      />

      <PageHeader
        title={teacher.name}
        subtitle={`${teacher.instruments.join(" & ")} Teacher`}
        breadcrumbs={<Breadcrumbs items={breadcrumbs} />}
      />

      <Section>
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <Card padding="none" className="overflow-hidden sticky top-24">
              <div className="aspect-square relative bg-surface-muted">
                <Image
                  src={`/images/teachers/${teacher.slug}.jpg`}
                  alt={teacher.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority
                />
              </div>
              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${i < Math.floor(teacher.rating) ? "text-gold" : "text-border-light"}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="font-semibold text-midnight">
                    {teacher.rating}
                  </span>
                </div>

                <dl className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-text-muted">Experience</dt>
                    <dd className="font-medium text-midnight">
                      {teacher.experienceYears} years
                    </dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-text-muted">Location</dt>
                    <dd className="font-medium text-midnight capitalize">
                      {teacher.citySlug}
                    </dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-text-muted">Languages</dt>
                    <dd className="font-medium text-midnight">
                      {teacher.languages.join(", ")}
                    </dd>
                  </div>
                </dl>

                <div className="mt-6">
                  <LinkButton
                    href="/book-trial"
                    variant="gold"
                    className="w-full"
                  >
                    Book Trial with {teacher.name.split(" ")[0]}
                  </LinkButton>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="md:col-span-2 space-y-8">
            {/* About */}
            <div>
              <h2 className="text-xl font-semibold font-serif text-midnight mb-4">
                About
              </h2>
              <p className="text-text-secondary leading-relaxed">
                {teacher.bio}
              </p>
            </div>

            {/* Instruments */}
            <div>
              <h2 className="text-xl font-semibold font-serif text-midnight mb-4">
                Instruments
              </h2>
              <div className="flex flex-wrap gap-2">
                {teacher.instruments.map((instrument) => (
                  <Link
                    key={instrument}
                    href={`/instruments/${instrument.toLowerCase().replace(/\s+/g, "-")}`}
                    className="px-4 py-2 bg-gold/10 text-gold font-medium rounded-lg hover:bg-gold/20 transition-colors"
                  >
                    {instrument}
                  </Link>
                ))}
              </div>
            </div>

            {/* Specializations */}
            <div>
              <h2 className="text-xl font-semibold font-serif text-midnight mb-4">
                Specializations
              </h2>
              <div className="flex flex-wrap gap-2">
                {teacher.specializations.map((spec) => (
                  <span
                    key={spec}
                    className="px-3 py-1 bg-surface-muted text-text-secondary rounded-full text-sm"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>

            {/* Certifications */}
            {teacher.certifications && teacher.certifications.length > 0 && (
              <div>
                <h2 className="text-xl font-semibold font-serif text-midnight mb-4">
                  Certifications
                </h2>
                <ul className="space-y-2">
                  {teacher.certifications.map((cert, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-text-secondary"
                    >
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
                      {cert}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Highlights */}
            {teacher.highlights && teacher.highlights.length > 0 && (
              <div>
                <h2 className="text-xl font-semibold font-serif text-midnight mb-4">
                  Highlights
                </h2>
                <ul className="space-y-2">
                  {teacher.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-text-secondary"
                    >
                      <span className="text-gold">★</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Teaching Style */}
            <div>
              <h2 className="text-xl font-semibold font-serif text-midnight mb-4">
                Teaching Approach
              </h2>
              <Card padding="lg" className="bg-surface-muted border-none">
                <p className="text-text-secondary italic">
                  &ldquo;{teacher.teachingStyle}&rdquo;
                </p>
              </Card>
            </div>

            {/* Availability */}
            <div>
              <h2 className="text-xl font-semibold font-serif text-midnight mb-4">
                Availability
              </h2>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-success/10 text-success rounded-full text-sm">
                  {teacher.availability}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Similar Teachers */}
      {similarTeachers.length > 0 && (
        <Section background="muted">
          <h2 className="text-2xl font-bold font-serif text-midnight mb-8 text-center">
            Similar Teachers
          </h2>
          <Grid cols={3} gap="md">
            {similarTeachers.map((t) => (
              <Link key={t.slug} href={`/teachers/${t.slug}`}>
                <Card
                  padding="none"
                  className="overflow-hidden hover:border-gold transition-colors"
                >
                  <div className="aspect-square relative bg-surface-muted">
                    <Image
                      src={`/images/teachers/${t.slug}.jpg`}
                      alt={t.name}
                      fill
                      className="object-cover"
                      sizes="33vw"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-midnight">{t.name}</h3>
                    <p className="text-sm text-gold">
                      {t.instruments.join(", ")}
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
            Learn with {teacher.name.split(" ")[0]}
          </h2>
          <p className="text-gray-300 mb-6">
            Book a free trial class and start your musical journey with an
            expert teacher.
          </p>
          <LinkButton href="/book-trial" variant="gold" size="lg">
            Book Free Trial Class
          </LinkButton>
        </div>
      </Section>
    </>
  );
}

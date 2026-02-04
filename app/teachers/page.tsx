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
import { teachers } from "@/content/teachers";

export const metadata: Metadata = {
  title: "Our Music Teachers - Expert Instructors | SwarShala",
  description:
    "Meet our 500+ expert music teachers. Professionally trained instructors for Guitar, Piano, Vocals, Tabla & more with 5+ years experience. Find your perfect teacher.",
  alternates: {
    canonical: "https://swarshala.com/teachers",
  },
};

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Teachers", href: "/teachers" },
];

export default function TeachersPage() {
  return (
    <>
      <PageHeader
        title="Meet Our Expert Teachers"
        subtitle="Learn from professional musicians with years of teaching and performance experience. Every teacher is carefully vetted and trained in our methodology."
        breadcrumbs={<Breadcrumbs items={breadcrumbs} />}
      />

      {/* Stats */}
      <Section background="muted">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl lg:text-4xl font-bold font-serif text-gold">
              500+
            </div>
            <div className="text-text-secondary mt-2">Expert Teachers</div>
          </div>
          <div>
            <div className="text-3xl lg:text-4xl font-bold font-serif text-gold">
              5+
            </div>
            <div className="text-text-secondary mt-2">Years Avg Experience</div>
          </div>
          <div>
            <div className="text-3xl lg:text-4xl font-bold font-serif text-gold">
              15+
            </div>
            <div className="text-text-secondary mt-2">Instruments Taught</div>
          </div>
          <div>
            <div className="text-3xl lg:text-4xl font-bold font-serif text-gold">
              4.9
            </div>
            <div className="text-text-secondary mt-2">Average Rating</div>
          </div>
        </div>
      </Section>

      {/* Featured Teachers Grid */}
      <Section>
        <SectionHeader
          title="Featured Teachers"
          subtitle="Some of our top-rated instructors"
        />
        <Grid cols={3} gap="md">
          {teachers.map((teacher) => (
            <Link key={teacher.slug} href={`/teachers/${teacher.slug}`}>
              <Card
                padding="none"
                className="overflow-hidden hover:border-gold transition-colors h-full"
              >
                <div className="aspect-square relative bg-surface-muted">
                  <Image
                    src={`/images/teachers/${teacher.slug}.jpg`}
                    alt={teacher.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-midnight text-lg">
                    {teacher.name}
                  </h3>
                  <p className="text-gold font-medium text-sm mt-1">
                    {teacher.instruments.join(", ")}
                  </p>
                  <p className="text-text-muted text-sm mt-1">
                    {teacher.experienceYears} years experience
                  </p>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mt-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(teacher.rating) ? "text-gold" : "text-border-light"}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="text-sm text-text-muted ml-1">
                      ({teacher.rating})
                    </span>
                  </div>

                  {/* Specializations */}
                  <div className="flex flex-wrap gap-1 mt-3">
                    {teacher.specializations.slice(0, 2).map((spec) => (
                      <span
                        key={spec}
                        className="px-2 py-0.5 bg-surface-muted text-xs text-text-secondary rounded"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </Grid>
      </Section>

      {/* Our Standards */}
      <Section background="muted">
        <SectionHeader
          title="Our Teacher Standards"
          subtitle="Every SwarShala teacher meets our high standards"
        />
        <Grid cols={3} gap="md">
          <Card padding="lg" className="text-center">
            <div className="text-4xl mb-4">🎓</div>
            <h3 className="font-semibold text-midnight mb-2">
              Qualified & Certified
            </h3>
            <p className="text-sm text-text-secondary">
              Degrees or certifications from recognized music institutions like
              Trinity, ABRSM, or Indian classical boards.
            </p>
          </Card>
          <Card padding="lg" className="text-center">
            <div className="text-4xl mb-4">🎤</div>
            <h3 className="font-semibold text-midnight mb-2">
              Performance Experience
            </h3>
            <p className="text-sm text-text-secondary">
              Active performers who bring real-world experience and passion to
              their teaching.
            </p>
          </Card>
          <Card padding="lg" className="text-center">
            <div className="text-4xl mb-4">📚</div>
            <h3 className="font-semibold text-midnight mb-2">
              Training & Methodology
            </h3>
            <p className="text-sm text-text-secondary">
              Trained in SwarShala's proven methodology for effective, engaging
              music education.
            </p>
          </Card>
          <Card padding="lg" className="text-center">
            <div className="text-4xl mb-4">✅</div>
            <h3 className="font-semibold text-midnight mb-2">
              Background Verified
            </h3>
            <p className="text-sm text-text-secondary">
              Thorough background checks and verification for student safety and
              peace of mind.
            </p>
          </Card>
          <Card padding="lg" className="text-center">
            <div className="text-4xl mb-4">⭐</div>
            <h3 className="font-semibold text-midnight mb-2">Highly Rated</h3>
            <p className="text-sm text-text-secondary">
              Minimum 4.5-star rating from students with regular performance
              reviews.
            </p>
          </Card>
          <Card padding="lg" className="text-center">
            <div className="text-4xl mb-4">🔄</div>
            <h3 className="font-semibold text-midnight mb-2">
              Continuous Learning
            </h3>
            <p className="text-sm text-text-secondary">
              Regular workshops and training to stay updated with teaching
              techniques.
            </p>
          </Card>
        </Grid>
      </Section>

      {/* Become a Teacher CTA */}
      <Section>
        <div className="bg-gradient-to-r from-gold to-gold-dark rounded-2xl p-8 lg:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold font-serif mb-4">
                Are You a Music Teacher?
              </h2>
              <p className="text-white/90 mb-6">
                Join India&apos;s premier music academy network. Teach on your
                schedule, grow your student base, and earn competitive pay.
              </p>
              <LinkButton
                href="/become-a-teacher"
                variant="primary"
                size="lg"
                className="bg-white text-gold hover:bg-gray-100"
              >
                Apply to Teach
              </LinkButton>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">🎵</div>
              <p className="text-xl font-semibold">Earn ₹800-2500/hour</p>
              <p className="text-white/80">Flexible schedule, great students</p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section background="dark">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold font-serif mb-4">
            Find Your Perfect Teacher
          </h2>
          <p className="text-gray-300 mb-6">
            Book a free trial class and we&apos;ll match you with an expert
            teacher based on your goals and preferences.
          </p>
          <LinkButton href="/book-trial" variant="gold" size="lg">
            Book Free Trial Class
          </LinkButton>
        </div>
      </Section>
    </>
  );
}

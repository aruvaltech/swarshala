import type { Metadata } from "next";
import Image from "next/image";
import {
  PageHeader,
  Section,
  SectionHeader,
  Grid,
  Card,
  LinkButton,
  Breadcrumbs,
  TestimonialSection,
} from "@/components/ui";
import { testimonials } from "@/content/testimonials";

export const metadata: Metadata = {
  title: "About SwarShala - India's Premier Music Academy",
  description:
    "Learn about SwarShala, India's leading music academy. Our mission, values, and the team behind 15,000+ successful music learners across 20+ cities.",
  alternates: {
    canonical: "https://swarshala.com/about",
  },
};

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
];

const milestones = [
  { year: "2012", event: "SwarShala founded in Delhi with 3 teachers" },
  { year: "2015", event: "Expanded to 5 major cities, 50+ teachers" },
  { year: "2018", event: "Launched online classes platform" },
  { year: "2020", event: "10,000 students milestone achieved" },
  { year: "2023", event: "Present in 20+ cities with 500+ teachers" },
  { year: "2024", event: "15,000+ students taught, growing strong" },
];

const values = [
  {
    icon: "🎯",
    title: "Excellence",
    description:
      "We strive for the highest standards in music education, from our curriculum to our teachers.",
  },
  {
    icon: "❤️",
    title: "Passion",
    description:
      "Music is our love language. We share this passion with every student we teach.",
  },
  {
    icon: "🌱",
    title: "Growth",
    description:
      "Every student's journey is unique. We nurture individual growth at every pace.",
  },
  {
    icon: "🤝",
    title: "Accessibility",
    description:
      "Quality music education should be accessible to everyone, everywhere.",
  },
];

const team = [
  {
    name: "Priya Sharma",
    role: "Founder & CEO",
    bio: "Classical vocalist with 20+ years of teaching experience. Trinity-certified examiner.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
  },
  {
    name: "Rahul Verma",
    role: "Head of Curriculum",
    bio: "Berklee College alumnus. Designed our signature teaching methodology.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
  },
  {
    name: "Ananya Nair",
    role: "Director of Operations",
    bio: "MBA from IIM. Ensures seamless learning experience across all cities.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About SwarShala"
        subtitle="India's Premier Music Academy - Nurturing Musical Excellence Since 2012"
        breadcrumbs={<Breadcrumbs items={breadcrumbs} />}
      />

      {/* Mission Section */}
      <Section>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold font-serif text-midnight mb-4">
              Our Mission
            </h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              At SwarShala, we believe everyone has a musician within them
              waiting to be discovered. Our mission is to make quality music
              education accessible, enjoyable, and transformative.
            </p>
            <p className="text-text-secondary leading-relaxed mb-6">
              Founded in 2012 by classical vocalist Priya Sharma, SwarShala has
              grown from a small music school in Delhi to India&apos;s premier
              music academy with presence in 20+ cities. We&apos;ve taught over
              15,000 students, from 5-year-old beginners to 70-year-old
              retirees, proving that it&apos;s never too early or too late to
              start your musical journey.
            </p>
            <div className="flex gap-8">
              <div>
                <div className="text-3xl font-bold font-serif text-gold">
                  15,000+
                </div>
                <div className="text-sm text-text-muted">Students Taught</div>
              </div>
              <div>
                <div className="text-3xl font-bold font-serif text-gold">
                  500+
                </div>
                <div className="text-sm text-text-muted">Expert Teachers</div>
              </div>
              <div>
                <div className="text-3xl font-bold font-serif text-gold">
                  20+
                </div>
                <div className="text-sm text-text-muted">Cities</div>
              </div>
            </div>
          </div>
          <div className="aspect-video relative rounded-xl overflow-hidden bg-surface-muted">
            <Image
              src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800"
              alt="SwarShala music class"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section background="muted">
        <SectionHeader
          title="Our Values"
          subtitle="The principles that guide everything we do"
        />
        <Grid cols={4} gap="md">
          {values.map((value) => (
            <Card key={value.title} padding="lg" className="text-center">
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="font-semibold text-midnight mb-2">
                {value.title}
              </h3>
              <p className="text-sm text-text-secondary">{value.description}</p>
            </Card>
          ))}
        </Grid>
      </Section>

      {/* Timeline */}
      <Section>
        <SectionHeader
          title="Our Journey"
          subtitle="From a small music school to India's premier academy"
        />
        <div className="max-w-2xl mx-auto">
          <div className="space-y-8">
            {milestones.map((milestone, i) => (
              <div key={milestone.year} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center">
                    <span className="text-gold font-bold">
                      {milestone.year}
                    </span>
                  </div>
                </div>
                <div className="pt-4">
                  <p className="text-text-secondary">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Team */}
      <Section background="muted">
        <SectionHeader
          title="Leadership Team"
          subtitle="The people driving our mission"
        />
        <Grid cols={3} gap="md">
          {team.map((member) => (
            <Card
              key={member.name}
              padding="none"
              className="overflow-hidden text-center"
            >
              <div className="aspect-square relative bg-surface-muted">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-midnight">{member.name}</h3>
                <p className="text-gold text-sm font-medium mt-1">
                  {member.role}
                </p>
                <p className="text-sm text-text-secondary mt-2">{member.bio}</p>
              </div>
            </Card>
          ))}
        </Grid>
      </Section>

      {/* Testimonials */}
      <TestimonialSection
        title="What Our Students Say"
        testimonials={testimonials.slice(0, 3)}
      />

      {/* CTA */}
      <Section background="dark">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold font-serif mb-4">
            Join Our Musical Family
          </h2>
          <p className="text-gray-300 mb-6">
            Start your journey with India&apos;s most trusted music academy.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <LinkButton href="/book-trial" variant="gold" size="lg">
              Book Free Trial Class
            </LinkButton>
            <LinkButton
              href="/become-a-teacher"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-midnight"
            >
              Join as Teacher
            </LinkButton>
          </div>
        </div>
      </Section>
    </>
  );
}

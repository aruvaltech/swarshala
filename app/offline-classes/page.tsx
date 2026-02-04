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
  FAQSection,
} from "@/components/ui";
import { Schema } from "@/components/Schema";
import { generateServiceSchema } from "@/lib/schema";
import { cities } from "@/content/cities";

export const metadata: Metadata = {
  title: "Music Academy Centers | Offline Classes | SwarShala",
  description:
    "Learn music at our academy centers across 20+ Indian cities. Fully equipped studios, group classes, and practice rooms. Visit us for in-person music training.",
  alternates: {
    canonical: "https://swarshala.com/offline-classes",
  },
};

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Classes", href: "/classes" },
  { name: "Center Classes", href: "/offline-classes" },
];

const citiesWithCenters = cities.filter((c) => c.hasCenter).slice(0, 12);

const features = [
  {
    icon: "🏫",
    title: "Professional Studios",
    description:
      "Soundproofed rooms with professional-grade instruments and recording equipment.",
  },
  {
    icon: "🎹",
    title: "Quality Instruments",
    description:
      "Access to premium instruments during your lessons – no need to bring your own.",
  },
  {
    icon: "👥",
    title: "Group Sessions",
    description:
      "Learn alongside peers in small group classes for a collaborative experience.",
  },
  {
    icon: "🎭",
    title: "Live Performances",
    description:
      "Regular recitals and concerts at our centers to showcase your progress.",
  },
  {
    icon: "📖",
    title: "Theory Classes",
    description:
      "Dedicated music theory and ear training sessions alongside practical lessons.",
  },
  {
    icon: "☕",
    title: "Student Lounge",
    description:
      "Comfortable waiting areas for parents and practice spaces for students.",
  },
];

const faqs = [
  {
    question: "What are the timings of your centers?",
    answer:
      "Our centers are typically open from 9 AM to 9 PM on weekdays and 9 AM to 6 PM on weekends. Specific timings may vary by location.",
  },
  {
    question: "Do I need to bring my own instrument?",
    answer:
      "No, our centers are equipped with quality instruments for all classes. However, you are welcome to bring your own instrument if you prefer.",
  },
  {
    question: "Can I use practice rooms at the center?",
    answer:
      "Yes, enrolled students can book practice rooms at our centers for ₹200/hour, subject to availability.",
  },
  {
    question: "Is parking available at the centers?",
    answer:
      "Most of our centers have dedicated parking or are located near public parking facilities. Check the specific center page for details.",
  },
];

export default function OfflineClassesPage() {
  return (
    <>
      <Schema
        schema={generateServiceSchema({
          name: "Center Classes",
          slug: "center-classes",
          description:
            "Learn music at our academy centers with fully equipped studios, group classes, and practice rooms.",
          serviceType: "MusicEducation",
        })}
      />

      <PageHeader
        title="Music Academy Centers"
        subtitle="Experience immersive music learning at our professionally equipped academy centers across India. State-of-the-art studios, quality instruments, and expert teachers."
        breadcrumbs={<Breadcrumbs items={breadcrumbs} />}
      />

      {/* Hero Section */}
      <Section>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold font-serif text-midnight mb-4">
              The Complete Academy Experience
            </h2>
            <p className="text-text-secondary mb-6 leading-relaxed">
              Our academy centers provide a dedicated space for your musical
              journey. With soundproofed studios, professional instruments, and
              a community of fellow learners, you get the full music school
              experience.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-3 text-text-secondary">
                <span className="text-gold font-bold">✓</span>
                Professional soundproofed studios
              </li>
              <li className="flex items-center gap-3 text-text-secondary">
                <span className="text-gold font-bold">✓</span>
                Premium instruments provided
              </li>
              <li className="flex items-center gap-3 text-text-secondary">
                <span className="text-gold font-bold">✓</span>
                Small batch sizes (max 6 students)
              </li>
              <li className="flex items-center gap-3 text-text-secondary">
                <span className="text-gold font-bold">✓</span>
                Regular performances & recitals
              </li>
            </ul>
            <div className="flex flex-wrap gap-4">
              <LinkButton href="/book-trial" variant="gold" size="lg">
                Visit Our Center
              </LinkButton>
              <LinkButton href="#centers" variant="outline">
                Find Nearest Center
              </LinkButton>
            </div>
          </div>
          <div className="aspect-video relative rounded-xl overflow-hidden bg-surface-muted">
            <Image
              src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800"
              alt="SwarShala music academy center"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </Section>

      {/* Features */}
      <Section background="muted">
        <SectionHeader
          title="What Our Centers Offer"
          subtitle="Everything you need for a complete music learning experience"
        />
        <Grid cols={3} gap="md">
          {features.map((feature) => (
            <Card key={feature.title} className="text-center" padding="lg">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold font-serif text-midnight mb-2">
                {feature.title}
              </h3>
              <p className="text-text-secondary text-sm">
                {feature.description}
              </p>
            </Card>
          ))}
        </Grid>
      </Section>

      {/* Centers List */}
      <Section id="centers">
        <SectionHeader
          title="Find a Center Near You"
          subtitle="Visit one of our academy centers across India"
        />
        <Grid cols={4} gap="md">
          {citiesWithCenters.map((city) => (
            <Link key={city.slug} href={`/centers/${city.slug}`}>
              <Card className="text-center hover:border-gold transition-colors">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-midnight">{city.name}</h3>
                  {city.center && (
                    <p className="text-sm text-text-muted mt-1 line-clamp-1">
                      {city.center.address.split(",")[0]}
                    </p>
                  )}
                </CardContent>
              </Card>
            </Link>
          ))}
        </Grid>
        <div className="mt-8 text-center">
          <LinkButton href="/cities" variant="secondary">
            View All Locations →
          </LinkButton>
        </div>
      </Section>

      {/* Virtual Tour CTA */}
      <Section background="muted">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="aspect-video relative rounded-xl overflow-hidden bg-surface-alt">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-gold/90 flex items-center justify-center cursor-pointer hover:bg-gold transition-colors">
                <svg
                  className="w-10 h-10 text-white ml-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                </svg>
              </div>
            </div>
            <Image
              src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800"
              alt="Virtual tour of SwarShala center"
              fill
              className="object-cover opacity-80"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold font-serif text-midnight mb-4">
              Take a Virtual Tour
            </h2>
            <p className="text-text-secondary mb-6">
              Can&apos;t visit in person? Take a virtual tour of our centers and
              see our studios, instruments, and facilities before you enroll.
            </p>
            <LinkButton href="/contact" variant="primary">
              Schedule Virtual Tour
            </LinkButton>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <FAQSection title="Center Classes FAQs" items={faqs} />

      {/* CTA */}
      <Section background="dark">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold font-serif mb-4">Visit Us Today</h2>
          <p className="text-gray-300 mb-6">
            Book a free center visit and trial class. Experience our facilities
            firsthand.
          </p>
          <LinkButton href="/book-trial" variant="gold" size="lg">
            Book Center Visit
          </LinkButton>
        </div>
      </Section>
    </>
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  PageHeader,
  Section,
  Card,
  LinkButton,
  Breadcrumbs,
  FAQSection,
  TestimonialSection,
} from "@/components/ui";
import { Schema } from "@/components/Schema";
import { instruments } from "@/content/instruments";
import { courseLevels } from "@/content/courseLevels";
import { testimonials } from "@/content/testimonials";
import { generateCourseSchema } from "@/lib/schema";
import { SITE_URL, formatPrice } from "@/lib/utils";

interface Props {
  params: Promise<{ instrument: string; level: string }>;
}

export async function generateStaticParams() {
  const params: { instrument: string; level: string }[] = [];

  for (const instrument of instruments) {
    for (const level of courseLevels) {
      params.push({
        instrument: instrument.slug,
        level: level.slug,
      });
    }
  }

  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { instrument: instrumentSlug, level: levelSlug } = await params;
  const instrument = instruments.find((i) => i.slug === instrumentSlug);
  const level = courseLevels.find((l) => l.slug === levelSlug);

  if (!instrument || !level) {
    return {
      title: "Course Not Found | SwarShala",
    };
  }

  const title = `${level.name} ${instrument.name} Course - Learn ${instrument.name} Online & Offline`;
  const description = `${level.name} ${instrument.name} lessons for ${level.targetAudience.join(", ")}. ${level.duration} course. Expert teachers, structured curriculum. Enroll now!`;

  return {
    title: `${title} | SwarShala`,
    description,
    keywords: [
      `${level.slug} ${instrument.name} course`,
      `learn ${instrument.name} ${level.slug}`,
      `${instrument.name} classes ${level.slug}`,
      `${instrument.name} lessons`,
      `online ${instrument.name} course`,
    ],
    alternates: {
      canonical: `https://swarshala.com/courses/${instrument.slug}/${level.slug}`,
    },
  };
}

export default async function CourseDetailPage({ params }: Props) {
  const { instrument: instrumentSlug, level: levelSlug } = await params;
  const instrument = instruments.find((i) => i.slug === instrumentSlug);
  const level = courseLevels.find((l) => l.slug === levelSlug);

  if (!instrument || !level) {
    notFound();
  }

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Instruments", href: "/instruments" },
    { name: instrument.name, href: `/instruments/${instrument.slug}` },
    { name: level.name, href: `/courses/${instrument.slug}/${level.slug}` },
  ];

  // Filter testimonials for this instrument
  const courseTestimonials = testimonials
    .filter((t) => t.instrument === instrument.name)
    .slice(0, 3);

  const courseSchema = generateCourseSchema({
    name: `${level.name} ${instrument.name} Course`,
    instrument: instrument.name,
    level: level.slug,
    description: `Comprehensive ${level.name.toLowerCase()} level ${instrument.name} training with expert instructors`,
    duration: level.duration,
    slug: `${instrument.slug}/${level.slug}`,
  });

  // Sample curriculum based on level
  const curriculum =
    level.slug === "beginner"
      ? [
          {
            week: "1-2",
            topic: "Introduction & Basics",
            content: `Introduction to ${instrument.name}, proper posture, holding technique, basic anatomy and care`,
          },
          {
            week: "3-4",
            topic: "Fundamental Techniques",
            content:
              "Basic playing techniques, finger positioning, first exercises",
          },
          {
            week: "5-8",
            topic: "Simple Melodies",
            content:
              "Learning first songs, simple scale patterns, rhythm basics",
          },
          {
            week: "9-12",
            topic: "Building Foundation",
            content:
              "Common chord progressions, reading basic notation, practice routines",
          },
        ]
      : level.slug === "intermediate"
        ? [
            {
              week: "1-4",
              topic: "Advanced Techniques",
              content:
                "Complex fingering, speed exercises, dynamics and expression",
            },
            {
              week: "5-8",
              topic: "Theory & Composition",
              content:
                "Music theory deep-dive, improvisation basics, composition introduction",
            },
            {
              week: "9-12",
              topic: "Genre Exploration",
              content:
                "Different musical styles, performance techniques, ensemble playing",
            },
            {
              week: "13-16",
              topic: "Exam Preparation",
              content:
                "Grade exam preparation, recital practice, professional performance tips",
            },
          ]
        : [
            {
              week: "1-8",
              topic: "Mastery Techniques",
              content:
                "Virtuoso techniques, advanced improvisation, personal style development",
            },
            {
              week: "9-16",
              topic: "Professional Development",
              content:
                "Stage performance, recording techniques, career guidance",
            },
            {
              week: "17-24",
              topic: "Specialization",
              content:
                "Focus area deep-dive, research project, original compositions",
            },
          ];

  const faqs = [
    {
      question: `Is this ${level.name.toLowerCase()} course right for me?`,
      answer: `This course is ideal for ${level.targetAudience.join(", ")}.`,
    },
    {
      question: "What materials do I need?",
      answer: `You'll need your own ${instrument.name}. We can help you select an appropriate instrument based on your budget. Basic music supplies like a music stand and notebook are also helpful.`,
    },
    {
      question: "How long until I see progress?",
      answer: `Most students notice significant improvement within ${level.slug === "beginner" ? "4-6 weeks" : "2-3 months"} of consistent practice. Our structured curriculum ensures steady progress.`,
    },
    {
      question: "Can I switch levels if it's too easy/hard?",
      answer:
        "Yes! We assess your level during the first few classes and can adjust your placement. Moving between levels is seamless.",
    },
    {
      question: "Are exams included?",
      answer: `Our ${level.name.toLowerCase()} course prepares you for ${level.slug === "beginner" ? "Grade 1-2" : level.slug === "intermediate" ? "Grade 3-5" : "Grade 6-8 and diploma"} exams. Exam fees are separate.`,
    },
  ];

  // Other levels for this instrument
  const otherLevels = courseLevels.filter((l) => l.slug !== level.slug);

  return (
    <>
      <Schema schema={courseSchema} />

      <PageHeader
        title={`${level.name} ${instrument.name} Course`}
        subtitle={`${level.duration} comprehensive course designed for ${level.targetAudience.join(", ").toLowerCase()}`}
        breadcrumbs={<Breadcrumbs items={breadcrumbs} />}
      />

      {/* Course Overview */}
      <Section>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold font-serif text-midnight mb-4">
              Course Overview
            </h2>
            <p className="text-text-secondary mb-6">
              Our {level.name.toLowerCase()} {instrument.name} course provides a
              structured, comprehensive approach to learning {instrument.name}.
              Designed for {level.targetAudience.join(", ").toLowerCase()}, this
              course covers everything from{" "}
              {level.slug === "beginner"
                ? "the absolute basics"
                : level.slug === "intermediate"
                  ? "intermediate techniques"
                  : "advanced mastery"}{" "}
              to
              {level.slug === "beginner"
                ? " playing your first songs"
                : level.slug === "intermediate"
                  ? " complex pieces and improvisation"
                  : " professional-level performance"}
              .
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">📅</span>
                <div>
                  <p className="font-medium text-midnight">Duration</p>
                  <p className="text-sm text-text-secondary">
                    {level.duration}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">📚</span>
                <div>
                  <p className="font-medium text-midnight">Classes per Week</p>
                  <p className="text-sm text-text-secondary">2-3 sessions</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">⏱️</span>
                <div>
                  <p className="font-medium text-midnight">Session Length</p>
                  <p className="text-sm text-text-secondary">45-60 minutes</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🎓</span>
                <div>
                  <p className="font-medium text-midnight">Certification</p>
                  <p className="text-sm text-text-secondary">Included</p>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Card */}
          <Card
            padding="lg"
            className="bg-gradient-to-br from-gold/10 to-gold/5 border-gold/30"
          >
            <div className="text-center">
              <p className="text-sm text-text-muted uppercase tracking-wide mb-2">
                Starting from
              </p>
              <p className="text-4xl font-bold text-midnight">
                {formatPrice(
                  level.slug === "beginner"
                    ? 3000
                    : level.slug === "intermediate"
                      ? 4000
                      : 5000,
                )}
                <span className="text-lg font-normal text-text-muted">
                  /month
                </span>
              </p>
              <p className="text-sm text-text-secondary mt-2">
                2-3 classes/week
              </p>
            </div>
            <div className="space-y-3 mt-6">
              <div className="flex items-center gap-2 text-sm">
                <span className="text-green-600">✓</span>
                <span>Expert certified teachers</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-green-600">✓</span>
                <span>Flexible online/offline</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-green-600">✓</span>
                <span>Progress tracking</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-green-600">✓</span>
                <span>Recording of sessions</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-green-600">✓</span>
                <span>Performance opportunities</span>
              </div>
            </div>
            <LinkButton
              href="/book-trial"
              variant="primary"
              size="lg"
              className="w-full mt-6"
            >
              Book Free Trial
            </LinkButton>
          </Card>
        </div>
      </Section>

      {/* Curriculum */}
      <Section background="muted">
        <h2 className="text-2xl font-bold font-serif text-midnight mb-8">
          Course Curriculum
        </h2>
        <div className="space-y-4">
          {curriculum.map((item, index) => (
            <Card key={index} padding="lg">
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="md:w-24 flex-shrink-0">
                  <span className="inline-block px-3 py-1 bg-gold/20 text-gold text-sm font-medium rounded">
                    Week {item.week}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-midnight">{item.topic}</h3>
                  <p className="text-sm text-text-secondary mt-1">
                    {item.content}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Skills You'll Learn */}
      <Section>
        <h2 className="text-2xl font-bold font-serif text-midnight mb-8">
          Skills You'll Develop
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {level.outcomes.slice(0, 4).map((skill) => (
            <Card key={skill} padding="md" className="text-center">
              <span className="text-2xl block mb-2">🎯</span>
              <p className="font-medium text-midnight">{skill}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      {courseTestimonials.length > 0 && (
        <TestimonialSection
          title={`What ${instrument.name} Students Say`}
          testimonials={courseTestimonials}
        />
      )}

      {/* FAQ */}
      <FAQSection title="Course FAQs" items={faqs} />

      {/* Other Levels */}
      <Section background="muted">
        <h2 className="text-2xl font-bold font-serif text-midnight mb-8 text-center">
          Explore Other Levels
        </h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {otherLevels.map((otherLevel) => (
            <Card key={otherLevel.slug} padding="lg">
              <h3 className="font-semibold text-midnight mb-2">
                {otherLevel.name} {instrument.name}
              </h3>
              <p className="text-sm text-text-secondary mb-4">
                {otherLevel.shortDescription}
              </p>
              <LinkButton
                href={`/courses/${instrument.slug}/${otherLevel.slug}`}
                variant="outline"
                size="sm"
              >
                Learn More
              </LinkButton>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold font-serif text-midnight mb-4">
            Ready to Start Learning {instrument.name}?
          </h2>
          <p className="text-text-secondary mb-6">
            Book a free trial class and meet your teacher. No commitment
            required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <LinkButton href="/book-trial" variant="primary" size="lg">
              Book Free Trial
            </LinkButton>
            <LinkButton href="/contact" variant="outline" size="lg">
              Ask Questions
            </LinkButton>
          </div>
        </div>
      </Section>
    </>
  );
}

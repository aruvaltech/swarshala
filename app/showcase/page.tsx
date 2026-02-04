import type { Metadata } from "next";
import {
  PageHeader,
  Section,
  Card,
  LinkButton,
  Breadcrumbs,
} from "@/components/ui";

export const metadata: Metadata = {
  title: "Student Showcase - Performances & Achievements | SwarShala",
  description:
    "Watch SwarShala student performances, recitals, and achievements. See our students perform at concerts, pass exams, and achieve their musical dreams.",
  alternates: {
    canonical: "https://swarshala.com/showcase",
  },
};

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Student Showcase", href: "/showcase" },
];

const showcaseStats = [
  { value: "2,500+", label: "Student Performances" },
  { value: "98%", label: "Exam Pass Rate" },
  { value: "150+", label: "Concert Appearances" },
  { value: "45", label: "Award Winners" },
];

const featuredPerformances = [
  {
    id: 1,
    student: "Aanya Sharma",
    age: 14,
    instrument: "Violin",
    title: "Hindustani Classical Recital",
    event: "SwarShala Annual Concert 2024",
    description:
      "A mesmerizing performance of Raag Yaman in the traditional Hindustani style.",
    duration: "8:45",
    views: "12.5K",
    thumbnail: "/images/showcase/violin-1.jpg",
  },
  {
    id: 2,
    student: "Rohit Patel",
    age: 22,
    instrument: "Guitar",
    title: "Spanish Guitar Masterpiece",
    event: "Inter-College Music Competition",
    description: "First place winner performing Asturias by Isaac Albéniz.",
    duration: "6:30",
    views: "8.2K",
    thumbnail: "/images/showcase/guitar-1.jpg",
  },
  {
    id: 3,
    student: "Meera Krishnan",
    age: 28,
    instrument: "Hindustani Vocals",
    title: "Thumri in Raag Bhairavi",
    event: "Cultural Festival Chennai",
    description:
      "A soulful semi-classical rendition that received a standing ovation.",
    duration: "12:15",
    views: "15.8K",
    thumbnail: "/images/showcase/vocals-1.jpg",
  },
  {
    id: 4,
    student: "Arjun Mehta",
    age: 16,
    instrument: "Piano",
    title: "Moonlight Sonata - Beethoven",
    event: "Trinity Grade 8 Examination",
    description:
      "Distinction grade performance of the complete first movement.",
    duration: "7:00",
    views: "9.1K",
    thumbnail: "/images/showcase/piano-1.jpg",
  },
  {
    id: 5,
    student: "Priya Singh",
    age: 11,
    instrument: "Tabla",
    title: "Teental Composition",
    event: "Young Talents Festival",
    description:
      "Youngest performer at the festival, showcasing exceptional rhythm skills.",
    duration: "5:30",
    views: "7.3K",
    thumbnail: "/images/showcase/tabla-1.jpg",
  },
  {
    id: 6,
    student: "Vikram Das",
    age: 35,
    instrument: "Harmonium",
    title: "Bhajan Medley",
    event: "Temple Cultural Program",
    description:
      "Adult learner performing devotional music after just 1 year of training.",
    duration: "10:20",
    views: "5.6K",
    thumbnail: "/images/showcase/harmonium-1.jpg",
  },
];

const achievements = [
  {
    category: "Competition Winners",
    items: [
      "National Music Competition - 12 Gold Medals (2024)",
      "Sur Sangam Young Artist Award - 5 Winners",
      "Inter-State Cultural Festival - Best Ensemble",
      "Youth Talent India - 3 Finalists",
    ],
  },
  {
    category: "Exam Results",
    items: [
      "Trinity College London - 98% Pass Rate",
      "ABRSM Examinations - 95% Merit/Distinction",
      "Akhil Bharatiya Gandharva Mahavidyalaya - 120+ Graduates",
      "Prayag Sangeet Samiti - 85+ Certified",
    ],
  },
  {
    category: "Notable Appearances",
    items: [
      "TEDx Bangalore - Student Speaker & Performer",
      "Indian Idol Season 14 - 2 Contestants",
      "MTV Unplugged - Guest Performance",
      "AIR Classical Hour - Featured Artists",
    ],
  },
];

const upcomingEvents = [
  {
    date: "Jan 15, 2025",
    title: "Winter Recital 2025",
    location: "Kamani Auditorium, Delhi",
    type: "Annual Concert",
  },
  {
    date: "Feb 8, 2025",
    title: "Young Maestros",
    location: "Online Event",
    type: "Virtual Showcase",
  },
  {
    date: "Mar 22, 2025",
    title: "Trinity Exam Prep Concert",
    location: "SwarShala Centers",
    type: "Exam Preparation",
  },
];

export default function ShowcasePage() {
  return (
    <>
      <PageHeader
        title="Student Showcase"
        subtitle="Celebrating the musical achievements of our talented SwarShala community"
        breadcrumbs={<Breadcrumbs items={breadcrumbs} />}
      />

      {/* Stats */}
      <Section>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {showcaseStats.map((stat) => (
            <Card key={stat.label} padding="lg" className="text-center">
              <div className="text-3xl font-bold text-gold">{stat.value}</div>
              <div className="text-text-secondary mt-1 text-sm">
                {stat.label}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Featured Performances */}
      <Section background="muted">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-serif text-midnight mb-4">
            Featured Performances
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Watch our students shine in concerts, competitions, and examinations
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredPerformances.map((performance) => (
            <Card key={performance.id} className="overflow-hidden">
              {/* Video Thumbnail Placeholder */}
              <div className="aspect-video bg-midnight relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">
                    <span className="text-3xl">▶️</span>
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  {performance.duration}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-midnight mb-1">
                  {performance.title}
                </h3>
                <p className="text-sm text-gold mb-2">
                  {performance.instrument}
                </p>
                <p className="text-sm text-text-secondary mb-3">
                  {performance.description}
                </p>
                <div className="flex items-center justify-between text-xs text-text-muted">
                  <span>
                    {performance.student}, {performance.age} yrs
                  </span>
                  <span>{performance.views} views</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <LinkButton href="#" variant="outline">
            View All Performances
          </LinkButton>
        </div>
      </Section>

      {/* Achievements */}
      <Section>
        <h2 className="text-3xl font-bold font-serif text-midnight mb-12 text-center">
          Awards & Achievements
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((category) => (
            <Card key={category.category} padding="lg">
              <h3 className="font-semibold text-midnight mb-4 text-lg">
                {category.category}
              </h3>
              <ul className="space-y-3">
                {category.items.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-sm text-text-secondary"
                  >
                    <span className="text-gold">🏆</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      {/* Upcoming Events */}
      <Section background="muted">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold font-serif text-midnight mb-8 text-center">
            Upcoming Showcase Events
          </h2>
          <div className="space-y-4">
            {upcomingEvents.map((event) => (
              <Card key={event.title} padding="lg">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="text-center md:text-left md:w-32">
                    <div className="text-gold font-semibold">{event.date}</div>
                    <div className="text-xs text-text-muted uppercase tracking-wide">
                      {event.type}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-midnight">
                      {event.title}
                    </h3>
                    <p className="text-sm text-text-secondary">
                      {event.location}
                    </p>
                  </div>
                  <LinkButton href="/contact" variant="outline" size="sm">
                    Learn More
                  </LinkButton>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Submit Performance */}
      <Section>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold font-serif text-midnight mb-4">
            Are You a SwarShala Student?
          </h2>
          <p className="text-text-secondary mb-6">
            Submit your performance to be featured on our showcase. Share your
            musical journey and inspire others!
          </p>
          <LinkButton href="/contact" variant="primary">
            Submit Your Performance
          </LinkButton>
        </div>
      </Section>

      {/* CTA */}
      <Section background="dark">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold font-serif mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-gray-300 mb-6">
            Join SwarShala and be part of our next showcase. Every great
            performance starts with a single lesson.
          </p>
          <LinkButton href="/book-trial" variant="gold" size="lg">
            Book Your Free Trial
          </LinkButton>
        </div>
      </Section>
    </>
  );
}

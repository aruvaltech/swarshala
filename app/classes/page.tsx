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
import { generateServiceSchema, generateFAQSchema } from "@/lib/schema";
import { programs } from "@/content/programs";
import { globalFaqs, getFAQsByCategory } from "@/content/faqs";

export const metadata: Metadata = {
  title: "Music Classes - Online, Home Tutor & Center | SwarShala",
  description:
    "Choose your ideal learning mode: online music classes from anywhere, home tutors who come to you, or learn at our academy centers. Flexible scheduling & expert teachers.",
  alternates: {
    canonical: "https://swarshala.com/classes",
  },
};

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Classes", href: "/classes" },
];

const programsFaqs = getFAQsByCategory("Programs").slice(0, 6);

export default function ClassesPage() {
  return (
    <>
      <Schema
        schema={generateServiceSchema({
          name: "Music Classes",
          slug: "music-classes",
          description:
            "Online, home tutor, and center-based music classes across India",
          serviceType: "Music Education",
        })}
      />
      <Schema
        schema={generateFAQSchema(
          programsFaqs.map((f) => ({ question: f.question, answer: f.answer })),
        )}
      />

      <PageHeader
        title="Music Classes for Everyone"
        subtitle="Whether you prefer learning from home, with a personal tutor, or at our academy centers – we have the perfect program for you."
        breadcrumbs={<Breadcrumbs items={breadcrumbs} />}
      />

      {/* Programs Overview */}
      <Section>
        <div className="space-y-16">
          {programs.map((program, index) => (
            <div
              key={program.slug}
              id={program.slug}
              className={`grid md:grid-cols-2 gap-8 lg:gap-12 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "md:order-2" : ""}>
                <div className="aspect-video relative rounded-xl overflow-hidden bg-surface-muted flex items-center justify-center">
                  {/* <span className="text-8xl">{program.icon}</span> */}
                  <Image
                    src={`./images/classes/${program.icon}.svg`}
                    alt={program.name}
                    fill
                    className="object-cover "
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </div>
              <div className={index % 2 === 1 ? "md:order-1" : ""}>
                <span className="text-5xl mb-4 block">{program.icon}</span>
                <h2 className="text-2xl lg:text-3xl font-bold font-serif text-midnight mb-4">
                  {program.name}
                </h2>
                <p className="text-text-secondary mb-4 leading-relaxed">
                  {program.description}
                </p>

                {/* Benefits */}
                <ul className="space-y-2 mb-6">
                  {program.benefits.slice(0, 4).map((benefit, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-text-secondary"
                    >
                      <svg
                        className="w-5 h-5 text-success flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>

                <LinkButton href="/book-trial" variant="gold">
                  Book Free Trial
                </LinkButton>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Comparison Table */}
      <Section background="muted">
        <SectionHeader
          title="Compare Learning Modes"
          subtitle="Find the program that best fits your lifestyle"
        />
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-xl border border-border-light">
            <thead>
              <tr className="border-b border-border-light">
                <th className="px-4 py-4 text-left font-semibold text-midnight">
                  Feature
                </th>
                {programs.map((p) => (
                  <th
                    key={p.slug}
                    className="px-4 py-4 text-center font-semibold text-midnight"
                  >
                    {p.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border-light">
                <td className="px-4 py-3 text-text-secondary">Session Type</td>
                <td className="px-4 py-3 text-center">1-on-1</td>
                <td className="px-4 py-3 text-center">3-6 students</td>
                <td className="px-4 py-3 text-center">1-on-1</td>
                <td className="px-4 py-3 text-center">1-on-1</td>
                <td className="px-4 py-3 text-center">1-on-1 / Group</td>
              </tr>
              <tr className="border-b border-border-light">
                <td className="px-4 py-3 text-text-secondary">Location</td>
                <td className="px-4 py-3 text-center">Your home</td>
                <td className="px-4 py-3 text-center">Center</td>
                <td className="px-4 py-3 text-center">Your home</td>
                <td className="px-4 py-3 text-center">Center</td>
                <td className="px-4 py-3 text-center">Anywhere</td>
              </tr>
              <tr className="border-b border-border-light">
                <td className="px-4 py-3 text-text-secondary">Scheduling</td>
                <td className="px-4 py-3 text-center">Flexible</td>
                <td className="px-4 py-3 text-center">Fixed</td>
                <td className="px-4 py-3 text-center">Flexible</td>
                <td className="px-4 py-3 text-center">Flexible</td>
                <td className="px-4 py-3 text-center">Most Flexible</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-text-secondary">
                  Starting Price
                </td>
                <td className="px-4 py-3 text-center text-gold font-semibold">
                  ₹1200/hr
                </td>
                <td className="px-4 py-3 text-center text-gold font-semibold">
                  ₹600/hr
                </td>
                <td className="px-4 py-3 text-center text-gold font-semibold">
                  ₹1500/hr
                </td>
                <td className="px-4 py-3 text-center text-gold font-semibold">
                  ₹1000/hr
                </td>
                <td className="px-4 py-3 text-center text-gold font-semibold">
                  ₹800/hr
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      {/* FAQ Section */}
      <FAQSection title="Questions About Our Programs" items={programsFaqs} />

      {/* CTA */}
      <Section background="dark">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold font-serif mb-4">
            Not Sure Which Program to Choose?
          </h2>
          <p className="text-gray-300 mb-6">
            Book a free consultation call and our team will help you find the
            perfect learning mode based on your goals and schedule.
          </p>
          <LinkButton href="/book-trial" variant="gold" size="lg">
            Get Free Consultation
          </LinkButton>
        </div>
      </Section>
    </>
  );
}

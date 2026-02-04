"use client";

import { useState } from "react";
import {
  PageHeader,
  Section,
  Card,
  Breadcrumbs,
  LinkButton,
} from "@/components/ui";
import { Input, Textarea, Select, Checkbox } from "@/components/ui/Form";
import { instruments } from "@/content/instruments";

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Become a Teacher", href: "/become-a-teacher" },
];

const benefits = [
  {
    icon: "💰",
    title: "Competitive Earnings",
    description:
      "Earn ₹500 - ₹2,000 per hour based on experience and specialization",
  },
  {
    icon: "⏰",
    title: "Flexible Schedule",
    description: "Set your own availability. Teach when it works for you.",
  },
  {
    icon: "🏠",
    title: "Work from Anywhere",
    description: "Teach online from home or at our well-equipped centers",
  },
  {
    icon: "📈",
    title: "Career Growth",
    description:
      "Advance to senior roles, curriculum design, and leadership positions",
  },
  {
    icon: "🎓",
    title: "Training & Development",
    description:
      "Regular workshops, certifications, and skill enhancement programs",
  },
  {
    icon: "🤝",
    title: "Supportive Community",
    description: "Join 500+ teachers who collaborate and grow together",
  },
];

const requirements = [
  "Minimum 3 years of formal music training or equivalent experience",
  "Proficiency in at least one instrument or vocal style",
  "Passion for teaching and nurturing student talent",
  "Strong communication skills in English and Hindi",
  "Reliable internet connection for online classes (if applicable)",
  "Clear background check and verification",
];

const process = [
  {
    step: 1,
    title: "Submit Application",
    description:
      "Fill out the form with your details, experience, and teaching style",
  },
  {
    step: 2,
    title: "Skill Assessment",
    description:
      "A 30-minute video call to evaluate your musical skills and teaching approach",
  },
  {
    step: 3,
    title: "Demo Class",
    description:
      "Conduct a sample class with our team to showcase your teaching method",
  },
  {
    step: 4,
    title: "Onboarding",
    description:
      "Complete training, platform setup, and start teaching within a week",
  },
];

export default function BecomeATeacherPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      city: formData.get("city"),
      instrument: formData.get("instrument"),
      experience: formData.get("experience"),
      teaching_mode: formData.get("teaching_mode"),
      availability: formData.get("availability"),
      about: formData.get("about"),
      portfolio: formData.get("portfolio"),
      qualification: formData.get("qualification"),
      honeypot: formData.get("website"),
    };

    try {
      const response = await fetch("/api/teachers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const result = await response.json();
        throw new Error(result.error || "Failed to submit application");
      }

      setIsSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <PageHeader
        title="Become a SwarShala Teacher"
        subtitle="Share your musical expertise. Inspire the next generation. Earn while you teach."
        breadcrumbs={<Breadcrumbs items={breadcrumbs} />}
      />

      {/* Benefits */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-serif text-midnight mb-4">
            Why Teach with SwarShala?
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Join India's premier music academy and make a meaningful impact
            while building your career
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit) => (
            <Card key={benefit.title} padding="lg">
              <div className="text-3xl mb-3">{benefit.icon}</div>
              <h3 className="font-semibold text-midnight mb-2">
                {benefit.title}
              </h3>
              <p className="text-text-secondary text-sm">
                {benefit.description}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Requirements */}
      <Section background="muted">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold font-serif text-midnight mb-8 text-center">
            What We Look For
          </h2>
          <Card padding="lg">
            <ul className="space-y-4">
              {requirements.map((req, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span className="text-text-primary">{req}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      {/* Application Process */}
      <Section>
        <h2 className="text-3xl font-bold font-serif text-midnight mb-12 text-center">
          Application Process
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          {process.map((step) => (
            <div key={step.step} className="text-center">
              <div className="w-12 h-12 rounded-full bg-gold text-white font-bold text-xl flex items-center justify-center mx-auto mb-4">
                {step.step}
              </div>
              <h3 className="font-semibold text-midnight mb-2">{step.title}</h3>
              <p className="text-text-secondary text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Application Form */}
      <Section background="muted" id="apply">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold font-serif text-midnight mb-4 text-center">
            Apply Now
          </h2>
          <p className="text-text-secondary text-center mb-8">
            Fill out the form below and our team will get back to you within 48
            hours
          </p>

          {isSubmitted ? (
            <Card padding="lg" className="text-center">
              <div className="text-5xl mb-4">🎉</div>
              <h3 className="text-2xl font-bold text-midnight mb-2">
                Application Received!
              </h3>
              <p className="text-text-secondary mb-6">
                Thank you for applying to join SwarShala. Our team will review
                your application and contact you within 48 hours.
              </p>
              <LinkButton href="/" variant="outline">
                Back to Home
              </LinkButton>
            </Card>
          ) : (
            <Card padding="lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="website">Website</label>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                {error && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
                    {error}
                  </div>
                )}

                {/* Personal Information */}
                <div>
                  <h3 className="font-semibold text-midnight mb-4 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-gold text-white text-sm flex items-center justify-center">
                      1
                    </span>
                    Personal Information
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input label="Full Name" name="name" required />
                    <Input
                      label="Phone Number"
                      name="phone"
                      type="tel"
                      required
                    />
                    <Input
                      label="Email Address"
                      name="email"
                      type="email"
                      required
                    />
                    <Input label="City" name="city" required />
                  </div>
                </div>

                {/* Professional Details */}
                <div>
                  <h3 className="font-semibold text-midnight mb-4 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-gold text-white text-sm flex items-center justify-center">
                      2
                    </span>
                    Professional Details
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Select
                      label="Primary Instrument/Skill"
                      name="instrument"
                      required
                      options={[
                        { value: "", label: "Select instrument..." },
                        ...instruments.map((i) => ({
                          value: i.slug,
                          label: i.name,
                        })),
                      ]}
                    />
                    <Select
                      label="Years of Experience"
                      name="experience"
                      required
                      options={[
                        { value: "", label: "Select experience..." },
                        { value: "1-3", label: "1-3 years" },
                        { value: "3-5", label: "3-5 years" },
                        { value: "5-10", label: "5-10 years" },
                        { value: "10+", label: "10+ years" },
                      ]}
                    />
                    <Select
                      label="Preferred Teaching Mode"
                      name="teaching_mode"
                      required
                      options={[
                        { value: "", label: "Select mode..." },
                        { value: "online", label: "Online Only" },
                        { value: "offline", label: "At Center Only" },
                        { value: "both", label: "Both Online & Offline" },
                      ]}
                    />
                    <Select
                      label="Weekly Availability"
                      name="availability"
                      required
                      options={[
                        { value: "", label: "Select availability..." },
                        {
                          value: "part-time",
                          label: "Part-time (10-20 hrs/week)",
                        },
                        {
                          value: "full-time",
                          label: "Full-time (30+ hrs/week)",
                        },
                        { value: "weekends", label: "Weekends Only" },
                      ]}
                    />
                  </div>
                  <div className="mt-4">
                    <Input
                      label="Highest Music Qualification"
                      name="qualification"
                      placeholder="e.g., MA in Music, Trinity Grade 8, Visharad"
                    />
                  </div>
                </div>

                {/* About & Portfolio */}
                <div>
                  <h3 className="font-semibold text-midnight mb-4 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-gold text-white text-sm flex items-center justify-center">
                      3
                    </span>
                    About You
                  </h3>
                  <div className="space-y-4">
                    <Textarea
                      label="Tell us about yourself"
                      name="about"
                      rows={4}
                      placeholder="Your musical journey, teaching philosophy, notable achievements..."
                      required
                    />
                    <Input
                      label="Portfolio / YouTube / Social Link"
                      name="portfolio"
                      type="url"
                      placeholder="https://youtube.com/c/yourchanel"
                    />
                  </div>
                </div>

                {/* Terms */}
                <Checkbox
                  id="terms"
                  name="terms"
                  label="I confirm that the information provided is accurate and I agree to SwarShala's teacher terms and conditions"
                  required
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-4 bg-gold text-white font-semibold rounded-lg hover:bg-gold-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting
                    ? "Submitting Application..."
                    : "Submit Application"}
                </button>
              </form>
            </Card>
          )}
        </div>
      </Section>

      {/* Testimonial */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <blockquote className="text-xl italic text-text-secondary mb-6">
            "Teaching with SwarShala has been transformative. The platform,
            student quality, and support team are exceptional. I've grown both
            as a musician and educator."
          </blockquote>
          <div>
            <p className="font-semibold text-midnight">Arjun Mehta</p>
            <p className="text-sm text-text-muted">
              Classical Guitar Teacher • 2 years with SwarShala
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}

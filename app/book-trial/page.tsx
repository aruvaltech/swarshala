"use client";

import { useState } from "react";
import {
  PageHeader,
  Section,
  Card,
  CardContent,
  Button,
} from "@/components/ui";
import {
  Input,
  Select,
  Textarea,
  Checkbox,
  RadioGroup,
} from "@/components/ui/Form";
import { instruments } from "@/content/instruments";
import { cities } from "@/content/cities";

const instrumentOptions = instruments.map((i) => ({
  value: i.slug,
  label: i.name,
}));
const cityOptions = cities.map((c) => ({ value: c.slug, label: c.name }));

const levelOptions = [
  { value: "beginner", label: "Beginner (Never played before)" },
  { value: "intermediate", label: "Intermediate (Some experience)" },
  { value: "advanced", label: "Advanced (Years of experience)" },
];

const modeOptions = [
  {
    value: "online",
    label: "Online Classes",
    description: "Learn from anywhere via video call",
  },
  {
    value: "home",
    label: "Home Tutor",
    description: "Teacher visits your home",
  },
  {
    value: "center",
    label: "Center Classes",
    description: "Visit our academy center",
  },
];

export default function BookTrialPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    instrument: "",
    level: "beginner",
    mode: "online",
    preferredTime: "",
    message: "",
    consent: false,
    website: "", // Honeypot
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name || formData.name.length < 2) {
      newErrors.name = "Please enter your name";
    }
    if (!formData.phone || formData.phone.length < 10) {
      newErrors.phone = "Please enter a valid phone number";
    }
    if (!formData.email || !formData.email.includes("@")) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.city) {
      newErrors.city = "Please select your city";
    }
    if (!formData.instrument) {
      newErrors.instrument = "Please select an instrument";
    }
    if (!formData.consent) {
      newErrors.consent = "Please agree to be contacted";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    // Honeypot check
    if (formData.website) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        const data = await response.json();
        setErrors({
          form: data.message || "Something went wrong. Please try again.",
        });
      }
    } catch {
      setErrors({ form: "Network error. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <>
        <PageHeader
          title="Thank You!"
          subtitle="We've received your trial class request"
        />
        <Section>
          <div className="max-w-lg mx-auto text-center">
            <div className="text-6xl mb-6">🎉</div>
            <h2 className="text-2xl font-bold font-serif text-midnight mb-4">
              Your Free Trial is Booked!
            </h2>
            <p className="text-text-secondary mb-6">
              Our team will call you within 2 hours to confirm your trial class
              timing. Check your email for confirmation details.
            </p>
            <Card
              padding="lg"
              className="bg-surface-muted border-none text-left"
            >
              <h3 className="font-semibold text-midnight mb-3">
                What happens next?
              </h3>
              <ol className="space-y-2 text-sm text-text-secondary">
                <li>1. Our team will call you to confirm timing</li>
                <li>2. You&apos;ll receive a calendar invite</li>
                <li>3. Attend your 30-minute trial class</li>
                <li>4. No payment required for trial</li>
              </ol>
            </Card>
          </div>
        </Section>
      </>
    );
  }

  return (
    <>
      <PageHeader
        title="Book Your Free Trial Class"
        subtitle="Experience SwarShala's teaching methodology with a complimentary 30-minute trial session"
      />

      <Section>
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {/* Form */}
          <div className="md:col-span-2">
            <Card padding="lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                {errors.form && (
                  <div className="p-4 bg-error/10 text-error rounded-lg text-sm">
                    {errors.form}
                  </div>
                )}

                {/* Personal Info */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-midnight">
                    Personal Information
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      label="Full Name"
                      name="name"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      error={errors.name}
                      required
                    />
                    <Input
                      label="Phone Number"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      error={errors.phone}
                      placeholder="+91 85950 25239"
                      required
                    />
                  </div>
                  <Input
                    label="Email Address"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    error={errors.email}
                    required
                  />
                </div>

                {/* Course Info */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-midnight">
                    Course Preferences
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Select
                      label="Select Instrument"
                      name="instrument"
                      value={formData.instrument}
                      onChange={(e) =>
                        handleChange("instrument", e.target.value)
                      }
                      options={instrumentOptions}
                      placeholder="Choose an instrument"
                      error={errors.instrument}
                      required
                    />
                    <Select
                      label="Your City"
                      name="city"
                      value={formData.city}
                      onChange={(e) => handleChange("city", e.target.value)}
                      options={cityOptions}
                      placeholder="Select your city"
                      error={errors.city}
                      required
                    />
                  </div>
                  <Select
                    label="Your Experience Level"
                    name="level"
                    value={formData.level}
                    onChange={(e) => handleChange("level", e.target.value)}
                    options={levelOptions}
                  />
                </div>

                {/* Learning Mode */}
                <RadioGroup
                  name="mode"
                  label="Preferred Learning Mode"
                  options={modeOptions}
                  value={formData.mode}
                  onChange={(value) => handleChange("mode", value)}
                  required
                />

                {/* Additional Info */}
                <Input
                  label="Preferred Time"
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={(e) =>
                    handleChange("preferredTime", e.target.value)
                  }
                  placeholder="e.g., Weekday evenings, Weekend mornings"
                />

                <Textarea
                  label="Any Message for Us?"
                  name="message"
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  placeholder="Tell us about your goals, any specific requirements..."
                  rows={3}
                />

                {/* Honeypot */}
                <div className="hidden" aria-hidden="true">
                  <Input
                    label="Website"
                    name="website"
                    value={formData.website}
                    onChange={(e) => handleChange("website", e.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                {/* Consent */}
                <Checkbox
                  name="consent"
                  checked={formData.consent}
                  onChange={(e) => handleChange("consent", e.target.checked)}
                  error={errors.consent}
                  label={
                    <>
                      I agree to receive calls and messages from SwarShala
                      regarding my trial class. View our{" "}
                      <a href="/privacy" className="text-gold hover:underline">
                        Privacy Policy
                      </a>
                      .
                    </>
                  }
                />

                <Button
                  type="submit"
                  variant="gold"
                  size="lg"
                  loading={isSubmitting}
                  className="w-full"
                >
                  Book My Free Trial
                </Button>

                <p className="text-center text-sm text-text-muted">
                  100% free trial • No credit card required • Cancel anytime
                </p>
              </form>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card padding="lg">
              <h3 className="font-semibold text-midnight mb-4">
                What to Expect
              </h3>
              <ul className="space-y-3 text-sm text-text-secondary">
                <li className="flex items-start gap-3">
                  <span className="text-gold font-bold">1</span>
                  <span>30-minute trial session with an expert teacher</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold font-bold">2</span>
                  <span>Assessment of your current level</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold font-bold">3</span>
                  <span>Personalized learning path recommendation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold font-bold">4</span>
                  <span>Q&A with the teacher</span>
                </li>
              </ul>
            </Card>

            <Card padding="lg" className="bg-gold/5 border-gold/20">
              <h3 className="font-semibold text-midnight mb-3">
                Why Book a Trial?
              </h3>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li className="flex items-center gap-2">
                  <span className="text-gold">✓</span>
                  100% free, no obligations
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gold">✓</span>
                  Meet your potential teacher
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gold">✓</span>
                  Experience our methodology
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gold">✓</span>
                  Get a customized learning plan
                </li>
              </ul>
            </Card>

            <Card padding="lg">
              <h3 className="font-semibold text-midnight mb-3">Need Help?</h3>
              <p className="text-sm text-text-secondary mb-3">
                Call us anytime for assistance
              </p>
              <a
                href="tel:+919876543210"
                className="flex items-center gap-2 text-gold font-semibold hover:underline"
              >
                📞 +91 85950 25239
              </a>
            </Card>
          </div>
        </div>
      </Section>
    </>
  );
}

import type { Metadata } from "next";
import {
  PageHeader,
  Section,
  Card,
  LinkButton,
  Breadcrumbs,
  FAQSection,
} from "@/components/ui";
import ContactForm from "@/components/ContactForm";
import { globalFaqs, getFAQsByCategory } from "@/content/faqs";
import {
  CONTACT_PHONE,
  CONTACT_EMAIL,
  CONTACT_ADDRESS,
  SOCIAL_LINKS,
} from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch | SwarShala",
  description:
    "Contact SwarShala for music class inquiries. Call +91 85950 25239, email contact@swarshala.com, or visit our centers. We respond within 2 hours.",
  alternates: {
    canonical: "https://swarshala.com/contact",
  },
};

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Contact", href: "/contact" },
];

const contactFaqs = getFAQsByCategory("General").slice(0, 6);

const contactMethods = [
  {
    icon: "📞",
    title: "Phone",
    description: "Call us anytime",
    value: CONTACT_PHONE,
    href: `tel:${CONTACT_PHONE.replace(/\s/g, "")}`,
    action: "Call Now",
  },
  {
    icon: "✉️",
    title: "Email",
    description: "We respond within 2 hours",
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
    action: "Send Email",
  },
  {
    icon: "💬",
    title: "WhatsApp",
    description: "Quick responses",
    value: "+91 85950 25239",
    href: "https://wa.me/918595025239",
    action: "Chat Now",
  },
  {
    icon: "📍",
    title: "Visit Us",
    description: "Our main office",
    value: "Connaught Place, New Delhi",
    href: "https://maps.google.com/?q=Connaught+Place+New+Delhi",
    action: "Get Directions",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="We're here to help with your music learning journey. Reach out anytime!"
        breadcrumbs={<Breadcrumbs items={breadcrumbs} />}
      />

      {/* Contact Methods */}
      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactMethods.map((method) => (
            <Card key={method.title} padding="lg" className="text-center">
              <div className="text-4xl mb-3">{method.icon}</div>
              <h3 className="font-semibold text-midnight">{method.title}</h3>
              <p className="text-sm text-text-muted mt-1">
                {method.description}
              </p>
              <p className="font-medium text-text-primary mt-2">
                {method.value}
              </p>
              <a
                href={method.href}
                className="inline-block mt-4 px-4 py-2 bg-gold text-white font-medium rounded-lg hover:bg-gold-dark transition-colors text-sm"
              >
                {method.action}
              </a>
            </Card>
          ))}
        </div>
      </Section>

      {/* Contact Form & Map */}
      <Section background="muted">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Form */}
          <div>
            <h2 className="text-2xl font-bold font-serif text-midnight mb-6">
              Send Us a Message
            </h2>
            <ContactForm />
          </div>

          {/* Office Info */}
          <div>
            <h2 className="text-2xl font-bold font-serif text-midnight mb-6">
              Our Office
            </h2>
            <Card padding="lg" className="mb-6">
              <h3 className="font-semibold text-midnight mb-2">
                SwarShala Head Office
              </h3>
              <p className="text-text-secondary mb-4">{CONTACT_ADDRESS}</p>
              <dl className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <dt className="text-text-muted">Monday - Friday</dt>
                  <dd className="text-midnight">9:00 AM - 9:00 PM</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-text-muted">Saturday</dt>
                  <dd className="text-midnight">9:00 AM - 6:00 PM</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-text-muted">Sunday</dt>
                  <dd className="text-midnight">10:00 AM - 4:00 PM</dd>
                </div>
              </dl>
            </Card>

            {/* Map Placeholder */}
            <div className="aspect-video bg-surface-alt rounded-xl flex items-center justify-center">
              <span className="text-text-muted">📍 Interactive Map</span>
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <h3 className="font-semibold text-midnight mb-3">Follow Us</h3>
              <div className="flex gap-4">
                {Object.entries(SOCIAL_LINKS).map(([platform, url]) => (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-surface-muted flex items-center justify-center text-text-secondary hover:bg-gold hover:text-white transition-colors"
                    aria-label={`Follow us on ${platform}`}
                  >
                    {platform[0].toUpperCase()}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <FAQSection title="Frequently Asked Questions" items={contactFaqs} />

      {/* CTA */}
      <Section background="dark">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold font-serif mb-4">
            Ready to Start Learning?
          </h2>
          <p className="text-gray-300 mb-6">
            Book a free trial class and experience the SwarShala difference.
          </p>
          <LinkButton href="/book-trial" variant="gold" size="lg">
            Book Free Trial Class
          </LinkButton>
        </div>
      </Section>
    </>
  );
}

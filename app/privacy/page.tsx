import type { Metadata } from "next";
import { PageHeader, Section, Breadcrumbs } from "@/components/ui";
import { SITE_NAME, CONTACT_EMAIL } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Privacy Policy | SwarShala",
  description:
    "SwarShala privacy policy. Learn how we collect, use, and protect your personal information when you use our music education services.",
  alternates: {
    canonical: "https://swarshala.com/privacy",
  },
};

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Privacy Policy", href: "/privacy" },
];

const lastUpdated = "January 1, 2025";

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        title="Privacy Policy"
        subtitle={`Last updated: ${lastUpdated}`}
        breadcrumbs={<Breadcrumbs items={breadcrumbs} />}
      />

      <Section>
        <div className="max-w-3xl mx-auto prose prose-lg">
          <h2>Introduction</h2>
          <p>
            {SITE_NAME} ("we," "our," or "us") is committed to protecting your
            privacy. This Privacy Policy explains how we collect, use, disclose,
            and safeguard your information when you visit our website
            swarshala.com and use our music education services.
          </p>
          <p>
            Please read this privacy policy carefully. If you do not agree with
            the terms of this privacy policy, please do not access the site or
            use our services.
          </p>

          <h2>Information We Collect</h2>

          <h3>Personal Information</h3>
          <p>
            We may collect personal information that you voluntarily provide
            when you:
          </p>
          <ul>
            <li>Register for a trial class or course</li>
            <li>Fill out a contact form</li>
            <li>Subscribe to our newsletter</li>
            <li>Apply to become a teacher</li>
            <li>Download resources from our website</li>
          </ul>
          <p>This information may include:</p>
          <ul>
            <li>Name and contact information (email, phone number, address)</li>
            <li>Age and date of birth (for students)</li>
            <li>Musical interests and learning preferences</li>
            <li>
              Payment information (processed securely by our payment partners)
            </li>
            <li>Educational background (for teacher applications)</li>
          </ul>

          <h3>Automatically Collected Information</h3>
          <p>
            When you access our website, we may automatically collect certain
            information about your device and usage, including:
          </p>
          <ul>
            <li>IP address and browser type</li>
            <li>Operating system</li>
            <li>Pages visited and time spent on pages</li>
            <li>Referring website addresses</li>
            <li>Device identifiers</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide, maintain, and improve our services</li>
            <li>Process enrollments and payments</li>
            <li>
              Send administrative information (class schedules, reminders)
            </li>
            <li>Respond to inquiries and provide customer support</li>
            <li>Send marketing communications (with your consent)</li>
            <li>Analyze usage patterns to improve user experience</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>Information Sharing</h2>
          <p>We may share your information in the following situations:</p>
          <ul>
            <li>
              <strong>With Teachers:</strong> To facilitate your learning, we
              share relevant student information with assigned teachers.
            </li>
            <li>
              <strong>Service Providers:</strong> We may share information with
              third-party vendors who provide services like payment processing,
              email delivery, and analytics.
            </li>
            <li>
              <strong>Legal Requirements:</strong> We may disclose information
              if required by law or in response to valid legal requests.
            </li>
            <li>
              <strong>Business Transfers:</strong> In connection with a merger,
              acquisition, or sale of assets, your information may be
              transferred.
            </li>
          </ul>

          <h2>Data Security</h2>
          <p>
            We implement appropriate technical and organizational security
            measures to protect your personal information, including:
          </p>
          <ul>
            <li>Encryption of data in transit (SSL/TLS)</li>
            <li>Secure storage with access controls</li>
            <li>Regular security audits</li>
            <li>Employee training on data protection</li>
          </ul>
          <p>
            However, no method of transmission over the Internet or electronic
            storage is 100% secure. We cannot guarantee absolute security.
          </p>

          <h2>Your Rights</h2>
          <p>
            Under applicable Indian data protection laws, you have the right to:
          </p>
          <ul>
            <li>Access your personal information</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Withdraw consent for marketing communications</li>
            <li>Lodge a complaint with the data protection authority</li>
          </ul>
          <p>
            To exercise these rights, please contact us at{" "}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
          </p>

          <h2>Cookies</h2>
          <p>
            We use cookies and similar tracking technologies to enhance your
            experience on our website. Cookies are small files stored on your
            device that help us:
          </p>
          <ul>
            <li>Remember your preferences</li>
            <li>Understand how you use our website</li>
            <li>Improve our services</li>
            <li>Provide relevant content</li>
          </ul>
          <p>
            You can control cookies through your browser settings. Disabling
            cookies may affect website functionality.
          </p>

          <h2>Children's Privacy</h2>
          <p>
            We provide music education services to children. For students under
            18 years of age:
          </p>
          <ul>
            <li>
              We require parental/guardian consent before collecting personal
              information
            </li>
            <li>
              Parents/guardians can review, update, or delete their child's
              information
            </li>
            <li>
              We do not share children's personal information with third parties
              for marketing
            </li>
          </ul>

          <h2>Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. We are not
            responsible for the privacy practices of these external sites. We
            encourage you to read their privacy policies.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this privacy policy from time to time. We will notify
            you of any changes by posting the new policy on this page and
            updating the "Last updated" date.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy or our data
            practices, please contact us:
          </p>
          <ul>
            <li>
              Email: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </li>
            <li>
              Address: 123 Music Lane, Connaught Place, New Delhi - 110001
            </li>
            <li>Phone: +91 88827 25239</li>
          </ul>
        </div>
      </Section>
    </>
  );
}

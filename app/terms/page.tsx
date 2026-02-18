import type { Metadata } from "next";
import { PageHeader, Section, Breadcrumbs } from "@/components/ui";
import { SITE_NAME, CONTACT_EMAIL, CONTACT_PHONE } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Terms & Conditions | SwarShala",
  description:
    "SwarShala terms and conditions. Read about our policies for music classes, enrollment, payments, refunds, and service usage.",
  alternates: {
    canonical: "https://swarshala.com/terms",
  },
};

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Terms & Conditions", href: "/terms" },
];

const lastUpdated = "January 1, 2025";

export default function TermsPage() {
  return (
    <>
      <PageHeader
        title="Terms & Conditions"
        subtitle={`Last updated: ${lastUpdated}`}
        breadcrumbs={<Breadcrumbs items={breadcrumbs} />}
      />

      <Section>
        <div className="max-w-3xl mx-auto prose prose-lg">
          <h2>Acceptance of Terms</h2>
          <p>
            By accessing and using {SITE_NAME} ("Company", "we", "our", "us")
            services through swarshala.com and our affiliated platforms, you
            ("Student", "Parent", "User") agree to be bound by these Terms and
            Conditions. If you do not agree to these terms, please do not use
            our services.
          </p>

          <h2>Services Offered</h2>
          <p>{SITE_NAME} provides:</p>
          <ul>
            <li>Online music classes via video conferencing</li>
            <li>Offline/in-person music classes at our centers</li>
            <li>Home tutoring services</li>
            <li>Music examination preparation</li>
            <li>Educational resources and materials</li>
            <li>Student performance and showcase events</li>
          </ul>

          <h2>Enrollment and Registration</h2>
          <h3>Eligibility</h3>
          <ul>
            <li>Students of all ages are welcome to enroll</li>
            <li>
              For students under 18, a parent or guardian must register on their
              behalf
            </li>
            <li>
              You must provide accurate and complete information during
              registration
            </li>
          </ul>

          <h3>Trial Classes</h3>
          <ul>
            <li>
              Trial classes are offered free of charge for first-time students
            </li>
            <li>
              Each student is entitled to one free trial class per instrument
            </li>
            <li>Trial classes do not obligate enrollment</li>
          </ul>

          <h2>Fees and Payment</h2>
          <h3>Course Fees</h3>
          <ul>
            <li>
              Fees are displayed on our website and may be updated periodically
            </li>
            <li>
              Fees are payable in advance (monthly, quarterly, or annually)
            </li>
            <li>
              Fees vary based on instrument, course level, class type, and
              package
            </li>
          </ul>

          <h3>Payment Terms</h3>
          <ul>
            <li>Payments are due before the start of each billing cycle</li>
            <li>
              We accept online payments, bank transfers, and selected payment
              apps
            </li>
            <li>Late payments may result in suspension of classes</li>
            <li>
              All prices are in Indian Rupees (INR) and include applicable taxes
            </li>
          </ul>

          <h3>Refund Policy</h3>
          <ul>
            <li>
              <strong>Full Refund:</strong> Available within 7 days of
              enrollment if no classes have been attended
            </li>
            <li>
              <strong>Prorated Refund:</strong> For monthly plans, refunds are
              calculated based on unused classes (minimum 4 remaining)
            </li>
            <li>
              <strong>No Refund:</strong> For package deals, after 25% of
              classes have been utilized
            </li>
            <li>Refunds are processed within 7-10 business days</li>
          </ul>

          <h2>Class Policies</h2>
          <h3>Scheduling</h3>
          <ul>
            <li>
              Classes are scheduled based on mutual availability of student and
              teacher
            </li>
            <li>Regular class times are preferred for consistent learning</li>
            <li>Schedule changes require 24-hour notice</li>
          </ul>

          <h3>Cancellations and Rescheduling</h3>
          <ul>
            <li>
              Students may reschedule with 24-hour advance notice (limit: 2 per
              month)
            </li>
            <li>
              Cancellations without 24-hour notice are counted as utilized
              classes
            </li>
            <li>
              Teacher cancellations will be compensated with makeup classes
            </li>
            <li>No-shows without notice forfeit the class</li>
          </ul>

          <h3>Online Class Requirements</h3>
          <ul>
            <li>Stable internet connection (minimum 10 Mbps recommended)</li>
            <li>
              Device with camera and microphone (laptop or tablet preferred)
            </li>
            <li>Quiet, distraction-free environment</li>
            <li>Instrument ready before class start time</li>
          </ul>

          <h2>Student Conduct</h2>
          <p>Students and parents/guardians agree to:</p>
          <ul>
            <li>Be punctual for all scheduled classes</li>
            <li>Treat teachers and staff with respect</li>
            <li>Complete assigned practice and homework</li>
            <li>
              Not record, share, or distribute class content without permission
            </li>
            <li>Not use obscene, abusive, or inappropriate language</li>
            <li>Follow center rules when attending offline classes</li>
          </ul>

          <h2>Intellectual Property</h2>
          <ul>
            <li>
              All course materials, curriculum, and content are owned by{" "}
              {SITE_NAME}
            </li>
            <li>Materials are for personal, educational use only</li>
            <li>Reproduction or distribution of materials is prohibited</li>
            <li>Student recordings of performances remain student property</li>
          </ul>

          <h2>Privacy and Data</h2>
          <p>
            Your privacy is important to us. Please refer to our{" "}
            <a href="/privacy">Privacy Policy</a> for information on how we
            collect, use, and protect your data.
          </p>

          <h2>Limitation of Liability</h2>
          <ul>
            <li>
              {SITE_NAME} is not liable for any indirect, incidental, or
              consequential damages
            </li>
            <li>
              We do not guarantee specific learning outcomes or exam results
            </li>
            <li>
              Technical issues beyond our control (internet outages, power
              failures) may affect service delivery
            </li>
            <li>
              Our total liability is limited to the fees paid for the affected
              services
            </li>
          </ul>

          <h2>Termination</h2>
          <h3>By Student</h3>
          <ul>
            <li>
              You may discontinue services at any time with written notice
            </li>
            <li>Refunds, if applicable, will follow our refund policy</li>
          </ul>

          <h3>By {SITE_NAME}</h3>
          <p>We reserve the right to terminate services for:</p>
          <ul>
            <li>Violation of these terms</li>
            <li>Non-payment of fees</li>
            <li>Inappropriate behavior toward teachers or staff</li>
            <li>Fraudulent activity</li>
          </ul>

          <h2>Dispute Resolution</h2>
          <ul>
            <li>
              Disputes will first be addressed through informal negotiation
            </li>
            <li>
              Unresolved disputes will be subject to arbitration in New Delhi
            </li>
            <li>These terms are governed by the laws of India</li>
            <li>Courts in New Delhi shall have exclusive jurisdiction</li>
          </ul>

          <h2>Force Majeure</h2>
          <p>
            {SITE_NAME} is not liable for delays or failure in performance due
            to events beyond reasonable control, including natural disasters,
            pandemics, government actions, or infrastructure failures.
          </p>

          <h2>Modifications</h2>
          <p>
            We reserve the right to modify these terms at any time. Changes will
            be effective upon posting to our website. Continued use of our
            services after changes constitutes acceptance of the modified terms.
          </p>

          <h2>Contact Information</h2>
          <p>
            For questions about these Terms and Conditions, please contact us:
          </p>
          <ul>
            <li>
              Email: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </li>
            <li>
              Address: 123 Music Lane, Connaught Place, New Delhi - 110001
            </li>
            <li>Phone: <a href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`}>{CONTACT_PHONE}</a></li>
          </ul>

          <h2>Severability</h2>
          <p>
            If any provision of these Terms is found to be invalid or
            unenforceable, the remaining provisions will continue in full force
            and effect.
          </p>
        </div>
      </Section>
    </>
  );
}

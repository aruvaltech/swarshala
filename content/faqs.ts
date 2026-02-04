export interface FAQ {
    id: string;
    category: string;
    question: string;
    answer: string;
}

export const faqs: FAQ[] = [
    // General FAQs
    {
        id: 'general-1',
        category: 'General',
        question: 'What is SwarShala?',
        answer: 'SwarShala is a premium music academy offering comprehensive music education across India and online worldwide. We provide expert instruction in over 15 instruments including guitar, piano, vocals, violin, tabla, and more. With physical centers in major Indian cities, home tutor services, and live online classes, we make quality music education accessible to everyone.',
    },
    {
        id: 'general-2',
        category: 'General',
        question: 'What age groups do you teach?',
        answer: 'We welcome students of all ages, from children as young as 5 to adults and seniors. Our curriculum is adapted for different age groups and learning styles. Many adults start learning music with us for the first time - it\'s never too late to begin your musical journey.',
    },
    {
        id: 'general-3',
        category: 'General',
        question: 'Do I need prior musical experience to join?',
        answer: 'No prior experience is required! Our beginner programs are designed for complete novices. We start from the very basics and build your skills progressively. Whether you\'re a total beginner or an experienced musician seeking advanced training, we have programs for every level.',
    },
    {
        id: 'general-4',
        category: 'General',
        question: 'How do I get started?',
        answer: 'Getting started is easy! Book a free trial class through our website or WhatsApp. During the trial, you\'ll meet a teacher, experience a lesson, and discuss your goals. After the trial, we recommend a suitable program and you can enroll right away.',
    },
    {
        id: 'general-5',
        category: 'General',
        question: 'Do I need to own an instrument?',
        answer: 'For home tutoring and online classes, having your own instrument is necessary for practice. Our centers have instruments for learning during classes. We can help you choose and purchase the right instrument for your level and budget.',
    },
    // Programs FAQs
    {
        id: 'programs-1',
        category: 'Programs',
        question: 'What\'s the difference between 1:1 and group classes?',
        answer: 'One-to-one (1:1) classes offer personalized attention with curriculum customized to your goals and pace. Group classes (3-6 students) are more affordable, provide peer learning opportunities, and include ensemble experience. Many students start with 1:1 and join groups later, or vice versa.',
    },
    {
        id: 'programs-2',
        category: 'Programs',
        question: 'How often should I take classes?',
        answer: 'Most students take one class per week, which works well with consistent daily practice. Serious students or those preparing for exams often take two classes weekly. We recommend at least weekly classes for steady progress.',
    },
    {
        id: 'programs-3',
        category: 'Programs',
        question: 'Can I switch between programs?',
        answer: 'Yes! You can switch between 1:1, group, home tutor, center, and online modes based on your changing needs. Just inform us a week in advance and we\'ll facilitate the transition smoothly.',
    },
    {
        id: 'programs-4',
        category: 'Programs',
        question: 'What\'s included in the fee?',
        answer: 'Fees include classes with expert instructors, curriculum materials, progress tracking, and certificates upon level completion. Some programs include access to center facilities, workshops, and recital opportunities. Specific inclusions vary by program - check our pricing page for details.',
    },
    // Online Classes FAQs
    {
        id: 'online-1',
        category: 'Online Classes',
        question: 'Are online music classes effective?',
        answer: 'Yes! Online classes are highly effective for most aspects of music learning. Our students worldwide make excellent progress through live video instruction. While some nuances are easier in-person, the convenience, flexibility, and access to great teachers make online learning valuable.',
    },
    {
        id: 'online-2',
        category: 'Online Classes',
        question: 'What do I need for online classes?',
        answer: 'You need a stable internet connection (minimum 10 Mbps recommended), a device with camera and microphone (laptop or tablet preferred), your instrument, and a quiet space for learning. We provide guidance on optimizing your setup for music learning.',
    },
    {
        id: 'online-3',
        category: 'Online Classes',
        question: 'Can I learn Indian classical music online?',
        answer: 'Absolutely! Many aspects of Hindustani and Carnatic classical music translate well to online learning. While some students prefer occasional in-person sessions for finer nuances, dedicated online students achieve excellent results.',
    },
    {
        id: 'online-4',
        category: 'Online Classes',
        question: 'What platform do you use for online classes?',
        answer: 'We primarily use Zoom and Google Meet for online classes. These platforms offer good audio quality essential for music learning. We provide setup guidance to optimize your audio/video settings.',
    },
    // Pricing FAQs
    {
        id: 'pricing-1',
        category: 'Pricing',
        question: 'How much do classes cost?',
        answer: 'Our pricing varies by program type, location, and duration. 1:1 classes range from ₹800-2000 per session, group classes from ₹500-800, and home tutoring has additional travel charges. Visit our pricing page or book a trial for detailed quotes.',
    },
    {
        id: 'pricing-2',
        category: 'Pricing',
        question: 'Do you offer payment plans?',
        answer: 'Yes! We offer monthly, quarterly, and annual payment options. Longer commitments come with discounts. We also offer sibling discounts and corporate tie-up rates. Discuss your needs during enrollment for the best plan.',
    },
    {
        id: 'pricing-3',
        category: 'Pricing',
        question: 'Is there a registration or enrollment fee?',
        answer: 'We charge a one-time enrollment fee that covers registration, initial assessment, material setup, and admin. This is a modest amount and is often waived during promotional periods. Trial classes are always free.',
    },
    {
        id: 'pricing-4',
        category: 'Pricing',
        question: 'What is your refund policy?',
        answer: 'Unused classes in a package can be refunded on a pro-rata basis within the validity period. Fees for completed classes are non-refundable. Full terms are provided at enrollment. We prioritize student satisfaction and handle requests fairly.',
    },
    // Teachers FAQs
    {
        id: 'teachers-1',
        category: 'Teachers',
        question: 'How are your teachers selected?',
        answer: 'Our teachers undergo rigorous selection including auditions, teaching demonstrations, background verification, and training. Most hold certifications (Trinity, ABRSM, Sangeet certifications) and have years of teaching experience. We maintain high quality standards.',
    },
    {
        id: 'teachers-2',
        category: 'Teachers',
        question: 'Can I choose my teacher?',
        answer: 'We match you with suitable teachers based on instrument, level, location, schedule, and goals. If the match isn\'t right, you can request a different teacher. For home tutors, we consider travel logistics too.',
    },
    {
        id: 'teachers-3',
        category: 'Teachers',
        question: 'What if I\'m not satisfied with my teacher?',
        answer: 'Student satisfaction is paramount. If you\'re not comfortable with your assigned teacher, inform us and we\'ll arrange an alternative. We encourage giving feedback early so we can make adjustments.',
    },
    // Certifications FAQs
    {
        id: 'cert-1',
        category: 'Certifications',
        question: 'Do you prepare students for ABRSM/Trinity exams?',
        answer: 'Yes! We have extensive experience preparing students for ABRSM, Trinity, and Rockschool examinations. Our curriculum aligns with exam requirements and we offer specific exam prep tracks. Many students pass with merit and distinction.',
    },
    {
        id: 'cert-2',
        category: 'Certifications',
        question: 'Does SwarShala provide certificates?',
        answer: 'Yes, we provide SwarShala certificates upon completing each level (beginner, intermediate, advanced). These recognize your achievement and progress. For internationally recognized credentials, we prepare you for external exams like ABRSM.',
    },
    {
        id: 'cert-3',
        category: 'Certifications',
        question: 'What Indian music certifications do you prepare for?',
        answer: 'We prepare students for Prayag Sangeet Samiti, Gandharva Mahavidyalaya, and university examinations in Indian classical music. Our classical curriculum follows established syllabi while incorporating practical musicianship.',
    },
];

export function getFAQsByCategory(category: string): FAQ[] {
    return faqs.filter((faq) => faq.category === category);
}

export const faqCategories = [...new Set(faqs.map((faq) => faq.category))];

// Alias for global FAQs used on multiple pages
export const globalFaqs = faqs;

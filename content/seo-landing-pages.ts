/**
 * Programmatic SEO landing pages data.
 * Generates high-value pages targeting specific city + service combinations.
 */

export interface MusicClassesCity {
    slug: string;
    city: string;
    state: string;
    h1: string;
    metaTitle: string;
    metaDescription: string;
    intro: string;
    instruments: string[];
    programs: string[];
    faqs: { question: string; answer: string }[];
    nearbyAreas: string[];
}

export const musicClassesCities: MusicClassesCity[] = [
    {
        slug: 'delhi',
        city: 'Delhi',
        state: 'Delhi',
        h1: 'Music Classes in Delhi',
        metaTitle: 'Music Classes in Delhi - Guitar, Piano, Vocals & More | SwarShala',
        metaDescription: 'Best music classes in Delhi. Learn guitar, piano, vocals, tabla, violin & more from expert teachers. Online & offline. Book a free trial at SwarShala Delhi!',
        intro: 'Looking for the best music classes in Delhi? SwarShala offers expert-led music instruction across South Delhi, North Delhi, Dwarka, and the entire NCR region. With flexible scheduling and both online and offline options, there has never been a better time to start your musical journey in the capital.',
        instruments: ['guitar', 'piano', 'vocals', 'tabla', 'violin', 'drums', 'flute', 'keyboard'],
        programs: ['one-to-one', 'group', 'online', 'home-tutor', 'center'],
        faqs: [
            { question: 'What are the best music classes in Delhi?', answer: 'SwarShala is rated among the best music academies in Delhi, offering classes for 12+ instruments with experienced faculty, flexible timings, and both online and in-person options across Delhi NCR.' },
            { question: 'How much do music classes cost in Delhi?', answer: 'Music classes in Delhi at SwarShala start from ₹3,500/month for group classes and ₹6,000/month for one-to-one sessions. Visit our pricing page for detailed fee structure.' },
            { question: 'Do you offer home music classes in Delhi?', answer: 'Yes! SwarShala provides home tutor services across Delhi NCR. Our qualified teachers come to your home at your preferred time for personalized music lessons.' },
        ],
        nearbyAreas: ['South Delhi', 'North Delhi', 'Dwarka', 'Rohini', 'Noida', 'Gurgaon', 'Ghaziabad'],
    },
    {
        slug: 'mumbai',
        city: 'Mumbai',
        state: 'Maharashtra',
        h1: 'Music Classes in Mumbai',
        metaTitle: 'Music Classes in Mumbai - Guitar, Piano, Vocals & More | SwarShala',
        metaDescription: 'Top music classes in Mumbai. Learn guitar, piano, vocals, drums & more from industry professionals. Bandra, Andheri & online. Free trial at SwarShala!',
        intro: 'Mumbai, the entertainment capital of India, is the perfect place to pursue your musical dreams. SwarShala Mumbai brings world-class music education to Bandra, Andheri, Juhu, Powai and beyond. Learn from teachers with real industry experience in Bollywood and the independent music scene.',
        instruments: ['guitar', 'vocals', 'piano', 'drums', 'keyboard', 'ukulele', 'bass-guitar', 'saxophone'],
        programs: ['one-to-one', 'group', 'online', 'home-tutor', 'center'],
        faqs: [
            { question: 'Where can I learn music in Mumbai?', answer: 'SwarShala has a center in Bandra West and offers home tutors across Mumbai, Thane, and Navi Mumbai. Online classes are also available for all instruments.' },
            { question: 'Can I learn Bollywood singing in Mumbai?', answer: 'Yes! Our Mumbai vocal program includes Bollywood playback singing, Western vocals, and Hindustani classical training with teachers who have industry experience.' },
            { question: 'What instruments can I learn at SwarShala Mumbai?', answer: 'We offer classes for guitar, piano, vocals, drums, keyboard, ukulele, bass guitar, saxophone, violin, and more at our Mumbai center and through home tutoring.' },
        ],
        nearbyAreas: ['Bandra', 'Andheri', 'Juhu', 'Powai', 'Lower Parel', 'Thane', 'Navi Mumbai'],
    },
    {
        slug: 'bengaluru',
        city: 'Bengaluru',
        state: 'Karnataka',
        h1: 'Music Classes in Bengaluru',
        metaTitle: 'Music Classes in Bengaluru - Guitar, Piano, Vocals & More | SwarShala',
        metaDescription: 'Premium music classes in Bengaluru. Learn guitar, piano, vocals & more from expert teachers. Koramangala, Indiranagar & online. Free trial at SwarShala!',
        intro: 'Bengaluru\'s thriving tech community has a passionate side for music. SwarShala Bengaluru offers professionally structured music programs designed for busy professionals, students, and children. With centers in Koramangala and instructors available across the city, quality music education is at your doorstep.',
        instruments: ['guitar', 'piano', 'vocals', 'violin', 'drums', 'keyboard', 'flute', 'tabla'],
        programs: ['one-to-one', 'group', 'online', 'home-tutor', 'center'],
        faqs: [
            { question: 'What are the best music classes in Bengaluru?', answer: 'SwarShala offers structured music programs in Bengaluru covering 12+ instruments with flexible scheduling ideal for IT professionals and students.' },
            { question: 'Do you have weekend music classes in Bengaluru?', answer: 'Yes! We offer weekend batches for working professionals at our Koramangala center and through home tutoring across Bengaluru.' },
            { question: 'How do online music classes work?', answer: 'Our online classes are live 1-on-1 sessions over Zoom with your dedicated instructor. You get the same curriculum and personal attention as in-person classes.' },
        ],
        nearbyAreas: ['Koramangala', 'Indiranagar', 'Whitefield', 'HSR Layout', 'Jayanagar', 'Electronic City'],
    },
    {
        slug: 'hyderabad',
        city: 'Hyderabad',
        state: 'Telangana',
        h1: 'Music Classes in Hyderabad',
        metaTitle: 'Music Classes in Hyderabad - Guitar, Piano, Vocals & More | SwarShala',
        metaDescription: 'Best music classes in Hyderabad. Learn guitar, piano, vocals, tabla & more. Online & offline lessons. Book a free trial at SwarShala Hyderabad!',
        intro: 'Hyderabad\'s rich cultural heritage and growing modern music scene make it ideal for music education. SwarShala Hyderabad offers comprehensive programs across all major instruments, blending classical Indian traditions with contemporary Western styles.',
        instruments: ['guitar', 'vocals', 'piano', 'tabla', 'violin', 'keyboard', 'drums', 'sitar'],
        programs: ['one-to-one', 'group', 'online', 'home-tutor'],
        faqs: [
            { question: 'Where can I learn music in Hyderabad?', answer: 'SwarShala offers music classes across Hyderabad including Banjara Hills, HITEC City, Jubilee Hills, and Gachibowli through home tutors and online sessions.' },
            { question: 'What is the fee for music classes in Hyderabad?', answer: 'Music classes at SwarShala Hyderabad start from ₹3,000/month for group sessions. Visit our pricing page for complete details.' },
        ],
        nearbyAreas: ['Banjara Hills', 'HITEC City', 'Jubilee Hills', 'Gachibowli', 'Secunderabad', 'Madhapur'],
    },
    {
        slug: 'chennai',
        city: 'Chennai',
        state: 'Tamil Nadu',
        h1: 'Music Classes in Chennai',
        metaTitle: 'Music Classes in Chennai - Guitar, Piano, Carnatic & More | SwarShala',
        metaDescription: 'Top music classes in Chennai. Learn guitar, piano, Carnatic vocals, violin & more. Expert teachers. Online & offline. Free trial at SwarShala!',
        intro: 'Chennai, the cultural capital of South India and home to Carnatic music tradition, offers a unique environment for music learning. SwarShala Chennai provides both Western and Indian classical music instruction, honoring Chennai\'s deep musical roots.',
        instruments: ['vocals', 'violin', 'guitar', 'piano', 'keyboard', 'mridangam', 'flute', 'veena'],
        programs: ['one-to-one', 'group', 'online', 'home-tutor'],
        faqs: [
            { question: 'Do you teach Carnatic music in Chennai?', answer: 'Yes! Our Chennai program includes comprehensive Carnatic vocal and instrumental training alongside Western music instruction.' },
            { question: 'Where are music classes available in Chennai?', answer: 'We offer home tutoring across Chennai including T. Nagar, Adyar, Anna Nagar, Velachery, and OMR. Online classes are available throughout Tamil Nadu.' },
        ],
        nearbyAreas: ['T. Nagar', 'Adyar', 'Anna Nagar', 'Velachery', 'OMR', 'Mylapore', 'Nungambakkam'],
    },
    {
        slug: 'pune',
        city: 'Pune',
        state: 'Maharashtra',
        h1: 'Music Classes in Pune',
        metaTitle: 'Music Classes in Pune - Guitar, Piano, Vocals & More | SwarShala',
        metaDescription: 'Best music classes in Pune. Learn guitar, piano, vocals, tabla & more from expert teachers. Kothrud, Koregaon Park & online. Free trial at SwarShala!',
        intro: 'Pune, known for its educational excellence and cultural vibrancy, is a fantastic city to learn music. SwarShala Pune offers meticulously designed programs for students, working professionals, and music enthusiasts of all ages across Kothrud, Koregaon Park, and beyond.',
        instruments: ['guitar', 'piano', 'vocals', 'tabla', 'violin', 'drums', 'keyboard', 'harmonium'],
        programs: ['one-to-one', 'group', 'online', 'home-tutor'],
        faqs: [
            { question: 'What are the best music classes in Pune?', answer: 'SwarShala is one of Pune\'s top-rated music academies offering lessons for 12+ instruments with experienced faculty.' },
            { question: 'Do you have home tutor services in Pune?', answer: 'Yes! Our qualified music teachers provide home tutoring across Pune including Kothrud, Koregaon Park, Hinjewadi, Wakad, and Viman Nagar.' },
        ],
        nearbyAreas: ['Kothrud', 'Koregaon Park', 'Hinjewadi', 'Wakad', 'Viman Nagar', 'Baner', 'Aundh'],
    },
    {
        slug: 'kolkata',
        city: 'Kolkata',
        state: 'West Bengal',
        h1: 'Music Classes in Kolkata',
        metaTitle: 'Music Classes in Kolkata - Guitar, Piano, Rabindra Sangeet & More | SwarShala',
        metaDescription: 'Premium music classes in Kolkata. Learn guitar, piano, vocals, Rabindra Sangeet, tabla & more. Expert teachers. Online & offline. Free trial!',
        intro: 'Kolkata, the cultural capital of India with its deep-rooted musical traditions from Rabindra Sangeet to Baul music, offers an inspiring backdrop for music education. SwarShala Kolkata provides structured music programs that honor these traditions while embracing modern genres.',
        instruments: ['vocals', 'guitar', 'piano', 'tabla', 'sitar', 'violin', 'keyboard', 'harmonium'],
        programs: ['one-to-one', 'group', 'online', 'home-tutor'],
        faqs: [
            { question: 'Can I learn Rabindra Sangeet at SwarShala Kolkata?', answer: 'Absolutely! Our Kolkata vocal program includes Rabindra Sangeet, Hindustani classical, and Western music styles.' },
            { question: 'Where do you offer music classes in Kolkata?', answer: 'We provide home tutoring across Kolkata including Salt Lake, Park Street, Ballygunge, Jadavpur, and Howrah. Online classes are available throughout West Bengal.' },
        ],
        nearbyAreas: ['Salt Lake', 'Park Street', 'Ballygunge', 'Jadavpur', 'New Town', 'Howrah'],
    },
    {
        slug: 'jaipur',
        city: 'Jaipur',
        state: 'Rajasthan',
        h1: 'Music Classes in Jaipur',
        metaTitle: 'Music Classes in Jaipur - Guitar, Piano, Vocals & More | SwarShala',
        metaDescription: 'Top music classes in Jaipur. Learn guitar, piano, vocals, tabla & classical instruments. Online & offline. Free trial at SwarShala Jaipur!',
        intro: 'Jaipur, the Pink City with its rich heritage in folk and classical music traditions, is a wonderful setting for musical education. SwarShala Jaipur brings structured, modern music instruction to students across the city.',
        instruments: ['guitar', 'vocals', 'piano', 'tabla', 'keyboard', 'flute', 'violin', 'harmonium'],
        programs: ['one-to-one', 'online', 'home-tutor'],
        faqs: [
            { question: 'What music classes are available in Jaipur?', answer: 'SwarShala offers classes for guitar, piano, vocals, tabla, keyboard, flute, violin, and more in Jaipur through home tutoring and online sessions.' },
        ],
        nearbyAreas: ['C-Scheme', 'Malviya Nagar', 'Vaishali Nagar', 'Mansarovar', 'Raja Park', 'Tonk Road'],
    },
    {
        slug: 'ahmedabad',
        city: 'Ahmedabad',
        state: 'Gujarat',
        h1: 'Music Classes in Ahmedabad',
        metaTitle: 'Music Classes in Ahmedabad - Guitar, Piano, Vocals & More | SwarShala',
        metaDescription: 'Best music classes in Ahmedabad. Learn guitar, piano, vocals & more from expert teachers. Online & offline lessons. Free trial at SwarShala!',
        intro: 'Ahmedabad, Gujarat\'s vibrant cultural hub, offers a growing community of music enthusiasts. SwarShala provides structured music education programs tailored for Ahmedabad\'s student and professional community.',
        instruments: ['guitar', 'piano', 'vocals', 'keyboard', 'drums', 'tabla', 'violin', 'ukulele'],
        programs: ['one-to-one', 'online', 'home-tutor'],
        faqs: [
            { question: 'Do you offer music classes in Ahmedabad?', answer: 'Yes! SwarShala offers home tutor services and online music classes across Ahmedabad for all major instruments.' },
        ],
        nearbyAreas: ['Satellite', 'Prahlad Nagar', 'SG Highway', 'Bodakdev', 'Vastrapur', 'Navrangpura'],
    },
    {
        slug: 'lucknow',
        city: 'Lucknow',
        state: 'Uttar Pradesh',
        h1: 'Music Classes in Lucknow',
        metaTitle: 'Music Classes in Lucknow - Guitar, Piano, Vocals & More | SwarShala',
        metaDescription: 'Premium music classes in Lucknow. Learn guitar, piano, classical vocals, tabla & more. Expert teachers. Online & offline. Free trial at SwarShala!',
        intro: 'Lucknow, the city of Nawabs with its rich tradition of Lucknow gharana in Hindustani classical music, is a deeply musical city. SwarShala Lucknow honors this legacy while offering modern music instruction across genres.',
        instruments: ['vocals', 'tabla', 'sitar', 'guitar', 'piano', 'keyboard', 'violin', 'harmonium'],
        programs: ['one-to-one', 'online', 'home-tutor'],
        faqs: [
            { question: 'Can I learn Hindustani classical music in Lucknow?', answer: 'Yes! SwarShala Lucknow offers comprehensive Hindustani classical training for vocals and instruments, taught by experienced artists.' },
        ],
        nearbyAreas: ['Hazratganj', 'Gomti Nagar', 'Aliganj', 'Indira Nagar', 'Mahanagar'],
    },
];

export function getMusicClassesCityBySlug(slug: string): MusicClassesCity | undefined {
    return musicClassesCities.find((c) => c.slug === slug);
}

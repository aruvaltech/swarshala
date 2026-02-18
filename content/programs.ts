export interface Program {
    slug: string;
    name: string;
    shortName: string;
    summary: string;
    description: string;
    benefits: string[];
    idealFor: string[];
    durationOptions: {
        name: string;
        duration: string;
        sessionsPerWeek: number;
        description: string;
    }[];
    includes: string[];
    faqs: { question: string; answer: string }[];
    popular: boolean;
    icon: string;
    metaDescription: string;
}

export const programs: Program[] = [
    {
        slug: 'one-to-one',
        name: 'One-to-One Private Classes',
        shortName: '1:1 Classes',
        summary: 'Personalized instruction with undivided attention from expert teachers, customized entirely to your pace and goals.',
        description: 'Our one-to-one private classes offer the most personalized music learning experience. With dedicated attention from your instructor, every session is tailored to your specific goals, learning style, and pace. Whether you\'re a beginner needing foundational guidance or an advanced student preparing for performances, private classes accelerate your progress with focused, customized instruction.',
        benefits: [
            'Completely personalized curriculum',
            'Undivided teacher attention',
            'Learn at your own pace',
            'Flexible scheduling',
            'Immediate feedback and correction',
            'Customized repertoire selection',
            'Faster progress than group settings',
            'Build strong student-teacher relationship',
        ],
        idealFor: [
            'Serious learners seeking rapid progress',
            'Students with specific goals (exams, auditions)',
            'Beginners needing foundational attention',
            'Advanced students requiring specialized guidance',
            'Those with irregular schedules',
            'Students who prefer individual attention',
            'Learners with unique needs or challenges',
        ],
        durationOptions: [
            {
                name: 'Standard',
                duration: '45 minutes',
                sessionsPerWeek: 1,
                description: 'Perfect for most learners - one focused weekly session with consistent progress.',
            },
            {
                name: 'Extended',
                duration: '60 minutes',
                sessionsPerWeek: 1,
                description: 'Deeper exploration each week - ideal for intermediate and advanced students.',
            },
            {
                name: 'Intensive',
                duration: '45 minutes',
                sessionsPerWeek: 2,
                description: 'Accelerated learning with twice-weekly sessions for serious commitment.',
            },
            {
                name: 'Performance Prep',
                duration: '60 minutes',
                sessionsPerWeek: 2,
                description: 'Intensive preparation for exams, auditions, or performances.',
            },
        ],
        includes: [
            'Personal instructor assignment',
            'Customized lesson plans',
            'Progress tracking and assessments',
            'Recording of lessons (on request)',
            'Practice materials and assignments',
            'Parent-teacher communication (for children)',
            'Flexible rescheduling options',
            'Certificate upon level completion',
        ],
        faqs: [
            { question: 'How are teachers assigned?', answer: 'We match you with the most suitable teacher based on your instrument, level, goals, location, and schedule. You can request a different teacher if the fit isn\'t right.' },
            { question: 'Can I change my class timing?', answer: 'Yes, we offer flexible scheduling. You can adjust timings with advance notice, subject to teacher availability.' },
            { question: 'What if I miss a class?', answer: 'We allow rescheduling with 24-hour notice. Frequent no-shows may affect your slot priority.' },
            { question: 'Are private classes available online?', answer: 'Absolutely! Many students prefer online 1:1 classes for convenience. The personalized attention works excellently via video.' },
        ],
        popular: true,
        icon: 'one-on-one',
        metaDescription: 'Private one-to-one music classes at SwarShala. Personalized instruction for all instruments and levels. Expert teachers, flexible timing. Book a free trial!',
    },
    {
        slug: 'group-classes',
        name: 'Group Classes',
        shortName: 'Group Classes',
        summary: 'Learn with peers in small groups for an engaging, affordable, and social music learning experience.',
        description: 'Group classes at SwarShala bring together 3-6 students of similar level for collaborative learning. Benefit from peer motivation, ensemble experience, and social interaction while learning from expert instructors. Group classes are more affordable than private lessons while still providing quality instruction and personalized attention within a structured curriculum.',
        benefits: [
            'More affordable than private classes',
            'Learn from peers\' questions and progress',
            'Built-in motivation and accountability',
            'Ensemble and group playing experience',
            'Social connections with fellow learners',
            'Structured curriculum with clear progression',
            'Regular batch schedules',
            'Performance opportunities with batchmates',
        ],
        idealFor: [
            'Budget-conscious learners',
            'Students who thrive in social settings',
            'Children learning alongside peers',
            'Those who enjoy collaborative learning',
            'Beginners wanting structured progression',
            'Musicians seeking ensemble experience',
            'Friends or family members learning together',
        ],
        durationOptions: [
            {
                name: 'Standard Group',
                duration: '60 minutes',
                sessionsPerWeek: 1,
                description: 'Weekly group session with 3-6 students of similar level.',
            },
            {
                name: 'Intensive Group',
                duration: '60 minutes',
                sessionsPerWeek: 2,
                description: 'Twice-weekly sessions for accelerated group learning.',
            },
            {
                name: 'Weekend Batch',
                duration: '90 minutes',
                sessionsPerWeek: 1,
                description: 'Extended weekend sessions for deeper exploration.',
            },
        ],
        includes: [
            'Expert instructor for the batch',
            'Structured group curriculum',
            'Level-appropriate batch placement',
            'Group activities and ensemble practice',
            'Progress assessments',
            'Practice materials',
            'Group performance opportunities',
            'Certificate upon level completion',
        ],
        faqs: [
            { question: 'How are groups formed?', answer: 'We group students by instrument, level, age range, and schedule. Batches typically have 3-6 students for optimal attention.' },
            { question: 'What if I progress faster than my group?', answer: 'We periodically assess and can move students to more advanced batches when ready.' },
            { question: 'Can I bring a friend to join my group?', answer: 'Yes! Friends and family members can join the same batch if their level and schedule match.' },
            { question: 'What happens if I miss a group class?', answer: 'You can attend a make-up session in another batch of the same level, subject to availability.' },
        ],
        popular: true,
        icon: 'group',
        metaDescription: 'Affordable group music classes at SwarShala. Learn with peers in small batches. Expert instruction, social learning, all instruments. Book a free trial!',
    },
    {
        slug: 'home-tutor',
        name: 'Home Tutor Services',
        shortName: 'Home Tutor',
        summary: 'Expert music teachers come to your home for convenient, personalized instruction in your comfort zone.',
        description: 'SwarShala\'s home tutor service brings quality music education directly to your doorstep. Our verified, experienced teachers travel to your home across major Indian cities, providing the same high-quality instruction as our centers. Perfect for families with multiple learners, those with mobility constraints, or anyone preferring the comfort and convenience of home learning.',
        benefits: [
            'Learn in the comfort of home',
            'No travel time or commute',
            'Familiar environment for children',
            'Multiple family members can learn',
            'Teacher uses your own instrument',
            'Flexible timing options',
            'Personalized attention at home',
            'Safe, verified teachers',
        ],
        idealFor: [
            'Busy professionals with tight schedules',
            'Families with multiple learners',
            'Children more comfortable at home',
            'Senior citizens and those with mobility issues',
            'Those in areas far from centers',
            'Students with their own instruments at home',
            'Anyone valuing convenience and comfort',
        ],
        durationOptions: [
            {
                name: 'Standard Home',
                duration: '60 minutes',
                sessionsPerWeek: 1,
                description: 'Weekly home visit for consistent progress in familiar surroundings.',
            },
            {
                name: 'Extended Home',
                duration: '90 minutes',
                sessionsPerWeek: 1,
                description: 'Longer weekly sessions for deeper learning at home.',
            },
            {
                name: 'Intensive Home',
                duration: '60 minutes',
                sessionsPerWeek: 2,
                description: 'Twice-weekly home visits for accelerated learning.',
            },
            {
                name: 'Family Package',
                duration: '120 minutes',
                sessionsPerWeek: 1,
                description: 'Multiple family members learn in one extended home session.',
            },
        ],
        includes: [
            'Verified, background-checked teacher',
            'Teacher travels to your location',
            'Personalized curriculum',
            'All benefits of private classes',
            'Progress tracking',
            'Practice materials',
            'Easy rescheduling',
            'Certificate upon completion',
        ],
        faqs: [
            { question: 'How are home tutors verified?', answer: 'All our teachers undergo background verification, identity checks, and are trained by SwarShala. We only assign teachers with proven track records.' },
            { question: 'What areas do you cover?', answer: 'We offer home tutors across major cities including Delhi NCR, Mumbai, Bangalore, Hyderabad, Chennai, Kolkata, Pune, and many more. Check our city pages for specifics.' },
            { question: 'Do I need to own an instrument?', answer: 'Yes, for home tutoring you need your own instrument. We can help you purchase one if needed.' },
            { question: 'Is home tutoring more expensive?', answer: 'Home tutoring has a premium over center classes to cover teacher travel. The convenience often makes it worthwhile for many families.' },
        ],
        popular: true,
        icon: 'globe',
        metaDescription: 'Home music tutor services by SwarShala. Verified teachers come to your home across major Indian cities. All instruments, all levels. Book a free trial!',
    },
    {
        slug: 'center-classes',
        name: 'Center Classes',
        shortName: 'Center Classes',
        summary: 'Learn at our premium music centers with professional facilities, acoustic rooms, and quality instruments.',
        description: 'SwarShala centers offer a professional learning environment with acoustically treated rooms, quality instruments for practice, and a community of fellow musicians. Visit our centers in major Indian cities for private or group classes. Experience the atmosphere of a real music academy with recitals, workshops, and networking opportunities.',
        benefits: [
            'Professional acoustic environment',
            'Quality instruments available',
            'Community of fellow learners',
            'Regular recitals and events',
            'Exposure to different instruments',
            'Networking with musicians',
            'Dedicated practice spaces',
            'Workshops and masterclasses',
        ],
        idealFor: [
            'Students seeking professional environment',
            'Those without instruments at home',
            'Learners wanting community experience',
            'Students preparing for performances',
            'Those near our center locations',
            'Musicians seeking networking',
            'Anyone wanting full academy experience',
        ],
        durationOptions: [
            {
                name: 'Center Private',
                duration: '45-60 minutes',
                sessionsPerWeek: 1,
                description: 'Private lessons at our center with professional facilities.',
            },
            {
                name: 'Center Group',
                duration: '60 minutes',
                sessionsPerWeek: 1,
                description: 'Group classes at our center with peers.',
            },
            {
                name: 'Intensive',
                duration: '60 minutes',
                sessionsPerWeek: 2,
                description: 'Twice-weekly center sessions for serious learners.',
            },
        ],
        includes: [
            'Access to professional facilities',
            'Quality instruments for learning',
            'Acoustic practice rooms',
            'Community events and recitals',
            'Workshops and masterclasses',
            'Recording facilities (select centers)',
            'Library resources',
            'Certificate upon completion',
        ],
        faqs: [
            { question: 'Where are your centers located?', answer: 'We have centers in Delhi, Mumbai, Bangalore, Hyderabad, Chennai, Kolkata, Pune, Ahmedabad, Jaipur, Chandigarh, Kochi, Noida, and Gurugram. More coming soon!' },
            { question: 'Do I need my own instrument for center classes?', answer: 'Not necessarily. Our centers have instruments for learning, though having your own for home practice accelerates progress.' },
            { question: 'Can I use the center for practice?', answer: 'Practice room usage is available at select centers for enrolled students, subject to booking and availability.' },
            { question: 'Are there parking facilities?', answer: 'Most centers have two-wheeler parking. Car parking varies by location - check with specific centers.' },
        ],
        popular: true,
        icon: 'building',
        metaDescription: 'Music classes at SwarShala centers across India. Professional facilities, quality instruments, community events. All levels and instruments. Book a free trial!',
    },
    {
        slug: 'online-classes',
        name: 'Online Classes',
        shortName: 'Online Classes',
        summary: 'Learn music from anywhere in the world with live online classes from expert SwarShala instructors.',
        description: 'SwarShala\'s online music classes connect you with expert instructors regardless of your location. Using high-quality video conferencing, our teachers provide the same personalized instruction as in-person classes. Perfect for learners in areas without physical centers, those with busy schedules, or anyone preferring the convenience of learning from home.',
        benefits: [
            'Learn from anywhere in the world',
            'No travel time or commute',
            'Access to best teachers regardless of location',
            'Flexible scheduling',
            'Record and review lessons',
            'Comfortable learning environment',
            'Cost-effective (no travel costs)',
            'Continue learning while traveling',
        ],
        idealFor: [
            'Students in areas without centers',
            'International students learning Indian music',
            'NRIs and global Indians',
            'Busy professionals',
            'Those preferring home learning',
            'Students in remote areas',
            'Learners with mobility constraints',
            'Anyone valuing flexibility',
        ],
        durationOptions: [
            {
                name: 'Online Private',
                duration: '45 minutes',
                sessionsPerWeek: 1,
                description: 'One-on-one online sessions with personalized attention.',
            },
            {
                name: 'Online Extended',
                duration: '60 minutes',
                sessionsPerWeek: 1,
                description: 'Longer online sessions for deeper exploration.',
            },
            {
                name: 'Online Intensive',
                duration: '45 minutes',
                sessionsPerWeek: 2,
                description: 'Twice-weekly online sessions for accelerated learning.',
            },
            {
                name: 'Online Group',
                duration: '60 minutes',
                sessionsPerWeek: 1,
                description: 'Small group online classes with peers.',
            },
        ],
        includes: [
            'Live video sessions with expert teachers',
            'Personalized curriculum',
            'Lesson recordings (on request)',
            'Digital practice materials',
            'Progress tracking dashboard',
            'Technical support',
            'Flexible rescheduling',
            'Certificate upon completion',
        ],
        faqs: [
            { question: 'What do I need for online classes?', answer: 'A stable internet connection, device with camera and microphone (laptop/tablet preferred), and your instrument. We\'ll guide you on setup.' },
            { question: 'Is online learning as effective as in-person?', answer: 'For most aspects of music learning, yes! While some nuances are easier in-person, many students progress excellently with online instruction.' },
            { question: 'What platform do you use?', answer: 'We use Zoom and Google Meet for lessons. We provide training on optimal audio/video settings for music learning.' },
            { question: 'Can I take online classes from abroad?', answer: 'Absolutely! We have students across the globe learning Indian and Western music from our teachers. Time zones are accommodated.' },
        ],
        popular: true,
        icon: 'globe',
        metaDescription: 'Online music classes from SwarShala. Learn from anywhere with live video instruction. Expert teachers, all instruments, flexible timing. Book a free trial!',
    },
];

export function getProgramBySlug(slug: string): Program | undefined {
    return programs.find((program) => program.slug === slug);
}

export const programSlugs = programs.map((program) => program.slug);

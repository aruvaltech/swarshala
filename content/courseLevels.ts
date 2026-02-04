export interface CourseLevel {
    level: 'beginner' | 'intermediate' | 'advanced';
    name: string;
    slug: string;
    shortDescription: string;
    targetAudience: string[];
    prerequisites: string[];
    duration: string;
    outcomes: string[];
    syllabusBlocks: {
        title: string;
        topics: string[];
        weeksRequired: string;
    }[];
    timeToMilestones: {
        milestone: string;
        timeline: string;
    }[];
    faqs: { question: string; answer: string }[];
    metaTitleTemplate: string;
    metaDescriptionTemplate: string;
}

export const courseLevels: CourseLevel[] = [
    {
        level: 'beginner',
        name: 'Beginner',
        slug: 'beginner',
        shortDescription: 'Start your musical journey with foundational skills, proper technique, and your first songs.',
        targetAudience: [
            'Complete beginners with no prior musical experience',
            'Those who tried learning before but didn\'t build a foundation',
            'Children starting their first instrument',
            'Adults discovering music for the first time',
            'Anyone wanting to learn properly from scratch',
        ],
        prerequisites: [
            'No prior experience required',
            'Access to instrument (we help you choose)',
            'Commitment to regular practice (20-30 mins daily)',
            'Enthusiasm and patience for learning',
        ],
        duration: '3-6 months (varies by instrument)',
        outcomes: [
            'Proper posture and technique foundation',
            'Reading basic music notation/tabs',
            'Playing simple songs and melodies',
            'Understanding fundamental music theory',
            'Developing ear training basics',
            'Building practice habits',
            'Confidence to progress to intermediate',
        ],
        syllabusBlocks: [
            {
                title: 'Foundations & Setup',
                topics: [
                    'Instrument orientation and care',
                    'Proper posture and positioning',
                    'Hand placement and technique basics',
                    'Understanding your instrument\'s anatomy',
                    'Tuning basics (where applicable)',
                ],
                weeksRequired: '2-4 weeks',
            },
            {
                title: 'First Notes & Sounds',
                topics: [
                    'Producing your first clear sounds',
                    'Basic scales and note patterns',
                    'Simple exercises for technique building',
                    'Introduction to rhythm and timing',
                    'Reading basic notation/tabs',
                ],
                weeksRequired: '4-6 weeks',
            },
            {
                title: 'Building Blocks',
                topics: [
                    'Common chord shapes/fingerings',
                    'Basic music theory integration',
                    'Simple song structures',
                    'Coordination exercises',
                    'Ear training fundamentals',
                ],
                weeksRequired: '4-8 weeks',
            },
            {
                title: 'First Songs',
                topics: [
                    'Playing your first complete songs',
                    'Combining learned elements',
                    'Performance basics',
                    'Practice strategies',
                    'Preparation for intermediate level',
                ],
                weeksRequired: '4-8 weeks',
            },
        ],
        timeToMilestones: [
            { milestone: 'First clear sound/note', timeline: '1-2 weeks' },
            { milestone: 'First complete scale', timeline: '2-4 weeks' },
            { milestone: 'First simple melody', timeline: '4-6 weeks' },
            { milestone: 'First complete song', timeline: '6-12 weeks' },
            { milestone: 'Beginner level completion', timeline: '3-6 months' },
        ],
        faqs: [
            { question: 'Am I too old to start learning?', answer: 'Absolutely not! Adults often progress quickly due to discipline and motivation. Our beginner program welcomes all ages - we have students from 5 to 75.' },
            { question: 'How much practice is needed?', answer: 'For beginners, 20-30 minutes of focused daily practice is ideal. Consistency matters more than duration. Even 15 minutes daily is better than 2 hours once a week.' },
            { question: 'Do I need to read music?', answer: 'Not initially! While we introduce notation, beginners learn through a combination of methods. Reading fluency develops as you progress.' },
            { question: 'What if I\'ve tried before and failed?', answer: 'Many students come to us after unsuccessful attempts. With proper instruction and a structured approach, most succeed. Our teachers are experienced in helping "restarters".' },
        ],
        metaTitleTemplate: 'Beginner {instrument} Classes | Learn {instrument} from Scratch | SwarShala',
        metaDescriptionTemplate: 'Start your {instrument} journey with SwarShala beginner classes. No experience needed. Proper technique, first songs, and solid foundation. Book a free trial!',
    },
    {
        level: 'intermediate',
        name: 'Intermediate',
        slug: 'intermediate',
        shortDescription: 'Build on your foundation with advanced techniques, deeper theory, and diverse repertoire.',
        targetAudience: [
            'Students who have completed beginner level',
            'Self-taught players wanting structure',
            'Those returning to music after a break',
            'Players comfortable with basics seeking growth',
            'Anyone ready for challenging repertoire',
        ],
        prerequisites: [
            'Comfortable with basic technique',
            'Can play simple songs/pieces',
            'Basic understanding of music theory',
            'Regular practice habit established',
            'Familiarity with instrument care',
        ],
        duration: '6-12 months (varies by goals)',
        outcomes: [
            'Advanced techniques and expression',
            'Deeper music theory understanding',
            'Diverse repertoire across styles',
            'Ability to learn songs independently',
            'Ensemble/accompaniment skills',
            'Performance confidence',
            'Foundation for advanced study',
        ],
        syllabusBlocks: [
            {
                title: 'Technique Advancement',
                topics: [
                    'Advanced fingering/bowing/breath techniques',
                    'Speed and accuracy development',
                    'Dynamic control and expression',
                    'Addressing technique weaknesses',
                    'Style-specific techniques',
                ],
                weeksRequired: '6-10 weeks',
            },
            {
                title: 'Theory & Musicianship',
                topics: [
                    'Intermediate music theory',
                    'Scales, modes, and patterns',
                    'Harmony and chord progressions',
                    'Ear training advancement',
                    'Sight-reading development',
                ],
                weeksRequired: '8-12 weeks',
            },
            {
                title: 'Repertoire Expansion',
                topics: [
                    'Genre exploration',
                    'Intermediate classical pieces',
                    'Popular music arrangements',
                    'Style-specific repertoire',
                    'Building personal songbook',
                ],
                weeksRequired: '8-16 weeks',
            },
            {
                title: 'Performance & Application',
                topics: [
                    'Playing with others',
                    'Stage presence basics',
                    'Recording yourself',
                    'Self-learning strategies',
                    'Exam/audition preparation (optional)',
                ],
                weeksRequired: '6-10 weeks',
            },
        ],
        timeToMilestones: [
            { milestone: 'Comfortable with advanced techniques', timeline: '2-3 months' },
            { milestone: 'Can learn songs independently', timeline: '3-4 months' },
            { milestone: 'Plays confidently with others', timeline: '4-6 months' },
            { milestone: 'Ready for performances', timeline: '6-9 months' },
            { milestone: 'Intermediate level mastery', timeline: '6-12 months' },
        ],
        faqs: [
            { question: 'How do I know if I\'m ready for intermediate?', answer: 'If you can play basic songs comfortably, understand fundamental music concepts, and have established practice habits, you\'re likely ready. We assess during your trial.' },
            { question: 'Can I focus on a specific genre?', answer: 'Absolutely! Intermediate level allows genre specialization while building overall musicianship. We customize repertoire to your interests.' },
            { question: 'Should I consider taking exams?', answer: 'Graded exams (Trinity, ABRSM, Rockschool) are optional but provide structure and credentials. We prepare students who choose this path.' },
            { question: 'I\'m self-taught - is intermediate right for me?', answer: 'Many self-taught players join at intermediate. We assess your skills and address any technique gaps while advancing your abilities.' },
        ],
        metaTitleTemplate: 'Intermediate {instrument} Classes | Advance Your Skills | SwarShala',
        metaDescriptionTemplate: 'Take your {instrument} skills further with SwarShala intermediate classes. Advanced techniques, theory, diverse repertoire. Book a free assessment!',
    },
    {
        level: 'advanced',
        name: 'Advanced',
        slug: 'advanced',
        shortDescription: 'Master your instrument with professional techniques, complex repertoire, and performance excellence.',
        targetAudience: [
            'Intermediate players ready for mastery',
            'Aspiring professional musicians',
            'Those preparing for advanced exams/auditions',
            'Performers seeking refinement',
            'Music students pursuing depth',
        ],
        prerequisites: [
            'Strong intermediate-level proficiency',
            'Solid music theory foundation',
            'Ability to learn repertoire independently',
            'Performance experience',
            'Commitment to intensive practice',
        ],
        duration: '12+ months (ongoing mastery)',
        outcomes: [
            'Professional-level technique',
            'Complex repertoire mastery',
            'Advanced music theory and analysis',
            'Confident solo performance',
            'Teaching ability (optional)',
            'Recording studio readiness',
            'Competition/audition prepared',
        ],
        syllabusBlocks: [
            {
                title: 'Technical Mastery',
                topics: [
                    'Professional-level technique refinement',
                    'Extended techniques for your instrument',
                    'Virtuosic passage work',
                    'Tone production mastery',
                    'Physical efficiency and endurance',
                ],
                weeksRequired: '12-20 weeks',
            },
            {
                title: 'Advanced Musicianship',
                topics: [
                    'Advanced music theory and analysis',
                    'Improvisation development',
                    'Arrangement and composition basics',
                    'Historical and stylistic context',
                    'Listening and analysis skills',
                ],
                weeksRequired: '12-20 weeks',
            },
            {
                title: 'Professional Repertoire',
                topics: [
                    'Major works in your genre',
                    'Concert program building',
                    'Style specialization',
                    'Memorization techniques',
                    'Interpretation development',
                ],
                weeksRequired: '20-30+ weeks',
            },
            {
                title: 'Performance Excellence',
                topics: [
                    'Stage presence and communication',
                    'Performance psychology',
                    'Recording and production',
                    'Career guidance (for professionals)',
                    'Teaching methodology (optional)',
                ],
                weeksRequired: '12-20 weeks',
            },
        ],
        timeToMilestones: [
            { milestone: 'Technical refinements visible', timeline: '2-4 months' },
            { milestone: 'Complex repertoire performance-ready', timeline: '4-8 months' },
            { milestone: 'Professional-level performances', timeline: '8-12 months' },
            { milestone: 'Audition/competition ready', timeline: '6-12 months' },
            { milestone: 'Ongoing mastery development', timeline: 'Continuous' },
        ],
        faqs: [
            { question: 'Is advanced level for future professionals only?', answer: 'No! While professionals benefit, many serious hobbyists pursue advanced study for personal fulfillment and mastery without career goals.' },
            { question: 'How intensive is the practice requirement?', answer: 'Advanced study typically requires 45-90 minutes daily of focused practice. More may be needed for performance preparation.' },
            { question: 'Do you prepare for conservatory auditions?', answer: 'Yes! We have experience preparing students for music school auditions, competitions, and professional opportunities.' },
            { question: 'Can I pursue teaching certification?', answer: 'Advanced students interested in teaching can add pedagogy training to their curriculum. We prepare teachers as well as performers.' },
        ],
        metaTitleTemplate: 'Advanced {instrument} Classes | Master Your Instrument | SwarShala',
        metaDescriptionTemplate: 'Achieve mastery with SwarShala advanced {instrument} classes. Professional techniques, complex repertoire, performance excellence. Book a consultation!',
    },
];

export function getCourseLevelBySlug(slug: string): CourseLevel | undefined {
    return courseLevels.find((level) => level.slug === slug);
}

export const levelSlugs = courseLevels.map((level) => level.slug);

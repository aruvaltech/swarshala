export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    publishedAt: string;
    updatedAt?: string;
    author: string;
    category: string;
    tags: string[];
    image?: string;
    featured: boolean;
}

export const blogPosts: BlogPost[] = [
    {
        slug: 'how-to-choose-first-musical-instrument',
        title: 'How to Choose Your First Musical Instrument: A Complete Guide',
        excerpt: 'Confused about which instrument to learn? This comprehensive guide helps you choose the perfect first instrument based on your age, goals, and preferences.',
        publishedAt: '2025-01-15',
        author: 'SwarShala Team',
        category: 'Getting Started',
        tags: ['beginners', 'instrument selection', 'music education'],
        featured: true,
    },
    {
        slug: 'benefits-of-learning-music-for-children',
        title: '10 Proven Benefits of Learning Music for Children',
        excerpt: 'Discover the scientific benefits of music education for children - from cognitive development to emotional intelligence. Research-backed insights for parents.',
        publishedAt: '2025-01-10',
        author: 'SwarShala Team',
        category: 'Music Education',
        tags: ['children', 'benefits', 'child development', 'parents guide'],
        featured: true,
    },
    {
        slug: 'learn-guitar-at-home-beginners-guide',
        title: 'Learn Guitar at Home: Complete Beginner\'s Guide for Indians',
        excerpt: 'Everything you need to start learning guitar at home in India. From choosing your first guitar to playing your first songs - a step-by-step roadmap.',
        publishedAt: '2025-01-05',
        author: 'Rajesh Kumar',
        category: 'Guitar',
        tags: ['guitar', 'beginners', 'home learning', 'India'],
        featured: true,
    },
    {
        slug: 'hindustani-vs-carnatic-music-differences',
        title: 'Hindustani vs Carnatic Music: Understanding the Differences',
        excerpt: 'A comprehensive comparison of India\'s two classical music traditions. Learn about their origins, structures, instruments, and which style might suit you.',
        publishedAt: '2024-12-28',
        author: 'SwarShala Team',
        category: 'Indian Classical',
        tags: ['hindustani', 'carnatic', 'classical music', 'Indian music'],
        featured: false,
    },
    {
        slug: 'best-age-to-start-piano-lessons',
        title: 'What\'s the Best Age to Start Piano Lessons?',
        excerpt: 'When should your child start piano? A detailed guide on age considerations, readiness signs, and how to make the most of early music education.',
        publishedAt: '2024-12-22',
        author: 'Priya Sharma',
        category: 'Piano',
        tags: ['piano', 'children', 'parents guide', 'age'],
        featured: false,
    },
    {
        slug: 'online-music-classes-effective-tips',
        title: 'Are Online Music Classes Effective? Tips for Success',
        excerpt: 'Can you really learn music online? Explore the effectiveness of online music lessons and get practical tips to maximize your virtual learning experience.',
        publishedAt: '2024-12-15',
        author: 'SwarShala Team',
        category: 'Online Learning',
        tags: ['online classes', 'virtual learning', 'tips', 'effectiveness'],
        featured: true,
    },
    {
        slug: 'how-much-practice-music-beginners',
        title: 'How Much Should Beginners Practice Music Daily?',
        excerpt: 'Find the ideal practice duration for music beginners. Learn about quality vs quantity, effective practice techniques, and building sustainable habits.',
        publishedAt: '2024-12-08',
        author: 'SwarShala Team',
        category: 'Practice Tips',
        tags: ['practice', 'beginners', 'tips', 'habit building'],
        featured: false,
    },
    {
        slug: 'abrsm-vs-trinity-music-exams-india',
        title: 'ABRSM vs Trinity Music Exams in India: Which to Choose?',
        excerpt: 'A detailed comparison of ABRSM and Trinity music examinations for Indian students. Understand the differences, costs, and which certification suits your goals.',
        publishedAt: '2024-12-01',
        author: 'Priya Sharma',
        category: 'Certifications',
        tags: ['ABRSM', 'Trinity', 'exams', 'certifications', 'India'],
        featured: false,
    },
    {
        slug: 'learn-tabla-beginners-guide',
        title: 'Learn Tabla: A Beginner\'s Guide to Indian Percussion',
        excerpt: 'Start your tabla journey with this comprehensive guide. Learn about the instrument, basic bols, first exercises, and what to expect in tabla training.',
        publishedAt: '2024-11-25',
        author: 'Vikram Singh',
        category: 'Tabla',
        tags: ['tabla', 'beginners', 'Indian percussion', 'Indian classical'],
        featured: false,
    },
    {
        slug: 'adult-learners-music-never-too-late',
        title: 'Learning Music as an Adult: It\'s Never Too Late to Start',
        excerpt: 'Inspiring stories and practical advice for adults starting their musical journey. Overcome self-doubt and discover the joy of learning music at any age.',
        publishedAt: '2024-11-18',
        author: 'SwarShala Team',
        category: 'Adult Learners',
        tags: ['adults', 'beginners', 'inspiration', 'motivation'],
        featured: true,
    },
    {
        slug: 'bollywood-music-production-basics',
        title: 'Bollywood Music Production: Understanding the Basics',
        excerpt: 'Curious about how Bollywood songs are made? Learn about the elements, instruments, and production techniques behind India\'s biggest film music industry.',
        publishedAt: '2024-11-10',
        author: 'Ananya Reddy',
        category: 'Music Production',
        tags: ['Bollywood', 'music production', 'film music', 'India'],
        featured: false,
    },
    {
        slug: 'music-therapy-benefits-mental-health',
        title: 'Music and Mental Health: How Learning Music Helps Well-being',
        excerpt: 'Explore the therapeutic benefits of music learning. From stress relief to cognitive health, discover how playing music improves mental well-being.',
        publishedAt: '2024-11-05',
        author: 'SwarShala Team',
        category: 'Wellness',
        tags: ['mental health', 'wellness', 'music therapy', 'stress relief'],
        featured: false,
    },
    {
        slug: 'singing-tips-improve-voice-home',
        title: '10 Singing Tips to Improve Your Voice at Home',
        excerpt: 'Practical vocal exercises and techniques you can practice at home to improve your singing voice. Tips from professional vocal coaches.',
        publishedAt: '2024-10-28',
        author: 'Neha Kapoor',
        category: 'Vocals',
        tags: ['singing', 'vocals', 'tips', 'home practice'],
        featured: true,
    },
    {
        slug: 'raag-yaman-beginners-introduction',
        title: 'Introduction to Raag Yaman: A Beginner\'s First Raga',
        excerpt: 'Learn about Raag Yaman, the perfect first raga for Hindustani classical beginners. Understand its mood, notes, and practice suggestions.',
        publishedAt: '2024-10-20',
        author: 'SwarShala Team',
        category: 'Indian Classical',
        tags: ['raag', 'Yaman', 'Hindustani', 'beginners', 'Indian classical'],
        featured: false,
    },
    {
        slug: 'music-career-india-options-guide',
        title: 'Music Careers in India: Options Beyond Being a Performer',
        excerpt: 'Explore diverse music career paths in India - from teaching and production to music therapy and business. A comprehensive guide for aspiring music professionals.',
        publishedAt: '2024-10-12',
        author: 'SwarShala Team',
        category: 'Career Guide',
        tags: ['career', 'music industry', 'India', 'professional', 'jobs'],
        featured: false,
    },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
    return blogPosts.find((post) => post.slug === slug);
}

export function getFeaturedPosts(): BlogPost[] {
    return blogPosts.filter((post) => post.featured);
}

export function getPostsByCategory(category: string): BlogPost[] {
    return blogPosts.filter((post) => post.category === category);
}

export function getPostsByTag(tag: string): BlogPost[] {
    return blogPosts.filter((post) => post.tags.includes(tag));
}

export const blogCategories = [...new Set(blogPosts.map((post) => post.category))];

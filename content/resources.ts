export interface Resource {
    id: string;
    title: string;
    description: string;
    type: 'pdf' | 'video' | 'guide' | 'checklist';
    category: string;
    instrument?: string;
    level?: 'beginner' | 'intermediate' | 'advanced' | 'all';
    downloadUrl: string;
    thumbnailUrl: string;
    pages?: number;
    duration?: string;
    featured: boolean;
    gated: boolean;
}

export const resources: Resource[] = [
    {
        id: 'guitar-chord-chart',
        title: 'Complete Guitar Chord Chart',
        description: 'Essential chord diagrams for beginners to intermediate guitarists. Includes open chords, barre chords, and chord progressions for popular songs.',
        type: 'pdf',
        category: 'Chord Charts',
        instrument: 'guitar',
        level: 'beginner',
        downloadUrl: '/resources/guitar-chord-chart.pdf',
        thumbnailUrl: '/images/resources/guitar-chord-chart.jpg',
        pages: 12,
        featured: true,
        gated: true,
    },
    {
        id: 'piano-scales-guide',
        title: 'Piano Scales & Arpeggios Guide',
        description: 'Master all major and minor scales with fingering charts, practice tips, and exercises for building piano technique.',
        type: 'pdf',
        category: 'Practice Guides',
        instrument: 'piano',
        level: 'intermediate',
        downloadUrl: '/resources/piano-scales-guide.pdf',
        thumbnailUrl: '/images/resources/piano-scales-guide.jpg',
        pages: 24,
        featured: true,
        gated: true,
    },
    {
        id: 'vocal-warmup-routine',
        title: '15-Minute Vocal Warm-Up Routine',
        description: 'Daily vocal exercises to improve range, tone, and vocal health. Suitable for all singing styles - Western and Indian classical.',
        type: 'pdf',
        category: 'Practice Guides',
        instrument: 'vocals',
        level: 'all',
        downloadUrl: '/resources/vocal-warmup-routine.pdf',
        thumbnailUrl: '/images/resources/vocal-warmup-routine.jpg',
        pages: 8,
        featured: true,
        gated: true,
    },
    {
        id: 'tabla-bol-reference',
        title: 'Tabla Bols Reference Sheet',
        description: 'Complete reference of tabla bols (syllables) with notation, hand positions, and common compositions for beginners.',
        type: 'pdf',
        category: 'Reference Materials',
        instrument: 'tabla',
        level: 'beginner',
        downloadUrl: '/resources/tabla-bol-reference.pdf',
        thumbnailUrl: '/images/resources/tabla-bol-reference.jpg',
        pages: 16,
        featured: false,
        gated: true,
    },
    {
        id: 'music-practice-planner',
        title: 'Weekly Music Practice Planner',
        description: 'Structured practice planner to organize your sessions, track progress, and build consistent practice habits.',
        type: 'pdf',
        category: 'Planning Tools',
        level: 'all',
        downloadUrl: '/resources/music-practice-planner.pdf',
        thumbnailUrl: '/images/resources/practice-planner.jpg',
        pages: 4,
        featured: true,
        gated: false,
    },
    {
        id: 'raag-yaman-guide',
        title: 'Complete Guide to Raag Yaman',
        description: 'In-depth exploration of Raag Yaman - aroh, avroh, pakad, compositions, and tips for developing this essential raga.',
        type: 'pdf',
        category: 'Indian Classical',
        level: 'intermediate',
        downloadUrl: '/resources/raag-yaman-guide.pdf',
        thumbnailUrl: '/images/resources/raag-yaman-guide.jpg',
        pages: 20,
        featured: false,
        gated: true,
    },
    {
        id: 'abrsm-prep-checklist',
        title: 'ABRSM Exam Preparation Checklist',
        description: 'Comprehensive checklist for ABRSM exam preparation - scales, pieces, sight-reading, aural tests, and exam day tips.',
        type: 'checklist',
        category: 'Exam Preparation',
        level: 'all',
        downloadUrl: '/resources/abrsm-prep-checklist.pdf',
        thumbnailUrl: '/images/resources/abrsm-checklist.jpg',
        pages: 6,
        featured: true,
        gated: true,
    },
    {
        id: 'drum-rudiments-poster',
        title: 'Essential Drum Rudiments Poster',
        description: 'Visual guide to 26 essential drum rudiments with notation and sticking patterns. Perfect for practice room wall.',
        type: 'pdf',
        category: 'Reference Materials',
        instrument: 'drums',
        level: 'beginner',
        downloadUrl: '/resources/drum-rudiments-poster.pdf',
        thumbnailUrl: '/images/resources/drum-rudiments.jpg',
        pages: 2,
        featured: false,
        gated: true,
    },
    {
        id: 'buying-first-guitar',
        title: 'Guide to Buying Your First Guitar',
        description: 'Everything you need to know before buying your first guitar - acoustic vs electric, budget ranges, what to look for.',
        type: 'guide',
        category: 'Buying Guides',
        instrument: 'guitar',
        level: 'beginner',
        downloadUrl: '/resources/buying-first-guitar.pdf',
        thumbnailUrl: '/images/resources/buying-guitar.jpg',
        pages: 10,
        featured: true,
        gated: false,
    },
    {
        id: 'carnatic-tala-chart',
        title: 'Carnatic Tala System Chart',
        description: 'Visual reference for all 35 talas in Carnatic music with hand counts, aksharas, and common compositions.',
        type: 'pdf',
        category: 'Indian Classical',
        level: 'intermediate',
        downloadUrl: '/resources/carnatic-tala-chart.pdf',
        thumbnailUrl: '/images/resources/carnatic-tala.jpg',
        pages: 8,
        featured: false,
        gated: true,
    },
];

export function getResourceById(id: string): Resource | undefined {
    return resources.find((resource) => resource.id === id);
}

export function getResourcesByInstrument(instrument: string): Resource[] {
    return resources.filter((resource) => resource.instrument === instrument);
}

export function getFeaturedResources(): Resource[] {
    return resources.filter((resource) => resource.featured);
}

export function getFreeResources(): Resource[] {
    return resources.filter((resource) => !resource.gated);
}

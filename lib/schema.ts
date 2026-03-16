const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://swarshala.com';

// Organization Schema
export function generateOrganizationSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': ['Organization', 'EducationalOrganization'],
        '@id': `${SITE_URL}/#organization`,
        name: 'SwarShala',
        alternateName: 'SwarShala Music Academy',
        url: SITE_URL,
        logo: {
            '@type': 'ImageObject',
            url: `${SITE_URL}/images/logo.png`,
            width: 512,
            height: 512,
        },
        description: 'Premium music academy offering expert instruction in guitar, piano, vocals, violin, tabla & more. Online and offline classes across India.',
        foundingDate: '2020',
        founders: [
            {
                '@type': 'Person',
                name: 'SwarShala Founders',
            },
        ],
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'A-42, Ground Floor, Hauz Khas Village',
            addressLocality: 'New Delhi',
            addressRegion: 'Delhi',
            postalCode: '110016',
            addressCountry: 'IN',
        },
        contactPoint: [
            {
                '@type': 'ContactPoint',
                telephone: '+91-11-4567-8900',
                contactType: 'customer service',
                availableLanguage: ['English', 'Hindi'],
                areaServed: 'IN',
            },
            {
                '@type': 'ContactPoint',
                telephone: '+91-11-4567-8900',
                contactType: 'sales',
                availableLanguage: ['English', 'Hindi'],
                areaServed: 'Worldwide',
            },
        ],
        sameAs: [
            'https://www.facebook.com/swarshala',
            'https://www.instagram.com/swarshala',
            'https://www.youtube.com/swarshala',
            'https://www.linkedin.com/company/swarshala',
        ],
        areaServed: [
            {
                '@type': 'Country',
                name: 'India',
            },
            {
                '@type': 'GeoCircle',
                geoMidpoint: {
                    '@type': 'GeoCoordinates',
                    latitude: 20.5937,
                    longitude: 78.9629,
                },
                geoRadius: 'Worldwide',
            },
        ],
        knowsAbout: [
            'Music Education',
            'Guitar Lessons',
            'Piano Classes',
            'Vocal Training',
            'Violin Classes',
            'Tabla Classes',
            'Hindustani Classical Music',
            'Carnatic Music',
            'Western Classical Music',
        ],
        // EducationalOrganization-specific properties
        hasCredential: {
            '@type': 'EducationalOccupationalCredential',
            credentialCategory: 'Music Certification',
            name: 'SwarShala Certified Musician',
        },
    };
}

// EducationalOrganization Schema (standalone for pages needing it)
export function generateEducationalOrganizationSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'EducationalOrganization',
        '@id': `${SITE_URL}/#educationalOrganization`,
        name: 'SwarShala Music Academy',
        url: SITE_URL,
        description: 'India\'s premier music education platform offering structured learning programs for all ages and skill levels.',
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'New Delhi',
            addressRegion: 'Delhi',
            addressCountry: 'IN',
        },
        alumni: [],
        areaServed: {
            '@type': 'Country',
            name: 'India',
        },
        department: [
            { '@type': 'EducationalOrganization', name: 'Guitar Department' },
            { '@type': 'EducationalOrganization', name: 'Piano Department' },
            { '@type': 'EducationalOrganization', name: 'Vocal Department' },
            { '@type': 'EducationalOrganization', name: 'Indian Classical Department' },
        ],
    };
}

// WebSite Schema with SearchAction
export function generateWebSiteSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: 'SwarShala',
        description: 'Premium Music Academy',
        publisher: {
            '@id': `${SITE_URL}/#organization`,
        },
        potentialAction: {
            '@type': 'SearchAction',
            target: {
                '@type': 'EntryPoint',
                urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
            },
            'query-input': 'required name=search_term_string',
        },
        inLanguage: 'en-IN',
    };
}

// LocalBusiness Schema for Center Pages
export function generateLocalBusinessSchema(center: {
    name: string;
    city: string;
    address: string;
    phone: string;
    hours: string;
    mapEmbedUrl: string;
    slug: string;
}) {
    return {
        '@context': 'https://schema.org',
        '@type': 'MusicSchool',
        '@id': `${SITE_URL}/centers/${center.slug}/#localbusiness`,
        name: `SwarShala ${center.city}`,
        alternateName: `SwarShala Music Academy ${center.city}`,
        image: `${SITE_URL}/images/centers/${center.slug}.jpg`,
        url: `${SITE_URL}/centers/${center.slug}`,
        telephone: center.phone,
        address: {
            '@type': 'PostalAddress',
            streetAddress: center.address.split(',')[0],
            addressLocality: center.city,
            addressRegion: center.city,
            postalCode: center.address.match(/\d{6}/)?.[0] || '',
            addressCountry: 'IN',
        },
        geo: {
            '@type': 'GeoCoordinates',
            // These would be actual coordinates in production
            latitude: 28.6139,
            longitude: 77.209,
        },
        openingHoursSpecification: parseOpeningHours(center.hours),
        priceRange: '₹₹',
        servesCuisine: undefined, // Not applicable for music school
        parentOrganization: {
            '@id': `${SITE_URL}/#organization`,
        },
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Music Classes',
            itemListElement: [
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Guitar Classes',
                    },
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Piano Classes',
                    },
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Vocal Training',
                    },
                },
            ],
        },
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            reviewCount: '150',
            bestRating: '5',
            worstRating: '1',
        },
    };
}

// Parse opening hours string to schema format
function parseOpeningHours(hoursString: string) {
    // Simplified parsing - in production, this would be more robust
    return [
        {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            opens: '09:00',
            closes: '20:00',
        },
        {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Sunday'],
            opens: '10:00',
            closes: '17:00',
        },
    ];
}

// Course Schema
export function generateCourseSchema(course: {
    name: string;
    instrument: string;
    level: string;
    description: string;
    duration: string;
    slug: string;
}) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Course',
        '@id': `${SITE_URL}/courses/${course.slug}/#course`,
        name: `${course.level.charAt(0).toUpperCase() + course.level.slice(1)} ${course.instrument} Course`,
        description: course.description,
        provider: {
            '@id': `${SITE_URL}/#organization`,
        },
        educationalLevel: course.level,
        about: {
            '@type': 'Thing',
            name: course.instrument,
        },
        timeRequired: course.duration,
        teaches: `${course.instrument} playing at ${course.level} level`,
        hasCourseInstance: {
            '@type': 'CourseInstance',
            courseMode: ['online', 'onsite'],
            courseWorkload: 'PT1H per week',
            instructor: {
                '@type': 'Person',
                name: 'SwarShala Instructor',
            },
        },
        offers: {
            '@type': 'Offer',
            category: 'Music Education',
            priceCurrency: 'INR',
            availability: 'https://schema.org/InStock',
        },
    };
}

// FAQPage Schema
export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
            },
        })),
    };
}

// BreadcrumbList Schema
export function generateBreadcrumbSchema(
    items: { name: string; path: string }[]
) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: `${SITE_URL}${item.path}`,
        })),
    };
}

// Person Schema for Teachers
export function generatePersonSchema(teacher: {
    name: string;
    slug: string;
    title: string;
    bio: string;
    instruments: string[];
    city: string;
    experienceYears: number;
    rating: number;
}) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Person',
        '@id': `${SITE_URL}/teachers/${teacher.slug}/#person`,
        name: teacher.name,
        jobTitle: teacher.title,
        description: teacher.bio,
        url: `${SITE_URL}/teachers/${teacher.slug}`,
        image: `${SITE_URL}/images/teachers/${teacher.slug}.jpg`,
        worksFor: {
            '@id': `${SITE_URL}/#organization`,
        },
        knowsAbout: teacher.instruments,
        workLocation: {
            '@type': 'Place',
            name: `SwarShala ${teacher.city}`,
            address: {
                '@type': 'PostalAddress',
                addressLocality: teacher.city,
                addressCountry: 'IN',
            },
        },
    };
}

// Article Schema for Blog Posts
export function generateArticleSchema(article: {
    title: string;
    description: string;
    slug: string;
    date: string;
    author: string;
    image?: string;
    tags: string[];
}) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Article',
        '@id': `${SITE_URL}/blog/${article.slug}/#article`,
        headline: article.title,
        description: article.description,
        image: article.image ? `${SITE_URL}${article.image}` : `${SITE_URL}/images/blog/default.jpg`,
        datePublished: article.date,
        dateModified: article.date,
        author: {
            '@type': 'Person',
            name: article.author,
        },
        publisher: {
            '@id': `${SITE_URL}/#organization`,
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `${SITE_URL}/blog/${article.slug}`,
        },
        keywords: article.tags.join(', '),
    };
}

// Service Schema for Programs
export function generateServiceSchema(service: {
    name: string;
    slug: string;
    description: string;
    serviceType: string;
}) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Service',
        '@id': `${SITE_URL}/classes/#${service.slug}`,
        name: service.name,
        description: service.description,
        provider: {
            '@id': `${SITE_URL}/#organization`,
        },
        serviceType: service.serviceType,
        areaServed: {
            '@type': 'Country',
            name: 'India',
        },
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: `${service.name} Options`,
        },
    };
}

// OfferCatalog Schema for Instruments/Programs
export function generateOfferCatalogSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'OfferCatalog',
        '@id': `${SITE_URL}/#offercatalog`,
        name: 'SwarShala Music Programs',
        description: 'Comprehensive music education programs',
        provider: {
            '@id': `${SITE_URL}/#organization`,
        },
        itemListElement: [
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: 'One-to-One Private Classes',
                    description: 'Personalized music instruction',
                },
            },
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: 'Group Classes',
                    description: 'Learn with peers in small groups',
                },
            },
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: 'Online Classes',
                    description: 'Live online music lessons',
                },
            },
            {
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: 'Home Tutor Services',
                    description: 'Music teachers at your doorstep',
                },
            },
        ],
    };
}

// ServiceArea Schema for City Pages
export function generateServiceAreaSchema(city: {
    name: string;
    slug: string;
    state: string;
    serviceAreas: string[];
}) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Service',
        '@id': `${SITE_URL}/cities/${city.slug}/#service`,
        name: `Music Classes in ${city.name}`,
        description: `Professional music education services in ${city.name}, ${city.state}`,
        provider: {
            '@id': `${SITE_URL}/#organization`,
        },
        areaServed: {
            '@type': 'City',
            name: city.name,
            containedInPlace: {
                '@type': 'State',
                name: city.state,
            },
        },
        serviceArea: city.serviceAreas.map((area) => ({
            '@type': 'Place',
            name: `${area}, ${city.name}`,
        })),
    };
}

// VideoObject Schema for embedded videos
export function generateVideoSchema(video: {
    name: string;
    description: string;
    thumbnailUrl: string;
    uploadDate: string;
    duration?: string;
    embedUrl?: string;
    contentUrl?: string;
}) {
    return {
        '@context': 'https://schema.org',
        '@type': 'VideoObject',
        name: video.name,
        description: video.description,
        thumbnailUrl: video.thumbnailUrl,
        uploadDate: video.uploadDate,
        duration: video.duration || 'PT5M',
        embedUrl: video.embedUrl,
        contentUrl: video.contentUrl,
        publisher: {
            '@id': `${SITE_URL}/#organization`,
        },
    };
}

// ItemList Schema for collection pages (instruments, cities, teachers)
export function generateItemListSchema(items: {
    name: string;
    url: string;
    image?: string;
    description?: string;
}[]) {
    return {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            url: `${SITE_URL}${item.url}`,
            ...(item.image && { image: `${SITE_URL}${item.image}` }),
            ...(item.description && { description: item.description }),
        })),
    };
}

// HowTo Schema for tutorial-style blog posts
export function generateHowToSchema(howTo: {
    name: string;
    description: string;
    totalTime?: string;
    steps: { name: string; text: string; image?: string }[];
}) {
    return {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: howTo.name,
        description: howTo.description,
        totalTime: howTo.totalTime || 'PT30M',
        step: howTo.steps.map((step, index) => ({
            '@type': 'HowToStep',
            position: index + 1,
            name: step.name,
            text: step.text,
            ...(step.image && {
                image: {
                    '@type': 'ImageObject',
                    url: `${SITE_URL}${step.image}`,
                },
            }),
        })),
    };
}

// Event Schema for workshops/masterclasses
export function generateEventSchema(event: {
    name: string;
    description: string;
    startDate: string;
    endDate?: string;
    location?: string;
    isOnline?: boolean;
    price?: number;
    url?: string;
}) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Event',
        name: event.name,
        description: event.description,
        startDate: event.startDate,
        endDate: event.endDate || event.startDate,
        eventAttendanceMode: event.isOnline
            ? 'https://schema.org/OnlineEventAttendanceMode'
            : 'https://schema.org/OfflineEventAttendanceMode',
        eventStatus: 'https://schema.org/EventScheduled',
        location: event.isOnline
            ? {
                '@type': 'VirtualLocation',
                url: event.url || SITE_URL,
            }
            : {
                '@type': 'Place',
                name: event.location || 'SwarShala Music Academy',
                address: {
                    '@type': 'PostalAddress',
                    addressLocality: 'New Delhi',
                    addressCountry: 'IN',
                },
            },
        organizer: {
            '@id': `${SITE_URL}/#organization`,
        },
        offers: {
            '@type': 'Offer',
            price: event.price || 0,
            priceCurrency: 'INR',
            availability: 'https://schema.org/InStock',
            url: event.url || `${SITE_URL}/book-trial`,
        },
    };
}

// Programmatic SEO page schema for music-classes-{city} pages
export function generateMusicClassesCitySchema(city: {
    name: string;
    slug: string;
    state: string;
    instruments: string[];
    nearbyAreas: string[];
}) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Service',
        '@id': `${SITE_URL}/music-classes-${city.slug}/#service`,
        name: `Music Classes in ${city.name}`,
        description: `Premium music education services in ${city.name}, ${city.state}. Learn guitar, piano, vocals & more.`,
        provider: {
            '@id': `${SITE_URL}/#organization`,
        },
        serviceType: 'Music Education',
        areaServed: {
            '@type': 'City',
            name: city.name,
            containedInPlace: {
                '@type': 'State',
                name: city.state,
            },
        },
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: `Music Classes in ${city.name}`,
            itemListElement: city.instruments.map((instrument) => ({
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: `${instrument.charAt(0).toUpperCase() + instrument.slice(1)} Classes in ${city.name}`,
                },
            })),
        },
        serviceArea: city.nearbyAreas.map((area) => ({
            '@type': 'Place',
            name: `${area}, ${city.name}`,
        })),
    };
}

// Review Schema for testimonials
export function generateReviewSchema(reviews: {
    author: string;
    rating: number;
    text: string;
    date: string;
}[]) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: 'SwarShala Music Classes',
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1),
            reviewCount: reviews.length,
            bestRating: 5,
            worstRating: 1,
        },
        review: reviews.map((review) => ({
            '@type': 'Review',
            author: { '@type': 'Person', name: review.author },
            datePublished: review.date,
            reviewRating: {
                '@type': 'Rating',
                ratingValue: review.rating,
                bestRating: 5,
            },
            reviewBody: review.text,
        })),
    };
}

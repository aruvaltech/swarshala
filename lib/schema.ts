const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://swarshala.com';

// Organization Schema
export function generateOrganizationSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'Organization',
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

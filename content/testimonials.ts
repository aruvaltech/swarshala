export interface Testimonial {
    id: string;
    name: string;
    location: string;
    instrument: string;
    program: string;
    rating: number;
    text: string;
    shortText: string;
    date: string;
    verified: boolean;
    photoPlaceholder: string;
}

export const testimonials: Testimonial[] = [
    {
        id: 'testimonial-1',
        name: 'Aditya Sharma',
        location: 'Delhi',
        instrument: 'Guitar',
        program: 'One-to-One',
        rating: 5,
        text: 'I started learning guitar at SwarShala as a complete beginner at age 32. My instructor Rajesh sir made the journey enjoyable and structured. Within 6 months, I was playing songs at family gatherings. The personalized attention in 1:1 classes made all the difference. Highly recommend for working professionals looking to learn music!',
        shortText: 'Started as a complete beginner at 32. Within 6 months, playing at family gatherings!',
        date: '2025-08-15',
        verified: true,
        photoPlaceholder: '/images/testimonials/placeholder.jpg',
    },
    {
        id: 'testimonial-2',
        name: 'Priyanka Mehta',
        location: 'Mumbai',
        instrument: 'Piano',
        program: 'Center Classes',
        rating: 5,
        text: 'My daughter has been learning piano at SwarShala Mumbai for 2 years. She cleared her ABRSM Grade 3 with distinction! The center has beautiful facilities and Priya ma\'am is an excellent teacher. The recitals and concerts give children confidence. Worth every penny for serious music education.',
        shortText: 'Daughter cleared ABRSM Grade 3 with distinction after 2 years of training!',
        date: '2025-09-20',
        verified: true,
        photoPlaceholder: '/images/testimonials/placeholder.jpg',
    },
    {
        id: 'testimonial-3',
        name: 'Rahul Verma',
        location: 'Jaipur',
        instrument: 'Vocals',
        program: 'Online Classes',
        rating: 5,
        text: 'Living in Jaipur, I didn\'t have access to quality vocal training until I found SwarShala\'s online classes. The audio quality during sessions is excellent, and my teacher provides detailed feedback. I\'ve improved tremendously in Hindustani classical vocals over the past year. Online learning really works!',
        shortText: 'Online vocal classes work brilliantly. Improved tremendously in Hindustani classical!',
        date: '2025-07-10',
        verified: true,
        photoPlaceholder: '/images/testimonials/placeholder.jpg',
    },
    {
        id: 'testimonial-4',
        name: 'Ananya Krishnan',
        location: 'Chennai',
        instrument: 'Violin',
        program: 'Home Tutor',
        rating: 5,
        text: 'The home tutor service is a blessing for our family. With two children learning different instruments, having teachers come home saves so much time. Both kids are progressing well in Carnatic music. Arun sir\'s violin teaching is exceptional - my daughter won her school competition!',
        shortText: 'Home tutor service is a blessing. Daughter won school competition!',
        date: '2025-10-05',
        verified: true,
        photoPlaceholder: '/images/testimonials/placeholder.jpg',
    },
    {
        id: 'testimonial-5',
        name: 'Vikram Patel',
        location: 'Ahmedabad',
        instrument: 'Drums',
        program: 'Group Classes',
        rating: 4,
        text: 'Joined the weekend group drum classes at SwarShala. Great energy in the class with other learners! The teacher keeps things fun while ensuring we learn properly. More affordable than private classes and you get to jam with batchmates. Perfect for hobbyists like me.',
        shortText: 'Weekend group classes are fun and affordable. Great for hobbyists!',
        date: '2025-06-25',
        verified: true,
        photoPlaceholder: '/images/testimonials/placeholder.jpg',
    },
    {
        id: 'testimonial-6',
        name: 'Lakshmi Nair',
        location: 'Kochi',
        instrument: 'Keyboard',
        program: 'One-to-One',
        rating: 5,
        text: 'At 55, I finally fulfilled my dream of learning keyboard. SwarShala\'s patient teachers made me comfortable despite my age. No judgement, just encouragement. I can now play bhajans and light music. It\'s never too late to start - this is proof!',
        shortText: 'Started at 55 and now play bhajans confidently. Never too late to start!',
        date: '2025-08-30',
        verified: true,
        photoPlaceholder: '/images/testimonials/placeholder.jpg',
    },
    {
        id: 'testimonial-7',
        name: 'Rohan D\'Souza',
        location: 'Goa',
        instrument: 'Guitar',
        program: 'Online Classes',
        rating: 5,
        text: 'Being in Goa with no SwarShala center nearby, online classes were my only option. I\'m amazed at how effective they are! My teacher from Mumbai is brilliant, and the flexibility suits my musician lifestyle. Playing professional gigs now thanks to the training.',
        shortText: 'Online classes from Goa led to playing professional gigs!',
        date: '2025-09-12',
        verified: true,
        photoPlaceholder: '/images/testimonials/placeholder.jpg',
    },
    {
        id: 'testimonial-8',
        name: 'Sneha Reddy',
        location: 'Hyderabad',
        instrument: 'Vocals',
        program: 'Center Classes',
        rating: 5,
        text: 'The Jubilee Hills center has excellent acoustics and facilities. Neha ma\'am\'s vocal coaching transformed my singing. I\'ve recorded my first cover songs and gained confidence to perform publicly. The investment in quality training is absolutely worth it.',
        shortText: 'Recorded my first cover songs and now perform publicly with confidence!',
        date: '2025-11-01',
        verified: true,
        photoPlaceholder: '/images/testimonials/placeholder.jpg',
    },
    {
        id: 'testimonial-9',
        name: 'Arjun Kapoor',
        location: 'Pune',
        instrument: 'Tabla',
        program: 'Home Tutor',
        rating: 5,
        text: 'Learning tabla from a home tutor has been the right choice for our traditional family. The guru-shishya atmosphere at home is perfect for classical training. My son is already accompanying his vocal practice. Grateful for maintaining this tradition.',
        shortText: 'Guru-shishya atmosphere at home is perfect for classical tabla training.',
        date: '2025-07-20',
        verified: true,
        photoPlaceholder: '/images/testimonials/placeholder.jpg',
    },
    {
        id: 'testimonial-10',
        name: 'Meghna Saxena',
        location: 'Lucknow',
        instrument: 'Vocals',
        program: 'Online Classes',
        rating: 4,
        text: 'The Lucknow gharana style I wanted to learn wasn\'t available locally. SwarShala connected me with a Delhi-based guru online. Though I miss in-person learning sometimes, the quality of instruction is excellent. Hope they open a Lucknow center soon!',
        shortText: 'Found the gharana training I wanted through online classes!',
        date: '2025-10-18',
        verified: true,
        photoPlaceholder: '/images/testimonials/placeholder.jpg',
    },
    {
        id: 'testimonial-11',
        name: 'Karthik Sundaram',
        location: 'Bengaluru',
        instrument: 'Guitar',
        program: 'Group Classes',
        rating: 5,
        text: 'As an IT professional, the weekend group guitar classes fit perfectly into my schedule. Made friends with fellow learners and we\'ve even started jamming outside class! The Koramangala center is well-equipped and the vibe is great.',
        shortText: 'Weekend classes fit IT schedule perfectly. Made friends and now jam together!',
        date: '2025-09-05',
        verified: true,
        photoPlaceholder: '/images/testimonials/placeholder.jpg',
    },
    {
        id: 'testimonial-12',
        name: 'Anjali Menon',
        location: 'Kochi',
        instrument: 'Veena',
        program: 'One-to-One',
        rating: 5,
        text: 'Finding a good veena teacher in Kochi was challenging until SwarShala. The home tutor assigned to me is highly skilled in Carnatic tradition. My daughter is learning the ancient art properly. Preserving our heritage through music.',
        shortText: 'Finally found quality veena training. Preserving heritage through music!',
        date: '2025-08-08',
        verified: true,
        photoPlaceholder: '/images/testimonials/placeholder.jpg',
    },
    {
        id: 'testimonial-13',
        name: 'Amit Bansal',
        location: 'Gurugram',
        instrument: 'Piano',
        program: 'Center Classes',
        rating: 5,
        text: 'The Golf Course Road center is premium - exactly what you\'d expect in Gurugram. My daughter practices on real acoustic pianos here. The ABRSM preparation is systematic and results show. Highly recommended for serious piano students.',
        shortText: 'Premium center with acoustic pianos. Systematic ABRSM preparation!',
        date: '2025-11-10',
        verified: true,
        photoPlaceholder: '/images/testimonials/placeholder.jpg',
    },
    {
        id: 'testimonial-14',
        name: 'Suresh Kumar',
        location: 'Chandigarh',
        instrument: 'Harmonium',
        program: 'Home Tutor',
        rating: 4,
        text: 'Learning harmonium for religious gatherings at our gurdwara. The teacher is respectful of our devotional focus while teaching proper technique. Can now accompany shabad kirtan effectively. Fulfilling a longtime desire.',
        shortText: 'Now accompany shabad kirtan effectively. Fulfilling a longtime desire!',
        date: '2025-06-15',
        verified: true,
        photoPlaceholder: '/images/testimonials/placeholder.jpg',
    },
    {
        id: 'testimonial-15',
        name: 'Pooja Iyer',
        location: 'Noida',
        instrument: 'Flute',
        program: 'Online Classes',
        rating: 5,
        text: 'Started bansuri as a meditation practice. The online classes with Meera ma\'am are calming and well-structured. Learning flute has become my daily stress-buster. The breathing techniques have improved my overall well-being too!',
        shortText: 'Bansuri as meditation. Daily stress-buster with breathing benefits!',
        date: '2025-10-28',
        verified: true,
        photoPlaceholder: '/images/testimonials/placeholder.jpg',
    },
];

export function getTestimonialById(id: string): Testimonial | undefined {
    return testimonials.find((t) => t.id === id);
}

export function getTestimonialsByCity(city: string): Testimonial[] {
    return testimonials.filter((t) => t.location.toLowerCase() === city.toLowerCase());
}

export function getTestimonialsByInstrument(instrument: string): Testimonial[] {
    return testimonials.filter((t) => t.instrument.toLowerCase() === instrument.toLowerCase());
}

export function getFeaturedTestimonials(count: number = 6): Testimonial[] {
    return testimonials.filter((t) => t.rating >= 5).slice(0, count);
}

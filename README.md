# SwarShala.com - Premium Music Academy Website

A complete, production-ready Next.js 16.1.6 website for SwarShala, India's premier music academy offering online and offline music classes.

## 🎵 Overview

SwarShala is a premium music education platform serving students across 20+ cities in India. This website showcases:

- **15+ Musical Instruments**: Classical, Western, and Percussion
- **Multiple Learning Modes**: Online, Offline, and Hybrid
- **Expert Teachers**: 500+ verified music educators
- **Programmatic SEO**: City, instrument, and course pages for organic visibility

## 🚀 Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 16.1.6 (exact) | React framework with App Router |
| React | ^19.0.0 | UI library |
| TypeScript | ^5.7.0 | Type safety |
| TailwindCSS | ^3.4.17 | Styling |
| MDX | ^15.1.0 | Blog content |
| Zod | ^3.23.8 | Form validation |

## 📁 Project Structure

```
swarshala/
├── app/                          # Next.js App Router pages
│   ├── (routes)/                 # Route groups
│   │   ├── page.tsx              # Home page
│   │   ├── about/                # About page
│   │   ├── classes/              # Classes overview
│   │   ├── online-classes/       # Online learning
│   │   ├── offline-classes/      # Center classes
│   │   ├── instruments/          # Instruments listing
│   │   │   └── [instrument]/     # Dynamic instrument pages
│   │   ├── cities/               # Cities listing
│   │   │   └── [city]/           # Dynamic city pages
│   │   ├── centers/              # Center locations
│   │   │   └── [city]/           # Dynamic center pages
│   │   ├── teachers/             # Teachers listing
│   │   │   └── [slug]/           # Dynamic teacher pages
│   │   ├── courses/              # Course catalog
│   │   │   └── [instrument]/
│   │   │       └── [level]/      # Dynamic course pages
│   │   ├── compare/              # Comparison pages
│   │   │   ├── online-vs-offline/
│   │   │   ├── one-to-one-vs-group/
│   │   │   └── home-tutor-vs-center/
│   │   ├── blog/                 # Blog listing
│   │   │   └── [slug]/           # Dynamic blog posts
│   │   ├── book-trial/           # Lead capture form
│   │   ├── pricing/              # Pricing plans
│   │   ├── resources/            # Free resources
│   │   ├── showcase/             # Student performances
│   │   ├── become-a-teacher/     # Teacher recruitment
│   │   ├── contact/              # Contact page
│   │   ├── privacy/              # Privacy policy
│   │   └── terms/                # Terms of service
│   ├── api/                      # API routes
│   │   ├── leads/                # Lead submission
│   │   ├── teachers/             # Teacher applications
│   │   └── resources/            # Resource downloads
│   ├── sitemap.ts                # Dynamic sitemap
│   ├── robots.ts                 # Robots.txt
│   ├── llms.txt/                 # AI crawlability
│   ├── layout.tsx                # Root layout
│   └── globals.css               # Global styles
├── components/                   # Reusable components
│   ├── ui/                       # UI primitives
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Form.tsx
│   │   ├── FAQ.tsx
│   │   ├── Testimonial.tsx
│   │   ├── Breadcrumbs.tsx
│   │   ├── Section.tsx
│   │   └── index.ts
│   ├── Header.tsx                # Navigation
│   ├── Footer.tsx                # Site footer
│   └── Schema.tsx                # JSON-LD schemas
├── content/                      # Static content data
│   ├── cities.ts                 # 20 Indian cities
│   ├── instruments.ts            # 15 instruments
│   ├── programs.ts               # Learning programs
│   ├── courseLevels.ts           # Beginner/Intermediate/Advanced
│   ├── teachers.ts               # 12 teacher profiles
│   ├── testimonials.ts           # 15 student testimonials
│   ├── faqs.ts                   # FAQ collections
│   ├── comparisons.ts            # Comparison data
│   ├── resources.ts              # Free resources
│   └── blog.ts                   # Blog post metadata
├── lib/                          # Utility functions
│   ├── seo.ts                    # SEO helpers
│   ├── schema.ts                 # Schema.org builders
│   ├── validators.ts             # Zod schemas
│   ├── rate-limit.ts             # Rate limiting
│   └── utils.ts                  # General utilities
├── public/                       # Static assets
│   └── images/                   # Image assets
├── next.config.ts                # Next.js configuration
├── tailwind.config.ts            # Tailwind configuration
├── tsconfig.json                 # TypeScript configuration
└── package.json                  # Dependencies
```

## 🎨 Design System

### Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Midnight Blue | `#0B1C2D` | Primary/headings |
| Classical Gold | `#D4AF37` | Accent/CTAs |
| Surface White | `#FFFFFF` | Backgrounds |
| Surface Muted | `#F8F9FA` | Alt backgrounds |
| Text Primary | `#1A1A1A` | Body text |
| Text Secondary | `#4A5568` | Secondary text |
| Border | `#E2E8F0` | Borders/dividers |

### Typography

- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)

### Components

All components are built with:
- Semantic HTML5 elements
- ARIA accessibility attributes
- Mobile-first responsive design
- Tailwind utility classes

## 🔍 SEO Features

### Technical SEO
- ✅ Semantic HTML structure
- ✅ Proper heading hierarchy (h1 > h2 > h3)
- ✅ Meta titles and descriptions
- ✅ Canonical URLs
- ✅ Open Graph / Twitter cards
- ✅ Dynamic sitemap.xml
- ✅ Robots.txt with AI crawler support

### Schema.org Markup
- Organization schema (site-wide)
- LocalBusiness schema (city pages)
- Course schema (course pages)
- Person schema (teacher pages)
- Article schema (blog posts)
- FAQPage schema (FAQ sections)
- BreadcrumbList schema (navigation)
- Review/AggregateRating schema

### Local SEO
- 20 city-specific landing pages
- Local business schemas
- Area-specific content
- Google Maps integration ready

### AI Crawlability
- `/llms.txt` endpoint for AI assistants
- Structured content for LLM understanding
- Clear navigation hierarchy

## 📊 Programmatic SEO Pages

The site generates **150+ pages** automatically:

| Page Type | Count | Example URL |
|-----------|-------|-------------|
| Instruments | 15 | `/instruments/guitar` |
| Cities | 20 | `/cities/mumbai` |
| Centers | 20 | `/centers/delhi` |
| Courses | 45 | `/courses/piano/beginner` |
| Teachers | 12 | `/teachers/ravi-shankar` |
| Blog Posts | 15 | `/blog/how-to-learn-guitar` |
| Comparisons | 3 | `/compare/online-vs-offline` |

## 🛠️ Getting Started

### Prerequisites

- Node.js 18.17+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/swarshala/website.git

# Navigate to project
cd swarshala

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
# Create production build
npm run build

# Start production server
npm run start
```

### Linting

```bash
# Run ESLint
npm run lint
```

<<<<<<< HEAD
## ☁️ Deploy (Google Cloud Run)

- Docker build steps are intentionally simple: `npm install` → `npm run build` → `npm run start`.
- GitHub Actions workflow builds an `linux/amd64` image and deploys to Cloud Run.
- Full setup (GCP + GitHub secrets): see `DEPLOY_CLOUD_RUN.md`.

=======
>>>>>>> 2a409e8d8856b0861c88d07ecc74374303963a22
## 📝 Environment Variables

Create a `.env.local` file for local development:

```env
# Site URL (used for sitemap, canonical URLs)
NEXT_PUBLIC_SITE_URL=https://swarshala.com

# API Keys (add as needed)
# GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
# GOOGLE_MAPS_API_KEY=your-key
# SMTP_HOST=smtp.example.com
# SMTP_USER=user@example.com
# SMTP_PASS=your-password
```

## 🔧 Configuration

### Next.js Config

Key configurations in `next.config.ts`:
- Image optimization with WebP/AVIF
- Strict mode enabled
- Security headers
- MDX support via pageExtensions

### Tailwind Config

Extended theme in `tailwind.config.ts`:
- Custom color palette
- Font families (Playfair Display, Inter)
- Container configurations
- Custom animations

## 🚀 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Configure environment variables
4. Deploy

### Other Platforms

```bash
# Build the project
npm run build

# The .next folder contains the build output
# Static export (if needed): npm run export
```

## 📊 Performance

Target Lighthouse scores:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

### Optimizations Applied

- SSR for all pages (no client-side rendering)
- Image optimization with next/image
- Font preloading (Playfair Display, Inter)
- Minimal JavaScript bundles
- CSS optimization via Tailwind
- Lazy loading for below-fold content

## 🔐 Security

- Rate limiting on API routes
- Honeypot spam protection
- Input validation with Zod
- Secure headers configured
- CORS policies
- CSP headers (add in production)

## 📊 Google Analytics 4 Integration

SwarShala uses Google Analytics 4 for cross-platform analytics tracking. The measurement ID is shared across all Aruvalai platforms.

### Configuration

| Setting | Value |
|---------|-------|
| Measurement ID | `G-VF9DN91PY6` |
| Property Type | Shared (Aruvalai cross-platform) |
| Environment Variable | `NEXT_PUBLIC_GA_ID` |

### Files

```
lib/gtag.ts           # Analytics library with typed event functions
components/Analytics.tsx  # Route change tracking component
app/layout.tsx        # GA4 script loading
.env.local            # Environment configuration
```

### Standard Events

| Event | Category | When to Use |
|-------|----------|-------------|
| `trial_booking` | conversion | User submits trial booking form |
| `teacher_signup` | conversion | Teacher submits application |
| `whatsapp_click` | engagement | WhatsApp button clicked |
| `payment_initiated` | ecommerce | User starts payment flow |
| `lead_magnet_download` | lead | Resource download |
| `form_start` | engagement | User begins filling form |
| `form_submit` | conversion | Form submitted successfully |
| `cta_click` | engagement | CTA button clicked |

### Usage Examples

```typescript
import {
  trackTrialBooking,
  trackTeacherSignup,
  trackWhatsAppClick,
  trackLeadMagnetDownload,
  event
} from '@/lib/gtag';

// Track trial booking
trackTrialBooking('Guitar', 'Delhi', 'online');

// Track teacher signup
trackTeacherSignup('Piano', 'Mumbai');

// Track WhatsApp click
trackWhatsAppClick('pricing-page');

// Track resource download
trackLeadMagnetDownload('Guitar Chord Chart', 'pdf');

// Custom event
event({
  action: 'video_play',
  category: 'engagement',
  label: 'Homepage Hero Video'
});
```

### Adding New Events

1. Add the event action type to `SwarShalaEventAction` in `lib/gtag.ts`
2. Create a helper function following the existing pattern
3. Export and use in your component

### Verifying in GA4 Realtime

1. Open [Google Analytics](https://analytics.google.com)
2. Navigate to Reports → Realtime
3. Open SwarShala in another tab
4. Perform the action you want to verify
5. Check Realtime for the event

### Event Naming Conventions

- **Actions**: Use `snake_case` (e.g., `trial_booking`, `payment_initiated`)
- **Categories**: Use lowercase single words (e.g., `conversion`, `engagement`)
- **Labels**: Use descriptive text with context (e.g., `Guitar - Delhi (online)`)

### Cross-Domain Tracking

The GA4 property is configured for cross-domain tracking across Aruvalai platforms. No additional configuration is needed for:
- swarshala.com
- Other Aruvalai domains sharing the same property

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is proprietary software owned by SwarShala.

## 📞 Support

For technical support:
- Email: tech@swarshala.com
- Phone: +91 88827 25239

---

Built with ❤️ by SwarShala Engineering Team
# swarshala
<<<<<<< HEAD
# swarshala
=======
>>>>>>> 2a409e8d8856b0861c88d07ecc74374303963a22

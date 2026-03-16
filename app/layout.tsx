import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";
import { Schema } from "@/components/Schema";
import {
  generateOrganizationSchema,
  generateWebSiteSchema,
  generateEducationalOrganizationSchema,
} from "@/lib/schema";
import { defaultMetadata } from "@/lib/seo";
import { GA_MEASUREMENT_ID } from "@/lib/gtag";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = defaultMetadata;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B1C2D",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        {/* Preconnect to external resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://www.googletagmanager.com" />

        {/* DNS Prefetch for third-party domains */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="48x48" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Facebook Domain Verification */}
        <meta
          name="facebook-domain-verification"
          content="ggmf3ysg3wnexxyhqslalkj93ja6ch"
        />

        {/* Global Schema */}
        <Schema schema={generateOrganizationSchema()} />
        <Schema schema={generateWebSiteSchema()} />
        <Schema schema={generateEducationalOrganizationSchema()} />

        {/* Google Analytics 4 - Shared Aruvalai property */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
              send_page_view: true
            });
          `}
        </Script>
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-white text-text-primary antialiased">
        {/* Analytics - Route change tracking */}
        <Analytics />

        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-gold focus:text-white focus:rounded-lg"
        >
          Skip to main content
        </a>

        <Header />

        <main id="main-content" className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}

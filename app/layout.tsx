import type { Metadata, Viewport } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import { BUSINESS } from '@/lib/constants';
import { organizationSchema, websiteSchema, localBusinessSchema } from '@/lib/schema';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { EmergencyBanner } from '@/components/layout/EmergencyBanner';
import { FloatingWhatsApp } from '@/components/floating/FloatingWhatsApp';
import { FloatingCall } from '@/components/floating/FloatingCall';
import { MobileBottomBar } from '@/components/floating/MobileBottomBar';
import './globals.css';

/* ─────────────────────────────────────────────
   FONTS
───────────────────────────────────────────── */
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700', '800'],
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
});

/* ─────────────────────────────────────────────
   VIEWPORT
───────────────────────────────────────────── */
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0d1117' },
  ],
};

/* ─────────────────────────────────────────────
   METADATA
───────────────────────────────────────────── */
export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS.website),
  title: {
    default: 'Locksmith Dubai | 24/7 Emergency Locksmith Service | +971 55 768 9003',
    template: '%s | Locksmith Dubai',
  },
  description:
    'Professional 24/7 emergency locksmith services in Dubai. Fast response for residential, commercial, and automotive locksmith needs. Licensed & insured. Call +971 55 768 9003.',
  keywords: [
    'locksmith dubai',
    'emergency locksmith dubai',
    '24 hour locksmith dubai',
    'car locksmith dubai',
    'house lockout dubai',
    'lock change dubai',
    'smart locks dubai',
    'locksmith near me dubai',
    'safe opening dubai',
    'commercial locksmith dubai',
  ],
  authors: [{ name: BUSINESS.name, url: BUSINESS.website }],
  creator: BUSINESS.name,
  publisher: BUSINESS.name,
  category: 'Locksmith Services',
  alternates: {
    canonical: BUSINESS.website,
    languages: {
      'en-AE': BUSINESS.website,
      'en-US': BUSINESS.website,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_AE',
    url: BUSINESS.website,
    siteName: BUSINESS.name,
    title: 'Locksmith Dubai | 24/7 Emergency Service | +971 55 768 9003',
    description:
      'Dubai\'s most trusted locksmith. 24/7 emergency response, 30-minute arrival, licensed technicians. Call now for instant help.',
    images: [
      {
        url: `${BUSINESS.website}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Locksmith In Dubai - 24/7 Emergency Locksmith Service',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@dubailocksmiths',
    creator: '@dubailocksmiths',
    title: 'Locksmith Dubai | 24/7 Emergency Service',
    description:
      'Professional 24/7 locksmith services across Dubai. 30-minute response guaranteed.',
    images: [`${BUSINESS.website}/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-placeholder',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    other: [{ rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#2563eb' }],
  },
  manifest: '/site.webmanifest',
  other: {
    'geo.region': 'AE-DU',
    'geo.placename': 'Dubai',
    'geo.position': `${BUSINESS.coordinates.lat};${BUSINESS.coordinates.lng}`,
    'ICBM': `${BUSINESS.coordinates.lat}, ${BUSINESS.coordinates.lng}`,
    'business:contact_data:phone_number': BUSINESS.phone,
    'business:contact_data:street_address': BUSINESS.address.street,
    'business:contact_data:locality': BUSINESS.address.city,
    'business:contact_data:country_name': BUSINESS.address.country,
  },
};

/* ─────────────────────────────────────────────
   ROOT LAYOUT
───────────────────────────────────────────── */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgSchema = organizationSchema();
  const siteSchema = websiteSchema();
  const bizSchema = localBusinessSchema();

  return (
    <html
      lang="en-AE"
      className={`${inter.variable} ${playfair.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Global JSON-LD Schemas */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(bizSchema) }}
        />

        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* DNS prefetch for external services */}
        <link rel="dns-prefetch" href="https://wa.me" />
        <link rel="dns-prefetch" href="https://maps.googleapis.com" />
      </head>
      <body
        className={`
          font-sans antialiased
          bg-white dark:bg-navy-900
          text-gray-900 dark:text-gray-100
          min-h-dvh
          overflow-x-hidden
        `}
        style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          {/* Skip to main content - accessibility */}
          <a
            href="#main-content"
            className="
              sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999]
              focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg
              focus:font-semibold focus:shadow-lg
            "
          >
            Skip to main content
          </a>

          <EmergencyBanner />
          <Navbar />

          {/* Main page content */}
          <main id="main-content">
            {children}
          </main>

          <Footer />

          {/* Floating action buttons — desktop */}
          <div className="hidden md:block">
            <FloatingCall />
            <FloatingWhatsApp />
          </div>

          {/* Mobile sticky bottom bar */}
          <div className="block md:hidden">
            <MobileBottomBar />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

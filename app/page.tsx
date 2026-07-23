import { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';
import { Hero } from '@/components/sections/Hero';
import { EmergencySection } from '@/components/sections/EmergencySection';
import { TrustIndicators } from '@/components/sections/TrustIndicators';
import { StatisticsSection } from '@/components/sections/StatisticsSection';
import { ServicesGrid } from '@/components/sections/ServicesGrid';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { ReviewsSection } from '@/components/sections/ReviewsSection';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { CoverageSection } from '@/components/sections/CoverageSection';
import { CTASection } from '@/components/sections/CTASection';
import { blogPosts } from '@/content/blog';
import { faqs } from '@/content/faq';
import { BUSINESS, WHATSAPP_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Locksmith Dubai | 24/7 Emergency Locksmith Service | +971 55 768 9003',
  description:
    'Professional 24/7 emergency locksmith services across Dubai. House lockouts, car lockouts, lock changes, key duplication & smart locks. Licensed & insured. Call +971 55 768 9003.',
  keywords: [
    'locksmith Dubai',
    'emergency locksmith Dubai',
    '24/7 locksmith Dubai',
    'locksmith near me Dubai',
    'car lockout Dubai',
    'house lockout Dubai',
    'lock change Dubai',
    'key duplication Dubai',
    'smart lock installation Dubai',
    'safe opening Dubai',
  ],
  alternates: { canonical: 'https://dubailocksmiths.com' },
  openGraph: {
    title: 'Locksmith Dubai | 24/7 Emergency Locksmith | +971 55 768 9003',
    description:
      'Professional 24/7 emergency locksmith services across Dubai. Licensed & insured. 30-minute response. Call now.',
    url: 'https://dubailocksmiths.com',
    siteName: 'Locksmith In Dubai',
    locale: 'en_AE',
    type: 'website',
    images: [
      {
        url: 'https://dubailocksmiths.com/images/og-home.jpg',
        width: 1200,
        height: 630,
        alt: 'Locksmith In Dubai — 24/7 Emergency Service',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Locksmith Dubai | 24/7 Emergency Locksmith',
    description: 'Professional 24/7 locksmith services across Dubai. 30-minute response. Call +971 55 768 9003.',
    images: ['https://dubailocksmiths.com/images/og-home.jpg'],
  },
  robots: { index: true, follow: true },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://dubailocksmiths.com/#business',
  name: BUSINESS.name,
  description:
    'Professional 24/7 emergency locksmith services across Dubai. Licensed & insured with 10+ years of experience.',
  url: BUSINESS.website,
  telephone: BUSINESS.phone,
  email: BUSINESS.email,
  image: 'https://dubailocksmiths.com/images/og-home.jpg',
  logo: 'https://dubailocksmiths.com/images/logo.png',
  priceRange: 'AED 150–AED 1500',
  address: {
    '@type': 'PostalAddress',
    streetAddress: BUSINESS.address.street,
    addressLocality: BUSINESS.address.city,
    addressRegion: BUSINESS.address.state,
    addressCountry: BUSINESS.address.countryCode,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: BUSINESS.coordinates.lat,
    longitude: BUSINESS.coordinates.lng,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '00:00',
    closes: '23:59',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: BUSINESS.rating,
    reviewCount: BUSINESS.reviewCount,
    bestRating: 5,
    worstRating: 1,
  },
  areaServed: {
    '@type': 'City',
    name: 'Dubai',
    addressCountry: 'AE',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Locksmith Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Emergency Locksmith' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Car Lockout Service' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'House Lockout Service' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Lock Change & Replacement' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Smart Lock Installation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Key Duplication' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Safe Opening' } },
    ],
  },
};

const homepageFaqs = faqs.slice(0, 8);

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: homepageFaqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

const BRANDS = [
  'YALE',
  'ABLOY',
  'KABA',
  'DORMAKABA',
  'ASSA ABLOY',
  'MASTER LOCK',
  'MUL-T-LOCK',
  'KWIKSET',
  'SCHLAGE',
  'SAMSUNG',
  'BOSCH',
  'HAFELE',
];

function BrandsSection() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-premium">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-brand-600 uppercase tracking-widest mb-3">
            Brands We Service
          </p>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Specialists Across All Major Lock Brands
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our technicians are trained and equipped to work with every major lock brand available in
            Dubai — from entry-level residential hardware to high-security commercial systems.
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {BRANDS.map((brand) => (
            <div
              key={brand}
              className="glass-card flex items-center justify-center py-5 px-3 rounded-xl text-center group hover:border-brand-300 transition-all duration-200"
            >
              <span className="text-sm font-bold text-gray-500 group-hover:text-brand-600 tracking-wider transition-colors">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HomeFAQSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-premium max-w-4xl">
        <Script
          id="faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-brand-600 uppercase tracking-widest mb-3">
            FAQ
          </p>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600">
            The questions we hear most often. If yours is not here,{' '}
            <Link href="/contact" className="text-brand-600 hover:text-brand-700 underline">
              contact us directly
            </Link>
            .
          </p>
        </div>

        <div className="space-y-3">
          {homepageFaqs.map((faq) => (
            <details
              key={faq.id}
              className="group glass-card rounded-xl overflow-hidden"
            >
              <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer list-none font-semibold text-gray-900 hover:text-brand-600 transition-colors">
                <span>{faq.question}</span>
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center text-sm group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/faq" className="btn btn-outline">
            View All 30 FAQs
          </Link>
        </div>
      </div>
    </section>
  );
}

function BlogPreviewSection() {
  const previewPosts = blogPosts.slice(0, 3);

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-premium">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-brand-600 uppercase tracking-widest mb-3">
            Locksmith Advice
          </p>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Expert Locksmith Advice</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Practical guides and insights from our team to help you make informed decisions about
            your home, car and business security.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {previewPosts.map((post) => (
            <article
              key={post.id}
              className="glass-card rounded-2xl overflow-hidden group hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-video bg-gradient-to-br from-brand-50 to-brand-100 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-brand-200 flex items-center justify-center">
                    <svg className="w-8 h-8 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                </div>
                <span className="absolute top-3 left-3 bg-brand-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {post.category}
                </span>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                  <span>{new Date(post.date).toLocaleDateString('en-AE', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="font-bold text-gray-900 mb-3 leading-snug group-hover:text-brand-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-5 line-clamp-3">
                  {post.excerpt}
                </p>

                <Link
                  href={`/blog/${post.slug}`}
                  className="text-brand-600 font-semibold text-sm hover:text-brand-700 inline-flex items-center gap-1 group/link"
                >
                  Read More
                  <svg
                    className="w-4 h-4 group-hover/link:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/blog" className="btn btn-outline">
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <Hero />
      <EmergencySection />
      <TrustIndicators />
      <StatisticsSection />
      <ServicesGrid />
      <WhyChooseUs />
      <ReviewsSection />
      <HowItWorks />
      <BrandsSection />
      <CoverageSection />
      <HomeFAQSection />
      <BlogPreviewSection />
      <CTASection />
    </>
  );
}

import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { BUSINESS, STATISTICS, TRUST_SIGNALS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'About Us | Locksmith In Dubai | Licensed & Trusted Since 2014',
  description:
    'Learn about Locksmith In Dubai — a licensed, insured locksmith service with 10+ years of experience serving all Dubai areas. 305+ verified customer reviews.',
  alternates: { canonical: 'https://dubailocksmiths.com/about' },
  openGraph: {
    title: 'About Locksmith In Dubai | 10+ Years Serving All of Dubai',
    description:
      'Licensed, insured and trusted by thousands of Dubai residents and businesses. Learn about our story, team and commitment to honest locksmith services.',
    url: 'https://dubailocksmiths.com/about',
    siteName: 'Locksmith In Dubai',
    type: 'website',
  },
};

const aboutSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About Locksmith In Dubai',
  url: 'https://dubailocksmiths.com/about',
  description:
    'Locksmith In Dubai has been serving the emirate since 2014. Licensed, insured and rated 4.8 stars by over 305 customers.',
  mainEntity: {
    '@type': 'LocalBusiness',
    name: BUSINESS.name,
    foundingDate: '2014',
    numberOfEmployees: { '@type': 'QuantitativeValue', value: 8 },
    telephone: BUSINESS.phone,
    url: BUSINESS.website,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: BUSINESS.rating,
      reviewCount: BUSINESS.reviewCount,
    },
  },
};

const CERTIFICATIONS = [
  {
    title: 'Dubai Municipality Compliant',
    description:
      'Our operations, tools and business practices comply with all Dubai Municipality requirements for trade and contractor services.',
  },
  {
    title: 'DPS Security Clearance',
    description:
      'All technicians who work in residential and high-security commercial properties are cleared by Dubai Police Security (DPS).',
  },
  {
    title: 'Public Liability Insurance',
    description:
      'We carry comprehensive public liability insurance covering all work carried out on residential and commercial properties.',
  },
  {
    title: 'Trade Certified Technicians',
    description:
      'Every member of our technical team holds recognised locksmith trade certification and undergoes regular professional development.',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Script
        id="about-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="bg-gray-50 border-b border-gray-200">
        <div className="container-premium py-3">
          <ol className="flex items-center gap-2 text-sm text-gray-600">
            <li>
              <Link href="/" className="hover:text-brand-600 transition-colors">
                Home
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-900 font-medium">About Us</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-brand-900 to-gray-900 text-white section-padding">
        <div className="container-premium">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-brand-400 uppercase tracking-widest mb-4">
              About Us
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              Dubai&apos;s Most Trusted<br />
              <span className="text-gradient">Locksmith Service</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Over a decade of honest, professional locksmith services across the emirate. Licensed,
              insured, and trusted by more than 5,000 customers — from residents locked out of their
              apartments to property managers overseeing entire commercial towers.
            </p>
          </div>
        </div>
      </section>

      {/* Our story */}
      <section className="section-padding">
        <div className="container-premium">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-5 text-gray-600 leading-relaxed">
                <p>
                  Locksmith In Dubai was founded in 2014 by a locksmith who had spent years watching
                  customers get overcharged by unscrupulous operators — people in vulnerable
                  situations being quoted inflated prices, or handed shoddy workmanship with no
                  recourse. The business was built on a simple idea: do honest, quality work at fair
                  prices, every time, for every customer.
                </p>
                <p>
                  Starting with a single van covering the Jumeirah corridor, the business grew
                  steadily through word of mouth. When a customer was satisfied — genuinely satisfied,
                  not just placated — they told their neighbours, their building management, and their
                  colleagues. That organic growth is how we became one of Dubai&apos;s most
                  recognised locksmith services, without ever resorting to the bait-and-switch
                  tactics that still plague the industry.
                </p>
                <p>
                  Today we operate a fleet of equipped vans stationed across Dubai, staffed by a
                  team of certified technicians who share the same commitment to transparency and
                  quality that the business was founded on. The phone number has not changed, the
                  no-call-out-fee policy has never changed, and the warranty on all work has never
                  changed.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="glass-card rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To be the locksmith service that Dubai residents call without hesitation — knowing
                  they will get a licensed professional at their door quickly, a clear price before
                  any work starts, and a finished job that is done right the first time.
                </p>
              </div>
              <div className="glass-card rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Our Guarantee</h3>
                <ul className="space-y-3">
                  {TRUST_SIGNALS.map((signal) => (
                    <li key={signal} className="flex items-center gap-3 text-gray-700">
                      <span className="w-5 h-5 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      {signal}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-gray-50">
        <div className="container-premium">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">By the Numbers</h2>
            <p className="text-gray-600">
              Ten years of data behind these figures — not marketing estimates.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { value: '10+', label: 'Years in Business', note: 'Founded 2014' },
              { value: '5,000+', label: 'Jobs Completed', note: 'Residential & commercial' },
              { value: '305+', label: 'Verified Reviews', note: 'Google & Trustpilot' },
              { value: '4.8★', label: 'Average Rating', note: 'Out of 5.0' },
              { value: '30 min', label: 'Avg Response Time', note: 'Across all Dubai' },
              { value: '24/7', label: 'Availability', note: '365 days a year' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="glass-card rounded-2xl p-8 text-center"
              >
                <div className="text-4xl font-extrabold text-brand-600 mb-2">{stat.value}</div>
                <div className="font-semibold text-gray-900 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-500">{stat.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-white">
        <div className="container-premium">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Licensed, Certified & Insured</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Operating professionally in Dubai requires meeting specific regulatory requirements.
              We meet and exceed them all.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {CERTIFICATIONS.map((cert) => (
              <div key={cert.title} className="glass-card rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-600 text-white flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{cert.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{cert.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="section-padding bg-brand-50">
        <div className="container-premium text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">We Cover All of Dubai</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            From Palm Jumeirah to International City, from Deira to Arabian Ranches — if you are in
            Dubai, we can reach you. Our 30-minute response guarantee applies across the entire
            emirate.
          </p>
          <Link href="/areas" className="btn btn-primary">
            View All Coverage Areas
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-brand-600 to-brand-800 text-white">
        <div className="container-premium text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="text-brand-100 mb-8 max-w-xl mx-auto">
            Call us now or get in touch for a quote. No commitment, no pressure — just honest advice
            from a locksmith you can trust.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+971557689003" className="btn bg-white text-brand-700 hover:bg-brand-50 font-bold px-8 py-3 rounded-xl">
              Call {BUSINESS.phone}
            </a>
            <Link href="/contact" className="btn btn-outline border-white text-white hover:bg-white/10">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

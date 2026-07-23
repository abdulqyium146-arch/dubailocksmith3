import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Script from 'next/script';
import { areas } from '@/content/areas';
import { faqs } from '@/content/faq';
import { BUSINESS, WHATSAPP_URL } from '@/lib/constants';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return areas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const area = areas.find((a) => a.slug === slug);
  if (!area) return { title: 'Area Not Found' };

  return {
    title: area.metaTitle,
    description: area.metaDescription,
    alternates: { canonical: `https://dubailocksmiths.com/areas/${area.slug}` },
    openGraph: {
      title: area.metaTitle,
      description: area.metaDescription,
      url: `https://dubailocksmiths.com/areas/${area.slug}`,
      siteName: 'Locksmith In Dubai',
      type: 'website',
    },
  };
}

export default async function AreaPage({ params }: Props) {
  const { slug } = await params;
  const area = areas.find((a) => a.slug === slug);

  if (!area) notFound();

  const nearbyAreas = areas
    .filter((a) => a.slug !== area.slug)
    .slice(0, 6);

  const areaFaqs = faqs.filter((f) => f.category === 'emergency' || f.category === 'general').slice(0, 5);

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: BUSINESS.name,
    description: `Professional locksmith services in ${area.name}, Dubai. Emergency lockout, lock change, smart lock installation. ${area.responseTime} response time.`,
    url: `${BUSINESS.website}/areas/${area.slug}`,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: area.name,
      addressRegion: 'Dubai',
      addressCountry: 'AE',
    },
    ...(area.coordinates && {
      geo: {
        '@type': 'GeoCoordinates',
        latitude: area.coordinates.lat,
        longitude: area.coordinates.lng,
      },
    }),
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
    areaServed: {
      '@type': 'Place',
      name: area.name,
      address: { '@type': 'PostalAddress', addressLocality: area.name, addressCountry: 'AE' },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: BUSINESS.rating,
      reviewCount: BUSINESS.reviewCount,
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: areaFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  return (
    <div className="min-h-screen bg-white">
      <Script
        id="area-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Script
        id="area-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
            <li>
              <Link href="/areas" className="hover:text-brand-600 transition-colors">
                Areas
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-900 font-medium">{area.name}</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-brand-900 to-gray-900 text-white section-padding">
        <div className="container-premium">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Response: ~{area.responseTime}
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              Emergency Locksmith<br />
              <span className="text-gradient">in {area.name}</span>
            </h1>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">{area.shortDescription}</p>
            <div className="flex flex-wrap gap-4">
              <a href="tel:+971557689003" className="btn btn-emergency">
                Call Now — {BUSINESS.phone}
              </a>
              <a href={WHATSAPP_URL} className="btn btn-whatsapp">
                WhatsApp Your Location
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding">
        <div className="container-premium">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Locksmith Services in {area.name}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">{area.description}</p>

              <p className="text-gray-600 leading-relaxed mb-6">
                We reach {area.name} in approximately {area.responseTime} from the moment you call.
                Our mobile locksmith vans carry a full inventory of lock hardware, so the majority
                of jobs — from a simple lockout to a complete lock change — are completed on the
                first visit with no need to order parts.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Whether you are locked out of your apartment, need a lock changed after moving in,
                want to upgrade to a smart lock, or require an emergency repair after a break-in
                attempt, we are the reliable choice for residents and businesses in {area.name}.
                All our technicians are licensed and insured, pricing is transparent and confirmed
                before work begins, and every job carries a one-year warranty.
              </p>
            </div>

            <div className="space-y-6">
              {/* Response time card */}
              <div className="glass-card rounded-2xl p-6 text-center">
                <div className="text-4xl font-extrabold text-brand-600 mb-1">
                  ~{area.responseTime}
                </div>
                <p className="text-gray-700 font-semibold mb-2">Response Time</p>
                <p className="text-gray-500 text-sm">From your call to technician arrival in {area.name}</p>
              </div>

              {/* Landmarks */}
              <div className="glass-card rounded-2xl p-6">
                <h3 className="font-bold text-gray-900 mb-3">Landmarks We Cover</h3>
                <ul className="space-y-1.5">
                  {area.landmarks.map((landmark) => (
                    <li key={landmark} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-400" />
                      {landmark}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Neighbourhoods */}
              <div className="glass-card rounded-2xl p-6">
                <h3 className="font-bold text-gray-900 mb-3">Neighbourhoods Served</h3>
                <div className="flex flex-wrap gap-2">
                  {area.neighborhoods.map((n) => (
                    <span
                      key={n}
                      className="text-xs bg-brand-50 text-brand-700 border border-brand-200 px-2.5 py-1 rounded-full"
                    >
                      {n}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services available */}
      <section className="section-padding bg-gray-50">
        <div className="container-premium">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Services Available in {area.name}
          </h2>
          <p className="text-gray-600 text-center mb-10 max-w-xl mx-auto">
            The full range of our locksmith services is available in {area.name} — all at the same
            flat rates, with no extra charge for location.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: 'Emergency Lockout', href: '/services/emergency-locksmith', desc: 'Locked out of your home, office or car — we get you back in fast.' },
              { title: 'Car Lockout', href: '/services/car-lockout', desc: 'Non-destructive vehicle entry for all makes and models.' },
              { title: 'Lock Change & Replacement', href: '/services/lock-change', desc: 'Upgrade or replace any lock type on the same visit.' },
              { title: 'Smart Lock Installation', href: '/services/smart-locks', desc: 'Yale, Samsung, Philips and other leading smart lock brands.' },
              { title: 'Key Duplication', href: '/services/key-duplication', desc: 'Precision key cutting with immediate availability.' },
              { title: 'Safe Opening', href: '/services/safe-opening', desc: 'Lost the combination or key to your safe? We open it.' },
              { title: 'Lock Rekeying', href: '/services/lock-rekeying', desc: 'Change who has access without replacing the full lock.' },
              { title: 'Security Upgrades', href: '/services/security-upgrades', desc: 'Comprehensive security assessment and hardware upgrades.' },
              { title: 'Commercial Locksmith', href: '/services/commercial-locksmith', desc: 'Office locks, access control and master key systems.' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="glass-card rounded-xl p-5 group hover:border-brand-300 transition-all duration-200"
              >
                <h3 className="font-bold text-gray-900 group-hover:text-brand-600 transition-colors mb-1.5">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-premium max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Questions About Our Service in {area.name}
          </h2>
          <div className="space-y-3">
            {areaFaqs.map((faq) => (
              <details key={faq.id} className="glass-card rounded-xl overflow-hidden group">
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
        </div>
      </section>

      {/* Nearby areas */}
      <section className="section-padding bg-gray-50">
        <div className="container-premium">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">We Also Cover Nearby Areas</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {nearbyAreas.map((a) => (
              <Link
                key={a.id}
                href={`/areas/${a.slug}`}
                className="glass-card rounded-xl p-4 text-center group hover:border-brand-300 transition-all duration-200"
              >
                <p className="font-semibold text-gray-800 group-hover:text-brand-600 text-sm transition-colors">
                  {a.name}
                </p>
                <p className="text-xs text-gray-500 mt-1">~{a.responseTime}</p>
              </Link>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link href="/areas" className="btn btn-outline">
              View All Coverage Areas
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-brand-600 to-brand-800 text-white">
        <div className="container-premium text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need a Locksmith in {area.name} Right Now?
          </h2>
          <p className="text-brand-100 mb-8 max-w-xl mx-auto">
            We can be with you in approximately {area.responseTime}. Call or WhatsApp now —
            our dispatchers answer 24 hours a day.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+971557689003" className="btn bg-white text-brand-700 hover:bg-brand-50 font-bold px-8 py-3 rounded-xl">
              Call {BUSINESS.phone}
            </a>
            <a href={WHATSAPP_URL} className="btn btn-whatsapp">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

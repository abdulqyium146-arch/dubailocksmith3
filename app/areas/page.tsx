import { Metadata } from 'next';
import Link from 'next/link';
import { areas } from '@/content/areas';

export const metadata: Metadata = {
  title: 'Locksmith Coverage Areas Dubai | We Come to You | Locksmith In Dubai',
  description:
    'Emergency locksmith services across all Dubai areas. Downtown, Marina, Business Bay, JVC, Palm Jumeirah, Al Barsha and more. 30-minute response time.',
  keywords: [
    'locksmith Dubai areas',
    'locksmith Downtown Dubai',
    'locksmith Dubai Marina',
    'locksmith Business Bay',
    'locksmith JVC',
    'locksmith Al Barsha',
    'locksmith near me Dubai',
    'emergency locksmith Dubai coverage',
  ],
  alternates: { canonical: 'https://dubailocksmiths.com/areas' },
  openGraph: {
    title: 'Locksmith Coverage Areas Dubai | 30-Minute Response Across All Dubai',
    description:
      'We cover every corner of Dubai. Emergency locksmith service with a 30-minute response guarantee.',
    url: 'https://dubailocksmiths.com/areas',
    siteName: 'Locksmith In Dubai',
    type: 'website',
  },
};

function ResponseTimeBadge({ time }: { time: string }) {
  const minutes = parseInt(time);
  const color =
    minutes <= 20
      ? 'bg-emerald-100 text-emerald-700'
      : minutes <= 30
      ? 'bg-brand-100 text-brand-700'
      : 'bg-amber-100 text-amber-700';

  return (
    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${color}`}>
      ~{time}
    </span>
  );
}

export default function AreasPage() {
  return (
    <div className="min-h-screen bg-white">
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
            <li className="text-gray-900 font-medium">Areas</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-brand-900 to-gray-900 text-white section-padding">
        <div className="container-premium text-center">
          <span className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            30-Minute Response Guarantee
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            We Cover All of Dubai<br />
            <span className="text-gradient">We Come to You</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-8">
            Our mobile locksmith teams are stationed strategically across Dubai so we reach you fast
            — whether you are in a high-rise in Downtown or a villa in Arabian Ranches.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+971557689003" className="btn btn-emergency">
              Call for Immediate Help
            </a>
            <a href="https://wa.me/971557689003" className="btn btn-whatsapp">
              WhatsApp Your Location
            </a>
          </div>
        </div>
      </section>

      {/* Response time legend */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container-premium py-4">
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
            <span className="font-semibold text-gray-700">Response times:</span>
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-emerald-400" />
              Under 25 minutes (central areas)
            </span>
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-brand-400" />
              25–30 minutes
            </span>
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-amber-400" />
              30–45 minutes (outer communities)
            </span>
          </div>
        </div>
      </div>

      {/* Areas grid */}
      <section className="section-padding">
        <div className="container-premium">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {areas.map((area) => (
              <Link
                key={area.id}
                href={`/areas/${area.slug}`}
                className="glass-card rounded-2xl p-6 group hover:border-brand-300 hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h2 className="text-lg font-bold text-gray-900 group-hover:text-brand-600 transition-colors">
                    {area.name}
                  </h2>
                  <ResponseTimeBadge time={area.responseTime} />
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {area.shortDescription}
                </p>

                <div className="mb-4">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                    Key neighbourhoods
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {area.neighborhoods.slice(0, 4).map((n) => (
                      <span
                        key={n}
                        className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full"
                      >
                        {n}
                      </span>
                    ))}
                    {area.neighborhoods.length > 4 && (
                      <span className="text-xs text-gray-400 px-2 py-0.5">
                        +{area.neighborhoods.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                <span className="text-brand-600 text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  View Details
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage note */}
      <section className="section-padding bg-brand-50">
        <div className="container-premium">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Don&apos;t See Your Area Listed?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our coverage extends beyond the areas listed above. Dubai is a large city and our
                teams operate across the entire emirate. If you are in a community not shown here,
                call us and we will confirm availability and give you an accurate ETA.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                We also serve Sharjah border communities and can assist in some neighbouring areas
                on request — just ask when you call.
              </p>
              <a href="tel:+971557689003" className="btn btn-primary">
                Call to Confirm Coverage
              </a>
            </div>
            <div className="glass-card rounded-2xl p-8 text-center">
              <div className="text-5xl font-extrabold text-brand-600 mb-2">30 min</div>
              <p className="text-gray-700 font-semibold mb-4">Average Response Time Across Dubai</p>
              <p className="text-gray-500 text-sm">
                Measured from your call to technician arrival. Central areas are often faster.
                All response times guaranteed — if we are delayed, we tell you immediately.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-brand-600 to-brand-800 text-white">
        <div className="container-premium text-center">
          <h2 className="text-3xl font-bold mb-4">Need a Locksmith in Dubai Right Now?</h2>
          <p className="text-brand-100 mb-8 max-w-xl mx-auto">
            We answer calls 24 hours a day. Tell us where you are and we will get someone to you
            as fast as possible.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+971557689003" className="btn bg-white text-brand-700 hover:bg-brand-50 font-bold px-8 py-3 rounded-xl">
              Call +971 55 768 9003
            </a>
            <a href="https://wa.me/971557689003" className="btn btn-whatsapp">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

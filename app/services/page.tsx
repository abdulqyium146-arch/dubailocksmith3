import { Metadata } from 'next';
import Link from 'next/link';
import { services } from '@/content/services';
import { SERVICES_CATEGORIES } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Locksmith Services Dubai | All Services | Locksmith In Dubai',
  description:
    'Complete locksmith services in Dubai: emergency, residential, commercial, car locksmith, smart locks, safe opening. 24/7 availability. Licensed & insured.',
  keywords: [
    'locksmith services Dubai',
    'emergency locksmith Dubai',
    'residential locksmith Dubai',
    'commercial locksmith Dubai',
    'car locksmith Dubai',
    'smart lock installation Dubai',
    'safe opening Dubai',
    'key duplication Dubai',
  ],
  alternates: { canonical: 'https://dubailocksmiths.com/services' },
  openGraph: {
    title: 'Locksmith Services Dubai | Complete Locksmith Solutions',
    description: 'Every locksmith service you need, available 24/7 across all Dubai areas.',
    url: 'https://dubailocksmiths.com/services',
    siteName: 'Locksmith In Dubai',
    type: 'website',
  },
};

const categoryIcons: Record<string, string> = {
  emergency: '🚨',
  lockout: '🔓',
  residential: '🏠',
  commercial: '🏢',
  automotive: '🚗',
  locks: '🔒',
  keys: '🔑',
  smart: '📱',
  safe: '🛡️',
  security: '🔐',
};

export default function ServicesPage() {
  const groupedServices = SERVICES_CATEGORIES.map((cat) => ({
    ...cat,
    serviceItems: cat.services
      .map((slug) => services.find((s) => s.slug === slug))
      .filter(Boolean) as typeof services,
  })).filter((cat) => cat.serviceItems.length > 0);

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
            <li className="text-gray-900 font-medium">Services</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-brand-900 to-gray-900 text-white section-padding">
        <div className="container-premium text-center">
          <p className="text-sm font-semibold text-brand-400 uppercase tracking-widest mb-4">
            What We Do
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Complete Locksmith Services<br />
            <span className="text-gradient">Across All of Dubai</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-8">
            From midnight emergencies to planned security upgrades, our licensed technicians handle
            every lock and key need — 24 hours a day, 7 days a week, with no hidden fees.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+971557689003" className="btn btn-emergency">
              Emergency? Call Now
            </a>
            <a href="https://wa.me/971557689003" className="btn btn-whatsapp">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* All services by category */}
      <section className="section-padding">
        <div className="container-premium">
          <div className="space-y-16">
            {groupedServices.map((cat) => (
              <div key={cat.id}>
                <div className="flex items-center gap-3 mb-8">
                  <span className="text-2xl" aria-hidden="true">
                    {categoryIcons[cat.id] ?? '🔒'}
                  </span>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{cat.label}</h2>
                    <p className="text-gray-600 text-sm mt-0.5">{cat.description}</p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {cat.serviceItems.map((service) => (
                    <Link
                      key={service.id}
                      href={`/services/${service.slug}`}
                      className="glass-card rounded-2xl p-6 group hover:border-brand-300 hover:shadow-md transition-all duration-200"
                    >
                      <h3 className="font-bold text-gray-900 group-hover:text-brand-600 transition-colors mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                        {service.shortDescription}
                      </p>
                      <div className="flex items-center justify-between">
                        {service.price && (
                          <span className="text-xs font-semibold text-brand-600 bg-brand-50 px-2 py-1 rounded-full">
                            {service.price}
                          </span>
                        )}
                        <span className="text-brand-600 text-sm font-semibold ml-auto inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                          Learn More
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-brand-600 text-white">
        <div className="container-premium text-center">
          <h2 className="text-3xl font-bold mb-4">Not Sure Which Service You Need?</h2>
          <p className="text-brand-100 mb-8 max-w-xl mx-auto">
            Call or WhatsApp us and describe your situation. We will tell you exactly what is needed
            and give you an honest price before we send anyone out.
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

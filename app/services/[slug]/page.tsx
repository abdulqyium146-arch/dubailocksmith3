import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Script from 'next/script';
import { services } from '@/content/services';
import { BUSINESS, WHATSAPP_URL } from '@/lib/constants';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return { title: 'Service Not Found' };

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `https://dubailocksmiths.com/services/${service.slug}` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `https://dubailocksmiths.com/services/${service.slug}`,
      siteName: 'Locksmith In Dubai',
      type: 'website',
      images: [{ url: `https://dubailocksmiths.com${service.image}`, alt: service.title }],
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) notFound();

  const relatedServices = services
    .filter((s) => s.category === service.category && s.slug !== service.slug)
    .slice(0, 3);

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.description,
    provider: {
      '@type': 'LocalBusiness',
      name: BUSINESS.name,
      telephone: BUSINESS.phone,
      url: BUSINESS.website,
    },
    areaServed: { '@type': 'City', name: 'Dubai', addressCountry: 'AE' },
    ...(service.price && { offers: { '@type': 'Offer', price: service.price, priceCurrency: 'AED' } }),
  };

  const faqSchema =
    service.faqs.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: service.faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: { '@type': 'Answer', text: faq.answer },
          })),
        }
      : null;

  return (
    <div className="min-h-screen bg-white">
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {faqSchema && (
        <Script
          id="faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

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
              <Link href="/services" className="hover:text-brand-600 transition-colors">
                Services
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-900 font-medium truncate max-w-[200px]">{service.title}</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-brand-900 to-gray-900 text-white section-padding">
        <div className="container-premium">
          <div className="max-w-3xl">
            {service.responseTime && (
              <span className="inline-flex items-center gap-2 bg-emergency-500/20 text-emergency-300 border border-emergency-500/30 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
                <span className="w-2 h-2 rounded-full bg-emergency-400 animate-pulse" />
                Response: {service.responseTime}
              </span>
            )}
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              {service.title}
            </h1>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">{service.description}</p>
            <div className="flex flex-wrap gap-4">
              <a href="tel:+971557689003" className="btn btn-emergency">
                Call Now — {BUSINESS.phone}
              </a>
              <a href={WHATSAPP_URL} className="btn btn-whatsapp">
                WhatsApp Us
              </a>
            </div>
            {service.price && (
              <p className="mt-6 text-brand-300 text-sm">
                Starting from <strong className="text-white">{service.price}</strong> · No call-out
                fee · Upfront pricing
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Features + Benefits */}
      <section className="section-padding">
        <div className="container-premium">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Features */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What&apos;s Included</h2>
              <ul className="space-y-3">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Us</h2>
              <ul className="space-y-3">
                {service.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </span>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      {service.process.length > 0 && (
        <section className="section-padding bg-gray-50">
          <div className="container-premium">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
              <p className="text-gray-600 max-w-xl mx-auto">
                Simple, transparent process from first contact to completed job.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {service.process.map((step) => (
                <div key={step.step} className="text-center">
                  <div className="w-14 h-14 rounded-2xl bg-brand-600 text-white text-xl font-bold flex items-center justify-center mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      {service.faqs.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-premium max-w-3xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Common Questions
            </h2>
            <div className="space-y-3">
              {service.faqs.map((faq, i) => (
                <details key={i} className="glass-card rounded-xl overflow-hidden group">
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
      )}

      {/* Coverage note */}
      <section className="section-padding bg-brand-50">
        <div className="container-premium text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Available Across All of Dubai
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            We cover Downtown Dubai, Dubai Marina, Business Bay, JVC, Palm Jumeirah, Al Barsha,
            Deira, Bur Dubai, Mirdif, Dubai Hills, and every other Dubai community — 30-minute
            response guarantee.
          </p>
          <Link href="/areas" className="btn btn-outline">
            View All Coverage Areas
          </Link>
        </div>
      </section>

      {/* Related services */}
      {relatedServices.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-premium">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Services</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {relatedServices.map((s) => (
                <Link
                  key={s.id}
                  href={`/services/${s.slug}`}
                  className="glass-card rounded-2xl p-6 group hover:border-brand-300 transition-all duration-200"
                >
                  <h3 className="font-bold text-gray-900 group-hover:text-brand-600 transition-colors mb-2">
                    {s.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2">{s.shortDescription}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-brand-600 to-brand-800 text-white">
        <div className="container-premium text-center">
          <h2 className="text-3xl font-bold mb-4">Ready? We Can Be There in 30 Minutes.</h2>
          <p className="text-brand-100 mb-8 max-w-xl mx-auto">
            Call or WhatsApp now. Our dispatchers answer immediately, 24 hours a day.
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

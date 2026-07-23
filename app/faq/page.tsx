import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { faqs, faqsByCategory } from '@/content/faq';
import { BUSINESS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Locksmith In Dubai | Full FAQ',
  description:
    'All your locksmith questions answered. Emergency response times, pricing, services, car lockouts, lock changes and more. Honest answers from Dubai\'s trusted locksmith.',
  alternates: { canonical: 'https://dubailocksmiths.com/faq' },
  openGraph: {
    title: 'Locksmith Dubai FAQ | All Your Questions Answered',
    description:
      'Pricing, response times, services and practical locksmith advice — all in one place.',
    url: 'https://dubailocksmiths.com/faq',
    siteName: 'Locksmith In Dubai',
    type: 'website',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

const CATEGORY_META: Record<string, { label: string; description: string }> = {
  general: {
    label: 'General Questions',
    description: 'About our business, qualifications and how we operate.',
  },
  emergency: {
    label: 'Emergency Services',
    description: 'Response times, what to expect and how we handle urgent situations.',
  },
  residential: {
    label: 'Residential',
    description: 'Apartment and villa lock questions for Dubai residents.',
  },
  commercial: {
    label: 'Commercial',
    description: 'Business security, office locks and commercial contracts.',
  },
  automotive: {
    label: 'Automotive',
    description: 'Car keys, car lockouts and vehicle locksmith services.',
  },
  pricing: {
    label: 'Pricing & Payment',
    description: 'How we price our work and what you can expect to pay.',
  },
};

export default function FAQPage() {
  const categories = Object.entries(faqsByCategory) as [string, typeof faqs][];

  return (
    <div className="min-h-screen bg-white">
      <Script
        id="faq-schema"
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
            <li className="text-gray-900 font-medium">FAQ</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-brand-900 to-gray-900 text-white section-padding">
        <div className="container-premium text-center">
          <p className="text-sm font-semibold text-brand-400 uppercase tracking-widest mb-4">
            FAQ
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Straight answers to the questions we hear most often. If you cannot find what you need,
            call us — we are happy to talk it through.
          </p>
        </div>
      </section>

      {/* Category nav */}
      <div className="sticky top-16 z-10 bg-white border-b border-gray-200 shadow-sm">
        <div className="container-premium overflow-x-auto">
          <nav className="flex gap-1 py-3 whitespace-nowrap" aria-label="FAQ categories">
            {categories.map(([cat]) => (
              <a
                key={cat}
                href={`#${cat}`}
                className="px-4 py-2 rounded-lg text-sm font-semibold text-gray-600 hover:text-brand-600 hover:bg-brand-50 transition-colors"
              >
                {CATEGORY_META[cat]?.label ?? cat}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* FAQ sections */}
      <section className="section-padding">
        <div className="container-premium max-w-4xl">
          <div className="space-y-16">
            {categories.map(([cat, items]) => {
              const meta = CATEGORY_META[cat];
              return (
                <div key={cat} id={cat} className="scroll-mt-24">
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      {meta?.label ?? cat}
                    </h2>
                    {meta?.description && (
                      <p className="text-gray-600">{meta.description}</p>
                    )}
                  </div>

                  <div className="space-y-3">
                    {items.map((faq) => (
                      <details
                        key={faq.id}
                        className="glass-card rounded-xl overflow-hidden group"
                      >
                        <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer list-none font-semibold text-gray-900 hover:text-brand-600 transition-colors">
                          <span>{faq.question}</span>
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center text-sm group-open:rotate-45 transition-transform duration-200">
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
              );
            })}
          </div>
        </div>
      </section>

      {/* Still have questions */}
      <section className="section-padding bg-gray-50">
        <div className="container-premium text-center max-w-2xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Still Have Questions?</h2>
          <p className="text-gray-600 mb-8">
            Our technicians are happy to answer anything we have not covered here. Call us directly
            or send a message — no question is too small.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+971557689003" className="btn btn-emergency">
              Call {BUSINESS.phone}
            </a>
            <Link href="/contact" className="btn btn-outline">
              Send a Message
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 — Page Not Found | Locksmith In Dubai',
  description: 'The page you are looking for does not exist. Find the locksmith service you need or call us directly on +971 55 768 9003.',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center section-padding text-center">
      <div className="max-w-2xl mx-auto">
        {/* Icon */}
        <div className="w-24 h-24 rounded-2xl bg-brand-100 text-brand-600 flex items-center justify-center mx-auto mb-8">
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>

        <p className="text-brand-600 font-bold text-lg mb-2">404</p>
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Page Not Found</h1>
        <p className="text-gray-600 text-lg mb-10">
          We could not find the page you were looking for. It may have been moved or the link may
          be incorrect. Here are some places to start:
        </p>

        {/* Helpful links */}
        <div className="grid sm:grid-cols-2 gap-4 mb-10 text-left">
          {[
            {
              title: 'Home',
              desc: 'Back to the main page',
              href: '/',
              icon: '🏠',
            },
            {
              title: 'Our Services',
              desc: 'Full list of locksmith services',
              href: '/services',
              icon: '🔒',
            },
            {
              title: 'Coverage Areas',
              desc: 'Areas we serve across Dubai',
              href: '/areas',
              icon: '📍',
            },
            {
              title: 'Contact Us',
              desc: 'Get in touch or request a quote',
              href: '/contact',
              icon: '✉️',
            },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="glass-card rounded-2xl p-5 group hover:border-brand-300 transition-all duration-200"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{link.icon}</span>
                <div>
                  <p className="font-bold text-gray-900 group-hover:text-brand-600 transition-colors">
                    {link.title}
                  </p>
                  <p className="text-sm text-gray-500">{link.desc}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Emergency CTA */}
        <div className="bg-emergency-600 text-white rounded-2xl p-6">
          <p className="font-bold text-lg mb-2">Need Help Right Now?</p>
          <p className="text-emergency-100 mb-4">
            If you have a lock emergency, do not waste time looking for the right page. Call us
            directly — we answer 24 hours a day.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="tel:+971557689003"
              className="bg-white text-emergency-700 font-bold px-6 py-3 rounded-xl hover:bg-emergency-50 transition-colors"
            >
              Call +971 55 768 9003
            </a>
            <a
              href="https://wa.me/971557689003"
              className="border border-white/40 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/10 transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Lock,
  Phone,
  Mail,
  MapPin,
  Clock,
  Star,
  Shield,
  Facebook,
  Instagram,
  Twitter,
  ExternalLink,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';
import { BUSINESS, SERVICES_CATEGORIES, COVERAGE_AREAS, TRUST_SIGNALS, PAYMENT_METHODS } from '@/lib/constants';
import { cn } from '@/utils/cn';

/* ─────────────────────────────────────────────
   ANIMATION VARIANTS
───────────────────────────────────────────── */
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

/* ─────────────────────────────────────────────
   WHATSAPP ICON (inline SVG)
───────────────────────────────────────────── */
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.849L.083 23.5a.5.5 0 0 0 .617.617l5.651-1.449A11.947 11.947 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.85 0-3.576-.496-5.065-1.363l-.362-.215-3.752.963.979-3.675-.236-.375A9.946 9.946 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
    </svg>
  );
}

/* ─────────────────────────────────────────────
   RATING BADGE
───────────────────────────────────────────── */
function RatingBadge() {
  return (
    <div className="inline-flex items-center gap-3 bg-white/10 border border-white/20 rounded-2xl px-4 py-3">
      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={cn(
              'w-4 h-4',
              i < Math.floor(BUSINESS.rating) ? 'text-gold-400 fill-gold-400' : 'text-gold-400/40'
            )}
          />
        ))}
      </div>
      <div>
        <p className="text-white font-bold text-lg leading-none">{BUSINESS.rating}</p>
        <p className="text-white/60 text-xs mt-0.5">{BUSINESS.reviewCount}+ Reviews</p>
      </div>
      <div className="border-l border-white/20 pl-3">
        <p className="text-white/80 text-xs font-medium">Google</p>
        <p className="text-white/60 text-xs">Verified</p>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   FOOTER SECTION LINKS
───────────────────────────────────────────── */
const TOP_SERVICES = [
  { label: 'Emergency Locksmith', href: '/services/emergency-locksmith' },
  { label: 'Car Lockout Service', href: '/services/car-lockout' },
  { label: 'House Lockout', href: '/services/house-lockout' },
  { label: 'Lock Change & Replacement', href: '/services/lock-change' },
  { label: 'Smart Lock Installation', href: '/services/smart-locks' },
  { label: 'Key Duplication', href: '/services/key-duplication' },
  { label: 'Safe Opening', href: '/services/safe-opening' },
  { label: 'Commercial Locksmith', href: '/services/commercial-locksmith' },
  { label: 'Access Control Systems', href: '/services/access-control-systems' },
  { label: 'Digital Locks', href: '/services/digital-locks' },
];

const COMPANY_LINKS = [
  { label: 'About Us', href: '/about' },
  { label: 'All Services', href: '/services' },
  { label: 'Coverage Areas', href: '/areas' },
  { label: 'Blog & Tips', href: '/blog' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Get a Quote', href: '/contact#quote' },
  { label: 'Emergency Service', href: '/services/emergency-locksmith' },
];

const LEGAL_LINKS = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Cookie Policy', href: '/cookies' },
  { label: 'Sitemap', href: '/sitemap.xml' },
];

/* ─────────────────────────────────────────────
   FOOTER COMPONENT
───────────────────────────────────────────── */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 relative overflow-hidden" role="contentinfo">
      {/* Background decoration */}
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-royal-900/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-navy-700/30 rounded-full blur-3xl pointer-events-none" />

      {/* ── Emergency Banner ── */}
      <div className="emergency-banner relative z-10">
        <div className="container-premium py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center shrink-0 animate-emergency-pulse">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-white font-bold text-base sm:text-lg leading-tight">
                  Need Emergency Locksmith Help?
                </p>
                <p className="text-red-100 text-sm">
                  Available 24/7 · 30-minute response across Dubai
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <a
                href={`tel:${BUSINESS.phoneRaw}`}
                className="flex items-center gap-2 bg-white text-red-600 hover:bg-red-50 transition-colors font-bold px-5 py-2.5 rounded-full text-sm shadow-lg"
              >
                <Phone className="w-4 h-4" />
                Call Now: {BUSINESS.phone}
              </a>
              <a
                href={`${BUSINESS.whatsappUrl}?text=${encodeURIComponent('Emergency! I need a locksmith in Dubai right now.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-500 hover:bg-green-400 transition-colors text-white font-bold px-5 py-2.5 rounded-full text-sm shadow-lg"
              >
                <WhatsAppIcon className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main Footer Content ── */}
      <div className="container-premium py-16 pb-24 md:pb-16 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >

          {/* ── Column 1: Brand ── */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            {/* Logo */}
            <Link href="/" className="inline-flex items-center gap-2.5 group mb-4">
              <div className="w-11 h-11 bg-gradient-to-br from-royal-700 to-royal-900 rounded-xl flex items-center justify-center shadow-lg shadow-royal-900/30">
                <Lock className="w-5 h-5 text-white" />
              </div>
              <div className="leading-tight">
                <span className="block text-white font-bold text-base leading-none">Locksmith</span>
                <span className="block text-royal-400 font-semibold text-sm leading-none mt-0.5">In Dubai</span>
              </div>
            </Link>

            {/* Tagline */}
            <p className="text-white/60 text-sm leading-relaxed mb-5 max-w-xs">
              Dubai's most trusted 24/7 locksmith. Professional, fast, and reliable service for residential, commercial, and automotive needs.
            </p>

            {/* Rating Badge */}
            <div className="mb-6">
              <RatingBadge />
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href={BUSINESS.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Locksmith In Dubai on Facebook"
                className="min-w-[44px] min-h-[44px] bg-white/10 hover:bg-royal-600 border border-white/10 hover:border-royal-600 rounded-lg flex items-center justify-center text-white/60 hover:text-white transition-all duration-200"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={BUSINESS.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Locksmith In Dubai on Instagram"
                className="min-w-[44px] min-h-[44px] bg-white/10 hover:bg-pink-600 border border-white/10 hover:border-pink-600 rounded-lg flex items-center justify-center text-white/60 hover:text-white transition-all duration-200"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={BUSINESS.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Locksmith In Dubai on Twitter"
                className="min-w-[44px] min-h-[44px] bg-white/10 hover:bg-sky-500 border border-white/10 hover:border-sky-500 rounded-lg flex items-center justify-center text-white/60 hover:text-white transition-all duration-200"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href={BUSINESS.social.google}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Locksmith In Dubai on Google Maps"
                className="min-w-[44px] min-h-[44px] bg-white/10 hover:bg-red-500 border border-white/10 hover:border-red-500 rounded-lg flex items-center justify-center text-white/60 hover:text-white transition-all duration-200"
              >
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* ── Column 2: Services ── */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white font-bold text-base mb-5 flex items-center gap-2">
              <Lock className="w-4 h-4 text-royal-400" />
              Our Services
            </h3>
            <ul className="space-y-2.5">
              {TOP_SERVICES.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="flex items-center gap-2 text-white/55 hover:text-white text-sm transition-colors group"
                  >
                    <ArrowRight className="w-3 h-3 text-royal-500 shrink-0 group-hover:translate-x-0.5 transition-transform" />
                    {service.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="flex items-center gap-2 text-royal-400 hover:text-royal-300 text-sm font-semibold transition-colors mt-2"
                >
                  View All 35 Services
                  <ExternalLink className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* ── Column 3: Areas ── */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white font-bold text-base mb-5 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-royal-400" />
              Areas We Cover
            </h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2.5">
              {COVERAGE_AREAS.map((area) => (
                <Link
                  key={area.slug}
                  href={`/areas/${area.slug}`}
                  className="text-white/55 hover:text-white text-sm transition-colors truncate"
                >
                  {area.name}
                </Link>
              ))}
            </div>
            <Link
              href="/areas"
              className="inline-flex items-center gap-2 text-royal-400 hover:text-royal-300 text-sm font-semibold transition-colors mt-4"
            >
              All Areas
              <ExternalLink className="w-3 h-3" />
            </Link>

            {/* Trust Signals */}
            <div className="mt-7">
              <h4 className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-3">
                Why Choose Us
              </h4>
              <ul className="space-y-2">
                {TRUST_SIGNALS.slice(0, 4).map((signal) => (
                  <li key={signal} className="flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-white/55 text-xs leading-relaxed">{signal}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* ── Column 4: Contact ── */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white font-bold text-base mb-5 flex items-center gap-2">
              <Phone className="w-4 h-4 text-royal-400" />
              Contact & Company
            </h3>

            {/* Contact details */}
            <ul className="space-y-4 mb-7">
              <li>
                <a
                  href={`tel:${BUSINESS.phoneRaw}`}
                  className="flex items-start gap-3 group"
                >
                  <div className="w-8 h-8 bg-royal-800/50 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-royal-700 transition-colors">
                    <Phone className="w-3.5 h-3.5 text-royal-400" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs mb-0.5">Phone / Emergency</p>
                    <p className="text-white font-bold text-sm group-hover:text-royal-300 transition-colors">
                      {BUSINESS.phone}
                    </p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href={`${BUSINESS.whatsappUrl}?text=${encodeURIComponent('Hello, I need a locksmith in Dubai')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 group"
                >
                  <div className="w-8 h-8 bg-green-900/50 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-green-800 transition-colors">
                    <WhatsAppIcon className="w-3.5 h-3.5 text-green-400" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs mb-0.5">WhatsApp</p>
                    <p className="text-white font-bold text-sm group-hover:text-green-400 transition-colors">
                      Chat with Us
                    </p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="flex items-start gap-3 group"
                >
                  <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-white/10 transition-colors">
                    <Mail className="w-3.5 h-3.5 text-white/50" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs mb-0.5">Email</p>
                    <p className="text-white/80 text-sm group-hover:text-white transition-colors break-all">
                      {BUSINESS.email}
                    </p>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="w-3.5 h-3.5 text-white/50" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs mb-0.5">Location</p>
                    <p className="text-white/80 text-sm">
                      {BUSINESS.address.street}, {BUSINESS.address.city}, UAE
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center shrink-0">
                    <Clock className="w-3.5 h-3.5 text-white/50" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs mb-0.5">Hours</p>
                    <p className="text-white/80 text-sm font-semibold">24 Hours / 7 Days</p>
                  </div>
                </div>
              </li>
            </ul>

            {/* Company Links */}
            <div>
              <h4 className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-3">
                Company
              </h4>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                {COMPANY_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-white/55 hover:text-white text-xs transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>

        </motion.div>

        {/* ── Payment & Trust Badges ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Trust signals row */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
              {[
                { icon: <Shield className="w-4 h-4 text-emerald-400" />, text: 'Licensed & Insured' },
                { icon: <CheckCircle className="w-4 h-4 text-emerald-400" />, text: 'DPS Verified' },
                { icon: <Clock className="w-4 h-4 text-royal-400" />, text: '30-Min Response' },
                { icon: <Star className="w-4 h-4 text-gold-400 fill-gold-400" />, text: '4.8 Google Rating' },
              ].map(({ icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-white/60 text-xs">
                  {icon}
                  <span>{text}</span>
                </div>
              ))}
            </div>

            {/* Payment methods */}
            <div className="flex items-center gap-2">
              <span className="text-white/30 text-xs mr-1">We accept:</span>
              <div className="flex flex-wrap gap-1.5">
                {PAYMENT_METHODS.map((method) => (
                  <span
                    key={method}
                    className="px-2.5 py-1 bg-white/8 border border-white/10 rounded-md text-white/50 text-xs font-medium"
                  >
                    {method}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Copyright & Legal ── */}
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/35 text-xs text-center sm:text-left">
            © {currentYear} {BUSINESS.name}. All rights reserved.
            <span className="hidden sm:inline"> · Al Bada, Dubai, UAE</span>
          </p>

          <div className="flex items-center gap-4">
            {LEGAL_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/35 hover:text-white/70 text-xs transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Phone, Shield, DollarSign, CheckCircle } from 'lucide-react';
import { cn } from '@/utils/cn';
import { BUSINESS } from '@/lib/constants';

/* ─── WhatsApp Icon ─── */
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.849L.083 23.5a.5.5 0 0 0 .617.617l5.651-1.449A11.947 11.947 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.85 0-3.576-.496-5.065-1.363l-.362-.215-3.752.963.979-3.675-.236-.375A9.946 9.946 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
    </svg>
  );
}

/* ─── Trust signals ─── */
const trustSignals = [
  { icon: Shield, text: 'Licensed & Insured' },
  { icon: DollarSign, text: 'No Hidden Fees' },
  { icon: CheckCircle, text: '1-Year Warranty' },
];

/* ─── Pulsing glow button wrapper ─── */
function GlowButton({
  children,
  className,
  glowColor = 'rgba(37, 99, 235, 0.5)',
}: {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}) {
  return (
    <motion.div
      className={cn('relative group', className)}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
    >
      {/* Pulsing glow ring */}
      <motion.div
        className="absolute inset-0 rounded-full pointer-events-none"
        animate={{
          boxShadow: [
            `0 0 0 0 ${glowColor}`,
            `0 0 0 12px rgba(0,0,0,0)`,
            `0 0 0 0 ${glowColor}`,
          ],
        }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeOut' }}
      />
      {children}
    </motion.div>
  );
}

/* ─── Main Component ─── */
export function CTASection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      ref={ref}
      className="relative py-20 md:py-28 overflow-hidden bg-gradient-hero"
      aria-label="Call to action"
    >
      {/* Animated background */}
      <div className="absolute inset-0 bg-animated-gradient opacity-70 pointer-events-none" />

      {/* Mesh blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-royal-700/20 rounded-full blur-3xl"
        />
        <div className="absolute top-0 right-0 w-72 h-72 bg-royal-600/15 rounded-full blur-3xl -translate-y-1/3 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-navy-600/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
        {/* Grid overlay */}
        <div className="absolute inset-0 line-grid opacity-20" />
      </div>

      {/* Decorative rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="w-[800px] h-[800px] rounded-full border border-dashed border-white/4"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute w-[500px] h-[500px] rounded-full border border-white/6"
        />
      </div>

      <div className="relative z-10 container-premium">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto"
        >
          {/* Emergency pulse badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.5, delay: 0.2, type: 'spring', stiffness: 200 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-red-500/20 border border-red-400/30 text-red-300 text-sm font-bold mb-7 tracking-wide"
          >
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.2, repeat: Infinity }}
              className="w-2.5 h-2.5 bg-red-400 rounded-full"
            />
            Standing By 24/7 — Ready to Help
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-5"
          >
            Need a Locksmith in{' '}
            <span className="text-gradient">Dubai</span>
            {' '}Right Now?
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-white/60 text-xl mb-10 leading-relaxed"
          >
            Our team is standing by 24/7.{' '}
            <span className="text-white/85 font-semibold">Average response time: 30 minutes.</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
          >
            {/* Call button with glow */}
            <GlowButton glowColor="rgba(239, 68, 68, 0.5)">
              <a
                href={`tel:${BUSINESS.phoneRaw}`}
                className="flex items-center justify-center gap-3 px-8 py-4 md:py-5 rounded-full bg-gradient-to-r from-red-600 to-red-500 text-white font-bold text-lg shadow-2xl shadow-red-900/40 hover:from-red-500 hover:to-red-400 transition-all duration-200 w-full sm:w-auto min-w-[240px]"
              >
                <Phone className="w-6 h-6" />
                Call {BUSINESS.phone}
              </a>
            </GlowButton>

            {/* WhatsApp button with glow */}
            <GlowButton glowColor="rgba(34, 197, 94, 0.5)">
              <a
                href={`${BUSINESS.whatsappUrl}?text=${encodeURIComponent('Hello, I need a locksmith in Dubai right now.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-8 py-4 md:py-5 rounded-full bg-gradient-to-r from-green-600 to-green-500 text-white font-bold text-lg shadow-2xl shadow-green-900/40 hover:from-green-500 hover:to-green-400 transition-all duration-200 w-full sm:w-auto min-w-[240px]"
              >
                <WhatsAppIcon className="w-6 h-6" />
                WhatsApp Us
              </a>
            </GlowButton>
          </motion.div>

          {/* Trust signals */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-4 md:gap-8"
          >
            {trustSignals.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-white/50">
                <Icon className="w-4 h-4 text-emerald-400/70" />
                <span className="text-sm font-medium">{text}</span>
              </div>
            ))}
          </motion.div>

          {/* Phone number display */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 pt-8 border-t border-white/10"
          >
            <p className="text-white/30 text-sm">
              Prefer to call directly?{' '}
              <a
                href={`tel:${BUSINESS.phoneRaw}`}
                className="text-white/60 font-bold hover:text-white transition-colors"
              >
                {BUSINESS.phone}
              </a>
              {' '}— answered 24/7
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default CTASection;

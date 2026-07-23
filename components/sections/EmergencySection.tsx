'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Phone, Home, Car, Building2, Key, Unlock, Shield } from 'lucide-react';
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

/* ─── Emergency services list ─── */
const emergencyServices = [
  { icon: Home, label: 'House Lockout', color: 'bg-red-500/20 text-red-300' },
  { icon: Car, label: 'Car Lockout', color: 'bg-orange-500/20 text-orange-300' },
  { icon: Building2, label: 'Office Lockout', color: 'bg-red-400/20 text-red-200' },
  { icon: Key, label: 'Broken Key', color: 'bg-orange-400/20 text-orange-200' },
  { icon: Unlock, label: 'Lost Keys', color: 'bg-red-500/20 text-red-300' },
  { icon: Shield, label: 'Safe Opening', color: 'bg-orange-500/20 text-orange-300' },
];

/* ─── Pulsing Ring Visual ─── */
function PulsingRing() {
  return (
    <div className="relative flex items-center justify-center w-48 h-48 mx-auto">
      {/* Outermost pulse ring */}
      <motion.div
        animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0, 0.4] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeOut' }}
        className="absolute inset-0 rounded-full border-2 border-red-400/40"
      />
      {/* Mid pulse ring */}
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeOut', delay: 0.4 }}
        className="absolute inset-4 rounded-full border-2 border-red-400/50"
      />
      {/* Inner ring */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.6, 0.2, 0.6] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeOut', delay: 0.8 }}
        className="absolute inset-8 rounded-full border-2 border-orange-400/60"
      />
      {/* Center */}
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        className="relative w-24 h-24 bg-gradient-to-br from-red-600 to-orange-500 rounded-full flex items-center justify-center shadow-2xl shadow-red-900/60"
      >
        <Phone className="w-10 h-10 text-white" />
      </motion.div>
    </div>
  );
}

/* ─── Main Component ─── */
export function EmergencySection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-gradient-emergency py-16 md:py-24"
      aria-label="Emergency locksmith services"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, #fff, #fff 1px, transparent 1px, transparent 12px)',
          }}
        />
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-800/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-800/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />
      </div>

      <div className="relative z-10 container-premium">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* ── Left: Content ── */}
          <div className="space-y-6 md:space-y-8">
            {/* Emergency label */}
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/25 text-white text-sm font-bold tracking-wider uppercase">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                Emergency Services
              </span>
            </motion.div>

            {/* Headings */}
            <motion.div variants={itemVariants}>
              <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-white leading-none tracking-tight">
                EMERGENCY?
              </h2>
              <p className="text-2xl md:text-3xl font-bold text-white/90 mt-3">
                Locked Out? We're Here 24/7
              </p>
            </motion.div>

            {/* Emergency services grid */}
            <motion.div variants={itemVariants}>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {emergencyServices.map(({ icon: Icon, label, color }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-white/10 border border-white/15 backdrop-blur-sm"
                  >
                    <div className={cn('w-8 h-8 rounded-lg flex items-center justify-center shrink-0', color)}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-white text-sm font-medium">{label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Response time */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-black/20 border border-white/15 backdrop-blur-sm w-fit"
            >
              <div className="w-10 h-10 bg-white/15 rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <circle cx="12" cy="12" r="10" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
                </svg>
              </div>
              <div>
                <p className="text-white font-bold text-base leading-tight">Average Response: 30 Minutes</p>
                <p className="text-white/60 text-xs">Across all Dubai areas</p>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3">
              <motion.a
                href={`tel:${BUSINESS.phoneRaw}`}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-red-600 font-bold text-base shadow-xl shadow-red-900/30 hover:bg-red-50 transition-colors flex-1 sm:flex-none"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </motion.a>
              <motion.a
                href={`${BUSINESS.whatsappUrl}?text=${encodeURIComponent('Emergency! I need a locksmith in Dubai right away.')}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-green-500 text-white font-bold text-base shadow-xl shadow-green-900/30 hover:bg-green-400 transition-colors flex-1 sm:flex-none"
              >
                <WhatsAppIcon className="w-5 h-5" />
                WhatsApp
              </motion.a>
            </motion.div>
          </div>

          {/* ── Right: Pulsing visual ── */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center py-8"
          >
            <div className="space-y-8 text-center">
              <PulsingRing />
              <div className="space-y-2">
                <p className="text-white font-bold text-xl">
                  {BUSINESS.phone}
                </p>
                <p className="text-white/60 text-sm">
                  Pick up in seconds · Dispatch immediately
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3 max-w-xs mx-auto">
                {[
                  { value: '24/7', label: 'Availability' },
                  { value: '30 min', label: 'Avg Response' },
                  { value: '5000+', label: 'Jobs Done' },
                  { value: '4.8★', label: 'Rating' },
                ].map(({ value, label }) => (
                  <div
                    key={label}
                    className="px-3 py-3 rounded-xl bg-black/20 border border-white/15 backdrop-blur-sm"
                  >
                    <p className="text-white font-black text-xl leading-none">{value}</p>
                    <p className="text-white/50 text-xs mt-1">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default EmergencySection;

'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Zap,
  ShieldCheck,
  DollarSign,
  Wrench,
  Award,
  Clock,
  Star,
  CheckCircle,
} from 'lucide-react';
import { cn } from '@/utils/cn';

/* ─── Differentiator items ─── */
const differentiators = [
  {
    icon: Zap,
    title: 'Fast Response',
    description: 'On-site in 30 minutes or less across all of Dubai, day or night.',
    color: 'text-orange-500',
    bg: 'bg-orange-500/10',
    border: 'border-orange-500/20',
  },
  {
    icon: ShieldCheck,
    title: 'Licensed & Insured',
    description: 'Fully certified, government-licensed technicians operating under full insurance cover.',
    color: 'text-royal-600',
    bg: 'bg-royal-600/10',
    border: 'border-royal-600/20',
  },
  {
    icon: DollarSign,
    title: 'Transparent Pricing',
    description: 'No hidden fees, ever. Upfront quotes before we start any work.',
    color: 'text-emerald-600',
    bg: 'bg-emerald-600/10',
    border: 'border-emerald-600/20',
  },
  {
    icon: Wrench,
    title: 'Latest Technology',
    description: 'Advanced professional tools for all lock types, brands, and modern smart systems.',
    color: 'text-cyan-500',
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/20',
  },
  {
    icon: Award,
    title: '10+ Years Experience',
    description: 'Thousands of successfully completed jobs across residential, commercial and automotive.',
    color: 'text-gold-600',
    bg: 'bg-gold-500/10',
    border: 'border-gold-500/20',
  },
  {
    icon: Clock,
    title: '24/7 Availability',
    description: 'Day, night, weekends, and public holidays — we never close when you need us.',
    color: 'text-royal-500',
    bg: 'bg-royal-500/10',
    border: 'border-royal-500/20',
  },
];

/* ─── Trust badges ─── */
const certBadges = [
  'Dubai Municipality Compliant',
  'DPS Verified Technicians',
  'UAE Trade Licensed',
  'Fully Insured',
  '1-Year Work Warranty',
  'No Call-Out Fee',
];

/* ─── Floating Feature Cards (right side visual) ─── */
function RightVisual() {
  const cards = [
    { icon: Star, value: '4.8/5.0', label: 'Google Rating', color: 'text-gold-500', bg: 'bg-gold-500/10' },
    { icon: Zap, value: '30 Min', label: 'Average Response', color: 'text-orange-500', bg: 'bg-orange-500/10' },
    { icon: CheckCircle, value: '5000+', label: 'Jobs Completed', color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
    { icon: ShieldCheck, value: '100%', label: 'Satisfaction Rate', color: 'text-royal-500', bg: 'bg-royal-500/10' },
  ];

  const floatDelays = [0, 1.5, 0.8, 2.1];

  return (
    <div className="relative h-[420px] md:h-[480px] flex items-center justify-center">
      {/* Central decorative circle */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="w-64 h-64 rounded-full border-2 border-dashed border-royal-200 dark:border-royal-800/40"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
          className="absolute w-48 h-48 rounded-full border border-royal-300/30 dark:border-royal-700/30"
        />
        {/* Center lock icon */}
        <div className="absolute w-20 h-20 bg-gradient-to-br from-royal-700 to-royal-900 rounded-2xl flex items-center justify-center shadow-xl shadow-royal-900/20">
          <ShieldCheck className="w-10 h-10 text-white" />
        </div>
      </div>

      {/* Floating cards */}
      {cards.map((card, i) => {
        const positions = [
          'top-4 right-4 md:top-8 md:right-0',
          'bottom-4 right-4 md:bottom-8 md:right-0',
          'top-4 left-4 md:top-8 md:left-0',
          'bottom-4 left-4 md:bottom-8 md:left-0',
        ];
        const Icon = card.icon;

        return (
          <motion.div
            key={card.label}
            className={cn('absolute', positions[i])}
            animate={{
              y: i % 2 === 0 ? [0, -8, 0] : [0, 8, 0],
            }}
            transition={{
              duration: 5 + i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: floatDelays[i],
            }}
          >
            <div className="glass-card px-4 py-3 rounded-xl shadow-lg min-w-[130px]">
              <div className="flex items-center gap-2.5">
                <div className={cn('w-9 h-9 rounded-lg flex items-center justify-center shrink-0', card.bg)}>
                  <Icon className={cn('w-4.5 h-4.5', card.color)} />
                </div>
                <div>
                  <p className="text-gray-900 dark:text-white font-black text-base leading-none">{card.value}</p>
                  <p className="text-gray-400 dark:text-gray-500 text-xs mt-0.5">{card.label}</p>
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

/* ─── Main Component ─── */
export function WhyChooseUs() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section
      ref={ref}
      className="relative section-padding bg-white dark:bg-navy-900 overflow-hidden"
      aria-label="Why choose us"
    >
      {/* Background decoration */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-royal-50/50 dark:bg-royal-950/20 pointer-events-none" />
      <div className="absolute inset-0 line-grid opacity-30 dark:opacity-20 pointer-events-none" />

      <div className="relative z-10 container-premium">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Left: Content ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-royal-50 dark:bg-royal-900/30 border border-royal-200 dark:border-royal-800/50 text-royal-700 dark:text-royal-400 text-sm font-semibold">
                <ShieldCheck className="w-4 h-4" />
                Our Promise to You
              </span>
            </motion.div>

            {/* Heading */}
            <motion.div variants={itemVariants} className="mb-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight leading-tight">
                Why Dubai{' '}
                <span className="text-gradient">Trusts Us</span>
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-lg mt-4 max-w-lg">
                With over a decade of locksmith experience in Dubai, we've built our reputation on reliability, honesty, and quality workmanship.
              </p>
            </motion.div>

            {/* Differentiators grid */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {differentiators.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    variants={itemVariants}
                    className={cn(
                      'flex items-start gap-3 p-4 rounded-xl border transition-all duration-300',
                      'bg-white dark:bg-navy-800 hover:shadow-md',
                      item.border
                    )}
                  >
                    <div className={cn('w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5', item.bg)}>
                      <Icon className={cn('w-4.5 h-4.5', item.color)} />
                    </div>
                    <div>
                      <h3 className="text-gray-900 dark:text-white font-bold text-sm mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Certification badges */}
            <motion.div variants={itemVariants} className="mt-8">
              <p className="text-gray-400 dark:text-gray-500 text-xs font-semibold uppercase tracking-widest mb-3">
                Certifications & Guarantees
              </p>
              <div className="flex flex-wrap gap-2">
                {certBadges.map((badge) => (
                  <span
                    key={badge}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-300 text-xs font-medium border border-gray-200 dark:border-white/8"
                  >
                    <CheckCircle className="w-3 h-3 text-emerald-500" />
                    {badge}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* ── Right: Visual ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block"
          >
            <RightVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;

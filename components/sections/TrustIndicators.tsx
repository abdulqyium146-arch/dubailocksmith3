'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Star,
  MessageSquare,
  Clock,
  Zap,
  ShieldCheck,
  DollarSign,
  Award,
  MapPin,
} from 'lucide-react';
import { cn } from '@/utils/cn';

/* ─── Trust indicator data ─── */
const trustItems = [
  {
    icon: Star,
    value: '4.8',
    suffix: '/5.0',
    label: 'Google Rating',
    description: 'Consistently top-rated by verified customers across Dubai',
    color: 'text-gold-500',
    bg: 'bg-gold-500/10',
    border: 'border-gold-500/20',
    isCount: true,
    countTarget: 4.8,
    decimals: 1,
  },
  {
    icon: MessageSquare,
    value: '305',
    suffix: '+',
    label: 'Verified Reviews',
    description: 'Real reviews from real Dubai customers on Google',
    color: 'text-royal-600',
    bg: 'bg-royal-600/10',
    border: 'border-royal-600/20',
    isCount: true,
    countTarget: 305,
    decimals: 0,
  },
  {
    icon: Clock,
    value: '24/7',
    suffix: '',
    label: 'Availability',
    description: 'Around the clock, every day of the year including holidays',
    color: 'text-emerald-600',
    bg: 'bg-emerald-600/10',
    border: 'border-emerald-600/20',
    isCount: false,
    countTarget: 0,
    decimals: 0,
  },
  {
    icon: Zap,
    value: '30',
    suffix: ' Min',
    label: 'Response Time',
    description: 'Average time from your call to technician on-site in Dubai',
    color: 'text-orange-500',
    bg: 'bg-orange-500/10',
    border: 'border-orange-500/20',
    isCount: true,
    countTarget: 30,
    decimals: 0,
  },
  {
    icon: ShieldCheck,
    value: '100%',
    suffix: '',
    label: 'Licensed & Insured',
    description: 'Fully certified technicians, government-licensed in Dubai',
    color: 'text-royal-700',
    bg: 'bg-royal-700/10',
    border: 'border-royal-700/20',
    isCount: false,
    countTarget: 0,
    decimals: 0,
  },
  {
    icon: DollarSign,
    value: 'Zero',
    suffix: '',
    label: 'Hidden Fees',
    description: 'Transparent upfront pricing — what we quote is what you pay',
    color: 'text-emerald-600',
    bg: 'bg-emerald-600/10',
    border: 'border-emerald-600/20',
    isCount: false,
    countTarget: 0,
    decimals: 0,
  },
  {
    icon: Award,
    value: '10',
    suffix: '+',
    label: 'Years Experience',
    description: 'Over a decade serving Dubai homes, businesses and vehicles',
    color: 'text-gold-600',
    bg: 'bg-gold-600/10',
    border: 'border-gold-600/20',
    isCount: true,
    countTarget: 10,
    decimals: 0,
  },
  {
    icon: MapPin,
    value: 'All',
    suffix: '',
    label: 'Areas of Dubai',
    description: 'From Palm Jumeirah to Deira, we cover every corner of Dubai',
    color: 'text-royal-600',
    bg: 'bg-royal-600/10',
    border: 'border-royal-600/20',
    isCount: false,
    countTarget: 0,
    decimals: 0,
  },
];

/* ─── Animated Counter ─── */
function AnimatedCounter({
  target,
  decimals = 0,
  suffix = '',
  inView,
}: {
  target: number;
  decimals?: number;
  suffix?: string;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let startTime: number | null = null;
    const duration = 1800;

    function step(timestamp: number) {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(parseFloat((eased * target).toFixed(decimals)));
      if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  }, [inView, target, decimals]);

  return (
    <span>
      {decimals > 0 ? count.toFixed(decimals) : Math.round(count)}
      {suffix}
    </span>
  );
}

/* ─── Single Trust Card ─── */
function TrustCard({
  item,
  index,
  inView,
}: {
  item: (typeof trustItems)[0];
  index: number;
  inView: boolean;
}) {
  const Icon = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'group relative flex flex-col gap-3 p-5 md:p-6 rounded-2xl border transition-all duration-300',
        'bg-white dark:bg-navy-800 hover:shadow-lg',
        item.border,
        'dark:border-white/8'
      )}
    >
      {/* Hover glow */}
      <div className={cn('absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300', item.bg)} />

      <div className="relative z-10 flex items-start gap-3">
        {/* Icon */}
        <div className={cn('w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110', item.bg)}>
          <Icon className={cn('w-5 h-5', item.color)} />
        </div>

        {/* Content */}
        <div className="min-w-0">
          <div className="flex items-baseline gap-0.5">
            <span className={cn('text-2xl font-black', item.color)}>
              {item.isCount ? (
                <AnimatedCounter
                  target={item.countTarget}
                  decimals={item.decimals}
                  suffix={item.suffix}
                  inView={inView}
                />
              ) : (
                <span>{item.value}{item.suffix}</span>
              )}
            </span>
          </div>
          <p className="text-gray-900 dark:text-white font-bold text-sm mt-0.5">{item.label}</p>
        </div>
      </div>

      {/* Description */}
      <p className="relative z-10 text-gray-500 dark:text-gray-400 text-xs leading-relaxed">
        {item.description}
      </p>

      {/* Checkmark */}
      <div className="relative z-10 flex items-center gap-1.5">
        <svg className={cn('w-3.5 h-3.5', item.color)} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
        <span className="text-xs text-gray-400 dark:text-gray-500 font-medium">Verified</span>
      </div>
    </motion.div>
  );
}

/* ─── Main Component ─── */
export function TrustIndicators() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section
      ref={ref}
      className="relative section-padding bg-white dark:bg-navy-900"
      aria-label="Trust indicators"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 dot-grid opacity-50 dark:opacity-30 pointer-events-none" />

      <div className="relative z-10 container-premium">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-royal-50 dark:bg-royal-900/30 border border-royal-200 dark:border-royal-800/50 text-royal-700 dark:text-royal-400 text-sm font-semibold mb-4">
            <ShieldCheck className="w-4 h-4" />
            Why We're Dubai's Most Trusted
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Quality You Can <span className="text-gradient">Count On</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg mt-3 max-w-2xl mx-auto">
            Every number here reflects a real commitment to our customers across Dubai
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {trustItems.map((item, index) => (
            <TrustCard key={item.label} item={item} index={index} inView={inView} />
          ))}
        </div>

        {/* Divider line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 divider-glow"
        />
      </div>
    </section>
  );
}

export default TrustIndicators;

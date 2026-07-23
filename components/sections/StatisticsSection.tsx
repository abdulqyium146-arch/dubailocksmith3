'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Star, Zap, Award, CheckCircle } from 'lucide-react';
import { cn } from '@/utils/cn';

/* ─── Stats data ─── */
const stats = [
  {
    icon: Users,
    prefix: '',
    value: 305,
    suffix: '+',
    label: 'Happy Customers',
    description: 'Verified Google reviews from satisfied clients',
    decimals: 0,
    color: 'text-royal-400',
    iconBg: 'bg-royal-500/15',
  },
  {
    icon: Star,
    prefix: '',
    value: 4.8,
    suffix: '★',
    label: 'Google Rating',
    description: 'Average star rating across all customer reviews',
    decimals: 1,
    color: 'text-gold-400',
    iconBg: 'bg-gold-500/15',
  },
  {
    icon: Zap,
    prefix: '',
    value: 30,
    suffix: ' Min',
    label: 'Avg Response',
    description: 'Average time from call to technician on-site',
    decimals: 0,
    color: 'text-emerald-400',
    iconBg: 'bg-emerald-500/15',
  },
  {
    icon: Award,
    prefix: '',
    value: 10,
    suffix: '+',
    label: 'Years Experience',
    description: 'Over a decade serving Dubai residents and businesses',
    decimals: 0,
    color: 'text-orange-400',
    iconBg: 'bg-orange-500/15',
  },
];

/* ─── Animated Counter ─── */
function Counter({
  target,
  decimals,
  prefix,
  suffix,
  inView,
}: {
  target: number;
  decimals: number;
  prefix: string;
  suffix: string;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!inView || hasAnimated.current) return;
    hasAnimated.current = true;

    const duration = 2000;
    let startTime: number | null = null;

    function step(timestamp: number) {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      const current = eased * target;
      setCount(parseFloat(current.toFixed(decimals)));
      if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  }, [inView, target, decimals]);

  const display = decimals > 0 ? count.toFixed(decimals) : Math.round(count).toString();

  return (
    <span>
      {prefix}{display}{suffix}
    </span>
  );
}

/* ─── Stat Card ─── */
function StatCard({
  stat,
  index,
  inView,
}: {
  stat: (typeof stats)[0];
  index: number;
  inView: boolean;
}) {
  const Icon = stat.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.9 }}
      transition={{
        duration: 0.7,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative group"
    >
      <div className="relative overflow-hidden rounded-2xl border border-white/8 bg-white/4 backdrop-blur-sm p-6 md:p-8 text-center hover:border-white/15 hover:bg-white/6 transition-all duration-300">
        {/* Glow on hover */}
        <div className={cn(
          'absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500',
          'bg-gradient-to-b from-white/4 to-transparent'
        )} />

        {/* Top gradient line */}
        <div className={cn('absolute top-0 left-6 right-6 h-px opacity-60', 'bg-gradient-to-r from-transparent via-white/20 to-transparent')} />

        {/* Icon */}
        <div className={cn(
          'relative w-14 h-14 rounded-2xl mx-auto mb-5 flex items-center justify-center',
          stat.iconBg,
          'border border-white/10'
        )}>
          <Icon className={cn('w-7 h-7', stat.color)} />
        </div>

        {/* Big number */}
        <div className={cn('text-5xl md:text-6xl lg:text-7xl font-black mb-2 text-gradient', 'leading-none')}>
          <Counter
            target={stat.value}
            decimals={stat.decimals}
            prefix={stat.prefix}
            suffix={stat.suffix}
            inView={inView}
          />
        </div>

        {/* Label */}
        <p className="text-white font-bold text-lg md:text-xl mb-2">{stat.label}</p>

        {/* Description */}
        <p className="text-white/40 text-sm leading-relaxed">{stat.description}</p>

        {/* Bottom checkmark */}
        <div className="mt-4 flex items-center justify-center gap-1.5">
          <CheckCircle className="w-3.5 h-3.5 text-emerald-500/70" />
          <span className="text-white/30 text-xs">Verified</span>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Main Component ─── */
export function StatisticsSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      ref={ref}
      className="relative section-padding bg-gradient-hero overflow-hidden"
      aria-label="Statistics"
    >
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Dot grid */}
        <div className="absolute inset-0 dot-grid opacity-40" />

        {/* Decorative blobs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-royal-800/15 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-royal-700/10 rounded-full blur-3xl translate-y-1/2" />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-dashed border-white/4 rounded-full"
        />
      </div>

      <div className="relative z-10 container-premium">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/8 border border-white/15 text-white/70 text-sm font-semibold mb-5">
            <Star className="w-4 h-4 text-gold-400 fill-gold-400" />
            Our Track Record
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Numbers That{' '}
            <span className="text-gradient">Speak For Themselves</span>
          </h2>
          <p className="text-white/50 text-lg mt-4 max-w-xl mx-auto">
            Every metric earned through years of dedicated service to Dubai residents and businesses
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} inView={inView} />
          ))}
        </div>

        {/* Bottom tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-white/30 text-sm">
            Serving Dubai since 2014 · Licensed & Insured · 24/7 Emergency Response
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default StatisticsSection;

'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Phone, MapPin, Truck, CheckCircle, ArrowRight } from 'lucide-react';
import { cn } from '@/utils/cn';
import { BUSINESS } from '@/lib/constants';

/* ─── Steps data ─── */
const steps = [
  {
    number: '01',
    icon: Phone,
    title: 'Call or WhatsApp',
    description: 'We pick up immediately, 24 hours a day, 7 days a week — including weekends and public holidays.',
    color: 'text-royal-600',
    bg: 'bg-royal-600/10',
    border: 'border-royal-600/20',
    iconColor: 'text-royal-600 dark:text-royal-400',
  },
  {
    number: '02',
    icon: MapPin,
    title: 'Tell Us Your Location',
    description: 'Give us your address anywhere in Dubai and we\'ll confirm an ETA for your area instantly.',
    color: 'text-orange-500',
    bg: 'bg-orange-500/10',
    border: 'border-orange-500/20',
    iconColor: 'text-orange-500',
  },
  {
    number: '03',
    icon: Truck,
    title: 'We Dispatch',
    description: 'A licensed locksmith is dispatched your way immediately — typically arriving within 30 minutes.',
    color: 'text-emerald-600',
    bg: 'bg-emerald-600/10',
    border: 'border-emerald-600/20',
    iconColor: 'text-emerald-600 dark:text-emerald-400',
  },
  {
    number: '04',
    icon: CheckCircle,
    title: 'Problem Solved',
    description: 'Fast, professional service at transparent prices. Job done, your property secured.',
    color: 'text-gold-600',
    bg: 'bg-gold-500/10',
    border: 'border-gold-500/20',
    iconColor: 'text-gold-600 dark:text-gold-400',
  },
];

/* ─── Connecting line (SVG) ─── */
function ConnectingLine({ animate }: { animate: boolean }) {
  return (
    <div className="hidden lg:block absolute top-[4.5rem] left-0 right-0 z-0 pointer-events-none px-20">
      <svg
        viewBox="0 0 900 4"
        className="w-full"
        fill="none"
        preserveAspectRatio="none"
      >
        {/* Background line */}
        <line x1="0" y1="2" x2="900" y2="2" stroke="#e2e8f0" strokeWidth="2" className="dark:stroke-white/10" />
        {/* Animated overlay */}
        <motion.line
          x1="0"
          y1="2"
          x2="900"
          y2="2"
          stroke="url(#lineGrad)"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={animate ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: 'easeInOut' }}
        />
        <defs>
          <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#2563eb" />
            <stop offset="50%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

/* ─── Step Card ─── */
function StepCard({
  step,
  index,
  inView,
}: {
  step: (typeof steps)[0];
  index: number;
  inView: boolean;
}) {
  const Icon = step.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.65, delay: 0.2 + index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex flex-col items-center text-center"
    >
      {/* Step number + icon */}
      <div className="relative z-10 mb-5">
        {/* Number badge */}
        <div className="absolute -top-3 -right-3 w-7 h-7 rounded-full bg-white dark:bg-navy-800 border border-gray-200 dark:border-white/10 flex items-center justify-center shadow-sm">
          <span className={cn('text-xs font-black', step.color)}>{step.number}</span>
        </div>

        {/* Icon circle */}
        <div className={cn(
          'w-20 h-20 rounded-2xl flex items-center justify-center border-2 transition-all duration-300',
          'bg-white dark:bg-navy-800 shadow-md',
          step.border
        )}>
          <Icon className={cn('w-8 h-8', step.iconColor)} />
        </div>
      </div>

      {/* Content */}
      <h3 className="text-gray-900 dark:text-white font-bold text-lg mb-2">{step.title}</h3>
      <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed max-w-[220px]">
        {step.description}
      </p>

      {/* Mobile vertical connector (not last) */}
      {index < steps.length - 1 && (
        <div className="lg:hidden mt-6 mb-2 flex flex-col items-center gap-1">
          <ArrowRight className="w-5 h-5 text-gray-300 dark:text-gray-600 rotate-90" />
        </div>
      )}
    </motion.div>
  );
}

/* ─── Main Component ─── */
export function HowItWorks() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      ref={ref}
      className="relative section-padding bg-white dark:bg-navy-900 overflow-hidden"
      aria-label="How it works"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-subtle dark:bg-gradient-hero opacity-30 pointer-events-none" />
      <div className="absolute inset-0 line-grid opacity-20 pointer-events-none" />

      <div className="relative z-10 container-premium">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 md:mb-18"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-royal-50 dark:bg-royal-900/30 border border-royal-200 dark:border-royal-800/50 text-royal-700 dark:text-royal-400 text-sm font-semibold mb-4">
            <CheckCircle className="w-4 h-4" />
            Simple Process
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg mt-3 max-w-lg mx-auto">
            Getting help is simple — we're with you every step of the way
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Animated connecting line (desktop only) */}
          <ConnectingLine animate={inView} />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
            {steps.map((step, index) => (
              <StepCard key={step.number} step={step} index={index} inView={inView} />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12 md:mt-16"
        >
          <motion.a
            href={`tel:${BUSINESS.phoneRaw}`}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="btn btn-emergency px-8 py-3.5 text-base"
          >
            <Phone className="w-5 h-5" />
            Get Help Now
          </motion.a>

          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <CheckCircle className="w-4 h-4 text-emerald-500" />
            <span>Average arrival: 30 minutes</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HowItWorks;

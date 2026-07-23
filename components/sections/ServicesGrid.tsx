'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
  AlertTriangle,
  Home,
  Building2,
  Car,
  Smartphone,
  Shield,
  Lock,
  Key,
  DoorOpen,
  Wrench,
  ArrowRight,
  ChevronDown,
} from 'lucide-react';
import { cn } from '@/utils/cn';

/* ─── Icon map ─── */
const ICON_MAP: Record<string, React.ReactNode> = {
  AlertTriangle: <AlertTriangle className="w-6 h-6" />,
  Home: <Home className="w-6 h-6" />,
  Building2: <Building2 className="w-6 h-6" />,
  Car: <Car className="w-6 h-6" />,
  Smartphone: <Smartphone className="w-6 h-6" />,
  Shield: <Shield className="w-6 h-6" />,
  Lock: <Lock className="w-6 h-6" />,
  Key: <Key className="w-6 h-6" />,
  DoorOpen: <DoorOpen className="w-6 h-6" />,
  Wrench: <Wrench className="w-6 h-6" />,
};

/* ─── Filter categories ─── */
const FILTER_TABS = [
  { key: 'all', label: 'All' },
  { key: 'emergency', label: 'Emergency' },
  { key: 'residential', label: 'Residential' },
  { key: 'commercial', label: 'Commercial' },
  { key: 'automotive', label: 'Automotive' },
  { key: 'smart', label: 'Smart Locks' },
  { key: 'safe', label: 'Safe' },
] as const;

type FilterKey = (typeof FILTER_TABS)[number]['key'];

/* ─── Services data ─── */
const SERVICE_ITEMS = [
  {
    slug: 'emergency-locksmith',
    title: 'Emergency Locksmith',
    shortDescription: 'Locked out at any hour? We dispatch immediately, 24/7 across Dubai.',
    icon: 'AlertTriangle',
    category: 'emergency',
    isEmergency: true,
    color: 'text-red-500',
    bg: 'bg-red-50 dark:bg-red-950/30',
    iconBg: 'bg-red-100 dark:bg-red-900/30',
    border: 'border-red-100 dark:border-red-900/30',
  },
  {
    slug: 'car-lockout',
    title: 'Car Lockout',
    shortDescription: 'Left your keys in the car? We open any vehicle without damage.',
    icon: 'Car',
    category: 'automotive',
    isEmergency: true,
    color: 'text-purple-500',
    bg: 'bg-purple-50 dark:bg-purple-950/30',
    iconBg: 'bg-purple-100 dark:bg-purple-900/30',
    border: 'border-purple-100 dark:border-purple-900/30',
  },
  {
    slug: 'house-lockout',
    title: 'House Lockout',
    shortDescription: 'Locked out of your home? We get you back inside fast and safely.',
    icon: 'Home',
    category: 'residential',
    isEmergency: true,
    color: 'text-blue-500',
    bg: 'bg-blue-50 dark:bg-blue-950/30',
    iconBg: 'bg-blue-100 dark:bg-blue-900/30',
    border: 'border-blue-100 dark:border-blue-900/30',
  },
  {
    slug: 'lock-change',
    title: 'Lock Change',
    shortDescription: 'Upgrade or replace your locks with modern, secure alternatives.',
    icon: 'Lock',
    category: 'residential',
    isEmergency: false,
    color: 'text-royal-600',
    bg: 'bg-royal-50 dark:bg-royal-950/30',
    iconBg: 'bg-royal-100 dark:bg-royal-900/30',
    border: 'border-royal-100 dark:border-royal-900/30',
  },
  {
    slug: 'smart-locks',
    title: 'Smart Locks',
    shortDescription: 'Install modern smart locks with app control, fingerprint, or PIN access.',
    icon: 'Smartphone',
    category: 'smart',
    isEmergency: false,
    color: 'text-cyan-500',
    bg: 'bg-cyan-50 dark:bg-cyan-950/30',
    iconBg: 'bg-cyan-100 dark:bg-cyan-900/30',
    border: 'border-cyan-100 dark:border-cyan-900/30',
  },
  {
    slug: 'safe-opening',
    title: 'Safe Opening',
    shortDescription: 'Forgotten the combination? We open all safe types professionally.',
    icon: 'Shield',
    category: 'safe',
    isEmergency: false,
    color: 'text-emerald-600',
    bg: 'bg-emerald-50 dark:bg-emerald-950/30',
    iconBg: 'bg-emerald-100 dark:bg-emerald-900/30',
    border: 'border-emerald-100 dark:border-emerald-900/30',
  },
  {
    slug: 'key-duplication',
    title: 'Key Duplication',
    shortDescription: 'Precise key cutting and duplication for all key types and brands.',
    icon: 'Key',
    category: 'residential',
    isEmergency: false,
    color: 'text-yellow-600',
    bg: 'bg-yellow-50 dark:bg-yellow-950/30',
    iconBg: 'bg-yellow-100 dark:bg-yellow-900/30',
    border: 'border-yellow-100 dark:border-yellow-900/30',
  },
  {
    slug: 'commercial-locksmith',
    title: 'Commercial Locksmith',
    shortDescription: 'Complete business security solutions for offices and commercial properties.',
    icon: 'Building2',
    category: 'commercial',
    isEmergency: false,
    color: 'text-indigo-500',
    bg: 'bg-indigo-50 dark:bg-indigo-950/30',
    iconBg: 'bg-indigo-100 dark:bg-indigo-900/30',
    border: 'border-indigo-100 dark:border-indigo-900/30',
  },
  {
    slug: 'office-lockout',
    title: 'Office Lockout',
    shortDescription: 'Locked out of your workplace? We respond fast to commercial calls.',
    icon: 'DoorOpen',
    category: 'commercial',
    isEmergency: true,
    color: 'text-orange-500',
    bg: 'bg-orange-50 dark:bg-orange-950/30',
    iconBg: 'bg-orange-100 dark:bg-orange-900/30',
    border: 'border-orange-100 dark:border-orange-900/30',
  },
  {
    slug: 'broken-key-extraction',
    title: 'Broken Key Extraction',
    shortDescription: 'Key snapped in the lock? We extract it cleanly without lock damage.',
    icon: 'Wrench',
    category: 'emergency',
    isEmergency: true,
    color: 'text-red-500',
    bg: 'bg-red-50 dark:bg-red-950/30',
    iconBg: 'bg-red-100 dark:bg-red-900/30',
    border: 'border-red-100 dark:border-red-900/30',
  },
  {
    slug: 'fingerprint-locks',
    title: 'Fingerprint Locks',
    shortDescription: 'Biometric lock installation for homes and offices — keyless and secure.',
    icon: 'Smartphone',
    category: 'smart',
    isEmergency: false,
    color: 'text-cyan-600',
    bg: 'bg-cyan-50 dark:bg-cyan-950/30',
    iconBg: 'bg-cyan-100 dark:bg-cyan-900/30',
    border: 'border-cyan-100 dark:border-cyan-900/30',
  },
  {
    slug: 'lock-repair',
    title: 'Lock Repair',
    shortDescription: 'Faulty lock mechanism? We diagnose and repair without full replacement.',
    icon: 'Lock',
    category: 'residential',
    isEmergency: false,
    color: 'text-royal-600',
    bg: 'bg-royal-50 dark:bg-royal-950/30',
    iconBg: 'bg-royal-100 dark:bg-royal-900/30',
    border: 'border-royal-100 dark:border-royal-900/30',
  },
];

const INITIAL_VISIBLE = 9;

/* ─── Service Card ─── */
function ServiceCard({
  service,
  index,
  inView,
}: {
  service: (typeof SERVICE_ITEMS)[0];
  index: number;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.55, delay: (index % 9) * 0.07, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
      className="group relative"
    >
      <Link href={`/services/${service.slug}`} className="block h-full">
        <div className={cn(
          'h-full flex flex-col p-5 md:p-6 rounded-2xl border transition-all duration-300',
          'bg-white dark:bg-navy-800',
          service.border,
          'hover:shadow-xl hover:border-transparent',
          'group-hover:shadow-royal-500/10 dark:group-hover:shadow-royal-400/10'
        )}>
          {/* Emergency badge */}
          {service.isEmergency && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-xs font-bold mb-3 self-start">
              <AlertTriangle className="w-3 h-3" />
              Emergency
            </span>
          )}

          {/* Icon */}
          <div className={cn(
            'w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110',
            service.iconBg
          )}>
            <span className={service.color}>
              {ICON_MAP[service.icon] ?? <Wrench className="w-6 h-6" />}
            </span>
          </div>

          {/* Content */}
          <h3 className="text-gray-900 dark:text-white font-bold text-base mb-2 group-hover:text-royal-700 dark:group-hover:text-royal-400 transition-colors">
            {service.title}
          </h3>
          <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed flex-1">
            {service.shortDescription}
          </p>

          {/* Learn More link */}
          <div className="mt-4 flex items-center gap-1.5 text-royal-600 dark:text-royal-400 text-sm font-semibold group-hover:gap-2.5 transition-all duration-200">
            Learn More
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </div>

          {/* Hover border glow */}
          <div className="absolute inset-0 rounded-2xl border-2 border-royal-500/0 group-hover:border-royal-500/30 dark:group-hover:border-royal-400/30 transition-all duration-300 pointer-events-none" />
        </div>
      </Link>
    </motion.div>
  );
}

/* ─── Main Component ─── */
export function ServicesGrid() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [activeFilter, setActiveFilter] = useState<FilterKey>('all');
  const [showAll, setShowAll] = useState(false);

  const filtered = activeFilter === 'all'
    ? SERVICE_ITEMS
    : SERVICE_ITEMS.filter((s) => s.category === activeFilter);

  const visible = showAll ? filtered : filtered.slice(0, INITIAL_VISIBLE);

  return (
    <section
      ref={ref}
      className="relative section-padding bg-gray-50 dark:bg-navy-900"
      aria-label="Locksmith services"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-subtle dark:bg-gradient-hero opacity-50 pointer-events-none" />

      <div className="relative z-10 container-premium">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-10"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-royal-50 dark:bg-royal-900/30 border border-royal-200 dark:border-royal-800/50 text-royal-700 dark:text-royal-400 text-sm font-semibold mb-4">
            <Wrench className="w-4 h-4" />
            Professional Services
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Our Locksmith <span className="text-gradient">Services</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg mt-3 max-w-2xl mx-auto">
            Professional locksmith solutions for every situation — available 24/7 across Dubai
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-wrap gap-2 justify-center mb-8 md:mb-10"
        >
          {FILTER_TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => { setActiveFilter(tab.key); setShowAll(false); }}
              className={cn(
                'px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200',
                activeFilter === tab.key
                  ? 'bg-royal-600 text-white shadow-lg shadow-royal-600/25'
                  : 'bg-white dark:bg-navy-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-white/10 hover:border-royal-300 hover:text-royal-600'
              )}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5"
          >
            {visible.map((service, index) => (
              <ServiceCard
                key={service.slug}
                service={service}
                index={index}
                inView={inView}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Show More / View All */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-4 justify-center mt-10"
        >
          {filtered.length > INITIAL_VISIBLE && !showAll && (
            <button
              onClick={() => setShowAll(true)}
              className="flex items-center gap-2 px-6 py-3 rounded-full border-2 border-royal-600 text-royal-600 dark:text-royal-400 dark:border-royal-400 font-semibold hover:bg-royal-600 hover:text-white dark:hover:bg-royal-600 dark:hover:text-white transition-all duration-200"
            >
              Show More ({filtered.length - INITIAL_VISIBLE} more)
              <ChevronDown className="w-4 h-4" />
            </button>
          )}
          <Link
            href="/services"
            className="btn btn-primary text-sm px-7 py-3"
          >
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default ServicesGrid;

'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { MapPin, Clock, ArrowRight, Navigation } from 'lucide-react';
import { cn } from '@/utils/cn';
import { COVERAGE_AREAS } from '@/lib/constants';
import { areas } from '@/content/areas';

/* ─── Merge coverage areas with response times from areas data ─── */
const areaCards = COVERAGE_AREAS.map((area) => {
  const areaData = areas.find((a) => a.slug === area.slug);
  return {
    name: area.name,
    slug: area.slug,
    responseTime: areaData?.responseTime ?? '30 minutes',
  };
});

/* ─── Priority areas (shown with highlight) ─── */
const PRIORITY_SLUGS = [
  'downtown-dubai',
  'dubai-marina',
  'business-bay',
  'jumeirah-village-circle',
  'palm-jumeirah',
  'al-barsha',
];

/* ─── Dubai SVG Map Outline ─── */
function DubaiMapSVG() {
  return (
    <svg
      viewBox="0 0 300 200"
      className="w-full max-w-xs mx-auto opacity-70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Simplified Dubai coastline outline */}
      <path
        d="M20,160 L30,140 L50,130 L70,125 L90,120 L110,115 L130,110 L150,108 L170,105 L185,100 L195,90 L200,80 L210,70 L220,65 L235,60 L250,55 L260,50 L270,48 L280,50 L285,60 L280,70 L270,75 L265,85 L260,95 L255,105 L250,115 L245,125 L240,135 L235,145 L225,150 L210,155 L190,158 L170,160 L150,162 L130,163 L110,163 L90,162 L70,161 L50,160 L30,160 Z"
        stroke="#2563eb"
        strokeWidth="1.5"
        fill="rgba(37, 99, 235, 0.06)"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      {/* Creek/water detail */}
      <path
        d="M180,120 Q190,115 195,110 Q200,105 205,100"
        stroke="#60a5fa"
        strokeWidth="1"
        strokeDasharray="3 2"
        opacity="0.6"
      />
      {/* Major road lines */}
      <line x1="100" y1="130" x2="250" y2="75" stroke="#1e3a8a" strokeWidth="0.5" opacity="0.3" strokeDasharray="4 3" />
      <line x1="60" y1="145" x2="260" y2="90" stroke="#1e3a8a" strokeWidth="0.5" opacity="0.2" strokeDasharray="4 3" />

      {/* Location dots for main areas */}
      {[
        { x: 170, y: 120, label: 'Downtown' },
        { x: 120, y: 140, label: 'Marina' },
        { x: 110, y: 130, label: 'JBR' },
        { x: 185, y: 115, label: 'Bus. Bay' },
        { x: 105, y: 120, label: 'JVC' },
        { x: 220, y: 105, label: 'Deira' },
      ].map((dot) => (
        <g key={dot.label}>
          <circle cx={dot.x} cy={dot.y} r="3" fill="#2563eb" opacity="0.8" />
          <circle cx={dot.x} cy={dot.y} r="6" fill="#2563eb" opacity="0.15" />
        </g>
      ))}

      {/* Palm Jumeirah shape */}
      <path
        d="M95,142 Q90,135 85,130 Q80,120 85,115 Q92,112 98,118 Q103,125 100,132 Q97,138 95,142Z"
        stroke="#60a5fa"
        strokeWidth="1"
        fill="rgba(96, 165, 250, 0.1)"
      />
    </svg>
  );
}

/* ─── Area Card ─── */
function AreaCard({
  area,
  index,
  inView,
}: {
  area: (typeof areaCards)[0];
  index: number;
  inView: boolean;
}) {
  const isPriority = PRIORITY_SLUGS.includes(area.slug);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.92 }}
      transition={{ duration: 0.45, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, transition: { type: 'spring', stiffness: 300, damping: 18 } }}
    >
      <Link href={`/areas/${area.slug}`} className="group block">
        <div className={cn(
          'p-3.5 md:p-4 rounded-xl border transition-all duration-300',
          'bg-white dark:bg-navy-800 hover:shadow-md',
          isPriority
            ? 'border-royal-200 dark:border-royal-800/50 hover:border-royal-400 dark:hover:border-royal-600'
            : 'border-gray-100 dark:border-white/8 hover:border-royal-200 dark:hover:border-white/15'
        )}>
          <div className="flex items-start justify-between gap-2">
            <div className="flex items-center gap-2 min-w-0">
              <MapPin className={cn(
                'w-3.5 h-3.5 shrink-0',
                isPriority ? 'text-royal-600 dark:text-royal-400' : 'text-gray-400'
              )} />
              <span className={cn(
                'font-semibold text-sm truncate',
                isPriority
                  ? 'text-royal-700 dark:text-royal-400'
                  : 'text-gray-800 dark:text-gray-200'
              )}>
                {area.name}
              </span>
            </div>
            <ArrowRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-royal-500 shrink-0 transition-colors duration-200" />
          </div>

          <div className="mt-2 flex items-center gap-1.5 text-gray-400 dark:text-gray-500">
            <Clock className="w-3 h-3 shrink-0" />
            <span className="text-xs">{area.responseTime}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

/* ─── Main Component ─── */
export function CoverageSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section
      ref={ref}
      className="relative section-padding bg-white dark:bg-navy-900 overflow-hidden"
      aria-label="Coverage areas"
    >
      {/* Background */}
      <div className="absolute inset-0 dot-grid opacity-40 dark:opacity-20 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-royal-50/60 dark:from-royal-950/20 to-transparent pointer-events-none" />

      <div className="relative z-10 container-premium">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-royal-50 dark:bg-royal-900/30 border border-royal-200 dark:border-royal-800/50 text-royal-700 dark:text-royal-400 text-sm font-semibold mb-4">
            <Navigation className="w-4 h-4" />
            Serving All of Dubai
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            We Cover <span className="text-gradient">All of Dubai</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg mt-3 max-w-xl mx-auto">
            From Palm Jumeirah to Deira, we reach you in 30 minutes or less
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-10 lg:gap-12 items-start">
          {/* Map visual */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:flex flex-col items-center justify-center gap-6 p-8 rounded-2xl bg-gray-50 dark:bg-navy-800 border border-gray-100 dark:border-white/8"
          >
            <DubaiMapSVG />
            <div className="text-center">
              <p className="text-gray-900 dark:text-white font-bold text-lg">19 Areas Covered</p>
              <p className="text-gray-400 dark:text-gray-500 text-sm mt-1">Full Dubai coverage, 24/7</p>
            </div>
            {/* Legend */}
            <div className="flex items-center gap-4 text-xs text-gray-400">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-royal-600" />
                Covered Area
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-5 h-px bg-royal-300 border-dashed border-t" />
                Route
              </span>
            </div>
          </motion.div>

          {/* Area cards grid */}
          <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-2.5 md:gap-3">
            {areaCards.map((area, index) => (
              <AreaCard key={area.slug} area={area} index={index} inView={inView} />
            ))}
          </div>
        </div>

        {/* View all CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex items-center justify-center gap-3 mt-10 md:mt-12"
        >
          <Link
            href="/areas"
            className="btn btn-primary text-sm px-7 py-3"
          >
            View All Coverage Areas
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default CoverageSection;

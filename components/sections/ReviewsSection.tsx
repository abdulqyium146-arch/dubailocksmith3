'use client';

import { useRef, useState } from 'react';
import { motion, useInView, useMotionValue } from 'framer-motion';
import { Star, ExternalLink, CheckCircle } from 'lucide-react';
import { cn } from '@/utils/cn';
import { BUSINESS } from '@/lib/constants';
import { reviews } from '@/content/reviews';
import type { Review } from '@/types';

/* ─── Star row ─── */
function StarRow({ rating, size = 'sm' }: { rating: number; size?: 'sm' | 'md' | 'lg' }) {
  const sizeClasses = { sm: 'w-3.5 h-3.5', md: 'w-4 h-4', lg: 'w-5 h-5' };
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={cn(
            sizeClasses[size],
            i < rating ? 'text-gold-500 fill-gold-500' : 'text-gray-300 dark:text-gray-600'
          )}
        />
      ))}
    </div>
  );
}

/* ─── Avatar with initials ─── */
function Avatar({ name }: { name: string }) {
  const initials = name
    .split(' ')
    .slice(0, 2)
    .map((n) => n[0])
    .join('')
    .toUpperCase();

  const colors = [
    'from-royal-600 to-royal-800',
    'from-emerald-600 to-emerald-800',
    'from-purple-600 to-purple-800',
    'from-orange-500 to-orange-700',
    'from-cyan-600 to-cyan-800',
  ];
  const colorIndex = name.charCodeAt(0) % colors.length;

  return (
    <div
      className={cn(
        'w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0 bg-gradient-to-br',
        colors[colorIndex]
      )}
    >
      {initials}
    </div>
  );
}

/* ─── Review Card ─── */
function ReviewCard({ review, index }: { review: Review; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const MAX_LENGTH = 160;
  const truncated = review.text.length > MAX_LENGTH && !expanded;
  const displayText = truncated ? review.text.slice(0, MAX_LENGTH) + '…' : review.text;

  // Format date nicely
  const date = new Date(review.date);
  const formattedDate = date.toLocaleDateString('en-AE', { month: 'short', year: 'numeric' });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="shrink-0 w-[300px] sm:w-[320px] md:w-[340px]"
    >
      <div className="h-full flex flex-col p-5 rounded-2xl bg-white dark:bg-navy-800 border border-gray-100 dark:border-white/8 shadow-sm hover:shadow-md transition-shadow duration-300">
        {/* Top row */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            <Avatar name={review.name} />
            <div>
              <p className="text-gray-900 dark:text-white font-bold text-sm leading-tight">{review.name}</p>
              <p className="text-gray-400 dark:text-gray-500 text-xs mt-0.5">{formattedDate}</p>
            </div>
          </div>
          {/* Google G icon */}
          <div className="w-7 h-7 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 border border-gray-100">
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M23.745 12.27c0-.79-.07-1.54-.19-2.27h-11.3v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z" />
              <path fill="#34A853" d="M12.255 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96h-3.98v3.09C3.515 21.3 7.615 24 12.255 24z" />
              <path fill="#FBBC05" d="M5.525 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.62h-3.98a11.86 11.86 0 0 0 0 10.76l3.98-3.09z" />
              <path fill="#EA4335" d="M12.255 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C18.205 1.19 15.495 0 12.255 0c-4.64 0-8.74 2.7-10.71 6.62l3.98 3.09c.95-2.85 3.6-4.96 6.73-4.96z" />
            </svg>
          </div>
        </div>

        {/* Stars */}
        <StarRow rating={review.rating} />

        {/* Review text */}
        <div className="mt-3 flex-1">
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            "{displayText}"
          </p>
          {review.text.length > MAX_LENGTH && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-1 text-royal-600 dark:text-royal-400 text-xs font-semibold hover:underline"
            >
              {expanded ? 'Show less' : 'Read more'}
            </button>
          )}
        </div>

        {/* Service tag */}
        {review.service && (
          <div className="mt-3 pt-3 border-t border-gray-100 dark:border-white/5 flex items-center justify-between">
            <span className="text-xs text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-white/5 px-2 py-1 rounded-md">
              {review.service}
            </span>
            <span className="flex items-center gap-1 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
              <CheckCircle className="w-3 h-3" />
              Verified
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );
}

/* ─── Google Summary Block ─── */
function GoogleSummary({ inView }: { inView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="flex flex-col sm:flex-row items-center gap-6 p-6 md:p-8 rounded-2xl bg-white dark:bg-navy-800 border border-gray-100 dark:border-white/8 shadow-md max-w-xl mx-auto"
    >
      {/* Google icon */}
      <div className="w-16 h-16 shrink-0 bg-white rounded-2xl shadow-sm flex items-center justify-center border border-gray-100">
        <svg className="w-10 h-10" viewBox="0 0 24 24">
          <path fill="#4285F4" d="M23.745 12.27c0-.79-.07-1.54-.19-2.27h-11.3v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z" />
          <path fill="#34A853" d="M12.255 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96h-3.98v3.09C3.515 21.3 7.615 24 12.255 24z" />
          <path fill="#FBBC05" d="M5.525 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.62h-3.98a11.86 11.86 0 0 0 0 10.76l3.98-3.09z" />
          <path fill="#EA4335" d="M12.255 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C18.205 1.19 15.495 0 12.255 0c-4.64 0-8.74 2.7-10.71 6.62l3.98 3.09c.95-2.85 3.6-4.96 6.73-4.96z" />
        </svg>
      </div>

      {/* Stats */}
      <div>
        <div className="flex items-baseline gap-2 mb-1">
          <span className="text-4xl font-black text-gray-900 dark:text-white">{BUSINESS.rating}</span>
          <span className="text-lg text-gray-400 font-semibold">/ 5.0</span>
        </div>
        <StarRow rating={5} size="md" />
        <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
          Based on{' '}
          <span className="font-bold text-gray-900 dark:text-white">{BUSINESS.reviewCount}+</span>{' '}
          verified Google Reviews
        </p>
      </div>
    </motion.div>
  );
}

/* ─── Main Component ─── */
export function ReviewsSection() {
  const ref = useRef<HTMLElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  // Show only google-source reviews for display
  const displayReviews = reviews.filter((r) => r.source === 'google').slice(0, 12);

  // Drag to scroll carousel
  const dragX = useMotionValue(0);

  return (
    <section
      ref={ref}
      className="relative section-padding bg-gray-50 dark:bg-navy-950 overflow-hidden"
      aria-label="Customer reviews"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-subtle dark:bg-gradient-hero opacity-40 pointer-events-none" />
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />

      <div className="relative z-10">
        {/* Header */}
        <div className="container-premium">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 md:mb-12"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-600 dark:text-gold-400 text-sm font-semibold mb-4">
              <Star className="w-4 h-4 fill-gold-500" />
              Real Customer Experiences
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">
              What Our{' '}
              <span className="text-gradient">Customers Say</span>
            </h2>

            {/* Google summary */}
            <GoogleSummary inView={inView} />
          </motion.div>
        </div>

        {/* Scrollable Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative"
        >
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-r from-gray-50 dark:from-navy-950 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-l from-gray-50 dark:from-navy-950 to-transparent z-10 pointer-events-none" />

          <motion.div
            ref={carouselRef}
            className="flex gap-4 overflow-x-auto pb-4 px-4 md:px-8 scrollbar-hide cursor-grab active:cursor-grabbing"
            style={{ x: dragX }}
            drag="x"
            dragConstraints={carouselRef}
            whileTap={{ cursor: 'grabbing' }}
          >
            {displayReviews.map((review, index) => (
              <ReviewCard key={review.id} review={review} index={index} />
            ))}
          </motion.div>
        </motion.div>

        {/* Read All CTA */}
        <div className="container-premium">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex justify-center mt-8"
          >
            <a
              href={BUSINESS.social.google}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full border-2 border-gray-200 dark:border-white/15 text-gray-700 dark:text-gray-300 font-semibold text-sm hover:border-royal-500 hover:text-royal-600 dark:hover:text-royal-400 transition-all duration-200"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M23.745 12.27c0-.79-.07-1.54-.19-2.27h-11.3v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z" />
                <path fill="#34A853" d="M12.255 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96h-3.98v3.09C3.515 21.3 7.615 24 12.255 24z" />
                <path fill="#FBBC05" d="M5.525 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.62h-3.98a11.86 11.86 0 0 0 0 10.76l3.98-3.09z" />
                <path fill="#EA4335" d="M12.255 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C18.205 1.19 15.495 0 12.255 0c-4.64 0-8.74 2.7-10.71 6.62l3.98 3.09c.95-2.85 3.6-4.96 6.73-4.96z" />
              </svg>
              Read All Reviews on Google
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ReviewsSection;

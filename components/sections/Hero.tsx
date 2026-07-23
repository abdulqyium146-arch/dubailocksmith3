'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Phone,
  Calendar,
  Star,
  Clock,
  Shield,
  CheckCircle,
  Lock,
  Zap,
  Users,
  ChevronDown,
} from 'lucide-react';
import { cn } from '@/utils/cn';
import { BUSINESS } from '@/lib/constants';

/* ─── WhatsApp SVG Icon ─── */
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.849L.083 23.5a.5.5 0 0 0 .617.617l5.651-1.449A11.947 11.947 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.85 0-3.576-.496-5.065-1.363l-.362-.215-3.752.963.979-3.675-.236-.375A9.946 9.946 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
    </svg>
  );
}

/* ─── Animation Variants ─── */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const floatVariants = {
  initial: { y: 0 },
  animate: {
    y: [-8, 8, -8],
    transition: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
  },
};

const floatVariantsDelayed = {
  initial: { y: 0 },
  animate: {
    y: [6, -6, 6],
    transition: { duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1.5 },
  },
};

const floatVariantsSlow = {
  initial: { y: 0 },
  animate: {
    y: [-5, 5, -5],
    transition: { duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.8 },
  },
};

/* ─── Trust Badge ─── */
const trustBadges = [
  { icon: Star, text: '4.8 Rating', color: 'text-gold-500' },
  { icon: Users, text: '305+ Reviews', color: 'text-royal-400' },
  { icon: Clock, text: '24/7 Available', color: 'text-emerald-400' },
  { icon: Zap, text: '30 Min Response', color: 'text-gold-400' },
  { icon: Shield, text: 'Licensed', color: 'text-royal-400' },
  { icon: CheckCircle, text: 'Insured', color: 'text-emerald-400' },
];

/* ─── Lock Visual ─── */
function LockVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Central lock icon */}
      <motion.div
        initial={{ scale: 0, rotate: -20 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, delay: 0.6, type: 'spring', stiffness: 120 }}
        className="relative z-10 w-48 h-48 md:w-64 md:h-64"
      >
        {/* Outer glow ring */}
        <div className="absolute inset-0 rounded-full bg-royal-700/20 blur-3xl" />
        {/* Rotating ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-2 rounded-full border-2 border-dashed border-royal-600/30"
        />
        {/* Inner ring */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-6 rounded-full border border-royal-500/20"
        />
        {/* Center icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-royal-800 to-royal-900 rounded-3xl flex items-center justify-center shadow-2xl shadow-royal-900/50 border border-royal-700/50">
            <Lock className="w-12 h-12 md:w-16 md:h-16 text-white" />
          </div>
        </div>
      </motion.div>

      {/* Floating stat card: 305+ Happy Customers (top right) */}
      <motion.div
        variants={floatVariants}
        initial="initial"
        animate="animate"
        className="absolute top-4 right-0 md:-right-4 z-20"
      >
        <div className="glass rounded-2xl px-4 py-3 shadow-xl border border-white/20 min-w-[140px]">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-royal-600/20 rounded-lg flex items-center justify-center">
              <Users className="w-4 h-4 text-royal-400" />
            </div>
            <div>
              <p className="text-white font-bold text-lg leading-none">305+</p>
              <p className="text-white/60 text-xs mt-0.5">Happy Customers</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating stat card: 30 Min Response (bottom left) */}
      <motion.div
        variants={floatVariantsDelayed}
        initial="initial"
        animate="animate"
        className="absolute bottom-8 left-0 md:-left-4 z-20"
      >
        <div className="glass rounded-2xl px-4 py-3 shadow-xl border border-white/20 min-w-[140px]">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center">
              <Zap className="w-4 h-4 text-emerald-400" />
            </div>
            <div>
              <p className="text-white font-bold text-lg leading-none">30 Min</p>
              <p className="text-white/60 text-xs mt-0.5">Response</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating stat card: 4.8 Google Rating (center area) */}
      <motion.div
        variants={floatVariantsSlow}
        initial="initial"
        animate="animate"
        className="absolute bottom-24 right-4 md:right-0 z-20"
      >
        <div className="glass rounded-2xl px-4 py-3 shadow-xl border border-white/20">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gold-500/20 rounded-lg flex items-center justify-center">
              <Star className="w-4 h-4 text-gold-400 fill-gold-400" />
            </div>
            <div>
              <p className="text-white font-bold text-lg leading-none">4.8★</p>
              <p className="text-white/60 text-xs mt-0.5">Google Rating</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Background mesh blobs */}
      <div className="absolute top-12 left-8 w-32 h-32 bg-royal-700/15 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-12 right-8 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
    </div>
  );
}

/* ─── Main Hero Component ─── */
export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-hero"
      aria-label="Hero section"
    >
      {/* Animated background gradient */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 bg-animated-gradient opacity-60 pointer-events-none"
      />

      {/* Gradient mesh blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-32 -left-32 w-96 h-96 bg-royal-800/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -20, 0], y: [0, 25, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute top-1/3 right-0 w-80 h-80 bg-royal-700/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, 15, 0], y: [0, -15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-0 left-1/3 w-72 h-72 bg-navy-600/30 rounded-full blur-3xl"
        />

        {/* Decorative glassmorphic cards in background */}
        <motion.div
          animate={{ rotate: [0, 3, 0], y: [0, -10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-20 left-8 w-20 h-20 glass rounded-2xl opacity-30 hidden lg:block"
        />
        <motion.div
          animate={{ rotate: [0, -4, 0], y: [0, 8, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute top-40 right-12 w-12 h-12 glass rounded-xl opacity-20 hidden lg:block"
        />
        <motion.div
          animate={{ rotate: [0, 2, 0], y: [0, -6, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          className="absolute bottom-32 left-16 w-16 h-16 glass rounded-2xl opacity-20 hidden lg:block"
        />

        {/* Grid overlay */}
        <div className="absolute inset-0 line-grid opacity-30" />
      </div>

      {/* Main content */}
      <motion.div
        style={{ y: contentY }}
        className="relative z-10 container-premium w-full pt-28 pb-28 md:pt-32 md:pb-20"
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left column: Content ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6 md:gap-8"
          >
            {/* Emergency badge */}
            <motion.div variants={itemVariants} className="flex">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/15 border border-red-500/30 text-red-400 text-sm font-semibold backdrop-blur-sm">
                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                24/7 Emergency Locksmith
              </span>
            </motion.div>

            {/* Main headline */}
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.05] tracking-tight">
                <span className="text-gradient">
                  24/7 Emergency
                </span>
                <br />
                <span className="text-white">Locksmith</span>
                <br />
                <span className="text-gradient">Dubai</span>
              </h1>
            </motion.div>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="text-white/70 text-lg md:text-xl leading-relaxed max-w-xl"
            >
              Fast, trusted locksmith services across Dubai for homes, offices, vehicles, safes, and smart locks.
              Available 24/7 with rapid response and transparent pricing.
            </motion.p>

            {/* Trust badges */}
            <motion.div variants={itemVariants}>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {trustBadges.map(({ icon: Icon, text, color }) => (
                  <span
                    key={text}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/8 border border-white/12 text-white/80 text-[11px] sm:text-xs font-medium backdrop-blur-sm"
                  >
                    <Icon className={cn('w-3.5 h-3.5', color)} />
                    {text}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3">
              {/* Call Now */}
              <motion.a
                href={`tel:${BUSINESS.phoneRaw}`}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="btn btn-emergency text-sm sm:text-base px-4 sm:px-6 py-4 w-full sm:flex-none justify-center"
              >
                <Phone className="w-5 h-5 shrink-0" />
                <span className="sm:hidden">Call Now</span>
                <span className="hidden sm:inline">Call Now: {BUSINESS.phone}</span>
              </motion.a>

              {/* WhatsApp */}
              <motion.a
                href={`${BUSINESS.whatsappUrl}?text=${encodeURIComponent('Hello, I need a locksmith in Dubai')}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="btn btn-whatsapp text-base px-6 py-4 flex-1 sm:flex-none justify-center"
              >
                <WhatsAppIcon className="w-5 h-5" />
                WhatsApp Us
              </motion.a>

              {/* Book Emergency */}
              <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/contact"
                  className="btn btn-outline border-white/40 text-white hover:bg-white/10 hover:border-white/60 text-base px-6 py-4 w-full sm:w-auto justify-center"
                >
                  <Calendar className="w-5 h-5" />
                  Book Service
                </Link>
              </motion.div>
            </motion.div>

            {/* Trust line */}
            <motion.p variants={itemVariants} className="text-white/40 text-xs flex items-center gap-2">
              <Shield className="w-3.5 h-3.5 text-emerald-500" />
              Licensed & Insured · No Hidden Fees · 1-Year Warranty
            </motion.p>
          </motion.div>

          {/* ── Right column: Visual ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-[380px] md:h-[480px] lg:h-[520px] hidden md:flex items-center justify-center"
          >
            <LockVisual />
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-5 h-5 text-white/30" />
        </motion.div>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/5 to-transparent pointer-events-none" />
    </section>
  );
}

export default Hero;

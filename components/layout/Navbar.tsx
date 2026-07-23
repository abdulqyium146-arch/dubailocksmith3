'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { useTheme } from 'next-themes';
import {
  Lock,
  Phone,
  Menu,
  X,
  ChevronDown,
  Sun,
  Moon,
  Home,
  Wrench,
  MapPin,
  FileText,
  Mail,
  AlertTriangle,
  DoorOpen,
  Building2,
  Car,
  Key,
  Shield,
  Smartphone,
  ShieldCheck,
  ExternalLink,
} from 'lucide-react';
import { cn } from '@/utils/cn';
import { BUSINESS, SERVICES_CATEGORIES, COVERAGE_AREAS, NAV_ITEMS } from '@/lib/constants';

/* ─── Icon map for service categories ─── */
const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  emergency: <AlertTriangle className="w-4 h-4 text-red-500" />,
  lockout: <DoorOpen className="w-4 h-4 text-orange-500" />,
  residential: <Home className="w-4 h-4 text-blue-500" />,
  commercial: <Building2 className="w-4 h-4 text-indigo-500" />,
  automotive: <Car className="w-4 h-4 text-purple-500" />,
  locks: <Lock className="w-4 h-4 text-blue-600" />,
  keys: <Key className="w-4 h-4 text-yellow-600" />,
  smart: <Smartphone className="w-4 h-4 text-cyan-500" />,
  safe: <Shield className="w-4 h-4 text-green-500" />,
  security: <ShieldCheck className="w-4 h-4 text-emerald-500" />,
};

/* ─── Slug → label helper ─── */
function slugToLabel(slug: string): string {
  return slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

/* ─────────────────────────────────────────────
   SERVICES MEGA MENU
───────────────────────────────────────────── */
function ServicesMegaMenu({ onClose }: { onClose: () => void }) {
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[860px] max-w-[95vw] z-50">
      <div className="glass-light dark:glass-dark rounded-2xl shadow-2xl border border-gray-200 dark:border-white/10 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-royal-800 to-royal-700 px-6 py-4 flex items-center justify-between">
          <div>
            <p className="text-white font-bold text-lg">All Locksmith Services</p>
            <p className="text-royal-400 text-sm">35+ professional services across Dubai</p>
          </div>
          <Link
            href="/services"
            onClick={onClose}
            className="flex items-center gap-1 text-sm text-white/80 hover:text-white transition-colors"
          >
            View All <ExternalLink className="w-3 h-3" />
          </Link>
        </div>

        {/* Category Grid */}
        <div className="p-6 grid grid-cols-2 md:grid-cols-3 gap-4">
          {SERVICES_CATEGORIES.map((cat) => (
            <div key={cat.id} className="group">
              <Link
                href={`/services#${cat.id}`}
                onClick={onClose}
                className="flex items-center gap-2 mb-2 hover:text-royal-700 dark:hover:text-royal-500 transition-colors"
              >
                {CATEGORY_ICONS[cat.id] ?? <Wrench className="w-4 h-4" />}
                <span className="text-sm font-semibold text-gray-800 dark:text-gray-200 group-hover:text-royal-700 dark:group-hover:text-royal-500 transition-colors">
                  {cat.label}
                </span>
              </Link>
              <ul className="space-y-1 pl-6">
                {cat.services.slice(0, 3).map((slug) => (
                  <li key={slug}>
                    <Link
                      href={`/services/${slug}`}
                      onClick={onClose}
                      className="text-xs text-gray-500 dark:text-gray-400 hover:text-royal-700 dark:hover:text-royal-400 transition-colors leading-relaxed block"
                    >
                      {slugToLabel(slug)}
                    </Link>
                  </li>
                ))}
                {cat.services.length > 3 && (
                  <li>
                    <Link
                      href={`/services#${cat.id}`}
                      onClick={onClose}
                      className="text-xs text-royal-600 dark:text-royal-500 hover:underline"
                    >
                      +{cat.services.length - 3} more
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          ))}
        </div>

        {/* Emergency CTA footer */}
        <div className="bg-red-50 dark:bg-red-950/30 border-t border-red-100 dark:border-red-900/30 px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-red-500" />
            <span className="text-sm font-medium text-red-700 dark:text-red-400">Emergency? We respond in 30 minutes</span>
          </div>
          <a
            href={`tel:${BUSINESS.phoneRaw}`}
            className="text-sm font-bold text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 transition-colors"
          >
            {BUSINESS.phone}
          </a>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   AREAS MEGA MENU
───────────────────────────────────────────── */
function AreasMegaMenu({ onClose }: { onClose: () => void }) {
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[560px] max-w-[95vw] z-50">
      <div className="glass-light dark:glass-dark rounded-2xl shadow-2xl border border-gray-200 dark:border-white/10 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-navy-700 to-navy-600 px-6 py-4 flex items-center justify-between">
          <div>
            <p className="text-white font-bold text-lg">Coverage Areas</p>
            <p className="text-royal-400 text-sm">Serving all of Dubai & surroundings</p>
          </div>
          <Link
            href="/areas"
            onClick={onClose}
            className="flex items-center gap-1 text-sm text-white/80 hover:text-white transition-colors"
          >
            View All <ExternalLink className="w-3 h-3" />
          </Link>
        </div>

        {/* Areas Grid */}
        <div className="p-6 grid grid-cols-3 gap-2">
          {COVERAGE_AREAS.map((area) => (
            <Link
              key={area.slug}
              href={`/areas/${area.slug}`}
              onClick={onClose}
              className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-royal-50 dark:hover:bg-royal-900/20 transition-colors group"
            >
              <MapPin className="w-3 h-3 text-royal-500 shrink-0" />
              <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-royal-700 dark:group-hover:text-royal-400 transition-colors">
                {area.name}
              </span>
            </Link>
          ))}
        </div>

        {/* Footer note */}
        <div className="bg-gray-50 dark:bg-gray-900/50 border-t border-gray-100 dark:border-white/5 px-6 py-3">
          <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
            All areas covered 24/7 · Average 30-min response
          </p>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   MOBILE DRAWER
───────────────────────────────────────────── */
function MobileDrawer({
  isOpen,
  onClose,
  pathname,
}: {
  isOpen: boolean;
  onClose: () => void;
  pathname: string;
}) {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (key: string) => {
    setExpandedSection((prev) => (prev === key ? null : key));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="drawer-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 z-40 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Drawer Panel */}
          <motion.div
            key="drawer-panel"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 h-full w-80 max-w-[90vw] bg-white dark:bg-navy-900 z-50 shadow-2xl flex flex-col"
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 dark:border-white/10">
              <Link
                href="/"
                onClick={onClose}
                className="flex items-center gap-2"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-royal-700 to-royal-800 rounded-lg flex items-center justify-center">
                  <Lock className="w-4 h-4 text-white" />
                </div>
                <span className="font-bold text-gray-900 dark:text-white text-sm leading-tight">
                  Locksmith<br />
                  <span className="text-royal-600 dark:text-royal-400">In Dubai</span>
                </span>
              </Link>
              <button
                onClick={onClose}
                aria-label="Close menu"
                className="w-9 h-9 rounded-lg flex items-center justify-center text-gray-500 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Emergency CTA */}
            <div className="px-5 pt-4">
              <a
                href={`tel:${BUSINESS.phoneRaw}`}
                className="btn btn-emergency w-full text-sm py-3"
                onClick={onClose}
              >
                <Phone className="w-4 h-4" />
                Call Now: {BUSINESS.phone}
              </a>
            </div>

            {/* Nav Links */}
            <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
              {/* Home */}
              <Link
                href="/"
                onClick={onClose}
                className={cn(
                  'flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors',
                  pathname === '/'
                    ? 'bg-royal-50 dark:bg-royal-900/30 text-royal-700 dark:text-royal-400'
                    : 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5'
                )}
              >
                <Home className="w-4 h-4 shrink-0" />
                Home
              </Link>

              {/* Services Accordion */}
              <div>
                <button
                  onClick={() => toggleSection('services')}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <Wrench className="w-4 h-4 shrink-0" />
                    Services
                  </span>
                  <motion.div
                    animate={{ rotate: expandedSection === 'services' ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {expandedSection === 'services' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="ml-4 mt-1 space-y-0.5 border-l-2 border-gray-100 dark:border-white/10 pl-4">
                        <Link
                          href="/services"
                          onClick={onClose}
                          className="block py-2 text-sm text-royal-600 dark:text-royal-400 font-semibold hover:underline"
                        >
                          All Services →
                        </Link>
                        {SERVICES_CATEGORIES.map((cat) => (
                          <div key={cat.id} className="py-1">
                            <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-1">
                              {cat.label}
                            </p>
                            {cat.services.slice(0, 4).map((slug) => (
                              <Link
                                key={slug}
                                href={`/services/${slug}`}
                                onClick={onClose}
                                className="block py-1 text-xs text-gray-600 dark:text-gray-400 hover:text-royal-600 dark:hover:text-royal-400 transition-colors"
                              >
                                {slugToLabel(slug)}
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Areas Accordion */}
              <div>
                <button
                  onClick={() => toggleSection('areas')}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 shrink-0" />
                    Areas
                  </span>
                  <motion.div
                    animate={{ rotate: expandedSection === 'areas' ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {expandedSection === 'areas' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="ml-4 mt-1 border-l-2 border-gray-100 dark:border-white/10 pl-4">
                        <Link
                          href="/areas"
                          onClick={onClose}
                          className="block py-2 text-sm text-royal-600 dark:text-royal-400 font-semibold hover:underline"
                        >
                          All Areas →
                        </Link>
                        <div className="grid grid-cols-2 gap-1 mt-1">
                          {COVERAGE_AREAS.map((area) => (
                            <Link
                              key={area.slug}
                              href={`/areas/${area.slug}`}
                              onClick={onClose}
                              className="text-xs text-gray-600 dark:text-gray-400 hover:text-royal-600 dark:hover:text-royal-400 transition-colors py-1"
                            >
                              {area.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* About */}
              <Link
                href="/about"
                onClick={onClose}
                className={cn(
                  'flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors',
                  pathname === '/about'
                    ? 'bg-royal-50 dark:bg-royal-900/30 text-royal-700 dark:text-royal-400'
                    : 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5'
                )}
              >
                <Shield className="w-4 h-4 shrink-0" />
                About
              </Link>

              {/* Blog */}
              <Link
                href="/blog"
                onClick={onClose}
                className={cn(
                  'flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors',
                  pathname.startsWith('/blog')
                    ? 'bg-royal-50 dark:bg-royal-900/30 text-royal-700 dark:text-royal-400'
                    : 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5'
                )}
              >
                <FileText className="w-4 h-4 shrink-0" />
                Blog
              </Link>

              {/* Contact */}
              <Link
                href="/contact"
                onClick={onClose}
                className={cn(
                  'flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors',
                  pathname === '/contact'
                    ? 'bg-royal-50 dark:bg-royal-900/30 text-royal-700 dark:text-royal-400'
                    : 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5'
                )}
              >
                <Mail className="w-4 h-4 shrink-0" />
                Contact
              </Link>
            </nav>

            {/* Drawer Footer */}
            <div className="px-5 py-4 border-t border-gray-100 dark:border-white/10 space-y-3">
              <a
                href={`${BUSINESS.whatsappUrl}?text=${encodeURIComponent('Hello, I need a locksmith in Dubai')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp w-full text-sm py-3"
                onClick={onClose}
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.849L.083 23.5a.5.5 0 0 0 .617.617l5.651-1.449A11.947 11.947 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.85 0-3.576-.496-5.065-1.363l-.362-.215-3.752.963.979-3.675-.236-.375A9.946 9.946 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                </svg>
                WhatsApp Us
              </a>
              <p className="text-xs text-center text-gray-400 dark:text-gray-500">
                Available 24/7 · 30-min response
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

/* ─────────────────────────────────────────────
   THEME TOGGLE
───────────────────────────────────────────── */
function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-lg bg-gray-100 dark:bg-white/10 animate-pulse" />
    );
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <motion.button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="w-9 h-9 rounded-lg flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.div
            key="sun"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Sun className="w-5 h-5 text-yellow-400" />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Moon className="w-5 h-5" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

/* ─────────────────────────────────────────────
   NAVBAR MAIN
───────────────────────────────────────────── */
export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const menuTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 20);
  });

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileOpen(false);
    setActiveMenu(null);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileOpen]);

  const openMenu = useCallback((menu: string) => {
    if (menuTimerRef.current) clearTimeout(menuTimerRef.current);
    setActiveMenu(menu);
  }, []);

  const closeMenu = useCallback(() => {
    menuTimerRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 120);
  }, []);

  const cancelClose = useCallback(() => {
    if (menuTimerRef.current) clearTimeout(menuTimerRef.current);
  }, []);

  const navLinks = [
    { label: 'Home', href: '/', hasMega: false },
    { label: 'Services', href: '/services', hasMega: true, megaKey: 'services' },
    { label: 'Areas', href: '/areas', hasMega: true, megaKey: 'areas' },
    { label: 'About', href: '/about', hasMega: false },
    { label: 'Blog', href: '/blog', hasMega: false },
    { label: 'Contact', href: '/contact', hasMega: false },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          'fixed top-0 left-0 right-0 z-30 transition-all duration-300',
          isScrolled
            ? 'bg-white/95 dark:bg-navy-900/95 backdrop-blur-xl shadow-lg border-b border-gray-200/50 dark:border-white/10'
            : 'bg-transparent'
        )}
        role="banner"
      >
        <div className="container-premium">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* ── Logo ── */}
            <Link
              href="/"
              className="flex items-center gap-2.5 group shrink-0"
              aria-label="Locksmith In Dubai — Home"
            >
              <motion.div
                whileHover={{ rotate: -10, scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                className="w-10 h-10 bg-gradient-to-br from-royal-700 to-royal-900 rounded-xl flex items-center justify-center shadow-lg shadow-royal-900/20"
              >
                <Lock className="w-5 h-5 text-white" />
              </motion.div>
              <div className="leading-tight">
                <span
                  className={cn(
                    'block font-bold text-base leading-none transition-colors',
                    isScrolled || isMobileOpen
                      ? 'text-gray-900 dark:text-white'
                      : 'text-white'
                  )}
                >
                  Locksmith
                </span>
                <span
                  className={cn(
                    'block text-sm font-semibold leading-none transition-colors',
                    isScrolled || isMobileOpen
                      ? 'text-royal-600 dark:text-royal-400'
                      : 'text-royal-300'
                  )}
                >
                  In Dubai
                </span>
              </div>
            </Link>

            {/* ── Desktop Navigation ── */}
            <nav
              className="hidden lg:flex items-center gap-1"
              role="navigation"
              aria-label="Main navigation"
            >
              {navLinks.map((link) => (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => link.hasMega && openMenu(link.megaKey!)}
                  onMouseLeave={link.hasMega ? closeMenu : undefined}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      'flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                      isScrolled
                        ? isActive(link.href)
                          ? 'text-royal-600 dark:text-royal-400 bg-royal-50 dark:bg-royal-900/20'
                          : 'text-gray-700 dark:text-gray-200 hover:text-royal-600 dark:hover:text-royal-400 hover:bg-gray-50 dark:hover:bg-white/5'
                        : isActive(link.href)
                          ? 'text-white bg-white/15'
                          : 'text-white/80 hover:text-white hover:bg-white/10'
                    )}
                    aria-current={isActive(link.href) ? 'page' : undefined}
                  >
                    {link.label}
                    {link.hasMega && (
                      <motion.div
                        animate={{ rotate: activeMenu === link.megaKey ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="w-3.5 h-3.5" />
                      </motion.div>
                    )}
                  </Link>

                  {/* Mega Menus */}
                  <AnimatePresence>
                    {link.hasMega && activeMenu === link.megaKey && (
                      <motion.div
                        key={link.megaKey}
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                        onMouseEnter={cancelClose}
                        onMouseLeave={closeMenu}
                      >
                        {link.megaKey === 'services' ? (
                          <ServicesMegaMenu onClose={() => setActiveMenu(null)} />
                        ) : (
                          <AreasMegaMenu onClose={() => setActiveMenu(null)} />
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* ── Desktop Right Actions ── */}
            <div className="hidden lg:flex items-center gap-2">
              <ThemeToggle />

              {/* Phone CTA */}
              <a
                href={`tel:${BUSINESS.phoneRaw}`}
                className={cn(
                  'flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200',
                  isScrolled
                    ? 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                )}
              >
                <Phone className="w-4 h-4 shrink-0" />
                {BUSINESS.phone}
              </a>

              {/* Emergency Call Button */}
              <motion.a
                href={`tel:${BUSINESS.phoneRaw}`}
                className="btn btn-emergency text-sm px-5 py-2.5"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Phone className="w-4 h-4" />
                Call Now
              </motion.a>
            </div>

            {/* ── Mobile Right Actions ── */}
            <div className="flex lg:hidden items-center gap-2">
              <ThemeToggle />
              <a
                href={`tel:${BUSINESS.phoneRaw}`}
                aria-label={`Call ${BUSINESS.phone}`}
                className={cn(
                  'w-9 h-9 rounded-lg flex items-center justify-center transition-colors',
                  isScrolled
                    ? 'bg-royal-600 text-white'
                    : 'bg-white/15 text-white'
                )}
              >
                <Phone className="w-4 h-4" />
              </a>
              <button
                onClick={() => setIsMobileOpen(true)}
                aria-label="Open navigation menu"
                aria-expanded={isMobileOpen}
                className={cn(
                  'w-9 h-9 rounded-lg flex items-center justify-center transition-colors',
                  isScrolled
                    ? 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/10'
                    : 'text-white hover:bg-white/10'
                )}
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>

          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <MobileDrawer
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
        pathname={pathname}
      />
    </>
  );
}

export default Navbar;

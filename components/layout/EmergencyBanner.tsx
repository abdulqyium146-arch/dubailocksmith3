'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, X, AlertTriangle } from 'lucide-react';
import { BUSINESS } from '@/lib/constants';

const STORAGE_KEY = 'dubai_locksmith_emergency_banner_dismissed';

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.849L.083 23.5a.5.5 0 0 0 .617.617l5.651-1.449A11.947 11.947 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.85 0-3.576-.496-5.065-1.363l-.362-.215-3.752.963.979-3.675-.236-.375A9.946 9.946 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
    </svg>
  );
}

export function EmergencyBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Check sessionStorage — only show if not dismissed this session
    const dismissed = sessionStorage.getItem(STORAGE_KEY);
    if (!dismissed) {
      // Small delay so the page renders first
      const timer = setTimeout(() => setVisible(true), 600);
      return () => clearTimeout(timer);
    }
  }, []);

  const dismiss = () => {
    setVisible(false);
    try {
      sessionStorage.setItem(STORAGE_KEY, '1');
    } catch {
      // sessionStorage may be unavailable (private browsing edge cases)
    }
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="emergency-banner"
          initial={{ y: '-100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 25, mass: 0.8 }}
          className="fixed top-0 left-0 right-0 z-[60] emergency-banner"
          role="alert"
          aria-live="polite"
          aria-label="Emergency locksmith service banner"
        >
          {/* Animated shimmer overlay */}
          <div
            className="absolute inset-0 pointer-events-none overflow-hidden"
            aria-hidden="true"
          >
            <div
              className="absolute inset-y-0 w-32 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-20deg] animate-shimmer"
              style={{ left: '-8rem' }}
            />
          </div>

          <div className="container-premium relative">
            <div className="flex items-center justify-between gap-3 py-2.5 sm:py-3">

              {/* Left: Icon + Message */}
              <div className="flex items-center gap-3 min-w-0 flex-1">
                {/* Pulsing alert icon */}
                <div className="relative shrink-0">
                  <div className="absolute inset-0 bg-white/30 rounded-full animate-ping-slow" />
                  <div className="relative w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <AlertTriangle className="w-4 h-4 text-white" />
                  </div>
                </div>

                {/* Message */}
                <div className="min-w-0">
                  <p className="text-white font-bold text-sm sm:text-base leading-tight">
                    <span className="hidden sm:inline">🚨 24/7 Emergency Locksmith</span>
                    <span className="inline sm:hidden">🚨 24/7 Emergency</span>
                    <span className="text-red-100 font-semibold ml-1 sm:ml-2 text-xs sm:text-sm">
                      · 30 Min Response
                    </span>
                  </p>
                  <p className="text-red-100 text-xs hidden md:block mt-0.5">
                    Locked out? We're on our way. Licensed locksmiths covering all of Dubai.
                  </p>
                </div>
              </div>

              {/* Center/Right: Action buttons */}
              <div className="flex items-center gap-2 shrink-0">
                {/* Phone CTA — main action */}
                <motion.a
                  href={`tel:${BUSINESS.phoneRaw}`}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="flex items-center gap-2 bg-white text-red-600 hover:bg-red-50 transition-colors font-bold px-3 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm shadow-lg whitespace-nowrap"
                  aria-label={`Call emergency locksmith: ${BUSINESS.phone}`}
                >
                  <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                  <span className="hidden sm:inline text-sm sm:text-base">{BUSINESS.phone}</span>
                  <span className="inline sm:hidden">Call</span>
                </motion.a>

                {/* WhatsApp CTA */}
                <motion.a
                  href={`${BUSINESS.whatsappUrl}?text=${encodeURIComponent('Emergency! I am locked out and need a locksmith in Dubai immediately.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="hidden sm:flex items-center gap-2 bg-green-500 hover:bg-green-400 transition-colors text-white font-bold px-4 py-2 rounded-full text-xs sm:text-sm shadow-lg whitespace-nowrap"
                  aria-label="Contact via WhatsApp"
                >
                  <WhatsAppIcon className="w-4 h-4 shrink-0" />
                  WhatsApp
                </motion.a>

                {/* Dismiss button */}
                <motion.button
                  onClick={dismiss}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Dismiss emergency banner"
                  className="min-w-[44px] min-h-[44px] rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center transition-colors ml-1"
                >
                  <X className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default EmergencyBanner;

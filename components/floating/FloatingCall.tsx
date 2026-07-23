'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone } from 'lucide-react';
import { BUSINESS } from '@/lib/constants';

export function FloatingCall() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className="fixed bottom-6 right-24 z-40 flex flex-col items-center gap-2"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            key="call-tooltip"
            initial={{ opacity: 0, y: 6, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.9 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="
              absolute bottom-full mb-2 right-0
              bg-gray-900 dark:bg-gray-800 text-white text-xs font-semibold
              px-3 py-1.5 rounded-lg shadow-xl whitespace-nowrap
              pointer-events-none
            "
            role="tooltip"
          >
            Call Now · 24/7
            <span className="absolute top-full right-4 -mt-px border-4 border-transparent border-t-gray-900 dark:border-t-gray-800" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Outer pulse ring */}
      <span
        className="absolute inset-0 rounded-full bg-royal-600 opacity-40 animate-ping-slow pointer-events-none"
        style={{ animationDelay: '0.5s' }}
        aria-hidden="true"
      />

      {/* Button */}
      <motion.a
        href={`tel:${BUSINESS.phoneRaw}`}
        aria-label={`Call us now: ${BUSINESS.phone}`}
        className="
          relative w-14 h-14 rounded-full
          bg-gradient-to-br from-royal-500 to-royal-800
          shadow-lg shadow-royal-700/40
          flex items-center justify-center
          text-white
          cursor-pointer
          select-none
        "
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.92 }}
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          scale: {
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.4,
          },
        }}
      >
        {/* Inner vibrate animation on the icon */}
        <motion.div
          animate={{
            rotate: [0, -12, 12, -8, 8, -4, 4, 0],
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatDelay: 3,
            ease: 'easeInOut',
          }}
        >
          <Phone className="w-6 h-6" aria-hidden="true" />
        </motion.div>
      </motion.a>
    </div>
  );
}

export default FloatingCall;

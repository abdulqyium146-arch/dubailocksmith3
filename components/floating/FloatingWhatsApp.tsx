'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BUSINESS } from '@/lib/constants';

const WA_URL = `${BUSINESS.whatsappUrl}?text=${encodeURIComponent(
  'Hello, I need a locksmith in Dubai'
)}`;

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.849L.083 23.5a.5.5 0 0 0 .617.617l5.651-1.449A11.947 11.947 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.85 0-3.576-.496-5.065-1.363l-.362-.215-3.752.963.979-3.675-.236-.375A9.946 9.946 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
    </svg>
  );
}

export function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-2"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            key="wa-tooltip"
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
            Chat on WhatsApp
            {/* Arrow */}
            <span className="absolute top-full right-4 -mt-px border-4 border-transparent border-t-gray-900 dark:border-t-gray-800" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Outer pulse ring */}
      <span
        className="absolute inset-0 rounded-full bg-green-500 opacity-50 animate-ping-slow pointer-events-none"
        aria-hidden="true"
      />

      {/* Button */}
      <motion.a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="
          relative w-14 h-14 rounded-full
          bg-gradient-to-br from-green-400 to-green-600
          shadow-lg shadow-green-500/40
          flex items-center justify-center
          text-white
          cursor-pointer
          select-none
        "
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.92 }}
        animate={{
          y: [0, -6, 0],
        }}
        transition={{
          y: {
            duration: 2.5,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        }}
      >
        <WhatsAppIcon />
      </motion.a>
    </div>
  );
}

export default FloatingWhatsApp;

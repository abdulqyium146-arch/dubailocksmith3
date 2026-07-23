'use client';

import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import { BUSINESS } from '@/lib/constants';

const WA_URL = `${BUSINESS.whatsappUrl}?text=${encodeURIComponent(
  'Hello, I need a locksmith in Dubai'
)}`;

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.849L.083 23.5a.5.5 0 0 0 .617.617l5.651-1.449A11.947 11.947 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.85 0-3.576-.496-5.065-1.363l-.362-.215-3.752.963.979-3.675-.236-.375A9.946 9.946 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
    </svg>
  );
}

export function MobileBottomBar() {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.8, type: 'spring', stiffness: 260, damping: 25 }}
      className="
        fixed bottom-0 left-0 right-0
        z-40
        md:hidden
      "
      role="navigation"
      aria-label="Quick contact actions"
    >
      {/* Frosted glass container */}
      <div
        className="
          glass-light dark:glass-dark
          border-t border-gray-200/70 dark:border-white/10
          shadow-[0_-8px_32px_rgba(0,0,0,0.12)]
          pb-[env(safe-area-inset-bottom,0px)]
        "
      >
        <div className="flex items-stretch h-16">

          {/* ── Call Button ── */}
          <motion.a
            href={`tel:${BUSINESS.phoneRaw}`}
            aria-label={`Call now: ${BUSINESS.phone}`}
            style={{ touchAction: 'manipulation' }}
            className="
              flex-1 flex flex-col items-center justify-center gap-1
              bg-gradient-to-br from-royal-600 to-royal-800
              text-white
              rounded-none
              relative
              overflow-hidden
              active:brightness-90
              transition-[filter]
            "
            whileTap={{ scale: 0.97 }}
          >
            {/* Subtle shine */}
            <span
              className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none"
              aria-hidden="true"
            />

            {/* Pulse ring on icon */}
            <div className="relative">
              <span
                className="absolute inset-0 rounded-full bg-white/30 animate-ping-slow pointer-events-none"
                aria-hidden="true"
              />
              <Phone className="relative w-5 h-5" aria-hidden="true" />
            </div>

            <span className="text-xs font-bold tracking-wide leading-none">
              Call Now
            </span>
          </motion.a>

          {/* ── Divider ── */}
          <div className="w-px bg-white/20 dark:bg-white/10 shrink-0" aria-hidden="true" />

          {/* ── WhatsApp Button ── */}
          <motion.a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Message us on WhatsApp"
            style={{ touchAction: 'manipulation' }}
            className="
              flex-1 flex flex-col items-center justify-center gap-1
              bg-gradient-to-br from-green-500 to-green-700
              text-white
              rounded-none
              relative
              overflow-hidden
              active:brightness-90
              transition-[filter]
            "
            whileTap={{ scale: 0.97 }}
          >
            {/* Subtle shine */}
            <span
              className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none"
              aria-hidden="true"
            />

            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <WhatsAppIcon className="w-5 h-5" />
            </motion.div>

            <span className="text-xs font-bold tracking-wide leading-none">
              WhatsApp
            </span>
          </motion.a>

        </div>
      </div>
    </motion.div>
  );
}

export default MobileBottomBar;

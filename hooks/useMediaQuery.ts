'use client';

import { useState, useEffect, useCallback } from 'react';

type Breakpoint = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

const BREAKPOINTS: Record<Breakpoint, string> = {
  sm: '(min-width: 640px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 1024px)',
  xl: '(min-width: 1280px)',
  '2xl': '(min-width: 1536px)',
};

/**
 * Tracks whether a CSS media query currently matches.
 *
 * @param query - A raw CSS media query string, e.g. '(min-width: 768px)',
 *                or a Tailwind-style breakpoint key: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
 * @returns boolean — true if the media query matches the current viewport
 */
export function useMediaQuery(query: string | Breakpoint): boolean {
  const resolvedQuery = (BREAKPOINTS as Record<string, string>)[query] ?? query;

  const getMatches = useCallback((): boolean => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia(resolvedQuery).matches;
  }, [resolvedQuery]);

  const [matches, setMatches] = useState<boolean>(getMatches);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQueryList = window.matchMedia(resolvedQuery);

    // Set initial value
    setMatches(mediaQueryList.matches);

    const listener = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    // Modern API
    if (mediaQueryList.addEventListener) {
      mediaQueryList.addEventListener('change', listener);
      return () => mediaQueryList.removeEventListener('change', listener);
    } else {
      // Legacy fallback
      // eslint-disable-next-line @typescript-eslint/no-deprecated
      mediaQueryList.addListener(listener);
      return () => {
        // eslint-disable-next-line @typescript-eslint/no-deprecated
        mediaQueryList.removeListener(listener);
      };
    }
  }, [resolvedQuery]);

  return matches;
}

/**
 * Convenience hook that returns an object of boolean flags for each Tailwind breakpoint.
 *
 * Usage:
 *   const { isMd, isLg } = useBreakpoints();
 */
export function useBreakpoints() {
  const isSm = useMediaQuery('sm');
  const isMd = useMediaQuery('md');
  const isLg = useMediaQuery('lg');
  const isXl = useMediaQuery('xl');
  const is2xl = useMediaQuery('2xl');

  return {
    isSm,
    isMd,
    isLg,
    isXl,
    is2xl,
    isMobile: !isMd,
    isTablet: isMd && !isLg,
    isDesktop: isLg,
  };
}

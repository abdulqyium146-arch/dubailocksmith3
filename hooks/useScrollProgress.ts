'use client';

import { useState, useEffect, useCallback } from 'react';

interface UseScrollProgressOptions {
  /** Throttle update in milliseconds (default: 16 ~60fps) */
  throttleMs?: number;
  /** Element ref to track scroll within (defaults to window) */
  target?: React.RefObject<HTMLElement | null>;
}

interface ScrollProgressState {
  /** Scroll progress as a value between 0 and 1 */
  progress: number;
  /** Raw scroll position in pixels */
  scrollY: number;
  /** Whether the page has been scrolled at all */
  hasScrolled: boolean;
  /** Scroll direction: 'up' | 'down' | null */
  direction: 'up' | 'down' | null;
}

export function useScrollProgress(options: UseScrollProgressOptions = {}): ScrollProgressState {
  const { throttleMs = 16, target } = options;

  const [state, setState] = useState<ScrollProgressState>({
    progress: 0,
    scrollY: 0,
    hasScrolled: false,
    direction: null,
  });

  const prevScrollY = useState<number>(0);

  const calculateProgress = useCallback(() => {
    const element = target?.current;

    if (element) {
      const { scrollTop, scrollHeight, clientHeight } = element;
      const maxScroll = scrollHeight - clientHeight;
      const currentProgress = maxScroll > 0 ? scrollTop / maxScroll : 0;

      setState((prev) => ({
        progress: Math.min(1, Math.max(0, currentProgress)),
        scrollY: scrollTop,
        hasScrolled: scrollTop > 0,
        direction: scrollTop > prev.scrollY ? 'down' : scrollTop < prev.scrollY ? 'up' : prev.direction,
      }));
    } else {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const maxScroll = docHeight - winHeight;
      const currentProgress = maxScroll > 0 ? scrollTop / maxScroll : 0;

      setState((prev) => ({
        progress: Math.min(1, Math.max(0, currentProgress)),
        scrollY: scrollTop,
        hasScrolled: scrollTop > 0,
        direction:
          scrollTop > prev.scrollY ? 'down' : scrollTop < prev.scrollY ? 'up' : prev.direction,
      }));
    }
  }, [target]);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    const handleScroll = () => {
      if (timeoutId !== null) return;
      timeoutId = setTimeout(() => {
        calculateProgress();
        timeoutId = null;
      }, throttleMs);
    };

    const scrollTarget = target?.current ?? window;
    scrollTarget.addEventListener('scroll', handleScroll, { passive: true });

    // Initial calculation
    calculateProgress();

    return () => {
      scrollTarget.removeEventListener('scroll', handleScroll);
      if (timeoutId !== null) clearTimeout(timeoutId);
    };
  }, [calculateProgress, target, throttleMs]);

  void prevScrollY;

  return state;
}

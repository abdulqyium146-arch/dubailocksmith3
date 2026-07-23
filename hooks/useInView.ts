'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

interface UseInViewOptions {
  /** Root margin for the intersection observer (default: '0px') */
  rootMargin?: string;
  /** Threshold for intersection (default: 0.1) */
  threshold?: number | number[];
  /** Only trigger once — once in view, stops observing (default: false) */
  triggerOnce?: boolean;
  /** Delay before marking as in-view, in ms (default: 0) */
  delay?: number;
  /** Root element to use as viewport (default: browser viewport) */
  root?: Element | null;
}

interface UseInViewReturn<T extends Element> {
  /** Ref to attach to the target element */
  ref: React.RefObject<T>;
  /** Whether the element is currently in the viewport */
  inView: boolean;
  /** Whether the element has ever been in the viewport */
  hasBeenInView: boolean;
  /** The raw IntersectionObserverEntry, if available */
  entry: IntersectionObserverEntry | null;
}

export function useInView<T extends Element = HTMLDivElement>(
  options: UseInViewOptions = {}
): UseInViewReturn<T> {
  const {
    rootMargin = '0px',
    threshold = 0.1,
    triggerOnce = false,
    delay = 0,
    root = null,
  } = options;

  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  const [hasBeenInView, setHasBeenInView] = useState(false);
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);
  const delayTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleIntersect = useCallback(
    (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      const [currentEntry] = entries;
      if (!currentEntry) return;

      setEntry(currentEntry);

      if (currentEntry.isIntersecting) {
        if (delay > 0) {
          delayTimerRef.current = setTimeout(() => {
            setInView(true);
            setHasBeenInView(true);
            if (triggerOnce && ref.current) {
              observer.unobserve(ref.current);
            }
          }, delay);
        } else {
          setInView(true);
          setHasBeenInView(true);
          if (triggerOnce && ref.current) {
            observer.unobserve(ref.current);
          }
        }
      } else {
        if (!triggerOnce) {
          if (delayTimerRef.current) {
            clearTimeout(delayTimerRef.current);
          }
          setInView(false);
        }
      }
    },
    [delay, triggerOnce]
  );

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Skip if already in view and triggerOnce
    if (triggerOnce && hasBeenInView) return;

    const observer = new IntersectionObserver(handleIntersect, {
      root,
      rootMargin,
      threshold,
    });

    observer.observe(element);

    return () => {
      observer.disconnect();
      if (delayTimerRef.current) {
        clearTimeout(delayTimerRef.current);
      }
    };
  }, [root, rootMargin, threshold, handleIntersect, triggerOnce, hasBeenInView]);

  return { ref, inView, hasBeenInView, entry };
}

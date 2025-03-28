import { useState, useEffect, useRef, MutableRefObject } from 'react';
import { useAnimation, AnimationControls } from 'framer-motion';

// Use a more specific type for the hook result
interface UseAnimationHookResult {
  controls: AnimationControls;
  // Use a less strict type for the ref
  ref: MutableRefObject<HTMLDivElement | null>;
}

/**
 * Custom hook for triggering animations when an element is in view
 * @param threshold The amount element should be visible before triggering (0-1)
 * @returns Animation controls and ref to attach to the element
 */
export function useInViewAnimation(threshold = 0.1): UseAnimationHookResult {
  const controls = useAnimation();
  // Use the correct type from the beginning
  const elementRef = useRef<HTMLDivElement>(null);
  const [_inView, setInView] = useState(false);

  useEffect(() => {
    const currentElement = elementRef.current;
    if (!currentElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isInView = entry.isIntersecting;
        setInView(isInView);
        if (isInView) {
          controls.start('visible');
        }
      },
      { threshold }
    );

    observer.observe(currentElement);

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [controls, threshold]);

  return {
    controls,
    ref: elementRef,
  };
}

/**
 * Custom hook for delayed animation start
 * @param delay Delay in seconds before starting animation
 * @returns Animation controls
 */
export function useDelayedAnimation(delay = 0.3): AnimationControls {
  const controls = useAnimation();

  useEffect(() => {
    const timer = setTimeout(() => {
      controls.start('visible');
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [controls, delay]);

  return controls;
}

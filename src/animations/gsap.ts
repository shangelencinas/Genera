import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };

export const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  try {
    const hasReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (hasReduced) return true;
  } catch {
    // ignore
  }
  return false;
};

/**
 * Checks whether the app is running embedded in an iframe (e.g. Elementor / WordPress)
 */
export const isInIframe = (): boolean => {
  if (typeof window === 'undefined') return false;
  try {
    return window.self !== window.top;
  } catch {
    return true;
  }
};

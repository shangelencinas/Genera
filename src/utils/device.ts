/**
 * Lightweight device, Safari/iOS, and iframe detection utilities.
 * Kept dependency-free so mobile/iOS clients never pull in GSAP or Three.js just to check flags.
 */

export const isInIframe = (): boolean => {
  if (typeof window === 'undefined') return false;
  try {
    return window.self !== window.top;
  } catch {
    return true;
  }
};

export const isIOSDevice = (): boolean => {
  if (typeof navigator === 'undefined') return false;
  try {
    const ua = navigator.userAgent || '';
    const isClassicIOS = /iPad|iPhone|iPod/.test(ua);
    const isIPadOS =
      navigator.platform === 'MacIntel' &&
      typeof navigator.maxTouchPoints === 'number' &&
      navigator.maxTouchPoints > 1;
    return isClassicIOS || isIPadOS;
  } catch {
    return false;
  }
};

export const isMobileViewport = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < 768;
};

export const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined' || !window.matchMedia) return false;
  try {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  } catch {
    return false;
  }
};

export const hasSaveDataEnabled = (): boolean => {
  if (typeof navigator === 'undefined') return false;
  try {
    const nav = navigator as Navigator & { connection?: { saveData?: boolean } };
    return Boolean(nav.connection?.saveData);
  } catch {
    return false;
  }
};

/**
 * Skip heavy JS scroll animations on iOS, mobile viewports, iframes, or reduced motion
 * to guarantee instant first paint and zero stuck opacity:0 states.
 */
export const shouldUseLightEffects = (): boolean => {
  return isIOSDevice() || isMobileViewport() || isInIframe() || prefersReducedMotion() || hasSaveDataEnabled();
};

/**
 * Helper to communicate content height to WordPress / Elementor parent iframe
 * Target format:
 * {
 *   type: 'GENERA_AUTOMOTRIZ_RESIZE',
 *   height: calculatedHeight
 * }
 */

let lastSentHeight = 0;
let rafId: number | null = null;
let isInitialized = false;

/**
 * Calculates the real content height from body and documentElement
 */
export const calculateContentHeight = (): number => {
  if (typeof document === 'undefined') return 0;

  const body = document.body;
  const doc = document.documentElement;

  if (!body || !doc) return 0;

  // Real content height taking max of scroll and offset heights
  // and ensuring we don't return subpixel jitter
  const height = Math.max(
    body.scrollHeight,
    doc.scrollHeight,
    body.offsetHeight,
    doc.offsetHeight,
    body.clientHeight,
    doc.clientHeight
  );

  return Math.ceil(height);
};

/**
 * Sends height message to window.parent if it differs from the last sent value
 */
export const notifyParentHeight = (force = false): void => {
  if (typeof window === 'undefined') return;

  // Cancel any scheduled animation frame so updates are cleanly batched
  if (rafId !== null) {
    cancelAnimationFrame(rafId);
  }

  rafId = requestAnimationFrame(() => {
    rafId = null;

    try {
      const currentHeight = calculateContentHeight();

      // Only notify if there is a real change (> 2px to avoid subpixel micro-jitter)
      if (!force && Math.abs(currentHeight - lastSentHeight) < 2) {
        return;
      }

      // Check if we are inside an iframe (window.parent is different from window)
      // Even if not in an iframe, postMessage to parent is harmless, but checking avoids useless postMessage
      if (window.parent && window.parent !== window) {
        window.parent.postMessage(
          {
            type: 'GENERA_AUTOMOTRIZ_RESIZE',
            height: currentHeight
          },
          '*'
        );
      }

      lastSentHeight = currentHeight;
    } catch (e) {
      // Safe catch for restricted browser contexts
      console.warn('Could not postMessage height to parent', e);
    }
  });
};

/**
 * Sets up listeners for DOM, window, fonts, images and ResizeObserver
 */
export const initIframeResizeBridge = (): (() => void) => {
  if (typeof window === 'undefined' || isInitialized) {
    // Force a height update on re-entry (e.g. view switch)
    notifyParentHeight(true);
    return () => {};
  }

  isInitialized = true;

  // 1. Initial calculation
  notifyParentHeight(true);

  // 2. DOM Ready & Load events
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => notifyParentHeight(true), { once: true });
  }

  const handleWindowLoad = () => notifyParentHeight(true);
  window.addEventListener('load', handleWindowLoad, { passive: true, once: true });

  // 3. Window resize and orientation change
  const handleResize = () => notifyParentHeight();
  window.addEventListener('resize', handleResize, { passive: true });
  window.addEventListener('orientationchange', handleResize, { passive: true });

  // 4. External Fonts Loading (document.fonts.ready)
  if ('fonts' in document && document.fonts?.ready) {
    document.fonts.ready.then(() => {
      notifyParentHeight(true);
    }).catch(() => {});
  }

  // 5. ResizeObserver on document.body and document.documentElement
  let resizeObserver: ResizeObserver | null = null;
  if ('ResizeObserver' in window) {
    resizeObserver = new ResizeObserver(() => {
      notifyParentHeight();
    });

    if (document.body) {
      resizeObserver.observe(document.body);
    }
    if (document.documentElement) {
      resizeObserver.observe(document.documentElement);
    }
  }

  // 6. MutationObserver to catch dynamically added nodes / modals / sections
  let mutationObserver: MutationObserver | null = null;
  if ('MutationObserver' in window && document.body) {
    mutationObserver = new MutationObserver(() => {
      notifyParentHeight();
    });
    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['style', 'class', 'hidden']
    });
  }

  // 7. Track image load events (including lazy loaded images)
  const handleImageLoad = (e: Event) => {
    if (e.target && (e.target as HTMLElement).tagName === 'IMG') {
      notifyParentHeight();
    }
  };
  document.addEventListener('load', handleImageLoad, { capture: true, passive: true });

  // 8. Timed safety checks during initial lifecycle (100ms, 300ms, 600ms, 1200ms, 2500ms)
  const timeouts = [
    setTimeout(() => notifyParentHeight(true), 100),
    setTimeout(() => notifyParentHeight(true), 300),
    setTimeout(() => notifyParentHeight(true), 600),
    setTimeout(() => notifyParentHeight(true), 1200),
    setTimeout(() => notifyParentHeight(true), 2500),
    setTimeout(() => notifyParentHeight(true), 4000)
  ];

  return () => {
    isInitialized = false;
    if (rafId !== null) cancelAnimationFrame(rafId);
    window.removeEventListener('resize', handleResize);
    window.removeEventListener('orientationchange', handleResize);
    document.removeEventListener('load', handleImageLoad, { capture: true });
    if (resizeObserver) resizeObserver.disconnect();
    if (mutationObserver) mutationObserver.disconnect();
    timeouts.forEach(clearTimeout);
  };
};

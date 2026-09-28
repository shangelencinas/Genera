import React, { useLayoutEffect, useRef } from 'react';
import { PeisaLogo } from './BrandLogos';
import { Handshake } from 'lucide-react';
import { gsap, prefersReducedMotion } from '../animations/gsap';

export const PeisaPartnership: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 85%',
            once: true
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-12 sm:py-16 bg-[#060D17] border-t border-slate-800/80 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div
          ref={containerRef}
          className="flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-8 p-4 min-[360px]:p-5 sm:p-8 rounded-2xl bg-[#091526]/50 border border-slate-800 max-w-full overflow-hidden"
        >
          {/* Text Info */}
          <div className="text-center md:text-left min-w-0">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 text-[10.5px] sm:text-xs font-semibold text-[#38BDF8] uppercase tracking-wider mb-1.5 sm:mb-2">
              <Handshake className="w-3.5 h-3.5" />
              <span>RESPALDO COMERCIAL</span>
            </div>
            <h3 className="text-base min-[360px]:text-lg sm:text-2xl font-bold text-white mb-1.5 sm:mb-2 leading-tight">
              ALIANZAS QUE FORTALECEN NUESTRO SERVICIO
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
              Trabajamos con aliados comerciales para ofrecer soluciones y refacciones de calidad certificada para cada marca y modelo.
            </p>
          </div>

          {/* Clean PEISA Logo on Pristine Card */}
          <div className="shrink-0 flex items-center justify-center max-w-full w-full sm:w-auto">
            <PeisaLogo className="h-11 sm:h-14 max-w-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

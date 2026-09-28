import React, { useLayoutEffect, useRef } from 'react';
import { TRUST_POINTS } from '../data/trustPoints';
import { ShieldCheck, UserCheck, Settings, Award, CheckCircle2, Shield } from 'lucide-react';
import { gsap, prefersReducedMotion } from '../animations/gsap';

export const WhyChooseUs: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 85%',
            once: true
          }
        }
      );

      if (cardsRef.current) {
        const cards = Array.from(cardsRef.current.children);
        gsap.fromTo(
          cards,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 80%',
              once: true
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const getIcon = (icon: string) => {
    switch (icon) {
      case 'shield-check':
        return <ShieldCheck className="w-6 h-6 text-[#38BDF8]" />;
      case 'user-check':
        return <UserCheck className="w-6 h-6 text-[#38BDF8]" />;
      case 'settings':
        return <Settings className="w-6 h-6 text-[#38BDF8]" />;
      case 'award':
        return <Award className="w-6 h-6 text-[#38BDF8]" />;
      case 'badge-check':
        return <CheckCircle2 className="w-6 h-6 text-[#34D399]" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-[#38BDF8]" />;
    }
  };

  return (
    <section
      id="por-que-genera"
      ref={sectionRef}
      className="relative py-14 sm:py-20 lg:py-32 bg-[#050C17] text-white overflow-hidden border-t border-slate-800"
    >
      {/* Volumetric Radial Glows */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#164B9B]/20 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Blueprint Engineering Lines in Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" aria-hidden="true">
        <svg viewBox="0 0 1200 800" className="w-full h-full object-cover">
          <line x1="0" y1="200" x2="1200" y2="200" stroke="#1769E0" strokeWidth="1" strokeDasharray="8 8" />
          <line x1="0" y1="400" x2="1200" y2="400" stroke="#1769E0" strokeWidth="1" strokeDasharray="8 8" />
          <line x1="0" y1="600" x2="1200" y2="600" stroke="#1769E0" strokeWidth="1" strokeDasharray="8 8" />
          <circle cx="600" cy="400" r="300" fill="none" stroke="#1769E0" strokeWidth="1.2" strokeDasharray="6 6" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        {/* Title Block */}
        <div ref={titleRef} className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 lg:mb-20">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-[#164B9B]/25 border border-[#1769E0]/40 text-[#38BDF8] text-[10.5px] sm:text-xs font-bold tracking-wider sm:tracking-widest uppercase mb-3 sm:mb-4 shadow-[0_0_12px_rgba(23,105,224,0.3)]">
            <Shield className="w-3.5 h-3.5" />
            <span>GARANTÍA Y COMPROMISO</span>
          </div>

          <h2 className="text-2xl min-[360px]:text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-2.5 sm:mb-4 leading-tight">
            TU AUTO EN BUENAS MANOS
          </h2>

          <p className="text-xs min-[360px]:text-sm sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto">
            En Genera Automotriz combinamos experiencia, tecnología y atención honesta para ofrecerte soluciones confiables.
          </p>
        </div>

        {/* 5 Benefits Cards Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6 lg:gap-8"
        >
          {TRUST_POINTS.map((item, index) => (
            <div
              key={item.id}
              className={`p-4 min-[360px]:p-5 sm:p-7 md:p-8 rounded-2xl bg-gradient-to-b from-[#091526]/90 to-[#07111F]/90 backdrop-blur-md border border-slate-800 hover:border-[#1769E0]/60 transition-all duration-300 hover:-translate-y-1.5 shadow-xl hover:shadow-[0_15px_30px_rgba(0,0,0,0.5),0_0_20px_rgba(23,105,224,0.2)] group ${
                index === 3 || index === 4 ? 'lg:col-span-1.5' : ''
              }`}
            >
              <div className="w-10 h-10 min-[360px]:w-12 min-[360px]:h-12 sm:w-13 sm:h-13 rounded-2xl bg-[#164B9B]/20 border border-[#1769E0]/40 flex items-center justify-center p-2.5 sm:p-3 text-[#38BDF8] mb-4 sm:mb-6 group-hover:scale-110 group-hover:bg-[#164B9B]/35 group-hover:shadow-[0_0_15px_rgba(56,189,248,0.4)] transition-all">
                {getIcon(item.icon)}
              </div>

              <h3 className="text-base sm:text-lg font-black text-white uppercase tracking-wider mb-1.5 sm:mb-2.5 font-sans group-hover:text-[#38BDF8] transition-colors">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import React, { useLayoutEffect, useRef } from 'react';
import { ShieldCheck, UserCheck, Settings, Award, CheckCircle2 } from 'lucide-react';
import { gsap, prefersReducedMotion } from '../animations/gsap';

export const TrustBar: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      if (!itemsRef.current) return;
      const children = Array.from(itemsRef.current.children);

      gsap.fromTo(
        children,
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 85%',
            once: true
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const items = [
    {
      title: 'DIAGNÓSTICO PRECISO',
      desc: 'Scanner computarizado',
      icon: ShieldCheck
    },
    {
      title: 'ATENCIÓN HONESTA',
      desc: 'Presupuestos transparentes',
      icon: UserCheck
    },
    {
      title: 'REFACCIONES DE CALIDAD',
      desc: 'Alianzas y componentes OEM',
      icon: Settings
    },
    {
      title: 'TÉCNICOS ESPECIALIZADOS',
      desc: 'Experiencia multimarca',
      icon: Award
    },
    {
      title: 'GARANTÍA EN TRABAJOS',
      desc: 'Tu tranquilidad por escrito',
      icon: CheckCircle2
    }
  ];

  return (
    <section
      id="confianza"
      ref={containerRef}
      className="relative z-20 bg-[#050C17] border-y border-slate-800/80 py-4 sm:py-7 lg:py-8 shadow-2xl overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div
          ref={itemsRef}
          className="grid grid-cols-1 min-[440px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-5"
        >
          {items.map((item, index) => {
            const IconComponent = item.icon;
            const isLast = index === items.length - 1;
            return (
              <div
                key={index}
                className={`flex items-center gap-3 p-2.5 sm:p-0 rounded-xl bg-slate-900/50 sm:bg-transparent border border-slate-800/70 sm:border-0 group transition-transform duration-300 hover:-translate-y-0.5 ${
                  isLast ? 'min-[440px]:col-span-2 sm:min-[440px]:col-span-1 min-[440px]:max-w-xs min-[440px]:mx-auto sm:max-w-none' : ''
                }`}
              >
                <div
                  className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-slate-900/90 border border-slate-700/80 flex items-center justify-center shrink-0 group-hover:border-[#1769E0] group-hover:bg-[#164B9B]/25 group-hover:shadow-[0_0_15px_rgba(23,105,224,0.4)] transition-all duration-300"
                >
                  <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-[#38BDF8] group-hover:scale-110 transition-transform" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-xs sm:text-xs font-black text-white uppercase tracking-wider font-sans group-hover:text-[#38BDF8] transition-colors leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-[10.5px] sm:text-[11px] text-slate-400 font-normal leading-tight mt-0.5">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

import React, { useLayoutEffect, useRef } from 'react';
import { Shield, Wrench, Cpu, Compass } from 'lucide-react';
import { gsap, prefersReducedMotion } from '../animations/gsap';
import { getAssetPath } from '../utils/assets';

export const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 80%',
            once: true
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="nosotros"
      ref={sectionRef}
      className="relative py-14 sm:py-20 lg:py-32 bg-[#050C17] text-white overflow-hidden border-t border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div ref={contentRef} className="max-w-6xl mx-auto">
          {/* Eyebrow */}
          <div className="text-center mb-4 sm:mb-6">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-[#164B9B]/25 border border-[#1769E0]/40 text-[#38BDF8] text-[10px] sm:text-xs font-bold tracking-wider sm:tracking-widest uppercase shadow-[0_0_12px_rgba(23,105,224,0.3)]">
              <Compass className="w-3.5 h-3.5" />
              <span>SOBRE GENERA AUTOMOTRIZ</span>
            </div>
          </div>

          {/* Title */}
          <h2 className="text-2xl min-[360px]:text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white text-center mb-6 sm:mb-10 leading-tight">
            EXPERIENCIA, TECNOLOGÍA Y CONFIANZA
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
            {/* Left Photo Card: Especialista Mecánico */}
            <div className="lg:col-span-5 relative rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-700/80 shadow-2xl min-h-[260px] sm:min-h-[320px] lg:min-h-full group bg-slate-950">
              <img
                src={getAssetPath('/images/mecanico01.jpg')}
                alt="Técnico Especialista en Genera Automotriz"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050C17] via-[#050C17]/40 to-transparent" />
              
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-slate-950/90 backdrop-blur-md border border-slate-700/80 p-3 sm:p-4 rounded-xl shadow-xl">
                <span className="text-[9.5px] sm:text-[10px] font-mono font-bold text-[#38BDF8] uppercase tracking-wider block">
                  CAPACITACIÓN CONTINUA
                </span>
                <span className="text-xs sm:text-sm font-bold text-white block leading-tight mt-0.5">
                  Técnicos Certificados en Sistemas Automotrices Modernos
                </span>
              </div>
            </div>

            {/* Right Editorial Card */}
            <div className="lg:col-span-7 p-4 min-[360px]:p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#091526] to-[#060E1A] border border-slate-800 shadow-2xl flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#1769E0]/10 rounded-full blur-3xl pointer-events-none" />

              <p className="text-sm min-[360px]:text-base sm:text-lg lg:text-xl text-slate-100 font-normal leading-relaxed mb-6 sm:mb-8 tracking-tight">
                &ldquo;En Genera Automotriz nos enfocamos en brindar un servicio profesional, transparente y confiable. Nuestro objetivo es ofrecer soluciones adecuadas para cada vehículo utilizando tecnología, herramientas especializadas y atención personalizada.&rdquo;
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-5 sm:pt-6 border-t border-slate-800/90 text-left">
                <div className="flex sm:flex-col items-start gap-2.5 sm:gap-2 p-2.5 sm:p-0 rounded-xl bg-slate-900/40 sm:bg-transparent border border-slate-800/60 sm:border-0">
                  <div className="w-8 h-8 rounded-lg bg-[#164B9B]/25 border border-[#1769E0]/40 flex items-center justify-center text-[#38BDF8] shrink-0 shadow-md">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white mb-0.5 tracking-wide">Tecnología</h4>
                    <p className="text-[11px] text-slate-400 leading-relaxed">Diagnóstico electrónico preciso para evaluar con exactitud.</p>
                  </div>
                </div>

                <div className="flex sm:flex-col items-start gap-2.5 sm:gap-2 p-2.5 sm:p-0 rounded-xl bg-slate-900/40 sm:bg-transparent border border-slate-800/60 sm:border-0">
                  <div className="w-8 h-8 rounded-lg bg-[#164B9B]/25 border border-[#1769E0]/40 flex items-center justify-center text-[#38BDF8] shrink-0 shadow-md">
                    <Wrench className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white mb-0.5 tracking-wide">Técnicos</h4>
                    <p className="text-[11px] text-slate-400 leading-relaxed">Procedimientos rigurosos según especificaciones del fabricante.</p>
                  </div>
                </div>

                <div className="flex sm:flex-col items-start gap-2.5 sm:gap-2 p-2.5 sm:p-0 rounded-xl bg-slate-900/40 sm:bg-transparent border border-slate-800/60 sm:border-0">
                  <div className="w-8 h-8 rounded-lg bg-[#164B9B]/25 border border-[#1769E0]/40 flex items-center justify-center text-[#38BDF8] shrink-0 shadow-md">
                    <Shield className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white mb-0.5 tracking-wide">Honestidad</h4>
                    <p className="text-[11px] text-slate-400 leading-relaxed">Explicación sincera y clara de lo que tu vehículo necesita.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

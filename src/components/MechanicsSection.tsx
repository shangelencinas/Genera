import React, { useLayoutEffect, useRef } from 'react';
import { Wrench, Check, ArrowRight, ShieldCheck, Cog } from 'lucide-react';
import { gsap, prefersReducedMotion } from '../animations/gsap';
import { getWhatsAppUrl } from '../utils/whatsapp';

interface MechanicsProps {
  onOpenAppointmentModal: (serviceId?: string) => void;
}

export const MechanicsSection: React.FC<MechanicsProps> = ({ onOpenAppointmentModal }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        leftColRef.current,
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            once: true
          }
        }
      );

      gsap.fromTo(
        rightColRef.current,
        { opacity: 0, x: 40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            once: true
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const items = [
    { title: 'Mantenimiento preventivo', desc: 'Previene desgastes prematuros y averías mayores.' },
    { title: 'Mantenimiento correctivo', desc: 'Reparaciones precisas con refacciones de calidad.' },
    { title: 'Cambio de aceite y filtros', desc: 'Lubricación certificada para proteger la vida del motor.' },
    { title: 'Afinación integral', desc: 'Rendimiento eficiente y menor consumo de combustible.' },
    { title: 'Revisión general de seguridad', desc: 'Inspección de puntos críticos para viajar seguro.' }
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-14 sm:py-20 lg:py-32 bg-[#050C17] text-white overflow-hidden border-t border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual of Engine & Mechanical Care */}
          <div ref={leftColRef} className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-b from-[#0B1526] to-[#040812] border-2 border-slate-700/80 shadow-[0_25px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(23,105,224,0.15)] group">
              <div className="h-[800px] relative overflow-hidden flex items-center justify-center">
                {/* Independent Photo Asset: Mantenimiento de Motor y Mecánica */}
                <img
                  src="/images/Mecanica%20General.jpg"
                  alt="Mecánica Automotriz y Mantenimiento de Motor - Genera Automotriz"
                  className="w-full h-[800px] object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ height: '800px' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#040812] via-[#040812]/20 to-transparent opacity-80" />

                {/* Floating Badge */}
                <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-5 sm:left-5 sm:right-auto sm:max-w-xs bg-slate-950/95 backdrop-blur-md border border-slate-700/80 rounded-xl p-2.5 sm:px-4 sm:py-3 flex items-center gap-2.5 sm:gap-3 shadow-xl">
                  <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-[#38BDF8] shrink-0" />
                  <div className="min-w-0">
                    <div className="text-[11px] sm:text-xs font-bold text-white uppercase tracking-wider truncate">Mantenimiento Certificado</div>
                    <div className="text-[9.5px] sm:text-[11px] text-slate-400 truncate">Técnicos especializados y refacciones de calidad</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Copy, List, CTA */}
          <div ref={rightColRef} className="lg:col-span-6 flex flex-col items-start order-1 lg:order-2">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-[#164B9B]/25 border border-[#1769E0]/40 text-[#38BDF8] text-[10px] sm:text-xs font-bold tracking-wider sm:tracking-widest uppercase mb-3 sm:mb-4 shadow-[0_0_12px_rgba(23,105,224,0.3)]">
              <Wrench className="w-3.5 h-3.5" />
              <span>MECÁNICA GENERAL</span>
            </div>

            <h2 className="text-2xl min-[360px]:text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight mb-3 sm:mb-5">
              MANTENIMIENTO PARA QUE TU AUTO SIGA RESPONDIENDO
            </h2>

            <p className="text-xs min-[360px]:text-sm sm:text-lg text-slate-300 font-normal leading-relaxed mb-6 sm:mb-8">
              Realizamos mantenimiento preventivo y correctivo con herramientas y procedimientos adecuados para cada servicio, asegurando el óptimo desempeño del motor y la prolongación de la vida útil de tu automóvil.
            </p>

            {/* List */}
            <div className="space-y-2.5 sm:space-y-3.5 mb-7 sm:mb-10 w-full">
              {items.map((item, index) => (
                <div key={index} className="flex items-start gap-2.5 sm:gap-3.5 p-3 sm:p-3.5 rounded-xl bg-slate-900/80 border border-slate-800/90 hover:border-slate-700 transition-colors">
                  <div className="w-5 h-5 rounded-full bg-[#1769E0]/20 border border-[#1769E0]/50 flex items-center justify-center text-[#38BDF8] shrink-0 mt-0.5 shadow-sm">
                    <Check className="w-3 h-3" />
                  </div>
                  <div>
                    <h4 className="text-xs min-[360px]:text-sm font-bold text-white tracking-wide">{item.title}</h4>
                    <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4 w-full sm:w-auto">
              <a
                href={getWhatsAppUrl('mecanica-general')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto group relative overflow-hidden inline-flex items-center justify-center gap-2.5 sm:gap-3 px-6 sm:px-7 py-3.5 sm:py-4 text-xs min-[360px]:text-sm sm:text-base font-bold text-white bg-gradient-to-r from-[#164B9B] via-[#1769E0] to-[#2563EB] hover:from-[#1769E0] hover:to-[#1D4ED8] rounded-xl shadow-xl shadow-[#164B9B]/40 hover:shadow-2xl hover:shadow-[#1769E0]/50 transition-all active:scale-[0.98] border border-blue-400/30 min-h-[46px] sm:min-h-[48px]"
              >
                <span>AGENDA TU CITA</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white/80 transition-transform group-hover:translate-x-1 shrink-0" />
              </a>

              <a
                href="#servicios"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 sm:py-4 text-xs min-[360px]:text-sm sm:text-base font-semibold text-slate-300 hover:text-white bg-slate-900 border border-slate-700/80 rounded-xl transition-all hover:bg-slate-800 min-h-[46px] sm:min-h-[48px]"
              >
                <span>CONOCER SERVICIOS</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

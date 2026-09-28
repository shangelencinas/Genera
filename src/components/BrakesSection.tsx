import React, { useState, useLayoutEffect, useRef } from 'react';
import { Disc, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { gsap, prefersReducedMotion } from '../animations/gsap';
import { getWhatsAppUrl } from '../utils/whatsapp';

interface BrakesProps {
  onOpenAppointmentModal: (serviceId?: string) => void;
}

export const BrakesSection: React.FC<BrakesProps> = ({ onOpenAppointmentModal }) => {
  const [activeTab, setActiveTab] = useState<'frenos' | 'suspension'>('frenos');
  const sectionRef = useRef<HTMLDivElement>(null);
  const textColRef = useRef<HTMLDivElement>(null);
  const visualColRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        textColRef.current,
        { opacity: 0, x: -35 },
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
        visualColRef.current,
        { opacity: 0, x: 35 },
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

  return (
    <section
      ref={sectionRef}
      className="relative py-14 sm:py-20 lg:py-32 bg-[#07111F] text-white overflow-hidden border-t border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Column: Copy & CTA */}
          <div ref={textColRef} className="lg:col-span-6 flex flex-col items-start">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-[#164B9B]/25 border border-[#1769E0]/40 text-[#38BDF8] text-[10px] sm:text-xs font-bold tracking-wider sm:tracking-widest uppercase mb-3 sm:mb-4 shadow-[0_0_12px_rgba(23,105,224,0.3)]">
              <Disc className="w-3.5 h-3.5" />
              <span>FRENOS Y SUSPENSIÓN</span>
            </div>

            <h2 className="text-2xl min-[360px]:text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight mb-3 sm:mb-5">
              SEGURIDAD Y DESEMPEÑO EN CADA CAMINO
            </h2>

            <p className="text-xs min-[360px]:text-sm sm:text-lg text-slate-300 font-normal leading-relaxed mb-6 sm:mb-8">
              Revisamos los componentes esenciales para ayudarte a mantener el control, estabilidad y seguridad de tu vehículo. Desde el reemplazo de pastillas (balatas) cerámicas y rectificación hasta la amortiguación y dirección.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3.5 mb-7 sm:mb-10 w-full">
              <div className="flex items-center gap-2.5 sm:gap-3 p-2.5 sm:p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs min-[360px]:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#38BDF8] shrink-0" />
                <span className="font-semibold">Balatas cerámicas de alta fricción</span>
              </div>
              <div className="flex items-center gap-2.5 sm:gap-3 p-2.5 sm:p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs min-[360px]:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#38BDF8] shrink-0" />
                <span className="font-semibold">Rectificación micrométrica</span>
              </div>
              <div className="flex items-center gap-2.5 sm:gap-3 p-2.5 sm:p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs min-[360px]:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#38BDF8] shrink-0" />
                <span className="font-semibold">Amortiguadores y bases</span>
              </div>
              <div className="flex items-center gap-2.5 sm:gap-3 p-2.5 sm:p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs min-[360px]:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#38BDF8] shrink-0" />
                <span className="font-semibold">Rótulas, bujes y terminales</span>
              </div>
            </div>

            <a
              href={getWhatsAppUrl('frenos-suspension')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto group relative overflow-hidden inline-flex items-center justify-center gap-2.5 sm:gap-3 px-6 sm:px-8 py-3.5 sm:py-4 text-xs min-[360px]:text-sm sm:text-base font-bold text-white bg-gradient-to-r from-[#164B9B] via-[#1769E0] to-[#2563EB] hover:from-[#1769E0] hover:to-[#1D4ED8] rounded-xl shadow-xl shadow-[#164B9B]/40 hover:shadow-2xl hover:shadow-[#1769E0]/50 transition-all active:scale-[0.98] border border-blue-400/30 min-h-[46px] sm:min-h-[48px]"
            >
              <span>AGENDA TU CITA</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white/80 transition-transform group-hover:translate-x-1 shrink-0" />
            </a>
          </div>

          {/* Right Column: High Performance Brake Rotor & Suspension Visual */}
          <div ref={visualColRef} className="lg:col-span-6 relative">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-b from-[#091526] to-[#040812] border-2 border-slate-700/80 shadow-[0_25px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(23,105,224,0.15)] group">
              <div className="aspect-[4/3] sm:aspect-[16/11] relative overflow-hidden flex items-center justify-center">
                {/* Independent Photo Asset: Frenos o Suspensión */}
                <img
                  src={activeTab === 'suspension' ? '/images/suspencion.jpg' : '/images/balatas.jpg'}
                  alt={activeTab === 'suspension' ? 'Suspensión y amortiguadores - Genera Automotriz' : 'Servicio de Frenos y Balatas - Genera Automotriz'}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#040812] via-[#040812]/20 to-transparent opacity-80" />

                {/* Sub-view switcher for Frenos vs Suspensión */}
                <div className="absolute top-2.5 left-2.5 sm:top-4 sm:left-4 z-10 flex items-center gap-1.5 p-1 rounded-xl bg-slate-950/90 backdrop-blur-md border border-slate-700/80 shadow-md">
                  <button
                    type="button"
                    onClick={() => setActiveTab('frenos')}
                    className={`px-2.5 py-1 rounded-lg text-[10px] sm:text-xs font-bold transition-all ${
                      activeTab === 'frenos'
                        ? 'bg-[#1769E0] text-white shadow-sm'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Frenos
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('suspension')}
                    className={`px-2.5 py-1 rounded-lg text-[10px] sm:text-xs font-bold transition-all ${
                      activeTab === 'suspension'
                        ? 'bg-[#1769E0] text-white shadow-sm'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Suspensión
                  </button>
                </div>

                {/* Float Inspection Badge */}
                <div className="absolute bottom-2.5 right-2.5 sm:bottom-5 sm:right-5 bg-slate-950/95 backdrop-blur-md border border-slate-700/80 rounded-xl px-3 py-2 sm:px-4 sm:py-2.5 text-right shadow-xl max-w-[170px] sm:max-w-none">
                  <span className="text-[9px] sm:text-[10px] font-mono text-[#38BDF8] block font-bold truncate">ESPECIFICACIÓN OEM</span>
                  <span className="text-[11px] sm:text-xs font-black text-white block leading-tight">
                    {activeTab === 'suspension' ? 'Amortiguación y Confort' : 'Máxima Capacidad de Frenado'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

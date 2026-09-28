import React, { useLayoutEffect, useRef } from 'react';
import { Cpu, CheckCircle2, Calendar, ArrowRight, Activity } from 'lucide-react';
import { gsap, prefersReducedMotion } from '../animations/gsap';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { getAssetPath } from '../utils/assets';

interface DiagnosticsProps {
  onOpenAppointmentModal: (serviceId?: string) => void;
}

export const DiagnosticsSection: React.FC<DiagnosticsProps> = ({ onOpenAppointmentModal }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          once: true
        }
      });

      tl.fromTo(
        leftColRef.current,
        { opacity: 0, x: -40 },
        { opacity: 1, x: 0, duration: 0.8, ease: 'power2.out' }
      )
        .fromTo(
          rightColRef.current,
          { opacity: 0, x: 30 },
          { opacity: 1, x: 0, duration: 0.7, ease: 'power2.out' },
          '-=0.5'
        )
        .fromTo(
          listRef.current?.children ? Array.from(listRef.current.children) : [],
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.45, stagger: 0.1, ease: 'power2.out' },
          '-=0.3'
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
          '-=0.2'
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const features = [
    'Diagnóstico electrónico multimarca',
    'Scanner automotriz de última generación',
    'Sistema eléctrico y módulos de confort',
    'Detección precisa de fallas intermitentes',
    'Revisión especializada de sensores y actuadores'
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-14 sm:py-20 lg:py-32 bg-[#07111F] text-white overflow-hidden border-t border-slate-800"
    >
      {/* Background Lighting */}
      <div
        className="absolute top-1/2 left-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#164B9B]/15 rounded-full blur-[100px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-16 items-center">
          {/* Left Column: Professional Rugged Diagnostic Scanner Tablet */}
          <div ref={leftColRef} className="lg:col-span-6 relative w-full">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-950 border-2 border-slate-700/80 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(23,105,224,0.25)] p-1.5 sm:p-2">
              {/* Rugged Bumper Corners */}
              <div className="absolute top-0 left-0 w-5 h-5 sm:w-8 sm:h-8 border-t-2 sm:border-t-4 border-l-2 sm:border-l-4 border-[#1769E0] rounded-tl-xl sm:rounded-tl-2xl pointer-events-none z-10" />
              <div className="absolute top-0 right-0 w-5 h-5 sm:w-8 sm:h-8 border-t-2 sm:border-t-4 border-r-2 sm:border-r-4 border-[#1769E0] rounded-tr-xl sm:rounded-tr-2xl pointer-events-none z-10" />
              <div className="absolute bottom-0 left-0 w-5 h-5 sm:w-8 sm:h-8 border-b-2 sm:border-b-4 border-l-2 sm:border-l-4 border-[#1769E0] rounded-bl-xl sm:rounded-bl-2xl pointer-events-none z-10" />
              <div className="absolute bottom-0 right-0 w-5 h-5 sm:w-8 sm:h-8 border-b-2 sm:border-b-4 border-r-2 sm:border-r-4 border-[#1769E0] rounded-br-xl sm:rounded-br-2xl pointer-events-none z-10" />

              {/* Tablet Screen Mockup Header */}
              <div className="p-2 sm:p-4 bg-slate-900 border-b border-slate-800 flex items-center justify-between rounded-t-xl sm:rounded-t-2xl">
                <div className="flex items-center gap-1.5 sm:gap-2.5 min-w-0">
                  <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-red-500 shadow-[0_0_6px_red] shrink-0" />
                  <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-yellow-500 shadow-[0_0_6px_yellow] shrink-0" />
                  <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-green-500 shadow-[0_0_6px_green] shrink-0" />
                  <span className="text-[9px] min-[360px]:text-[10px] sm:text-xs font-mono font-bold text-slate-300 ml-1 sm:ml-2 tracking-wider truncate">
                    GENERA PRO // V8.4
                  </span>
                </div>
                <div className="flex items-center gap-1 sm:gap-1.5 bg-emerald-950/80 px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded-full border border-emerald-500/40 shrink-0">
                  <span className="inline-block w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[8.5px] sm:text-[10px] font-mono text-emerald-400 font-extrabold tracking-wider">OBD-II OK</span>
                </div>
              </div>

              {/* Graphical Diagnostic Screen View */}
              <div className="relative aspect-[4/3] bg-gradient-to-br from-[#060F1E] via-[#09172E] to-[#040914] p-3 sm:p-6 flex flex-col justify-between overflow-hidden">
                {/* Independent Photo Asset: Diagnóstico Computarizado Genera */}
                <img
                  src={getAssetPath('/images/genera-diagnostico.jpg')}
                  alt="Diagnóstico Computarizado y Scanner Automotriz Genera"
                  className="absolute inset-0 w-full h-full object-cover opacity-30 select-none pointer-events-none mix-blend-luminosity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060F1E] via-[#060F1E]/50 to-transparent pointer-events-none" />

                {/* Background Oscilloscope Waveforms */}
                <svg
                  viewBox="0 0 400 160"
                  className="w-full h-20 min-[360px]:h-24 sm:h-36 opacity-90"
                  fill="none"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient id="waveGradDiag" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#164B9B" />
                      <stop offset="50%" stopColor="#1769E0" />
                      <stop offset="100%" stopColor="#38BDF8" />
                    </linearGradient>
                  </defs>

                  {/* Grid Lines */}
                  <line x1="0" y1="40" x2="400" y2="40" stroke="#1E293B" strokeWidth="0.8" />
                  <line x1="0" y1="80" x2="400" y2="80" stroke="#1E293B" strokeWidth="0.8" />
                  <line x1="0" y1="120" x2="400" y2="120" stroke="#1E293B" strokeWidth="0.8" />

                  {/* High Tech Waveforms */}
                  <path
                    d="M0,80 Q30,20 60,80 T120,80 T180,80 T240,40 T260,130 T280,80 T340,80 T400,80"
                    stroke="url(#waveGradDiag)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    filter="drop-shadow(0 0 6px rgba(56,189,248,0.5))"
                  />
                  <path
                    d="M0,105 Q40,115 80,95 T160,105 T240,90 T320,110 T400,95"
                    stroke="#10B981"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                    opacity="0.8"
                  />
                </svg>

                {/* Real-time Telemetry Grid */}
                <div className="grid grid-cols-3 gap-1.5 sm:gap-3 bg-slate-900/90 rounded-xl sm:rounded-2xl p-2 sm:p-4 border border-slate-800 shadow-inner">
                  <div>
                    <div className="text-[7.5px] min-[360px]:text-[8px] sm:text-[10px] text-slate-400 font-mono font-semibold truncate">RPM MOTOR</div>
                    <div className="text-xs min-[360px]:text-sm sm:text-lg font-mono font-black text-white">780 <span className="text-[7px] sm:text-[10px] text-slate-400 font-normal">idle</span></div>
                  </div>
                  <div>
                    <div className="text-[7.5px] min-[360px]:text-[8px] sm:text-[10px] text-slate-400 font-mono font-semibold truncate">BATERÍA</div>
                    <div className="text-xs min-[360px]:text-sm sm:text-lg font-mono font-black text-emerald-400">14.2 <span className="text-[7px] sm:text-[10px] font-normal">V</span></div>
                  </div>
                  <div>
                    <div className="text-[7.5px] min-[360px]:text-[8px] sm:text-[10px] text-slate-400 font-mono font-semibold truncate">FUEL PSI</div>
                    <div className="text-xs min-[360px]:text-sm sm:text-lg font-mono font-black text-[#38BDF8]">43.5 <span className="text-[7px] sm:text-[10px] font-normal">psi</span></div>
                  </div>
                </div>

                {/* OBD-II Test Status */}
                <div className="flex items-center justify-between text-[9px] min-[360px]:text-[10px] sm:text-xs font-mono text-slate-300 pt-1.5 sm:pt-3 border-t border-slate-800/90">
                  <div className="flex items-center gap-1.5 truncate">
                    <Activity className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#38BDF8] shrink-0" />
                    <span className="font-bold truncate">DTC: 0 ERRORES</span>
                  </div>
                  <div className="text-emerald-400 font-black shrink-0">100% OK</div>
                </div>
              </div>

              {/* Tablet Bottom Bezel */}
              <div className="p-1.5 sm:p-3 bg-slate-950 text-center rounded-b-xl sm:rounded-b-2xl">
                <span className="text-[8px] min-[360px]:text-[9px] sm:text-[10px] font-mono text-slate-400 uppercase tracking-widest font-bold truncate block">
                  DIAGNÓSTICO COMPUTARIZADO · GENERA AUTOMOTRIZ
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Copy, Features, CTA */}
          <div ref={rightColRef} className="lg:col-span-6 flex flex-col items-start">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-[#164B9B]/25 border border-[#1769E0]/40 text-[#38BDF8] text-[10px] sm:text-xs font-bold tracking-wider sm:tracking-widest uppercase mb-3 sm:mb-4 shadow-[0_0_12px_rgba(23,105,224,0.3)]">
              <Cpu className="w-3.5 h-3.5" />
              <span>DIAGNÓSTICO AUTOMOTRIZ</span>
            </div>

            <h2 className="text-2xl min-[360px]:text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight mb-3 sm:mb-5">
              TECNOLOGÍA PARA ENCONTRAR EL PROBLEMA
            </h2>

            <p className="text-xs min-[360px]:text-sm sm:text-lg text-slate-300 font-normal leading-relaxed mb-5 sm:mb-8">
              Utilizamos herramientas de diagnóstico especializadas para identificar fallas electrónicas y mecánicas con mayor precisión. Conectamos directamente con las computadoras de tu vehículo para darte una evaluación honesta y sin rodeos.
            </p>

            {/* Checklist */}
            <ul ref={listRef} className="space-y-2.5 sm:space-y-3.5 mb-7 sm:mb-10 w-full">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2.5 sm:gap-3 text-xs min-[360px]:text-sm sm:text-base text-slate-200">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#1769E0]/20 border border-[#1769E0]/50 flex items-center justify-center text-[#38BDF8] shrink-0 shadow-[0_0_8px_rgba(23,105,224,0.3)]">
                    <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <span className="font-semibold">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div ref={ctaRef} className="w-full sm:w-auto">
              <a
                href={getWhatsAppUrl('diagnostico-computarizado')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto group relative overflow-hidden inline-flex items-center justify-center gap-2.5 sm:gap-3 px-6 sm:px-8 py-3.5 sm:py-4 text-xs min-[360px]:text-sm sm:text-base font-bold text-white bg-gradient-to-r from-[#164B9B] via-[#1769E0] to-[#2563EB] hover:from-[#1769E0] hover:to-[#1D4ED8] rounded-xl shadow-xl shadow-[#164B9B]/40 hover:shadow-2xl hover:shadow-[#1769E0]/50 transition-all active:scale-[0.98] border border-blue-400/30 min-h-[46px] sm:min-h-[48px]"
              >
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-white transition-transform group-hover:scale-110 shrink-0" />
                <span className="tracking-wide">AGENDA TU DIAGNÓSTICO</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white/80 transition-transform group-hover:translate-x-1.5 shrink-0" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

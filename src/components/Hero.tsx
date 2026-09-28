import React, { useLayoutEffect, useRef } from 'react';
import { Calendar, ArrowRight, ShieldCheck, Wrench, Award, ChevronDown } from 'lucide-react';
import { gsap, prefersReducedMotion } from '../animations/gsap';
import { ThreeHeroCanvas } from './ThreeHeroCanvas';
import { getWhatsAppUrl } from '../utils/whatsapp';

interface HeroProps {
  onOpenAppointmentModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAppointmentModal }) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineLine1Ref = useRef<HTMLSpanElement>(null);
  const headlineLine2Ref = useRef<HTMLSpanElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const ctaContainerRef = useRef<HTMLDivElement>(null);
  const trustItemsRef = useRef<HTMLDivElement>(null);
  const visualCardRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        eyebrowRef.current,
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.6 }
      )
        .fromTo(
          [headlineLine1Ref.current, headlineLine2Ref.current],
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.85, stagger: 0.18 },
          '-=0.3'
        )
        .fromTo(
          subtextRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          '-=0.4'
        )
        .fromTo(
          ctaContainerRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          '-=0.4'
        )
        .fromTo(
          trustItemsRef.current?.children ? Array.from(trustItemsRef.current.children) : [],
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.12 },
          '-=0.3'
        )
        .fromTo(
          visualCardRef.current,
          { opacity: 0, scale: 0.95, x: 25 },
          { opacity: 1, scale: 1, x: 0, duration: 1.0, ease: 'power2.out' },
          '-=1.2'
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="inicio"
      ref={heroRef}
      className="relative min-h-[90vh] lg:min-h-screen pt-24 sm:pt-32 pb-16 sm:pb-20 lg:py-36 flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#040913] via-[#07111F] to-[#0A182F] automotive-grid"
    >
      {/* 3D Automotive Particle & Telemetry Constellation */}
      <ThreeHeroCanvas />

      {/* Volumetric Studio Lighting / Atmospheric Gradients */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[90vw] max-w-[850px] h-[350px] sm:h-[500px] bg-gradient-to-b from-[#1769E0]/20 via-[#164B9B]/10 to-transparent rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#1769E0]/15 rounded-full blur-[100px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-[250px] sm:w-[450px] h-[250px] sm:h-[450px] bg-[#0F2E5C]/25 rounded-full blur-[90px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Brand Eyebrow, H1, Copy, CTAs, Trust Points */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Eyebrow - Responsive on small screens */}
            <div
              ref={eyebrowRef}
              className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-slate-900/90 border border-[#1769E0]/50 shadow-[0_0_15px_rgba(23,105,224,0.25)] text-[#38BDF8] text-[9.5px] min-[360px]:text-[10px] sm:text-xs font-bold tracking-wider sm:tracking-widest uppercase mb-4 sm:mb-7 max-w-full"
            >
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#1769E0] animate-ping shrink-0" />
              <span className="hidden min-[360px]:inline truncate">GENERA AUTOMOTRIZ · TALLER DE PRECISIÓN</span>
              <span className="min-[360px]:hidden truncate">GENERA AUTOMOTRIZ</span>
            </div>

            {/* H1 Headline with Responsive Type Scale */}
            <h1 className="text-[1.65rem] min-[360px]:text-[1.9rem] min-[400px]:text-[2.15rem] sm:text-4xl md:text-5xl lg:text-[3.75rem] leading-[1.12] font-black tracking-tight text-white mb-4 sm:mb-6 break-words">
              <span ref={headlineLine1Ref} className="block">
                EXPERIENCIA,{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#60A5FA] via-[#38BDF8] to-[#1769E0] drop-shadow-[0_2px_15px_rgba(56,189,248,0.3)]">
                  TECNOLOGÍA
                </span>
              </span>
              <span ref={headlineLine2Ref} className="block mt-1 sm:mt-2">
                Y SERVICIO QUE TE DAN{' '}
                <span className="relative inline-block text-white">
                  CONFIANZA
                  <span className="absolute -bottom-0.5 sm:-bottom-1 left-0 right-0 h-1 sm:h-1.5 bg-gradient-to-r from-[#164B9B] via-[#1769E0] to-[#38BDF8] rounded-full shadow-[0_0_10px_#1769E0]" />
                </span>
              </span>
            </h1>

            {/* Supporting Value Proposition */}
            <p
              ref={subtextRef}
              className="text-xs min-[360px]:text-sm sm:text-lg lg:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed mb-6 sm:mb-9"
            >
              Servicio automotriz profesional para mantener tu vehículo seguro, confiable y en las mejores condiciones con diagnóstico computarizado y refacciones de calidad.
            </p>

            {/* Tactical Dual CTAs - Full width on mobile */}
            <div
              ref={ctaContainerRef}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4 w-full sm:w-auto mb-7 sm:mb-12"
            >
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden inline-flex items-center justify-center gap-2.5 sm:gap-3 px-5 sm:px-8 py-3.5 sm:py-4 text-xs min-[360px]:text-sm sm:text-base font-bold text-white bg-gradient-to-r from-[#164B9B] via-[#1769E0] to-[#2563EB] hover:from-[#1769E0] hover:to-[#1D4ED8] rounded-xl shadow-xl shadow-[#164B9B]/40 hover:shadow-2xl hover:shadow-[#1769E0]/50 transition-all duration-300 active:scale-[0.98] border border-blue-400/30 min-h-[46px] sm:min-h-[48px]"
              >
                {/* Shimmer light effect */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-white transition-transform group-hover:scale-110 shrink-0" />
                <span className="tracking-wide">AGENDA TU CITA</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white/80 transition-transform group-hover:translate-x-1.5 shrink-0" />
              </a>

              <a
                href="#servicios"
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-7 py-3.5 sm:py-4 text-xs min-[360px]:text-sm sm:text-base font-semibold text-slate-200 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 rounded-xl transition-all active:scale-[0.98] hover:border-slate-600 shadow-md min-h-[46px] sm:min-h-[48px]"
              >
                <span>VER SERVICIOS</span>
              </a>
            </div>

            {/* Hero Trust Quick Indicators */}
            <div
              ref={trustItemsRef}
              className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-4 pt-5 sm:pt-8 border-t border-slate-800/80 w-full"
            >
              <div className="flex items-center gap-2.5 sm:gap-3 p-2 sm:p-0 rounded-xl bg-slate-900/40 sm:bg-transparent border border-slate-800/60 sm:border-0">
                <div className="w-8 h-8 min-[360px]:w-9 min-[360px]:h-9 sm:w-10 sm:h-10 rounded-xl bg-[#164B9B]/25 border border-[#1769E0]/40 flex items-center justify-center text-[#38BDF8] shrink-0 shadow-[0_0_10px_rgba(23,105,224,0.2)]">
                  <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-[10.5px] sm:text-xs font-bold text-white uppercase tracking-wider truncate">DIAGNÓSTICO PRECISO</h4>
                  <p className="text-[9.5px] sm:text-[11px] text-slate-400 truncate">Scanner computarizado</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 sm:gap-3 p-2 sm:p-0 rounded-xl bg-slate-900/40 sm:bg-transparent border border-slate-800/60 sm:border-0">
                <div className="w-8 h-8 min-[360px]:w-9 min-[360px]:h-9 sm:w-10 sm:h-10 rounded-xl bg-[#164B9B]/25 border border-[#1769E0]/40 flex items-center justify-center text-[#38BDF8] shrink-0 shadow-[0_0_10px_rgba(23,105,224,0.2)]">
                  <Award className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-[10.5px] sm:text-xs font-bold text-white uppercase tracking-wider truncate">ATENCIÓN HONESTA</h4>
                  <p className="text-[9.5px] sm:text-[11px] text-slate-400 truncate">Cotizaciones claras</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 sm:gap-3 p-2 sm:p-0 rounded-xl bg-slate-900/40 sm:bg-transparent border border-slate-800/60 sm:border-0">
                <div className="w-8 h-8 min-[360px]:w-9 min-[360px]:h-9 sm:w-10 sm:h-10 rounded-xl bg-[#164B9B]/25 border border-[#1769E0]/40 flex items-center justify-center text-[#38BDF8] shrink-0 shadow-[0_0_10px_rgba(23,105,224,0.2)]">
                  <Wrench className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-[10.5px] sm:text-xs font-bold text-white uppercase tracking-wider truncate">TÉCNICOS ESPECIALIZADOS</h4>
                  <p className="text-[9.5px] sm:text-[11px] text-slate-400 truncate">Personal capacitado</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: High-End Cinematic Automotive Workshop Showcase */}
          <div className="lg:col-span-5 relative w-full">
            <div
              ref={visualCardRef}
              className="relative mx-auto max-w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-b from-[#0D1C33] via-[#091526] to-[#050C17] border border-slate-700/80 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(23,105,224,0.2)] group"
            >
              {/* Outer Glow Halo */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#164B9B] via-[#1769E0] to-[#38BDF8] rounded-2xl sm:rounded-3xl opacity-30 blur-sm pointer-events-none group-hover:opacity-50 transition-opacity" />

              {/* Main Visual Frame */}
              <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] overflow-hidden bg-[#0A1628]">
                {/* Independent Photo Asset: Taller Automotriz Moderno Genera Automotriz */}
                <img
                  src="/images/mecanico02.jpg"
                  alt="Taller Automotriz Moderno Genera Automotriz con elevador y diagnóstico"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />

                {/* Floating Telemetry Glass Badge - Scaled for mobile */}
                <div className="absolute top-2.5 right-2.5 sm:top-4 sm:right-4 bg-slate-950/90 backdrop-blur-xl border border-slate-700/80 rounded-lg sm:rounded-xl p-2 sm:p-3.5 text-left shadow-2xl max-w-[130px] sm:max-w-none">
                  <div className="flex items-center gap-1.5 sm:gap-2 mb-0.5 sm:mb-1.5">
                    <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                    <span className="text-[9px] sm:text-[11px] font-mono font-bold text-emerald-400 tracking-wider truncate">SISTEMA ACTIVO</span>
                  </div>
                  <div className="text-[9px] sm:text-[11px] text-slate-300 font-mono leading-tight">
                    DIAG: <span className="text-white font-bold">100% OK</span>
                  </div>
                  <div className="text-[8px] sm:text-[10px] text-slate-400 font-mono mt-0.5 hidden xs:block">
                    ESPEC: <span className="text-[#38BDF8]">OEM MULTIMARCA</span>
                  </div>
                </div>

                {/* Bottom Scrim Vignette */}
                <div className="absolute inset-x-0 bottom-0 h-20 sm:h-28 bg-gradient-to-t from-[#07111F] via-[#07111F]/70 to-transparent pointer-events-none" />
              </div>

              {/* Bottom Card Footer with Direct Action */}
              <div className="p-3.5 sm:p-5 bg-[#07111F] border-t border-slate-800/90 flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <div className="text-[10px] sm:text-xs text-slate-400 font-medium truncate">Taller Certificado</div>
                  <div className="text-xs sm:text-sm font-bold text-white tracking-wide truncate">Mecánica & Diagnóstico</div>
                </div>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 sm:px-4 py-2 sm:py-2.5 text-xs font-bold text-white bg-gradient-to-r from-[#164B9B] to-[#1769E0] hover:from-[#1769E0] hover:to-[#2563EB] rounded-lg sm:rounded-xl shadow-md transition-all whitespace-nowrap active:scale-95 shrink-0"
                >
                  Solicitar Cita
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-10 sm:mt-14 hidden md:flex flex-col items-center justify-center text-slate-400">
          <a
            href="#confianza"
            className="flex flex-col items-center gap-2 hover:text-white transition-colors focus:outline-none group"
            aria-label="Desplazarse a la barra de confianza"
          >
            <span className="text-[11px] font-bold tracking-widest uppercase text-slate-400 group-hover:text-white transition-colors">
              Explorar Genera Automotriz
            </span>
            <ChevronDown className="w-4 h-4 text-[#1769E0] animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

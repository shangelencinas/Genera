import React, { useLayoutEffect, useRef } from 'react';
import { Calendar, ArrowRight, ShieldCheck, Wrench, Award, ChevronDown, MapPin, CheckCircle } from 'lucide-react';
import { gsap, prefersReducedMotion } from '../animations/gsap';
import { ThreeHeroCanvas } from './ThreeHeroCanvas';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { getAssetPath } from '../utils/assets';

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
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5 }
      )
        .fromTo(
          [headlineLine1Ref.current, headlineLine2Ref.current],
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.7, stagger: 0.15 },
          '-=0.2'
        )
        .fromTo(
          subtextRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          '-=0.3'
        )
        .fromTo(
          ctaContainerRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          '-=0.3'
        )
        .fromTo(
          trustItemsRef.current?.children ? Array.from(trustItemsRef.current.children) : [],
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 },
          '-=0.3'
        )
        .fromTo(
          visualCardRef.current,
          { opacity: 0, scale: 0.95 },
          { opacity: 1, scale: 1, duration: 0.8, ease: 'power2.out' },
          '-=0.8'
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="inicio"
      ref={heroRef}
      className="relative min-h-[90vh] lg:min-h-screen pt-24 sm:pt-28 pb-14 sm:pb-20 lg:py-32 flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#040913] via-[#07111F] to-[#09172B] automotive-grid"
    >
      {/* 3D Automotive Particle & Telemetry Constellation */}
      <ThreeHeroCanvas />

      {/* Volumetric Studio Lighting / Atmospheric Gradients */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[90vw] max-w-[850px] h-[350px] sm:h-[500px] bg-gradient-to-b from-[#1769E0]/15 via-[#164B9B]/10 to-transparent rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mt-[20px]">
          {/* Left Column: Clear Value Proposition, Direct H1, Punchline, CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Clear Location Eyebrow */}
            <div
              ref={eyebrowRef}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-[#1769E0]/40 shadow-[0_0_15px_rgba(23,105,224,0.2)] text-[#38BDF8] text-[10px] sm:text-xs font-bold tracking-wider uppercase mb-3 sm:mb-5 max-w-full mt-[40px]"
            >
              <MapPin className="w-3.5 h-3.5 text-[#38BDF8] shrink-0" />
              <span>TALLER AUTOMOTRIZ EN HERMOSILLO, SONORA</span>
            </div>

            {/* H1 Headline: Clarísimo qué somos */}
            <h1 className="leading-[1.12] font-black tracking-tight text-white mb-3 sm:mb-4 break-words">
              <span ref={headlineLine1Ref} className="block text-[39.4px] leading-tight">
                Taller automotriz en Hermosillo
              </span>
              <span
                ref={headlineLine2Ref}
                className="block mt-1 sm:mt-2 text-[31.4px] leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#60A5FA] to-[#1769E0] drop-shadow-[0_2px_15px_rgba(56,189,248,0.25)]"
              >
                Diagnóstico preciso. Soluciones confiables.
              </span>
            </h1>

            {/* Supporting Value Proposition: Primero diagnosticamos, tú autorizas */}
            <p
              ref={subtextRef}
              className="text-xs min-[360px]:text-sm sm:text-base lg:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed mb-6 sm:mb-9"
            >
              Cuidamos tu auto con tecnología computarizada y honestidad total. <strong className="text-white">Primero diagnosticamos, tú autorizas y después reparamos</strong> — sin cambiar piezas por adivinar ni sorpresas en tu presupuesto.
            </p>

            {/* Tactical Dual CTAs - Full width on mobile */}
            <div
              ref={ctaContainerRef}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4 w-full sm:w-auto mb-6 sm:mb-10"
            >
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 text-xs min-[360px]:text-sm sm:text-base font-bold text-white bg-gradient-to-r from-[#164B9B] via-[#1769E0] to-[#2563EB] hover:from-[#1769E0] hover:to-[#1D4ED8] rounded-xl shadow-xl shadow-[#164B9B]/40 hover:shadow-2xl transition-all duration-300 active:scale-[0.98] border border-blue-400/30 min-h-[48px]"
              >
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-white transition-transform group-hover:scale-110 shrink-0" />
                <span className="tracking-wide">AGENDAR CITA POR WHATSAPP</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white/80 transition-transform group-hover:translate-x-1 shrink-0" />
              </a>

              <a
                href="#servicios"
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-7 py-3.5 sm:py-4 text-xs min-[360px]:text-sm sm:text-base font-semibold text-slate-200 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 rounded-xl transition-all active:scale-[0.98] shadow-md min-h-[48px]"
              >
                <span>VER SERVICIOS</span>
              </a>
            </div>

            {/* Hero Trust Quick Indicators */}
            <div
              ref={trustItemsRef}
              className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 pt-4 sm:pt-6 border-t border-slate-800/80 w-full"
            >
              <div className="flex items-center gap-2.5 p-2 sm:p-0 rounded-xl bg-slate-900/40 sm:bg-transparent border border-slate-800/60 sm:border-0">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#164B9B]/25 border border-[#1769E0]/40 flex items-center justify-center text-[#38BDF8] shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-[11px] font-bold text-white uppercase tracking-wider truncate">Diagnóstico Primero</h4>
                  <p className="text-[10px] text-slate-400 truncate">Sin adivinar fallas</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-2 sm:p-0 rounded-xl bg-slate-900/40 sm:bg-transparent border border-slate-800/60 sm:border-0">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-[11px] font-bold text-white uppercase tracking-wider truncate">Tú Autorizas</h4>
                  <p className="text-[10px] text-slate-400 truncate">Cotización previa fija</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-2 sm:p-0 rounded-xl bg-slate-900/40 sm:bg-transparent border border-slate-800/60 sm:border-0">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#164B9B]/25 border border-[#1769E0]/40 flex items-center justify-center text-[#38BDF8] shrink-0">
                  <Wrench className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-[11px] font-bold text-white uppercase tracking-wider truncate">Garantía Escrita</h4>
                  <p className="text-[10px] text-slate-400 truncate">Refacciones de calidad</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Workshop Image Showcase */}
          <div className="lg:col-span-5 relative w-full">
            <div
              ref={visualCardRef}
              className="relative mx-auto max-w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-b from-[#0D1C33] via-[#091526] to-[#050C17] border border-slate-700/80 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(23,105,224,0.2)] group"
            >
              {/* Outer Glow Halo */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#164B9B] via-[#1769E0] to-[#38BDF8] rounded-2xl sm:rounded-3xl opacity-25 blur-sm pointer-events-none group-hover:opacity-40 transition-opacity" />

              {/* Main Visual Frame */}
              <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] overflow-hidden bg-[#0A1628]">
                <img
                  src={getAssetPath('/images/mecanico02.jpg')}
                  alt="Taller Automotriz Moderno Genera Automotriz en Hermosillo"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />

                {/* Floating Telemetry Glass Badge */}
                <div className="absolute top-2.5 right-2.5 sm:top-4 sm:right-4 bg-slate-950/90 backdrop-blur-xl border border-slate-700/80 rounded-lg sm:rounded-xl p-2 sm:p-3 text-left shadow-2xl">
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                    <span className="text-[9px] sm:text-[10px] font-mono font-bold text-emerald-400 tracking-wider">TALLER ACTIVO</span>
                  </div>
                  <div className="text-[9px] sm:text-[11px] text-slate-300 font-mono leading-tight">
                    HERMOSILLO, SONORA
                  </div>
                </div>

                {/* Bottom Scrim Vignette */}
                <div className="absolute inset-x-0 bottom-0 h-16 sm:h-24 bg-gradient-to-t from-[#07111F] via-[#07111F]/70 to-transparent pointer-events-none" />
              </div>

              {/* Bottom Card Footer */}
              <div className="p-3.5 sm:p-4 bg-[#07111F] border-t border-slate-800/90 flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <div className="text-[10px] sm:text-xs text-slate-400 font-medium truncate">Mecánica & Diagnóstico</div>
                  <div className="text-xs sm:text-sm font-bold text-white tracking-wide truncate">Genera Automotriz</div>
                </div>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 sm:px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-[#164B9B] to-[#1769E0] hover:from-[#1769E0] hover:to-[#2563EB] rounded-lg sm:rounded-xl shadow-md transition-all whitespace-nowrap active:scale-95 shrink-0"
                >
                  Solicitar Cita
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-8 sm:mt-12 hidden md:flex flex-col items-center justify-center text-slate-400">
          <a
            href="#por-que-genera"
            className="flex flex-col items-center gap-1.5 hover:text-white transition-colors focus:outline-none group"
            aria-label="Conocer nuestra regla de diagnóstico"
          >
            <span className="text-[10px] font-bold tracking-widest uppercase text-slate-400 group-hover:text-white transition-colors">
              Conoce Nuestra Regla de Oro
            </span>
            <ChevronDown className="w-4 h-4 text-[#1769E0] animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

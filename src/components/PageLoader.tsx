import React, { useEffect, useState } from 'react';
import { GeneraLogo } from './BrandLogos';
import { prefersReducedMotion } from '../animations/gsap';

interface PageLoaderProps {
  onLoaded: () => void;
}

export const PageLoader: React.FC<PageLoaderProps> = ({ onLoaded }) => {
  const [fading, setFading] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion()) {
      onLoaded();
      return;
    }

    const timer1 = setTimeout(() => {
      setFading(true);
    }, 750);

    const timer2 = setTimeout(() => {
      onLoaded();
    }, 1100);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onLoaded]);

  return (
    <div
      onClick={onLoaded}
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#040A14] transition-opacity duration-500 overflow-hidden cursor-pointer select-none ${
        fading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      aria-hidden="true"
    >
      {/* Dynamic Background Volumetric Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#164B9B]/25 via-[#1769E0]/20 to-[#38BDF8]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b18_1px,transparent_1px),linear-gradient(to_bottom,#1e293b18_1px,transparent_1px)] bg-[size:36px_36px] pointer-events-none opacity-40" />

      {/* Target Selected Element: Center Dimensional Automotive HUD Panel */}
      <div className="relative z-10 p-7 sm:p-9 rounded-3xl bg-gradient-to-b from-[#0D1D35]/95 via-[#081528]/95 to-[#040A14]/98 border border-[#1769E0]/40 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_50px_rgba(23,105,224,0.3),inset_0_1px_2px_rgba(255,255,255,0.2)] backdrop-blur-2xl max-w-sm w-[90vw] sm:w-[400px] flex flex-col items-center gap-5 text-center overflow-hidden">
        {/* Subtle Metallic Top Bevel Edge Highlight */}
        <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#38BDF8] to-transparent opacity-90" />
        
        {/* Corner Automotive Precision Crosshairs */}
        <div className="absolute top-3 left-3 w-2 h-2 border-t-2 border-l-2 border-[#38BDF8]/60" />
        <div className="absolute top-3 right-3 w-2 h-2 border-t-2 border-r-2 border-[#38BDF8]/60" />
        <div className="absolute bottom-3 left-3 w-2 h-2 border-b-2 border-l-2 border-[#38BDF8]/60" />
        <div className="absolute bottom-3 right-3 w-2 h-2 border-b-2 border-r-2 border-[#38BDF8]/60" />

        {/* High-Tech Telemetry Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#164B9B]/30 border border-[#38BDF8]/30 shadow-[0_0_12px_rgba(56,189,248,0.2)]">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-[10px] font-mono font-bold tracking-widest text-[#38BDF8] uppercase">
            CALIBRACIÓN AUTOMOTRIZ
          </span>
        </div>

        {/* Central Glowing Aperture & Logo */}
        <div className="relative flex items-center justify-center py-2">
          {/* Multi-layered Pulsing Radial Halo */}
          <div className="absolute w-36 h-36 bg-[#1769E0]/30 rounded-full blur-2xl animate-pulse pointer-events-none" />
          <div className="absolute w-28 h-28 border border-[#38BDF8]/20 rounded-full animate-[spin_10s_linear_infinite] pointer-events-none border-dashed" />
          
          <div className="relative z-10 drop-shadow-[0_10px_20px_rgba(23,105,224,0.4)]">
            <GeneraLogo className="h-11 sm:h-13" variant="light" />
          </div>
        </div>

        {/* Sub-brand Engineering Copy */}
        <div className="space-y-0.5">
          <span className="text-[11px] font-bold text-slate-200 tracking-wider uppercase block">
            DIAGNÓSTICO & SERVICIO MECÁNICO
          </span>
          <span className="text-[10px] font-mono text-slate-400 tracking-widest block">
            HERMOSILLO, SONORA
          </span>
        </div>

        {/* High-Precision Gauge Progress Meter */}
        <div className="w-full space-y-2 pt-1">
          <div className="w-full h-2 bg-slate-950/80 rounded-full p-0.5 border border-slate-700/80 shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] overflow-hidden relative">
            <div className="h-full bg-gradient-to-r from-[#164B9B] via-[#1769E0] to-[#38BDF8] rounded-full w-full animate-[progress_1s_ease-in-out_infinite] shadow-[0_0_10px_#38BDF8]" />
          </div>

          <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 px-1">
            <span className="text-[#38BDF8] font-bold">INICIALIZANDO SISTEMA...</span>
            <span className="text-emerald-400 font-semibold flex items-center gap-1">
              <span className="w-1 h-1 rounded-full bg-emerald-400" />
              100% LISTO
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

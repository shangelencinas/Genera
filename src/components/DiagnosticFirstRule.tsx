import React from 'react';
import { ShieldCheck, CheckCircle2, ScanSearch, FileCheck2, ArrowRight } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/whatsapp';

export const DiagnosticFirstRule: React.FC = () => {
  return (
    <section
      id="por-que-genera"
      className="relative py-12 sm:py-20 bg-gradient-to-b from-[#07111F] via-[#09172B] to-[#07111F] text-white border-t border-slate-800/80 overflow-hidden"
    >
      {/* Subtle atmospheric glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#164B9B]/15 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Golden Rule */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-bold tracking-wider uppercase mb-3 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>NUESTRA REGLA DE ORO</span>
          </div>

          <h2 className="text-2xl min-[360px]:text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-4 leading-tight">
            “Primero diagnosticamos, <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#60A5FA] to-[#1769E0]">
              después reparamos.”
            </span>
          </h2>

          <p className="text-sm sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto">
            En <strong className="text-white">Genera Automotriz</strong> no cambiamos piezas para adivinar. 
            Te mostramos la falla con evidencia real y <strong className="text-white">tú siempre autorizas el presupuesto</strong> antes de realizar cualquier trabajo.
          </p>
        </div>

        {/* 3 Steps / Guarantees Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-10 sm:mb-12">
          {/* Step 1 */}
          <div className="relative p-6 sm:p-7 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-[#1769E0]/50 transition-all duration-300 shadow-lg flex flex-col justify-between group">
            <div className="absolute top-4 right-4 text-3xl font-black font-mono text-slate-800/80 group-hover:text-[#1769E0]/30 transition-colors">
              01
            </div>

            <div>
              <div className="w-12 h-12 rounded-xl bg-[#164B9B]/25 border border-[#1769E0]/40 flex items-center justify-center text-[#38BDF8] mb-5 shadow-[0_0_15px_rgba(23,105,224,0.2)]">
                <ScanSearch className="w-6 h-6" />
              </div>

              <span className="inline-block px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-bold tracking-wider uppercase mb-2">
                CERO ADIVINANZAS
              </span>

              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                Diagnóstico Técnico Preciso
              </h3>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Conectamos escáner multimarca y realizamos pruebas mecánicas directas. Identificamos la causa raíz exacta para que no gastes en piezas que tu auto no necesita.
              </p>
            </div>
          </div>

          {/* Step 2 (Highlighted) */}
          <div className="relative p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-[#0E2038] via-[#091526] to-[#060E1A] border-2 border-[#1769E0]/60 shadow-[0_10px_35px_rgba(23,105,224,0.25)] flex flex-col justify-between group">
            <div className="absolute top-4 right-4 text-3xl font-black font-mono text-[#1769E0]/40">
              02
            </div>

            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mb-5 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                <FileCheck2 className="w-6 h-6" />
              </div>

              <span className="inline-block px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 text-[10px] font-bold tracking-wider uppercase mb-2">
                TÚ TIENES EL CONTROL
              </span>

              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                Autorización Previa y Presupuesto
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                <strong>Ningún tornillo se mueve sin tu visto bueno.</strong> Recibes la cotización detallada de piezas y mano de obra con anticipación. Cero sorpresas en la cuenta final.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative p-6 sm:p-7 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-[#1769E0]/50 transition-all duration-300 shadow-lg flex flex-col justify-between group">
            <div className="absolute top-4 right-4 text-3xl font-black font-mono text-slate-800/80 group-hover:text-[#1769E0]/30 transition-colors">
              03
            </div>

            <div>
              <div className="w-12 h-12 rounded-xl bg-[#164B9B]/25 border border-[#1769E0]/40 flex items-center justify-center text-[#38BDF8] mb-5 shadow-[0_0_15px_rgba(23,105,224,0.2)]">
                <CheckCircle2 className="w-6 h-6" />
              </div>

              <span className="inline-block px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-400 text-[10px] font-bold tracking-wider uppercase mb-2">
                TRANQUILIDAD TOTAL
              </span>

              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                Reparación con Garantía por Escrito
              </h3>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Utilizamos refacciones de calidad original certificada y mano de obra calificada. Te mostramos las piezas reemplazadas para tu completa certeza.
              </p>
            </div>
          </div>
        </div>

        {/* Reassurance Banner with Direct Call to Action */}
        <div className="rounded-2xl bg-gradient-to-r from-[#0C1B30] via-[#0E2548] to-[#0A1628] border border-blue-500/30 p-5 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left shadow-xl">
          <div className="max-w-xl">
            <h4 className="text-base sm:text-xl font-bold text-white mb-1.5">
              ¿Tu auto tiene un testigo encendido o un ruido extraño?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Tráelo a diagnóstico con escáner en Hermosillo. Te decimos exactamente qué es antes de cobrarte un solo peso en piezas.
            </p>
          </div>

          <a
            href={getWhatsAppUrl('diagnostico')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm transition-all shadow-lg shadow-emerald-900/40 hover:scale-[1.02] active:scale-[0.98] shrink-0 min-h-[46px] w-full sm:w-auto"
          >
            <span>Agendar Diagnóstico por WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

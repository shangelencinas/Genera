import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../data/trustPoints';

export const WhatsAppButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-3.5 right-3.5 sm:bottom-6 sm:right-6 z-40 flex items-center gap-2.5">
      {/* Tooltip on hover */}
      <div
        className={`hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gradient-to-r from-slate-900/95 via-[#0A1629]/95 to-slate-900/95 text-white text-xs font-semibold shadow-[0_10px_30px_rgba(0,0,0,0.7),0_0_15px_rgba(16,185,129,0.25)] border border-emerald-500/40 pointer-events-none transition-all duration-300 backdrop-blur-md ${
          showTooltip ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="font-bold tracking-tight">Agenda tu cita por WhatsApp</span>
      </div>

      {/* Button Link */}
      <a
        href={CONTACT_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="relative group w-12 h-12 min-h-[48px] min-w-[48px] sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-emerald-600 via-emerald-500 to-teal-400 hover:from-emerald-500 hover:to-teal-300 text-white flex items-center justify-center shadow-[0_10px_30px_rgba(5,150,105,0.5),0_0_20px_rgba(16,185,129,0.4),inset_0_1px_2px_rgba(255,255,255,0.5)] border border-emerald-300/40 transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-300 shrink-0"
        aria-label="Contactar a Genera Automotriz por WhatsApp al (662) 433 0056"
      >
        {/* Pulsing ring */}
        <span
          className="absolute -inset-1.5 rounded-full bg-emerald-500/30 animate-ping pointer-events-none"
          aria-hidden="true"
        />

        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 fill-white drop-shadow-md" />
      </a>
    </div>
  );
};

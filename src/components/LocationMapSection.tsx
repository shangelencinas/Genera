import React from 'react';
import { MapPin, Clock, Phone, MessageCircle, Navigation, ExternalLink } from 'lucide-react';
import { CONTACT_INFO } from '../data/trustPoints';

export const LocationMapSection: React.FC = () => {
  const googleMapsSearchUrl = 'https://www.google.com/maps/search/?api=1&query=Genera+Automotriz+Hermosillo+Sonora';

  return (
    <section id="ubicacion" className="py-12 sm:py-20 bg-[#07111F] text-white border-t border-slate-800/80 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[300px] bg-[#164B9B]/15 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-[#38BDF8] text-xs font-bold tracking-wider uppercase mb-2.5">
            <MapPin className="w-3.5 h-3.5" />
            <span>NUESTRA UBICACIÓN</span>
          </div>

          <h2 className="text-2xl min-[360px]:text-3xl sm:text-4xl font-black tracking-tight text-white mb-3">
            Visítanos en Hermosillo, Sonora
          </h2>
          <p className="text-xs min-[360px]:text-sm sm:text-base text-slate-300">
            Taller equipado con tecnología de diagnóstico, elevadores y área de atención directa. Fácil acceso y atención inmediata.
          </p>
        </div>

        {/* Content Layout: Info Card + Interactive Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          {/* Left Column: Workshop Details & Action Buttons */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl">
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#164B9B]/25 border border-[#1769E0]/40 flex items-center justify-center text-[#38BDF8] shrink-0 mt-0.5 shadow-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono font-bold tracking-wider text-slate-400 uppercase block mb-0.5">
                    CIUDAD Y TALLER
                  </span>
                  <div className="text-base sm:text-lg font-bold text-white leading-snug">
                    Genera Automotriz
                  </div>
                  <div className="text-xs sm:text-sm text-slate-300 mt-1">
                    Hermosillo, Sonora, México
                  </div>
                  <div className="text-[11px] text-[#38BDF8] mt-1 font-mono">
                    Atención a particulares y flotillas
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3.5 pt-4 border-t border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5 shadow-sm">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono font-bold tracking-wider text-slate-400 uppercase block mb-0.5">
                    HORARIO DE SERVICIO
                  </span>
                  <div className="text-xs sm:text-sm font-semibold text-white">
                    Lunes a Viernes: <span className="font-mono text-emerald-400">8:00 AM – 6:30 PM</span>
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-white mt-1">
                    Sábados: <span className="font-mono text-emerald-400">8:30 AM – 2:00 PM</span>
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1">
                    Domingos: Cerrado
                  </div>
                </div>
              </div>

              {/* Phone & Direct Contact */}
              <div className="flex items-start gap-3.5 pt-4 border-t border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0 mt-0.5 shadow-sm">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono font-bold tracking-wider text-slate-400 uppercase block mb-0.5">
                    TELÉFONO Y CITAS
                  </span>
                  <a
                    href={`tel:${CONTACT_INFO.phoneRaw}`}
                    className="text-base sm:text-lg font-bold text-white hover:text-[#38BDF8] font-mono transition-colors block"
                  >
                    {CONTACT_INFO.phoneDisplay}
                  </a>
                  <span className="text-[11px] text-slate-400">
                    Llamada directa o confirmación por WhatsApp
                  </span>
                </div>
              </div>
            </div>

            {/* Direct Action Buttons (Mobile First) */}
            <div className="pt-6 sm:pt-8 mt-6 border-t border-slate-800 flex flex-col sm:flex-row gap-3">
              <a
                href={googleMapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs sm:text-sm transition-all border border-slate-700 hover:border-slate-600 min-h-[44px]"
              >
                <Navigation className="w-4 h-4 text-[#38BDF8]" />
                <span>Cómo Llegar (Maps)</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>

              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm transition-all shadow-md min-h-[44px]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Mandar WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: Google Maps Interactive Embed */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl relative min-h-[340px] sm:min-h-[440px] bg-slate-950">
            {/* Visual Business Marker Badge over Map */}
            <div className="absolute top-3.5 left-3.5 z-10 p-2.5 sm:p-3 rounded-2xl bg-slate-950/95 backdrop-blur-md border border-slate-700/90 shadow-2xl flex items-center gap-2.5 sm:gap-3 pointer-events-none">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-red-600 text-white flex items-center justify-center shadow-lg shadow-red-600/40 shrink-0">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 fill-white text-white" />
              </div>
              <div>
                <div className="text-xs sm:text-sm font-black text-white flex items-center gap-1.5 leading-tight">
                  <span>Genera Automotriz</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                </div>
                <div className="text-[10px] sm:text-[11px] text-slate-300">
                  Taller Mecánico y Diagnóstico • Hermosillo, Son.
                </div>
              </div>
            </div>

            {/* Embed Google Maps with close zoom (z=16) and marked business query */}
            <iframe
              title="Ubicación Genera Automotriz en Hermosillo"
              src="https://maps.google.com/maps?q=Genera+Automotriz,+Hermosillo,+Sonora&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '360px' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full filter contrast-105"
            />

            {/* Floating Quick Navigation Chip */}
            <div className="absolute bottom-3 left-3 right-3 sm:right-auto sm:max-w-xs p-3 rounded-xl bg-slate-950/90 backdrop-blur-md border border-slate-700/80 shadow-xl flex items-center justify-between gap-3 text-xs z-10">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-white font-medium">Taller Abierto en Hermosillo</span>
              </div>
              <a
                href={googleMapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#38BDF8] font-bold hover:underline shrink-0 flex items-center gap-1"
              >
                <span>Ver en App</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

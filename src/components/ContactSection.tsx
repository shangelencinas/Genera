import React, { useState, useLayoutEffect, useRef } from 'react';
import { CONTACT_INFO } from '../data/trustPoints';
import { SERVICES_DATA } from '../data/services';
import { getWhatsAppUrl } from '../utils/whatsapp';
import {
  MessageCircle,
  Phone,
  Clock,
  MapPin,
  Calendar,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Check
} from 'lucide-react';
import { gsap, prefersReducedMotion } from '../animations/gsap';

interface ContactSectionProps {
  initialServiceId?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialServiceId }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  const [selectedService, setSelectedService] = useState<string>(
    initialServiceId || 'mecanica-general'
  );

  React.useEffect(() => {
    if (initialServiceId) {
      setSelectedService(initialServiceId);
    }
  }, [initialServiceId]);

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            once: true
          }
        }
      );

      gsap.fromTo(
        leftColRef.current,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
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
        { opacity: 0, x: 30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
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

  const currentServiceObj = SERVICES_DATA.find((s) => s.id === selectedService);
  const currentWhatsAppLink = getWhatsAppUrl(selectedService);

  return (
    <section
      id="contacto"
      ref={sectionRef}
      className="relative py-14 sm:py-20 lg:py-28 bg-gradient-to-b from-[#07111F] via-[#09172E] to-[#050C17] text-white overflow-hidden border-t border-slate-800"
    >
      {/* Background Lighting Accents */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-[#164B9B]/20 rounded-full blur-[160px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-10 w-[400px] h-[300px] bg-emerald-600/10 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
        {/* Unified High-Impact Header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-[#164B9B]/30 border border-[#1769E0]/40 text-[#38BDF8] text-[10px] sm:text-xs font-bold tracking-wider uppercase mb-3 shadow-[0_0_12px_rgba(23,105,224,0.3)]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <Calendar className="w-3.5 h-3.5" />
            <span>ATENCIÓN TÉCNICA INMEDIATA</span>
          </div>

          <h2
            className="text-[47px] font-black tracking-tight text-white mb-3 sm:mb-4 leading-tight"
            style={{ fontSize: '47px' }}
          >
            ¿TU AUTO NECESITA SERVICIO? <br className="hidden sm:inline" />
            <span
              className="text-[60px] text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#1769E0] to-[#60A5FA]"
              style={{ fontSize: '60px' }}
            >
              AGENDA TU CITA
            </span>
          </h2>

          <p className="text-xs min-[360px]:text-sm sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto">
            Deja tu vehículo en manos de especialistas. Sin formularios ni demoras: coordina tu revisión con diagnóstico computarizado y refacciones originales directo por WhatsApp o llamada.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-stretch">
          {/* Left Column: Direct Contact Info & WhatsApp */}
          <div
            ref={leftColRef}
            className="lg:col-span-5 p-5 sm:p-8 lg:p-9 rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#0A1629] to-[#07111F] border border-slate-800 shadow-2xl flex flex-col justify-start"
          >
            <div>
              <h3 className="text-lg min-[360px]:text-xl sm:text-2xl font-black text-white mb-5 sm:mb-7 tracking-tight flex items-center gap-2">
                <span>Información de Contacto</span>
              </h3>

              <div className="space-y-4 sm:space-y-5">
                {/* WhatsApp Item */}
                <div className="flex items-start gap-3 sm:gap-4 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 shadow-sm">
                    <MessageCircle className="w-5 h-5 fill-emerald-400/20" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest block">
                      WhatsApp Oficial
                    </span>
                    <a
                      href={CONTACT_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm min-[360px]:text-base sm:text-lg font-bold font-mono text-white hover:text-emerald-400 transition-colors block truncate"
                    >
                      {CONTACT_INFO.phoneDisplay}
                    </a>
                    <span className="text-[10px] sm:text-xs text-emerald-400/90 block mt-0.5">
                      Respuesta en menos de 15 minutos
                    </span>
                  </div>
                </div>

                {/* Direct Phone Item */}
                <div className="flex items-start gap-3 sm:gap-4 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#164B9B]/20 border border-[#1769E0]/30 flex items-center justify-center text-[#38BDF8] shrink-0 shadow-sm">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest block">
                      Llamada Telefónica
                    </span>
                    <a
                      href={`tel:${CONTACT_INFO.phoneRaw}`}
                      className="text-sm min-[360px]:text-base sm:text-lg font-bold font-mono text-white hover:text-[#38BDF8] transition-colors block truncate"
                    >
                      {CONTACT_INFO.phoneDisplay}
                    </a>
                    <span className="text-[10px] sm:text-xs text-slate-400 block mt-0.5">
                      Atención técnica personalizada
                    </span>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start gap-3 sm:gap-4 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#164B9B]/20 border border-[#1769E0]/30 flex items-center justify-center text-[#38BDF8] shrink-0 shadow-sm">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest block">
                      Horario de Servicio
                    </span>
                    <p className="text-xs sm:text-sm text-slate-200 mt-0.5 font-medium leading-relaxed">
                      {CONTACT_INFO.horario}
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3 sm:gap-4 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#164B9B]/20 border border-[#1769E0]/30 flex items-center justify-center text-[#38BDF8] shrink-0 shadow-sm">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest block">
                      Ubicación
                    </span>
                    <p className="text-xs sm:text-sm text-slate-200 mt-0.5 font-medium">
                      {CONTACT_INFO.locationCity}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 1-Click WhatsApp Service Scheduler */}
          <div
            ref={rightColRef}
            className="lg:col-span-7 p-5 sm:p-8 lg:p-9 rounded-2xl sm:rounded-3xl bg-[#081324] border border-slate-800 shadow-2xl w-full flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-bold tracking-wide">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Sin formularios • Contacto en 1 clic</span>
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-white mb-2 tracking-tight">
                Elige tu servicio y agenda por WhatsApp
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 mb-5 sm:mb-6">
                Selecciona la opción que necesitas o pulsa el botón directo para iniciar conversación con un asesor técnico:
              </p>

              {/* Service Selection Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 mb-5">
                {SERVICES_DATA.map((srv) => {
                  const isSelected = selectedService === srv.id;
                  return (
                    <button
                      key={srv.id}
                      type="button"
                      onClick={() => setSelectedService(srv.id)}
                      className={`text-left p-3 sm:p-3.5 rounded-xl border transition-all flex items-center justify-between gap-2.5 ${
                        isSelected
                          ? 'bg-[#164B9B]/35 border-[#38BDF8] shadow-md shadow-blue-950/50'
                          : 'bg-slate-900/80 border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white'
                      }`}
                    >
                      <div className="min-w-0">
                        <span className="text-[10px] font-mono text-[#38BDF8] block font-bold">
                          {srv.number}
                        </span>
                        <span className="text-xs sm:text-sm font-bold text-white block truncate">
                          {srv.title}
                        </span>
                      </div>
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 border ${
                          isSelected
                            ? 'bg-[#1769E0] border-[#38BDF8] text-white'
                            : 'border-slate-700 bg-slate-800 text-transparent'
                        }`}
                      >
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Selected Service Card Highlight */}
              {currentServiceObj && (
                <div className="p-3.5 sm:p-4 rounded-xl bg-slate-900/90 border border-slate-700/80 mb-5 flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#38BDF8] shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <strong className="text-white block font-bold">{currentServiceObj.title}</strong>
                    <span>{currentServiceObj.description}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Direct WhatsApp Call to Action */}
            <div className="space-y-3 pt-2">
              <a
                href={currentWhatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full relative overflow-hidden inline-flex items-center justify-center gap-2.5 sm:gap-3 py-3.5 sm:py-4 px-6 rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-black text-sm sm:text-base shadow-xl shadow-emerald-950/40 hover:shadow-2xl transition-all active:scale-[0.98] border border-emerald-400/40 min-h-[50px]"
              >
                <MessageCircle className="w-5 h-5 fill-white shrink-0" />
                <span className="tracking-wide">
                  AGENDAR CITA POR WHATSAPP ({currentServiceObj ? currentServiceObj.title : 'GENERAL'})
                </span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </a>

              <p className="text-center text-[11px] sm:text-xs text-slate-400">
                Horario de atención: {CONTACT_INFO.horario} • Respuesta promedio menor a 15 min.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

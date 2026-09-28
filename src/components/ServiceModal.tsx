import React, { useEffect } from 'react';
import { ServiceItem } from '../types';
import { X, Check, Calendar, ShieldCheck, PhoneCall, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/whatsapp';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBookService: (serviceId: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  onClose,
  onBookService
}) => {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (service) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [service]);

  if (!service) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-3.5 sm:p-4 bg-black/80 backdrop-blur-md transition-opacity duration-200 overflow-y-auto"
      style={{ zIndex: 100 }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-service-title"
    >
      <div
        className="relative z-[100] w-full max-w-lg rounded-2xl bg-[#081324] border border-slate-700/80 shadow-2xl p-5 sm:p-8 text-left max-h-[90vh] overflow-y-auto flex flex-col justify-between my-auto"
        style={{ zIndex: 100 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Accent Bar */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#164B9B] via-[#1769E0] to-[#38BDF8]" />

        {/* Modal Header */}
        <div>
          <div className="flex items-start justify-between mb-3 sm:mb-4">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#164B9B]/30 border border-[#1769E0]/40 text-[#38BDF8] text-xs font-mono font-bold">
              <span>SERVICIO {service.number}</span>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors focus:outline-none min-h-[36px] min-w-[36px] flex items-center justify-center"
              aria-label="Cerrar ventana de detalles"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Service Photography Banner */}
          <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden mb-4 border border-slate-700/80 bg-slate-900 group">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#081324] via-[#081324]/20 to-transparent" />
          </div>

          <h3 id="modal-service-title" className="text-xl sm:text-2xl font-extrabold text-white tracking-tight mb-2">
            {service.title}
          </h3>

          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6 font-normal">
            {service.description}
          </p>

          {/* Included Service Points */}
          <div className="mb-5 sm:mb-6">
            <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5 sm:mb-3 font-sans">
              Procedimientos y Alcance Incluido:
            </h4>
            <ul className="space-y-2 sm:space-y-2.5">
              {service.details.map((detail, index) => (
                <li key={index} className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm text-slate-200">
                  <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#1769E0]/20 border border-[#1769E0]/50 flex items-center justify-center shrink-0 mt-0.5 text-[#38BDF8]">
                    <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                  </span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-3 sm:p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center gap-3 mb-5 sm:mb-6">
            <ShieldCheck className="w-5 h-5 text-[#38BDF8] shrink-0" />
            <p className="text-[11px] sm:text-xs text-slate-300">
              Garantía en mano de obra y refacciones de calidad certificadas por Genera Automotriz.
            </p>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="pt-3.5 sm:pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center gap-2.5 sm:gap-3">
          <a
            href={getWhatsAppUrl(service.id)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 sm:px-5 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-teal-500 rounded-xl shadow-lg transition-all active:scale-[0.98] min-h-[44px]"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Agendar este servicio por WhatsApp</span>
          </a>

          <a
            href="tel:6624330056"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-4 text-xs sm:text-sm font-semibold text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700/80 rounded-xl transition-all min-h-[44px]"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Llamar</span>
          </a>
        </div>
      </div>
    </div>
  );
};

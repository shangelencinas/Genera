import React, { useRef } from 'react';
import { ServiceItem } from '../types';
import {
  Wrench,
  Disc,
  Cpu,
  BatteryCharging,
  Droplet,
  Gauge,
  Scan,
  CircleDot,
  ArrowRight
} from 'lucide-react';
import { gsap } from '../animations/gsap';
import { getWhatsAppUrl } from '../utils/whatsapp';

interface ServiceCardProps {
  service: ServiceItem;
  onSelectService: (service: ServiceItem) => void;
  onQuickBook: (serviceId: string) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  onSelectService,
  onQuickBook
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'wrench':
        return <Wrench className="w-5 h-5 sm:w-6 sm:h-6 text-[#38BDF8]" />;
      case 'disc':
        return <Disc className="w-5 h-5 sm:w-6 sm:h-6 text-[#38BDF8]" />;
      case 'cpu':
        return <Cpu className="w-5 h-5 sm:w-6 sm:h-6 text-[#38BDF8]" />;
      case 'battery-charging':
        return <BatteryCharging className="w-5 h-5 sm:w-6 sm:h-6 text-[#38BDF8]" />;
      case 'droplet':
        return <Droplet className="w-5 h-5 sm:w-6 sm:h-6 text-[#38BDF8]" />;
      case 'gauge':
        return <Gauge className="w-5 h-5 sm:w-6 sm:h-6 text-[#38BDF8]" />;
      case 'scan':
        return <Scan className="w-5 h-5 sm:w-6 sm:h-6 text-[#38BDF8]" />;
      case 'circle-dot':
        return <CircleDot className="w-5 h-5 sm:w-6 sm:h-6 text-[#38BDF8]" />;
      default:
        return <Wrench className="w-5 h-5 sm:w-6 sm:h-6 text-[#38BDF8]" />;
    }
  };

  const handleMouseEnter = () => {
    if (cardRef.current) {
      gsap.to(cardRef.current, {
        y: -6,
        boxShadow: '0 20px 35px -8px rgba(0, 0, 0, 0.6), 0 0 20px 2px rgba(23, 105, 224, 0.25)',
        duration: 0.3,
        ease: 'power2.out'
      });
    }
    if (iconRef.current) {
      gsap.to(iconRef.current, {
        scale: 1.1,
        duration: 0.3,
        ease: 'power2.out'
      });
    }
    if (lineRef.current) {
      gsap.to(lineRef.current, {
        scaleX: 1,
        duration: 0.3,
        ease: 'power2.out'
      });
    }
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      gsap.to(cardRef.current, {
        y: 0,
        boxShadow: '0 4px 15px -3px rgba(0, 0, 0, 0.3)',
        duration: 0.3,
        ease: 'power2.out'
      });
    }
    if (iconRef.current) {
      gsap.to(iconRef.current, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out'
      });
    }
    if (lineRef.current) {
      gsap.to(lineRef.current, {
        scaleX: 0,
        duration: 0.3,
        ease: 'power2.out'
      });
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="service-card group relative flex flex-col justify-between p-4 min-[360px]:p-5 sm:p-7 rounded-2xl bg-gradient-to-b from-[#091526]/95 to-[#07111F]/95 backdrop-blur-md border border-slate-800 hover:border-[#1769E0]/60 shadow-xl transition-all duration-300 overflow-hidden cursor-pointer active:scale-[0.99]"
      onClick={() => onSelectService(service)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelectService(service);
        }
      }}
      aria-label={`Ver detalles del servicio: ${service.title}`}
    >
      {/* Top Blue Active Accent Line */}
      <div
        ref={lineRef}
        className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#164B9B] via-[#1769E0] to-[#38BDF8] transform scale-x-0 origin-left z-10"
        aria-hidden="true"
      />

      {/* Photo Header */}
      <div className="relative h-28 min-[360px]:h-32 sm:h-36 -mx-4 -mt-4 min-[360px]:-mx-5 min-[360px]:-mt-5 sm:-mx-7 sm:-mt-7 mb-3.5 sm:mb-4 overflow-hidden bg-slate-900">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#091526] via-[#091526]/20 to-transparent" />

        {/* Clean Number Badge floating on photo */}
        <span className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded bg-slate-950/80 backdrop-blur-sm text-[10px] sm:text-xs font-mono font-extrabold tracking-wider text-[#38BDF8] border border-slate-700/80 shadow">
          {service.number}
        </span>
      </div>

      {/* Card Content Top */}
      <div>
        <div className="flex items-start justify-between mb-2.5 sm:mb-3.5">
          {/* Circular Icon Container */}
          <div
            ref={iconRef}
            className="w-9 h-9 min-[360px]:w-10 min-[360px]:h-10 sm:w-11 sm:h-11 rounded-xl bg-[#164B9B]/20 border border-[#1769E0]/30 flex items-center justify-center p-1.5 min-[360px]:p-2 sm:p-2.5 group-hover:bg-[#164B9B]/35 group-hover:border-[#1769E0]/60 group-hover:shadow-[0_0_15px_rgba(56,189,248,0.3)] transition-all shadow-sm"
          >
            {getIcon(service.icon)}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-sm min-[360px]:text-base sm:text-xl font-extrabold text-white group-hover:text-[#38BDF8] transition-colors tracking-tight mb-1.5 sm:mb-2 leading-snug">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-3.5 sm:mb-4 line-clamp-2">
          {service.description}
        </p>
      </div>

      {/* Card Bottom / Action Row */}
      <div className="pt-3 sm:pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold gap-2">
        <span className="text-[#38BDF8] group-hover:text-[#60A5FA] inline-flex items-center gap-1 transition-colors font-bold min-h-[36px] sm:min-h-[38px]">
          <span>Detalles</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </span>

        <a
          href={getWhatsAppUrl(service.id)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="px-2.5 min-[360px]:px-3.5 py-1.5 sm:py-2 rounded-lg bg-[#164B9B]/25 hover:bg-emerald-600 text-[#38BDF8] hover:text-white border border-[#1769E0]/40 hover:border-emerald-500 transition-all text-[11px] sm:text-xs font-bold shadow-sm min-h-[36px] sm:min-h-[38px] flex items-center justify-center active:scale-95"
          aria-label={`Agendar cita por WhatsApp para ${service.title}`}
        >
          Agendar Cita
        </a>
      </div>
    </div>
  );
};

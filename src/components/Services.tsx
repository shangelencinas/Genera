import React, { useState, useLayoutEffect, useRef } from 'react';
import { SERVICES_DATA } from '../data/services';
import { ServiceCard } from './ServiceCard';
import { ServiceModal } from './ServiceModal';
import { ServiceItem } from '../types';
import { gsap, prefersReducedMotion } from '../animations/gsap';
import { Wrench } from 'lucide-react';

interface ServicesProps {
  onOpenAppointmentModal: (serviceId?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenAppointmentModal }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      // Header Animation
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 85%',
            once: true
          }
        }
      );

      // Stagger Cards Animation
      if (gridRef.current) {
        const cards = Array.from(gridRef.current.children);
        gsap.fromTo(
          cards,
          { opacity: 0, y: 45 },
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            stagger: 0.08,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: gridRef.current,
              start: 'top 80%',
              once: true
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="servicios"
      ref={sectionRef}
      className={`relative py-12 sm:py-20 lg:py-28 bg-[#07111F] text-white overflow-hidden border-t border-slate-800 ${
        selectedService ? 'z-[60]' : 'z-20'
      }`}
    >
      {/* Volumetric Radial Glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#164B9B]/20 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Subtle Pattern Grid for Dark Canvas */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-8 sm:mb-14 lg:mb-20">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-[#164B9B]/25 border border-[#1769E0]/40 text-[#38BDF8] text-[10.5px] sm:text-xs font-bold tracking-wider sm:tracking-widest uppercase mb-2.5 sm:mb-4 shadow-[0_0_12px_rgba(23,105,224,0.3)]">
            <Wrench className="w-3.5 h-3.5 text-[#38BDF8]" />
            <span>NUESTROS SERVICIOS</span>
          </div>

          <h2 className="text-2xl min-[360px]:text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-2.5 sm:mb-4 leading-tight">
            TODO LO QUE TU AUTO NECESITA
          </h2>

          <p className="text-xs min-[360px]:text-sm sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto">
            Soluciones profesionales para mantener tu vehículo seguro, confiable y en óptimas condiciones con tecnología especializada.
          </p>
        </div>

        {/* 8 Services Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6"
        >
          {SERVICES_DATA.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onSelectService={(s) => setSelectedService(s)}
              onQuickBook={(id) => onOpenAppointmentModal(id)}
            />
          ))}
        </div>
      </div>

      {/* Service Details Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onBookService={(id) => onOpenAppointmentModal(id)}
      />
    </section>
  );
};

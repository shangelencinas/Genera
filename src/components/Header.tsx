import React, { useState, useEffect } from 'react';
import { GeneraLogo } from './BrandLogos';
import { Phone, MessageCircle, Menu, X, Calendar, ArrowRight } from 'lucide-react';
import { CONTACT_INFO } from '../data/trustPoints';

interface HeaderProps {
  onOpenAppointmentModal: (serviceId?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenAppointmentModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ['inicio', 'servicios', 'por-que-genera', 'nosotros', 'contacto'];
      const scrollPos = window.scrollY + 220;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Inicio', href: '#inicio', id: 'inicio' },
    { label: 'Servicios', href: '#servicios', id: 'servicios' },
    { label: '¿Por qué Genera?', href: '#por-que-genera', id: 'por-que-genera' },
    { label: 'Nosotros', href: '#nosotros', id: 'nosotros' },
    { label: 'Contacto', href: '#contacto', id: 'contacto' }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#07111F]/95 backdrop-blur-xl border-b border-slate-700/60 shadow-2xl shadow-black/50 py-2.5 sm:py-3'
            : 'bg-gradient-to-b from-[#050C17]/95 via-[#07111F]/70 to-transparent py-3.5 sm:py-5'
        }`}
      >
        {/* Subtle Top Thin Blue Laser Line when scrolled */}
        {isScrolled && (
          <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#1769E0] to-transparent opacity-80" />
        )}

        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-1.5 sm:gap-4">
            {/* Zone 1: Brand Wordmark */}
            <a
              href="#inicio"
              className="group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1769E0] rounded-lg transition-transform hover:scale-[1.02] active:scale-[0.99] shrink-0"
              aria-label="Genera Automotriz - Volver al inicio"
            >
              <GeneraLogo
                className="h-14"
                imgStyle={{ width: '165.531px', height: '56px' }}
                variant="light"
              />
            </a>

            {/* Zone 2: Navigation Links (Desktop) */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    className={`relative px-4 py-1.5 text-xs xl:text-sm font-semibold tracking-wide transition-all rounded-full ${
                      isActive
                        ? 'text-white bg-[#164B9B]/60 shadow-[0_0_12px_rgba(23,105,224,0.4)] border border-[#1769E0]/40'
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span>{link.label}</span>
                  </a>
                );
              })}
            </nav>

            {/* Zone 3: Primary Actions */}
            <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
              {/* Direct call badge (Large screens) */}
              <a
                href={`tel:${CONTACT_INFO.phoneRaw}`}
                className="hidden xl:inline-flex items-center gap-2.5 text-xs font-semibold text-slate-200 hover:text-white px-3.5 py-2 rounded-xl bg-slate-900/70 hover:bg-slate-800/80 border border-slate-700/60 transition-all shadow-sm"
                title="Llamada telefónica inmediata"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <Phone className="w-3.5 h-3.5 text-[#38BDF8]" />
                <span className="font-mono tracking-tight">{CONTACT_INFO.phoneDisplay}</span>
              </a>

              {/* Primary Appointment Button - Links directly to WhatsApp */}
              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group overflow-hidden inline-flex items-center justify-center gap-1.5 sm:gap-2 px-2.5 min-[360px]:px-3 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#164B9B] via-[#1769E0] to-[#2563EB] hover:from-[#1769E0] hover:to-[#1D4ED8] rounded-xl shadow-lg shadow-[#164B9B]/35 hover:shadow-xl hover:shadow-[#1769E0]/50 transition-all active:scale-[0.98] border border-blue-400/20 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] min-h-[38px] sm:min-h-[42px]"
                aria-label="Agendar cita por WhatsApp en Genera Automotriz"
              >
                {/* Button Sheen Shimmer */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
                <Calendar className="w-3.5 h-3.5 min-[360px]:w-4 min-[360px]:h-4 text-white shrink-0" />
                <span className="hidden min-[380px]:inline tracking-wide">AGENDA TU CITA</span>
                <span className="min-[380px]:hidden tracking-wide text-[10.5px]">CITAS</span>
              </a>

              {/* Mobile menu hamburger toggle */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-slate-300 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 rounded-xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1769E0] min-h-[38px] min-w-[38px] sm:min-h-[42px] sm:min-w-[42px] flex items-center justify-center"
                aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú de navegación'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer with Backdrop */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md lg:hidden transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="fixed top-0 right-0 bottom-0 w-[85vw] max-w-[320px] bg-[#07111F] border-l border-slate-800 p-4 min-[360px]:p-5 sm:p-6 flex flex-col justify-between shadow-2xl overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <GeneraLogo className="h-6 min-[360px]:h-7 sm:h-8" variant="light" />
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 focus:outline-none min-h-[44px] min-w-[44px] flex items-center justify-center"
                  aria-label="Cerrar menú"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="mt-4 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-3.5 py-3 text-sm font-semibold text-slate-200 hover:text-white hover:bg-slate-800/80 rounded-xl transition-colors min-h-[46px]"
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="w-4 h-4 text-slate-500" />
                  </a>
                ))}
              </nav>
            </div>

            <div className="pt-4 border-t border-slate-800 flex flex-col gap-2.5">
              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 text-sm font-bold text-white bg-gradient-to-r from-[#164B9B] to-[#1769E0] rounded-xl shadow-lg min-h-[46px]"
              >
                <Calendar className="w-4 h-4" />
                <span>AGENDA TU CITA</span>
              </a>

              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 text-xs min-[360px]:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl transition-colors shadow-md shadow-emerald-950/40 min-h-[46px]"
              >
                <MessageCircle className="w-4 h-4 fill-white shrink-0" />
                <span className="truncate">WhatsApp: {CONTACT_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

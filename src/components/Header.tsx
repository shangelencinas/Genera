import React, { useState, useEffect } from 'react';
import { GeneraLogo } from './BrandLogos';
import { MessageCircle, Menu, X, Calendar, ArrowRight } from 'lucide-react';
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

      const sections = ['inicio', 'por-que-genera', 'servicios', 'resenas', 'ubicacion', 'contacto'];
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
    { label: 'Nuestra Regla', href: '#por-que-genera', id: 'por-que-genera' },
    { label: 'Servicios', href: '#servicios', id: 'servicios' },
    { label: 'Reseñas', href: '#resenas', id: 'resenas' },
    { label: 'Blog', href: 'https://generamx.com/blog/', id: 'blog' },
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
                className="h-[67px]"
                imgStyle={{ width: '160.1719px', height: '67px' }}
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

            {/* Zone 3: Primary Actions & Social Links */}
            <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
              {/* Social Media Links: Facebook & Instagram */}
              <div className="flex items-center gap-1.5 sm:gap-2">
                <a
                  href="https://www.facebook.com/GeneraAutomotriz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#1877F2] hover:bg-[#166fe5] text-white flex items-center justify-center transition-all shadow-md shadow-[#1877F2]/30 hover:shadow-lg hover:shadow-[#1877F2]/50 hover:scale-105 active:scale-95 border border-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1877F2]"
                  aria-label="Facebook de Genera Automotriz"
                  title="Visitar Facebook de Genera Automotriz"
                >
                  <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5 fill-white" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>

                <a
                  href="https://www.instagram.com/generaautomotriz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] hover:opacity-95 text-white flex items-center justify-center transition-all shadow-md shadow-[#DD2A7B]/30 hover:shadow-lg hover:shadow-[#DD2A7B]/50 hover:scale-105 active:scale-95 border border-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#DD2A7B]"
                  aria-label="Instagram de Genera Automotriz"
                  title="Visitar Instagram de Genera Automotriz"
                >
                  <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5 fill-white" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>

              {/* Primary Appointment Button - Hidden on mobile, shown on tablet/desktop */}
              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group overflow-hidden hidden sm:inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#164B9B] via-[#1769E0] to-[#2563EB] hover:from-[#1769E0] hover:to-[#1D4ED8] rounded-xl shadow-lg shadow-[#164B9B]/35 hover:shadow-xl hover:shadow-[#1769E0]/50 transition-all active:scale-[0.98] border border-blue-400/20 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] min-h-[38px] sm:min-h-[42px]"
                aria-label="Agendar cita por WhatsApp en Genera Automotriz"
              >
                {/* Button Sheen Shimmer */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
                <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white shrink-0" />
                <span className="tracking-wide">AGENDA TU CITA</span>
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

              {/* Social Media in Mobile Drawer */}
              <div className="flex items-center justify-center gap-2 pt-1">
                <a
                  href="https://www.facebook.com/GeneraAutomotriz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 text-xs font-bold text-white bg-[#1877F2] hover:bg-[#166fe5] rounded-xl shadow-md shadow-[#1877F2]/30 transition-all min-h-[42px] active:scale-95"
                  aria-label="Facebook Genera Automotriz"
                >
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span>Facebook</span>
                </a>

                <a
                  href="https://www.instagram.com/generaautomotriz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 text-xs font-bold text-white bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] hover:opacity-95 rounded-xl shadow-md shadow-[#DD2A7B]/30 transition-all min-h-[42px] active:scale-95"
                  aria-label="Instagram Genera Automotriz"
                >
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

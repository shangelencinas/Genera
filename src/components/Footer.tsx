import React from 'react';
import { GeneraLogo } from './BrandLogos';
import { CONTACT_INFO } from '../data/trustPoints';
import { MessageCircle, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const servicesList = [
    { label: 'Diagnóstico Computarizado', href: '#servicios' },
    { label: 'Mecánica General', href: '#servicios' },
    { label: 'Frenos', href: '#servicios' },
    { label: 'Suspensión', href: '#servicios' },
    { label: 'Alineación y Balanceo', href: '#servicios' },
    { label: 'Llantas', href: '#servicios' }
  ];

  const companyLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Nuestra Regla de Oro', href: '#por-que-genera' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Reseñas de Clientes', href: '#resenas' },
    { label: 'Ubicación y Mapa', href: '#ubicacion' },
    { label: 'Contacto', href: '#contacto' }
  ];

  return (
    <footer className="bg-[#040810] border-t border-slate-800/80 text-slate-300 pt-10 sm:pt-16 pb-20 sm:pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-x-4 sm:gap-x-8 gap-y-8 sm:gap-y-10 lg:gap-12 pb-8 sm:pb-14 border-b border-slate-800/80">
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-4 flex flex-col items-start">
            <a href="#inicio" className="mb-3.5 inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1769E0] rounded">
              <GeneraLogo
                className="h-[60px]"
                imgStyle={{ width: '150px', height: '60px' }}
                variant="light"
              />
            </a>

            <p className="text-xs sm:text-sm text-slate-400 font-normal leading-relaxed mb-5 max-w-sm">
              Experiencia, tecnología y servicio que te dan confianza. Diagnóstico computarizado, mecánica de precisión y atención honesta para tu automóvil.
            </p>

            {/* Social Links with Touch Targets & Brand Colors */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 min-h-[44px] min-w-[44px] rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-md shadow-[#25D366]/30 transition-all hover:scale-105 active:scale-95"
                aria-label="WhatsApp Genera Automotriz"
                title="WhatsApp Genera Automotriz"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
              </a>

              <a
                href="https://www.facebook.com/GeneraAutomotriz"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 min-h-[44px] min-w-[44px] rounded-xl bg-[#1877F2] hover:bg-[#166fe5] text-white flex items-center justify-center shadow-md shadow-[#1877F2]/30 transition-all hover:scale-105 active:scale-95"
                aria-label="Facebook Genera Automotriz"
                title="Facebook Genera Automotriz"
              >
                <svg className="w-4.5 h-4.5 fill-white" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              <a
                href="https://www.instagram.com/generaautomotriz"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 min-h-[44px] min-w-[44px] rounded-xl bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] hover:opacity-95 text-white flex items-center justify-center shadow-md shadow-[#DD2A7B]/30 transition-all hover:scale-105 active:scale-95"
                aria-label="Instagram Genera Automotriz"
                title="Instagram Genera Automotriz"
              >
                <svg className="w-4.5 h-4.5 fill-white" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Empresa Links */}
          <div className="col-span-1 lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-2.5 sm:mb-4 font-sans">
              EMPRESA
            </h4>
            <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
              {companyLinks.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    className="text-slate-400 hover:text-[#38BDF8] transition-colors py-1.5 min-h-[36px] flex items-center"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Servicios Links */}
          <div className="col-span-1 lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-2.5 sm:mb-4 font-sans">
              SERVICIOS
            </h4>
            <ul className="grid grid-cols-1 gap-1 sm:gap-1.5 text-xs sm:text-sm">
              {servicesList.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    className="text-slate-400 hover:text-[#38BDF8] transition-colors py-1 min-h-[34px] flex items-center leading-snug"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="col-span-2 lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-2.5 sm:mb-4 font-sans">
              CONTACTO DIRECTO
            </h4>
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-x-4 gap-y-3 items-end text-xs sm:text-sm">
              <div className="col-start-1 row-start-1 w-[127.5px] lg:w-auto">
                <span className="text-[10.5px] sm:text-xs text-slate-400 block">WhatsApp de Citas:</span>
                <a
                  href={CONTACT_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-white hover:text-emerald-400 font-mono transition-colors text-xs min-[360px]:text-sm sm:text-base inline-block py-0.5 sm:py-1"
                >
                  {CONTACT_INFO.phoneDisplay}
                </a>
              </div>

              <div className="col-start-1 row-start-2 w-[127.5px] lg:w-auto">
                <span className="text-[10.5px] sm:text-xs text-slate-400 block">Ubicación:</span>
                <span className="text-slate-300">{CONTACT_INFO.locationCity}</span>
              </div>

              <div className="col-start-2 row-start-1 row-span-2 flex flex-col justify-end self-end lg:self-auto lg:col-start-auto lg:row-start-auto lg:row-span-1 pt-0 lg:pt-1.5">
                <a
                  href={CONTACT_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-2.5 rounded-lg bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-600 hover:text-white transition-all text-[11px] min-[360px]:text-xs font-semibold min-h-[40px] text-center w-[170.5px] -ml-[10px] lg:ml-0 lg:w-auto"
                >
                  <MessageCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>Chatear por WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-5 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} Genera Automotriz. Todos los derechos reservados.
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors py-1.5 min-h-[36px]"
          >
            <span>Volver arriba</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

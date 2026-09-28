import React from 'react';
import { GeneraLogo } from './BrandLogos';
import { CONTACT_INFO } from '../data/trustPoints';
import { MessageCircle, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const servicesList = [
    { label: 'Mecánica General', href: '#servicios' },
    { label: 'Frenos y Suspensión', href: '#servicios' },
    { label: 'Diagnóstico Computarizado', href: '#servicios' },
    { label: 'Sistema Eléctrico', href: '#servicios' },
    { label: 'Cambio de Aceite', href: '#servicios' },
    { label: 'Afinación', href: '#servicios' },
    { label: 'Scanner Automotriz', href: '#servicios' },
    { label: 'Alineación y Balanceo', href: '#servicios' }
  ];

  const companyLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Servicios', href: '#servicios' },
    { label: '¿Por qué Genera?', href: '#por-que-genera' },
    { label: 'Nosotros', href: '#nosotros' },
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

            {/* Social Placeholders with Touch Targets */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 min-h-[44px] min-w-[44px] rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
                aria-label="WhatsApp Genera Automotriz"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <span
                className="w-10 h-10 min-h-[44px] min-w-[44px] rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-500 hover:text-white transition-colors cursor-pointer select-none"
                title="Facebook (Próximamente)"
              >
                <span className="text-xs font-bold">FB</span>
              </span>
              <span
                className="w-10 h-10 min-h-[44px] min-w-[44px] rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-500 hover:text-white transition-colors cursor-pointer select-none"
                title="Instagram (Próximamente)"
              >
                <span className="text-xs font-bold">IG</span>
              </span>
              <span
                className="w-10 h-10 min-h-[44px] min-w-[44px] rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-500 hover:text-white transition-colors cursor-pointer select-none"
                title="TikTok (Próximamente)"
              >
                <span className="text-xs font-bold">TT</span>
              </span>
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

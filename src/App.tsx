/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { DiagnosticFirstRule } from './components/DiagnosticFirstRule';
import { Services } from './components/Services';
import { GoogleReviews } from './components/GoogleReviews';
import { LocationMapSection } from './components/LocationMapSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { PeisaPartnership } from './components/PeisaPartnership';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { PageLoader } from './components/PageLoader';
import { BlogPostTemplatePage } from './components/BlogPostTemplatePage';
import { getWhatsAppUrl } from './utils/whatsapp';

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentView, setCurrentView] = useState<'home' | 'blog-template'>(() => {
    if (typeof window !== 'undefined') {
      return (window.location.hash === '#blog-template' || window.location.hash === '#single-post')
        ? 'blog-template'
        : 'home';
    }
    return 'home';
  });

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#blog-template' || window.location.hash === '#single-post') {
        setCurrentView('blog-template');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (!window.location.hash || window.location.hash === '#inicio') {
        setCurrentView('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleOpenAppointmentModal = (serviceId?: string) => {
    window.location.href = getWhatsAppUrl(serviceId);
  };

  const handleOpenBlogTemplate = () => {
    window.location.hash = 'blog-template';
    setCurrentView('blog-template');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    window.location.hash = 'inicio';
    setCurrentView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (currentView === 'blog-template') {
    return (
      <BlogPostTemplatePage 
        onBackToHome={handleBackToHome}
      />
    );
  }

  return (
    <div className="relative min-h-screen w-full max-w-full overflow-x-hidden bg-[#07111F] text-slate-100 flex flex-col font-sans selection:bg-[#1769E0] selection:text-white">
      {/* Fast Initial Page Transition */}
      {!isLoaded && <PageLoader onLoaded={() => setIsLoaded(true)} />}

      {/* Sticky High-Tech Navigation Header */}
      <Header 
        onOpenAppointmentModal={handleOpenAppointmentModal}
      />

      {/* Main Content Sections - Clean, fast, mobile-first */}
      <main className="flex-1">
        {/* 1. Hero: Taller automotriz en Hermosillo · Diagnóstico preciso. Soluciones confiables */}
        <Hero onOpenAppointmentModal={() => handleOpenAppointmentModal()} />

        {/* Quick Trust Bar: 5 Pillars */}
        <TrustBar />

        {/* 2. Core Rule: "Primero diagnosticamos, después reparamos" */}
        <DiagnosticFirstRule />

        {/* 3. The 6 Main Specialized Services */}
        <Services onOpenAppointmentModal={handleOpenAppointmentModal} />

        {/* 4. Google Reviews (Hermosillo Drivers - 4.9 Stars) */}
        <GoogleReviews />

        {/* 5. Location & Google Maps (Hermosillo, Sonora) */}
        <LocationMapSection />

        {/* 6. Key Guarantees & Why Choose Us */}
        <WhyChooseUs />

        {/* 7. PEISA Commercial Parts Partnership */}
        <PeisaPartnership />

        {/* 8. Direct Contact & Booking */}
        <ContactSection />
      </main>

      {/* Dark Corporate Automotive Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppButton />
    </div>
  );
}

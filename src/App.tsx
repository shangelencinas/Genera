/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { DiagnosticsSection } from './components/DiagnosticsSection';
import { MechanicsSection } from './components/MechanicsSection';
import { BrakesSection } from './components/BrakesSection';
import { AboutSection } from './components/AboutSection';
import { PeisaPartnership } from './components/PeisaPartnership';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { PageLoader } from './components/PageLoader';
import { getWhatsAppUrl } from './utils/whatsapp';

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleOpenAppointmentModal = (serviceId?: string) => {
    window.location.href = getWhatsAppUrl(serviceId);
  };

  return (
    <div className="relative min-h-screen w-full max-w-full overflow-x-hidden bg-[#07111F] text-slate-100 flex flex-col font-sans selection:bg-[#1769E0] selection:text-white">
      {/* 1-second Luxury Initial Page Loader */}
      {!isLoaded && <PageLoader onLoaded={() => setIsLoaded(true)} />}

      {/* Sticky High-Tech Navigation Header */}
      <Header onOpenAppointmentModal={handleOpenAppointmentModal} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero with Three.js 3D automotive engineering canvas & workshop visual */}
        <Hero onOpenAppointmentModal={() => handleOpenAppointmentModal()} />

        {/* Trust Bar (5 Pillars: Diagnóstico, Honestidad, Refacciones, Técnicos, Garantía) */}
        <TrustBar />

        {/* 8 Automotive Services Grid with interactive modal details */}
        <Services onOpenAppointmentModal={handleOpenAppointmentModal} />

        {/* "Tu Auto en Buenas Manos" Benefits Showcase */}
        <WhyChooseUs />

        {/* Diagnostics Technology Showcase */}
        <DiagnosticsSection onOpenAppointmentModal={handleOpenAppointmentModal} />

        {/* Mechanics General Divided Section */}
        <MechanicsSection onOpenAppointmentModal={handleOpenAppointmentModal} />

        {/* Brakes & Suspension Performance Section */}
        <BrakesSection onOpenAppointmentModal={handleOpenAppointmentModal} />

        {/* About Genera Automotriz Editorial Section */}
        <AboutSection />

        {/* PEISA Commercial Alliance Showcase */}
        <PeisaPartnership />

        {/* Unified Contact & WhatsApp Booking Section (Combined CTA & Contact, 100% Form-Free) */}
        <ContactSection />
      </main>

      {/* Dark Corporate Automotive Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button with Tooltip */}
      <WhatsAppButton />
    </div>
  );
}

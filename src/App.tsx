import React, { useState, useEffect } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HomePage } from './components/home/HomePage';
import { DestinationsPage } from './components/destinations/DestinationsPage';
import { DestinationDetailPage } from './components/destinations/DestinationDetailPage';
import { PackagesPage } from './components/packages/PackagesPage';
import { PackageDetailPage } from './components/packages/PackageDetailPage';
import { AboutPage } from './components/about/AboutPage';
import { ContactPage } from './components/contact/ContactPage';
import { LegalPage } from './components/legal/LegalPage';
import { EnquiryModal } from './components/common/EnquiryModal';
import { WhatsAppWidget } from './components/common/WhatsAppWidget';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<string>('home');
  const [routeParam, setRouteParam] = useState<string | undefined>(undefined);
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [enquiryPrefill, setEnquiryPrefill] = useState<{ destination?: string; packageName?: string }>({});

  const handleNavigate = (route: string, param?: string) => {
    setCurrentRoute(route);
    setRouteParam(param);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenEnquiry = (prefill?: { destination?: string; packageName?: string }) => {
    setEnquiryPrefill(prefill || {});
    setIsEnquiryModalOpen(true);
  };

  const handleCloseEnquiry = () => {
    setIsEnquiryModalOpen(false);
    setEnquiryPrefill({});
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF9F5] text-stone-900 font-sans antialiased selection:bg-[#C5A059]/30 selection:text-[#0B1B36]">
      {/* Global Navigation Header */}
      <Header
        currentRoute={currentRoute}
        onNavigate={handleNavigate}
        onOpenEnquiry={handleOpenEnquiry}
      />

      {/* Main View Router */}
      <main className="flex-grow">
        {currentRoute === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenEnquiry={handleOpenEnquiry}
          />
        )}

        {currentRoute === 'destinations' && (
          <DestinationsPage
            initialCategory={routeParam || 'all'}
            onNavigate={handleNavigate}
          />
        )}

        {currentRoute === 'destination-detail' && (
          <DestinationDetailPage
            destinationId={routeParam || 'delhi'}
            onNavigate={handleNavigate}
            onOpenEnquiry={handleOpenEnquiry}
          />
        )}

        {currentRoute === 'packages' && (
          <PackagesPage
            onNavigate={handleNavigate}
            onOpenEnquiry={handleOpenEnquiry}
          />
        )}

        {currentRoute === 'package-detail' && (
          <PackageDetailPage
            packageId={routeParam || 'delhi-shimla-manali'}
            onNavigate={handleNavigate}
            onOpenEnquiry={handleOpenEnquiry}
          />
        )}

        {currentRoute === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenEnquiry={() => handleOpenEnquiry()}
          />
        )}

        {currentRoute === 'contact' && (
          <ContactPage />
        )}

        {currentRoute === 'privacy' && (
          <LegalPage type="privacy" onNavigate={handleNavigate} />
        )}

        {currentRoute === 'terms' && (
          <LegalPage type="terms" onNavigate={handleNavigate} />
        )}
      </main>

      {/* Global Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenEnquiry={handleOpenEnquiry}
      />

      {/* Floating WhatsApp Action Widget */}
      <WhatsAppWidget />

      {/* Global Custom Itinerary Consultation Modal */}
      <EnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={handleCloseEnquiry}
        initialDestination={enquiryPrefill.destination}
        initialPackageName={enquiryPrefill.packageName}
      />
    </div>
  );
}

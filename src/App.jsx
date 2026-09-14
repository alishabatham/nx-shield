import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CoreProtection from './components/CoreProtection';
import HowItWorks from './components/HowItWorks';
import SecurityDashboard from './components/SecurityDashboard';
import Integrations from './components/Integrations';
import BuiltForImpact from './components/BuiltForImpact';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

// Modals
import ExtensionModal from './components/modals/ExtensionModal';
import AuthModal from './components/modals/AuthModal';
import ContactModal from './components/modals/ContactModal';
import SearchModal from './components/modals/SearchModal';

export default function App() {
  const [extensionModalOpen, setExtensionModalOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-blue-600 selection:text-white">
      
      {/* Top Navbar */}
      <Navbar 
        onOpenAuth={() => setAuthModalOpen(true)}
        onOpenSearch={() => setSearchModalOpen(true)}
        onOpenContact={() => setContactModalOpen(true)}
      />

      {/* Main Content Flow */}
      <main>
        {/* Hero Section */}
        <Hero 
          onOpenExtensionModal={() => setExtensionModalOpen(true)}
        />

        {/* Core Protection Section */}
        <CoreProtection />

        {/* How NX Shield Works Flow */}
        <HowItWorks />

        {/* Cloud Security Dashboard Section */}
        <SecurityDashboard />

        {/* Seamless System Integrations */}
        <Integrations />

        {/* Built For Real Impact (Colleges, Universities & MSMEs) */}
        <BuiltForImpact />

        {/* Call to Action Banner */}
        <CallToAction 
          onOpenExtensionModal={() => setExtensionModalOpen(true)}
          onOpenContactModal={() => setContactModalOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer 
        onOpenContact={() => setContactModalOpen(true)}
      />

      {/* Interactive Modals & Overlays */}
      <ExtensionModal 
        isOpen={extensionModalOpen}
        onClose={() => setExtensionModalOpen(false)}
      />

      <AuthModal 
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
      />

      <ContactModal 
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />

      <SearchModal 
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
      />

    </div>
  );
}

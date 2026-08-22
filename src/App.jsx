import React, { useState, useEffect } from 'react';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import ConstellationCanvas from './components/common/ConstellationCanvas';
import CursorGlow from './components/common/CursorGlow';
import HeroSection from './components/hero/HeroSection';
import TemplateShowroom from './components/showroom/TemplateShowroom';
import DeviceFrameModal from './components/showroom/DeviceFrameModal';
import CostEstimator from './components/estimator/CostEstimator';
import BenchmarkMatrix from './components/benchmarks/BenchmarkMatrix';
import SprintRoadmap from './components/roadmap/SprintRoadmap';
import TestimonialsSection from './components/testimonials/TestimonialsSection';
import FaqAccordion from './components/faq/FaqAccordion';
import ProjectWizardModal from './components/modal/ProjectWizardModal';
import TermsPage from './pages/TermsPage';

export default function App() {
  const [activeView, setActiveView] = useState('home'); // 'home' | 'terms'
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [modalInitialData, setModalInitialData] = useState(null);

  // Hash route management
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#terms' || hash === '#/terms') {
        setActiveView('terms');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setActiveView('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // check on mount

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (view) => {
    setActiveView(view);
    if (view === 'terms') {
      window.location.hash = '#terms';
    } else {
      window.location.hash = '';
    }
  };

  const handleOpenProjectModal = (templateNameOrData = null) => {
    if (typeof templateNameOrData === 'string') {
      setModalInitialData({ template: templateNameOrData });
    } else if (templateNameOrData && typeof templateNameOrData === 'object') {
      setModalInitialData(templateNameOrData);
    } else {
      setModalInitialData(null);
    }
    setIsProjectModalOpen(true);
  };

  const handleBridgeEstimator = (data) => {
    setModalInitialData(data);
    setIsProjectModalOpen(true);
  };

  const handleScrollToTemplates = () => {
    if (activeView !== 'home') {
      navigateTo('home');
      setTimeout(() => {
        const elem = document.getElementById('templates');
        if (elem) elem.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const elem = document.getElementById('templates');
      if (elem) elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToEstimator = () => {
    if (activeView !== 'home') {
      navigateTo('home');
      setTimeout(() => {
        const elem = document.getElementById('estimator');
        if (elem) elem.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const elem = document.getElementById('estimator');
      if (elem) elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{ minHeight: '100vh', position: 'relative', overflowX: 'hidden' }}>
      
      {/* Background Visual Effects */}
      <ConstellationCanvas />
      <CursorGlow />

      {/* Ambient Aurora Glow Orbs */}
      <div className="aurora-bg-mesh">
        <div className="aurora-orb aurora-orb-1" />
        <div className="aurora-orb aurora-orb-2" />
        <div className="aurora-orb aurora-orb-3" />
      </div>

      {/* Navigation */}
      <Navbar
        onOpenProjectModal={() => handleOpenProjectModal()}
        activeView={activeView}
        onNavigate={navigateTo}
      />

      {/* Main Views */}
      <main>
        {activeView === 'terms' ? (
          <TermsPage
            onBackToHome={() => navigateTo('home')}
            onOpenProjectModal={() => handleOpenProjectModal()}
          />
        ) : (
          <>
            {/* Hero Section */}
            <HeroSection
              onOpenEstimator={handleScrollToEstimator}
              onScrollToTemplates={handleScrollToTemplates}
              onOpenProjectModal={() => handleOpenProjectModal()}
            />

            {/* 7 Interactive Live Template Sandboxes */}
            <TemplateShowroom
              onSelectTemplate={(tpl) => setSelectedTemplate(tpl)}
              onAdoptTemplate={(tplName) => handleOpenProjectModal(tplName)}
            />

            {/* Interactive Scope & Cost Estimator */}
            <CostEstimator
              onBridgeToModal={handleBridgeEstimator}
            />

            {/* Why Us Benchmark Matrix */}
            <BenchmarkMatrix />

            {/* 7-Day Sprint Roadmap */}
            <SprintRoadmap
              onOpenProjectModal={() => handleOpenProjectModal()}
            />

            {/* Verified Client Social Proof & Testimonials */}
            <TestimonialsSection />

            {/* Searchable FAQ */}
            <FaqAccordion />
          </>
        )}
      </main>

      {/* Studio Footer */}
      <Footer
        onSelectTemplate={(tpl) => setSelectedTemplate(tpl)}
        onNavigate={navigateTo}
        onOpenProjectModal={() => handleOpenProjectModal()}
      />

      {/* Interactive Device Frame Modal Sandbox */}
      {selectedTemplate && (
        <DeviceFrameModal
          template={selectedTemplate}
          onClose={() => setSelectedTemplate(null)}
          onAdoptTemplate={(tplName) => handleOpenProjectModal(tplName)}
        />
      )}

      {/* 3-Step Project Intake Brief Wizard */}
      <ProjectWizardModal
        isOpen={isProjectModalOpen}
        onClose={() => setIsProjectModalOpen(false)}
        initialData={modalInitialData}
        onNavigateTerms={() => navigateTo('terms')}
      />

    </div>
  );
}

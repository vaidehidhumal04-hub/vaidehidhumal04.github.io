import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ProjectGrid } from './components/ProjectGrid';
import { ResumePage } from './components/ResumePage';
import { ContactPage } from './components/ContactPage';
import { CodeExportModal } from './components/CodeExportModal';
import { AssetManagerPage } from './components/AssetManagerPage';
import { ProjectLightbox } from './components/ProjectLightbox';
import { PortfolioProject } from './data/portfolioData';

export default function App() {
  const [activeTab, setActiveTab] = useState<'portfolio' | 'resume' | 'contact' | 'code' | 'assets'>('portfolio');
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme');
      if (stored) return stored === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const [activeLightbox, setActiveLightbox] = useState<{
    project: PortfolioProject;
    sheetIndex: number;
  } | null>(null);

  // Sync theme with html class and localStorage
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const handleSelectProject = (project: PortfolioProject, sheetIndex = 0) => {
    setActiveLightbox({ project, sheetIndex });
  };

  const handleCloseLightbox = () => {
    setActiveLightbox(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 font-['Plus_Jakarta_Sans'] selection:bg-neutral-900 selection:text-white dark:selection:bg-neutral-100 dark:selection:text-neutral-900 transition-colors duration-200">
      {/* Top Bar Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isDark={isDark}
        toggleTheme={toggleTheme}
      />

      {/* Main Content Area with Smooth Page Transition */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8 transition-opacity duration-300">
        {activeTab === 'portfolio' && (
          <div className="animate-fadeIn">
            <ProjectGrid
              onSelectProject={handleSelectProject}
              onNavigateToResume={() => {
                setActiveTab('resume');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onNavigateToContact={() => {
                setActiveTab('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          </div>
        )}

        {activeTab === 'resume' && (
          <div className="animate-fadeIn">
            <ResumePage
              onNavigateToContact={() => {
                setActiveTab('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          </div>
        )}

        {activeTab === 'contact' && (
          <div className="animate-fadeIn">
            <ContactPage />
          </div>
        )}

        {activeTab === 'code' && (
          <div className="animate-fadeIn">
            <CodeExportModal />
          </div>
        )}

        {activeTab === 'assets' && (
          <div className="animate-fadeIn">
            <AssetManagerPage />
          </div>
        )}
      </main>

      {/* Lightbox Modal for deep inspection of architectural drawings & sheets */}
      {activeLightbox && (
        <ProjectLightbox
          project={activeLightbox.project}
          initialSheetIndex={activeLightbox.sheetIndex}
          onClose={handleCloseLightbox}
        />
      )}

      {/* Footer */}
      <Footer setActiveTab={setActiveTab} />
    </div>
  );
}

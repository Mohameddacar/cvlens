import React, { useState } from 'react';
import HeroSection from './components/hero/HeroSection';
import UploadSection from './components/upload/UploadSection';
import LoadingState from './components/common/LoadingState';
import ScoreReveal from './components/analysis/ScoreReveal';
import AnalysisCards from './components/analysis/AnalysisCards';
import CTASection from './components/layout/CTASection';
import Footer from './components/layout/Footer';

function App() {
  const [appState, setAppState] = useState('initial'); // 'initial' | 'loading' | 'results'
  const [file, setFile] = useState(null);

  const handleGetStarted = () => {
    document.getElementById('upload')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleFileSelected = (selectedFile) => {
    setFile(selectedFile);
    setAppState('loading');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLoadingComplete = () => {
    setAppState('results');
  };

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans selection:bg-primary selection:text-white">
      {/* Header */}
      <header className="h-20 flex items-center px-6 md:px-12 border-b border-black/[0.03] bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/20">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <span className="text-2xl font-black tracking-tight text-text">CV<span className="text-primary">Lens</span></span>
          </div>
          <button className="text-sm font-bold text-text-light hover:text-primary transition-colors">
            Sign In
          </button>
        </div>
      </header>

      <main className="flex-1">
        {appState === 'initial' && (
          <div className="animate-fade-in">
            <HeroSection onGetStarted={handleGetStarted} />
            <UploadSection onFileSelected={handleFileSelected} />
          </div>
        )}

        {appState === 'loading' && (
          <LoadingState onComplete={handleLoadingComplete} />
        )}

        {appState === 'results' && (
          <div className="py-12 md:py-20 animate-fade-in">
            <div className="max-w-4xl mx-auto px-6 mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-extrabold mb-4">Your Analysis Report</h2>
                <p className="text-text-light">Based on the analysis of <span className="font-bold text-text">{file?.name}</span></p>
              </div>
              <ScoreReveal score={78} />
            </div>

            <div className="bg-gray-50/50 py-16">
              <div className="max-w-6xl mx-auto">
                <div className="px-6 mb-8 text-center md:text-left">
                  <h3 className="text-xs font-black uppercase tracking-[0.2em] text-text-lighter">Detailed Breakdown</h3>
                </div>
                <AnalysisCards />
              </div>
            </div>

            <CTASection />
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;

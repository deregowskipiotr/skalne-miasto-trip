import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Header } from './components/Header';
import { OverviewView } from './components/OverviewView';
import { DayView } from './components/DayView';
import { SummaryView } from './components/SummaryView';
import { useTripStore } from './store/useTripStore';
import { Mountain, Compass, MapPin } from 'lucide-react';

export const App: React.FC = () => {
  const { activeTab } = useTripStore();

  // 1. Force scroll to top on initial page load / refresh AND on tab changes
  useEffect(() => {
    // Disable browser's automatic scroll restoration on load
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Immediately jump to top
    window.scrollTo(0, 0);
  }, [activeTab]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [activeTab]);

  const renderActiveView = () => {
    switch (activeTab) {
      case 'overview':
        return <OverviewView key="overview" />;
      case 'day1':
        return <DayView key="day1" dayNumber={1} />;
      case 'day2':
        return <DayView key="day2" dayNumber={2} />;
      case 'day3':
        return <DayView key="day3" dayNumber={3} />;
      case 'summary':
        return <SummaryView key="summary" />;
      default:
        return <OverviewView key="fallback-overview" />;
    }
  };


  return (
    <div className="min-h-screen bg-main text-text font-secondary flex flex-col relative overflow-x-hidden selection:bg-decor/30 selection:text-white">
      {/* Opulent Ambient Lighting Layers (Pure CSS glows, no layout shifts) */}
      <div 
        className="pointer-events-none fixed -top-40 left-1/2 -translate-x-1/2 w-150 sm:w-225 h-125 rounded-full bg-[radial-gradient(circle,rgba(217,66,239,0.12)_0%,rgba(34,3,38,0)_70%)] blur-3xl z-0" 
        aria-hidden="true" 
      />
      <div 
        className="pointer-events-none fixed bottom-0 right-0 w-100 sm:w-150 h-100 rounded-full bg-[radial-gradient(circle,rgba(217,66,239,0.08)_0%,rgba(34,3,38,0)_75%)] blur-3xl z-0" 
        aria-hidden="true" 
      />

      {/* Glassmorphic Sticky Header & Hybrid Navigation */}
      <Header />

      {/* Main Content Area */}
      <main className="relative z-10 flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            {renderActiveView()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Opulent Glassmorphic Footer */}
      <footer className="relative z-10 w-full mt-12 bg-main/70 backdrop-blur-xl border-t border-decor/20 transition-colors duration-500">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text/60 tracking-normal">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md border border-decor/30 bg-decor/10 flex items-center justify-center text-decor">
              <Mountain className="w-3.5 h-3.5" />
            </div>
            <span className="font-semibold text-text tracking-normal">
              Skalne Miasto Expedition
            </span>
            <span className="text-text/40">•</span>
            <span>Adršpach-Teplice Rocks (CZ)</span>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-text/50">
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3 text-decor" /> Broumov Highlands
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Compass className="w-3 h-3 text-decor" /> Autonomous Navigation
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
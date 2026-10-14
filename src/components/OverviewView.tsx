import React from 'react';
import { 
  Sparkles, 
  MapPin, 
  ArrowRight, 
  Compass, 
  ChevronRight, 
  Calendar,
  Clock,
  Car
} from 'lucide-react';
import { useTripStore } from '../store/useTripStore';
import type { TabType } from '../store/useTripStore';
import { recommendationSources } from '../data/recommendations';

export const OverviewView: React.FC = () => {
  const { selectedSourceId, setSelectedSourceId, setActiveTab } = useTripStore();

  const activeSource = recommendationSources.find((s) => s.id === selectedSourceId) || recommendationSources[0];

  return (
    <div className="space-y-6 sm:space-y-8 animate-in fade-in duration-500 py-2">
      {/* Hero Card */}
      <section className="relative overflow-hidden rounded-md border border-decor/30 bg-main/70 backdrop-blur-xl p-6 sm:p-9 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] transition-colors duration-500 hover:border-decor/50">
        {/* Decorative glow */}
        <div className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 rounded-full bg-decor/15 blur-3xl" />
        
        <div className="relative z-10 space-y-6">
          {/* Top Metadata Badges */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="text-xs uppercase tracking-normal px-2.5 py-1 rounded-md border border-decor/40 bg-decor/15 text-decor font-semibold">
              {activeSource.badge}
            </span>

            <span className="inline-flex items-center gap-1.5 text-xs tracking-normal px-2.5 py-1 rounded-md border border-decor/20 bg-main/80 text-text/90">
              <Compass className="w-3.5 h-3.5 text-decor" />
              {activeSource.vibe}
            </span>

            <span className="inline-flex items-center gap-1.5 text-xs tracking-normal px-2.5 py-1 rounded-md border border-decor/20 bg-main/80 text-text/90">
              <Calendar className="w-3.5 h-3.5 text-decor" />
              13–15 listopada 2026 • 2 noclegi
            </span>

            <span className="inline-flex items-center gap-1.5 text-xs tracking-normal px-2.5 py-1 rounded-md border border-decor/20 bg-main/80 text-text/90">
              <Car className="w-3.5 h-3.5 text-decor" />
              Auto z Warszawy (4 osoby)
            </span>
          </div>

          {/* Main Title */}
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-4xl font-bold tracking-normal text-text leading-tight">
              {activeSource.name.replace(/Recommendation [^:]+: /, '')}
            </h2>
            <p className="text-xs sm:text-sm text-decor font-medium tracking-normal">
              Propozycja wyjazdu: 13–15 listopada 2026 • piątek–niedziela
            </p>
          </div>

          {/* Editorial Content Box */}
          <div className="rounded-md border border-decor/20 bg-main/80 p-5 sm:p-6 space-y-4 text-sm sm:text-base text-text/90 leading-relaxed">
            <p className="text-text/85">
              {activeSource.description}
            </p>

            {activeSource.principle && (
              <div className="pt-3 border-t border-decor/15 space-y-1 text-xs sm:text-sm text-text/80">
                <span className="font-semibold text-decor uppercase tracking-normal flex items-center gap-1.5 mb-1">
                  <Clock className="w-3.5 h-3.5" />
                  Moja główna zasada:
                </span>
                <p className="leading-relaxed">
                  {activeSource.principle}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Plan Highlights Grid */}
      <section className="space-y-3.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-decor" />
            <h3 className="text-lg sm:text-xl font-bold tracking-normal text-text">
              Główne punkty tej propozycji
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
          {activeSource.highlights.map((highlight, index) => (
            <div
              key={index}
              className="group rounded-md border border-decor/20 bg-main/60 backdrop-blur-md p-4 transition-colors duration-500 hover:border-decor/50 hover:bg-main/90 flex items-start gap-3"
            >
              <div className="shrink-0 w-7 h-7 rounded-md border border-decor/30 bg-decor/10 flex items-center justify-center text-xs font-semibold text-decor">
                0{index + 1}
              </div>
              <p className="text-sm font-medium tracking-normal text-text group-hover:text-white transition-colors duration-500 my-auto">
                {highlight}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3-Day Journey Blueprint Preview */}
      <section className="space-y-3.5">
        <div className="flex items-center justify-between">
          <h3 className="text-lg sm:text-xl font-bold tracking-normal text-text">
            Plan Dzień po Dniu
          </h3>
          <span className="text-xs text-text/50">Kliknij dzień, aby zobaczyć szczegóły</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
          {activeSource.days.map((day) => {
            const targetTab = `day${day.dayNumber}` as TabType;
            return (
              <div
                key={day.dayNumber}
                onClick={() => setActiveTab(targetTab)}
                className="group cursor-pointer rounded-md border border-decor/20 bg-main/60 backdrop-blur-md p-4.5 transition-colors duration-500 hover:border-decor/60 hover:bg-main/95 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-normal px-2 py-0.5 rounded-md border border-decor/30 bg-decor/10 text-decor font-semibold">
                    Dzień 0{day.dayNumber}
                  </span>
                  <div className="flex items-center text-xs text-text/60 group-hover:text-decor transition-colors duration-500">
                    <span>{day.items.length} punktów</span>
                    <ChevronRight className="w-3.5 h-3.5 ml-1" />
                  </div>
                </div>

                <div>
                  <h4 className="text-base font-semibold tracking-normal text-text group-hover:text-white transition-colors duration-500 line-clamp-1">
                    {day.title}
                  </h4>
                  <p className="text-xs text-text/70 mt-1 line-clamp-2">
                    {day.subtitle}
                  </p>
                </div>

                <div className="pt-2 border-t border-decor/15 flex items-center gap-1.5 text-[11px] text-text/60">
                  <MapPin className="w-3 h-3 text-decor" />
                  <span className="truncate">{day.items[0]?.title || 'Zaplanowane przystanki'}</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Alternative Plans Quick Comparison */}
      <section className="rounded-md border border-decor/20 bg-main/40 backdrop-blur-md p-4 sm:p-5 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs uppercase tracking-normal text-text/60 font-medium">
            Zmień Wariant Rekomendacji
          </span>
          <span className="text-xs text-text/40">Szybka zmiana</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
          {recommendationSources.map((source) => {
            const isSelected = source.id === selectedSourceId;
            return (
              <button
                key={source.id}
                onClick={() => setSelectedSourceId(source.id)}
                className={`text-left p-3 rounded-md border transition-colors duration-500 outline-none cursor-pointer ${
                  isSelected
                    ? 'border-decor/70 bg-decor/20 text-white shadow-[0_0_15px_rgba(217,66,239,0.2)]'
                    : 'border-decor/20 bg-main/60 text-text/80 hover:border-decor/50 hover:bg-main/90 hover:text-white'
                }`}
              >
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="font-semibold text-decor">{source.badge}</span>
                  <span className="text-[10px] text-text/60">{source.intensity}</span>
                </div>
                <div className="text-sm font-medium tracking-normal truncate text-text">
                  {source.name.replace(/Recommendation [^:]+: /, '')}
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* Bottom CTA Button */}
      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-md border border-decor/30 bg-main/80 backdrop-blur-xl">
        <div className="space-y-1 text-center sm:text-left">
          <h4 className="text-base sm:text-lg font-bold tracking-normal text-text">
            Gotowy do przejścia do Dnia 1?
          </h4>
          <p className="text-xs sm:text-sm text-text/70 tracking-normal">
            Sprawdź godziny wyjazdu, trasę przez Świdnicę oraz zakwaterowanie.
          </p>
        </div>

        <button
          onClick={() => setActiveTab('day1')}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-md border border-decor/60 bg-decor text-main font-semibold text-sm sm:text-base tracking-normal shadow-[0_0_25px_rgba(217,66,239,0.35)] hover:bg-text hover:text-main hover:border-white transition-colors duration-500 cursor-pointer outline-none"
        >
          <span>Zobacz Dzień 1</span>
          <ArrowRight className="w-4 h-4 text-main" />
        </button>
      </div>
    </div>
  );
};
import React from 'react';
import { 
  Clock, 
  MapPin, 
  Info, 
  ChevronLeft, 
  ChevronRight, 
  Calendar 
} from 'lucide-react';
import { useTripStore } from '../store/useTripStore';
import type { TabType } from '../store/useTripStore';
import { recommendationSources } from '../data/recommendations';

interface DayViewProps {
  dayNumber: number;
}

export const DayView: React.FC<DayViewProps> = ({ dayNumber }) => {
  const { selectedSourceId, setActiveTab } = useTripStore();

  const activeSource = recommendationSources.find((s) => s.id === selectedSourceId) || recommendationSources[0];
  const dayPlan = activeSource.days.find((d) => d.dayNumber === dayNumber) || activeSource.days[0];

  // Determine previous and next navigation targets and labels
  const getPrevConfig = () => {
    if (dayNumber === 1) {
      return { tab: 'overview' as TabType, label: 'Informacje', sub: 'Trip Blueprint' };
    }
    const prevDay = dayNumber - 1;
    const prevDayPlan = activeSource.days.find((d) => d.dayNumber === prevDay);
    return {
      tab: `day${prevDay}` as TabType,
      label: `Dzień 0${prevDay}`,
      sub: prevDayPlan?.title || 'Previous Stage',
    };
  };

  const getNextConfig = () => {
    if (dayNumber === 3) {
      return { tab: 'summary' as TabType, label: 'Podsumowanie', sub: 'Voting & Export' };
    }
    const nextDay = dayNumber + 1;
    const nextDayPlan = activeSource.days.find((d) => d.dayNumber === nextDay);
    return {
      tab: `day${nextDay}` as TabType,
      label: `Dzień 0${nextDay}`,
      sub: nextDayPlan?.title || 'Next Stage',
    };
  };

  const prevConfig = getPrevConfig();
  const nextConfig = getNextConfig();

  return (
    <div className="space-y-6 sm:space-y-8 animate-in fade-in duration-500">
      {/* Day Header Banner */}
      <section className="relative overflow-hidden rounded-md border border-decor/25 bg-main/60 backdrop-blur-xl p-5 sm:p-7 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] transition-colors duration-500 hover:border-decor/40">
        <div className="relative z-10 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2.5">
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-normal px-2.5 py-1 rounded-md border border-decor/40 bg-decor/15 text-decor font-semibold">
                DAY 0{dayPlan.dayNumber} OF 03
              </span>
              <span className="text-xs text-text/60 tracking-normal hidden sm:inline">
                {activeSource.badge} • {activeSource.vibe}
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs text-text/70 px-2.5 py-1 rounded-md border border-decor/20 bg-main/80">
              <Calendar className="w-3.5 h-3.5 text-decor" />
              <span>{dayPlan.items.length} Curated Stops</span>
            </div>
          </div>

          <div className="space-y-1.5">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-normal text-text">
              {dayPlan.title}
            </h2>
            <p className="text-sm sm:text-base text-text/80 max-w-2xl font-normal">
              {dayPlan.subtitle}
            </p>
          </div>

          {/* Quick Schedule Spectrum */}
          <div className="pt-3 border-t border-decor/15 flex flex-wrap items-center gap-3 sm:gap-6 text-xs text-text/70">
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-decor" />
              <span>Start: <strong className="text-text font-medium">{dayPlan.items[0]?.time}</strong></span>
            </div>
            <div className="hidden sm:block text-text/30">•</div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-decor" />
              <span>Concludes: <strong className="text-text font-medium">{dayPlan.items[dayPlan.items.length - 1]?.time}</strong></span>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative space-y-4">
        {/* Continuous 1px Vertical Timeline Stem */}
        <div 
          className="absolute left-4.75 sm:left-5.75 top-6 bottom-6 w-px bg-decor/30 pointer-events-none" 
          aria-hidden="true"
        />

        <div className="space-y-4">
          {dayPlan.items.map((item, index) => (
            <div 
              key={item.id} 
              className="relative flex items-start gap-3.5 sm:gap-5 group"
            >
              {/* Timeline Marker Node (1px border, rounded-md) */}
              <div className="relative z-10 shrink-0 mt-3 sm:mt-4 w-10 sm:w-12 flex items-center justify-center">
                <div className="w-5 h-5 rounded-md border border-decor/70 bg-main flex items-center justify-center shadow-[0_0_10px_rgba(217,66,239,0.2)] group-hover:border-decor group-hover:bg-decor/20 transition-colors duration-500">
                  <div className="w-1.5 h-1.5 rounded-sm bg-decor" />
                </div>
              </div>

              {/* Item Card (Glass effect, 1px border, rounded-md) */}
              <div className="flex-1 rounded-md border border-decor/20 bg-main/60 backdrop-blur-md p-4 sm:p-5 shadow-lg transition-colors duration-500 hover:border-decor/50 hover:bg-main/90 space-y-3">
                {/* Card Top Row: Time & Stop Index */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md border border-decor/30 bg-decor/15 text-decor text-xs font-semibold tracking-normal">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{item.time}</span>
                  </div>

                  <span className="text-[11px] text-text/50 tracking-normal">
                    Step {index + 1} of {dayPlan.items.length}
                  </span>
                </div>

                {/* Title & Description */}
                <div className="space-y-1">
                  <h3 className="text-base sm:text-lg font-bold tracking-normal text-text group-hover:text-white transition-colors duration-500">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-text/80 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Optional Location Pill */}
                {item.location && (
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-decor/20 bg-main/80 text-xs text-text/90">
                    <MapPin className="w-3.5 h-3.5 text-decor shrink-0" />
                    <span className="tracking-normal font-medium">{item.location}</span>
                  </div>
                )}

                {/* Optional Curated Tip Box */}
                {item.tip && (
                  <div className="rounded-md border border-amber-500/30 bg-amber-950/20 p-3 text-xs text-amber-200/90 flex items-start gap-2.5 transition-colors duration-500">
                    <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-amber-300 block mb-0.5">Expedition Tip:</span>
                      <p className="leading-relaxed">{item.tip}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Navigation Bar (< Previous Day | Next Day >) */}
      <nav 
        className="rounded-md border border-decor/30 bg-main/80 backdrop-blur-xl p-3 sm:p-4 shadow-xl flex items-center justify-between gap-3"
        aria-label="Day Navigation"
      >
        {/* Previous Button */}
        <button
          onClick={() => setActiveTab(prevConfig.tab)}
          className="group flex items-center gap-2 px-3.5 py-2.5 rounded-md border border-decor/25 bg-main/70 text-text text-xs sm:text-sm font-medium hover:border-decor/60 hover:bg-decor/15 hover:text-white transition-colors duration-500 outline-none cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4 text-decor" />
          <div className="text-left">
            <span className="block text-[10px] text-text/60 uppercase tracking-normal">
              Poprzedni
            </span>
            <span className="tracking-normal font-semibold">
              {prevConfig.label}
            </span>
          </div>
        </button>

        {/* Current Day Label in Center */}
        <div className="hidden md:flex flex-col items-center text-center">
          <span className="text-[11px] text-decor uppercase tracking-normal font-semibold">
            Wyświetlony dzień 0{dayNumber}
          </span>
          <span className="text-xs text-text/70 truncate max-w-50">
            {dayPlan.title}
          </span>
        </div>

        {/* Next Button */}
        <button
          onClick={() => setActiveTab(nextConfig.tab)}
          className="group flex items-center gap-2 px-4 py-2.5 rounded-md border border-decor/50 bg-decor/20 text-text text-xs sm:text-sm font-medium hover:border-decor/80 hover:bg-decor/30 hover:text-white transition-colors duration-500 outline-none cursor-pointer"
        >
          <div className="text-right">
            <span className="block text-[10px] text-text/60 uppercase tracking-normal">
              Następny
            </span>
            <span className="tracking-normal font-semibold">
              {nextConfig.label}
            </span>
          </div>
          <ChevronRight className="w-4 h-4 text-decor" />
        </button>
      </nav>
    </div>
  );
};

import React from 'react';
import { Sparkles } from 'lucide-react';
import { useTripStore } from '../store/useTripStore';
import { recommendationSources } from '../data/recommendations';

export const SummaryView: React.FC = () => {
  const { selectedSourceId } = useTripStore();
  const activeSource = recommendationSources.find((s) => s.id === selectedSourceId) || recommendationSources[0];

  return (
    <div className="max-w-3xl mx-auto space-y-6 animate-in fade-in duration-500 py-4">
      {/* Opulent Master Summary Card */}
      <section className="relative overflow-hidden rounded-md border border-decor/30 bg-main/70 backdrop-blur-xl p-6 sm:p-10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] transition-colors duration-500 hover:border-decor/50">
        {/* Glow */}
        <div className="pointer-events-none absolute -top-32 -left-32 w-80 h-80 rounded-full bg-decor/15 blur-3xl" />

        <div className="relative z-10 space-y-6">
          {/* Header Meta */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-decor/20">
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-normal px-2.5 py-1 rounded-md border border-decor/40 bg-decor/15 text-decor font-semibold">
                {activeSource.badge}
              </span>
              <span className="text-xs tracking-normal px-2.5 py-1 rounded-md border border-decor/20 bg-main/80 text-text/90">
                {activeSource.vibe}
              </span>
              <span className="text-xs tracking-normal px-2.5 py-1 rounded-md border border-decor/20 bg-main/80 text-text/90">
                Tempo: {activeSource.intensity}
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-decor">
              <Sparkles className="w-4 h-4" />
              <span className="font-semibold uppercase tracking-normal">Rekomendacja Wyprawy</span>
            </div>
          </div>

          {/* Title */}
          <div className="space-y-1">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-normal text-text">
              {activeSource.name.replace(/Recommendation [^:]+: /, '')}
            </h2>
            <p className="text-xs sm:text-sm text-text/60 tracking-normal">
              Ostateczne podsumowanie i rekomendacja wyjazdu
            </p>
          </div>

          {/* Summary Editorial Box */}
          <div className="rounded-md border border-decor/20 bg-main/80 p-5 sm:p-7 space-y-4 text-sm sm:text-base text-text/90 leading-relaxed">
            {activeSource.summaryReason && (
              <>
                <h3 className="text-base sm:text-lg font-bold text-decor tracking-normal">
                  Dlaczego ta opcja wyjazdu?
                </h3>
      
                <p className="text-text/85">
                  {activeSource.summaryReason}
                </p>
              </>
            )}

            {activeSource.finalRecommendation && (
              <div className="pt-3 border-t border-decor/15 space-y-1.5">
                <span className="text-xs uppercase tracking-normal font-semibold text-decor block">
                  Moja rekomendacja końcowa:
                </span>
                <p className="text-text/90 italic font-normal">
                  {activeSource.finalRecommendation}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
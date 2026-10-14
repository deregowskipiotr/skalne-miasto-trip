import React from 'react';
import * as Select from '@radix-ui/react-select';
import { Mountain, ChevronDown, Check } from 'lucide-react';
import { useTripStore } from '../store/useTripStore';
import { NAV_TABS } from '../data/navigation';
import { recommendationSources } from '../data/recommendations';

export const Header: React.FC = () => {
  const { selectedSourceId, activeTab, setSelectedSourceId, setActiveTab } = useTripStore();

  const activeSource =
    recommendationSources.find((s) => s.id === selectedSourceId) || recommendationSources[0];

  return (
    <header className="sticky top-0 z-40 w-full bg-main/70 backdrop-blur-xl border-b border-decor/20 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top bar: Brand & Source Selector */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 pb-2 sm:py-3.5">
          {/* Brand */}
          <div
            onClick={() => setActiveTab('overview')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-9 h-9 rounded-md border border-decor/40 bg-decor/10 flex items-center justify-center text-decor group-hover:bg-decor/20 group-hover:border-decor/70 transition-colors duration-500">
              <Mountain className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg sm:text-xl font-bold tracking-normal text-text group-hover:text-white transition-colors duration-500">
                  Skalne Miasto
                </h1>
                <span className="text-[10px] tracking-normal uppercase px-1.5 py-0.5 rounded-md border border-decor/30 bg-main text-decor/90">
                  Adršpach
                </span>
              </div>
              <p className="text-xs text-text/60 tracking-normal hidden sm:block">
                Wyprawa Listopadowa • 13–15 listopada
              </p>
            </div>
          </div>

          {/* Radix Select Dropdown */}
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <span className="text-xs text-text/60 tracking-normal whitespace-nowrap hidden md:inline">
              Wariant:
            </span>
            <Select.Root value={selectedSourceId} onValueChange={setSelectedSourceId}>
              <Select.Trigger
                className="w-full sm:w-72 flex items-center justify-between gap-2 px-3 py-2 text-xs sm:text-sm text-text rounded-md border border-decor/30 bg-main/80 backdrop-blur-md hover:border-decor/60 hover:bg-main transition-colors duration-500 outline-none focus:border-decor cursor-pointer"
                aria-label="Zmień wariant rekomendacji"
              >
                <div className="flex items-center gap-2 truncate">
                  <span className="text-[10px] tracking-normal uppercase px-1.5 py-0.5 rounded-md border border-decor/40 bg-decor/15 text-decor font-semibold">
                    {activeSource.badge}
                  </span>
                  <span className="truncate tracking-normal font-medium">
                    {activeSource.name.replace(/Recommendation [^:]+: /, '')}
                  </span>
                </div>
                <Select.Icon className="text-decor shrink-0">
                  <ChevronDown className="w-4 h-4 opacity-80" />
                </Select.Icon>
              </Select.Trigger>

              <Select.Portal>
                <Select.Content
                  position="popper"
                  sideOffset={6}
                  className="z-50 w-[calc(100vw-2rem)] sm:w-80 max-h-96 overflow-y-auto rounded-md border border-decor/30 bg-main/95 backdrop-blur-2xl shadow-2xl p-1.5 text-text"
                >
                  <Select.Viewport className="space-y-1">
                    <div className="px-2 py-1 text-[11px] uppercase tracking-normal text-text/50 font-medium">
                      Wybierz wariant wyjazdu
                    </div>
                    {recommendationSources.map((source) => {
                      const isSelected = source.id === selectedSourceId;
                      return (
                        <Select.Item
                          key={source.id}
                          value={source.id}
                          className={`flex items-center justify-between gap-3 px-3 py-2.5 rounded-md text-xs sm:text-sm cursor-pointer outline-none border transition-colors duration-500 ${
                            isSelected
                              ? 'border-decor/60 bg-decor/20 text-white'
                              : 'border-transparent text-text/80 hover:bg-decor/15 hover:border-decor/30 hover:text-text'
                          }`}
                        >
                          <div className="flex flex-col gap-0.5">
                            <div className="flex items-center gap-2">
                              <span className="text-[10px] px-1.5 py-0.5 rounded-md border border-decor/40 bg-decor/15 text-decor font-semibold">
                                {source.badge}
                              </span>
                              <Select.ItemText>
                                <span className="font-medium tracking-normal text-text">
                                  {source.name.replace(/Recommendation [^:]+: /, '')}
                                </span>
                              </Select.ItemText>
                            </div>
                            <span className="text-[11px] text-text/60 tracking-normal">
                              {source.vibe} • Tempo: {source.intensity}
                            </span>
                          </div>
                          <Select.ItemIndicator>
                            <Check className="w-4 h-4 text-decor shrink-0" />
                          </Select.ItemIndicator>
                        </Select.Item>
                      );
                    })}
                  </Select.Viewport>
                </Select.Content>
              </Select.Portal>
            </Select.Root>
          </div>
        </div>

        {/* Persistent Tabs Navigation */}
        <nav
          className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-2 border-t border-decor/10"
          aria-label="Nawigacja po planie wyjazdu"
        >
          {NAV_TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-md text-xs sm:text-sm font-medium tracking-normal whitespace-nowrap transition-all duration-500 outline-none border cursor-pointer ${
                  isActive
                    ? 'border-decor/70 bg-decor/20 text-text shadow-[0_0_12px_rgba(217,66,239,0.25)]'
                    : 'border-transparent text-text/70 hover:text-text hover:bg-decor/10 hover:border-decor/30'
                }`}
              >
                <Icon
                  className={`w-3.5 h-3.5 ${
                    isActive ? 'text-decor' : 'text-text/60'
                  } transition-colors duration-500`}
                />
                <span>{tab.label}</span>
                {tab.badge && (
                  <span
                    className={`text-[10px] hidden sm:inline px-1 py-0.2 rounded-md border ${
                      isActive
                        ? 'border-decor/40 bg-decor/30 text-white'
                        : 'border-decor/20 bg-main/50 text-text/60'
                    }`}
                  >
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
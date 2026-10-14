import { create } from 'zustand';

export type TabType = 'overview' | 'day1' | 'day2' | 'day3' | 'summary';

interface TripState {
  selectedSourceId: string;
  activeTab: TabType;
  setSelectedSourceId: (id: string) => void;
  setActiveTab: (tab: TabType) => void;
}

export const useTripStore = create<TripState>((set) => ({
  selectedSourceId: 'source-1', // Default selection
  activeTab: 'overview',
  setSelectedSourceId: (id) => set({ selectedSourceId: id }),
  setActiveTab: (tab) => set({ activeTab: tab }),
}));
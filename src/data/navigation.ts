import { Compass, Calendar, Sparkles } from 'lucide-react';
import type { TabType } from '../store/useTripStore';

export interface TabItem {
  id: TabType;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
}

export const NAV_TABS: TabItem[] = [
  { id: 'overview', label: 'Informacje ogólne', icon: Compass },
  { id: 'day1', label: 'Dzień 1', icon: Calendar, badge: 'W drodze' },
  { id: 'day2', label: 'Dzień 2', icon: Calendar, badge: 'Zwiedzanie' },
  { id: 'day3', label: 'Dzień 3', icon: Calendar, badge: 'Powrót' },
  { id: 'summary', label: 'Podsumowanie', icon: Sparkles },
];
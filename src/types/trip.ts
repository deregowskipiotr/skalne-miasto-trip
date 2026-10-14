export interface ItineraryItem {
  id: string;
  time: string;
  title: string;
  description: string;
  location?: string;
  tip?: string;
}

export interface DayPlan {
  dayNumber: number; // 1, 2, or 3
  title: string;
  subtitle: string;
  items: ItineraryItem[];
}

export interface RecommendationSource {
  id: string;
  name: string;
  badge: string;
  vibe: string;
  intensity: 'Niski' | 'Umiarkowany' | 'Intensywny';
  description: string;
  principle?: string;
  summaryReason?: string;        // "Bo łączy trzy różne elementy..."
  finalRecommendation?: string; // "Nie rezygnujcie z Křížovego vrchu..."
  days: DayPlan[];
  highlights: string[];
}
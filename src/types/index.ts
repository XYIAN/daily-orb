// Daily Orb Data Types
export interface DailyOrbData {
  quote: string;
  luckyColor: string;
  luckyNumber: number;
  date: string;
}

export interface ZodiacSign {
  label: string;
  value: string;
  icon: string;
}

export interface ArchiveItem {
  date: string;
  quote: string;
  luckyColor: string;
  luckyNumber: number;
}

export interface ZodiacForecast {
  sign: string;
  forecast: string;
  luckyColor: string;
  luckyNumber: number;
}

// Component Props Types
export interface OrbProps {
  onClick?: () => void;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export interface QuoteCardProps {
  quote: string;
  luckyColor: string;
  luckyNumber: number;
  date?: string;
  className?: string;
}

export interface SignPickerProps {
  onSignChange?: (sign: string) => void;
  className?: string;
}

export interface DailyOrbDialogProps {
  visible: boolean;
  onHide: () => void;
  data: DailyOrbData;
}

export interface ArchiveTimelineProps {
  items: ArchiveItem[];
  className?: string;
}

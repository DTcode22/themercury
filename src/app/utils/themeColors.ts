// src/app/utils/themeColors.ts
import { ThemeName } from '@/context/SectionThemeContext';

export interface ThemeColorDetails {
  rgb: string;
  hex: string;
  mainBgToColor: string; // e.g., 'emerald-950/22'
  accentColorClass: string; // e.g., 'to-emerald-400' for text gradients
}

export const THEME_COLORS_MAP: Record<ThemeName, ThemeColorDetails> = {
  emerald: {
    rgb: '76, 175, 80',
    hex: '#4caf50',
    mainBgToColor: 'to-emerald-950/22',
    accentColorClass: 'to-emerald-400',
  },
  blue: {
    rgb: '59, 130, 246',
    hex: '#3b82f6',
    mainBgToColor: 'to-blue-950/20',
    accentColorClass: 'to-blue-400',
  },
  red: {
    rgb: '239, 68, 68',
    hex: '#ef4444',
    mainBgToColor: 'to-red-950/10',
    accentColorClass: 'to-red-400',
  },
  purple: {
    rgb: '168, 85, 247',
    hex: '#a855f7',
    mainBgToColor: 'to-purple-950/20',
    accentColorClass: 'to-purple-400',
  },
  gray: {
    rgb: '107, 114, 128', // Tailwind gray-500
    hex: '#6b7280',
    mainBgToColor: 'to-gray-900/60', // Matches CTA's current bg
    accentColorClass: 'to-gray-400',
  },
};

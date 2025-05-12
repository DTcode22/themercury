// FILE: src/app/utils/themeColors.ts
import { ThemeName } from '@/context/SectionThemeContext';

export interface ThemeColorDetails {
  rgb: string;
  hex: string;
  /** The primary background gradient for the section. e.g., "from-purple-950/20 via-black to-purple-950/20" */
  sectionBgGradient: string;
  accentColorClass: string; // e.g., 'to-emerald-400' for text gradients
  /** Original mainBgToColor, potentially used by SectionBoundaryEffect or other specific cases. e.g. 'to-emerald-950/22' */
  mainBgToColor: string;
}

export const THEME_COLORS_MAP: Record<ThemeName, ThemeColorDetails> = {
  emerald: {
    rgb: '76, 175, 80',
    hex: '#4caf50',
    sectionBgGradient: 'from-emerald-950/20 via-black/70 to-emerald-950/20',
    accentColorClass: 'to-emerald-400',
    mainBgToColor: 'to-emerald-950/22',
  },
  blue: {
    rgb: '59, 130, 246',
    hex: '#3b82f6',
    sectionBgGradient: 'from-blue-950/20 via-black/70 to-blue-950/20',
    accentColorClass: 'to-blue-400',
    mainBgToColor: 'to-blue-950/20',
  },
  red: {
    rgb: '239, 68, 68',
    hex: '#ef4444',
    sectionBgGradient: 'from-red-950/30 via-black/70 to-red-950/30',
    accentColorClass: 'to-red-400',
    mainBgToColor: 'to-red-950/10',
  },
  purple: {
    rgb: '168, 85, 247',
    hex: '#a855f7',
    sectionBgGradient: 'from-purple-950/20 via-black/70 to-purple-950/20',
    accentColorClass: 'to-purple-400',
    mainBgToColor: 'to-purple-950/20',
  },
  gray: {
    rgb: '107, 114, 128', // Tailwind gray-500
    hex: '#6b7280',
    sectionBgGradient: 'from-gray-900/60 via-black/70 to-gray-900/60',
    accentColorClass: 'to-gray-400',
    mainBgToColor: 'to-gray-900/60',
  },
};

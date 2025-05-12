// FILE: src/app/components/SectionWatcher.tsx
'use client';

import React, { useRef, useEffect, ReactNode, RefObject } from 'react';
import { useSectionTheme, ThemeName } from '@/context/SectionThemeContext';
import SectionBoundaryEffect from './SectionBoundaryEffect';
import { THEME_COLORS_MAP } from '@/app/utils/themeColors';

interface SectionWatcherProps {
  children: ReactNode;
  sectionId: string;
  themeName: ThemeName;
  order: number;
  previousSectionThemeName?: ThemeName | null;
  noTopBoundary?: boolean;
}

const SectionWatcher: React.FC<SectionWatcherProps> = ({
  children,
  sectionId,
  themeName,
  order,
  previousSectionThemeName,
  noTopBoundary,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { registerSection, unregisterSection } = useSectionTheme();

  useEffect(() => {
    if (ref.current) {
      registerSection(
        sectionId,
        themeName,
        order,
        ref as RefObject<HTMLDivElement>
      );
    }
    return () => {
      unregisterSection(sectionId);
    };
  }, [sectionId, themeName, order, registerSection, unregisterSection]);

  const prevThemeColors = previousSectionThemeName
    ? THEME_COLORS_MAP[previousSectionThemeName]
    : null;

  // Determine the source color for the top overlay.
  // It should generally fade from black unless the section itself starts with a different color.
  // Here, 'themeName' refers to the CURRENT section's theme.
  // 'prevThemeColors' refers to the PREVIOUS section's theme.
  // The TOP boundary uses the PREVIOUS section's colors for the patterns,
  // but the overlaySourceColorCss should define what it's fading FROM at the very top.
  // Let's simplify this to always fade from black for the top boundary overlay for now.
  const topOverlaySourceColor = 'black/90'; // Or you could use: THEME_COLORS_MAP[themeName]?.mainBgToColor.split('-')[0] + "/90" if you want it based on current section base color

  return (
    <div ref={ref} className="relative">
      {/* Conditionally render top SectionBoundaryEffect */}
      {prevThemeColors && order > 1 && !noTopBoundary && (
        <SectionBoundaryEffect
          position="top"
          themeColorRGB={prevThemeColors.rgb} // Uses PREVIOUS section's theme for pattern colors
          themeColorHex={prevThemeColors.hex} // Uses PREVIOUS section's theme for pattern colors
          overlaySourceColorCss={topOverlaySourceColor} // Defines the 'from-' color of the gradient overlay
        />
      )}
      {children}
    </div>
  );
};

export default SectionWatcher;

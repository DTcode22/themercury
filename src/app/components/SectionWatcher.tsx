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

  const topOverlaySourceColor = 'black/90';

  return (
    <div ref={ref} className="relative">
      {prevThemeColors && order > 1 && !noTopBoundary && (
        <SectionBoundaryEffect
          position="top"
          themeColorRGB={prevThemeColors.rgb}
          themeColorHex={prevThemeColors.hex}
          overlaySourceColorCss={topOverlaySourceColor}
        />
      )}
      {children}
    </div>
  );
};

export default SectionWatcher;

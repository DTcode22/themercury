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
}

const SectionWatcher: React.FC<SectionWatcherProps> = ({
  children,
  sectionId,
  themeName,
  order,
  previousSectionThemeName,
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

  // The top boundary effect for a section should visually blend from the overall page background (black)
  // or the specific main background of the section if that makes more sense.
  // For most cases, 'black/90' is a good default for the overlaySourceColorCss of a top boundary.
  // CTA.tsx had a specific `from-gray-900/90` for its top boundary, which matches its own `mainBgToColor`.
  // Let's assume top boundaries fade from black, unless specified otherwise by section specific logic.
  const topOverlaySource =
    THEME_COLORS_MAP[themeName]?.mainBgToColor.replace('to-', 'black/') ||
    'black/90';

  return (
    <div ref={ref} className="relative">
      {prevThemeColors && order > 1 && (
        <SectionBoundaryEffect
          position="top"
          themeColorRGB={prevThemeColors.rgb}
          themeColorHex={prevThemeColors.hex}
          overlaySourceColorCss={topOverlaySource} // Fades from black for top of section
        />
      )}
      {children}
    </div>
  );
};

export default SectionWatcher;

'use client';

import React, { useRef, useEffect, ReactNode, RefObject } from 'react';
import { useSectionTheme, ThemeName } from '@/context/SectionThemeContext';

interface SectionWatcherProps {
  children: ReactNode;
  sectionId: string;
  themeName: ThemeName;
  order: number;
}

const SectionWatcher: React.FC<SectionWatcherProps> = ({
  children,
  sectionId,
  themeName,
  order,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { registerSection, unregisterSection } = useSectionTheme();

  useEffect(() => {
    // Ensure ref.current is available before registering
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
    // ref itself is stable, but its .current changes. Effect should run once on mount.
    // Adding ref.current to dependency array is not standard.
    // The check `if (ref.current)` handles the initial null state.
  }, [sectionId, themeName, order, registerSection, unregisterSection]);

  return <div ref={ref}>{children}</div>;
};

export default SectionWatcher;

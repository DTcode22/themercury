'use client';

import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
  useCallback,
  RefObject,
} from 'react';

export type ThemeName = 'emerald' | 'blue' | 'red' | 'purple' | 'gray';

interface SectionThemeContextProps {
  activeTheme: ThemeName;
  registerSection: (
    id: string,
    theme: ThemeName,
    order: number,
    ref: RefObject<HTMLDivElement>
  ) => void;
  unregisterSection: (id: string) => void;
}

const SectionThemeContext = createContext<SectionThemeContextProps | undefined>(
  undefined
);

interface TrackedSection {
  id: string;
  theme: ThemeName;
  order: number;
  ref: RefObject<HTMLDivElement>;
}

export const SectionThemeProvider = ({ children }: { children: ReactNode }) => {
  const [activeTheme, setActiveThemeState] = useState<ThemeName>('emerald'); // Default theme
  const [trackedSections, setTrackedSections] = useState<
    Record<string, TrackedSection>
  >({});

  const registerSection = useCallback(
    (
      id: string,
      theme: ThemeName,
      order: number,
      ref: RefObject<HTMLDivElement>
    ) => {
      setTrackedSections((prev) => ({
        ...prev,
        [id]: { id, theme, order, ref },
      }));
    },
    []
  );

  const unregisterSection = useCallback((id: string) => {
    setTrackedSections((prev) => {
      const newState = { ...prev };
      delete newState[id];
      return newState;
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // When a section's bottom is above this line, the NEXT section's theme is a candidate.
      // When a section's top is above this line (and bottom below), THIS section's theme is active.
      // A lower value (e.g., 0.25) means the theme changes earlier for the upcoming section.
      const transitionThresholdViewportPercent = 0.3; // e.g., 30% from the top of the viewport
      const transitionThresholdPx =
        window.innerHeight * transitionThresholdViewportPercent;

      const sortedSectionsArray = Object.values(trackedSections).sort(
        (a, b) => a.order - b.order
      );

      if (sortedSectionsArray.length === 0) {
        if (activeTheme !== 'emerald') setActiveThemeState('emerald');
        return;
      }

      let newProposedTheme: ThemeName = sortedSectionsArray[0].theme; // Default to first section's theme

      for (let i = 0; i < sortedSectionsArray.length; i++) {
        const currentSection = sortedSectionsArray[i];
        if (!currentSection.ref.current) continue;

        const rect = currentSection.ref.current.getBoundingClientRect();

        // Rule 1: If the current section is actively spanning the threshold line, its theme is chosen.
        // This means its top is above or at the line, and its bottom is below or at the line.
        if (
          rect.top <= transitionThresholdPx &&
          rect.bottom >= transitionThresholdPx
        ) {
          newProposedTheme = currentSection.theme;
          break; // This section is definitively the one at the threshold, so its theme applies.
        }

        // Rule 2: If the current section has been scrolled past the threshold line (its bottom is above the line),
        // then the *next* section's theme becomes the candidate.
        // This rule is processed if Rule 1 wasn't met for this section.
        if (rect.bottom < transitionThresholdPx) {
          if (i + 1 < sortedSectionsArray.length) {
            // There is a next section, so its theme is the candidate.
            newProposedTheme = sortedSectionsArray[i + 1].theme;
          } else {
            // This is the last section, and it's scrolled past. Its own theme should remain.
            newProposedTheme = currentSection.theme;
          }
          // We continue iterating because a subsequent section might satisfy Rule 1, overriding this.
        }

        // If rect.top > transitionThresholdPx, this section hasn't reached the threshold line yet.
        // newProposedTheme will retain its value from a previous (higher up) section satisfying Rule 2,
        // or the default if no section has yet satisfied Rule 1 or Rule 2.
      }

      if (activeTheme !== newProposedTheme) {
        setActiveThemeState(newProposedTheme);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [trackedSections, activeTheme]); // activeTheme is read for comparison, so it's a dependency.

  return (
    <SectionThemeContext.Provider
      value={{ activeTheme, registerSection, unregisterSection }}
    >
      {children}
    </SectionThemeContext.Provider>
  );
};

export const useSectionTheme = () => {
  const context = useContext(SectionThemeContext);
  if (context === undefined) {
    throw new Error(
      'useSectionTheme must be used within a SectionThemeProvider'
    );
  }
  return context;
};

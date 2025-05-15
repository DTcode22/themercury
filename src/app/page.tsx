import Hero from './components/Hero';
import Features from './components/Features';
import CTA from './components/CTA';
import ThreatDetection from './components/ThreatDetection';
import WorkOptimization from './components/WorkOptimization';
import AICapabilities from './components/AICapabilities';
import SectionWatcher from './components/SectionWatcher';
import { ThemeName } from '@/context/SectionThemeContext';

export interface ComponentProps {
  currentSectionThemeName: ThemeName;
  isFirstSection: boolean;
  isLastSection: boolean;
}

export default function Home() {
  const sectionDeclarations = [
    { id: 'hero', Comp: Hero, theme: 'emerald' as ThemeName },
    {
      id: 'features',
      Comp: Features,
      theme: 'emerald' as ThemeName,
      noTopBoundary: true,
    },
    {
      id: 'work-optimization',
      Comp: WorkOptimization,
      theme: 'blue' as ThemeName,
    },
    {
      id: 'threat-detection',
      Comp: ThreatDetection,
      theme: 'red' as ThemeName,
    },
    {
      id: 'ai-capabilities',
      Comp: AICapabilities,
      theme: 'purple' as ThemeName,
    },
    { id: 'cta', Comp: CTA, theme: 'gray' as ThemeName },
  ];

  return (
    <div className="overflow-hidden">
      {sectionDeclarations.map((sectionData, index) => {
        const { Comp, id, theme } = sectionData;
        const previousThemeName =
          index > 0 ? sectionDeclarations[index - 1].theme : null;
        const isLastSection = index === sectionDeclarations.length - 1;
        const isFirstSection = index === 0;

        const componentProps: ComponentProps = {
          currentSectionThemeName: theme,
          isFirstSection: isFirstSection,
          isLastSection: isLastSection,
        };

        return (
          <SectionWatcher
            key={id}
            sectionId={id}
            themeName={theme}
            order={index + 1}
            previousSectionThemeName={previousThemeName}
            noTopBoundary={sectionData.noTopBoundary}
          >
            <Comp {...componentProps} />
          </SectionWatcher>
        );
      })}
    </div>
  );
}

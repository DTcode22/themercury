import Hero from './components/Hero';
import Features from './components/Features';
import CTA from './components/CTA';
import ThreatDetection from './components/ThreatDetection';
import WorkOptimization from './components/WorkOptimization';
import AICapabilities from './components/AICapabilities';
import SectionWatcher from './components/SectionWatcher'; // Added import

export default function Home() {
  return (
    <div className="overflow-hidden">
      <SectionWatcher sectionId="hero" themeName="emerald" order={1}>
        <Hero />
      </SectionWatcher>
      <SectionWatcher sectionId="features" themeName="emerald" order={2}>
        <Features />
      </SectionWatcher>
      <SectionWatcher sectionId="work-optimization" themeName="blue" order={3}>
        <WorkOptimization />
      </SectionWatcher>
      <SectionWatcher sectionId="threat-detection" themeName="red" order={4}>
        <ThreatDetection />
      </SectionWatcher>
      <SectionWatcher sectionId="ai-capabilities" themeName="purple" order={5}>
        <AICapabilities />
      </SectionWatcher>
      <SectionWatcher sectionId="cta" themeName="gray" order={6}>
        <CTA />
      </SectionWatcher>
    </div>
  );
}

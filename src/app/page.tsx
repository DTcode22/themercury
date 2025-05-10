import Hero from './components/Hero';
import Features from './components/Features';
import CTA from './components/CTA';
import ThreatDetection from './components/ThreatDetection';
import WorkOptimization from './components/WorkOptimization';
import AICapabilities from './components/AICapabilities';

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Features />
      <WorkOptimization />
      <ThreatDetection />
      <AICapabilities />
      <CTA />
    </div>
  );
}

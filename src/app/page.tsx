import Hero from './components/Hero';
import Features from './components/Features';
import Industries from './components/Industries';
import VideoAnalytics from './components/VideoAnalytics';
import CTA from './components/CTA';
import SecurityFeatures from './components/SecurityFeatuers';

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      {/* <VideoAnalytics /> */}
      <Features />
      <SecurityFeatures></SecurityFeatures>
      <Industries />
      <CTA />
    </div>
  );
}

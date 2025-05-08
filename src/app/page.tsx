import Hero from './components/Hero';
import Features from './components/Features';
import Industries from './components/Industries';
import VideoAnalytics from './components/VideoAnalytics';
import CTA from './components/CTA';

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <VideoAnalytics />
      <Features />
      <Industries />
      <CTA />
    </div>
  );
}

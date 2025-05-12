// FILE: src/app/components/Hero.tsx
'use client';
import Link from 'next/link';
import {
  ArrowRight,
  Shield,
  Eye,
  Activity,
  Brain,
  LucideProps,
} from 'lucide-react';
import { useState, useEffect, useRef, ReactElement } from 'react';

type AnimationPhase = 'typing' | 'pausing' | 'erasing';

const iconComponents: Record<string, ReactElement<LucideProps>> = {
  Shield: <Shield className="inline-block text-emerald-400" size={22} />,
  Eye: <Eye className="inline-block text-emerald-400" size={22} />,
  Activity: <Activity className="inline-block text-emerald-400" size={22} />,
  Brain: <Brain className="inline-block text-emerald-400" size={22} />,
};
type IconKey = keyof typeof iconComponents;

const Hero = () => {
  const headingPhrases = [
    'Transform Your Operations with AI-Powered Video Intelligence.',
    'Unlock Unprecedented Security & Efficiency for Your Business.',
    'Partner with Us for Proactive Threat Detection and Optimized Workflows.',
    'Secure Your Future: Advanced AI Analytics Tailored to Your Needs.',
    'Elevate Your Security Posture and Operational Insight with TheMercury.ai.',
    'Gain Actionable Intelligence from Your Video Data, Effortlessly.',
  ];

  const subheadingPhrases = [
    'Intelligent Solutions, Tangible Results.',
    'Your Vision, Our AI Expertise.',
    'Secure • Optimize • Innovate.',
    'Data-Driven Insights for a Safer, Smarter Future.',
    'The Future of Video Analytics, Delivered Today.',
    'Empowering Businesses with Predictive Intelligence.',
  ];

  const [displayedHeading, setDisplayedHeading] = useState('');
  const [displayedSubheading, setDisplayedSubheading] = useState('');
  const [headingIndex, setHeadingIndex] = useState(0);
  const [subheadingIndex, setSubheadingIndex] = useState(0);
  const [headingPhase, setHeadingPhase] = useState<AnimationPhase>('typing');
  const [subheadingPhase, setSubheadingPhase] =
    useState<AnimationPhase>('typing');
  const [currentIcon, setCurrentIcon] = useState<IconKey>('Shield');

  // State to track client-side mounting
  const [isClientMounted, setIsClientMounted] = useState(false);

  useEffect(() => {
    setIsClientMounted(true);
  }, []);

  // Slower transition speeds
  const typingSpeedBase = useRef(70);
  const typingSpeedVariance = useRef(25);
  const erasingSpeedBase = useRef(40);
  const subheadingPauseDurationMultiplier = 0.9;
  const subheadingTypingSpeedMultiplier = 1.0;
  const subheadingErasingSpeedMultiplier = 1.0;
  const basePauseDuration = useRef(3500);

  const [gridOpacity, setGridOpacity] = useState(0.5);
  const [gridScale, setGridScale] = useState(5);

  const gridScaleTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const gridOpacityTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const getRandomTypingSpeed = () => {
    return (
      typingSpeedBase.current + Math.random() * typingSpeedVariance.current
    );
  };

  useEffect(() => {
    if (!isClientMounted) return; // Don't run animation on server or before client mount

    let animationTimeout: NodeJS.Timeout | undefined;
    const currentPhrase = headingPhrases[headingIndex];

    switch (headingPhase) {
      case 'typing':
        if (displayedHeading.length < currentPhrase.length) {
          animationTimeout = setTimeout(() => {
            setDisplayedHeading(
              currentPhrase.substring(0, displayedHeading.length + 1)
            );
          }, getRandomTypingSpeed());
        } else {
          setHeadingPhase('pausing');
        }
        break;
      case 'pausing':
        animationTimeout = setTimeout(() => {
          setHeadingPhase('erasing');
        }, basePauseDuration.current);
        break;
      case 'erasing':
        if (displayedHeading.length > 0) {
          animationTimeout = setTimeout(() => {
            setDisplayedHeading(
              displayedHeading.substring(0, displayedHeading.length - 1)
            );
          }, erasingSpeedBase.current);
        } else {
          setHeadingIndex(
            (prevIndex) => (prevIndex + 1) % headingPhrases.length
          );
          setHeadingPhase('typing');
          setGridScale((prev) => Math.min(8, prev + 1));

          if (gridScaleTimeoutRef.current)
            clearTimeout(gridScaleTimeoutRef.current);
          gridScaleTimeoutRef.current = setTimeout(() => setGridScale(5), 800);
        }
        break;
    }

    return () => {
      if (animationTimeout) clearTimeout(animationTimeout);
    };
  }, [
    isClientMounted,
    displayedHeading,
    headingIndex,
    headingPhase,
    headingPhrases,
  ]);

  useEffect(() => {
    if (!isClientMounted) return; // Don't run animation on server or before client mount

    let animationTimeout: NodeJS.Timeout | undefined;
    const currentPhrase = subheadingPhrases[subheadingIndex];

    switch (subheadingPhase) {
      case 'typing':
        if (displayedSubheading.length < currentPhrase.length) {
          animationTimeout = setTimeout(() => {
            setDisplayedSubheading(
              currentPhrase.substring(0, displayedSubheading.length + 1)
            );
          }, getRandomTypingSpeed() * subheadingTypingSpeedMultiplier);
        } else {
          setSubheadingPhase('pausing');
        }
        break;
      case 'pausing':
        animationTimeout = setTimeout(() => {
          setSubheadingPhase('erasing');
        }, basePauseDuration.current * subheadingPauseDurationMultiplier);
        break;
      case 'erasing':
        if (displayedSubheading.length > 0) {
          animationTimeout = setTimeout(() => {
            setDisplayedSubheading(
              displayedSubheading.substring(0, displayedSubheading.length - 1)
            );
          }, erasingSpeedBase.current * subheadingErasingSpeedMultiplier);
        } else {
          setSubheadingIndex(
            (prevIndex) => (prevIndex + 1) % subheadingPhrases.length
          );
          setSubheadingPhase('typing');

          const icons = Object.keys(iconComponents) as IconKey[];
          setCurrentIcon(icons[Math.floor(Math.random() * icons.length)]);

          setGridOpacity((prev) => (prev === 0.5 ? 0.6 : 0.5));
          if (gridOpacityTimeoutRef.current)
            clearTimeout(gridOpacityTimeoutRef.current);
          gridOpacityTimeoutRef.current = setTimeout(
            () => setGridOpacity(0.5),
            800
          );
        }
        break;
    }

    return () => {
      if (animationTimeout) clearTimeout(animationTimeout);
    };
  }, [
    isClientMounted,
    displayedSubheading,
    subheadingIndex,
    subheadingPhase,
    subheadingPhrases,
  ]);

  useEffect(() => {
    return () => {
      if (gridScaleTimeoutRef.current) {
        clearTimeout(gridScaleTimeoutRef.current);
      }
      if (gridOpacityTimeoutRef.current) {
        clearTimeout(gridOpacityTimeoutRef.current);
      }
    };
  }, []);

  return (
    <section className="relative min-h-screen w-full flex items-center overflow-hidden pt-20">
      <div
        className="absolute inset-0 w-full h-full transition-all duration-700 ease-in-out"
        style={{
          backgroundImage: 'url("/grid-pattern.svg")',
          backgroundSize: 640,
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'repeat',
          opacity: gridOpacity,
          filter: `url(#grid-warp)`,
          transform: headingPhase === 'erasing' ? 'scale(1.01)' : 'scale(1)',
        }}
      ></div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-950/40 to-black/60"></div>

      <svg className="hidden">
        <filter id="grid-warp">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.01"
            numOctaves="3"
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale={gridScale}
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>

      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-emerald-400/30 animate-pulse"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 8 + 2}s`,
              opacity: Math.random() * 0.5,
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6 leading-tight min-h-[5rem] sm:min-h-[5.5rem] md:min-h-[7.5rem] lg:min-h-[9rem] flex items-center justify-center">
            <span className="inline-block">
              {isClientMounted ? displayedHeading : ''}{' '}
              {/* Render only on client after mount */}
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-white/80 mb-8 min-h-[3rem] sm:min-h-[3.5rem] md:min-h-[4rem] flex items-center justify-center gap-2">
            <span className="flex items-center">
              {/* Icon can render initially as its default is consistent */}
              {iconComponents[currentIcon]}
              <span className="mx-2">
                {isClientMounted ? displayedSubheading : ''}{' '}
                {/* Render only on client after mount */}
              </span>
            </span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
            <Link
              href="/solutions"
              className="px-8 py-3 rounded-full bg-emerald-500/10 backdrop-blur-md text-emerald-200 font-medium border border-emerald-400/20 transition-all hover:bg-gradient-to-r hover:from-emerald-950 hover:to-green-900 hover:text-white hover:shadow-sm hover:shadow-emerald-500/30 flex items-center gap-2 group"
            >
              Explore our Solutions
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 rounded-full bg-white/10 backdrop-blur-sm text-white font-medium border border-white/20 transition-all hover:bg-white/20"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

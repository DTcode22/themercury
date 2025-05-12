'use client';
import Link from 'next/link';
import {
  ArrowRight,
  Shield,
  Eye,
  Activity,
  Brain,
  LucideProps,
} from 'lucide-react'; // Added LucideProps for icon type
import { useState, useEffect, useRef, ReactElement } from 'react'; // Added ReactElement

// Define a type for the animation phases
type AnimationPhase = 'typing' | 'pausing' | 'erasing';

// Define the icon components and a type for their keys
// Explicitly type the iconComponents object
const iconComponents: Record<string, ReactElement<LucideProps>> = {
  Shield: <Shield className="inline-block text-emerald-400" size={22} />,
  Eye: <Eye className="inline-block text-emerald-400" size={22} />,
  Activity: <Activity className="inline-block text-emerald-400" size={22} />,
  Brain: <Brain className="inline-block text-emerald-400" size={22} />,
};
type IconKey = keyof typeof iconComponents; // This will correctly infer 'Shield' | 'Eye' | 'Activity' | 'Brain'

const Hero = () => {
  const headingPhrases = [
    'The future of security and efficiency, realized today',
    'AI that learns how humans move, before threats unfold',
    'Neural networks that see what human eyes miss',
    'Predictive algorithms that prevent incidents before they occur',
    'Computer vision that transforms surveillance into intelligence',
    'Behavioral patterns analyzed in microseconds, not minutes',
    'From passive monitoring to active threat prevention',
    'Spatial awareness that transcends traditional security',
    'The convergence of human intuition and machine precision',
  ];

  const subheadingPhrases = [
    'Intelligence Architected',
    'Anticipate • Adapt • Act',
    'Perceive | Process | Protect',
    'Beyond Surveillance: Meta-Awareness',
    'Synthetic Intuition, Real Protection',
    'Human Behavior, Machine Understood',
    'Security Through Cognitive Computing',
    'Algorithmic Vigilance, Perpetual Peace',
    'Vision Beyond Visibility',
    'Predictive Defense Framework',
    'Pattern Recognition Redefined',
    'Security Engineered, Threat Neutralized',
    'The Cognitive Security Layer',
  ];

  const [displayedHeading, setDisplayedHeading] = useState('');
  const [displayedSubheading, setDisplayedSubheading] = useState('');
  const [headingIndex, setHeadingIndex] = useState(0);
  const [subheadingIndex, setSubheadingIndex] = useState(0);
  const [headingPhase, setHeadingPhase] = useState<AnimationPhase>('typing');
  const [subheadingPhase, setSubheadingPhase] =
    useState<AnimationPhase>('typing');
  const [currentIcon, setCurrentIcon] = useState<IconKey>('Shield'); // Use IconKey type

  const typingSpeedBase = useRef(30);
  const typingSpeedVariance = useRef(15);
  const erasingSpeedBase = useRef(15);
  const pauseDuration = useRef(2800);

  const [gridOpacity, setGridOpacity] = useState(0.5);
  const [gridScale, setGridScale] = useState(5);

  // Refs for timeouts related to grid animations to ensure they can be cleared on unmount
  const gridScaleTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const gridOpacityTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const getRandomTypingSpeed = () => {
    return (
      typingSpeedBase.current + Math.random() * typingSpeedVariance.current
    );
  };

  useEffect(() => {
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
        }, pauseDuration.current);
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
  }, [displayedHeading, headingIndex, headingPhase, headingPhrases]);

  useEffect(() => {
    let animationTimeout: NodeJS.Timeout | undefined;
    const currentPhrase = subheadingPhrases[subheadingIndex];

    switch (subheadingPhase) {
      case 'typing':
        if (displayedSubheading.length < currentPhrase.length) {
          animationTimeout = setTimeout(() => {
            setDisplayedSubheading(
              currentPhrase.substring(0, displayedSubheading.length + 1)
            );
          }, getRandomTypingSpeed() * 1.2);
        } else {
          setSubheadingPhase('pausing');
        }
        break;
      case 'pausing':
        animationTimeout = setTimeout(() => {
          setSubheadingPhase('erasing');
        }, pauseDuration.current * 1.2);
        break;
      case 'erasing':
        if (displayedSubheading.length > 0) {
          animationTimeout = setTimeout(() => {
            setDisplayedSubheading(
              displayedSubheading.substring(0, displayedSubheading.length - 1)
            );
          }, erasingSpeedBase.current * 1.1);
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
    displayedSubheading,
    subheadingIndex,
    subheadingPhase,
    subheadingPhrases,
  ]);

  // Clean up grid animation timeouts when component unmounts
  useEffect(() => {
    return () => {
      if (gridScaleTimeoutRef.current) {
        clearTimeout(gridScaleTimeoutRef.current);
      }
      if (gridOpacityTimeoutRef.current) {
        clearTimeout(gridOpacityTimeoutRef.current);
      }
    };
  }, []); // Empty dependency array means this runs on mount and cleans up on unmount

  return (
    <section className="relative min-h-screen w-full flex items-center overflow-hidden pt-20">
      <div
        className="absolute inset-0 w-full h-full transition-all duration-700 ease-in-out"
        style={{
          backgroundImage: 'url("/grid-pattern.svg")',
          backgroundSize: 640, // csstype allows number for px values
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
              width: `${Math.random() * 6 + 2}px`, // Ensure string for CSS dimension
              height: `${Math.random() * 6 + 2}px`, // Ensure string for CSS dimension
              top: `${Math.random() * 100}%`, // Ensure string for CSS dimension
              left: `${Math.random() * 100}%`, // Ensure string for CSS dimension
              animationDuration: `${Math.random() * 8 + 2}s`, // Ensure string for CSS dimension
              opacity: Math.random() * 0.5,
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6 leading-tight min-h-[4rem] md:min-h-[5rem] lg:min-h-[6rem] flex items-center justify-center">
            <span className="inline-block">
              {displayedHeading}
              {/* Conditionally render cursor only if typing or pausing for heading */}
              {(headingPhase === 'typing' || headingPhase === 'pausing') &&
                displayedHeading.length > 0 && (
                  <span className="inline-block w-1 h-12 bg-emerald-400 ml-1 animate-pulse"></span>
                )}
              {/* Blinking cursor when heading is empty and about to type */}
              {headingPhase === 'typing' && displayedHeading.length === 0 && (
                <span className="inline-block w-1 h-12 bg-emerald-400 ml-1 animate-pulse"></span>
              )}
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/80 mb-8 min-h-[2rem] md:min-h-[2.5rem] flex items-center justify-center gap-2">
            <span className="flex items-center">
              {iconComponents[currentIcon]}
              <span className="mx-2">{displayedSubheading}</span>
              {/* Conditionally render cursor only if typing or pausing for subheading */}
              {(subheadingPhase === 'typing' ||
                subheadingPhase === 'pausing') &&
                displayedSubheading.length > 0 && (
                  <span className="inline-block w-0.5 h-6 bg-emerald-400 animate-pulse"></span>
                )}
              {/* Blinking cursor when subheading is empty and about to type */}
              {subheadingPhase === 'typing' &&
                displayedSubheading.length === 0 && (
                  <span className="inline-block w-0.5 h-6 bg-emerald-400 animate-pulse"></span>
                )}
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

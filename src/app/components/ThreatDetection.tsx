// FILE: src/app/components/ThreatDetection.tsx
'use client';

import type React from 'react';
import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  AlertTriangle,
  PenIcon as Gun,
  Flame,
  Skull,
  Shield,
  Eye,
} from 'lucide-react';
import { ComponentProps as PageSectionProps } from '@/app/page';
import { THEME_COLORS_MAP } from '@/app/utils/themeColors';

// Original Interface Definitions
interface ThreatDemoButtonProps {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
  isInView: boolean;
}

const ThreatDetection: React.FC<PageSectionProps> = ({
  currentSectionThemeName,
}) => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeDemo, setActiveDemo] = useState<string>('firearm');

  const themeDetails = THEME_COLORS_MAP[currentSectionThemeName];
  const neuralNetPatternId = `neural-net-${currentSectionThemeName}-threat`;
  const animatedSvgPatternFill = themeDetails.hex.replace('#', '%23');

  return (
    <section
      ref={ref}
      className={`py-20 relative overflow-hidden bg-gradient-to-b ${themeDetails.sectionBgGradient}`}
    >
      {/* Gradient pattern at the top */}
      <div className="absolute top-0 left-0 right-0 h-60 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(rgba(${themeDetails.rgb}, 0.3) 1px, transparent 1px)`,
            backgroundSize: '30px 30px',
            opacity: 0.4,
          }}
        ></div>
      </div>

      {/* Animated background elements (SVG pattern) */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='${animatedSvgPatternFill}' fillOpacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px',
          }}
        ></div>
      </div>

      {/* Neural network animation */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id={neuralNetPatternId}
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="50" cy="50" r="1" fill={themeDetails.hex} />
              <circle cx="0" cy="0" r="1" fill={themeDetails.hex} />
              <circle cx="0" cy="100" r="1" fill={themeDetails.hex} />
              <circle cx="100" cy="0" r="1" fill={themeDetails.hex} />
              <circle cx="100" cy="100" r="1" fill={themeDetails.hex} />
              <line
                x1="50"
                y1="50"
                x2="0"
                y2="0"
                stroke={themeDetails.hex}
                strokeWidth="0.2"
              />
              <line
                x1="50"
                y1="50"
                x2="100"
                y2="0"
                stroke={themeDetails.hex}
                strokeWidth="0.2"
              />
              <line
                x1="50"
                y1="50"
                x2="0"
                y2="100"
                stroke={themeDetails.hex}
                strokeWidth="0.2"
              />
              <line
                x1="50"
                y1="50"
                x2="100"
                y2="100"
                stroke={themeDetails.hex}
                strokeWidth="0.2"
              />
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill={`url(#${neuralNetPatternId})`}
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          {/* Title accent uses themeDetails */}
          <div
            className={`inline-flex items-center px-4 py-2 rounded-full mb-6`}
            style={{
              backgroundColor: `${themeDetails.hex}1A`,
              color: themeDetails.hex,
            }}
          >
            <AlertTriangle size={18} className="mr-2" />
            Advanced Threat Detection
          </div>
          <h2
            className={`text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white ${themeDetails.accentColorClass}`}
          >
            Identify & Neutralize Threats in Real-Time
          </h2>
          <p className="text-lg text-white/70">
            Our AI-powered system can detect potential threats including
            firearms, fire hazards, and suspicious behavior patterns before they
            escalate into dangerous situations.
          </p>
        </motion.div>

        {/* Threat Detection Demo - Reverted to original styling */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2 order-2 lg:order-1">
            {/* Demo container border uses themeDetails for subtle connection */}
            <div
              className="relative aspect-video rounded-2xl overflow-hidden border"
              style={{ borderColor: `${themeDetails.hex}4D` }}
            >
              {activeDemo === 'firearm' && <FirearmDetectionDemo />}
              {activeDemo === 'fire' && <FireHazardDemo />}
              {activeDemo === 'behavior' && <SuspiciousBehaviorDemo />}
            </div>
          </div>
          <div className="order-1 lg:order-2 flex flex-col space-y-4">
            <ThreatDemoButton
              active={activeDemo === 'firearm'}
              onClick={() => setActiveDemo('firearm')}
              icon={<Gun size={20} />}
              title="Firearm Detection"
              description="Instantly identify weapons with high accuracy"
            />
            <ThreatDemoButton
              active={activeDemo === 'fire'}
              onClick={() => setActiveDemo('fire')}
              icon={<Flame size={20} />}
              title="Fire & Hazard Detection"
              description="Early warning system for fire and smoke"
            />
            <ThreatDemoButton
              active={activeDemo === 'behavior'}
              onClick={() => setActiveDemo('behavior')}
              icon={<Skull size={20} />}
              title="Suspicious Behavior"
              description="Identify unusual patterns and activities"
            />
          </div>
        </div>

        {/* Key Features - Reverted to original styling */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            icon={<Eye className="w-10 h-10 text-red-400" />}
            title="99.7% Detection Accuracy"
            description="Our advanced neural networks provide industry-leading threat detection accuracy with minimal false positives."
            delay={0}
            isInView={isInView}
          />
          <FeatureCard
            icon={<Shield className="w-10 h-10 text-red-400" />}
            title="Instant Alert System"
            description="Immediate notifications to security personnel and automated integration with existing security protocols."
            delay={0.2}
            isInView={isInView}
          />
          <FeatureCard
            icon={<AlertTriangle className="w-10 h-10 text-red-400" />}
            title="Preventative Analysis"
            description="Identify potential threats before they materialize through behavioral and contextual analysis."
            delay={0.4}
            isInView={isInView}
          />
        </div>
      </div>

      {/* Gradient pattern at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-60 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(rgba(${themeDetails.rgb}, 0.3) 1px, transparent 1px)`,
            backgroundSize: '30px 30px',
            opacity: 0.4,
          }}
        ></div>
      </div>
    </section>
  );
};

// Reverted Sub-components to original styling
const ThreatDemoButton: React.FC<ThreatDemoButtonProps> = ({
  active,
  onClick,
  icon,
  title,
  description,
}) => (
  <button
    onClick={onClick}
    className={`p-4 rounded-xl text-left transition-all ${
      active
        ? 'bg-gradient-to-r from-red-950 to-red-900/50 border border-red-500/30' // Original red active
        : 'bg-black/30 border border-white/10 hover:bg-black/50'
    }`}
  >
    <div className="flex items-start">
      <div
        className={`p-2 rounded-lg ${
          active ? 'bg-red-500/20 text-red-400' : 'bg-white/10 text-white/70'
        }`}
      >
        {icon}
      </div>
      <div className="ml-4">
        <h3 className={`font-bold ${active ? 'text-red-400' : 'text-white'}`}>
          {title}
        </h3>
        <p className="text-sm text-white/60 mt-1">{description}</p>
      </div>
    </div>
  </button>
);

// Reverted Demo components to original styling
const FirearmDetectionDemo: React.FC = () => (
  <div className="relative w-full h-full">
    <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover"></div>
    <div className="absolute inset-0">
      <div className="absolute top-[30%] left-[40%] w-20 h-48 border-2 border-red-500 rounded-sm animate-pulse">
        <div className="absolute -top-8 left-0 bg-red-500 text-white text-xs px-2 py-1 rounded flex items-center">
          {' '}
          <Gun size={12} className="mr-1" /> FIREARM DETECTED{' '}
        </div>
      </div>
      <div className="absolute top-4 right-4 bg-black/80 border border-red-500 p-4 rounded-lg max-w-xs animate-pulse">
        <div className="flex items-center text-red-500 mb-2">
          {' '}
          <AlertTriangle size={16} className="mr-2" />{' '}
          <span className="font-bold">CRITICAL ALERT</span>{' '}
        </div>
        <p className="text-white text-sm">
          {' '}
          Firearm detected in Zone B. Security personnel dispatched. Lockdown
          protocols initiated.{' '}
        </p>
      </div>
      <div className="absolute bottom-4 left-4 bg-black/80 p-3 rounded-lg">
        <div className="text-xs text-white/90">
          <div className="flex justify-between mb-1">
            {' '}
            <span>Detection Confidence:</span>{' '}
            <span className="text-red-400">98.7%</span>{' '}
          </div>
          <div className="h-1 bg-white/20 rounded-full overflow-hidden">
            {' '}
            <div
              className="h-full bg-red-500"
              style={{ width: '98.7%' }}
            ></div>{' '}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const FireHazardDemo: React.FC = () => (
  <div className="relative w-full h-full">
    <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover"></div>
    <div className="absolute inset-0">
      <div className="absolute top-[20%] left-[30%] w-32 h-32 border-2 border-orange-500 rounded-sm animate-pulse">
        <div className="absolute -top-8 left-0 bg-orange-500 text-white text-xs px-2 py-1 rounded flex items-center">
          {' '}
          <Flame size={12} className="mr-1" /> FIRE DETECTED{' '}
        </div>
      </div>
      <div className="absolute top-[15%] left-[25%] w-48 h-24 border-2 border-orange-300 rounded-sm animate-pulse opacity-70">
        <div className="absolute -top-8 left-0 bg-orange-300 text-white text-xs px-2 py-1 rounded flex items-center">
          {' '}
          <Flame size={12} className="mr-1" /> SMOKE DETECTED{' '}
        </div>
      </div>
      <div className="absolute top-4 right-4 bg-black/80 border border-orange-500 p-4 rounded-lg max-w-xs animate-pulse">
        <div className="flex items-center text-orange-500 mb-2">
          {' '}
          <AlertTriangle size={16} className="mr-2" />{' '}
          <span className="font-bold">FIRE HAZARD ALERT</span>{' '}
        </div>
        <p className="text-white text-sm">
          {' '}
          Fire detected in Server Room. Fire suppression system activated.
          Emergency services notified.{' '}
        </p>
      </div>
      <div className="absolute bottom-4 left-4 bg-black/80 p-3 rounded-lg">
        <div className="text-xs text-white/90 space-y-2">
          <div>
            <div className="flex justify-between mb-1">
              {' '}
              <span>Temperature:</span>{' '}
              <span className="text-orange-400">142°F</span>{' '}
            </div>
            <div className="h-1 bg-white/20 rounded-full overflow-hidden">
              {' '}
              <div
                className="h-full bg-gradient-to-r from-green-500 via-yellow-500 to-red-500"
                style={{ width: '70%' }}
              ></div>{' '}
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-1">
              {' '}
              <span>Smoke Density:</span>{' '}
              <span className="text-orange-400">High</span>{' '}
            </div>
            <div className="h-1 bg-white/20 rounded-full overflow-hidden">
              {' '}
              <div
                className="h-full bg-orange-500"
                style={{ width: '85%' }}
              ></div>{' '}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const SuspiciousBehaviorDemo: React.FC = () => (
  <div className="relative w-full h-full">
    <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover"></div>
    <div className="absolute inset-0">
      <div className="absolute top-[30%] left-[40%] w-16 h-40 border-2 border-amber-500 rounded-sm animate-pulse">
        <div className="absolute -top-8 left-0 bg-amber-500 text-white text-xs px-2 py-1 rounded flex items-center">
          {' '}
          <AlertTriangle size={12} className="mr-1" /> SUSPICIOUS BEHAVIOR{' '}
        </div>
      </div>
      <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 10 }}>
        {' '}
        <path
          d="M300,400 C350,350 400,300 450,350 C500,400 550,450 600,400"
          stroke="rgba(245, 158, 11, 0.7)"
          strokeWidth="3"
          strokeDasharray="10,5"
          fill="none"
        />{' '}
      </svg>
      <div className="absolute top-4 right-4 bg-black/80 border border-amber-500 p-4 rounded-lg max-w-xs">
        <div className="flex items-center text-amber-500 mb-2">
          {' '}
          <AlertTriangle size={16} className="mr-2" />{' '}
          <span className="font-bold">BEHAVIOR ALERT</span>{' '}
        </div>
        <p className="text-white text-sm">
          {' '}
          Unusual loitering detected in restricted area. Subject has been in
          zone for 5:32 minutes. Security notified.{' '}
        </p>
      </div>
      <div className="absolute bottom-4 left-4 bg-black/80 p-3 rounded-lg">
        <div className="text-xs text-white/90 space-y-2">
          <div>
            <div className="flex justify-between mb-1">
              {' '}
              <span>Behavior Analysis:</span>{' '}
              <span className="text-amber-400">Suspicious</span>{' '}
            </div>
            <div className="h-1 bg-white/20 rounded-full overflow-hidden">
              {' '}
              <div
                className="h-full bg-amber-500"
                style={{ width: '75%' }}
              ></div>{' '}
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-1">
              {' '}
              <span>Time in Zone:</span>{' '}
              <span className="text-amber-400">5:32</span>{' '}
            </div>
            <div className="h-1 bg-white/20 rounded-full overflow-hidden">
              {' '}
              <div
                className="h-full bg-amber-500"
                style={{ width: '80%' }}
              ></div>{' '}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  delay,
  isInView,
}) => (
  <motion.div
    className="bg-gradient-to-br from-red-950/30 to-black/50 backdrop-blur-sm p-6 rounded-2xl border border-red-900/30 hover:border-red-700/30 transition-all group" // Original red style
    initial={{ opacity: 0, y: 30 }}
    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
    transition={{ duration: 0.6, delay }}
  >
    <div className="mb-5 p-3 bg-red-900/20 inline-block rounded-xl group-hover:bg-red-900/30 transition-colors">
      {' '}
      {icon}{' '}
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-white/70">{description}</p>
  </motion.div>
);

export default ThreatDetection;

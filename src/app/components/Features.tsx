'use client';

import type React from 'react';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import SectionBoundaryEffect from './SectionBoundaryEffect';
import { ThemeName } from '@/context/SectionThemeContext';
import { THEME_COLORS_MAP } from '@/app/utils/themeColors';

interface FeatureItemProps {
  title: string;
  description: string;
}

interface FeaturesProps {
  currentSectionThemeName: ThemeName;
  isFirstSection?: boolean;
  isLastSection?: boolean;
}

const Features: React.FC<FeaturesProps> = ({
  currentSectionThemeName,
  isLastSection,
}) => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const themeDetails = THEME_COLORS_MAP[currentSectionThemeName];

  return (
    <section
      className={`py-32 bg-gradient-to-b from-black ${themeDetails.mainBgToColor} relative`}
      ref={ref}
    >
      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-20 pb-20">
        {' '}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            className={`text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white ${themeDetails.accentColorClass}`}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            Intelligent Video Analytics
          </motion.h2>
          <motion.p
            className="text-lg text-white/70"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Leverage Mercury&apos;s intelligent video analytics to improve
            safety and operational efficiency. Our system supports a wide range
            of video sources, from surveillance cameras to drones, providing
            comprehensive coverage.
          </motion.p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[500px] rounded-3xl overflow-hidden border border-emerald-900/30">
              <Image
                src="/Detection-Image.png"
                alt="AI Video Analytics Dashboard"
                layout="fill"
                objectFit="cover"
                priority={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    Real-time Human Movement Tracking
                  </h3>
                  <p className="text-white/70">
                    Analyze patterns and detect anomalies with precision
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 flex flex-col h-full justify-around"
          >
            <FeatureItem
              title="Advanced Human Detection"
              description="Our AI algorithms accurately identify and track human movement in real-time, representing subjects with precise bounding boxes."
            />
            <FeatureItem
              title="Pattern Analysis"
              description="Analyze walking and working patterns to identify correct behaviors and detect anomalies or potential security threats."
            />
            <FeatureItem
              title="Predictive Analytics"
              description="Leverage historical data to predict potential issues before they occur, enabling proactive security measures."
            />
            <div className="pt-4">
              <a
                href="/solutions"
                className={`inline-flex items-center ${
                  currentSectionThemeName === 'emerald'
                    ? 'text-emerald-400'
                    : currentSectionThemeName === 'blue'
                    ? 'text-blue-400'
                    : 'text-gray-400'
                } font-medium group`}
              >
                Learn more about our technology
                <ArrowRight
                  size={16}
                  className="ml-2 transition-transform group-hover:translate-x-1"
                />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

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
      {!isLastSection && (
        <SectionBoundaryEffect
          position="bottom"
          themeColorRGB={themeDetails.rgb}
          themeColorHex={themeDetails.hex}
          overlaySourceColorCss={themeDetails.mainBgToColor.replace('to-', '')}
        />
      )}
    </section>
  );
};

const FeatureItem: React.FC<FeatureItemProps> = ({ title, description }) => {
  return (
    <div className="border-l-2 border-emerald-500 pl-6 py-2">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-white/70">{description}</p>
    </div>
  );
};

export default Features;

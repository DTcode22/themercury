// FILE: src/app/components/CTA.tsx
'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ComponentProps as PageSectionProps } from '@/app/page';
import { THEME_COLORS_MAP } from '@/app/utils/themeColors';

const CTA: React.FC<PageSectionProps> = ({ currentSectionThemeName }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const themeDetails = THEME_COLORS_MAP[currentSectionThemeName];
  const neuralNetPatternId = `neural-net-${currentSectionThemeName}-cta`;
  const animatedSvgPatternFill = themeDetails.hex.replace('#', '%23');

  // Remove original top/bottom gradient patterns from CTA as they are replaced by the new h-60 ones.

  return (
    <section
      className={`py-80 relative bg-gradient-to-b ${themeDetails.sectionBgGradient}`}
      ref={ref}
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
        {/* Neural network SVG Pattern - integrated into the main neural net below for CTA */}
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

      {/* Neural network animation (Full section) */}
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
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className={`text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent py-2 bg-gradient-to-r from-white ${themeDetails.accentColorClass}`}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            Ready to Transform Your Security & Efficiency?
          </motion.h2>
          <motion.p
            className="text-xl text-white/70 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Discover how Mercury&apos;s AI-powered video analytics can
            revolutionize your operations and enhance security across your
            organization.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              href="/contact"
              className={`px-8 py-4 rounded-full text-white font-medium text-lg transition-all hover:shadow-lg inline-flex items-center gap-2 group`}
              style={{
                backgroundImage: `linear-gradient(to right, ${themeDetails.hex}B3, ${themeDetails.hex}99)`,
                boxShadow: `0 4px 15px 0 ${themeDetails.hex}4D`,
              }}
            >
              Get Started Today
              <ArrowRight
                size={20}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
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
        {/* Neural network SVG Pattern - integrated into the main neural net for CTA */}
      </div>
    </section>
  );
};

export default CTA;

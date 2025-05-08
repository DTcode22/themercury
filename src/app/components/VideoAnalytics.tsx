'use client';

import type React from 'react';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Shield, Eye, Zap } from 'lucide-react';

const VideoAnalytics = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="py-20 bg-black relative overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20"></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
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

        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Shield className="w-10 h-10 text-emerald-500" />}
            title="Public Safety Enhancement"
            description="Improve incident detection and emergency response capabilities."
            delay={0}
            isInView={isInView}
          />

          <FeatureCard
            icon={<Eye className="w-10 h-10 text-emerald-500" />}
            title="Critical Infrastructure Security"
            description="Protect vital assets with precise and reliable monitoring."
            delay={0.2}
            isInView={isInView}
          />

          <FeatureCard
            icon={<Zap className="w-10 h-10 text-emerald-500" />}
            title="Automated Responses"
            description="Ensure public health and safety with continuous monitoring and rapid alerts during pandemics."
            delay={0.4}
            isInView={isInView}
          />
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({
  icon,
  title,
  description,
  delay,
  isInView,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
  isInView: boolean;
}) => {
  return (
    <motion.div
      className="bg-gradient-to-br from-emerald-950/50 to-black/50 backdrop-blur-sm p-8 rounded-2xl border border-emerald-900/30 hover:border-emerald-700/30 transition-all group"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="mb-5 p-3 bg-emerald-900/20 inline-block rounded-xl group-hover:bg-emerald-900/30 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-white/70">{description}</p>
    </motion.div>
  );
};

export default VideoAnalytics;

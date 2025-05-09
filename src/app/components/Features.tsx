'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      className="py-20 bg-gradient-to-b from-black to-emerald-950/22 relative"
      ref={ref}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            Diverse Industry Applications
          </motion.h2>
          <motion.p
            className="text-lg text-white/70"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our advanced technologies cater to a variety of industries,
            providing customized solutions that offer improvement in both
            security and efficiency.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-video rounded-3xl overflow-hidden border border-emerald-900/30">
              <Image
                src="/Detection-Image.png"
                alt="AI Video Analytics Dashboard"
                width={800}
                height={600}
                className="object-cover"
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
            className="space-y-6"
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
                className="inline-flex items-center text-emerald-400 font-medium group"
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
    </section>
  );
};

const FeatureItem = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="border-l-2 border-emerald-500 pl-6 py-2">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-white/70">{description}</p>
    </div>
  );
};

export default Features;

'use client';

import type React from 'react';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  School,
  Building2,
  ShoppingBag,
  Landmark,
  Hotel,
  Train,
} from 'lucide-react';

const Industries = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-12 bg-black relative" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-10"></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            Industries We Serve
          </motion.h2>
          <motion.p
            className="text-lg text-white/70"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our AI-powered video analytics solutions are tailored to meet the
            unique needs of various industries.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <IndustryCard
            icon={<School />}
            title="Education"
            features={[
              'Campus safety monitoring',
              'Real-time threat detection',
              'Data-driven security insights',
            ]}
            delay={0.2}
            isInView={isInView}
          />

          <IndustryCard
            icon={<Building2 />}
            title="Healthcare"
            features={[
              'Patient safety monitoring',
              'Staff workflow optimization',
              'Secure facility management',
            ]}
            delay={0.4}
            isInView={isInView}
          />

          <IndustryCard
            icon={<ShoppingBag />}
            title="Retail"
            features={[
              'Theft prevention systems',
              'Store layout optimization',
              'Consumer experience analysis',
            ]}
            delay={0.6}
            isInView={isInView}
          />

          <IndustryCard
            icon={<Landmark />}
            title="Government"
            features={[
              'Public space monitoring',
              'Critical infrastructure protection',
              'Emergency response coordination',
            ]}
            delay={0.8}
            isInView={isInView}
          />

          <IndustryCard
            icon={<Hotel />}
            title="Hospitality"
            features={[
              'Guest safety assurance',
              'Property security',
              'Service quality monitoring',
            ]}
            delay={1}
            isInView={isInView}
          />

          <IndustryCard
            icon={<Train />}
            title="Transportation"
            features={[
              'Transit hub security',
              'Passenger flow analysis',
              'Incident detection & response',
            ]}
            delay={1.2}
            isInView={isInView}
          />
        </div>
      </div>
    </section>
  );
};

const IndustryCard = ({
  icon,
  title,
  features,
  delay,
  isInView,
}: {
  icon: React.ReactNode;
  title: string;
  features: string[];
  delay: number;
  isInView: boolean;
}) => {
  return (
    <motion.div
      className="bg-gradient-to-br from-emerald-950/50 to-black/20 backdrop-blur-sm p-6 rounded-2xl border border-emerald-700/30 hover:border-emerald-700/40 transition-all ease-out group"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="mb-4 p-3 bg-emerald-900/20 inline-block rounded-xl group-hover:bg-emerald-900/30 transition-colors text-emerald-400">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-emerald-400 mr-2">•</span>
            <span className="text-white/70">{feature}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Industries;

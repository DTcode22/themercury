// src/app/components/SecurityFeatures.tsx
'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Image from 'next/image';

export default function SecurityFeatures() {
  const [activeTab, setActiveTab] = useState('monitoring'); // Default open tab
  const features = [
    {
      id: 'monitoring',
      title: 'Real-time monitoring and detection',
      description:
        'Utilize AI to detect and respond to hazards such as structural collapses, water leaks, and more in real-time.',
    },
    {
      id: 'analysis',
      title: 'Comprehensive forensic analysis',
      description:
        'Detailed post-incident investigation capabilities with AI-powered anomaly detection and event reconstruction.',
    },
    {
      id: 'insights',
      title: 'Customer insights',
      description:
        'Gain valuable data on customer behavior patterns, preferences, and engagement metrics to optimize your security strategy.',
    },
    {
      id: 'efficiency',
      title: 'Operational efficiency',
      description:
        'Streamline workflows and reduce manual monitoring with smart alerts, automated responses, and intuitive dashboards.',
    },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-black to-emerald-950/25 rounded-3xl overflow-hidden my-16">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:items-stretch">
          {/* Left Column */}
          <div className="flex flex-col justify-between space-y-12">
            {/* Top part of left column */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                Enhanced security with intelligent surveillance
              </h2>
              {/* Accordion container - give it min-height */}
              <div className="space-y-6 mt-8 min-h-[480px]">
                {features.map((feature) => (
                  <div
                    key={feature.id}
                    className="border-b border-emerald-700/30 pb-4 last:border-b-0"
                  >
                    <button
                      onClick={() =>
                        setActiveTab(feature.id === activeTab ? '' : feature.id)
                      }
                      className="w-full flex items-center justify-between text-left py-3 group"
                      aria-expanded={activeTab === feature.id}
                      aria-controls={`feature-content-${feature.id}`}
                    >
                      <h3 className="text-2xl font-bold group-hover:text-emerald-400 transition-colors">
                        {feature.title}
                      </h3>
                      {activeTab === feature.id ? (
                        <ChevronUp className="text-emerald-400" size={24} />
                      ) : (
                        <ChevronDown className="text-emerald-400" size={24} />
                      )}
                    </button>

                    {activeTab === feature.id && (
                      <div
                        id={`feature-content-${feature.id}`}
                        className="mt-3 text-white/80 prose prose-invert max-w-none"
                      >
                        {feature.description}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column (Image) */}
          <div className="relative w-full h-auto lg:h-full">
            {' '}
            {/* Ensure it can take full height on large screens */}
            <div className="relative w-full h-[400px] lg:h-full rounded-3xl overflow-hidden">
              {/* Ensure 'fire.png' is available in public folder or use a valid path */}
              <Image
                src="/fire.png"
                alt="AI powered security system demonstration"
                layout="fill"
                objectFit="cover"
                className="w-full h-full"
                priority // Consider adding priority if this image is LCP for this section
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md p-4 rounded-lg">
                <span className="block text-lg font-semibold text-emerald-400 mb-1">
                  AI-powered threat detection
                </span>
                <p className="text-sm text-white/80">
                  Advanced algorithms identify potential security breaches in
                  real-time
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

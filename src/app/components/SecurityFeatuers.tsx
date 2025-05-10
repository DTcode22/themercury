'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function SecurityFeatures() {
  const [activeTab, setActiveTab] = useState('monitoring');

  const features = [
    {
      id: 'monitoring',
      title: 'Real-time monitoring and detection',
      description:
        'Utilize AI to detect and respond to hazards such as structural collapses, water leaks, and more in real-time.',
      icon: activeTab === 'monitoring' ? ChevronUp : ChevronDown,
    },
    {
      id: 'analysis',
      title: 'Comprehensive forensic analysis',
      description:
        'Detailed post-incident investigation capabilities with AI-powered anomaly detection and event reconstruction.',
      icon: activeTab === 'analysis' ? ChevronUp : ChevronDown,
    },
    {
      id: 'insights',
      title: 'Customer insights',
      description:
        'Gain valuable data on customer behavior patterns, preferences, and engagement metrics to optimize your security strategy.',
      icon: activeTab === 'insights' ? ChevronUp : ChevronDown,
    },
    {
      id: 'efficiency',
      title: 'Operational efficiency',
      description:
        'Streamline workflows and reduce manual monitoring with smart alerts, automated responses, and intuitive dashboards.',
      icon: activeTab === 'efficiency' ? ChevronUp : ChevronDown,
    },
  ];

  return (
    <section className="w-full bg-emerald-950/30 rounded-3xl overflow-hidden my-16">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-12">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              Enhanced security with intelligent surveillance
            </h2>

            <div className="space-y-4">
              {features.map((feature) => (
                <div
                  key={feature.id}
                  className="border-b border-emerald-700/30 pb-4"
                >
                  <button
                    onClick={() => setActiveTab(feature.id)}
                    className="w-full flex items-center justify-between text-left"
                  >
                    <h3 className="text-2xl font-bold">{feature.title}</h3>
                    <feature.icon className="text-emerald-400" size={24} />
                  </button>

                  {activeTab === feature.id && (
                    <p className="mt-3 text-white/80">{feature.description}</p>
                  )}
                </div>
              ))}
            </div>

            <div>
              <Link
                href="/solutions"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-emerald-500/10 backdrop-blur-md text-emerald-200 font-medium border border-emerald-400/20 transition-all hover:bg-gradient-to-r hover:from-emerald-950 hover:to-green-900 hover:text-white hover:shadow-sm hover:shadow-emerald-500/30 group"
              >
                Explore our Solutions
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="rounded-2xl overflow-hidden border border-emerald-700/30 shadow-lg shadow-emerald-900/20">
              <Image
                src="/fire.png"
                alt="Security system demonstration"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-sm p-4 rounded-lg">
                <span className="text-emerald-400 font-medium">
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

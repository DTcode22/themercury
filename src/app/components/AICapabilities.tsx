'use client';

import type React from 'react';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Brain, Cpu, Network, Lock, Zap, BarChart3 } from 'lucide-react';
import { ComponentProps as PageSectionProps } from '@/app/page'; // For accepting props from page.tsx

interface CapabilityCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
  isInView: boolean;
}

interface TechStackItemProps {
  name: string;
  description: string;
  percentage: number;
}

const AICapabilities: React.FC<PageSectionProps> = ({}) => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      className="py-30 relative overflow-hidden bg-gradient-to-b from-purple-950/20 via-black to-purple-950/20"
    >
      {/* Gradient pattern at the top */}
      <div className="absolute top-0 left-0 right-0 h-10 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(rgba(239, 68, 68, 0.3) 1px, transparent 1px)`,
            backgroundSize: '30px 30px',
            opacity: 0.3,
          }}
        ></div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%239C92AC' fillOpacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px',
          }}
        ></div>
      </div>

      {/* Neural network animation */}
      <div className="absolute inset-0 opacity-20">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="neural-net"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="50" cy="50" r="1" fill="#a855f7" />
              <circle cx="0" cy="0" r="1" fill="#a855f7" />
              <circle cx="0" cy="100" r="1" fill="#a855f7" />
              <circle cx="100" cy="0" r="1" fill="#a855f7" />
              <circle cx="100" cy="100" r="1" fill="#a855f7" />
              <line
                x1="50"
                y1="50"
                x2="0"
                y2="0"
                stroke="#a855f7"
                strokeWidth="0.2"
              />
              <line
                x1="50"
                y1="50"
                x2="100"
                y2="0"
                stroke="#a855f7"
                strokeWidth="0.2"
              />
              <line
                x1="50"
                y1="50"
                x2="0"
                y2="100"
                stroke="#a855f7"
                strokeWidth="0.2"
              />
              <line
                x1="50"
                y1="50"
                x2="100"
                y2="100"
                stroke="#a855f7"
                strokeWidth="0.2"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#neural-net)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-purple-500/10 rounded-full text-purple-400 mb-6">
            <Brain size={18} className="mr-2" />
            Advanced AI Technology
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-400">
            Next-Generation AI Capabilities
          </h2>
          <p className="text-lg text-white/70">
            Our cutting-edge artificial intelligence systems deliver
            unprecedented accuracy and efficiency in security monitoring, threat
            detection, and operational optimization.
          </p>
        </motion.div>

        {/* AI Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <CapabilityCard
            icon={<Cpu className="w-10 h-10 text-purple-400" />}
            title="Advanced Neural Networks"
            description="Our proprietary deep learning models are trained on millions of data points to recognize patterns and anomalies with exceptional accuracy."
            delay={0}
            isInView={isInView}
          />

          <CapabilityCard
            icon={<Network className="w-10 h-10 text-purple-400" />}
            title="Real-Time Processing"
            description="Process and analyze video feeds in real-time with minimal latency, enabling immediate response to potential threats."
            delay={0.2}
            isInView={isInView}
          />

          <CapabilityCard
            icon={<Lock className="w-10 h-10 text-purple-400" />}
            title="Edge Computing Security"
            description="Process sensitive data locally with edge computing capabilities, ensuring privacy and reducing bandwidth requirements."
            delay={0.4}
            isInView={isInView}
          />

          <CapabilityCard
            icon={<Zap className="w-10 h-10 text-purple-400" />}
            title="Adaptive Learning"
            description="Our AI continuously improves through adaptive learning, becoming more accurate and efficient with each deployment."
            delay={0.6}
            isInView={isInView}
          />

          <CapabilityCard
            icon={<BarChart3 className="w-10 h-10 text-purple-400" />}
            title="Predictive Analytics"
            description="Forecast potential security issues and operational bottlenecks before they occur with advanced predictive modeling."
            delay={0.8}
            isInView={isInView}
          />

          <CapabilityCard
            icon={<Brain className="w-10 h-10 text-purple-400" />}
            title="Cognitive Analysis"
            description="Understand complex human behaviors and identify suspicious patterns that traditional systems would miss."
            delay={1}
            isInView={isInView}
          />
        </div>

        {/* AI Technology Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-br from-purple-950/30 to-black/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-purple-900/30"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-10">
              <h3 className="text-2xl font-bold mb-4">AI Technology Stack</h3>
              <p className="text-white/70 mb-6">
                Our proprietary AI technology stack combines multiple advanced
                algorithms and processing techniques to deliver unmatched
                performance in security and operational applications.
              </p>

              <div className="space-y-6">
                <TechStackItem
                  name="Computer Vision"
                  description="Advanced object detection and tracking with 99.7% accuracy"
                  percentage={98}
                />

                <TechStackItem
                  name="Behavioral Analysis"
                  description="Pattern recognition for identifying suspicious activities"
                  percentage={92}
                />

                <TechStackItem
                  name="Predictive Modeling"
                  description="Forecasting potential security threats before they materialize"
                  percentage={88}
                />

                <TechStackItem
                  name="Natural Language Processing"
                  description="Audio analysis and transcription for comprehensive monitoring"
                  percentage={85}
                />
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=600')] bg-cover"></div>

              {/* AI visualization overlay */}
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <div className="relative w-full h-full max-w-md mx-auto">
                  {/* Neural network visualization */}
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 500 500"
                    className="opacity-70"
                  >
                    {/* Input layer */}
                    {[0, 1, 2, 3, 4, 5].map((i) => (
                      <g key={`input-${i}`}>
                        <circle
                          cx="100"
                          cy={100 + i * 60}
                          r="10"
                          fill="#a855f7"
                          className="animate-pulse"
                          style={{ animationDelay: `${i * 0.2}s` }}
                        />

                        {/* Connections to hidden layer 1 */}
                        {[0, 1, 2, 3].map((j) => (
                          <line
                            key={`input-h1-${i}-${j}`}
                            x1="100"
                            y1={100 + i * 60}
                            x2="200"
                            y2={130 + j * 80}
                            stroke="#a855f7"
                            strokeWidth="1"
                            strokeOpacity="0.3"
                          />
                        ))}
                      </g>
                    ))}

                    {/* Hidden layer 1 */}
                    {[0, 1, 2, 3].map((i) => (
                      <g key={`h1-${i}`}>
                        <circle
                          cx="200"
                          cy={130 + i * 80}
                          r="10"
                          fill="#a855f7"
                          className="animate-pulse"
                          style={{ animationDelay: `${i * 0.2 + 0.3}s` }}
                        />

                        {/* Connections to hidden layer 2 */}
                        {[0, 1, 2].map((j) => (
                          <line
                            key={`h1-h2-${i}-${j}`}
                            x1="200"
                            y1={130 + i * 80}
                            x2="300"
                            y2={150 + j * 100}
                            stroke="#a855f7"
                            strokeWidth="1"
                            strokeOpacity="0.3"
                          />
                        ))}
                      </g>
                    ))}

                    {/* Hidden layer 2 */}
                    {[0, 1, 2].map((i) => (
                      <g key={`h2-${i}`}>
                        <circle
                          cx="300"
                          cy={150 + i * 100}
                          r="10"
                          fill="#a855f7"
                          className="animate-pulse"
                          style={{ animationDelay: `${i * 0.2 + 0.6}s` }}
                        />

                        {/* Connections to output layer */}
                        {[0, 1].map((j) => (
                          <line
                            key={`h2-out-${i}-${j}`}
                            x1="300"
                            y1={150 + i * 100}
                            x2="400"
                            y2={200 + j * 100}
                            stroke="#a855f7"
                            strokeWidth="1"
                            strokeOpacity="0.3"
                          />
                        ))}
                      </g>
                    ))}

                    {/* Output layer */}
                    {[0, 1].map((i) => (
                      <circle
                        key={`output-${i}`}
                        cx="400"
                        cy={200 + i * 100}
                        r="10"
                        fill="#a855f7"
                        className="animate-pulse"
                        style={{ animationDelay: `${i * 0.2 + 0.9}s` }}
                      />
                    ))}

                    {/* Data flow animation */}
                    <circle
                      className="animate-ping"
                      cx="100"
                      cy="100"
                      r="5"
                      fill="#f0abfc"
                      style={{ animationDuration: '3s' }}
                    />
                  </svg>

                  {/* Labels */}
                  <div className="absolute top-10 left-20 text-xs text-purple-300">
                    Input Layer
                  </div>
                  <div className="absolute top-10 left-[45%] text-xs text-purple-300">
                    Hidden Layers
                  </div>
                  <div className="absolute top-10 right-20 text-xs text-purple-300">
                    Output Layer
                  </div>

                  {/* Processing indicators */}
                  <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-black/80 px-4 py-2 rounded-lg text-purple-400 text-sm flex items-center">
                    <Cpu size={16} className="mr-2" />
                    <span>Processing: 24.3M parameters</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Gradient pattern at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(rgba(168, 85, 247, 0.3) 1px, transparent 1px)`,
            backgroundSize: '30px 30px',
            opacity: 0.3,
          }}
        ></div>
      </div>
    </section>
  );
};

const CapabilityCard: React.FC<CapabilityCardProps> = ({
  icon,
  title,
  description,
  delay,
  isInView,
}) => (
  <motion.div
    className="bg-gradient-to-br from-purple-950/30 to-black/50 backdrop-blur-sm p-6 rounded-2xl border border-purple-900/30 hover:border-purple-700/30 transition-all group"
    initial={{ opacity: 0, y: 30 }}
    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
    transition={{ duration: 0.6, delay }}
  >
    <div className="mb-5 p-3 bg-purple-900/20 inline-block rounded-xl group-hover:bg-purple-900/30 transition-colors">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-white/70">{description}</p>
  </motion.div>
);

const TechStackItem: React.FC<TechStackItemProps> = ({
  name,
  description,
  percentage,
}) => (
  <div>
    <div className="flex justify-between items-center mb-2">
      <h4 className="font-semibold">{name}</h4>
      <span className="text-purple-400">{percentage}%</span>
    </div>
    <p className="text-sm text-white/70 mb-2">{description}</p>
    <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
      <div
        className="h-full bg-gradient-to-r from-purple-600 to-purple-400"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  </div>
);

export default AICapabilities;

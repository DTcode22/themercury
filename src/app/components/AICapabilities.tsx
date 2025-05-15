'use client';

import type React from 'react';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Brain, Cpu, Network, Lock, Zap, BarChart3 } from 'lucide-react';
import { ComponentProps as PageSectionProps } from '@/app/page';
import { THEME_COLORS_MAP } from '@/app/utils/themeColors';

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

const AICapabilities: React.FC<PageSectionProps> = ({
  currentSectionThemeName,
}) => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const themeDetails = THEME_COLORS_MAP[currentSectionThemeName];
  const neuralNetPatternId = `neural-net-${currentSectionThemeName}-aicap`;
  const animatedSvgPatternFill = themeDetails.hex.replace('#', '%23');

  return (
    <section
      ref={ref}
      className={`py-16 md:py-30 relative overflow-hidden bg-gradient-to-b ${themeDetails.sectionBgGradient}`}
    >
      <div className="absolute top-0 left-0 right-0 h-40 md:h-60 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(rgba(${themeDetails.rgb}, 0.3) 1px, transparent 1px)`,
            backgroundSize: '30px 30px',
            opacity: 0.4,
          }}
        ></div>
      </div>

      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='${animatedSvgPatternFill}' fillOpacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px',
          }}
        ></div>
      </div>

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
          className="max-w-3xl mx-auto text-center mb-12 md:mb-16"
        >
          <div
            className={`inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 rounded-full mb-4 md:mb-6 text-sm md:text-base`}
            style={{
              backgroundColor: `${themeDetails.hex}1A`,
              color: themeDetails.hex,
            }}
          >
            <Brain size={18} className="mr-2" />
            Advanced AI Technology
          </div>
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white ${themeDetails.accentColorClass}`}
          >
            Next-Generation AI Capabilities
          </h2>
          <p className="text-base md:text-lg text-white/70">
            Our cutting-edge artificial intelligence systems deliver
            unprecedented accuracy and efficiency in security monitoring, threat
            detection, and operational optimization.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16">
          <CapabilityCard
            icon={<Cpu className="w-8 h-8 md:w-10 md:h-10 text-purple-400" />}
            title="Advanced Neural Networks"
            description="Our proprietary deep learning models are trained on millions of data points to recognize patterns and anomalies with exceptional accuracy."
            delay={0}
            isInView={isInView}
          />
          <CapabilityCard
            icon={
              <Network className="w-8 h-8 md:w-10 md:h-10 text-purple-400" />
            }
            title="Real-Time Processing"
            description="Process and analyze video feeds in real-time with minimal latency, enabling immediate response to potential threats."
            delay={0.2}
            isInView={isInView}
          />
          <CapabilityCard
            icon={<Lock className="w-8 h-8 md:w-10 md:h-10 text-purple-400" />}
            title="Edge Computing Security"
            description="Process sensitive data locally with edge computing capabilities, ensuring privacy and reducing bandwidth requirements."
            delay={0.4}
            isInView={isInView}
          />
          <CapabilityCard
            icon={<Zap className="w-8 h-8 md:w-10 md:h-10 text-purple-400" />}
            title="Adaptive Learning"
            description="Our AI continuously improves through adaptive learning, becoming more accurate and efficient with each deployment."
            delay={0.6}
            isInView={isInView}
          />
          <CapabilityCard
            icon={
              <BarChart3 className="w-8 h-8 md:w-10 md:h-10 text-purple-400" />
            }
            title="Predictive Analytics"
            description="Forecast potential security issues and operational bottlenecks before they occur with advanced predictive modeling."
            delay={0.8}
            isInView={isInView}
          />
          <CapabilityCard
            icon={<Brain className="w-8 h-8 md:w-10 md:h-10 text-purple-400" />}
            title="Cognitive Analysis"
            description="Understand complex human behaviors and identify suspicious patterns that traditional systems would miss."
            delay={1}
            isInView={isInView}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-br from-purple-950/30 to-black/50 backdrop-blur-sm rounded-xl md:rounded-2xl overflow-hidden border border-purple-900/30"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-6 md:p-8 lg:p-10">
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
                AI Technology Stack
              </h3>
              <p className="text-sm md:text-base text-white/70 mb-4 md:mb-6">
                Our proprietary AI technology stack combines multiple advanced
                algorithms and processing techniques to deliver unmatched
                performance in security and operational applications.
              </p>
              <div className="space-y-4 md:space-y-6">
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
            <div className="relative min-h-[300px] md:min-h-[400px] lg:min-h-0">
              {' '}
              <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=400')] md:bg-[url('/placeholder.svg?height=600&width=600')] bg-cover"></div>
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <div className="relative w-full h-full max-w-xs md:max-w-md mx-auto">
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 500 500"
                    className="opacity-70"
                  >
                    {[0, 1, 2, 3, 4, 5].map((i) => (
                      <g key={`input-${i}`}>
                        <circle
                          cx="100"
                          cy={100 + i * 60}
                          r="8"
                          fill="#a855f7"
                          className="animate-pulse"
                          style={{ animationDelay: `${i * 0.2}s` }}
                        />
                        {[0, 1, 2, 3].map((j) => (
                          <line
                            key={`input-h1-${i}-${j}`}
                            x1="100"
                            y1={100 + i * 60}
                            x2="200"
                            y2={130 + j * 80}
                            stroke="#a855f7"
                            strokeWidth="0.8"
                            strokeOpacity="0.3"
                          />
                        ))}
                      </g>
                    ))}
                    {[0, 1, 2, 3].map((i) => (
                      <g key={`h1-${i}`}>
                        <circle
                          cx="200"
                          cy={130 + i * 80}
                          r="8"
                          fill="#a855f7"
                          className="animate-pulse"
                          style={{ animationDelay: `${i * 0.2 + 0.3}s` }}
                        />
                        {[0, 1, 2].map((j) => (
                          <line
                            key={`h1-h2-${i}-${j}`}
                            x1="200"
                            y1={130 + i * 80}
                            x2="300"
                            y2={150 + j * 100}
                            stroke="#a855f7"
                            strokeWidth="0.8"
                            strokeOpacity="0.3"
                          />
                        ))}
                      </g>
                    ))}
                    {[0, 1, 2].map((i) => (
                      <g key={`h2-${i}`}>
                        <circle
                          cx="300"
                          cy={150 + i * 100}
                          r="8"
                          fill="#a855f7"
                          className="animate-pulse"
                          style={{ animationDelay: `${i * 0.2 + 0.6}s` }}
                        />
                        {[0, 1].map((j) => (
                          <line
                            key={`h2-out-${i}-${j}`}
                            x1="300"
                            y1={150 + i * 100}
                            x2="400"
                            y2={200 + j * 100}
                            stroke="#a855f7"
                            strokeWidth="0.8"
                            strokeOpacity="0.3"
                          />
                        ))}
                      </g>
                    ))}
                    {[0, 1].map((i) => (
                      <circle
                        key={`output-${i}`}
                        cx="400"
                        cy={200 + i * 100}
                        r="8"
                        fill="#a855f7"
                        className="animate-pulse"
                        style={{ animationDelay: `${i * 0.2 + 0.9}s` }}
                      />
                    ))}
                    <circle
                      className="animate-ping"
                      cx="100"
                      cy="100"
                      r="4"
                      fill="#f0abfc"
                      style={{ animationDuration: '3s' }}
                    />
                  </svg>
                  <div className="absolute top-6 md:top-10 left-12 md:left-20 text-[10px] md:text-xs text-purple-300">
                    {' '}
                    Input Layer{' '}
                  </div>
                  <div className="absolute top-6 md:top-10 left-1/2 transform -translate-x-1/2 md:left-[45%] text-[10px] md:text-xs text-purple-300">
                    {' '}
                    Hidden Layers{' '}
                  </div>
                  <div className="absolute top-6 md:top-10 right-12 md:right-20 text-[10px] md:text-xs text-purple-300">
                    {' '}
                    Output Layer{' '}
                  </div>

                  <div className="absolute bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 bg-black/80 px-2 py-1 md:px-4 md:py-2 rounded-md md:rounded-lg text-purple-400 text-[10px] md:text-sm flex items-center whitespace-nowrap">
                    <Cpu size={12} className="mr-1 md:size-16 md:mr-2" />
                    <span>Processing: 24.3M params</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 md:h-60 overflow-hidden pointer-events-none">
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

const CapabilityCard: React.FC<CapabilityCardProps> = ({
  icon,
  title,
  description,
  delay,
  isInView,
}) => (
  <motion.div
    className="bg-gradient-to-br from-purple-950/30 to-black/50 backdrop-blur-sm p-4 md:p-6 rounded-xl md:rounded-2xl border border-purple-900/30 hover:border-purple-700/30 transition-all group"
    initial={{ opacity: 0, y: 30 }}
    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
    transition={{ duration: 0.6, delay }}
  >
    <div className="mb-3 md:mb-5 p-2.5 md:p-3 bg-purple-900/20 inline-block rounded-lg md:rounded-xl group-hover:bg-purple-900/30 transition-colors">
      {icon}
    </div>
    <h3 className="text-base md:text-xl font-bold mb-1.5 md:mb-3">{title}</h3>
    <p className="text-sm md:text-base text-white/70">{description}</p>
  </motion.div>
);

const TechStackItem: React.FC<TechStackItemProps> = ({
  name,
  description,
  percentage,
}) => (
  <div>
    <div className="flex justify-between items-center mb-1 md:mb-2">
      <h4 className="font-semibold text-sm md:text-base">{name}</h4>
      <span className="text-purple-400 text-xs md:text-sm">{percentage}%</span>
    </div>
    <p className="text-xs md:text-sm text-white/70 mb-1.5 md:mb-2">
      {description}
    </p>
    <div className="h-1 md:h-1.5 bg-white/10 rounded-full overflow-hidden">
      <div
        className="h-full bg-gradient-to-r from-purple-600 to-purple-400"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  </div>
);

export default AICapabilities;

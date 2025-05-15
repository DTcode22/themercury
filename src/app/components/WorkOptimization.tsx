'use client';

import type React from 'react';
import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  BarChart3,
  TrendingUp,
  Users,
  Clock,
  Zap,
  ChevronRight,
  Briefcase,
  Target,
} from 'lucide-react';
import { ComponentProps as PageSectionProps } from '@/app/page';
import { THEME_COLORS_MAP } from '@/app/utils/themeColors';

interface TabButtonProps {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
}

interface MetricCardProps {
  label: string;
  value: string;
  unit: string;
  trend: string;
  trendUp: boolean;
}

interface EmployeeCardProps {
  name: string;
  role: string;
  score: number;
  improvement: string;
}

interface ProcessItemProps {
  name: string;
  efficiency: number;
  bottlenecks: number;
  status: string;
}

interface ActionItemProps {
  title: string;
  description: string;
  impact: string;
}

interface OptimizationItemProps {
  title: string;
  description: string;
  timeImpact: string;
  priority: string;
}

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
  isInView: boolean;
}

interface TabContentProps {
  isInView: boolean;
}

const WorkOptimization: React.FC<PageSectionProps> = ({
  currentSectionThemeName,
}) => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [activeTab, setActiveTab] = useState<string>('productivity');

  const themeDetails = THEME_COLORS_MAP[currentSectionThemeName];
  const neuralNetPatternId = `neural-net-${currentSectionThemeName}-workopt`;
  const animatedSvgPatternFill = themeDetails.hex.replace('#', '%23');

  return (
    <section
      ref={ref}
      className={`py-16 md:py-20 relative overflow-hidden bg-gradient-to-b ${themeDetails.sectionBgGradient}`}
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
            <TrendingUp size={18} className="mr-2" />
            Workforce Optimization
          </div>
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent py-2 bg-gradient-to-r from-white ${themeDetails.accentColorClass}`}
          >
            Maximize Efficiency & Productivity
          </h2>
          <p className="text-base md:text-lg text-white/70">
            Transform your operations with AI-powered workforce analytics that
            identify inefficiencies, optimize workflows, and enhance employee
            productivity across your organization.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-10">
          <TabButton
            active={activeTab === 'productivity'}
            onClick={() => setActiveTab('productivity')}
            icon={<Zap size={16} />}
            label="Productivity Analytics"
          />
          <TabButton
            active={activeTab === 'workflow'}
            onClick={() => setActiveTab('workflow')}
            icon={<Users size={16} />}
            label="Workflow Optimization"
          />
          <TabButton
            active={activeTab === 'time'}
            onClick={() => setActiveTab('time')}
            icon={<Clock size={16} />}
            label="Time Management"
          />
        </div>

        <div
          className={`bg-black/40 backdrop-blur-md border rounded-2xl overflow-hidden mb-12 md:mb-16`}
          style={{ borderColor: `${themeDetails.hex}4D` }}
        >
          {activeTab === 'productivity' && (
            <ProductivityTab isInView={isInView} />
          )}
          {activeTab === 'workflow' && <WorkflowTab isInView={isInView} />}
          {activeTab === 'time' && <TimeManagementTab isInView={isInView} />}
        </div>

        <div className="mx-auto">
          <motion.h3
            className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Key Benefits
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <BenefitCard
              icon={
                <TrendingUp className="w-8 h-8 md:w-10 md:h-10 text-blue-400" />
              }
              title="Increase Productivity by 35%"
              description="Identify and eliminate bottlenecks in your workflows to significantly boost overall productivity."
              delay={0.3}
              isInView={isInView}
            />
            <BenefitCard
              icon={<Clock className="w-8 h-8 md:w-10 md:h-10 text-blue-400" />}
              title="Reduce Wasted Time by 42%"
              description="Optimize employee schedules and task allocation based on AI-driven insights."
              delay={0.4}
              isInView={isInView}
            />
            <BenefitCard
              icon={<Users className="w-8 h-8 md:w-10 md:h-10 text-blue-400" />}
              title="Improve Employee Satisfaction"
              description="Create more balanced workloads and identify opportunities for skill development."
              delay={0.5}
              isInView={isInView}
            />
            <BenefitCard
              icon={
                <BarChart3 className="w-8 h-8 md:w-10 md:h-10 text-blue-400" />
              }
              title="Data-Driven Decision Making"
              description="Make strategic decisions based on comprehensive workforce analytics and trends."
              delay={0.6}
              isInView={isInView}
            />
            <BenefitCard
              icon={
                <Briefcase className="w-8 h-8 md:w-10 md:h-10 text-blue-400" />
              }
              title="Streamline Core Operations"
              description="Automate repetitive tasks and refine processes for smoother daily operations."
              delay={0.7}
              isInView={isInView}
            />
            <BenefitCard
              icon={
                <Target className="w-8 h-8 md:w-10 md:h-10 text-blue-400" />
              }
              title="Enhanced Goal Alignment"
              description="Ensure workforce activities directly contribute to key organizational objectives and KPIs."
              delay={0.8}
              isInView={isInView}
            />
          </div>
        </div>
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

const TabButton: React.FC<TabButtonProps> = ({
  active,
  onClick,
  icon,
  label,
}) => (
  <button
    onClick={onClick}
    className={`px-3 py-2 md:px-5 md:py-3 rounded-full flex items-center gap-1.5 md:gap-2 transition-all text-xs md:text-sm ${
      active
        ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
        : 'bg-black/30 text-white/70 border border-white/10 hover:bg-black/50'
    }`}
  >
    {icon}
    <span>{label}</span>
  </button>
);

const ProductivityTab: React.FC<TabContentProps> = () => {
  const productivityData = [65, 72, 68, 80, 75, 85, 90];
  const industryAvg = [60, 62, 61, 63, 62, 64, 65];
  return (
    <div className="p-4 md:p-6 lg:p-8">
      <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
        <div className="lg:w-2/3">
          <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">
            Employee Productivity Trends
          </h3>
          <div className="bg-black/30 rounded-xl p-4 md:p-6 mb-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
              <h4 className="text-base md:text-lg font-semibold mb-2 sm:mb-0">
                Weekly Productivity Score
              </h4>
              <div className="flex items-center text-blue-400 text-xs md:text-sm">
                <span className="inline-block w-2.5 h-2.5 md:w-3 md:h-3 bg-blue-400 rounded-full mr-1.5 md:mr-2"></span>
                Your Team
                <span className="inline-block w-2.5 h-2.5 md:w-3 md:h-3 bg-white/30 rounded-full ml-3 md:ml-4 mr-1.5 md:mr-2"></span>
                Industry Average
              </div>
            </div>
            <div className="h-56 sm:h-64 w-full">
              {' '}
              <div className="relative h-full w-full">
                <div className="absolute inset-0 flex flex-col justify-between">
                  {[0, 1, 2, 3, 4].map((_, i) => (
                    <div
                      key={i}
                      className="border-b border-white/10 h-1/5"
                    ></div>
                  ))}
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-full flex items-end">
                  <svg
                    className="w-full h-full"
                    viewBox="0 0 700 300"
                    preserveAspectRatio="none"
                  >
                    <polyline
                      points={industryAvg
                        .map(
                          (value, index) =>
                            `${index * 100 + 50},${300 - value * 3}`
                        )
                        .join(' ')}
                      fill="none"
                      stroke="rgba(255, 255, 255, 0.3)"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                    />
                  </svg>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-full flex items-end">
                  <svg
                    className="w-full h-full"
                    viewBox="0 0 700 300"
                    preserveAspectRatio="none"
                  >
                    <linearGradient
                      id="blueGradientWorkOpt"
                      x1="0%"
                      y1="0%"
                      x2="0%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="rgba(59, 130, 246, 1)" />
                      <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
                    </linearGradient>
                    <polyline
                      points={productivityData
                        .map(
                          (value, index) =>
                            `${index * 100 + 50},${300 - value * 3}`
                        )
                        .join(' ')}
                      fill="none"
                      stroke="#3b82f6"
                      strokeWidth="3"
                    />
                    <polyline
                      points={`50,300 ${productivityData
                        .map(
                          (value, index) =>
                            `${index * 100 + 50},${300 - value * 3}`
                        )
                        .join(' ')} 650,300`}
                      fill="url(#blueGradientWorkOpt)"
                      opacity="0.2"
                    />
                  </svg>
                </div>
                <div className="absolute bottom-0 left-0 right-0 flex justify-around text-xs text-white/60 px-2 sm:px-12">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(
                    (day, i) => (
                      <div key={i} className="text-center">
                        {day}
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <MetricCard
              label="Current Week"
              value="76.4"
              unit="%"
              trend="+12.3%"
              trendUp={true}
            />
            <MetricCard
              label="vs. Last Month"
              value="15.8"
              unit="%"
              trend="Improvement"
              trendUp={true}
            />
            <MetricCard
              label="vs. Industry"
              value="18.2"
              unit="%"
              trend="Above Average"
              trendUp={true}
            />
          </div>
        </div>
        <div className="lg:w-1/3 mt-6 lg:mt-0">
          <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">
            Top Performers
          </h3>
          <div className="bg-black/30 rounded-xl p-4 md:p-6 space-y-3 md:space-y-4">
            <EmployeeCard
              name="Sarah Johnson"
              role="Senior Analyst"
              score={94}
              improvement="+5%"
            />
            <EmployeeCard
              name="Michael Chen"
              role="Operations Manager"
              score={92}
              improvement="+8%"
            />
            <EmployeeCard
              name="Aisha Patel"
              role="Security Specialist"
              score={89}
              improvement="+12%"
            />
            <EmployeeCard
              name="David Wilson"
              role="Technical Lead"
              score={87}
              improvement="+4%"
            />
            <div className="pt-2">
              <button className="flex items-center text-blue-400 hover:text-blue-300 transition-colors text-xs md:text-sm">
                View all employees <ChevronRight size={14} className="ml-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const WorkflowTab: React.FC<TabContentProps> = () => {
  return (
    <div className="p-4 md:p-6 lg:p-8">
      <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">
        Workflow Optimization
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        <div>
          <div className="bg-black/30 rounded-xl p-4 md:p-6 mb-6">
            <h4 className="text-base md:text-lg font-semibold mb-4">
              Process Efficiency
            </h4>
            <div className="space-y-4 md:space-y-6">
              <ProcessItem
                name="Security Monitoring"
                efficiency={92}
                bottlenecks={1}
                status="Optimized"
              />
              <ProcessItem
                name="Incident Response"
                efficiency={78}
                bottlenecks={3}
                status="Needs Improvement"
              />
              <ProcessItem
                name="Threat Assessment"
                efficiency={85}
                bottlenecks={2}
                status="Good"
              />
              <ProcessItem
                name="Reporting & Documentation"
                efficiency={65}
                bottlenecks={5}
                status="Critical"
              />
            </div>
          </div>
          <div className="bg-black/30 rounded-xl p-4 md:p-6">
            <h4 className="text-base md:text-lg font-semibold mb-4">
              Recommended Actions
            </h4>
            <div className="space-y-3 md:space-y-4">
              <ActionItem
                title="Streamline Reporting Process"
                description="Implement automated report generation to reduce manual documentation time by 45%."
                impact="High"
              />
              <ActionItem
                title="Optimize Incident Response"
                description="Reorganize team structure to reduce response time by 35% during critical events."
                impact="Medium"
              />
              <ActionItem
                title="Enhance Communication Channels"
                description="Implement real-time notification system to improve cross-team coordination."
                impact="High"
              />
            </div>
          </div>
        </div>
        <div className="mt-6 lg:mt-0">
          <div className="bg-black/30 rounded-xl p-4 md:p-6 mb-6">
            <h4 className="text-base md:text-lg font-semibold mb-4">
              Workflow Visualization
            </h4>
            <div className="relative aspect-square rounded-lg overflow-hidden border border-blue-900/30">
              <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=400')] bg-cover opacity-70"></div>
              <div className="absolute inset-0 p-2 sm:p-4">
                {' '}
                <svg width="100%" height="100%" viewBox="0 0 500 500">
                  <circle
                    cx="250"
                    cy="100"
                    r="25"
                    fill="rgba(59, 130, 246, 0.3)"
                    stroke="#3b82f6"
                    strokeWidth="1.5"
                  />
                  <circle
                    cx="150"
                    cy="200"
                    r="25"
                    fill="rgba(59, 130, 246, 0.3)"
                    stroke="#3b82f6"
                    strokeWidth="1.5"
                  />
                  <circle
                    cx="350"
                    cy="200"
                    r="25"
                    fill="rgba(59, 130, 246, 0.3)"
                    stroke="#3b82f6"
                    strokeWidth="1.5"
                  />
                  <circle
                    cx="100"
                    cy="300"
                    r="25"
                    fill="rgba(59, 130, 246, 0.3)"
                    stroke="#3b82f6"
                    strokeWidth="1.5"
                  />
                  <circle
                    cx="200"
                    cy="300"
                    r="25"
                    fill="rgba(59, 130, 246, 0.3)"
                    stroke="#3b82f6"
                    strokeWidth="1.5"
                  />
                  <circle
                    cx="300"
                    cy="300"
                    r="25"
                    fill="rgba(59, 130, 246, 0.3)"
                    stroke="#3b82f6"
                    strokeWidth="1.5"
                  />
                  <circle
                    cx="400"
                    cy="300"
                    r="25"
                    fill="rgba(59, 130, 246, 0.3)"
                    stroke="#3b82f6"
                    strokeWidth="1.5"
                  />
                  <circle
                    cx="250"
                    cy="400"
                    r="25"
                    fill="rgba(59, 130, 246, 0.3)"
                    stroke="#3b82f6"
                    strokeWidth="1.5"
                  />
                  {/* Lines scaled down */}
                  <line
                    x1="250"
                    y1="125"
                    x2="150"
                    y2="175"
                    stroke="#3b82f6"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="250"
                    y1="125"
                    x2="350"
                    y2="175"
                    stroke="#3b82f6"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="150"
                    y1="225"
                    x2="100"
                    y2="275"
                    stroke="#3b82f6"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="150"
                    y1="225"
                    x2="200"
                    y2="275"
                    stroke="#3b82f6"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="350"
                    y1="225"
                    x2="300"
                    y2="275"
                    stroke="#3b82f6"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="350"
                    y1="225"
                    x2="400"
                    y2="275"
                    stroke="#3b82f6"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="100"
                    y1="325"
                    x2="250"
                    y2="375"
                    stroke="#3b82f6"
                    strokeWidth="1.5"
                    strokeDasharray="4,4"
                  />
                  <line
                    x1="200"
                    y1="325"
                    x2="250"
                    y2="375"
                    stroke="#3b82f6"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="300"
                    y1="325"
                    x2="250"
                    y2="375"
                    stroke="#3b82f6"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="400"
                    y1="325"
                    x2="250"
                    y2="375"
                    stroke="#3b82f6"
                    strokeWidth="1.5"
                    strokeDasharray="4,4"
                  />

                  <circle
                    cx="100"
                    cy="300"
                    r="30"
                    fill="none"
                    stroke="#ef4444"
                    strokeWidth="1.5"
                    strokeDasharray="4,4"
                  />
                  <circle
                    cx="400"
                    cy="300"
                    r="30"
                    fill="none"
                    stroke="#ef4444"
                    strokeWidth="1.5"
                    strokeDasharray="4,4"
                  />
                </svg>
              </div>
              <div className="absolute bottom-2 right-2 md:bottom-4 md:right-4 bg-black/80 p-1.5 md:p-3 rounded-md md:rounded-lg">
                <div className="flex items-center space-x-2 md:space-x-4 text-xs">
                  <div className="flex items-center">
                    <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-blue-500/70 mr-1 md:mr-2"></div>
                    <span className="hidden sm:inline">Process Node</span>
                    <span className="sm:hidden">Node</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 md:w-3 md:h-3 rounded-full border border-red-500 mr-1 md:mr-2"></div>
                    <span className="hidden sm:inline">Bottleneck</span>
                    <span className="sm:hidden">Issue</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-black/30 rounded-xl p-4 md:p-6">
            <h4 className="text-base md:text-lg font-semibold mb-4">
              Optimization Impact
            </h4>
            <div className="space-y-3 md:space-y-4">
              {[
                { label: 'Productivity', value: 32 },
                { label: 'Cost Reduction', value: 28 },
                { label: 'Response Time', value: 45 },
              ].map((item) => (
                <div key={item.label}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs md:text-sm">{item.label}</span>
                    <span className="text-xs md:text-sm text-blue-400">
                      +{item.value}%
                    </span>
                  </div>
                  <div className="h-1.5 md:h-2 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-500"
                      style={{ width: `${item.value}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TimeManagementTab: React.FC<TabContentProps> = () => {
  return (
    <div className="p-4 md:p-6 lg:p-8">
      <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">
        Time Management Analysis
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
        <div className="lg:col-span-2">
          <div className="bg-black/30 rounded-xl p-4 md:p-6 mb-6">
            <h4 className="text-base md:text-lg font-semibold mb-4">
              Time Allocation by Activity
            </h4>

            <div className="flex flex-col md:relative md:h-[300px] items-center">
              {' '}
              <div className="w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px] md:absolute md:left-0 md:top-1/2 md:transform md:-translate-y-1/2">
                <svg width="100%" height="100%" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="transparent"
                    stroke="#3b82f6"
                    strokeWidth="10"
                    strokeDasharray="70.7 282.7"
                    strokeDashoffset="0"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="transparent"
                    stroke="#10b981"
                    strokeWidth="10"
                    strokeDasharray="56.5 282.7"
                    strokeDashoffset="-70.7"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="transparent"
                    stroke="#f59e0b"
                    strokeWidth="10"
                    strokeDasharray="42.4 282.7"
                    strokeDashoffset="-127.2"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="transparent"
                    stroke="#ef4444"
                    strokeWidth="10"
                    strokeDasharray="28.3 282.7"
                    strokeDashoffset="-169.6"
                  />
                  <circle cx="50" cy="50" r="35" fill="black" />
                  <text
                    x="50"
                    y="50"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill="white"
                    fontSize="8"
                    className="sm:text-[9px] md:text-[10px]"
                  >
                    {' '}
                    Time Usage{' '}
                  </text>
                </svg>
              </div>
              <div className="flex flex-wrap justify-center md:justify-start gap-x-3 sm:gap-x-4 gap-y-1.5 sm:gap-y-2 mt-4 md:absolute md:right-0 md:top-1/2 md:transform md:-translate-y-1/2 md:space-y-2 lg:space-y-3 xl:space-y-4 md:flex-col md:gap-0 md:mt-0">
                {[
                  {
                    color: 'bg-blue-500',
                    label: 'Core Tasks (35%)',
                    short: 'Core (35%)',
                  },
                  {
                    color: 'bg-emerald-500',
                    label: 'Monitoring (28%)',
                    short: 'Monitor (28%)',
                  },
                  {
                    color: 'bg-amber-500',
                    label: 'Reporting (21%)',
                    short: 'Report (21%)',
                  },
                  {
                    color: 'bg-red-500',
                    label: 'Admin Tasks (16%)',
                    short: 'Admin (16%)',
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center text-xs md:text-sm"
                  >
                    <div
                      className={`w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full ${item.color} mr-1 sm:mr-1.5 md:mr-2`}
                    ></div>
                    <span className="hidden sm:inline">{item.label}</span>
                    <span className="sm:hidden">{item.short}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-black/30 rounded-xl p-4 md:p-6">
            <h4 className="text-base md:text-lg font-semibold mb-4">
              Time Optimization Opportunities
            </h4>
            <div className="space-y-3 md:space-y-4">
              <OptimizationItem
                title="Automate Routine Docs"
                description="Implement AI-assisted report generation to reduce documentation time by 65%."
                timeImpact="12.5h/wk"
                priority="High"
              />
              <OptimizationItem
                title="Streamline Handovers"
                description="Standardize shift handover protocols to reduce transition time and information loss."
                timeImpact="4.2h/wk"
                priority="Medium"
              />
              <OptimizationItem
                title="Optimize Meetings"
                description="Implement focused 15-min daily briefings instead of hour-long meetings."
                timeImpact="6.8h/wk"
                priority="High"
              />
            </div>
          </div>
        </div>
        <div className="mt-6 lg:mt-0">
          <div className="bg-black/30 rounded-xl p-4 md:p-6 mb-6">
            <h4 className="text-base md:text-lg font-semibold mb-4">
              Time Efficiency Score
            </h4>
            <div className="flex flex-col items-center">
              <div className="relative w-36 h-36 md:w-48 md:h-48">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="transparent"
                    stroke="#1e293b"
                    strokeWidth="8"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="transparent"
                    stroke="#3b82f6"
                    strokeWidth="8"
                    strokeDasharray="282.7"
                    strokeDashoffset="84.8"
                    transform="rotate(-90 50 50)"
                  />
                  <text
                    x="50"
                    y="48"
                    textAnchor="middle"
                    fill="white"
                    fontSize="16"
                    fontWeight="bold"
                    className="md:text-[20px]"
                  >
                    {' '}
                    70%{' '}
                  </text>
                  <text
                    x="50"
                    y="62"
                    textAnchor="middle"
                    fill="#3b82f6"
                    fontSize="8"
                    className="md:text-[10px]"
                  >
                    {' '}
                    Efficiency{' '}
                  </text>
                </svg>
              </div>
              <div className="mt-4 md:mt-6 text-center">
                <p className="text-white/70 mb-1 md:mb-2 text-sm md:text-base">
                  Current efficiency rating is{' '}
                  <span className="text-blue-400 font-semibold">Good</span>
                </p>
                <p className="text-white/70 text-xs md:text-sm">
                  Potential to reach{' '}
                  <span className="text-blue-400 font-semibold">92%</span> with
                  optimizations
                </p>
              </div>
            </div>
          </div>
          <div className="bg-black/30 rounded-xl p-4 md:p-6">
            <h4 className="text-base md:text-lg font-semibold mb-4">
              Weekly Time Savings
            </h4>
            <div className="space-y-3 md:space-y-4">
              {[
                { label: 'Current', value: 0, width: 0 },
                { label: 'Phase 1', value: 12.5, width: 30 },
                { label: 'Phase 2', value: 23.5, width: 60 },
                { label: 'Full Opt.', value: 38.2, width: 100 },
              ].map((item) => (
                <div key={item.label}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs md:text-sm">{item.label}</span>
                    <span
                      className={`text-xs md:text-sm ${
                        item.value > 0 ? 'text-blue-400' : 'text-white/70'
                      }`}
                    >
                      {item.value} hrs
                    </span>
                  </div>
                  <div className="h-1.5 md:h-2 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${
                        item.value > 0 ? 'bg-blue-500' : 'bg-transparent'
                      }`}
                      style={{ width: `${item.width}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MetricCard: React.FC<MetricCardProps> = ({
  label,
  value,
  unit,
  trend,
  trendUp,
}) => (
  <div className="bg-black/30 rounded-xl p-3 md:p-4 border border-blue-900/30 hover:border-blue-700/50 transition-all">
    <p className="text-white/60 text-xs md:text-sm mb-1 md:mb-2">{label}</p>
    <div className="flex items-end justify-between">
      <h3 className="text-xl md:text-2xl font-bold">
        {value}
        <span className="text-sm md:text-lg">{unit}</span>
      </h3>
      <span
        className={`text-xs ${
          trendUp ? 'text-blue-400' : 'text-amber-400'
        } flex items-center`}
      >
        {trend} {trendUp && <span className="ml-1">▲</span>}{' '}
        {!trendUp && <span className="ml-1">▼</span>}
      </span>
    </div>
  </div>
);

const EmployeeCard: React.FC<EmployeeCardProps> = ({
  name,
  role,
  score,
  improvement,
}) => (
  <div className="flex items-center justify-between p-2.5 md:p-3 border border-blue-900/20 rounded-lg hover:bg-blue-900/10 transition-all">
    <div>
      <h4 className="font-medium text-sm md:text-base">{name}</h4>
      <p className="text-white/60 text-xs md:text-sm">{role}</p>
    </div>
    <div className="text-right">
      <div className="text-lg md:text-xl font-bold">
        {score}
        <span className="text-xs md:text-sm text-white/60">%</span>
      </div>
      <div className="text-xs text-blue-400">{improvement}</div>
    </div>
  </div>
);

const ProcessItem: React.FC<ProcessItemProps> = ({
  name,
  efficiency,
  bottlenecks,
  status,
}) => {
  const getStatusColor = (status: string): string => {
    switch (status) {
      case 'Optimized':
        return 'bg-emerald-500/20 text-emerald-400';
      case 'Good':
        return 'bg-blue-500/20 text-blue-400';
      case 'Needs Improvement':
        return 'bg-amber-500/20 text-amber-400';
      case 'Critical':
        return 'bg-red-500/20 text-red-400';
      default:
        return 'bg-gray-500/20 text-gray-400';
    }
  };
  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-2">
        <h5 className="font-medium text-sm md:text-base mb-1 sm:mb-0">
          {name}
        </h5>
        <span
          className={`px-1.5 py-0.5 md:px-2 md:py-1 rounded text-xs ${getStatusColor(
            status
          )}`}
        >
          {status}
        </span>
      </div>
      <div className="grid grid-cols-2 gap-2 md:gap-4 mb-2">
        <div>
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs text-white/60">Efficiency</span>
            <span className="text-xs">{efficiency}%</span>
          </div>
          <div className="h-1 md:h-1.5 bg-white/10 rounded-full overflow-hidden">
            <div
              className={`h-full ${
                efficiency > 85
                  ? 'bg-emerald-500'
                  : efficiency > 75
                  ? 'bg-blue-500'
                  : efficiency > 65
                  ? 'bg-amber-500'
                  : 'bg-red-500'
              }`}
              style={{ width: `${efficiency}%` }}
            ></div>
          </div>
        </div>
        <div>
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs text-white/60">Bottlenecks</span>
            <span className="text-xs">{bottlenecks}</span>
          </div>
          <div className="h-1 md:h-1.5 bg-white/10 rounded-full overflow-hidden">
            <div
              className={`h-full ${
                bottlenecks < 2
                  ? 'bg-emerald-500'
                  : bottlenecks < 3
                  ? 'bg-blue-500'
                  : bottlenecks < 5
                  ? 'bg-amber-500'
                  : 'bg-red-500'
              }`}
              style={{ width: `${(bottlenecks / 5) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ActionItem: React.FC<ActionItemProps> = ({
  title,
  description,
  impact,
}) => {
  const getImpactColor = (impact: string): string => {
    switch (impact) {
      case 'High':
        return 'bg-emerald-500/20 text-emerald-400';
      case 'Medium':
        return 'bg-blue-500/20 text-blue-400';
      case 'Low':
        return 'bg-amber-500/20 text-amber-400';
      default:
        return 'bg-gray-500/20 text-gray-400';
    }
  };
  return (
    <div className="border border-blue-900/20 rounded-lg p-2.5 md:p-3 hover:bg-blue-900/10 transition-all">
      <div className="flex flex-col sm:flex-row justify-between sm:items-start mb-1.5 md:mb-2">
        <h5 className="font-medium text-sm md:text-base mb-1 sm:mb-0">
          {title}
        </h5>
        <span
          className={`px-1.5 py-0.5 md:px-2 md:py-1 rounded text-xs whitespace-nowrap ${getImpactColor(
            impact
          )}`}
        >
          {impact} Impact
        </span>
      </div>
      <p className="text-xs md:text-sm text-white/70">{description}</p>
    </div>
  );
};

const OptimizationItem: React.FC<OptimizationItemProps> = ({
  title,
  description,
  timeImpact,
  priority,
}) => {
  const getPriorityColor = (priority: string): string => {
    switch (priority) {
      case 'High':
        return 'bg-emerald-500/20 text-emerald-400';
      case 'Medium':
        return 'bg-blue-500/20 text-blue-400';
      case 'Low':
        return 'bg-amber-500/20 text-amber-400';
      default:
        return 'bg-gray-500/20 text-gray-400';
    }
  };
  return (
    <div className="border border-blue-900/20 rounded-lg p-2.5 md:p-3 hover:bg-blue-900/10 transition-all">
      <div className="flex flex-col sm:flex-row justify-between sm:items-start mb-1.5 md:mb-2">
        <h5 className="font-medium text-sm md:text-base mb-1 sm:mb-0">
          {title}
        </h5>
        <span
          className={`px-1.5 py-0.5 md:px-2 md:py-1 rounded text-xs whitespace-nowrap ${getPriorityColor(
            priority
          )}`}
        >
          {priority} Priority
        </span>
      </div>
      <p className="text-xs md:text-sm text-white/70 mb-1.5 md:mb-2">
        {description}
      </p>
      <div className="flex items-center text-blue-400 text-xs md:text-sm">
        <Clock size={12} className="mr-1 md:size-14" />{' '}
        <span>Saves {timeImpact}</span>
      </div>
    </div>
  );
};

const BenefitCard: React.FC<BenefitCardProps> = ({
  icon,
  title,
  description,
  delay,
  isInView,
}) => (
  <motion.div
    className="bg-gradient-to-br from-blue-950/30 to-black/50 backdrop-blur-sm p-4 md:p-6 rounded-xl md:rounded-2xl border border-blue-900/30 hover:border-blue-700/30 transition-all group"
    initial={{ opacity: 0, y: 20 }}
    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
    transition={{ duration: 0.5, delay }}
  >
    <div className="mb-3 md:mb-5 p-2.5 md:p-3 bg-blue-900/20 inline-block rounded-lg md:rounded-xl group-hover:bg-blue-900/30 transition-colors">
      {icon}
    </div>
    <h3 className="text-base md:text-xl font-bold mb-1.5 md:mb-3">{title}</h3>
    <p className="text-sm md:text-base text-white/70">{description}</p>
  </motion.div>
);

export default WorkOptimization;

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
} from 'lucide-react';

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

const WorkOptimization: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeTab, setActiveTab] = useState<string>('productivity');

  return (
    <section
      ref={ref}
      className="py-20 relative overflow-hidden bg-gradient-to-b from-black via-black to-blue-950/20"
    >
      {/* Gradient pattern at the top */}
      <div className="absolute top-0 left-0 right-0 h-32 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(rgba(76, 175, 80, 0.3) 1px, transparent 1px)`,
            backgroundSize: '30px 30px',
            opacity: 0.3,
          }}
        ></div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px)`,
            backgroundSize: '30px 30px',
          }}
        ></div>
      </div>

      {/* Glowing orb effect */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 rounded-full text-blue-400 mb-6">
            <TrendingUp size={18} className="mr-2" />
            Workforce Optimization
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-400">
            Maximize Efficiency & Productivity
          </h2>
          <p className="text-lg text-white/70">
            Transform your operations with AI-powered workforce analytics that
            identify inefficiencies, optimize workflows, and enhance employee
            productivity across your organization.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <TabButton
            active={activeTab === 'productivity'}
            onClick={() => setActiveTab('productivity')}
            icon={<Zap size={18} />}
            label="Productivity Analysis"
          />
          <TabButton
            active={activeTab === 'workflow'}
            onClick={() => setActiveTab('workflow')}
            icon={<Users size={18} />}
            label="Workflow Optimization"
          />
          <TabButton
            active={activeTab === 'time'}
            onClick={() => setActiveTab('time')}
            icon={<Clock size={18} />}
            label="Time Management"
          />
        </div>

        {/* Tab Content */}
        <div className="bg-black/40 backdrop-blur-md border border-blue-900/30 rounded-2xl overflow-hidden mb-16">
          {activeTab === 'productivity' && (
            <ProductivityTab isInView={isInView} />
          )}

          {activeTab === 'workflow' && <WorkflowTab isInView={isInView} />}

          {activeTab === 'time' && <TimeManagementTab isInView={isInView} />}
        </div>

        {/* Benefits */}
        <div className="max-w-3xl mx-auto">
          <motion.h3
            className="text-2xl font-bold mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Key Benefits
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-6">
            <BenefitCard
              icon={<TrendingUp size={20} />}
              title="Increase Productivity by 35%"
              description="Identify and eliminate bottlenecks in your workflows to significantly boost overall productivity."
              delay={0.3}
              isInView={isInView}
            />

            <BenefitCard
              icon={<Clock size={20} />}
              title="Reduce Wasted Time by 42%"
              description="Optimize employee schedules and task allocation based on AI-driven insights."
              delay={0.4}
              isInView={isInView}
            />

            <BenefitCard
              icon={<Users size={20} />}
              title="Improve Employee Satisfaction"
              description="Create more balanced workloads and identify opportunities for skill development."
              delay={0.5}
              isInView={isInView}
            />

            <BenefitCard
              icon={<BarChart3 size={20} />}
              title="Data-Driven Decision Making"
              description="Make strategic decisions based on comprehensive workforce analytics and trends."
              delay={0.6}
              isInView={isInView}
            />
          </div>
        </div>
      </div>

      {/* Gradient pattern at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px)`,
            backgroundSize: '30px 30px',
            opacity: 0.3,
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
    className={`px-5 py-3 rounded-full flex items-center gap-2 transition-all ${
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
  // Mock data for productivity chart
  const productivityData = [65, 72, 68, 80, 75, 85, 90];
  const industryAvg = [60, 62, 61, 63, 62, 64, 65];

  return (
    <div className="p-6 md:p-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3">
          <h3 className="text-2xl font-bold mb-6">
            Employee Productivity Trends
          </h3>

          <div className="bg-black/30 rounded-xl p-6 mb-6">
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-lg font-semibold">
                Weekly Productivity Score
              </h4>
              <div className="flex items-center text-blue-400 text-sm">
                <span className="inline-block w-3 h-3 bg-blue-400 rounded-full mr-2"></span>
                Your Team
                <span className="inline-block w-3 h-3 bg-white/30 rounded-full ml-4 mr-2"></span>
                Industry Average
              </div>
            </div>

            <div className="h-64 w-full">
              <div className="relative h-full w-full">
                {/* Chart grid lines */}
                <div className="absolute inset-0 flex flex-col justify-between">
                  {[0, 1, 2, 3, 4].map((_, i) => (
                    <div
                      key={i}
                      className="border-b border-white/10 h-1/5"
                    ></div>
                  ))}
                </div>

                {/* Industry average line */}
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

                {/* Your team line */}
                <div className="absolute bottom-0 left-0 right-0 h-full flex items-end">
                  <svg
                    className="w-full h-full"
                    viewBox="0 0 700 300"
                    preserveAspectRatio="none"
                  >
                    <linearGradient
                      id="blueGradient"
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
                      fill="url(#blueGradient)"
                      opacity="0.2"
                    />
                  </svg>
                </div>

                {/* X-axis labels */}
                <div className="absolute bottom-0 left-0 right-0 flex justify-between px-12 text-xs text-white/60">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(
                    (day, i) => (
                      <div key={i}>{day}</div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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

        <div className="lg:w-1/3">
          <h3 className="text-2xl font-bold mb-6">Top Performers</h3>

          <div className="bg-black/30 rounded-xl p-6 space-y-4">
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
              <button className="flex items-center text-blue-400 hover:text-blue-300 transition-colors text-sm">
                View all employees
                <ChevronRight size={16} className="ml-1" />
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
    <div className="p-6 md:p-8">
      <h3 className="text-2xl font-bold mb-6">Workflow Optimization</h3>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <div className="bg-black/30 rounded-xl p-6 mb-6">
            <h4 className="text-lg font-semibold mb-4">Process Efficiency</h4>

            <div className="space-y-6">
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

          <div className="bg-black/30 rounded-xl p-6">
            <h4 className="text-lg font-semibold mb-4">Recommended Actions</h4>

            <div className="space-y-4">
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

        <div>
          <div className="bg-black/30 rounded-xl p-6 mb-6">
            <h4 className="text-lg font-semibold mb-4">
              Workflow Visualization
            </h4>

            <div className="relative aspect-square rounded-lg overflow-hidden border border-blue-900/30">
              <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=600')] bg-cover opacity-70"></div>

              {/* Workflow diagram overlay */}
              <div className="absolute inset-0 p-4">
                <svg width="100%" height="100%" viewBox="0 0 500 500">
                  {/* Nodes */}
                  <circle
                    cx="250"
                    cy="100"
                    r="30"
                    fill="rgba(59, 130, 246, 0.3)"
                    stroke="#3b82f6"
                    strokeWidth="2"
                  />
                  <circle
                    cx="150"
                    cy="200"
                    r="30"
                    fill="rgba(59, 130, 246, 0.3)"
                    stroke="#3b82f6"
                    strokeWidth="2"
                  />
                  <circle
                    cx="350"
                    cy="200"
                    r="30"
                    fill="rgba(59, 130, 246, 0.3)"
                    stroke="#3b82f6"
                    strokeWidth="2"
                  />
                  <circle
                    cx="100"
                    cy="300"
                    r="30"
                    fill="rgba(59, 130, 246, 0.3)"
                    stroke="#3b82f6"
                    strokeWidth="2"
                  />
                  <circle
                    cx="200"
                    cy="300"
                    r="30"
                    fill="rgba(59, 130, 246, 0.3)"
                    stroke="#3b82f6"
                    strokeWidth="2"
                  />
                  <circle
                    cx="300"
                    cy="300"
                    r="30"
                    fill="rgba(59, 130, 246, 0.3)"
                    stroke="#3b82f6"
                    strokeWidth="2"
                  />
                  <circle
                    cx="400"
                    cy="300"
                    r="30"
                    fill="rgba(59, 130, 246, 0.3)"
                    stroke="#3b82f6"
                    strokeWidth="2"
                  />
                  <circle
                    cx="250"
                    cy="400"
                    r="30"
                    fill="rgba(59, 130, 246, 0.3)"
                    stroke="#3b82f6"
                    strokeWidth="2"
                  />

                  {/* Connections */}
                  <line
                    x1="250"
                    y1="130"
                    x2="150"
                    y2="170"
                    stroke="#3b82f6"
                    strokeWidth="2"
                  />
                  <line
                    x1="250"
                    y1="130"
                    x2="350"
                    y2="170"
                    stroke="#3b82f6"
                    strokeWidth="2"
                  />
                  <line
                    x1="150"
                    y1="230"
                    x2="100"
                    y2="270"
                    stroke="#3b82f6"
                    strokeWidth="2"
                  />
                  <line
                    x1="150"
                    y1="230"
                    x2="200"
                    y2="270"
                    stroke="#3b82f6"
                    strokeWidth="2"
                  />
                  <line
                    x1="350"
                    y1="230"
                    x2="300"
                    y2="270"
                    stroke="#3b82f6"
                    strokeWidth="2"
                  />
                  <line
                    x1="350"
                    y1="230"
                    x2="400"
                    y2="270"
                    stroke="#3b82f6"
                    strokeWidth="2"
                  />
                  <line
                    x1="100"
                    y1="330"
                    x2="250"
                    y2="370"
                    stroke="#3b82f6"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                  />
                  <line
                    x1="200"
                    y1="330"
                    x2="250"
                    y2="370"
                    stroke="#3b82f6"
                    strokeWidth="2"
                  />
                  <line
                    x1="300"
                    y1="330"
                    x2="250"
                    y2="370"
                    stroke="#3b82f6"
                    strokeWidth="2"
                  />
                  <line
                    x1="400"
                    y1="330"
                    x2="250"
                    y2="370"
                    stroke="#3b82f6"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                  />

                  {/* Bottleneck indicators */}
                  <circle
                    cx="100"
                    cy="300"
                    r="35"
                    fill="none"
                    stroke="#ef4444"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                  />
                  <circle
                    cx="400"
                    cy="300"
                    r="35"
                    fill="none"
                    stroke="#ef4444"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                  />
                </svg>
              </div>

              <div className="absolute bottom-4 right-4 bg-black/80 p-3 rounded-lg">
                <div className="flex items-center space-x-4 text-xs">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-blue-500/70 mr-2"></div>
                    <span>Process Node</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full border border-red-500 mr-2"></div>
                    <span>Bottleneck</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-black/30 rounded-xl p-6">
            <h4 className="text-lg font-semibold mb-4">Optimization Impact</h4>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm">Productivity Increase</span>
                  <span className="text-sm text-blue-400">+32%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-500"
                    style={{ width: '32%' }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm">Cost Reduction</span>
                  <span className="text-sm text-blue-400">+28%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-500"
                    style={{ width: '28%' }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm">Response Time Improvement</span>
                  <span className="text-sm text-blue-400">+45%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-500"
                    style={{ width: '45%' }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TimeManagementTab: React.FC<TabContentProps> = () => {
  return (
    <div className="p-6 md:p-8">
      <h3 className="text-2xl font-bold mb-6">Time Management Analysis</h3>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-black/30 rounded-xl p-6 mb-6">
            <h4 className="text-lg font-semibold mb-4">
              Time Allocation by Activity
            </h4>

            <div className="relative aspect-video">
              {/* Donut chart */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg width="300" height="300" viewBox="0 0 100 100">
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
                    fontSize="10"
                  >
                    Time Usage
                  </text>
                </svg>
              </div>

              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 space-y-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                  <span>Core Security Tasks (35%)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 mr-2"></div>
                  <span>Monitoring & Analysis (28%)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-amber-500 mr-2"></div>
                  <span>Reporting & Documentation (21%)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                  <span>Administrative Tasks (16%)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-black/30 rounded-xl p-6">
            <h4 className="text-lg font-semibold mb-4">
              Time Optimization Opportunities
            </h4>

            <div className="space-y-4">
              <OptimizationItem
                title="Automate Routine Documentation"
                description="Implement AI-assisted report generation to reduce documentation time by 65%."
                timeImpact="12.5 hours/week"
                priority="High"
              />

              <OptimizationItem
                title="Streamline Handover Process"
                description="Standardize shift handover protocols to reduce transition time and information loss."
                timeImpact="4.2 hours/week"
                priority="Medium"
              />

              <OptimizationItem
                title="Optimize Meeting Structure"
                description="Implement focused 15-minute daily briefings instead of hour-long meetings."
                timeImpact="6.8 hours/week"
                priority="High"
              />
            </div>
          </div>
        </div>

        <div>
          <div className="bg-black/30 rounded-xl p-6 mb-6">
            <h4 className="text-lg font-semibold mb-4">
              Time Efficiency Score
            </h4>

            <div className="flex flex-col items-center">
              <div className="relative w-48 h-48">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="transparent"
                    stroke="#1e293b"
                    strokeWidth="10"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="transparent"
                    stroke="#3b82f6"
                    strokeWidth="10"
                    strokeDasharray="282.7"
                    strokeDashoffset="84.8"
                    transform="rotate(-90 50 50)"
                  />
                  <text
                    x="50"
                    y="45"
                    textAnchor="middle"
                    fill="white"
                    fontSize="20"
                    fontWeight="bold"
                  >
                    70%
                  </text>
                  <text
                    x="50"
                    y="65"
                    textAnchor="middle"
                    fill="#3b82f6"
                    fontSize="10"
                  >
                    Efficiency
                  </text>
                </svg>
              </div>

              <div className="mt-6 text-center">
                <p className="text-white/70 mb-2">
                  Current efficiency rating is{' '}
                  <span className="text-blue-400 font-semibold">Good</span>
                </p>
                <p className="text-white/70 text-sm">
                  Potential to reach{' '}
                  <span className="text-blue-400 font-semibold">92%</span> with
                  recommended optimizations
                </p>
              </div>
            </div>
          </div>

          <div className="bg-black/30 rounded-xl p-6">
            <h4 className="text-lg font-semibold mb-4">Weekly Time Savings</h4>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm">Current</span>
                  <span className="text-sm text-white/70">0 hours</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full"></div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm">After Phase 1</span>
                  <span className="text-sm text-blue-400">12.5 hours</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-500"
                    style={{ width: '30%' }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm">After Phase 2</span>
                  <span className="text-sm text-blue-400">23.5 hours</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-500"
                    style={{ width: '60%' }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm">Full Implementation</span>
                  <span className="text-sm text-blue-400">38.2 hours</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-500"
                    style={{ width: '100%' }}
                  ></div>
                </div>
              </div>
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
  <div className="bg-black/30 rounded-xl p-4 border border-blue-900/30 hover:border-blue-700/50 transition-all">
    <p className="text-white/60 text-sm mb-2">{label}</p>
    <div className="flex items-end justify-between">
      <h3 className="text-2xl font-bold">
        {value}
        <span className="text-lg">{unit}</span>
      </h3>
      <span
        className={`text-xs ${
          trendUp ? 'text-blue-400' : 'text-amber-400'
        } flex items-center`}
      >
        {trend}
        {trendUp && <span className="ml-1">▲</span>}
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
  <div className="flex items-center justify-between p-3 border border-blue-900/20 rounded-lg hover:bg-blue-900/10 transition-all">
    <div>
      <h4 className="font-medium">{name}</h4>
      <p className="text-white/60 text-sm">{role}</p>
    </div>
    <div className="text-right">
      <div className="text-xl font-bold">
        {score}
        <span className="text-sm text-white/60">%</span>
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
      <div className="flex justify-between items-center mb-2">
        <h5 className="font-medium">{name}</h5>
        <span className={`px-2 py-1 rounded text-xs ${getStatusColor(status)}`}>
          {status}
        </span>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-2">
        <div>
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs text-white/60">Efficiency</span>
            <span className="text-xs">{efficiency}%</span>
          </div>
          <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
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
          <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
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
    <div className="border border-blue-900/20 rounded-lg p-3 hover:bg-blue-900/10 transition-all">
      <div className="flex justify-between items-start mb-2">
        <h5 className="font-medium">{title}</h5>
        <span className={`px-2 py-1 rounded text-xs ${getImpactColor(impact)}`}>
          {impact} Impact
        </span>
      </div>
      <p className="text-sm text-white/70">{description}</p>
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
    <div className="border border-blue-900/20 rounded-lg p-3 hover:bg-blue-900/10 transition-all">
      <div className="flex justify-between items-start mb-2">
        <h5 className="font-medium">{title}</h5>
        <span
          className={`px-2 py-1 rounded text-xs ${getPriorityColor(priority)}`}
        >
          {priority} Priority
        </span>
      </div>
      <p className="text-sm text-white/70 mb-2">{description}</p>
      <div className="flex items-center text-blue-400 text-sm">
        <Clock size={14} className="mr-1" />
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
    className="bg-gradient-to-br from-blue-950/30 to-black/50 backdrop-blur-sm p-6 rounded-xl border border-blue-900/30 hover:border-blue-700/30 transition-all"
    initial={{ opacity: 0, y: 20 }}
    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
    transition={{ duration: 0.5, delay }}
  >
    <div className="p-2 bg-blue-500/20 rounded-lg inline-block mb-4">
      {icon}
    </div>
    <h3 className="text-lg font-bold mb-2">{title}</h3>
    <p className="text-white/70 text-sm">{description}</p>
  </motion.div>
);

export default WorkOptimization;

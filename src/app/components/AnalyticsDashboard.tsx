'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
  Shield,
  Users,
  AlertTriangle,
  Camera,
  Activity,
  ChevronRight,
} from 'lucide-react';
import {
  TabButtonProps,
  SecurityTabProps,
  TrackingTabProps,
  MetricCardProps,
  EventTypeItemProps,
  LocationItemProps,
  ThreatBadgeProps,
} from '../types/types';

const AnalyticsDashboard = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeTab, setActiveTab] = useState('realtime');

  // Mock data for the charts
  const securityEvents = [65, 40, 78, 52, 63, 92, 58];
  const peopleTracked = [120, 230, 180, 290, 150, 310, 260];
  const threatLevels = [2, 1, 3, 1, 4, 2, 1];

  return (
    <section
      ref={ref}
      className="py-20 relative overflow-hidden bg-gradient-to-b from-black via-black to-emerald-950/20"
    >
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(rgba(76, 175, 80, 0.3) 1px, transparent 1px)`,
            backgroundSize: '30px 30px',
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-emerald-400">
            Advanced Analytics Dashboard
          </h2>
          <p className="text-lg text-white/70">
            Real-time insights and powerful visualization tools to monitor
            security metrics, track movement patterns, and identify potential
            threats across your entire system.
          </p>
        </motion.div>

        {/* Dashboard Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <TabButton
            active={activeTab === 'realtime'}
            onClick={() => setActiveTab('realtime')}
            icon={<Activity size={18} />}
            label="Real-time Monitoring"
          />
          <TabButton
            active={activeTab === 'security'}
            onClick={() => setActiveTab('security')}
            icon={<Shield size={18} />}
            label="Security Events"
          />
          <TabButton
            active={activeTab === 'tracking'}
            onClick={() => setActiveTab('tracking')}
            icon={<Users size={18} />}
            label="People Tracking"
          />
        </div>

        {/* Dashboard Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-black/40 backdrop-blur-md border border-emerald-900/30 rounded-2xl overflow-hidden"
          >
            {activeTab === 'realtime' && <RealtimeTab />}

            {activeTab === 'security' && <SecurityTab data={securityEvents} />}

            {activeTab === 'tracking' && (
              <TrackingTab data={peopleTracked} threatLevels={threatLevels} />
            )}
          </motion.div>
        </AnimatePresence>
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
        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
        : 'bg-black/30 text-white/70 border border-white/10 hover:bg-black/50'
    }`}
  >
    {icon}
    <span>{label}</span>
  </button>
);

const RealtimeTab = () => (
  <div className="p-6 md:p-8">
    <div className="flex items-center justify-between mb-6">
      <h3 className="text-2xl font-bold">Live System Overview</h3>
      <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-sm flex items-center">
        <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></span>
        Live
      </span>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      <MetricCard
        icon={<Camera className="text-emerald-400" />}
        label="Active Cameras"
        value="24/24"
        trend="+2 from yesterday"
        trendUp={true}
      />

      <MetricCard
        icon={<Users className="text-emerald-400" />}
        label="People Detected"
        value="127"
        trend="+43 from yesterday"
        trendUp={true}
      />

      <MetricCard
        icon={<AlertTriangle className="text-amber-400" />}
        label="Potential Threats"
        value="3"
        trend="-2 from yesterday"
        trendUp={false}
      />
    </div>

    <div className="bg-black/30 rounded-xl p-6 mb-6">
      <h4 className="text-lg font-semibold mb-4">Active Monitoring Zones</h4>
      <div className="relative aspect-video rounded-lg overflow-hidden border border-emerald-900/30">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover">
          {/* Overlay with detection boxes */}
          <div className="absolute w-full h-full">
            {/* Person detection boxes */}
            <div className="absolute top-[20%] left-[30%] w-16 h-40 border-2 border-emerald-400 rounded-sm animate-pulse">
              <div className="absolute -top-6 left-0 bg-emerald-500/90 text-white text-xs px-2 py-1 rounded">
                Person #127
              </div>
            </div>

            <div className="absolute top-[40%] left-[60%] w-16 h-40 border-2 border-emerald-400 rounded-sm animate-pulse">
              <div className="absolute -top-6 left-0 bg-emerald-500/90 text-white text-xs px-2 py-1 rounded">
                Person #128
              </div>
            </div>

            <div className="absolute top-[30%] left-[10%] w-16 h-40 border-2 border-red-400 rounded-sm animate-pulse">
              <div className="absolute -top-6 left-0 bg-red-500/90 text-white text-xs px-2 py-1 rounded">
                Alert #003
              </div>
            </div>

            {/* Zone overlays */}
            <div className="absolute top-[10%] left-[5%] w-[30%] h-[60%] border border-emerald-500/30 bg-emerald-500/10 rounded-md">
              <div className="absolute -top-6 left-0 bg-black/70 text-emerald-400 text-xs px-2 py-1 rounded">
                Zone A - Entry
              </div>
            </div>

            <div className="absolute top-[20%] left-[40%] w-[50%] h-[60%] border border-emerald-500/30 bg-emerald-500/10 rounded-md">
              <div className="absolute -top-6 left-0 bg-black/70 text-emerald-400 text-xs px-2 py-1 rounded">
                Zone B - Main Hall
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="flex justify-end">
      <button className="flex items-center text-emerald-400 hover:text-emerald-300 transition-colors">
        View detailed analytics
        <ChevronRight size={16} className="ml-1" />
      </button>
    </div>
  </div>
);

const SecurityTab: React.FC<SecurityTabProps> = ({ data }) => (
  <div className="p-6 md:p-8">
    <div className="flex items-center justify-between mb-6">
      <h3 className="text-2xl font-bold">Security Events</h3>
      <div className="flex gap-2">
        <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-sm">
          Last 7 Days
        </span>
      </div>
    </div>

    <div className="bg-black/30 rounded-xl p-6 mb-6">
      <h4 className="text-lg font-semibold mb-4">Event Frequency</h4>
      <div className="h-64 w-full">
        <div className="flex h-full items-end justify-between gap-2">
          {data.map((value, index) => (
            <div key={index} className="relative group flex-1">
              <div
                className="bg-gradient-to-t from-emerald-500 to-emerald-400 rounded-t-sm transition-all duration-500 group-hover:from-emerald-400 group-hover:to-emerald-300"
                style={{ height: `${(value / 100) * 100}%` }}
              ></div>
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                {value} events
              </div>
              <div className="text-xs text-white/60 text-center mt-2">
                Day {index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      <div className="bg-black/30 rounded-xl p-6">
        <h4 className="text-lg font-semibold mb-4">Event Types</h4>
        <div className="space-y-4">
          <EventTypeItem
            label="Unauthorized Access"
            count={24}
            percentage={48}
            color="bg-red-500"
          />
          <EventTypeItem
            label="Suspicious Activity"
            count={18}
            percentage={36}
            color="bg-amber-500"
          />
          <EventTypeItem
            label="System Alerts"
            count={8}
            percentage={16}
            color="bg-emerald-500"
          />
        </div>
      </div>

      <div className="bg-black/30 rounded-xl p-6">
        <h4 className="text-lg font-semibold mb-4">Critical Locations</h4>
        <div className="space-y-4">
          <LocationItem label="Main Entrance" count={15} percentage={30} />
          <LocationItem label="Server Room" count={12} percentage={24} />
          <LocationItem label="Executive Office" count={10} percentage={20} />
          <LocationItem label="Parking Garage" count={8} percentage={16} />
          <LocationItem label="Other Areas" count={5} percentage={10} />
        </div>
      </div>
    </div>
  </div>
);

const TrackingTab: React.FC<TrackingTabProps> = ({ data, threatLevels }) => (
  <div className="p-6 md:p-8">
    <div className="flex items-center justify-between mb-6">
      <h3 className="text-2xl font-bold">People Tracking Analytics</h3>
      <div className="flex gap-2">
        <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-sm">
          Last 7 Days
        </span>
      </div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
      <div className="lg:col-span-2 bg-black/30 rounded-xl p-6">
        <h4 className="text-lg font-semibold mb-4">Daily Occupancy</h4>
        <div className="h-64 w-full">
          <div className="flex h-full items-end justify-between gap-2">
            {data.map((value, index) => (
              <div key={index} className="relative group flex-1">
                <div
                  className="bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-sm transition-all duration-500 group-hover:from-blue-400 group-hover:to-blue-300"
                  style={{ height: `${(value / 350) * 100}%` }}
                ></div>
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  {value} people
                </div>
                <div className="text-xs text-white/60 text-center mt-2">
                  Day {index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-black/30 rounded-xl p-6">
        <h4 className="text-lg font-semibold mb-4">Threat Assessment</h4>
        <div className="space-y-6">
          {threatLevels.map((level, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-white/70">Day {index + 1}</span>
                <ThreatBadge level={level} />
              </div>
              <div className="h-2 bg-black/50 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full ${getThreatColor(level)}`}
                  style={{ width: `${level * 25}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="bg-black/30 rounded-xl p-6 mb-6">
      <h4 className="text-lg font-semibold mb-4">Movement Heatmap</h4>
      <div className="relative aspect-video rounded-lg overflow-hidden border border-emerald-900/30">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover opacity-70"></div>

        {/* Heatmap overlay */}
        <div className="absolute inset-0">
          <div className="absolute top-[20%] left-[30%] w-32 h-32 rounded-full bg-red-500/40 blur-xl"></div>
          <div className="absolute top-[40%] left-[60%] w-40 h-40 rounded-full bg-red-500/30 blur-xl"></div>
          <div className="absolute top-[60%] left-[20%] w-24 h-24 rounded-full bg-amber-500/30 blur-xl"></div>
          <div className="absolute top-[30%] left-[80%] w-20 h-20 rounded-full bg-amber-500/40 blur-xl"></div>
          <div className="absolute top-[70%] left-[50%] w-36 h-36 rounded-full bg-red-500/50 blur-xl"></div>
        </div>

        <div className="absolute bottom-4 right-4 bg-black/80 p-3 rounded-lg">
          <div className="flex items-center space-x-4 text-xs">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-red-500/70 mr-2"></div>
              <span>High Traffic</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-amber-500/70 mr-2"></div>
              <span>Medium Traffic</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-green-500/70 mr-2"></div>
              <span>Low Traffic</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const MetricCard: React.FC<MetricCardProps> = ({
  icon,
  label,
  value,
  trend,
  trendUp,
}) => (
  <div className="bg-black/30 rounded-xl p-6 border border-emerald-900/30 hover:border-emerald-700/50 transition-all">
    <div className="flex items-start justify-between mb-4">
      <div className="p-3 bg-emerald-900/20 rounded-lg">{icon}</div>
      <span
        className={`text-xs ${
          trendUp ? 'text-emerald-400' : 'text-amber-400'
        } flex items-center`}
      >
        {trend}
        <span className={`ml-1 ${trendUp ? 'rotate-0' : 'rotate-180'}`}>▲</span>
      </span>
    </div>
    <h3 className="text-3xl font-bold mb-1">{value}</h3>
    <p className="text-white/60 text-sm">{label}</p>
  </div>
);

const EventTypeItem: React.FC<EventTypeItemProps> = ({
  label,
  count,
  percentage,
  color,
}) => (
  <div>
    <div className="flex justify-between items-center mb-1">
      <span className="text-sm">{label}</span>
      <span className="text-sm text-white/70">{count} events</span>
    </div>
    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
      <div
        className={`h-full ${color}`}
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  </div>
);

const LocationItem: React.FC<LocationItemProps> = ({
  label,
  count,
  percentage,
}) => (
  <div>
    <div className="flex justify-between items-center mb-1">
      <span className="text-sm">{label}</span>
      <span className="text-sm text-white/70">{count} events</span>
    </div>
    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
      <div
        className="h-full bg-emerald-500"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  </div>
);

const ThreatBadge: React.FC<ThreatBadgeProps> = ({ level }) => {
  const getLabel = (level: number): string => {
    switch (level) {
      case 1:
        return 'Low';
      case 2:
        return 'Moderate';
      case 3:
        return 'High';
      case 4:
        return 'Critical';
      default:
        return 'None';
    }
  };

  return (
    <span
      className={`px-2 py-1 rounded text-xs font-medium ${getThreatBadgeColor(
        level
      )}`}
    >
      {getLabel(level)}
    </span>
  );
};

const getThreatColor = (level: number): string => {
  switch (level) {
    case 1:
      return 'bg-emerald-500';
    case 2:
      return 'bg-amber-500';
    case 3:
      return 'bg-orange-500';
    case 4:
      return 'bg-red-500';
    default:
      return 'bg-gray-500';
  }
};

const getThreatBadgeColor = (level: number): string => {
  switch (level) {
    case 1:
      return 'bg-emerald-500/20 text-emerald-400';
    case 2:
      return 'bg-amber-500/20 text-amber-400';
    case 3:
      return 'bg-orange-500/20 text-orange-400';
    case 4:
      return 'bg-red-500/20 text-red-400';
    default:
      return 'bg-gray-500/20 text-gray-400';
  }
};

export default AnalyticsDashboard;

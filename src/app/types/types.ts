import { ReactNode } from 'react';

export type TabButtonProps = {
  active: boolean;
  onClick: () => void;
  icon: ReactNode;
  label: string;
};

export type SecurityTabProps = {
  data: number[]; // securityEvents data (e.g., [65, 40, ...])
};

export type TrackingTabProps = {
  data: number[]; // peopleTracked
  threatLevels: number[]; // threatLevels array
};

export type MetricCardProps = {
  icon: ReactNode;
  label: string;
  value: string;
  trend: string;
  trendUp: boolean;
};

export type EventTypeItemProps = {
  label: string;
  count: number;
  percentage: number;
  color: string;
};

export type LocationItemProps = {
  label: string;
  count: number;
  percentage: number;
};

export type ThreatBadgeProps = {
  level: number; // 1–4
};

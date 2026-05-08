import type { AvailableChartColorsKeys } from '@/lib/chartUtils';

export type KpiSparkPoint = { day: string; value: number };

type KpiBase = {
  label: string;
  period: string;
  value: string;
};

export type ChartKpi = KpiBase & {
  kind: 'area' | 'bar';
  delta: number;
  color: AvailableChartColorsKeys;
  series: KpiSparkPoint[];
};

export type ProgressKpi = KpiBase & {
  kind: 'progress';
  current: number;
  target: number;
  caption?: string;
  tone?: 'default' | 'neutral' | 'warning' | 'error' | 'success';
};

export type Kpi = ChartKpi | ProgressKpi;

export const revenueKpi: ChartKpi = {
  kind: 'area',
  label: 'Revenue',
  period: 'Last 7 days',
  value: '$4,300',
  delta: 8,
  color: 'emerald',
  series: [
    { day: 'Mon', value: 520 },
    { day: 'Tue', value: 610 },
    { day: 'Wed', value: 480 },
    { day: 'Thu', value: 720 },
    { day: 'Fri', value: 690 },
    { day: 'Sat', value: 800 },
    { day: 'Sun', value: 480 },
  ],
};

export const newUsersKpi: ChartKpi = {
  kind: 'area',
  label: 'New users',
  period: 'Last 7 days',
  value: '6,782',
  delta: 12,
  color: 'blue',
  series: [
    { day: 'Mon', value: 820 },
    { day: 'Tue', value: 910 },
    { day: 'Wed', value: 870 },
    { day: 'Thu', value: 1020 },
    { day: 'Fri', value: 990 },
    { day: 'Sat', value: 1100 },
    { day: 'Sun', value: 1072 },
  ],
};

export const activeUsersKpi: ChartKpi = {
  kind: 'bar',
  label: 'Active users',
  period: 'Last 7 days',
  value: '2,986',
  delta: 4,
  color: 'violet',
  series: [
    { day: 'Mon', value: 380 },
    { day: 'Tue', value: 420 },
    { day: 'Wed', value: 410 },
    { day: 'Thu', value: 460 },
    { day: 'Fri', value: 440 },
    { day: 'Sat', value: 470 },
    { day: 'Sun', value: 406 },
  ],
};

export const salesTargetKpi: ProgressKpi = {
  kind: 'progress',
  label: 'Sales target',
  period: 'Q2 progress',
  value: '75%',
  current: 75,
  target: 100,
  caption: '$75k of $100k',
  tone: 'success',
};

export const kpis: Kpi[] = [revenueKpi, newUsersKpi, activeUsersKpi, salesTargetKpi];

export type SessionsPoint = {
  week: string;
  desktop: number;
  mobile: number;
};

export const sessionsSeries: SessionsPoint[] = [
  { week: 'W14', desktop: 1240, mobile: 980 },
  { week: 'W15', desktop: 1320, mobile: 1050 },
  { week: 'W16', desktop: 1180, mobile: 1120 },
  { week: 'W17', desktop: 1410, mobile: 1290 },
  { week: 'W18', desktop: 1280, mobile: 1380 },
  { week: 'W19', desktop: 1520, mobile: 1450 },
  { week: 'W20', desktop: 1390, mobile: 1610 },
];

export type Gauge = {
  label: string;
  value: number;
  max: number;
  unit?: string;
  variant?: 'default' | 'neutral' | 'warning' | 'error' | 'success';
  caption?: string;
};

export const goalGauge: Gauge = {
  label: 'Quarterly goal',
  value: 72,
  max: 100,
  unit: '%',
  variant: 'success',
  caption: '$72k of $100k target',
};

export type TrafficPoint = {
  date: string;
  newVisitors: number;
  returningVisitors: number;
};

export const trafficSeries: TrafficPoint[] = [
  { date: 'Jul 17', newVisitors: 32, returningVisitors: 18 },
  { date: 'Jul 18', newVisitors: 41, returningVisitors: 22 },
  { date: 'Jul 19', newVisitors: 28, returningVisitors: 16 },
  { date: 'Jul 20', newVisitors: 47, returningVisitors: 31 },
  { date: 'Jul 21', newVisitors: 52, returningVisitors: 28 },
  { date: 'Jul 22', newVisitors: 38, returningVisitors: 24 },
  { date: 'Jul 23', newVisitors: 61, returningVisitors: 35 },
  { date: 'Jul 24', newVisitors: 44, returningVisitors: 27 },
];

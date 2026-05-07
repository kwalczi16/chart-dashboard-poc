export type TrendPoint = { date: string; value: number }
export type TrafficPoint = { day: string; visitors: number; signups: number }
export type RevenuePoint = { date: string; revenue: number }

export type Kpi = {
  label: string
  value: string
  delta: number
  trend: TrendPoint[]
}

const days = (n: number) =>
  Array.from({ length: n }, (_, i) => {
    const d = new Date()
    d.setDate(d.getDate() - (n - 1 - i))
    return d.toISOString().slice(5, 10)
  })

const wave = (base: number, amp: number, n: number, phase = 0) =>
  Array.from({ length: n }, (_, i) =>
    Math.round(base + amp * Math.sin(i / 2 + phase) + (Math.random() - 0.5) * amp * 0.4),
  )

export const kpis: Kpi[] = [
  {
    label: 'Sales',
    value: '$24,560',
    delta: 12.4,
    trend: days(14).map((date, i) => ({ date, value: wave(120, 30, 14, 0)[i] })),
  },
  {
    label: 'Revenue',
    value: '$4,300',
    delta: 8.1,
    trend: days(14).map((date, i) => ({ date, value: wave(80, 20, 14, 1.2)[i] })),
  },
  {
    label: 'New clients',
    value: '6,782',
    delta: -1.6,
    trend: days(14).map((date, i) => ({ date, value: wave(60, 15, 14, 2.4)[i] })),
  },
  {
    label: 'Active users',
    value: '2,986',
    delta: 4.0,
    trend: days(14).map((date, i) => ({ date, value: wave(40, 10, 14, 3.6)[i] })),
  },
]

export const traffic: TrafficPoint[] = days(28).map((day, i) => ({
  day,
  visitors: wave(55, 25, 28, 0)[i],
  signups: wave(18, 8, 28, 1)[i],
}))

export const revenue: RevenuePoint[] = days(30).map((date, i) => ({
  date,
  revenue: wave(4200, 800, 30, 0)[i],
}))

export const targets = [
  { label: 'Monthly quota', value: 78 },
  { label: 'Storage used', value: 64 },
  { label: 'Conversion rate', value: 42 },
  { label: 'Customer satisfaction', value: 91 },
]

export const performanceScore = 73

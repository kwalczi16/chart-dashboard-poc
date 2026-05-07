import { Card, BadgeDelta } from '@tremor/react'
import { LineChart, Line, ResponsiveContainer } from 'recharts'
import type { TrendPoint } from '../data/mock'

type Props = {
  label: string
  value: string
  delta: number
  trend: TrendPoint[]
}

export function KpiCard({ label, value, delta, trend }: Props) {
  const deltaType = delta > 0 ? 'increase' : delta < 0 ? 'decrease' : 'unchanged'
  const stroke = delta >= 0 ? '#3b82f6' : '#f43f5e'

  return (
    <Card className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <p className="text-tremor-default text-tremor-content uppercase tracking-wide">
          {label}
        </p>
        <BadgeDelta deltaType={deltaType}>{`${delta > 0 ? '+' : ''}${delta}%`}</BadgeDelta>
      </div>
      <p className="text-tremor-metric font-semibold text-tremor-content-strong">{value}</p>
      <div className="h-12">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={trend}>
            <Line
              type="monotone"
              dataKey="value"
              stroke={stroke}
              strokeWidth={2}
              dot={false}
              isAnimationActive={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}

import { Card, Title } from '@tremor/react'
import { PolarAngleAxis, RadialBar, RadialBarChart, ResponsiveContainer } from 'recharts'
import { performanceScore } from '../data/mock'

const colorFor = (v: number) => (v < 50 ? '#f43f5e' : v < 80 ? '#f59e0b' : '#10b981')

export function Gauge() {
  const fill = colorFor(performanceScore)
  const data = [{ name: 'score', value: performanceScore, fill }]

  return (
    <Card>
      <Title>Performance score</Title>
      <div className="relative mt-4 h-64">
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            cx="50%"
            cy="75%"
            innerRadius="70%"
            outerRadius="100%"
            startAngle={180}
            endAngle={0}
            data={data}
          >
            <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
            <RadialBar
              dataKey="value"
              background={{ fill: '#e5e7eb' }}
              cornerRadius={10}
              isAnimationActive={false}
            />
          </RadialBarChart>
        </ResponsiveContainer>
        <div className="pointer-events-none absolute inset-x-0 bottom-6 flex flex-col items-center">
          <span className="text-4xl font-semibold leading-none" style={{ color: fill }}>
            {performanceScore}
          </span>
          <span className="mt-1 text-xs uppercase tracking-wider text-tremor-content">
            out of 100
          </span>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-1 flex justify-between px-6 text-xs text-tremor-content">
          <span>0</span>
          <span>100</span>
        </div>
      </div>
    </Card>
  )
}

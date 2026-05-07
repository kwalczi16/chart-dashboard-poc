import { Card, Title, BarChart } from '@tremor/react'
import { traffic } from '../data/mock'

export function TrafficBarChart() {
  return (
    <Card>
      <Title>Traffic summary</Title>
      <BarChart
        className="mt-4 h-72"
        data={traffic}
        index="day"
        categories={['visitors', 'signups']}
        colors={['blue', 'emerald']}
        stack
        showLegend
        showGridLines={false}
        yAxisWidth={40}
      />
    </Card>
  )
}

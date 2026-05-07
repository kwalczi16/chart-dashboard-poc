import { Card, Title, AreaChart } from '@tremor/react'
import { revenue } from '../data/mock'

const formatCurrency = (n: number) => `$${n.toLocaleString()}`

export function RevenueAreaChart() {
  return (
    <Card>
      <Title>Revenue (last 30 days)</Title>
      <AreaChart
        className="mt-4 h-72"
        data={revenue}
        index="date"
        categories={['revenue']}
        colors={['indigo']}
        valueFormatter={formatCurrency}
        showLegend={false}
        showGridLines={false}
        yAxisWidth={64}
      />
    </Card>
  )
}

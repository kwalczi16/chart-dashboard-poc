import { BarChart } from '@/components/tremor/BarChart';
import { Card } from '@/components/ui/card';
import { trafficSeries } from '@/data/mock';

export function TrafficBarChart() {
  return (
    <Card className="p-4">
      <h3 className="text-base font-semibold tracking-tight">Traffic summary</h3>
      <BarChart
        className="mt-4 h-72"
        data={trafficSeries}
        index="date"
        categories={['newVisitors', 'returningVisitors']}
        colors={['blue', 'emerald']}
        type="stacked"
        yAxisWidth={40}
      />
    </Card>
  );
}

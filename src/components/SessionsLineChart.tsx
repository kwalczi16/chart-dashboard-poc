import { Card } from '@/components/ui/card';
import { LineChart } from '@/components/tremor/LineChart';
import { cn } from '@/lib/utils';
import { sessionsSeries } from '@/data/mock';

export function SessionsLineChart({ className }: { className?: string }) {
  return (
    <Card className={cn('flex flex-col p-4', className)}>
      <h3 className="text-base font-semibold tracking-tight">Sessions</h3>
      <LineChart
        className="mt-4 h-64"
        data={sessionsSeries}
        index="week"
        categories={['desktop', 'mobile']}
        colors={['indigo', 'cyan']}
        yAxisWidth={40}
        showLegend
      />
    </Card>
  );
}

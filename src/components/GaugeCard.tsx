import { Card } from '@/components/ui/card';
import { ProgressCircle } from '@/components/tremor/ProgressCircle';
import type { Gauge } from '@/data/mock';

export function GaugeCard({ gauge }: { gauge: Gauge }) {
  return (
    <Card className="flex flex-col p-4">
      <h3 className="text-base font-semibold tracking-tight">{gauge.label}</h3>
      <div className="flex flex-1 flex-col items-center justify-center gap-3 py-6">
        <ProgressCircle
          value={gauge.value}
          max={gauge.max}
          radius={60}
          strokeWidth={10}
          variant={gauge.variant}
        >
          <span className="text-2xl font-semibold tabular-nums">
            {gauge.value}
            {gauge.unit ?? ''}
          </span>
        </ProgressCircle>
        {gauge.caption && (
          <span className="text-sm text-muted-foreground">{gauge.caption}</span>
        )}
      </div>
    </Card>
  );
}

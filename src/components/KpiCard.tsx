import { Card } from '@/components/ui/card';
import { DeltaBadge } from '@/components/DeltaBadge';
import { ProgressBar } from '@/components/tremor/ProgressBar';
import {
  SparkAreaChart,
  SparkBarChart,
} from '@/components/tremor/SparkChart';
import type { ChartKpi, Kpi } from '@/data/mock';

type Props = {
  kpi: Kpi;
};

function ChartSparkline({ kpi }: { kpi: ChartKpi }) {
  const common = {
    className: 'mt-3 h-12 w-full',
    data: kpi.series,
    index: 'day',
    categories: ['value'],
    colors: [kpi.color],
  };
  return kpi.kind === 'bar' ? (
    <SparkBarChart {...common} />
  ) : (
    <SparkAreaChart {...common} />
  );
}

export function KpiCard({ kpi }: Props) {
  return (
    <Card className="p-4">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          {kpi.label}
        </span>
        <span className="text-xs text-muted-foreground">{kpi.period}</span>
      </div>

      <div className="mt-2 flex items-baseline gap-2">
        <span className="text-2xl font-semibold text-foreground">{kpi.value}</span>
        {kpi.kind !== 'progress' && <DeltaBadge delta={kpi.delta} />}
      </div>

      {kpi.kind === 'progress' ? (
        <div className="mt-4 space-y-2">
          <ProgressBar
            value={kpi.current}
            max={kpi.target}
            variant={kpi.tone}
          />
          {kpi.caption && (
            <p className="text-xs text-muted-foreground">{kpi.caption}</p>
          )}
        </div>
      ) : (
        <ChartSparkline kpi={kpi} />
      )}
    </Card>
  );
}

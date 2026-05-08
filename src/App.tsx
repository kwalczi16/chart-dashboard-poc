import { GaugeCard } from '@/components/GaugeCard';
import { KpiCard } from '@/components/KpiCard';
import { SessionsLineChart } from '@/components/SessionsLineChart';
import { TrafficBarChart } from '@/components/TrafficBarChart';
import { goalGauge, kpis } from '@/data/mock';

function App() {
  return (
    <div className="min-h-screen p-6">
      <div className="mx-auto flex max-w-5xl flex-col gap-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {kpis.map((kpi) => (
            <KpiCard key={kpi.label} kpi={kpi} />
          ))}
        </div>
        <TrafficBarChart />
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <SessionsLineChart className="lg:col-span-2" />
          <GaugeCard gauge={goalGauge} />
        </div>
      </div>
    </div>
  );
}

export default App;

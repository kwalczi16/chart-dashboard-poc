import { KpiCard } from './components/KpiCard'
import { TrafficBarChart } from './components/TrafficBarChart'
import { RevenueAreaChart } from './components/RevenueAreaChart'
import { ProgressPanel } from './components/ProgressPanel'
import { Gauge } from './components/Gauge'
import { kpis } from './data/mock'

const today = new Date().toLocaleDateString(undefined, {
  weekday: 'long',
  month: 'long',
  day: 'numeric',
})

function App() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-8">
      <header className="mb-8 flex items-baseline justify-between">
        <div>
          <p className="text-tremor-default uppercase tracking-wider text-tremor-content">
            Overview
          </p>
          <h1 className="text-3xl font-semibold text-tremor-content-strong">Dashboard</h1>
        </div>
        <span className="text-tremor-default text-tremor-content">{today}</span>
      </header>

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {kpis.map((k) => (
          <KpiCard key={k.label} {...k} />
        ))}
      </section>

      <section className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <TrafficBarChart />
        </div>
        <Gauge />
      </section>

      <section className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <RevenueAreaChart />
        </div>
        <ProgressPanel />
      </section>
    </main>
  )
}

export default App

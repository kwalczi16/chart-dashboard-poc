import { Card, Title, ProgressBar } from '@tremor/react'
import { targets } from '../data/mock'

const colorFor = (v: number): 'rose' | 'amber' | 'emerald' =>
  v < 50 ? 'rose' : v < 80 ? 'amber' : 'emerald'

export function ProgressPanel() {
  return (
    <Card>
      <Title>Targets</Title>
      <div className="mt-4 flex flex-col gap-5">
        {targets.map((t) => (
          <div key={t.label}>
            <div className="flex justify-between text-tremor-default">
              <span className="text-tremor-content">{t.label}</span>
              <span className="font-medium text-tremor-content-strong">{t.value}%</span>
            </div>
            <ProgressBar value={t.value} color={colorFor(t.value)} className="mt-2" />
          </div>
        ))}
      </div>
    </Card>
  )
}

import { ArrowDown, ArrowUp, Minus } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

type Tone = "positive" | "negative" | "neutral"

function tone(delta: number): Tone {
  if (delta > 0) return "positive"
  if (delta < 0) return "negative"
  return "neutral"
}

const TONE_STYLES: Record<Tone, string> = {
  positive: "border-transparent bg-emerald-100 text-emerald-700 hover:bg-emerald-100",
  negative: "border-transparent bg-rose-100 text-rose-700 hover:bg-rose-100",
  neutral: "border-transparent bg-muted text-muted-foreground hover:bg-muted",
}

const TONE_ICONS: Record<Tone, typeof ArrowUp> = {
  positive: ArrowUp,
  negative: ArrowDown,
  neutral: Minus,
}

export function DeltaBadge({ delta }: { delta: number }) {
  const t = tone(delta)
  const Icon = TONE_ICONS[t]
  return (
    <Badge className={cn("gap-0.5 px-1.5 py-0 font-medium", TONE_STYLES[t])}>
      <Icon className="size-3" aria-hidden />
      {Math.abs(delta)}%
    </Badge>
  )
}

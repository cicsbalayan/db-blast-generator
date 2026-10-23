import { CardDescription, CardTitle } from "@/components/ui/card"

export function CardHeading({
  step,
  title,
  description,
}: {
  step: string
  title: string
  description?: string
}) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-xl bg-card surface-raised text-[11px] font-semibold text-accent-strong tabular-nums ring-1 shadow-neo-pill ring-border/60">
        {step}
      </span>
      <div className="grid gap-0.5">
        <CardTitle>{title}</CardTitle>
        {description ? <CardDescription>{description}</CardDescription> : null}
      </div>
    </div>
  )
}

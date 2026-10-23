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
      <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-lg bg-secondary/70 text-[11px] font-semibold text-secondary-foreground tabular-nums ring-1 ring-border/70">
        {step}
      </span>
      <div className="grid gap-0.5">
        <CardTitle>{title}</CardTitle>
        {description ? <CardDescription>{description}</CardDescription> : null}
      </div>
    </div>
  )
}

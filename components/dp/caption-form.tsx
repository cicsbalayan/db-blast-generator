"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { CardHeading } from "@/components/dp/card-heading"
import { years, type Program, type Year } from "@/data/blasts"
import type { GeneratedCaption } from "@/lib/domain/caption"
import { cn } from "@/lib/utils"
import { RiFileCopyLine } from "@remixicon/react"

export function CaptionForm({
  programs,
  name,
  year,
  program,
  caption,
  onNameChange,
  onYearChange,
  onProgramChange,
}: {
  programs: readonly Program[]
  name: string
  year: Year
  program: string
  caption: GeneratedCaption
  onNameChange: (value: string) => void
  onYearChange: (value: Year) => void
  onProgramChange: (value: string) => void
}) {
  function handleCopy() {
    const item = new ClipboardItem({
      "text/plain": new Blob([caption.text], { type: "text/plain" }),
      "text/html": new Blob([caption.html], { type: "text/html" }),
    })
    navigator.clipboard.write([item])
  }

  return (
    <Card>
      <CardHeader className="border-b border-border/60 pb-4">
        <CardHeading
          step="03"
          title="Add your details"
          description="We'll build a ready-to-paste caption for your post."
        />
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        <label className="block">
          <span className="text-sm font-medium text-foreground">Full name</span>
          <input
            type="text"
            value={name}
            onChange={(event) => onNameChange(event.target.value)}
            placeholder="Juan Dela Cruz"
            className="mt-1.5 h-10 w-full rounded-xl border border-border/60 bg-card surface-inset px-3 text-sm text-foreground shadow-neo-inset transition-[border-color,color] duration-200 outline-none placeholder:text-muted-foreground/60 focus:border-ring focus:ring-3 focus:ring-ring/25"
          />
        </label>

        <div>
          <span className="text-sm font-medium text-foreground">Program</span>
          <div className="mt-1.5 grid grid-cols-2 gap-2">
            {programs.map((item) => {
              const isActive = item.abbr === program
              return (
                <button
                  key={item.abbr}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => onProgramChange(item.abbr)}
                  className={cn(
                    "rounded-xl border px-3 py-2 text-left transition-transform duration-200 ease-out outline-none focus-visible:ring-3 focus-visible:ring-ring/25",
                    isActive
                      ? "border-[#8b3808]/40 bg-primary surface-primary text-primary-foreground shadow-primary-pill"
                      : "border-border/60 bg-card surface-raised text-foreground shadow-neo-sm hover:-translate-y-px"
                  )}
                >
                  <span className="block text-[13px] font-semibold">
                    {item.abbr}
                  </span>
                  <span
                    className={cn(
                      "mt-0.5 block text-[11px] leading-snug",
                      isActive
                        ? "text-primary-foreground"
                        : "text-muted-foreground"
                    )}
                  >
                    {item.name}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        <div>
          <span className="text-sm font-medium text-foreground">
            Year level
          </span>
          <div className="mt-1.5 grid grid-cols-4 gap-1 rounded-full border border-border/60 bg-card surface-inset p-1 shadow-neo-inset">
            {years.map((item) => {
              const isActive = item.value === year
              return (
                <button
                  key={item.value}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => onYearChange(item.value)}
                  className={cn(
                    "rounded-full py-1.5 text-sm font-medium transition-[transform,background-color,border-color,color] duration-200 outline-none focus-visible:ring-3 focus-visible:ring-ring/25",
                    isActive
                      ? "bg-primary surface-primary text-primary-foreground shadow-primary-pill"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {item.label}
                </button>
              )
            })}
          </div>
        </div>

        <div className="flex flex-col gap-3 rounded-xl border border-border/60 bg-card surface-raised p-4 shadow-neo-sm">
          <div>
            <div className="flex items-start justify-between gap-3">
              <p className="text-sm font-semibold text-foreground">
                {caption.header}
              </p>
              <Button variant="outline" size="sm" onClick={handleCopy}>
                <RiFileCopyLine data-icon="inline-start" />
                Copy
              </Button>
            </div>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
              <span dangerouslySetInnerHTML={{ __html: caption.bodyHtml }} />
            </p>
            <p className="mt-2 text-xs font-medium text-accent-strong">
              {caption.hashtags}
            </p>
          </div>
          <p className="text-[11px] leading-relaxed text-muted-foreground/80">
            Paste this caption under your DP post on Facebook.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

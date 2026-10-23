"use client"

import dynamic from "next/dynamic"

import { Badge } from "@/components/ui/badge"
import { blasts, type Blast } from "@/data/blasts"
import { cn } from "@/lib/utils"
import { RiCheckboxCircleLine, RiImageLine, RiLockLine } from "@remixicon/react"

const DpGenerator = dynamic(
  () => import("@/components/dp/generator").then((mod) => mod.DpGenerator),
  {
    loading: () => (
      <div className="mx-auto grid max-w-6xl animate-pulse gap-5 px-4 pb-20 sm:px-6 lg:grid-cols-2">
        <div className="flex flex-col gap-5">
          <div className="h-56 rounded-2xl border border-border/60 bg-card shadow-neo" />
          <div className="h-40 rounded-2xl border border-border/60 bg-card shadow-neo" />
          <div className="h-80 rounded-2xl border border-border/60 bg-card shadow-neo" />
        </div>
        <div className="h-[30rem] rounded-2xl border border-border/60 bg-card shadow-neo" />
      </div>
    ),
  }
)

export function DpApp({
  activeId,
  onActiveChange,
}: {
  activeId: Blast["id"]
  onActiveChange: (id: Blast["id"]) => void
}) {
  const active = blasts.find((blast) => blast.id === activeId) ?? blasts[0]

  return (
    <div className="relative">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -top-72 left-1/2 h-[40rem] w-[60rem] -translate-x-1/2 rounded-full bg-white/50 blur-3xl" />
      </div>

      <section className="relative border-b border-border/60">
        <div className="mx-auto max-w-6xl px-4 pt-14 pb-10 sm:px-6 sm:pt-20 sm:pb-12">
          <div className="mx-auto max-w-3xl text-center">
            <Badge
              className="h-auto gap-2 px-3.5 py-1.5 text-xs"
              variant="secondary"
            >
              <span
                aria-hidden
                className="size-1.5 rounded-full bg-accent shadow-[0_0_0_4px_color-mix(in_srgb,var(--accent)_14%,transparent)]"
              />
              {active.department}
            </Badge>

            <h1 className="mt-6 font-heading text-4xl leading-[1.08] font-semibold tracking-tight text-balance text-foreground sm:text-5xl md:text-6xl">
              {active.title}
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-pretty text-muted-foreground sm:text-[17px]">
              {active.description}
            </p>

            {blasts.length > 1 && (
              <div className="mx-auto mt-9 inline-flex w-full max-w-sm items-center gap-1 rounded-full border border-border/70 bg-card p-1 shadow-neo">
                {blasts.map((blast) => {
                  const isActive = blast.id === activeId
                  return (
                    <button
                      key={blast.id}
                      type="button"
                      aria-pressed={isActive}
                      onClick={() => onActiveChange(blast.id)}
                      className={cn(
                        "flex-1 rounded-full px-4 py-2 text-sm font-medium transition-all outline-none focus-visible:ring-3 focus-visible:ring-ring/25",
                        isActive
                          ? "bg-primary text-primary-foreground shadow-neo-pill"
                          : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      {blast.label}
                    </button>
                  )
                })}
              </div>
            )}

            <div className="mt-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-2.5 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-card px-2.5 py-1 shadow-neo-pill">
                <RiCheckboxCircleLine className="size-3.5 text-accent-strong" />
                Official {active.label} frame
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-card px-2.5 py-1 shadow-neo-pill">
                <RiImageLine className="size-3.5 text-accent-strong" />
                2048 × 2048 PNG
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-card px-2.5 py-1 shadow-neo-pill">
                <RiLockLine className="size-3.5 text-accent-strong" />
                Stays on your device
              </span>
            </div>
          </div>
        </div>
      </section>

      <DpGenerator blast={active} />
    </div>
  )
}

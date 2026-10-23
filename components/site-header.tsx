"use client"

import { site } from "@/data/site"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background shadow-[0_14px_28px_-26px_rgb(42_26_14/0.55)]">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a
          href="#"
          className="flex min-w-0 items-center gap-3 rounded-xl px-1 py-1 outline-none focus-visible:ring-3 focus-visible:ring-ring/25"
        >
          <span className="flex size-9 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-card surface-raised ring-1 shadow-neo-sm ring-border/60">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/icon.ico" alt="" className="size-7 object-contain" />
          </span>
          <span className="min-w-0">
            <span className="block truncate font-heading text-sm font-semibold tracking-tight">
              {site.brand.name}
            </span>
            <span className="block truncate text-[11px] text-muted-foreground">
              {site.brand.tagline}
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-2 rounded-full border border-border/60 bg-card surface-raised px-3 py-1.5 shadow-neo-pill sm:flex">
          <span className="size-1.5 rounded-full bg-accent shadow-[0_0_0_4px_color-mix(in_srgb,var(--accent)_14%,transparent)]" />
          <span className="text-[11px] font-medium text-muted-foreground">
            Official DP frame
          </span>
        </div>
      </div>
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-accent/25 to-transparent"
      />
    </header>
  )
}

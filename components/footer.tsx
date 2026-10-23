"use client"

import { site } from "@/data/site"

export function Footer() {
  return (
    <footer className="border-t border-border/70">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-8 text-center sm:flex-row sm:px-6 sm:text-left">
        <div className="flex items-center gap-2.5">
          <span aria-hidden className="size-1.5 rounded-full bg-accent" />
          <p className="text-xs text-muted-foreground">
            <span className="font-medium text-foreground">
              {site.brand.name}
            </span>
            <span aria-hidden className="px-1.5 text-border">
              /
            </span>
            {site.brand.tagline}
          </p>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} {site.brand.name}. {site.footer.rights}
        </p>
      </div>
    </footer>
  )
}

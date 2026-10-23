"use client"

import * as React from "react"

import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"
import { DpApp } from "@/components/dp-app"
import { blasts } from "@/data/blasts"

export function DpShell() {
  const [activeId, setActiveId] = React.useState(blasts[0].id)

  return (
    <div className="relative isolate min-h-svh overflow-x-clip">
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute top-1/4 -left-40 h-96 w-96 rounded-full bg-linear-to-br from-primary/20 via-primary-2/15 to-primary-3/10 blur-3xl" />
        <div className="absolute right-0 bottom-1/4 h-80 w-80 rounded-full bg-linear-to-tr from-primary-2/20 to-primary-3/10 blur-3xl" />
        <div className="absolute top-2/3 left-1/3 h-72 w-72 rounded-full bg-linear-to-b from-primary-3/10 to-primary-2/15 blur-3xl" />
      </div>
      <SiteHeader />
      <main>
        <DpApp activeId={activeId} onActiveChange={setActiveId} />
      </main>
      <Footer />
    </div>
  )
}

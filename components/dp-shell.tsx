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
      <SiteHeader />
      <main>
        <DpApp activeId={activeId} onActiveChange={setActiveId} />
      </main>
      <Footer />
    </div>
  )
}

"use client"

import * as React from "react"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { CardHeading } from "@/components/dp/card-heading"
import { useFrameImage } from "@/hooks/use-frame-image"
import { THUMB_SIZE } from "@/lib/dp/config"
import { drawFrame, loadDrawer } from "@/lib/dp/renderer"
import type { FrameId, FramePalette, PhotoTransform } from "@/lib/dp/types"
import { cn } from "@/lib/utils"
import { RiCheckLine } from "@remixicon/react"

const DEFAULT_TRANSFORM: PhotoTransform = { rotation: 0, zoom: 1, x: 0, y: 0 }

function TemplateThumb({
  frame,
  palette,
  selected,
  onSelect,
}: {
  frame: { id: FrameId; name: string }
  palette: FramePalette
  selected: boolean
  onSelect: (id: FrameId) => void
}) {
  const ref = React.useRef<HTMLCanvasElement>(null)
  const frameImage = useFrameImage(frame.id)
  const renderToken = React.useRef(0)

  React.useEffect(() => {
    const token = ++renderToken.current
    const canvas = ref.current
    if (!canvas) return
    canvas.width = THUMB_SIZE
    canvas.height = THUMB_SIZE
    const ctx = canvas.getContext("2d")
    if (!ctx) return
    loadDrawer(frame.id)
      .then((drawer) => {
        if (token !== renderToken.current) return
        drawFrame(
          ctx,
          THUMB_SIZE,
          drawer,
          null,
          palette,
          DEFAULT_TRANSFORM,
          frameImage
        )
      })
      .catch(() => {})
  }, [frame.id, palette, frameImage])

  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={() => onSelect(frame.id)}
      className={cn(
        "surface-raised group/tpl flex flex-col gap-2 rounded-2xl border border-border/70 bg-card p-2 text-left transition-transform duration-200 ease-out outline-none hover:-translate-y-0.5 focus-visible:ring-3 focus-visible:ring-white/25",
        selected && "border-white/60 shadow-neo ring-2 ring-white/15"
      )}
    >
      <span className="relative block overflow-hidden rounded-xl bg-background shadow-neo-inset ring-1 ring-white/20">
        <canvas ref={ref} className="aspect-square w-full" />
        {selected && (
          <span className="absolute top-2 right-2 flex size-5 items-center justify-center bg-linear-to-br from-background via-card to-background text-foreground shadow-md">
            <RiCheckLine className="size-3" />
          </span>
        )}
      </span>
      <span className="flex items-center justify-between gap-2 px-1 pb-1 text-[11px] font-medium text-muted-foreground group-hover/tpl:text-foreground">
        <span className="truncate">{frame.name}</span>
        {selected && (
          <span className="shrink-0 text-[10px] font-semibold tracking-wide text-white uppercase">
            Selected
          </span>
        )}
      </span>
    </button>
  )
}

export function TemplatePicker({
  frames,
  palette,
  selectedId,
  onSelect,
}: {
  frames: ReadonlyArray<{ id: FrameId; name: string }>
  palette: FramePalette
  selectedId: FrameId
  onSelect: (id: FrameId) => void
}) {
  return (
    <Card>
      <CardHeader className="border-b border-border/60 pb-4">
        <CardHeading
          step="01"
          title="Choose a frame"
          description={`${frames.length} official ${
            frames.length === 1 ? "design" : "designs"
          } available`}
        />
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3">
          {frames.map((frame) => (
            <TemplateThumb
              key={frame.id}
              frame={frame}
              palette={palette}
              selected={frame.id === selectedId}
              onSelect={onSelect}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

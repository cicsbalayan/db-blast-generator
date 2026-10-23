"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import type { PointerHandlers } from "@/hooks/use-photo-transform"
import { DOWNLOAD_SIZE, PREVIEW_SIZE } from "@/lib/dp/config"
import {
  RiDownload2Line,
  RiRefreshLine,
  RiRestartLine,
  RiZoomInLine,
  RiZoomOutLine,
} from "@remixicon/react"

export function PreviewPanel({
  previewRef,
  zoom,
  hasAdjustments,
  canDownload,
  handlers,
  onRotate,
  onZoomBy,
  onReset,
  onDownload,
}: {
  previewRef: React.RefObject<HTMLCanvasElement | null>
  zoom: number
  hasAdjustments: boolean
  canDownload: boolean
  handlers: PointerHandlers
  onRotate: () => void
  onZoomBy: (delta: number) => void
  onReset: () => void
  onDownload: () => void
}) {
  return (
    <Card>
      <CardHeader className="flex items-start justify-between gap-3 border-b border-border/60 pb-4">
        <div className="grid gap-0.5">
          <CardTitle>Preview & export</CardTitle>
          <CardDescription>
            Drag to reposition · pinch or use the controls to zoom
          </CardDescription>
        </div>
        <span className="mt-0.5 inline-flex shrink-0 items-center gap-1.5 rounded-full border border-border/60 bg-card surface-raised px-2.5 py-1 text-[10px] font-semibold tracking-wide text-secondary-foreground uppercase shadow-neo-pill">
          <span
            aria-hidden
            className="size-1.5 rounded-full bg-accent shadow-[0_0_0_4px_color-mix(in_srgb,var(--accent)_14%,transparent)]"
          />
          Live
        </span>
      </CardHeader>
      <CardContent>
        <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-2xl bg-foreground ring-1 shadow-neo ring-foreground/15">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-linear-to-b from-[#fff7ed]/10 via-transparent to-[#1a1008]/40"
          />
          <canvas
            ref={previewRef}
            width={PREVIEW_SIZE}
            height={PREVIEW_SIZE}
            onPointerDown={handlers.onPointerDown}
            onPointerMove={handlers.onPointerMove}
            onPointerUp={handlers.onPointerUp}
            onPointerCancel={handlers.onPointerCancel}
            onLostPointerCapture={handlers.onPointerCancel}
            className="relative size-full cursor-grab touch-none select-none active:cursor-grabbing"
            aria-label="Preview. Drag to move the photo, pinch to zoom."
          />
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
          <Button
            variant="outline"
            size="icon"
            aria-label="Rotate photo"
            onClick={onRotate}
          >
            <RiRefreshLine />
          </Button>
          <div className="flex items-center gap-1 rounded-full border border-border/60 bg-card surface-inset p-1 shadow-neo-inset">
            <Button
              variant="ghost"
              size="icon-sm"
              aria-label="Zoom out"
              onClick={() => onZoomBy(-0.1)}
            >
              <RiZoomOutLine />
            </Button>
            <span className="w-12 text-center text-xs font-medium text-muted-foreground tabular-nums">
              {Math.round(zoom * 100)}%
            </span>
            <Button
              variant="ghost"
              size="icon-sm"
              aria-label="Zoom in"
              onClick={() => onZoomBy(0.1)}
            >
              <RiZoomInLine />
            </Button>
          </div>
          <Button
            variant="outline"
            size="icon"
            aria-label="Reset adjustments"
            onClick={onReset}
            disabled={!hasAdjustments}
          >
            <RiRestartLine />
          </Button>
        </div>

        <div className="mt-4 flex flex-col gap-3 border-t border-border/60 pt-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-center sm:text-left">
            <p className="text-xs font-medium text-foreground">
              Square output · {DOWNLOAD_SIZE} × {DOWNLOAD_SIZE} PNG
            </p>
            <p className="mt-0.5 text-[11px] text-muted-foreground">
              {canDownload
                ? "Ready to download in full resolution."
                : "Upload a photo to enable download."}
            </p>
          </div>
          <Button
            size="lg"
            onClick={onDownload}
            disabled={!canDownload}
            className="w-full sm:w-auto"
          >
            <RiDownload2Line data-icon="inline-start" />
            Download DP
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

"use client"

import * as React from "react"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { CardHeading } from "@/components/dp/card-heading"
import { cn } from "@/lib/utils"
import { RiArrowUpLine, RiImageAddLine } from "@remixicon/react"

export function PhotoUploader({
  photoUrl,
  photoName,
  onFile,
}: {
  photoUrl: string | null
  photoName: string | null
  onFile: (file: File | undefined | null) => void
}) {
  const inputRef = React.useRef<HTMLInputElement>(null)
  const [dragging, setDragging] = React.useState(false)

  return (
    <Card>
      <CardHeader className="border-b border-border/60 pb-4">
        <CardHeading
          step="02"
          title="Upload your photo"
          description="A clear, front-facing photo works best."
        />
      </CardHeader>
      <CardContent>
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(event) => {
            onFile(event.target.files?.[0])
            event.target.value = ""
          }}
        />
        <div
          role="button"
          tabIndex={0}
          aria-label="Upload a photo"
          onClick={() => inputRef.current?.click()}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault()
              inputRef.current?.click()
            }
          }}
          onDragOver={(event) => {
            event.preventDefault()
            setDragging(true)
          }}
          onDragLeave={() => setDragging(false)}
          onDrop={(event) => {
            event.preventDefault()
            setDragging(false)
            onFile(event.dataTransfer.files?.[0])
          }}
          className={cn(
            "flex cursor-pointer flex-col items-center justify-center gap-2.5 rounded-xl border border-border/70 bg-card px-6 py-7 text-center shadow-neo-sm transition-all outline-none hover:-translate-y-px hover:shadow-neo focus-visible:ring-3 focus-visible:ring-ring/25",
            dragging && "ring-2 shadow-neo ring-accent/15"
          )}
        >
          {photoUrl ? (
            <div className="flex w-full items-center gap-3 text-left">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photoUrl}
                alt="Selected photo preview"
                className="size-14 shrink-0 rounded-lg object-cover ring-1 shadow-neo-inset ring-border/70"
              />
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-foreground">
                  {photoName}
                </p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  Click or drop another photo to replace it
                </p>
              </div>
              <span className="hidden shrink-0 items-center gap-1.5 rounded-full border border-border/70 bg-card px-2.5 py-1.5 text-[11px] font-medium text-muted-foreground shadow-neo-pill sm:flex">
                <RiArrowUpLine className="size-3" />
                Replace
              </span>
            </div>
          ) : (
            <>
              <span className="flex size-10 items-center justify-center rounded-xl bg-card text-accent-strong ring-1 shadow-neo-sm ring-border/70">
                <RiImageAddLine className="size-5" />
              </span>
              <div>
                <p className="text-sm font-medium text-foreground">
                  Drag & drop your photo here
                </p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  or click to browse · JPG, PNG, or WEBP
                </p>
              </div>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

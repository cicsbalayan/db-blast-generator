import type { FrameId } from "@/lib/dp/types"

export const frameNames: Record<FrameId, string> = {
  cics: "CICS Frame",
  cics2: "CICS Frame 2",
  cet: "CET Frame",
  neon: "Neon Frame",
  orbit: "Orbit Circle",
  ssc: "SSC Frame",
  hex: "Hex Cutout",
  seal: "Engineer Seal",
}

export function frameImageSrc(frameId: FrameId): string | null {
  switch (frameId) {
    case "cics":
      return "/CICS-Frame.png"
    case "cics2":
      return "/CICS-Frame-2.png"
    case "cet":
      return "/CET-Frame.png"
    case "ssc":
      return "/SSC-Frame.png"
    default:
      return null
  }
}

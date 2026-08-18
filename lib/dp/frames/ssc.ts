import { drawPhoto, drawPlaceholderFace, drawVignette } from "@/lib/dp/canvas"
import type { FrameDrawer } from "@/lib/dp/types"

const SSC_WINDOW = {
  x: 249 / 1080,
  y: 250 / 1080,
  w: 576 / 1080,
  h: 573 / 1080,
}

const SSC_COVER = {
  w: 576 / 1080,
  h: 573 / 1080,
}

export const ssc: FrameDrawer = {
  id: "ssc",
  draw(ctx, size, image, _palette, transform, frameImage) {
    const cx = (SSC_WINDOW.x + SSC_WINDOW.w / 2) * size
    const cy = (SSC_WINDOW.y + SSC_WINDOW.h / 2) * size

    ctx.save()
    if (image) {
      drawPhoto(ctx, image, cx, cy, SSC_COVER.w * size, SSC_COVER.h * size, transform)
    } else {
      drawPlaceholderFace(ctx, 0, 0, size, size)
    }
    drawVignette(
      ctx,
      SSC_WINDOW.x * size,
      SSC_WINDOW.y * size,
      SSC_WINDOW.w * size,
      SSC_WINDOW.h * size
    )
    ctx.restore()

    if (frameImage) {
      ctx.drawImage(frameImage, 0, 0, size, size)
    }
  },
}

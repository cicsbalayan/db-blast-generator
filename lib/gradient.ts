export function linearGradient(colors: readonly string[], angle = 135) {
  return `linear-gradient(${angle}deg, ${colors.join(", ")})`
}

/**
 * Returns a translucent version of each color. Using color-mix keeps this
 * helper working with hex, rgb, and oklch values from the palette.
 */
export function translucent(colors: readonly string[], alpha: string | number) {
  const value = typeof alpha === "string" ? Number(alpha) : alpha
  const percent = Math.round(value * 100)
  return colors.map(
    (color) => `color-mix(in srgb, ${color} ${percent}%, transparent)`
  )
}

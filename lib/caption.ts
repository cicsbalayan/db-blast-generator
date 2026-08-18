import { years, type Year } from "@/data/blasts"
import type {
  CaptionBuilder,
  CaptionSource,
  GeneratedCaption,
} from "@/lib/domain/caption"

const YEAR_LABELS: Record<Year, string> = {
  "1": "1st",
  "2": "2nd",
  "3": "3rd",
  "4": "4th",
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;")
}

const BOLD_UPPER_A = 0x1d5d4
const BOLD_LOWER_A = 0x1d5ee
const BOLD_DIGIT_0 = 0x1d7ec

function toUnicodeBold(value: string): string {
  return [...value]
    .map((ch) => {
      const code = ch.charCodeAt(0)
      if (code >= 0x41 && code <= 0x5a)
        return String.fromCodePoint(BOLD_UPPER_A + (code - 0x41))
      if (code >= 0x61 && code <= 0x7a)
        return String.fromCodePoint(BOLD_LOWER_A + (code - 0x61))
      if (code >= 0x30 && code <= 0x39)
        return String.fromCodePoint(BOLD_DIGIT_0 + (code - 0x30))
      return ch
    })
    .join("")
}

function strong(value: string): string {
  return `<strong>${escapeHtml(value)}</strong>`
}

function strongText(value: string): string {
  return toUnicodeBold(value)
}

function applySubstitutions(
  template: string,
  substitutions: ReadonlyArray<readonly [string, string]>,
  bold: boolean | "text"
): string {
  let out = template
  for (const [key, value] of substitutions) {
    const replacement =
      bold === true ? strong(value) : bold === "text" ? strongText(value) : value
    out = out.replaceAll(key, replacement)
  }
  return out
}

export function buildCaption(
  source: CaptionSource,
  name: string,
  year: Year,
  programAbbr: string
): GeneratedCaption {
  const program =
    source.programs.find((p) => p.abbr === programAbbr) ?? source.programs[0]
  const displayName = name.trim() || "[Full Name]"

  const yearly = source.yearly?.[year]
  const title = yearly?.header ?? source.title

  const substitutions: Array<readonly [string, string]> = [
    ["{name}", displayName],
    ["[Full Name]", displayName],
    ["{year}", `${YEAR_LABELS[year]} Year`],
    ["{department}", source.department],
    ["{program}", program.name],
  ]
  const campus = yearly?.campus ?? source.campus
  const event = yearly?.event ?? source.event
  if (campus) substitutions.push(["{campus}", campus])
  if (event) substitutions.push(["{event}", event])

  const template = yearly?.body ?? source.body
  const body = applySubstitutions(template, substitutions, false)
  const bodyText = applySubstitutions(template, substitutions, "text")
  const bodyHtml = applySubstitutions(template, substitutions, true).replaceAll(
    "\n",
    "<br>"
  )

  const hashtags = yearly?.hashtags ?? [...source.hashtags, `#${program.abbr}`]
  const text = `${toUnicodeBold(title)}\n\n${bodyText}\n\n${hashtags.join(" ")}`
  const html = `${strong(title)}<br><br>${bodyHtml}<br><br>${escapeHtml(hashtags.join(" "))}`

  return {
    header: title,
    body,
    bodyHtml,
    hashtags: hashtags.join(" "),
    text,
    html,
  }
}

export const defaultCaptionBuilder: CaptionBuilder = {
  build: buildCaption,
}

export const yearLabel = (year: Year) =>
  years.find((y) => y.value === year)?.label ?? year

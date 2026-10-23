import type { Blast, Program, Year } from "@/lib/domain/blast"

export type {
  Blast,
  BlastId,
  Program,
  Year,
  YearlyCaption,
} from "@/lib/domain/blast"

export const years: Array<{ value: Year; label: string }> = [
  { value: "1", label: "1st" },
  { value: "2", label: "2nd" },
  { value: "3", label: "3rd" },
  { value: "4", label: "4th" },
]

export const sscPrograms: Program[] = [
  { name: "BS in Information Technology", abbr: "BSIT" },
  { name: "Bachelor of Automotive Engineering Technology", abbr: "BAET" },
  {
    name: "Bachelor of Instrumentation and Control Engineering Technology",
    abbr: "BICET",
  },
  { name: "Bachelor of Mechanical Engineering Technology", abbr: "BMET" },
  { name: "Bachelor of Architectural Engineering Technology", abbr: "BARET" },
  { name: "Bachelor of Construction Engineering Technology", abbr: "BCET" },
  { name: "Bachelor of Civil Engineering Technology", abbr: "BCVET" },
  { name: "Bachelor of Electrical Engineering Technology", abbr: "BEET" },
  { name: "Bachelor of Computer Engineering Technology", abbr: "BCPET" },
  { name: "Bachelor of Drafting Engineering Technology", abbr: "BDET" },
  { name: "Bachelor of Electronics Engineering Technology", abbr: "BECET" },
]

export const blasts: Blast[] = [
  {
    id: "ssc",
    label: "SSC",
    name: "Supreme Student Council",
    title: "Mental Health Awareness Month",
    description:
      "The Supreme Student Council, in partnership with the Office of Guidance and Counseling, stands with you for Mental Health Awareness Month.",
    gradient: ["#F4AE52", "#D4621A", "#B24E0F"],
    glow: "rgb(212 98 26 / 0.35)",
    frames: ["ssc"],
    department: "Supreme Student Council",
    campus: "Batangas State University – TNEU Balayan Campus",
    event: "Mental Health Awareness Month",
    programs: sscPrograms,
    body: "🌸 𝗘𝗩𝗘𝗥𝗬 𝗠𝗜𝗡𝗗 𝗛𝗔𝗦 𝗜𝗧𝗦 𝗢𝗪𝗡 𝗠𝗔𝗚𝗜𝗖! ✨\n\nJust like the Madrigals, we all have our own stories and struggles. This Mental Health Awareness Month, remember that you don’t need a special gift to be special, and you don’t have to be strong all the time to be enough. 💚\n\nLet’s break the stigma, spread kindness, and remind everyone that *you are more than your struggles—you are enough, just as you are.* 🦋🌿",
    hashtags: [
      "#MentalHealthAwarenessMonth",
      "#MentalHealthMatters",
      "#YouAreEnough",
      "#SSCBalayan",
      "#BatStateUBalayan",
    ],
  },
]

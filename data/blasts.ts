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
    title: "It's time to be ElevatEd",
    description:
      "The Supreme Student Council welcomes you to a new academic year — shine on your socials with the official SSC display picture.",
    gradient: ["#F4AE52", "#D4621A", "#B24E0F"],
    glow: "rgb(212 98 26 / 0.35)",
    frames: ["ssc"],
    department: "Supreme Student Council",
    campus: "Batangas State University – TNEU Balayan Campus",
    event: "ElevatEd 3.0: Freshmen Orientation & Old Student Reorientation",
    programs: sscPrograms,
    body: "Hello, I am {name}, a {year} {program} student at {campus}.\n\nTo be elevated is to rise beyond the ordinary—to learn, grow, discover, and transform. Through {event}, we are invited to broaden our perspectives, strengthen our aspirations, deepen our knowledge, and find purpose as we begin a new chapter of our academic journey. \n\nMay this encourage us to embrace growth, pursue excellence, and elevate our potential, carrying the values and experiences as we move forward with purpose.\n\n𝗚𝗲𝘁 𝗶𝗻𝗳𝗼𝗿𝗺𝗲𝗱. 𝗚𝗲𝘁 𝗰𝗼𝗻𝗻𝗲𝗰𝘁𝗲𝗱. 𝗚𝗲𝘁 𝗘𝗟𝗘𝗩𝗔𝗧𝗘𝗗.",
    hashtags: ["#Elevated3.0", "#SSCBalayan", "#BatStateUBalayan"],
  },
]

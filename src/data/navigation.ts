import type { SectionNode, RouteCard } from "@/types/portfolio";

// The abstract side-rail map. Order === scroll order on the home experience.
// Each id matches a section anchor id in the DOM.
export const sectionNodes: SectionNode[] = [
  { id: "home", index: "01", label: "HOME", hint: "the front door" },
  { id: "story", index: "02", label: "STORY", hint: "how i got here" },
  { id: "playground", index: "03", label: "ME", hint: "who is arteja" },
  { id: "about", index: "04", label: "ABOUT", hint: "beyond the stack" },
  { id: "stack", index: "05", label: "STACK", hint: "what i build with" },
  { id: "credentials", index: "06", label: "CREDS", hint: "the receipts" },
  { id: "work", index: "07", label: "BUILD", hint: "things i shipped" },
  { id: "ai", index: "08", label: "AI", hint: "the evolution" },
  { id: "teach", index: "09", label: "TEACH", hint: "knowledge travels" },
  { id: "impact", index: "10", label: "IMPACT", hint: "build people too" },
  { id: "connections", index: "11", label: "NETWORK", hint: "connecting people" },
  { id: "world", index: "12", label: "WORLD", hint: "building globally" },
  { id: "opportunity", index: "13", label: "BUILD?", hint: "what should we build" },
  { id: "contact", index: "14", label: "PING", hint: "open a connection" },
];

// Legacy route pages still exist for deep links + SEO; they reuse home sections.
export const routeCards: RouteCard[] = [
  { href: "/work", label: "Work", kicker: "BUILD", description: "Projects, case studies, and the parts that almost broke me." },
  { href: "/ai", label: "AI", kicker: "INTELLIGENCE", description: "Analysis, governance, security, responsible implementation." },
  { href: "/leadership", label: "Leadership", kicker: "LEAD", description: "Direction, architecture, product decisions, mentorship." },
  { href: "/teach", label: "Teach", kicker: "EDUCATION", description: "Lessons, workshops, onboarding, developer education." },
  { href: "/impact", label: "Impact", kicker: "COMMUNITY", description: "Access, mentorship, and technology for more people." },
  { href: "/world", label: "World", kicker: "GLOBAL", description: "Remote collaboration and cross-border technology." },
  { href: "/about", label: "About", kicker: "STORY", description: "The thinking behind the building, teaching, and connecting." },
  { href: "/credentials", label: "Credentials", kicker: "TRUST", description: "A structured credential library ready for verified detail." },
  { href: "/resume", label: "Resume", kicker: "PROFILE", description: "Professional snapshot, ready for verified detail." },
  { href: "/contact", label: "Contact", kicker: "CONNECT", description: "Hiring, building, teaching, and ridiculous ideas welcome." },
];

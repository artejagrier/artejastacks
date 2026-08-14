// Barrel re-export. Keeps a single import surface and backward compatibility
// for any module importing from "@/data/portfolio".
export { profile, socialLinks } from "./profile";
export { sectionNodes, routeCards } from "./navigation";
export { storyChapters } from "./story";
export { projects } from "./projects";
export { technologies, techCategories } from "./technologies";
export { teachingTopics, teachingPhilosophy } from "./teaching";
export { jokes, bugSong, scrollSurprises, fullStackReveal } from "./jokes";
export {
  terminalResponses,
  terminalFallback,
  errorToasts,
  konamiCode,
} from "./easter-eggs";
export {
  thisOrThat,
  brainTabs,
  currently,
  techPersonality,
  buildRoles,
  buildEnvironments,
  buildProblems,
  buildResult,
} from "./playground";
export { opportunities, contactReasons, availability } from "./opportunities";
export { connectionNodes, connectionCenter, impactAreas, globalWork } from "./connections";
export { aiAreas, aiLabSections, aiPhilosophy, askPrompts, askReplies, askFallback } from "./ai";
export { credentials, leadershipAreas } from "./credentials";
export { accentHex, accentVar } from "./accents";

// Legacy alias used by older nav; the real map is sectionNodes.
export const navItems = [
  { label: "BUILD", href: "/work" },
  { label: "AI", href: "/ai" },
  { label: "TEACH", href: "/teach" },
  { label: "IMPACT", href: "/impact" },
  { label: "WORLD", href: "/world" },
  { label: "ABOUT", href: "/about" },
];

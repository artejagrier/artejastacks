import type { Opportunity } from "@/types/portfolio";

export const opportunities: Opportunity[] = [
  {
    key: "hire",
    title: "HIRE ME",
    eyebrow: "You have a team.",
    audience: "I have approximately 47 ideas.",
    description: "For employment, engineering teams, AI roles, and technology leadership.",
    bullets: ["Remote software engineering", "Full-stack product work", "AI analysis & governance", "Technical leadership"],
    accent: "violet",
  },
  {
    key: "build",
    title: "BUILD WITH ME",
    eyebrow: "You have an idea.",
    audience: "Let's make it exist.",
    description: "For startups, founders, organizations, products, consulting, and large projects.",
    bullets: ["Product from concept to foundation", "Community & organizational platforms", "AI-enabled workflows", "Cross-border technology"],
    accent: "emerald",
  },
  {
    key: "learn",
    title: "LEARN WITH ME",
    eyebrow: "You want to understand it.",
    audience: "Technology is significantly less scary once somebody explains it properly.",
    description: "For training, teaching, workshops, developer education, and technical onboarding.",
    bullets: ["Full-stack curriculum", "Beginner & career-changer friendly", "Team onboarding", "Workshops"],
    accent: "orange",
  },
];

// Contact reasons for the playful-but-professional form.
export const contactReasons = [
  "I want to hire you",
  "I have a project",
  "I want training",
  "I want to collaborate",
  "I have a ridiculous idea",
  "Other",
];

export const availability = [
  "Remote Software Engineering",
  "Full Stack Development",
  "AI Analysis",
  "AI Implementation",
  "AI Governance & Security",
  "Technical Leadership",
  "Technical Training",
  "Consulting",
  "Product Development",
  "Community Technology",
  "Global / Distributed Projects",
];

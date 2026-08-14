// Central profile facts. Everything the site says about Arteja in prose lives
// here or is marked as a placeholder. Nothing invented — titles, availability,
// and location wording are the ones Arteja supplied.

export const profile = {
  brand: "ARTEJA//STACKS",
  name: "Arteja",
  domain: "artejastacks.com",

  roles: [
    "FULL STACK DEVELOPER",
    "SOFTWARE ENGINEER",
    "AI ANALYST",
    "TECHNOLOGY LEADER",
    "TECHNICAL EDUCATOR",
  ],

  tagline: "Software × AI × People × Possibility",

  headline: ["I BUILD THINGS", "THE INTERNET DIDN'T", "KNOW IT NEEDED."],

  intro:
    "I build digital products, explore emerging technology, teach people how to create with it, and occasionally argue with my backend until it apologizes.",

  availabilityLabel: "AVAILABLE FOR BIG IDEAS",
  locationLine: "Based abroad. Building globally.",

  // Education — stated exactly as ongoing, never as completed degrees.
  education: {
    current:
      "Pursuing a bachelor's degree in Software Engineering at WGU, with plans to continue into graduate-level study.",
    isPlaceholder: false,
  },
} as const;

export const socialLinks: { label: string; href: string; isPlaceholder?: boolean }[] = [
  { label: "Email", href: "mailto:hello@artejastacks.com", isPlaceholder: true },
];

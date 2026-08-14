import type { Project } from "@/types/portfolio";

// Recent, real, shipped work. Descriptions are honest and editable — no invented
// statistics, results, clients, or stacks that weren't confirmed. Deeper
// case-study fields (architecture / challenge / fix) are intentionally left off
// until Arteja supplies verified detail, so nothing false is asserted.
export const projects: Project[] = [
  {
    slug: "one-step-forward-foundation",
    title: "One Step Forward Foundation",
    category: "community",
    summary:
      "A digital home for a nonprofit foundation — built to make its mission, work, and ways to get involved clear and welcoming.",
    problem:
      "A mission-driven organization needs a clear, trustworthy web presence so the right people can understand its work and take the next step.",
    built:
      "A responsive website presenting the foundation's mission and programs, designed to be easy to navigate and approachable for newcomers.",
    why: "Community organizations deserve thoughtful, modern technology as much as any product company.",
    role: "Developer",
    stack: ["Web Development", "Responsive Design", "Frontend"],
    liveUrl: "https://onestepforwardfoundation.org",
    featured: true,
    year: "Live",
    accent: "emerald",
    imageLabel: "One Step Forward Foundation",
    isPlaceholder: false,
  },
  {
    slug: "move-to-kenya",
    title: "Move To Kenya",
    category: "community",
    summary:
      "An international platform that helps people navigate relocating to and settling in Kenya.",
    problem:
      "Moving to another country is overwhelming; people need clear, organized information and guidance gathered in one place.",
    built:
      "A content-rich platform that organizes the information and steps around relocating to Kenya into something approachable.",
    why: "Cross-border moves are hard enough without the information being scattered everywhere.",
    role: "Developer",
    stack: ["Web Development", "Content Platform", "Responsive Design"],
    liveUrl: "https://movetokenya.org",
    featured: false,
    year: "Live",
    accent: "cyan",
    imageLabel: "Move To Kenya",
    isPlaceholder: false,
  },
  {
    slug: "tandoori-international-club",
    title: "Tandoori International Club",
    category: "client",
    summary:
      "A web experience for a hospitality and entertainment club — atmosphere first, information close behind.",
    problem:
      "A hospitality venue needs an online presence that conveys its atmosphere and makes the key details easy to find.",
    built:
      "A web experience presenting the club's identity and offerings in a way that reflects its vibe.",
    why: "For hospitality and entertainment, the website is part of the experience.",
    role: "Developer",
    stack: ["Web Development", "Frontend", "Responsive Design"],
    liveUrl: "https://tandoori-international-club-git-main-artejas-projects.vercel.app/",
    featured: false,
    year: "Live",
    accent: "pink",
    imageLabel: "Tandoori International Club",
    isPlaceholder: false,
  },
];

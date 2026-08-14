import type { Technology } from "@/types/portfolio";

// The Stack Playground graph. Comfort is described in words — no fake %.
export const technologies: Technology[] = [
  { id: "nextjs", name: "Next.js", category: "frontend", accent: "violet", use: "My default for real products — App Router, server components, routing, the whole spine.", related: ["react", "typescript", "vercel"], comfort: "Home turf. This site runs on it." },
  { id: "react", name: "React", category: "frontend", accent: "cyan", use: "Component thinking, state that stays close to where it's used, UI that reflects real data.", related: ["nextjs", "typescript"], comfort: "Very comfortable — my daily language for interfaces." },
  { id: "typescript", name: "TypeScript", category: "frontend", accent: "blue", use: "Types as a design tool — the data layer of this whole site is typed first.", related: ["react", "nextjs", "node"], comfort: "Strict mode, on purpose." },
  { id: "tailwind", name: "Tailwind CSS", category: "frontend", accent: "cyan", use: "Fast, consistent styling — paired here with hand-written CSS for the art direction.", related: ["react", "nextjs"], comfort: "Comfortable for shipping quickly." },
  { id: "html", name: "HTML", category: "frontend", accent: "orange", use: "Semantic structure first — the thing screen readers and search engines actually read.", related: ["css"], comfort: "Fundamentals I teach on purpose." },
  { id: "css", name: "CSS", category: "frontend", accent: "pink", use: "Layout, rhythm, motion — product feeling made visible.", related: ["html", "tailwind"], comfort: "I hand-wrote the animation system on this page." },

  { id: "node", name: "Node.js", category: "backend", accent: "lime", use: "Server-side logic, route handlers, and the glue between systems.", related: ["typescript", "api"], comfort: "Comfortable across the request lifecycle." },
  { id: "api", name: "APIs", category: "backend", accent: "emerald", use: "Contracts between systems — clear inputs, outputs, failure states, trust boundaries.", related: ["node", "postgres"], comfort: "I think in contracts before code." },

  { id: "postgres", name: "PostgreSQL", category: "database", accent: "blue", use: "A source of truth modeled for the queries real products actually run.", related: ["api", "supabase"], comfort: "Comfortable with relational modeling." },
  { id: "supabase", name: "Supabase", category: "database", accent: "emerald", use: "Postgres plus auth and storage when a project needs to move fast.", related: ["postgres", "nextjs"], comfort: "A reach-for-it tool for products." },

  { id: "ai-analysis", name: "AI Analysis", category: "ai", accent: "pink", use: "Understanding what a task needs, what the risk is, and what decision the human still owns.", related: ["llm", "governance"], comfort: "A core area of focus." },
  { id: "llm", name: "LLM Applications", category: "ai", accent: "violet", use: "Building with language models — prompts, structure, guardrails, review steps.", related: ["ai-analysis", "prompt"], comfort: "Active, ongoing work." },
  { id: "prompt", name: "Prompt Engineering", category: "ai", accent: "yellow", use: "Getting reliable, structured output that's safe to act on.", related: ["llm"], comfort: "Practical and daily." },

  { id: "governance", name: "AI Governance", category: "security", accent: "emerald", use: "How AI should be implemented, governed, and used responsibly.", related: ["ai-analysis", "security"], comfort: "A serious interest, studied deliberately." },
  { id: "security", name: "Security", category: "security", accent: "red", use: "Asking what can go wrong, who's affected, and how a system should fail safely.", related: ["governance", "api"], comfort: "Rooted in cybersecurity study + 911 discipline." },

  { id: "vercel", name: "Vercel", category: "infra", accent: "violet", use: "Where I deploy — previews, production, and the platform this site lives on.", related: ["nextjs", "github"], comfort: "Comfortable end to end." },
  { id: "github", name: "GitHub", category: "infra", accent: "cyan", use: "Version control, collaboration, and the paper trail of every decision.", related: ["vercel", "git"], comfort: "Second nature." },
  { id: "git", name: "Git", category: "tooling", accent: "orange", use: "Committing to main and occasionally to good ideas.", related: ["github"], comfort: "Committed. (To main.)" },
];

export const techCategories: { key: Technology["category"]; label: string }[] = [
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "database", label: "Database" },
  { key: "ai", label: "AI" },
  { key: "security", label: "Security" },
  { key: "infra", label: "Infrastructure" },
  { key: "tooling", label: "Tooling" },
];

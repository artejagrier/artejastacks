import type {
  ThisOrThat,
  BrainTab,
  CurrentlyItem,
  StatBar,
  BuildOption,
} from "@/types/portfolio";

// "Okay, but who is Arteja?" — the playground data. Everything here is editable
// so Arteja can personalize. Placeholder answers are noted inline.

export const thisOrThat: ThisOrThat[] = [
  { left: "Frontend", right: "Backend", answer: "Full Stack. Don't make me choose my children." },
  { left: "Build", right: "Debug", answer: "Build. Then accidentally debug." },
  { left: "Coffee", right: "Energy Drink", answer: "Answer pending — Arteja will settle this personally." },
  { left: "Remote", right: "Office", answer: "Remote. Frfr. My office is wherever the Wi-Fi behaves. Distributed teams > commute." },
  { left: "AI", right: "Traditional Dev", answer: "Why are we pretending they can't work together?" },
  { left: "Tabs", right: "Spaces", answer: "Peace. We're not doing this here." },
];

export const brainTabs: BrainTab[] = [
  { label: "new project idea", thought: "It's 2am. This is definitely a good idea. I will regret nothing.", accent: "violet" },
  { label: "how can AI do this?", thought: "Not 'can it' — 'should it', and 'who checks the output'.", accent: "pink" },
  { label: "why is this API angry?", thought: "It returned 200 with an error inside. We are enemies now.", accent: "red" },
  { label: "community project", thought: "Who's being left out of the room where this gets built?", accent: "emerald" },
  { label: "teach this differently", thought: "If a beginner didn't get it, the explanation was wrong, not them.", accent: "orange" },
  { label: "should I build an app for that?", thought: "Yes. The answer is almost always yes.", accent: "blue" },
  { label: "new framework", thought: "Do I need it, or do I just like new things? …Both.", accent: "cyan" },
  { label: "travel", thought: "My office moves. The deadline doesn't.", accent: "lime" },
  { label: "probably another project", thought: "See tab #1. Recursion is a lifestyle.", accent: "yellow" },
  { label: "what if I built...", thought: "The four most expensive words in my browser history.", accent: "violet" },
  { label: "documentation I definitely read", thought: "Skimmed. Bookmarked. Spiritually absorbed.", accent: "cyan" },
  { label: "backend said no", thought: "So I asked it again, differently, at 3am.", accent: "red" },
  { label: "browser tab 47", thought: "I'm keeping it. It's important. Probably.", accent: "orange" },
];

export const currently: CurrentlyItem[] = [
  { label: "Building", value: "something new", accent: "violet" },
  { label: "Learning", value: "always", accent: "cyan" },
  { label: "Teaching", value: "Full Stack Development", accent: "orange" },
  { label: "Exploring", value: "AI", accent: "pink" },
  { label: "Location", value: "abroad", accent: "emerald" },
  { label: "Availability", value: "open", accent: "lime" },
  { label: "Bugs", value: "absolutely", accent: "red" },
];

// Explicitly non-scientific. The UI says so out loud.
export const techPersonality: StatBar[] = [
  { label: "CURIOSITY", value: 100, accent: "violet" },
  { label: "BUILD IT MYSELF", value: 100, accent: "emerald" },
  { label: "ASK \"WHY?\"", value: 100, accent: "blue" },
  { label: "SLEEP", value: 31, accent: "red" },
  { label: "COMMUNITY", value: 100, accent: "orange" },
  { label: "OPEN TABS", value: "ERROR", accent: "pink" },
];

// Build-a-version-of-Arteja configurator.
export const buildRoles: BuildOption[] = [
  { key: "developer", label: "Developer" },
  { key: "teacher", label: "Teacher" },
  { key: "analyst", label: "AI Analyst" },
  { key: "cto", label: "CTO" },
];

export const buildEnvironments: BuildOption[] = [
  { key: "startup", label: "Startup" },
  { key: "community", label: "Community" },
  { key: "classroom", label: "Classroom" },
  { key: "bigproject", label: "Big Project" },
];

export const buildProblems: BuildOption[] = [
  { key: "build", label: "Build" },
  { key: "fix", label: "Fix" },
  { key: "teach", label: "Teach" },
  { key: "analyze", label: "Analyze" },
  { key: "architect", label: "Architect" },
];

export const buildCoffee: BuildOption[] = [
  { key: "hazelnut", label: "Hazelnut" },
  { key: "peppermint", label: "Peppermint Mocha" },
  { key: "caramel", label: "Caramel Frappuccino" },
  { key: "macchiato", label: "Macchiato" },
];

// Tiny result modifier based on coffee choice.
const coffeeModifier: Record<string, string> = {
  hazelnut: "system status: cozy but productive",
  peppermint: "seasonal boost detected",
  caramel: "frontend energy +12",
  macchiato: "architecture mode engaged",
};

// Playful local result generator (no AI needed).
export function buildResult(role: string, env: string, problem: string, coffee: string): string {
  const roleLine: Record<string, string> = {
    developer: "a developer who reads the docs and then argues with them",
    teacher: "a teacher who makes the scary part feel obvious",
    analyst: "an AI analyst who asks 'but should it?' before 'can it?'",
    cto: "a CTO who still refuses to stop writing code",
  };
  const envLine: Record<string, string> = {
    startup: "in a startup that needed it shipped yesterday",
    community: "for a community that the market forgot",
    classroom: "in a classroom full of future builders",
    bigproject: "on a project big enough to have its own weather",
  };
  const problemLine: Record<string, string> = {
    build: "and builds it from nothing",
    fix: "and fixes what everyone else gave up on",
    teach: "and teaches five people to do it too",
    analyze: "and figures out what the data is actually saying",
    architect: "and draws the system before laying a single brick",
  };
  const coffeeLabel = buildCoffee.find((c) => c.key === coffee)?.label ?? "";
  const fuel = coffeeModifier[coffee] ? ` Fuel: ${coffeeLabel} — ${coffeeModifier[coffee]}.` : "";
  return `You summoned ${roleLine[role]} ${envLine[env]} — ${problemLine[problem]}.${fuel} Estimated new ideas generated in the process: 47.`;
}

// ---------------------------------------------------------------------------
// ArtejaStacks type system
// Everything the interactive world renders is typed here so real content can
// replace placeholders without touching components. Placeholders are marked
// with `isPlaceholder: true` so nothing false is ever presented as fact.
// ---------------------------------------------------------------------------

export type Placeholder = {
  /** When true, the UI labels this as awaiting verified content. */
  isPlaceholder?: boolean;
};

// --- Navigation / section map (the abstract side rail) ---------------------

export type SectionNode = {
  id: string;
  index: string; // "01", "02", ...
  label: string;
  hint?: string;
};

// --- Projects --------------------------------------------------------------

export type ProjectCategory =
  | "full-stack"
  | "frontend"
  | "backend"
  | "ai"
  | "community"
  | "client";

export type ArchitectureNode = {
  id: string;
  label: string;
  role: string; // what this node does, shown on click
  accent?: AccentKey;
};

export type Project = Placeholder & {
  slug: string;
  title: string;
  category: ProjectCategory;
  /** One-line hook. */
  summary: string;
  problem: string;
  built: string;
  why: string;
  role: string;
  stack: string[];
  architecture?: ArchitectureNode[];
  security?: string;
  challenge?: string; // "The part that almost broke me"
  fix?: string; // "The fix"
  learned?: string;
  liveUrl?: string;
  githubUrl?: string;
  caseStudyUrl?: string;
  featured: boolean;
  year: string;
  accent: AccentKey;
  imageLabel: string;
  /** Local screenshot in /public for the browser-frame preview. Omit until a
   *  real screenshot exists — never fabricate one. */
  previewImage?: string;
};

// --- Story chapters --------------------------------------------------------

export type StoryScene =
  | "browser-assembles"
  | "dispatch"
  | "stacking"
  | "shipping"
  | "classroom"
  | "neural"
  | "converge";

export type StoryChapter = {
  id: string;
  index: string;
  era: string; // large treatment, e.g. "HIGH SCHOOL"
  headline: string;
  body: string[];
  punch?: string; // small closing line / joke
  scene: StoryScene;
  accent: AccentKey;
};

// --- Technologies ----------------------------------------------------------

export type TechCategory =
  | "frontend"
  | "backend"
  | "database"
  | "ai"
  | "security"
  | "infra"
  | "tooling";

export type Technology = {
  id: string;
  name: string;
  category: TechCategory;
  accent: AccentKey;
  /** What Arteja uses it for. */
  use: string;
  /** Related technology ids for the graph. */
  related: string[];
  /** Comfort described in words — never a fake percentage. */
  comfort: string;
};

// --- Teaching --------------------------------------------------------------

export type TeachingTopic = {
  key: string;
  label: string;
  accent: AccentKey;
  oneLiner: string;
  lesson: string;
};

// --- Credentials -----------------------------------------------------------

export type Credential = Placeholder & {
  name: string;
  /** Optional so a real cert without a supplied issuer isn't given a fake one. */
  issuer?: string;
  credentialId?: string;
  issueDate?: string;
  expiration?: string;
  verificationUrl?: string;
  /** Freeform display category (e.g. "Data / Analytics"). */
  category: string;
  /** Coarse grouping/accent for the interactive grid. */
  group?: "Cybersecurity" | "IT" | "Data" | "AI";
  accent?: AccentKey;
  status?: string;
  /** Areas the credential validates — kept reasonable, never exaggerated. */
  skills?: string[];
};

// --- Opportunities ---------------------------------------------------------

export type Opportunity = {
  key: string;
  title: string;
  eyebrow: string;
  audience: string;
  description: string;
  bullets: string[];
  accent: AccentKey;
};

// --- Playground ------------------------------------------------------------

export type ThisOrThat = {
  left: string;
  right: string;
  answer: string;
};

export type BrainTab = {
  label: string;
  thought: string;
  accent: AccentKey;
};

export type CurrentlyItem = {
  label: string;
  value: string;
  accent: AccentKey;
};

export type StatBar = {
  label: string;
  /** 0–100, or the literal string "ERROR" for the joke bars. */
  value: number | "ERROR";
  accent: AccentKey;
};

export type BuildOption = {
  key: string;
  label: string;
};

// --- Connections -----------------------------------------------------------

export type ConnectionNode = {
  id: string;
  label: string;
  accent: AccentKey;
  /** Position on the SVG canvas, 0–100 percent. */
  x: number;
  y: number;
  /** Detail panel content revealed on hover (preview) / click (locked). */
  headline?: string;
  description?: string;
  /** "How I connect" — types of work in this space. */
  how?: string[];
  /** Optional playful microcopy line. */
  micro?: string;
};

// --- Ask Arteja ------------------------------------------------------------

export type AskReply = {
  prompt: string;
  reply: string;
};

// --- Routes ----------------------------------------------------------------

export type RouteCard = {
  href: string;
  label: string;
  kicker: string;
  description: string;
};

// --- Color system ----------------------------------------------------------

export type AccentKey =
  | "violet"
  | "emerald"
  | "blue"
  | "pink"
  | "orange"
  | "yellow"
  | "lime"
  | "cyan"
  | "red";

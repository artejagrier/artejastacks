import type { AskReply } from "@/types/portfolio";

// AI Lab areas + the Ask Arteja local mock. The assistant is explicitly a local
// mock — no backend is connected. Replies never invent facts.

export const aiAreas = [
  "AI Analysis",
  "AI Governance",
  "AI Security",
  "Responsible AI",
  "Generative AI",
  "AI Implementation",
  "AI-Assisted Development",
  "LLM Applications",
  "AI Workflows",
  "Emerging Technology",
];

export const aiLabSections = [
  { key: "experiments", label: "EXPERIMENTS", body: "Small, self-contained things I try to understand a capability.", accent: "violet" as const },
  { key: "workflows", label: "AI WORKFLOWS", body: "Human-in-the-loop pipelines where the model is one component.", accent: "pink" as const },
  { key: "analysis", label: "AI ANALYSIS", body: "What a task really needs, what the risk is, what the data says.", accent: "blue" as const },
  { key: "governance", label: "GOVERNANCE", body: "How AI should be implemented, reviewed, and kept accountable.", accent: "emerald" as const },
  { key: "security", label: "SECURITY", body: "Where AI systems break, leak, or get manipulated — and how to prevent it.", accent: "red" as const },
  { key: "automations", label: "AUTOMATIONS", body: "The boring, repeatable work AI can carry — responsibly.", accent: "orange" as const },
  { key: "prototypes", label: "PROTOTYPES", body: "Rougher builds testing whether an idea is worth finishing.", accent: "cyan" as const },
  { key: "thoughts", label: "THOUGHTS", body: "Notes on where this is all going, and how to build for it.", accent: "yellow" as const },
];

export const aiPhilosophy = ["DON'T FEAR THE EVOLUTION.", "LEARN HOW TO BUILD WITH IT."];

export const askPrompts = [
  "Why should we hire Arteja?",
  "What's her strongest project?",
  "Tell me something unexpected about her.",
  "What does she know about AI?",
  "Can she teach?",
  "What has she built?",
  "Is she available?",
  "What does she care about?",
];

export const askReplies: AskReply[] = [
  { prompt: "Why should we hire Arteja?", reply: "Because she's a rare stack: software engineer, AI analyst, technology leader, and teacher — who ships, explains, and cares who's in the room. She turns learning into building and building into other people's ability to build. (This is a local mock; the real assistant will connect to verified data later.)" },
  { prompt: "What's her strongest project?", reply: "The flagship case study slot in Build is reserved for it — real names, links, and the-part-that-almost-broke-me detail land there once verified. For now, notice how this site itself is the demo." },
  { prompt: "Tell me something unexpected about her.", reply: "She was an emergency 911 first responder while studying cybersecurity and full-stack development. Calm under pressure isn't a résumé line for her — it's a habit. Also: her toxic trait is 'I'll just build it myself.'" },
  { prompt: "What does she know about AI?", reply: "She works across AI analysis, governance, security, responsible implementation, generative AI, LLM applications, and AI-assisted development. Her lens: not just what AI can do, but how it should be implemented, governed, secured, and used." },
  { prompt: "Can she teach?", reply: "Yes — Full Stack Development, to beginners, children, career changers, and people breaking into tech. Her rule: if a beginner didn't get it, the explanation was wrong, not them." },
  { prompt: "What has she built?", reply: "Websites, web applications, business platforms, organizational and community technology, and international projects — including celebrity-related website work. Verified names and links are coming to Build." },
  { prompt: "Is she available?", reply: "Available for big ideas — employment, engineering teams, AI roles, technology leadership, building with founders, and teaching. Based abroad, building globally." },
  { prompt: "What does she care about?", reply: "Building people, not just products. Access to the rooms where technology gets made. Connecting developers, founders, students, and communities. And refusing to fear the evolution — learning to build with it instead." },
];

export const askFallback =
  "That's a great question for the real Arteja. This is a local mock with a fixed set of answers for now — try one of the suggested prompts, or open a connection from the Ping section.";

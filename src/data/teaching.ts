import type { TeachingTopic } from "@/types/portfolio";

// Tiny lessons for the interactive classroom. Each is a real, useful nugget.
export const teachingTopics: TeachingTopic[] = [
  {
    key: "html",
    label: "HTML",
    accent: "orange",
    oneLiner: "The skeleton.",
    lesson:
      "HTML is the structure of the web. Use semantic elements — <nav>, <main>, <button> — so people, browsers, and assistive tech all understand the page. Divs can't do that for you.",
  },
  {
    key: "css",
    label: "CSS",
    accent: "pink",
    oneLiner: "The style.",
    lesson:
      "CSS is product feeling made visible: layout, rhythm, hierarchy, motion. Learn the box model and flow first — most 'CSS is hard' moments are really 'I don't know why this element is where it is' moments.",
  },
  {
    key: "javascript",
    label: "JAVASCRIPT",
    accent: "yellow",
    oneLiner: "The behavior.",
    lesson:
      "JavaScript turns an interface into a conversation. Start with state, events, and clear data flow before reaching for frameworks. If you can explain what data changed and why the UI updated, you understand it.",
  },
  {
    key: "react",
    label: "REACT",
    accent: "cyan",
    oneLiner: "Components.",
    lesson:
      "React is strongest when each component has one clear job, state lives close to where it's used, and the UI is just a function of your data. When something feels tangled, you usually have state in the wrong place.",
  },
  {
    key: "backend",
    label: "BACKEND",
    accent: "lime",
    oneLiner: "The engine.",
    lesson:
      "The backend is where trust lives. Never trust input, always plan for failure, and design your data before your endpoints. The frontend can lie; the backend cannot afford to.",
  },
  {
    key: "databases",
    label: "DATABASES",
    accent: "blue",
    oneLiner: "The memory.",
    lesson:
      "A database is your app's memory. Model the real relationships between things first, and let your queries follow. A clean schema makes hard features easy; a messy one makes easy features hard.",
  },
  {
    key: "apis",
    label: "APIs",
    accent: "emerald",
    oneLiner: "The handshake.",
    lesson:
      "An API is a contract between systems. Be explicit about inputs, outputs, and what happens when things go wrong. Good API design is mostly good manners: say what you'll do, then do exactly that.",
  },
  {
    key: "ai",
    label: "AI",
    accent: "violet",
    oneLiner: "The new tool.",
    lesson:
      "Useful AI starts with the task, the data, the risk, and the human decision it supports — the model is only one part of the system. Learn to ask 'should it?' as fast as you ask 'can it?', and never ship output you can't check.",
  },
  {
    key: "cybersecurity",
    label: "CYBERSECURITY",
    accent: "red",
    oneLiner: "The mindset.",
    lesson:
      "Security isn't a final checklist — it's a habit of asking what can go wrong, who's affected, and how the system should fail safely. Never trust input, assume things will break, and design for the bad day, not just the demo.",
  },
];

export const teachingPhilosophy = {
  lead: "Knowledge should travel.",
  audiences: [
    "beginners",
    "children learning technology",
    "career changers",
    "people breaking into tech",
    "frontend learners",
    "backend learners",
    "modern software learners",
  ],
};

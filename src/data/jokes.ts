// Original full-stack humor. Used sparingly across the site to reward
// exploration. Each is a { setup, punch } so components can style them.
export type Joke = { setup: string; punch: string };

export const jokes: Joke[] = [
  { setup: "Frontend says it's the backend.", punch: "Backend says it's definitely the frontend. I am unfortunately both." },
  { setup: "Current relationship status:", punch: "committed — to main." },
  { setup: "My toxic trait:", punch: "\"I'll just build it myself.\"" },
  { setup: "404", punch: "Free time not found." },
  { setup: "git status", punch: "still building." },
  { setup: "Production", punch: "It worked locally." },
];

// The bug-counting easter line, rendered one number at a time.
export const bugSong = {
  start: 99,
  line: (n: number) => `${n} little bugs in the code…`,
  takeDown: (n: number) => `Take one down, patch it around — ${n} little bugs in the code.`,
};

// Scroll-surprise text swaps (large type that changes as you pass it).
export const scrollSurprises = [
  { before: "I LOVE FRONTEND.", after: "…UNTIL SAFARI GETS INVOLVED." },
  { before: "IT WORKS ON MY MACHINE.", after: "SO I'LL SHIP MY MACHINE." },
];

// The "accidentally full stack" progression.
export const fullStackReveal = [
  "A frontend appears.",
  "CSS joins it.",
  "A backend wakes up.",
  "A database connects.",
  "Congratulations — you have accidentally become full stack.",
];

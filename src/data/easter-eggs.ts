// Hidden terminal command responses + error-toast lines.
// Triggered from the ⌘K / terminal surface and the floating bug.

export const terminalResponses: Record<string, string[]> = {
  "sudo hire arteja": ["Excellent decision.", "Opening contact…"],
  whoami: ["builder. teacher. traveler. technologist. human."],
  pwd: ["/somewhere/building/something"],
  "git status": [
    "On branch: figuring-it-out",
    "Changes not staged for commit: approximately 47 ideas",
    "  (use \"git build\" to make them exist)",
  ],
  ls: ["story/  build/  ai/  teach/  impact/  world/  ideas/  coffee.log"],
  "cat coffee.log": ["ERROR: coffee.log is empty. This explains a lot."],
  help: [
    "try: whoami · pwd · git status · ls · sudo hire arteja · konami",
    "or just type something and see what happens.",
  ],
  konami: ["↑ ↑ ↓ ↓ ← → ← → B A — you already know the code. Try it on the page."],
  clear: ["__CLEAR__"],
};

export const terminalFallback = (cmd: string) =>
  `zsh: command not found: ${cmd} — but I respect the curiosity.`;

// Floating error toast lines — one shows occasionally, click to dismiss.
export const errorToasts = [
  "UnhandledException: Arteja has another idea.",
  "Warning: scope creep detected (by Arteja, intentionally).",
  "TODO: build the thing you just thought of.",
  "Deprecation notice: doing it the boring way.",
];

// Konami code sequence.
export const konamiCode = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

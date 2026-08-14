import type { Credential } from "@/types/portfolio";

// Real certificates supplied by Arteja. Skills reflect the standard, publicly
// documented coverage of each program — reasonable, not exaggerated. No
// credential IDs, dates, URLs, or logos are fabricated; missing fields are
// simply omitted. The AI cert's issuer is intentionally left as pending.
export const credentials: Credential[] = [
  {
    name: "Google Cybersecurity Professional Certificate",
    issuer: "Google",
    category: "Cybersecurity",
    group: "Cybersecurity",
    accent: "red",
    status: "Completed",
    skills: [
      "Cybersecurity Fundamentals",
      "Threat Awareness",
      "Security Operations",
      "Risk",
      "Incident Response",
      "Linux",
      "SQL",
    ],
  },
  {
    name: "Google IT Support Professional Certificate",
    issuer: "Google",
    category: "Information Technology",
    group: "IT",
    accent: "blue",
    status: "Completed",
    skills: [
      "IT Support",
      "Troubleshooting",
      "Networking",
      "Operating Systems",
      "System Administration",
      "Customer Support",
    ],
  },
  {
    name: "Computers and Operating Systems and Security",
    issuer: "Microsoft",
    category: "Information Technology / Security",
    group: "IT",
    accent: "cyan",
    status: "Completed",
    skills: ["Operating Systems", "Computer Fundamentals", "Security Basics", "System Concepts"],
  },
  {
    name: "Google Data Analytics Professional Certificate",
    issuer: "Google",
    category: "Data / Analytics",
    group: "Data",
    accent: "emerald",
    status: "Completed",
    skills: [
      "Data Analysis",
      "Spreadsheets",
      "SQL",
      "Data Visualization",
      "R Programming",
      "Data Cleaning",
    ],
  },
  {
    name: "AI Security & Governance",
    issuer: "Issuer to be added",
    category: "Artificial Intelligence / Governance / Security",
    group: "AI",
    accent: "pink",
    status: "Completed",
    skills: ["AI Governance", "AI Security", "Responsible AI", "Risk & Compliance"],
  },
];

export const leadershipAreas = [
  "Technology strategy",
  "Architecture",
  "Product direction",
  "Technical decision-making",
  "Stakeholder collaboration",
  "Team mentorship",
];

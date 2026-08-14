import type { ConnectionNode } from "@/types/portfolio";

// The network section. Positions are % on a 100×100 SVG viewport, arranged
// loosely around the center node (Arteja).
export const connectionNodes: ConnectionNode[] = [
  {
    id: "developers",
    label: "DEVELOPERS",
    accent: "violet",
    x: 22,
    y: 20,
    headline: "Building is better when knowledge moves both ways.",
    description:
      "I collaborate with developers, troubleshoot alongside them, exchange ideas, review approaches, share resources, and help newer developers understand how the pieces of a full-stack application actually connect.",
    how: [
      "Full Stack Development",
      "Frontend & Backend",
      "Debugging",
      "Architecture Conversations",
      "Developer Mentorship",
      "Technical Collaboration",
    ],
    micro: "Nobody knows everything. That's why we have GitHub.",
  },
  {
    id: "founders",
    label: "FOUNDERS",
    accent: "emerald",
    x: 72,
    y: 16,
    headline: "My favorite question might be: “What are you trying to build?”",
    description:
      "I enjoy working with people who can see a problem, opportunity, or idea before the solution exists. I turn those conversations into architecture, interfaces, workflows, platforms, and products people can actually use.",
    how: [
      "Product Development",
      "Architecture",
      "MVP Development",
      "Technical Strategy",
      "AI Implementation",
      "Full Stack Engineering",
    ],
    micro: "You bring the “what if.” I start opening tabs.",
  },
  {
    id: "students",
    label: "STUDENTS",
    accent: "orange",
    x: 14,
    y: 52,
    headline: "Sometimes the only thing separating someone from tech is somebody saying, “I'll show you.”",
    description:
      "I teach and mentor people who are just beginning, including children and people trying to transition into technology careers. I want students to experience technology as something they can create, not something they are required to simply consume.",
    how: [
      "Beginner Coding",
      "Frontend Development",
      "Backend Development",
      "Full Stack Development",
      "Technical Confidence",
      "Career Exploration",
    ],
  },
  {
    id: "creators",
    label: "CREATORS",
    accent: "pink",
    x: 84,
    y: 44,
    headline: "Creativity and technology were never opposites.",
    description:
      "I love working with creators because technology can extend an idea far beyond the original medium. Websites, platforms, communities, digital experiences, AI, and interactive tools can all become part of someone's creative ecosystem.",
    how: [
      "Digital Experiences",
      "Interactive Websites",
      "Creator Platforms",
      "Branding Through Technology",
      "Web Applications",
      "Emerging Technology",
    ],
  },
  {
    id: "communities",
    label: "COMMUNITIES",
    accent: "lime",
    x: 26,
    y: 82,
    headline: "Technology should reach further than the people already inside tech.",
    description:
      "My work has included helping communities understand digital safety, AI security, computer governance, technology access, and how digital tools can be used more safely and confidently.",
    how: [
      "Digital Safety",
      "AI Security Awareness",
      "Computer Governance",
      "Technical Education",
      "Community Technology",
      "Digital Literacy",
    ],
  },
  {
    id: "nonprofits",
    label: "NONPROFITS",
    accent: "cyan",
    x: 60,
    y: 86,
    headline: "Some of the most important technology isn't built for shareholders.",
    description:
      "I believe organizations serving communities deserve thoughtful, modern technology too. I have worked with mission-driven organizations to strengthen their digital presence, improve access to information, create platforms, and use technology to support real people.",
    how: [
      "Nonprofit Websites",
      "Community Platforms",
      "Digital Infrastructure",
      "Donation Technology",
      "Education",
      "Digital Access",
    ],
  },
  {
    id: "startups",
    label: "STARTUPS",
    accent: "blue",
    x: 88,
    y: 72,
    headline: "Move fast — but maybe keep the database migration reversible.",
    description:
      "Startups need people who are comfortable with ambiguity, iteration, experimentation, technical tradeoffs, and building while the product itself is still evolving.",
    how: [
      "Product Engineering",
      "MVP Architecture",
      "Full Stack Development",
      "Rapid Iteration",
      "Technical Decision Making",
      "AI Integration",
    ],
  },
  {
    id: "educators",
    label: "EDUCATORS",
    accent: "yellow",
    x: 44,
    y: 12,
    headline: "Knowing something is valuable. Knowing how to explain it is a different skill.",
    description:
      "Teaching is a major part of how I participate in technology. I work with beginners, children, career changers, and people trying to understand technology without feeling intimidated by it.",
    how: [
      "Full Stack Instruction",
      "Technical Training",
      "Beginner Education",
      "Software Training",
      "Curriculum Thinking",
      "Mentorship",
    ],
  },
  {
    id: "technologists",
    label: "TECHNOLOGISTS",
    accent: "red",
    x: 8,
    y: 30,
    headline: "I'm interested in the people asking what technology can be.",
    description:
      "My interests reach beyond writing code. I connect with people working across software, infrastructure, cybersecurity, AI, digital transformation, emerging technology, and the systems that make modern technology possible.",
    how: [
      "Emerging Technology",
      "AI",
      "Cybersecurity",
      "Software Engineering",
      "Digital Systems",
      "Technology Strategy",
    ],
  },
];

export const connectionCenter = { id: "arteja", label: "ARTEJA", x: 50, y: 50 };

export const impactAreas = [
  { title: "Teaching", body: "Full-stack development for people who were never handed the map." },
  { title: "Mentorship", body: "Walking alongside people breaking into tech, not just pointing." },
  { title: "Community platforms", body: "Technology built with a community, not just for it." },
  { title: "Nonprofit work", body: "Tools for organizations doing the work that matters." },
  { title: "International organizations", body: "Technology that crosses borders as easily as I do." },
  { title: "Access", body: "Opening the rooms where technology actually gets built." },
];

export const globalWork = [
  "GLOBAL PERSPECTIVE",
  "REMOTE COLLABORATION",
  "CROSS-BORDER TECHNOLOGY",
  "DISTRIBUTED TEAMS",
  "INTERNATIONAL ORGANIZATIONS",
  "BUILDING FROM ANYWHERE",
];

export type SocialLink = {
  label: string;
  value: string;
  href: string;
};

export type FocusArea = {
  title: string;
  description: string;
};

export type FeaturedProject = {
  name: string;
  tag: string;
  summary: string;
  description: string;
  href: string;
  stack: string[];
  highlights: string[];
};

export const portfolio = {
  name: "Govind Gupta",
  handle: "@govindggupta",
  headline:
    "Developer building practical web products with clean interfaces, strong TypeScript foundations, and room for AI-assisted workflows.",
  introduction:
    "Based in Surat, Gujarat. I like shipping interfaces that feel deliberate, readable, and product-minded while keeping the underlying code understandable as the project grows.",
  location: "Surat, Gujarat, India",
  availability:
    "Open to internships, freelance builds, and product-focused developer roles.",
  githubUrl: "https://github.com/govindggupta",
  linkedinUrl: "https://www.linkedin.com/in/govindggupta",
  avatarUrl: "https://github.com/govindggupta.png?size=400",
} as const;

export const quickFacts = [
  {
    label: "Location",
    value: "Surat, Gujarat",
  },
  {
    label: "Build focus",
    value: "AI products, polished UI, and realtime ideas",
  },
  {
    label: "Preferred stack",
    value: "Next.js, TypeScript, Tailwind CSS",
  },
] as const;

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    value: "github.com/govindggupta",
    href: portfolio.githubUrl,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/govindggupta",
    href: portfolio.linkedinUrl,
  },
];

export const aboutParagraphs = [
  "I enjoy building software that feels intentional on the frontend and dependable underneath. Clean hierarchy, careful layout, and understandable code matter to me more than adding noise for its own sake.",
  "A lot of my recent direction sits around AI-assisted interfaces, interactive web products, and systems that stay simple enough to maintain after the first launch. I want the work to feel useful, not merely flashy.",
  "This portfolio is meant to show how I think through product surfaces, structure information, and turn ideas into something shippable. As I add more experience details, the strongest proof will still be the projects themselves.",
];

export const focusAreas: FocusArea[] = [
  {
    title: "AI-assisted products",
    description: "Using models where they improve workflows, not where they just decorate them.",
  },
  {
    title: "Frontend systems",
    description: "Responsive interfaces, sharp information hierarchy, and maintainable UI structure.",
  },
  {
    title: "Full-stack execution",
    description: "Turning product ideas into deployable apps with clear TypeScript-driven foundations.",
  },
];

export const stack = [
  "TypeScript",
  "Next.js",
  "React",
  "Tailwind CSS",
  "Node.js",
  "Python",
  "C++",
  "PostgreSQL",
  "Prisma",
  "Git",
  "Figma",
  "AI tooling",
] as const;

export const featuredProjects: FeaturedProject[] = [
  {
    name: "NextHire",
    tag: "AI Interview Platform",
    summary: "A hiring-oriented product that explores mock interviews, structured feedback, and AI-assisted evaluation flows.",
    description:
      "Built around the idea that interview preparation tools should feel like guided products instead of disconnected prompts. The emphasis is on workflow clarity, candidate feedback, and product polish.",
    href: "https://github.com/govindggupta/NextHire",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "AI"],
    highlights: [
      "Product-style interview workflow",
      "AI-assisted feedback loop",
      "UI built around clarity and flow",
    ],
  },
  {
    name: "Chess",
    tag: "Interactive Web App",
    summary: "A browser-based chess experience focused on interaction quality, gameplay logic, and a controlled interface surface.",
    description:
      "This project reflects an interest in building interfaces where state, user feedback, and interaction rules all matter. It is a good signal for frontend structure and app logic working together.",
    href: "https://github.com/govindggupta/chess",
    stack: ["JavaScript", "Game Logic", "UI"],
    highlights: [
      "State-heavy interaction model",
      "Gameplay-driven interface decisions",
      "Useful proof of app structure",
    ],
  },
  {
    name: "Persona Chat",
    tag: "AI Conversation Experiment",
    summary: "A character-driven chat product exploring how AI interaction can feel directed, purposeful, and easier to engage with.",
    description:
      "The project sits at the intersection of prompt shaping, interface framing, and building a conversation flow that feels more like a product than a raw text box.",
    href: "https://github.com/govindggupta/persona_chat",
    stack: ["Python", "AI", "Conversational UI"],
    highlights: [
      "Persona-based interaction design",
      "AI experience framing",
      "Rapid experimentation mindset",
    ],
  },
];

export const routeHighlights = [
  {
    title: "About",
    href: "/about",
    description: "Background, working style, and the kind of products I want to keep building.",
  },
  {
    title: "Projects",
    href: "/projects",
    description: "A closer look at selected work, tools, and the thinking behind each build.",
  },
  {
    title: "Resume",
    href: "/resume",
    description: "A compact professional snapshot until the full resume PDF is added.",
  },
] as const;

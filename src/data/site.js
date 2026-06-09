import {
  ArrowRight,
  Cpu,
  Database,
  Globe,
  Layers3,
  Mail,
  PenTool,
  Server,
  Sparkles,
  Wrench,
} from "lucide-react";
import sabbathschool from "../assets/images/sabbathschool.png";
import youcare from "../assets/images/youcare.png";
import profilepic from "../assets/images/fikadu.jpeg";
import logo from "../assets/images/logo.png"
import html from "../assets/images/html.png";
import css from "../assets/images/css.png";
import js from "../assets/images/js.png";
import framermotion from "../assets/images/framermotion.png";
import git from "../assets/images/git.png";
import github from "../assets/images/github.png";
import mongo from "../assets/images/mongo.png";
import next from "../assets/images/next.png";
import node from "../assets/images/node.png";
import postgresql from "../assets/images/postgresql.png";
import react from "../assets/images/react.png";
import supabase from "../assets/images/supabase.png";
import tailwindcss from "../assets/images/tailwindcss.png";
import typescript from "../assets/images/typescript.png";
import vercel from "../assets/images/vercel.png";
import vs from "../assets/images/vs.png";
import express from "../assets/images/express.png";



function createProjectImage({ title, from, to, glow, panel }) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 760" fill="none">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${from}" />
          <stop offset="100%" stop-color="#7c3aed" />
        </linearGradient>
        <radialGradient id="glow" cx="0.18" cy="0.14" r="1">
          <stop offset="0%" stop-color="${glow}" stop-opacity="0.95" />
          <stop offset="100%" stop-color="${glow}" stop-opacity="0" />
        </radialGradient>
      </defs>
      <rect width="1200" height="760" rx="40" fill="url(#bg)" />
      <rect width="1200" height="760" rx="40" fill="#181312" fill-opacity="0.24" />
      <circle cx="250" cy="120" r="320" fill="url(#glow)" />
      <g opacity="0.96">
        <rect x="132" y="118" width="936" height="524" rx="32" fill="#fffaf2" fill-opacity="0.16" stroke="#ffffff" stroke-opacity="0.24" />
        <rect x="188" y="180" width="454" height="248" rx="26" fill="${panel}" fill-opacity="0.94" />
        <rect x="692" y="180" width="260" height="88" rx="22" fill="#fffaf2" fill-opacity="0.18" />
        <rect x="692" y="292" width="260" height="136" rx="24" fill="#fffaf2" fill-opacity="0.12" />
        <rect x="188" y="470" width="764" height="86" rx="24" fill="#fffaf2" fill-opacity="0.12" />
      </g>
      <text x="188" y="154" fill="#fffaf2" font-size="28" font-family="Arial, sans-serif" letter-spacing="8">PROJECT PREVIEW</text>
      <text x="188" y="588" fill="#fffaf2" font-size="64" font-weight="700" font-family="Arial, sans-serif">${title}</text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function createProfilePhoto({ name, initials, from, to }) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 900" fill="none">
      <defs>
        <linearGradient id="portraitBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${from}" />
          <stop offset="100%" stop-color="${to}" />
        </linearGradient>
        <radialGradient id="portraitGlow" cx="0.32" cy="0.14" r="1">
          <stop offset="0%" stop-color="#fff7ef" stop-opacity="0.96" />
          <stop offset="100%" stop-color="#fff7ef" stop-opacity="0" />
        </radialGradient>
      </defs>
      <rect width="900" height="900" rx="64" fill="url(#portraitBg)" />
      <rect width="900" height="900" rx="64" fill="#171312" fill-opacity="0.22" />
      <circle cx="270" cy="150" r="280" fill="url(#portraitGlow)" />
      <g opacity="0.98">
        <circle cx="450" cy="340" r="148" fill="#f2c7a4" />
        <path d="M282 378c20-132 96-228 168-228s147 96 168 228c-46-30-111-50-168-50s-122 20-168 50Z" fill="#241917" />
        <path d="M218 710c36-166 127-248 232-248s196 82 232 248v78H218v-78Z" fill="#1b2330" />
        <rect x="164" y="650" width="572" height="160" rx="40" fill="#fff9f1" fill-opacity="0.16" stroke="#ffffff" stroke-opacity="0.22" />
      </g>
      <text x="120" y="718" fill="#fff9f1" font-size="64" font-weight="700" font-family="Arial, sans-serif">${name}</text>
      <text x="120" y="774" fill="#fff9f1" fill-opacity="0.75" font-size="24" font-family="Arial, sans-serif" letter-spacing="6">FULL-STACK DEVELOPER</text>
      <circle cx="734" cy="164" r="86" fill="#fff9f1" fill-opacity="0.16" />
      <text x="682" y="184" fill="#fff9f1" font-size="56" font-weight="700" font-family="Arial, sans-serif">${initials}</text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function createTechIcon({ label, short, bg, fg = "#ffffff" }) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" fill="none">
      <rect width="96" height="96" rx="24" fill="${bg}" />
      <text
        x="48"
        y="56"
        text-anchor="middle"
        fill="${fg}"
        font-size="28"
        font-weight="700"
        font-family="Arial, sans-serif"
      >
        ${short}
      </text>
      <title>${label}</title>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

export const profile = {
  firstName: "Fikadu",
  lastName: "Alemu",
  name: "File.dev",
  // photos:logo,
  tagname: "Fikadu Alemu",
  role: "Full-Stack Developer",
  tagline: "Building digital experiences that matter.",
  summary:
    "I create modern web products with clean code, thoughtful UI structure, and backend systems that stay practical as projects grow.",
  intro: [
    "I'm a full-stack developer who enjoys turning ideas into polished and responsive products.",
    "My approach combines strong frontend craftsmanship with backend logic that is readable, maintainable, and ready for real-world use.",
  ],
  note:
    "Clean structure, smooth interaction, and strong fundamentals are the pieces I try to bring into every project.",
  location: "Open to remote work",
  email: "fikadualemutatty@gmail.com",
  linkedin:"https://www.linkedin.com/in/fikadualemu",
  github:"https://www.github.com/fikadualemu",
  photo: profilepic,
  photos:logo,
  photoAlt: "Profile portrait for Fikadu Alemu",
  
  cta: {
    primary: "#projects",
    secondary: "#contact",
  },


  
  codeSnippet: [
    "const developer = {",
    "  name: 'Fikadu Alemu',",
    "  role: 'Full-Stack Developer',",
    "  focus: ['React', 'Node.js', 'Tailwind'],",
    "  status: 'Building smooth interfaces',",
    "};",
  ],
};

// export const profiles ={
//   constt:"const",
//   developerr:"developer",
//   equall:"=",
//   namee:"name:",
//   nameee:"Fikadu Alemu",
//   rolee:"role:",
//   roleee:"Full-Stack Developer",
//   focus:"focus:",
//   nameee:"Building cool staff",
//   learningg:"learning:",
//   learninggg:"MERN",
//   opentag:"[",
//   closetag:"]"
// },


// export const myprofile =[
//   {
//     conss:"const",
//     devrloperr:"",
//     name:"name",
//     fikadu:"Fikadu Alemu",
//     role:"role",
//     roles:"Full-Stack Developer"

//   }
// ]

export const focusAreas = [
  {
    title: "Clean Code",
    text: "Writing scalable, readable code that stays maintainable as projects grow.",
    icon: PenTool,
  },
  {
    title: "API Focus",
    text: "Connecting frontend interfaces to backend services in a clean and practical way.",
    icon: Server,
  },
  {
    title: "Performance",
    text: "Building fast and responsive layouts with careful UI structure and lightweight motion.",
    icon: Cpu,
  },
  {
    title: "Full-Stack",
    text: "Comfortable across frontend systems, backend logic, data flow, and deployment.",
    icon: Layers3,
  },
];

export const projectFilters = ["All", "Web App", "Full-Stack", "UI", "Personal"];

export const projects = [
  {
    title: "Sabbath School",
    eyebrow: "Mobile App",
    year: "2026",
    description:
      "A modern productivity dashboard designed around clean workflows, responsive layouts, and fast task tracking.",
    stack: ["React Native", "Nativewind","Expo","Typescript"],
    image: sabbathschool
  },
  {
    title: "Youcare",
    eyebrow: "Full-Stack",
    year: "2025",
    description:
      "An e-commerce concept focused on strong product presentation, clean filtering, and a premium customer journey.",
    stack: ["React", "Express", "MongoDB", "Stripe"],
    image: youcare,
    imageAlt: "Luna Gabbage preview",
    href: "#contact",
  },
  {
    title: "Youcare",
    eyebrow: "Full-stack",
    year: "2025",
    description:
      "A collaborative task manager for teams that need simple planning, clear priorities, and smooth user flow.",
    stack: ["React", "Supabase", "Tailwind", "Realtime"],
    image: createProjectImage({
      title: "Youcare",
      from: "#fcd34d",
      to: "#f97316",
      glow: "#fff7cc",
      panel: "#261813",
    }),
    imageAlt: "Taskify preview",
    href: "#contact",
  },
  {
    title: "FiFi Checkers",
    eyebrow: "Personal",
    year: "2024",
    description:
      "A playful board game project built to explore interaction design, logic handling, and polished interface details.",
    stack: ["JavaScript", "Game Logic", "CSS", "UI"],
    image: createProjectImage({
      title: "FiFi Checkers",
      from: "#fb923c",
      to: "#facc15",
      glow: "#fef3c7",
      panel: "#231814",
    }),
    imageAlt: "FiFi Checkers preview",
    href: "#contact",
  },
  {
    title: "Desto Ultimate",
    eyebrow: "Showcase",
    year: "2024",
    description:
      "A presentation-first landing page concept that balances visual hierarchy, movement, and conversion-focused structure.",
    stack: ["Landing Page", "Motion", "Tailwind", "Responsive"],
    image: createProjectImage({
      title: "Desto Ultimate",
      from: "#fbbf24",
      to: "#fb7185",
      glow: "#fde68a",
      panel: "#2a1717",
    }),
    imageAlt: "Desto Ultimate preview",
    href: "#contact",
  },
];

export const techGroups = [
  {
    title: "Frontend",
    icon: Globe,
    items: [
      { name: "HTML", level: 95, icon: html},
      { name: "React", level: 90, icon: react},
      { name: "Next.js", level: 78, icon: next },
      { name: "Css", level: 92, icon: css },
      { name: "JavaScript", level: 92, icon: js },
      { name: "TypeScript", level: 76, icon: typescript},
      { name: "Tailwind CSS", level: 94, icon: tailwindcss},
      { name: "Framer Motion", level: 94, icon: framermotion},
    ],
  },
  {
    title: "Backend",
    icon: Server,
    items: [
      { name: "Node.js", level: 84, icon: node},
      { name: "Express", level: 80, icon: express},
      { name: "MongoDB", level: 76, icon:mongo},
      { name: "Supabase", level: 70, icon: supabase},
    ],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    items: [
      { name: "Git ", level: 88, icon: git},
      { name: " GitHub", level: 88, icon: github},
      { name: "Vercel", level: 78, icon: vercel},
      { name: "VS Code", level: 95, icon: vs},
    ],
  },
];

export const stats = [
  { value: "3+", label: "Projects Built" },
  { value: "4+", label: "Years Learning" },
  { value: "15+", label: "Technologies" },
  { value: "8", label: "Curiosity" },
];

export const contactCards = [
  {
    title: "Email",
    value: profile.email,
    note: "Replace this placeholder with your real email when you're ready.",
    icon: Mail,
  },
  {
    title: "Location",
    value: profile.location,
    note: "Available for remote collaboration and freelance opportunities.",
    icon: Layers3,
  },
  {
    title: "Focus",
    value: "Modern web products",
    note: "Frontend polish, backend structure, and clean end-to-end user flow.",
    icon: Sparkles,
  },
  {
    title: "Workflow",
    value: "Build, refine, ship",
    note: "I like taking projects from rough idea to clean, usable final product.",
    icon: ArrowRight,
  },
];

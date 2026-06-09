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
import logo from "../assets/images/logo.png";
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

export const profile = {
  name: "File.dev",
  tagname: "Fikadu Alemu",
  role: "Full-Stack Developer",
  tagline: "Building digital experiences that matter.",
  summary:
    "I create modern web products with clean code, thoughtful UI structure, and backend systems that stay practical as projects grow.",
  intro: [
    "I'm a full-stack developer who enjoys turning ideas into polished and responsive products.",
    "My approach combines strong frontend craftsmanship with backend logic that is readable, maintainable, and ready for real-world use.",
  ],
  note: "Clean structure, smooth interaction, and strong fundamentals are the pieces I try to bring into every project.",
  location: "Open to remote work",
  email: "fikadualemutatty@gmail.com",
  linkedin: "https://www.linkedin.com/in/fikadualemu",
  github: "https://www.github.com/fikadualemu",
  photo: profilepic,
  photos: logo,
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
    stack: ["React Native", "Nativewind", "Expo", "TypeScript"],
    image: sabbathschool,
  },
  {
    title: "Youcare",
    eyebrow: "Full-Stack",
    year: "2025",
    description:
      "An e-commerce concept focused on strong product presentation, clean filtering, and a premium customer journey.",
    stack: ["React", "Express", "MongoDB", "Stripe"],
    image: youcare,
    imageAlt: "Youcare preview",
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
      { name: "HTML", level: 95, icon: html },
      { name: "React", level: 90, icon: react },
      { name: "Next.js", level: 78, icon: next },
      { name: "CSS", level: 92, icon: css },
      { name: "JavaScript", level: 92, icon: js },
      { name: "TypeScript", level: 76, icon: typescript },
      { name: "Tailwind CSS", level: 94, icon: tailwindcss },
      { name: "Framer Motion", level: 94, icon: framermotion },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    items: [
      { name: "Node.js", level: 84, icon: node },
      { name: "Express", level: 80, icon: express },
      { name: "MongoDB", level: 76, icon: mongo },
      { name: "Supabase", level: 70, icon: supabase },
    ],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    items: [
      { name: "Git", level: 88, icon: git },
      { name: "GitHub", level: 88, icon: github },
      { name: "Vercel", level: 78, icon: vercel },
      { name: "VS Code", level: 95, icon: vs },
    ],
  },
];

export const stats = [
  { value: "3+", label: "Projects Built" },
  { value: "4+", label: "Years Learning" },
  { value: "15+", label: "Technologies" },
  { value: "8+", label: "Curiosity" },
];

export const contactCards = [
  {
    title: "Email",
    value: profile.email,
    note: "Available for freelance and full-time opportunities.",
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
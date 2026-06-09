import { useState, useEffect, useRef } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ArrowUpRight,
  Code2,
  Server,
  Globe,
  Layers,
  Zap,
  Star,
  Award,
  Briefcase,
  GraduationCap,
  ChevronDown,
  Phone,
  MapPin,
  CheckCircle,
  Monitor,
  Users,
  Coffee,
  BookOpen,
  Rocket,
  Heart,
  TrendingUp,
} from "lucide-react";

import fikadu from "../assets/images/fikadu.jpeg";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

/* -----------------------------------------------
   DATA
----------------------------------------------- */
const NAV_IDS = ["Home", "About", "Skills", "Projects", "Experience", "Contact"];

const TECH_STACK = [
  { name: "HTML",               color: "#E44D26", cat: "Frontend" },
  { name: "CSS",                color: "#264de4", cat: "Frontend" },
  { name: "JavaScript",         color: "#FFCA28", cat: "Frontend" },
  { name: "React",              color: "#61DAFB", cat: "Frontend" },
  { name: "Next.js",            color: "#000000", cat: "Frontend" },
  { name: "TypeScript",         color: "#3178C6", cat: "Frontend" },
  { name: "Tailwind CSS",       color: "#38BDF8", cat: "Frontend" },
  { name: "Node.js",            color: "#68A063", cat: "Backend"  },
  { name: "Express.js",         color: "#888888", cat: "Backend"  },
  { name: "MongoDB",            color: "#47A248", cat: "Backend"  },
  { name: "PostgreSQL",         color: "#336791", cat: "Backend"  },
  { name: "Supabase",           color: "#3ECF8E", cat: "Backend"  },
  { name: "Vercel",             color: "#000000", cat: "DevOps"   },
  { name: "Git",                color: "#F05032", cat: "DevOps"   },
  { name: "GitHub",             color: "#171515", cat: "DevOps"   },
  { name: "Figma",              color: "#A259FF", cat: "Design"   },
  { name: "Photoshop",          color: "#31A8FF", cat: "Design"   },
  { name: "Adobe Illustrator",  color: "#FF9A00", cat: "Design"   },
  { name: "Adobe Premiere",     color: "#9999FF", cat: "Video"    },
  { name: "CapCut",             color: "#000000", cat: "Video"    },
];

const PROJECTS = [
  {
    title: "PCM",
    subtitle: "Adventist youth ministry platform",
    desc: "A dynamic web platform for managing events, resources, and community engagement within the Adventist Youth Ministry.",
    tags: ["React", "Express", "Node.js", "PostgreSQL"],
    accent: "#B58C3D",
    icon: TrendingUp,
    year: "2024",
  },
  {
    title: "Mindify",
    subtitle: "Patient appointment management",
    desc: "A comprehensive scheduling system for healthcare providers, streamlining patient communication and resource allocation.",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    accent: "#B58C3D",
    icon: Globe,
    year: "2024",
  },
  {
    title: "Sabbath School",
    subtitle: "Mobile app for Adventist learners",
    desc: "A modern mobile productivity dashboard with responsive layouts, lesson tracking, and offline-first architecture.",
    tags: ["React Native", "Nativewind", "Expo", "TypeScript"],
    accent: "#38BDF8",
    icon: BookOpen,
    year: "2026",
  },
  {
    title: "Youcare",
    subtitle: "Full-stack e-commerce platform",
    desc: "An e-commerce concept focused on strong product presentation, clean filtering, and a premium customer journey.",
    tags: ["React", "Express", "MongoDB", "Stripe"],
    accent: "#68A063",
    icon: Users,
    year: "2025",
  },
];

const EXPERIENCE = [
  {
    role: "Full-Stack Developer",
    company: "Freelance",
    period: "2022 - Present",
    type: "Contract",
    desc: "Delivering full-stack web applications for clients across education, health, and ministry sectors. From requirements to deployment.",
    icon: Rocket,
    color: "#B58C3D",
  },
  {
    role: "Frontend Developer",
    company: "Personal Projects",
    period: "2021 - 2022",
    type: "Self-directed",
    desc: "Built and shipped multiple personal projects to sharpen React, Tailwind, and UI/UX skills across real-world problem spaces.",
    icon: Zap,
    color: "#38BDF8",
  },
  {
    role: "IT Student",
    company: "Wolaita Sodo University",
    period: "2021 - 2026",
    type: "Academic",
    desc: "B.Sc. Information Technology. Applied classroom knowledge across real projects and built a foundation across software engineering domains.",
    icon: Layers,
    color: "#a855f7",
  },
];

const STATS = [
  { n: "3+",  l: "Projects",    icon: Code2  },
  { n: "4+",  l: "Years",       icon: Coffee },
  { n: "15+", l: "Technologies",icon: Zap    },
  { n: "100%",l: "Commitment",  icon: Heart  },
];

/* -----------------------------------------------
   HOOKS
----------------------------------------------- */
function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVis(true); },
      { threshold }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return [ref, vis];
}

/* -----------------------------------------------
   SHARED COMPONENTS
----------------------------------------------- */
function Tag({ text, color = "#B58C3D" }) {
  return (
    <span
      className="text-[11px] px-2.5 py-0.5 rounded-sm border"
      style={{ color, borderColor: color + "55", background: color + "11" }}
    >
      {text}
    </span>
  );
}

function SectionLabel({ text }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="w-8 h-px bg-[#B58C3D] block" />
      <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#B58C3D]">
        {text}
      </span>
    </div>
  );
}

function FadeUp({ children, delay = 0, className = "" }) {
  const [ref, vis] = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: vis ? 1 : 0,
        transform: vis ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/* -----------------------------------------------
   BOTTOM NAV BAR
----------------------------------------------- */
function BottomNav({ active }) {
  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const items = [
    { id: "Home",       icon: Monitor    },
    { id: "About",      icon: Users      },
    { id: "Skills",     icon: Code2      },
    { id: "Projects",   icon: Globe      },
    { id: "Experience", icon: Briefcase  },
    { id: "Contact",    icon: Mail       },
  ];

  return (
    <div className="fixed bottom-4 left-0 right-0 z-40 pointer-events-none">
      <div className="max-w-fit mx-auto pointer-events-auto">
        <div className="px-6 py-3 rounded-full flex items-center gap-6 bg-white/95 border border-gray-200 shadow-lg backdrop-blur">
          {items.map(({ id, icon: Icon }) => (
            <button
              key={id}
              onClick={() => go(id)}
              className={`p-2 rounded-full transition-colors ${
                active === id ? "bg-[#B58C3D]/10" : ""
              }`}
              title={id}
            >
              <Icon
                size={18}
                className={active === id ? "text-[#B58C3D]" : "text-gray-500"}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

/* -----------------------------------------------
   HERO
----------------------------------------------- */
function Hero() {
  return (
    <section id="Home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,0.5) 1px,transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 pb-20 w-full">
        <div className="grid lg:grid-cols-[1fr_420px] gap-16 items-center">
          {/* LEFT */}
          <div>
            <div
              className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border text-xs font-semibold"
              style={{
                background: "#B58C3D30",
                borderColor: "#B58C3D50",
                color: "#B58C3D",
              }}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for new projects
            </div>

            <h1
              className="font-black leading-[0.92] mb-6"
              style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(3.2rem,8vw,6.5rem)" }}
            >
              <span className="block text-gray-700">Full-Stack</span>
              <span className="block text-[#B58C3D]">Engineer.</span>
            </h1>

            <p className="text-gray-500 text-lg leading-relaxed mb-10 max-w-xl">
              I build{" "}
              <span className="text-gray-900 font-medium">
                fast, beautiful, and scalable
              </span>{" "}
              digital products - from pixel-perfect interfaces to robust backend systems.
            </p>

            <div className="flex flex-wrap gap-4 mb-14">
              <button
                onClick={() =>
                  document.getElementById("Projects")?.scrollIntoView({ behavior: "smooth" })
                }
                className="group flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-[#B58C3D] text-white font-bold text-sm hover:bg-[#a07830] transition-all duration-200"
              >
                View Work
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </button>
              <a
                href="https://www.github.com/fikadualemu"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-7 py-3.5 rounded-2xl border border-gray-300 text-gray-700 text-sm font-semibold hover:border-gray-400 hover:text-gray-900 transition-all duration-200"
              >
                <Github size={16} />
                GitHub Profile
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6">
              {STATS.map(({ n, l, icon: Icon }) => (
                <div key={l} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#B58C3D]/10 border border-[#B58C3D]/15 flex items-center justify-center">
                    <Icon size={16} className="text-[#B58C3D]" />
                  </div>
                  <div>
                    <p
                      className="text-2xl font-black text-gray-900 leading-none"
                      style={{ fontFamily: "'Syne',sans-serif" }}
                    >
                      {n}
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5">{l}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT - profile card */}
          <div className="hidden lg:block">
            <div
              className="relative rounded-3xl p-px overflow-hidden"
              style={{ background: "linear-gradient(135deg,#B58C3D30 0%,#B58C3D30 100%)" }}
            >
              <div className="relative rounded-3xl p-8 overflow-hidden bg-gray-100">
                <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full blur-3xl opacity-20 bg-[#B58C3D]" />

                {/* Avatar */}
                <div className="relative w-24 h-24 mx-auto mb-6">
                  <div
                    className="w-full h-full rounded-full overflow-hidden border"
                    style={{ borderColor: "#B58C3D" }}
                  >
                    <img src={fikadu} alt="Fikadu Alemu" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-emerald-400 border-2 border-gray-100" />
                </div>

                <div className="text-center mb-6">
                  <h3
                    className="text-xl font-black text-gray-900"
                    style={{ fontFamily: "'Syne',sans-serif" }}
                  >
                    Fikadu Alemu
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">Full-Stack Engineer</p>
                  <div className="flex items-center justify-center gap-1.5 mt-2 text-xs text-gray-500">
                    <MapPin size={11} />
                    Hawassa, Ethiopia
                  </div>
                </div>

                {/* Skill bars */}
                {[
                  { label: "Frontend", pct: 95 },
                  { label: "Backend",  pct: 84 },
                ].map(({ label, pct }) => (
                  <div key={label} className="mb-3">
                    <div className="flex justify-between text-xs text-gray-600 mb-1">
                      <span>{label}</span>
                      <span>{pct}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-gray-200">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${pct}%`,
                          background: "linear-gradient(90deg, #B58C3D, #B58C3D88)",
                        }}
                      />
                    </div>
                  </div>
                ))}

                {/* Social row */}
                <div className="flex justify-center gap-3 mt-6">
                  {[
                    { Icon: Github,   href: "https://github.com/fikadualemu"               },
                    { Icon: Linkedin, href: "https://linkedin.com/in/fikadualemu"          },
                    { Icon: Mail,     href: "mailto:fikadualemutatty@gmail.com"            },
                  ].map(({ Icon, href }) => (
                    <a
                      key={href}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="w-9 h-9 rounded-xl bg-gray-200 border border-gray-300 flex items-center justify-center text-gray-600 hover:text-gray-900 hover:border-gray-400 transition-all"
                    >
                      <Icon size={15} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <ChevronDown size={18} className="text-gray-500 animate-bounce" />
      </div>
    </section>
  );
}

/* -----------------------------------------------
   ABOUT
----------------------------------------------- */
function About() {
  return (
    <section id="About" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeUp>
            <SectionLabel text="About Me" />
            <h2
              className="text-4xl lg:text-5xl font-black text-gray-700 mb-6 leading-tight"
              style={{ fontFamily: "'Syne',sans-serif" }}
            >
              Building the future,
              <br />
              <span style={{ color: "#B58C3D" }}>one commit at a time.</span>
            </h2>
            <p className="text-gray-500 leading-relaxed mb-5">
              I'm a full-stack developer with a focus on crafting products that sit at the
              intersection of engineering and thoughtful design. I care deeply about
              performance, clean code, and developer experience.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              Currently completing my B.Sc. in Information Technology at Wolaita Sodo
              University while building real-world projects for clients across education,
              health, and ministry sectors.
            </p>
            <div className="flex gap-3">
              <a
                href={`mailto:fikadualemutatty@gmail.com`}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#B58C3D]/10 border border-[#B58C3D]/20 text-[#B58C3D] text-sm font-semibold hover:bg-[#B58C3D]/20 transition-all"
              >
                <Mail size={14} /> Get in Touch
              </a>
              <a
                href="https://github.com/fikadualemu"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gray-100 border border-gray-300 text-gray-700 text-sm font-semibold hover:text-gray-900 hover:border-gray-400 transition-all"
              >
                <Award size={14} /> View GitHub
              </a>
            </div>
          </FadeUp>

          {/* Achievement cards */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Code2,     label: "Tech Stack",     val: "15+ tools",    c: "#22d3ee", delay: 0   },
              { icon: Star,      label: "Focus Area",     val: "Full-Stack",   c: "#f59e0b", delay: 100 },
              { icon: Briefcase, label: "Project Types",  val: "Web, Mobile",  c: "#a855f7", delay: 200 },
              { icon: Globe,     label: "Work Style",     val: "Remote-ready", c: "#38bdf8", delay: 300 },
            ].map(({ icon: Icon, label, val, c, delay }) => (
              <FadeUp key={label} delay={delay}>
                <div
                  className="p-5 rounded-2xl border transition-all duration-300 hover:scale-[1.02] cursor-default"
                  style={{ background: "#f3f4f6", borderColor: "rgba(0,0,0,0.1)" }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                    style={{ background: c + "18" }}
                  >
                    <Icon size={18} style={{ color: c }} />
                  </div>
                  <p
                    className="text-xl font-black text-gray-900"
                    style={{ fontFamily: "'Syne',sans-serif" }}
                  >
                    {val}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">{label}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* -----------------------------------------------
   SKILLS
----------------------------------------------- */
function Skills() {
  const cats = [...new Set(TECH_STACK.map((t) => t.cat))];
  const [activeCat, setActiveCat] = useState("All");
  const allCats = ["All", ...cats];
  const filtered =
    activeCat === "All" ? TECH_STACK : TECH_STACK.filter((t) => t.cat === activeCat);

  return (
    <section id="Skills" className="py-28 relative bg-white">
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{ background: "linear-gradient(90deg,transparent,#B58C3D30,transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <FadeUp>
          <SectionLabel text="Tech Stack" />
          <h2
            className="text-4xl lg:text-5xl font-black text-gray-700 mb-4"
            style={{ fontFamily: "'Syne',sans-serif" }}
          >
            Tools I use
          </h2>
          <p className="text-gray-500 mb-10 max-w-xl">
            A curated toolkit built from years of shipping real products across frontend,
            backend, cloud, and design.
          </p>
        </FadeUp>

        {/* Category filter */}
        <FadeUp delay={100}>
          <div className="flex flex-wrap gap-2 mb-10">
            {allCats.map((c) => (
              <button
                key={c}
                onClick={() => setActiveCat(c)}
                className="px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200"
                style={{
                  background: activeCat === c ? "#B58C3D" : "rgba(0,0,0,0.05)",
                  color: activeCat === c ? "#fff" : "#64748b",
                  border: activeCat === c ? "1px solid #B58C3D" : "1px solid rgba(0,0,0,0.1)",
                }}
              >
                {c}
              </button>
            ))}
          </div>
        </FadeUp>

        {/* Tech grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {filtered.map(({ name, color, cat }, i) => (
            <FadeUp key={name} delay={i * 40}>
              <div
                className="group p-4 rounded-2xl border flex flex-col items-center gap-3 cursor-default transition-all duration-300 hover:scale-105 hover:shadow-lg bg-gray-100"
                style={{ borderColor: "rgba(0,0,0,0.1)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = color + "55";
                  e.currentTarget.style.boxShadow = `0 0 30px ${color}22`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(0,0,0,0.1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-sm"
                  style={{ background: color + "18", color }}
                >
                  {name.slice(0, 2).toUpperCase()}
                </div>
                <p className="text-xs font-semibold text-gray-700 text-center leading-tight">{name}</p>
                <span className="text-[10px] text-gray-500">{cat}</span>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -----------------------------------------------
   PROJECTS
----------------------------------------------- */
function Projects() {
  return (
    <section id="Projects" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-6">
        <FadeUp>
          <SectionLabel text="Work" />
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <h2
              className="text-4xl lg:text-5xl font-black text-gray-700"
              style={{ fontFamily: "'Syne',sans-serif" }}
            >
              Latest projects
            </h2>
            <a
              href="https://github.com/fikadualemu"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 transition-colors"
            >
              All on GitHub <ExternalLink size={14} />
            </a>
          </div>
        </FadeUp>

        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map(({ title, subtitle, desc, tags, accent, icon: Icon, year }, i) => (
            <FadeUp key={title} delay={i * 100}>
              <div
                className="group relative p-6 rounded-3xl border overflow-hidden cursor-pointer transition-all duration-300 bg-gray-100"
                style={{ borderColor: "rgba(0,0,0,0.1)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = accent + "44";
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = `0 24px 60px ${accent}18`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(0,0,0,0.1)";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  className="absolute -top-12 -right-12 w-48 h-48 rounded-full blur-3xl opacity-0 group-hover:opacity-15 transition-opacity duration-500"
                  style={{ background: accent }}
                />

                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center"
                    style={{ background: accent + "18" }}
                  >
                    <Icon size={22} style={{ color: accent }} />
                  </div>
                  <a
                    href="https://github.com/fikadualemu"
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 rounded-xl bg-gray-200 border border-gray-300 flex items-center justify-center text-gray-600 hover:text-gray-900 hover:border-gray-400 transition-all"
                  >
                    <ArrowUpRight size={14} />
                  </a>
                </div>

                <p className="text-xs text-gray-500 mb-1">{year}</p>
                <h3
                  className="text-xl font-black text-gray-900 mb-1"
                  style={{ fontFamily: "'Syne',sans-serif" }}
                >
                  {title}
                </h3>
                <p className="text-sm font-medium mb-3" style={{ color: accent }}>
                  {subtitle}
                </p>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{desc}</p>

                <div className="flex flex-wrap gap-2">
                  {tags.map((t) => (
                    <Tag key={t} text={t} color={accent} />
                  ))}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -----------------------------------------------
   EXPERIENCE
----------------------------------------------- */
function Experience() {
  return (
    <section id="Experience" className="py-28 relative bg-white">
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{ background: "linear-gradient(90deg,transparent,#B58C3D30,transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <FadeUp>
          <SectionLabel text="Career" />
          <h2
            className="text-4xl lg:text-5xl font-black text-gray-900 mb-14"
            style={{ fontFamily: "'Syne',sans-serif" }}
          >
            Experience & Education
          </h2>
        </FadeUp>

        <div className="grid lg:grid-cols-[1fr_380px] gap-12 items-start">
          {/* Timeline */}
          <div className="space-y-5">
            {EXPERIENCE.map(({ role, company, period, type, desc, icon: Icon, color }, i) => (
              <FadeUp key={company} delay={i * 120}>
                <div
                  className="group relative p-6 rounded-2xl border transition-all duration-300 hover:border-black/15 bg-gray-100"
                  style={{ borderColor: "rgba(0,0,0,0.1)" }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                      style={{ background: color + "18" }}
                    >
                      <Icon size={20} style={{ color }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="font-bold text-gray-900">{role}</h3>
                        <span
                          className="text-[10px] font-semibold px-2 py-0.5 rounded-full border"
                          style={{
                            color: "#22d3ee",
                            borderColor: "rgba(34,211,238,0.3)",
                            background: "rgba(34,211,238,0.07)",
                          }}
                        >
                          {type}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm font-semibold" style={{ color }}>
                          {company}
                        </span>
                        <span className="text-gray-400">·</span>
                        <span className="text-xs text-gray-500">{period}</span>
                      </div>
                      <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          {/* Education + certs */}
          <div className="space-y-5">
            <FadeUp delay={80}>
              <div
                className="p-6 rounded-2xl border bg-gray-100"
                style={{ borderColor: "rgba(0,0,0,0.1)" }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-400/15 flex items-center justify-center">
                    <GraduationCap size={18} className="text-amber-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-widest mb-0.5">
                      Education
                    </p>
                    <p className="text-gray-900 font-bold text-sm">
                      B.Sc. Information Technology
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm">Wolaita Sodo University</p>
                <p className="text-gray-500 text-xs mt-1">2021 - 2026 · GPA 3.04</p>
              </div>
            </FadeUp>

            <FadeUp delay={160}>
              <div
                className="p-6 rounded-2xl border bg-gray-100"
                style={{ borderColor: "rgba(0,0,0,0.1)" }}
              >
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">
                  Completed
                </p>
                <div className="space-y-3">
                  {[
                    { name: "React + Vite Full-Stack Dev",   color: "#61DAFB" },
                    { name: "Node.js & Express APIs",         color: "#68A063" },
                    { name: "Tailwind CSS & UI Design",       color: "#38BDF8" },
                  ].map(({ name, color }) => (
                    <div key={name} className="flex items-center gap-3">
                      <CheckCircle size={14} style={{ color }} />
                      <span className="text-sm text-gray-700">{name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -----------------------------------------------
   CONTACT
----------------------------------------------- */
function Contact() {
  return (
    <section id="Contact" className="py-28 relative overflow-hidden">
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] blur-[100px] opacity-10 pointer-events-none bg-[#B58C3D]"
      />

      <div className="max-w-7xl mx-auto px-6">
        <FadeUp>
          <SectionLabel text="Contact" />
          <h2
            className="text-4xl lg:text-5xl font-black text-gray-900 mb-14"
            style={{ fontFamily: "'Syne',sans-serif" }}
          >
            Let's build something
            <br />
            <span style={{ color: "#B58C3D" }}>extraordinary.</span>
          </h2>
        </FadeUp>

        <div className="flex justify-center">
          <div className="w-full max-w-3xl flex flex-wrap justify-center gap-5">
            {[
              { icon: Mail,   label: "Email",    val: "fikadualemutatty@gmail.com", c: "#22d3ee", href: "mailto:fikadualemutatty@gmail.com" },
              { icon: Phone,  label: "Phone",    val: "+251 934 080 766",           c: "#a855f7", href: "tel:+251934080766" },
              { icon: MapPin, label: "Location", val: "Hawassa, Ethiopia",          c: "#38bdf8", href: "#" },
              { icon: Globe,  label: "GitHub",   val: "github.com/fikadualemu",     c: "#f59e0b", href: "https://github.com/fikadualemu" },
            ].map(({ icon: Icon, label, val, c, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="w-full sm:w-[calc(50%-10px)] md:w-[calc(33%-14px)] flex items-center gap-4 p-4 rounded-2xl border group hover:border-black/20 transition-all bg-gray-100"
                style={{ borderColor: "rgba(0,0,0,0.1)" }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: c + "18" }}
                >
                  <Icon size={16} style={{ color: c }} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-gray-500">{label}</p>
                  <p className="text-sm text-gray-700 font-medium truncate">{val}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* -----------------------------------------------
   ROOT
----------------------------------------------- */
export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("Home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { threshold: 0.35 }
    );
    NAV_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="min-h-screen bg-white text-gray-900"
      style={{ fontFamily: "'Syne Variable','Syne',sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400..800&family=JetBrains+Mono:wght@400;700&display=swap');
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        ::selection { background: #B58C3D44; color: #171717; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #ffffff; }
        ::-webkit-scrollbar-thumb { background: #B58C3D44; border-radius: 9999px; }
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
        .float { animation: float 5s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

      <Nav />
      <BottomNav active={activeSection} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}
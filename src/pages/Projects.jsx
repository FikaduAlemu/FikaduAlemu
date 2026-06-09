import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import SectionTitle from "../components/SectionTitle";
import { projects } from "../data/site";
import { FaCss3, FaHtml5 } from "react-icons/fa";
import { BsJavascript } from "react-icons/bs";
import { RiNextjsLine } from "react-icons/ri";

export default function Projects() {
  return (
    <div className="space-y-10">
      <SectionTitle
        eyebrow="Projects"
        title="A focused portfolio grid with motion, depth, and room for your real case studies."
        
        text="Replace these placeholders with launches, redesigns, client work, or concept pieces. The styling already gives each item enough visual presence to feel premium."
      />

      <div className="grid gap-6 lg:grid-cols-3">
        <FaHtml5/>
        <FaCss3/>
        <BsJavascript/>
        <RiNextjsLine/>
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>

      <div className="rounded-[2rem] border border-white/80 bg-white/75 p-8 shadow-panel backdrop-blur">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-muted">
              Ready for the next case study
            </p>
            <h3 className="mt-2 font-heading text-3xl font-bold text-ink">
              Add screenshots, links, and impact numbers here.
            </h3>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-ink/90"
          >
            Let&apos;s build one
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

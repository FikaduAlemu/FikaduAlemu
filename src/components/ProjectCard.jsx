import { ArrowUpRight, CalendarDays, Layers3 } from "lucide-react";

export default function ProjectCard({ project, index }) {
  return (
    <article className="group rounded-[2rem] border border-coral/10 bg-white/90 p-4 shadow-panel transition duration-300 hover:-translate-y-1 hover:shadow-float sm:p-6">
      <div className="flex flex-col gap-5 md:flex-row md:items-center">
        <div className="shrink-0 overflow-hidden rounded-[1.5rem] border border-coral/10 bg-shell md:w-60">
          <img
            src={project.image}
            alt={project.imageAlt || `${project.title} preview`}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
            loading="lazy"
          />
        </div>

        <div className="flex-1 space-y-4">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-muted">
                <span className="rounded-full font-bold border border-coral/20 bg-coral/10 px-3 py-1 capitalize tracking-[0.22em] text-[#34d399]">
                  {project.eyebrow}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border border-ink/10 bg-shell px-3 py-1">
                  <CalendarDays className="h-3.5 w-3.5" />
                  {project.year}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border border-ink/10 bg-shell px-3 py-1">
                  <Layers3 className="h-3.5 w-3.5" />
                  0{index + 1}
                </span>
              </div>

              <div>
                <h3 className="font-heading text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                  {project.title}
                </h3>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-muted">
                  {project.description}
                </p>
              </div>
            </div>

            <a
              href={project.href || "#contact"}
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-coral/15 bg-shell text-ink transition hover:border-coral/30 hover:bg-coral/10 hover:text-coral"
              aria-label={`Open ${project.title}`}
            >
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-coral/15 bg-coral/5 px-3 py-1.5 text-xs font-medium text-ink"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

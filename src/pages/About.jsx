import SectionTitle from "../components/SectionTitle";
import { focusAreas, profile, toolkit } from "../data/site";

export default function About() {
  return (
    <div className="space-y-10">
      <SectionTitle
        eyebrow="About"
        title="A portfolio template shaped for designers, developers, and creative founders."
        text="The goal here is a clean story: who you are, how you work, and why your interface taste stands out. Everything is built so you can swap the content quickly."
      />

      <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
        <article className="rounded-[2rem] border border-white/80 bg-white/75 p-8 shadow-panel backdrop-blur">
          <p className="text-sm uppercase tracking-[0.28em] text-muted">Profile</p>
          <h3 className="mt-4 font-heading text-4xl font-bold text-ink">
            {profile.name}
          </h3>
          <p className="mt-2 text-lg text-muted">{profile.role}</p>
          <p className="mt-6 text-base leading-8 text-muted">{profile.summary}</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.5rem] border border-ink/10 bg-shell/90 p-4">
              <p className="text-xs uppercase tracking-[0.24em] text-muted">Location</p>
              <p className="mt-2 text-sm font-medium text-ink">{profile.location}</p>
            </div>
            <div className="rounded-[1.5rem] border border-ink/10 bg-shell/90 p-4">
              <p className="text-xs uppercase tracking-[0.24em] text-muted">Email</p>
              <p className="mt-2 text-sm font-medium text-ink">{profile.email}</p>
            </div>
          </div>
        </article>

        <article className="rounded-[2rem] border border-white/80 bg-white/75 p-8 shadow-panel backdrop-blur">
          <p className="text-sm uppercase tracking-[0.28em] text-muted">Toolkit</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {toolkit.map((item) => (
              <div
                key={item}
                className="rounded-[1.3rem] border border-ink/10 bg-shell/80 px-4 py-4 text-sm font-medium text-ink"
              >
                {item}
              </div>
            ))}
          </div>
        </article>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {focusAreas.map(({ title, text, icon: Icon }) => (
          <article
            key={title}
            className="rounded-[2rem] border border-white/80 bg-white/75 p-6 shadow-panel backdrop-blur"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-ink text-white">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="mt-6 font-heading text-2xl font-bold text-ink">{title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{text}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

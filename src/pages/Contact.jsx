import { ArrowRight, Send } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import { contactCards } from "../data/site";

export default function Contact() {
  return (
    <div className="space-y-10">
      <SectionTitle
        eyebrow="Contact"
        title="A simple final section that turns the portfolio into a real client touchpoint."
        text="You can keep this lightweight with direct contact details, or replace it with a real form later. The current layout is built to look complete immediately."
      />

      <div className="grid gap-6 lg:grid-cols-3">
        {contactCards.map(({ title, value, note, icon: Icon }) => (
          <article
            key={title}
            className="rounded-[2rem] border border-white/80 bg-white/75 p-6 shadow-panel backdrop-blur"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-ink text-white">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="mt-6 font-heading text-2xl font-bold text-ink">{title}</h3>
            <p className="mt-3 text-sm font-semibold text-ink">{value}</p>
            <p className="mt-3 text-sm leading-7 text-muted">{note}</p>
          </article>
        ))}
      </div>

      <div className="overflow-hidden rounded-[2rem] border border-white/80 bg-ink p-8 text-white shadow-float">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-white/55">
              Availability
            </p>
            <h3 className="font-heading text-4xl font-bold tracking-tight">
              Let this portfolio sell the atmosphere before the first call.
            </h3>
            <p className="max-w-xl text-base leading-8 text-white/70">
              Pair this polished shell with your real work, then adjust the copy in the data file to make the site feel completely yours.
            </p>
          </div>

          <div className="rounded-[1.8rem] border border-white/10 bg-white/10 p-6 backdrop-blur">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-coral text-ink">
                <Send className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-white/55">
                  Next move
                </p>
                <p className="font-heading text-2xl font-bold">Customize the content</p>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              {[
                "Update name, email, and summaries in src/data/site.js",
                "Replace project titles and descriptions with your real work",
                "Add live links, screenshots, or a contact form if you want more depth",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-white/80"
                >
                  <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-coral" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

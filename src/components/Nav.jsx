import { profile } from "../data/site";

import {
  Github,
  Linkedin,
} from "lucide-react";

export default function AppShell({ children }) {

  const navItems = [
    { label: <Github />, href: "https://github.com/fikadualemu" },
    { label: <Linkedin />, href: "https://linkedin.com/in/fikadualemu" },
  ];

  return (
    <div className="sticky top-0 z-50 overflow-x-hidden  text-ink">
      <div className="relative mx-auto flex  max-w-6xl flex-col px-4 pb-10 sm:px-6 lg:px-8">
        <header className="sticky top-0 z-40 py-4">
          <div className="rounded-full border border-coral/10 bg-white/85 px-4 py-3 shadow-panel backdrop-blur xl:px-6">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <a href="#home" className="flex justify-center bg-[#B58C3D] rounded-full h-10 w-10 items-center">
                  <h2 className="text-white font-bold">FA</h2>
                </a>
              </div>

              

              <div className="flex items-center gap-2">
               {[Github, Linkedin].map((Icon, i) => (
                  <a key={i} href={navItems[i].href}
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-600 hover:text-slate-900 hover:border-slate-400 transition-all">
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>

          </div>
        </header>

        {/* <main className="flex-1 py-6 md:py-10">{children}</main> */}

        {/* <footer className="font-body mt-12 rounded-[2rem] border border-coral/10 bg-white/90 px-6 py-8 shadow-panel backdrop-blur">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="space-y-3">
              <a href="#home" className="font-heading text-2xl font-bold text-coral">
                {profile.name}
              </a>
              <p className="max-w-xs text-sm leading-7 text-muted">
                Building clean, responsive, and motion-rich web experiences with a practical full-stack mindset.
              </p>
            </div>

            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-coral">
                Quick Links
              </p>
              <div className="grid gap-2 text-sm text-muted">
                {navItems.map((item) => (
                  <a key={item.href} href={item.href} className="transition hover:text-ink">
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-coral">
                Contact
              </p>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 text-sm text-muted transition hover:text-ink"
              >
                {profile.email}
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <p className="text-sm text-muted">{profile.location}</p>
            </div>
          </div>

          <div className=" flex w-full justify-center items-center font-semibold mt-8 border-t border-coral/10 pt-4 text-xs text-muted">
            Copyright {new Date().getFullYear()} <span className="text-transparent bg-clip-text bg-gradient-to-br from-orange-500 to-coral pl-1">{profile.name}</span> . All rights reserved.
          </div>
        </footer> */}
      </div>
    </div>
  );
}




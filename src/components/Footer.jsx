import { useState } from "react";
import { ArrowUpRight, Mail, Menu, X } from "lucide-react";
import { profile } from "../data/site";
import { BsCss, BsGit, BsGithub, BsJavascript, BsTypescript } from 'react-icons/bs'
import { GrLinkedin,GrMail} from 'react-icons/gr'
import { DiGithubBadge} from 'react-icons/di'
const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
];

export default function AppShell({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="relative  overflow-x-hidden bg-white text-ink">
      <div className="relative mx-auto flex max-w-6xl flex-col px-4 pb-10 sm:px-6 lg:px-8">
        {/* <header className="sticky top-0 z-40 py-4">
          <div className="rounded-full border border-coral/10 bg-white/85 px-4 py-3 shadow-panel backdrop-blur xl:px-6">
            <div className="flex items-center justify-between gap-4">
              <a href="#home" className="font-heading text-lg font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-orange-500 to-coral">
                {profile.name}
              </a>

              <nav className="hidden items-center gap-2 md:flex">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="rounded-full px-4 py-2 text-sm font-medium text-muted transition hover:bg-coral/8 hover:text-ink"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <div className="hidden md:flex">
                
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2  px-2 py-2 text-sm font-semibold text-ink transition hover:brightness-95"
                >
                  <BsGithub/>
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2 px-2 py-2 text-sm font-semibold text-ink  transition hover:brightness-95"
                >
                  
                  <GrLinkedin/>
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex text-ink items-center gap-2  px-2 py-2 text-sm font-semibold  transition hover:brightness-95"
                >
                  <GrMail size={18}/>
                </a>
              </div>

              <button
                type="button"
                className="inline-flex rounded-full border border-coral/10 bg-white p-2 text-ink md:hidden"
                onClick={() => setMobileOpen((value) => !value)}
                aria-label="Toggle navigation"
              >
                {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>

            {mobileOpen && (
              <div className="mt-4 grid gap-2 border-t border-coral/10 pt-4 md:hidden">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-2xl bg-shell px-4 py-3 font-body text-sm font-medium text-muted transition hover:bg-coral/5 hover:text-ink"
                  >
                    {item.label}
                  </a>
                ))}
                <div className="flex justify-center items-center gap-3">
                  
                </div>
                <a
                  href={`mailto:${profile.email}`}
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-coral px-4 py-3 text-sm font-semibold text-white"
                >
                  <Mail className="h-4 w-4" />
                  Contact
                </a>
              </div>
            )}
          </div>
        </header> */}

        {/* <main className="flex-1 py-6 md:py-10">{children}</main> */}

        <footer className="font-body mt-12 rounded-[1rem] border border-coral/10 bg-white/90 px-6 py-8 shadow-panel backdrop-blur">
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
        </footer>
      </div>
    </div>
  );
}




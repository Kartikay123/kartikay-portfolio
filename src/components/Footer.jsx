import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi'
import { SiLeetcode, SiReact, SiVite, SiTailwindcss, SiBootstrap } from 'react-icons/si'
import { navLinks, profile } from '../data/portfolio'

const socials = [
  { icon: FiGithub, href: profile.social.github, label: 'GitHub' },
  { icon: FiLinkedin, href: profile.social.linkedin, label: 'LinkedIn' },
  { icon: SiLeetcode, href: profile.social.leetcode, label: 'LeetCode' },
  { icon: FiMail, href: profile.social.email, label: 'Email' },
]

const builtWith = [
  { icon: SiReact, label: 'React' },
  { icon: SiVite, label: 'Vite' },
  { icon: SiTailwindcss, label: 'Tailwind' },
  { icon: SiBootstrap, label: 'Bootstrap' },
]

const handleNav = (e, id) => {
  e.preventDefault()
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-200/70 dark:border-white/10">
      <div className="container-x py-12">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <a href="#home" onClick={(e) => handleNav(e, 'home')} className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand-500 via-accent-violet to-accent-cyan text-sm font-extrabold text-white shadow-glow">
                {profile.initials}
              </span>
              <span className="text-base font-bold tracking-tight text-slate-900 dark:text-white">
                {profile.firstName}
                <span className="gradient-text">.dev</span>
              </span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-500 dark:text-slate-400">
              {profile.title} based in Bengaluru. Crafting fast, scalable and beautiful web experiences.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 text-slate-500 transition-all hover:-translate-y-1 hover:border-brand-400 hover:text-brand-600 dark:border-white/10 dark:text-slate-400 dark:hover:text-white"
                >
                  <Icon className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">Navigate</h4>
            <ul className="mt-4 grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => handleNav(e, link.id)}
                    className="text-sm text-slate-500 transition-colors hover:text-brand-600 dark:text-slate-400 dark:hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">Say hello</h4>
            <ul className="mt-4 flex flex-col gap-2 text-sm text-slate-500 dark:text-slate-400">
              <li>
                <a href={profile.social.email} className="transition-colors hover:text-brand-600 dark:hover:text-white">
                  {profile.email}
                </a>
              </li>
              <li>
                <a href={`tel:${profile.phoneRaw}`} className="transition-colors hover:text-brand-600 dark:hover:text-white">
                  {profile.phone}
                </a>
              </li>
              <li>{profile.location}</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-200/70 pt-6 dark:border-white/10 sm:flex-row">
          <p className="flex items-center gap-1.5 text-xs text-slate-400">
            © {2026} {profile.name}. Built with
            <FiHeart className="h-3.5 w-3.5 text-rose-500" />
            using
          </p>
          <div className="flex items-center gap-4">
            {builtWith.map(({ icon: Icon, label }) => (
              <span key={label} className="flex items-center gap-1.5 text-xs font-medium text-slate-400">
                <Icon className="h-4 w-4" />
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

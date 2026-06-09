import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiDownload, FiMenu, FiX } from 'react-icons/fi'
import ThemeToggle from './ThemeToggle'
import { navLinks, profile } from '../data/portfolio'
import { useActiveSection } from '../hooks/useActiveSection'

const sectionIds = navLinks.map((l) => l.id)

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const active = useActiveSection(sectionIds)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const handleNav = (e, id) => {
    e.preventDefault()
    setOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-slate-200/70 bg-white/80 py-2.5 backdrop-blur-xl dark:border-white/10 dark:bg-ink-950/70'
          : 'border-b border-transparent bg-transparent py-4'
      }`}
    >
      <nav className="container-x flex items-center justify-between gap-4">
        {/* Brand */}
        <a
          href="#home"
          onClick={(e) => handleNav(e, 'home')}
          className="group flex items-center gap-2.5"
        >
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand-500 via-accent-violet to-accent-cyan text-sm font-extrabold text-white shadow-glow transition-transform group-hover:scale-105">
            {profile.initials}
          </span>
          <span className="hidden text-base font-bold tracking-tight text-slate-900 dark:text-white sm:block">
            {profile.firstName}
            <span className="gradient-text">.dev</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const isActive = active === link.id
            return (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={(e) => handleNav(e, link.id)}
                  className={`relative rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                    isActive
                      ? 'text-brand-600 dark:text-white'
                      : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-brand-500/10 dark:bg-white/10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.label}
                </a>
              </li>
            )
          })}
        </ul>

        {/* Right actions */}
        <div className="flex items-center gap-2.5">
          <a
            href={profile.resumeUrl}
            download
            className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-accent-violet px-4 py-2 text-sm font-semibold text-white shadow-glow transition-transform hover:-translate-y-0.5 sm:inline-flex"
          >
            <FiDownload className="h-4 w-4" />
            Résumé
          </a>
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white/70 text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 lg:hidden"
          >
            {open ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 top-0 -z-10 bg-ink-950/40 backdrop-blur-sm lg:hidden"
            />
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="container-x lg:hidden"
            >
              <ul className="mt-3 flex flex-col gap-1 rounded-2xl border border-slate-200/80 bg-white/95 p-3 shadow-card backdrop-blur-xl dark:border-white/10 dark:bg-ink-850/95">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      onClick={(e) => handleNav(e, link.id)}
                      className={`block rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${
                        active === link.id
                          ? 'bg-brand-500/10 text-brand-600 dark:text-white'
                          : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/5'
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li className="mt-1">
                  <a
                    href={profile.resumeUrl}
                    download
                    className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-500 to-accent-violet px-4 py-3 text-sm font-semibold text-white"
                  >
                    <FiDownload className="h-4 w-4" />
                    Download Résumé
                  </a>
                </li>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

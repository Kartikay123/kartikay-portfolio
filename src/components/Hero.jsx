import { motion } from 'framer-motion'
import {
  FiArrowDown,
  FiArrowRight,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
} from 'react-icons/fi'
import { SiLeetcode } from 'react-icons/si'
import {
  SiReact,
  SiSpringboot,
  SiJavascript,
  SiNodedotjs,
  SiTailwindcss,
  SiDocker,
  SiPython,
} from 'react-icons/si'
import { profile } from '../data/portfolio'
import { useTypewriter } from '../hooks/useTypewriter'
import { fadeUp, staggerContainer } from '../lib/motion'

const socials = [
  { icon: FiGithub, href: profile.social.github, label: 'GitHub' },
  { icon: FiLinkedin, href: profile.social.linkedin, label: 'LinkedIn' },
  { icon: SiLeetcode, href: profile.social.leetcode, label: 'LeetCode' },
  { icon: FiMail, href: profile.social.email, label: 'Email' },
]

const orbitIcons = [
  { icon: SiReact, color: '#61DAFB' },
  { icon: SiSpringboot, color: '#6DB33F' },
  { icon: SiJavascript, color: '#F7DF1E' },
  { icon: SiNodedotjs, color: '#5FA04E' },
  { icon: SiTailwindcss, color: '#06B6D4' },
  { icon: SiDocker, color: '#2496ED' },
  { icon: SiPython, color: '#3776AB' },
]

// Evenly distribute the icons around the ring (start at the top, sweep clockwise).
const ORBIT_RADIUS = 47 // % of the (square) container
const orbitPositions = orbitIcons.map((_, i) => {
  const angle = (i / orbitIcons.length) * 2 * Math.PI - Math.PI / 2
  return {
    left: 50 + ORBIT_RADIUS * Math.cos(angle),
    top: 50 + ORBIT_RADIUS * Math.sin(angle),
  }
})

export default function Hero() {
  const role = useTypewriter(profile.roles)

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16">
      <div className="container-x grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
        {/* Left: copy */}
        <motion.div
          variants={staggerContainer(0.12, 0.1)}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center text-center lg:items-start lg:text-left"
        >
          <motion.div
            variants={fadeUp}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Available for new opportunities
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-500 dark:text-slate-400"
          >
            <FiMapPin className="h-4 w-4 text-brand-500" />
            {profile.location}
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            Hi, I’m <span className="gradient-text-animated">{profile.firstName}</span>
            <span className="text-brand-500">.</span>
          </motion.h1>

          <motion.div
            variants={fadeUp}
            className="mt-4 flex min-h-[2.5rem] items-center text-xl font-bold text-slate-700 dark:text-slate-200 sm:text-2xl lg:text-3xl"
          >
            <span className="font-mono text-brand-500">{'<'}</span>
            <span className="px-1">{role}</span>
            <span className="inline-block h-7 w-[3px] animate-pulse bg-brand-500 sm:h-8" />
            <span className="font-mono text-brand-500">{'/>'}</span>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl text-base text-slate-500 dark:text-slate-400 sm:text-lg"
          >
            {profile.tagline}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <a
              href="#experience"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="btn-primary group"
            >
              View my work
              <FiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href={profile.resumeUrl} download className="btn-ghost group">
              <FiDownload className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              Download Résumé
            </a>
          </motion.div>

          {/* Socials */}
          <motion.div variants={fadeUp} className="mt-9 flex items-center gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white/70 text-slate-600 transition-all hover:-translate-y-1 hover:border-brand-400 hover:text-brand-600 hover:shadow-glow dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:text-white"
              >
                <Icon className="h-[18px] w-[18px]" />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: animated avatar orb */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto hidden aspect-square w-full max-w-md items-center justify-center md:flex"
        >
          {/* rotating gradient ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-6 rounded-full"
            style={{
              background:
                'conic-gradient(from 0deg, #6366f1, #a78bfa, #22d3ee, #6366f1)',
              maskImage: 'radial-gradient(transparent 60%, black 61%)',
              WebkitMaskImage: 'radial-gradient(transparent 60%, black 61%)',
              opacity: 0.85,
            }}
          />
          <div className="absolute inset-10 rounded-full border border-dashed border-brand-400/40" />

          {/* central glass disc with initials */}
          <div className="relative grid h-48 w-48 place-items-center rounded-full bg-gradient-to-br from-brand-500/90 via-accent-violet/90 to-accent-cyan/90 shadow-glow lg:h-56 lg:w-56">
            <div className="grid h-[88%] w-[88%] place-items-center rounded-full bg-white/95 dark:bg-ink-900">
              <span className="bg-gradient-to-br from-brand-500 to-accent-cyan bg-clip-text font-display text-6xl font-extrabold text-transparent lg:text-7xl">
                {profile.initials}
              </span>
            </div>
          </div>

          {/* floating tech icons — positioning on a static wrapper so the
              Framer float animation never fights a Tailwind transform utility */}
          {orbitIcons.map(({ icon: Icon, color }, i) => (
            <div
              key={i}
              className="absolute"
              style={{
                left: `${orbitPositions[i].left}%`,
                top: `${orbitPositions[i].top}%`,
                transform: 'translate(-50%, -50%)',
              }}
            >
              <motion.div
                animate={{ y: [0, -14, 0] }}
                transition={{ duration: 4 + i * 0.4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.45 }}
                className="grid h-12 w-12 place-items-center rounded-2xl border border-slate-200/80 bg-white/90 shadow-card backdrop-blur-md dark:border-white/10 dark:bg-ink-800/90"
              >
                <Icon className="h-6 w-6" style={{ color }} />
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        onClick={(e) => {
          e.preventDefault()
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-400 sm:flex"
        aria-label="Scroll to about"
      >
        Scroll
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="grid h-9 w-9 place-items-center rounded-full border border-slate-300 dark:border-white/15"
        >
          <FiArrowDown className="h-4 w-4" />
        </motion.span>
      </motion.a>
    </section>
  )
}

import { motion } from 'framer-motion'
import { FiBriefcase, FiMapPin, FiCalendar } from 'react-icons/fi'
import SectionHeading from './SectionHeading'
import { experiences } from '../data/portfolio'
import { fadeUp, viewportOnce } from '../lib/motion'

function TimelineCard({ exp, index }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      transition={{ delay: index * 0.05 }}
      className="relative pl-12 sm:pl-16"
    >
      {/* node */}
      <span className="absolute left-0 top-1.5 grid h-9 w-9 -translate-x-1/2 place-items-center rounded-full border border-slate-200 bg-white text-brand-500 shadow-soft dark:border-white/10 dark:bg-ink-850 sm:left-1">
        <FiBriefcase className="h-4 w-4" />
        {exp.current && (
          <span className="absolute -right-0.5 -top-0.5 flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500 ring-2 ring-white dark:ring-ink-850" />
          </span>
        )}
      </span>

      <div className="card-surface group p-6 transition-all hover:border-brand-400/50 hover:shadow-glow sm:p-7">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white sm:text-xl">{exp.role}</h3>
            <p className="mt-0.5 font-semibold text-brand-600 dark:text-brand-300">{exp.company}</p>
          </div>
          <div className="flex flex-col gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400 sm:items-end">
            <span className="inline-flex items-center gap-1.5">
              {exp.current && (
                <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-emerald-600 dark:text-emerald-400">
                  Current
                </span>
              )}
              <FiCalendar className="h-3.5 w-3.5" />
              {exp.period}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <FiMapPin className="h-3.5 w-3.5" />
              {exp.location}
            </span>
          </div>
        </div>

        <p className="mt-4 text-sm italic text-slate-500 dark:text-slate-400">{exp.summary}</p>

        <ul className="mt-4 flex flex-col gap-2.5">
          {exp.points.map((point, i) => (
            <li key={i} className="flex gap-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-brand-500 to-accent-cyan" />
              {point}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-2">
          {exp.tech.map((t) => (
            <span key={t} className="chip">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container-x">
        <SectionHeading
          eyebrow="Career"
          title="Where I’ve made an"
          highlight="impact."
          subtitle="Three years across product engineering, design systems and AI evaluation."
        />

        <div className="relative mx-auto max-w-3xl">
          {/* vertical line */}
          <span className="absolute bottom-2 left-0 top-2 w-px bg-gradient-to-b from-brand-500/60 via-accent-violet/40 to-transparent sm:left-1" />
          <div className="flex flex-col gap-10">
            {experiences.map((exp, i) => (
              <TimelineCard key={exp.company} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

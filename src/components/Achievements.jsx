import { motion } from 'framer-motion'
import { FaTrophy, FaMedal, FaAward, FaUsers, FaGraduationCap } from 'react-icons/fa6'
import SectionHeading from './SectionHeading'
import { achievements, education } from '../data/portfolio'
import { fadeUp, scaleIn, staggerContainer, viewportOnce } from '../lib/motion'

const iconMap = {
  trophy: FaTrophy,
  medal: FaMedal,
  award: FaAward,
  users: FaUsers,
}

export default function Achievements() {
  return (
    <section id="achievements" className="section">
      <div className="container-x">
        <SectionHeading
          eyebrow="Milestones"
          title="Achievements &"
          highlight="education."
          subtitle="Competitive programming, hackathons and a CS degree that anchors the engineering."
        />

        {/* Achievements grid */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {achievements.map((a) => {
            const Icon = iconMap[a.icon] ?? FaAward
            return (
              <motion.div
                key={a.title}
                variants={scaleIn}
                whileHover={{ y: -6 }}
                className="card-surface group relative overflow-hidden p-6 text-center hover:border-brand-400/50 hover:shadow-glow"
              >
                <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br from-brand-500/10 to-accent-cyan/10 blur-2xl transition-opacity duration-300 group-hover:from-brand-500/25 group-hover:to-accent-cyan/25" />
                <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-amber-400 via-brand-500 to-accent-cyan text-white shadow-glow transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <Icon className="h-6 w-6" />
                </span>
                <p className="mt-4 font-display text-2xl font-extrabold">
                  <span className="gradient-text">{a.metric}</span>
                </p>
                <h3 className="mt-1 text-sm font-bold text-slate-900 dark:text-white">{a.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-500 dark:text-slate-400">{a.detail}</p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Education */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-8"
        >
          {education.map((edu) => (
            <motion.div
              key={edu.school}
              variants={fadeUp}
              className="card-surface flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7"
            >
              <div className="flex items-center gap-4">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-accent-violet text-white shadow-glow">
                  <FaGraduationCap className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">{edu.school}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{edu.degree}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 sm:flex-col sm:items-end sm:gap-1">
                <span className="chip">{edu.period}</span>
                <span className="text-sm font-bold text-brand-600 dark:text-brand-300">{edu.detail}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

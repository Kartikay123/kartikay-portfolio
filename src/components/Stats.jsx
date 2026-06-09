import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { stats } from '../data/portfolio'
import { useCountUp } from '../hooks/useCountUp'
import { fadeUp, staggerContainer, viewportOnce } from '../lib/motion'

function StatItem({ value, suffix, label, start }) {
  const count = useCountUp(value, start)
  return (
    <motion.div
      variants={fadeUp}
      className="card-surface group relative overflow-hidden p-6 text-center"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-500/0 to-accent-cyan/0 opacity-0 transition-opacity duration-300 group-hover:from-brand-500/5 group-hover:to-accent-cyan/5 group-hover:opacity-100" />
      <div className="font-display text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
        <span className="gradient-text">
          {count.toLocaleString()}
          {suffix}
        </span>
      </div>
      <p className="mt-2 text-sm font-medium text-slate-500 dark:text-slate-400">{label}</p>
    </motion.div>
  )
}

export default function Stats() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.4 })

  return (
    <section ref={ref} className="container-x -mt-6 pb-4 sm:-mt-10">
      <motion.div
        variants={staggerContainer(0.12)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="grid grid-cols-2 gap-4 lg:grid-cols-4"
      >
        {stats.map((s) => (
          <StatItem key={s.label} {...s} start={inView} />
        ))}
      </motion.div>
    </section>
  )
}

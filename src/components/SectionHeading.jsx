import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, viewportOnce } from '../lib/motion'

export default function SectionHeading({ eyebrow, title, highlight, subtitle, center = true }) {
  return (
    <motion.div
      variants={staggerContainer(0.12)}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className={`mb-12 flex flex-col gap-4 sm:mb-16 ${
        center ? 'items-center text-center' : 'items-start text-left'
      }`}
    >
      {eyebrow && (
        <motion.span variants={fadeUp} className="eyebrow">
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        variants={fadeUp}
        className="max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl"
      >
        {title} {highlight && <span className="gradient-text">{highlight}</span>}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={fadeUp}
          className={`max-w-2xl text-base text-slate-500 dark:text-slate-400 sm:text-lg ${
            center ? 'mx-auto' : ''
          }`}
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div
        variants={fadeUp}
        className={`h-1 w-20 rounded-full bg-gradient-to-r from-brand-500 to-accent-cyan ${
          center ? 'mx-auto' : ''
        }`}
      />
    </motion.div>
  )
}

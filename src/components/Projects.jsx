import { motion } from 'framer-motion'
import { Row, Col } from 'react-bootstrap'
import { FiExternalLink, FiGithub, FiArrowUpRight, FiFolder } from 'react-icons/fi'
import SectionHeading from './SectionHeading'
import { projects } from '../data/portfolio'
import { fadeUp, viewportOnce } from '../lib/motion'

function ProjectCard({ project, index }) {
  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      transition={{ delay: index * 0.08 }}
      whileHover={{ y: -8 }}
      className="card-surface group relative flex h-full flex-col overflow-hidden hover:border-brand-400/50 hover:shadow-glow"
    >
      {/* gradient top accent */}
      <div className={`h-1.5 w-full bg-gradient-to-r ${project.accent}`} />

      {/* decorative glow on hover */}
      <div
        className={`pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br ${project.accent} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20`}
      />

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <span
            className={`grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${project.accent} text-white shadow-glow`}
          >
            <FiFolder className="h-5 w-5" />
          </span>
          <div className="flex items-center gap-2">
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.name} source`}
              className="grid h-9 w-9 place-items-center rounded-full border border-slate-200 text-slate-500 transition-colors hover:border-brand-400 hover:text-brand-600 dark:border-white/10 dark:text-slate-400 dark:hover:text-white"
            >
              <FiGithub className="h-4 w-4" />
            </a>
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.name} live demo`}
              className="grid h-9 w-9 place-items-center rounded-full border border-slate-200 text-slate-500 transition-colors hover:border-brand-400 hover:text-brand-600 dark:border-white/10 dark:text-slate-400 dark:hover:text-white"
            >
              <FiExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-5 flex items-center gap-2">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">{project.name}</h3>
          {project.featured && (
            <span className="rounded-full bg-brand-500/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-brand-600 dark:text-brand-300">
              Featured
            </span>
          )}
        </div>
        <p className="mt-1 text-sm font-semibold text-brand-600/90 dark:text-brand-300/90">{project.blurb}</p>
        <p className="mt-3 text-sm leading-relaxed text-slate-500 dark:text-slate-400">{project.description}</p>

        <ul className="mt-4 flex flex-1 flex-col gap-2">
          {project.points.map((point, i) => (
            <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              <FiArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
              {point}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-2 border-t border-slate-200/70 pt-5 dark:border-white/10">
          {project.tech.map((t) => (
            <span key={t} className="font-mono text-xs font-semibold text-slate-500 dark:text-slate-400">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container-x">
        <SectionHeading
          eyebrow="Selected work"
          title="Projects I’m"
          highlight="proud of."
          subtitle="A couple of end-to-end builds — from a hackathon-born ticketing platform to an AI-assisted job tracker."
        />

        <Row className="g-4">
          {projects.map((project, i) => (
            <Col key={project.name} xs={12} lg={6} className="d-flex">
              <ProjectCard project={project} index={i} />
            </Col>
          ))}
        </Row>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-10 text-center text-sm text-slate-500 dark:text-slate-400"
        >
          Want to see more?{' '}
          <a
            href={projects[0].links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-brand-600 underline-offset-4 hover:underline dark:text-brand-300"
          >
            Explore my GitHub →
          </a>
        </motion.p>
      </div>
    </section>
  )
}

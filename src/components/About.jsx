import { motion } from 'framer-motion'
import {
  FiServer,
  FiLayout,
  FiZap,
  FiGitBranch,
  FiBriefcase,
  FiMapPin,
  FiMail,
} from 'react-icons/fi'
import SectionHeading from './SectionHeading'
import { profile } from '../data/portfolio'
import { fadeUp, scaleIn, staggerContainer, viewportOnce } from '../lib/motion'

const highlights = [
  {
    icon: FiLayout,
    title: 'Scalable UI Architecture',
    text: 'Reusable component systems & design-system thinking across 7+ products.',
  },
  {
    icon: FiServer,
    title: 'Real-Time Backend',
    text: 'Spring Boot microservices over WebSockets, with OAuth 2.0 SSO via Spring Security.',
  },
  {
    icon: FiZap,
    title: 'Data-Rich Dashboards',
    text: '40+ metrics and 50+ Apache ECharts visualizations, tuned for large datasets.',
  },
  {
    icon: FiGitBranch,
    title: 'Performance & DX',
    text: 'Code-splitting, lazy loading and memoization — validated with Lighthouse & DevTools.',
  },
]

const quickFacts = [
  { icon: FiBriefcase, label: 'Open to', value: 'Frontend / Full-Stack roles' },
  { icon: FiMapPin, label: 'Based in', value: 'Bengaluru, India' },
  { icon: FiMail, label: 'Reach me', value: profile.email },
]

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container-x">
        <SectionHeading
          eyebrow="About me"
          title="Engineer who sweats the"
          highlight="details."
          subtitle="A full-stack engineer turning complex problems into clean, performant products — from React interfaces to Spring Boot services."
        />

        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Bio */}
          <motion.div
            variants={staggerContainer(0.12)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="flex flex-col gap-5"
          >
            {profile.about.map((para, i) => (
              <motion.p
                key={i}
                variants={fadeUp}
                className="text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg"
              >
                {para}
              </motion.p>
            ))}

            <motion.div variants={fadeUp} className="mt-2 flex flex-col gap-3">
              {quickFacts.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-3">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-brand-500/10 text-brand-500">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="text-sm text-slate-500 dark:text-slate-400">
                    <span className="font-semibold text-slate-700 dark:text-slate-200">{label}: </span>
                    {value}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Highlight cards */}
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid gap-4 sm:grid-cols-2"
          >
            {highlights.map(({ icon: Icon, title, text }) => (
              <motion.div
                key={title}
                variants={scaleIn}
                whileHover={{ y: -6 }}
                className="card-surface group p-6 hover:border-brand-400/60 hover:shadow-glow"
              >
                <span className="mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-accent-cyan text-white shadow-glow transition-transform group-hover:scale-110">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">{text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

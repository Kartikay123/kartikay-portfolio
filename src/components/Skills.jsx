import { motion } from 'framer-motion'
import { Row, Col } from 'react-bootstrap'
import { FiCode, FiLayout, FiServer, FiTool } from 'react-icons/fi'
import SectionHeading from './SectionHeading'
import { skillGroups } from '../data/portfolio'
import { fadeUp, scaleIn, staggerContainer, viewportOnce } from '../lib/motion'

const groupIcon = {
  code: FiCode,
  layout: FiLayout,
  server: FiServer,
  tool: FiTool,
}

function SkillChip({ skill }) {
  const Icon = skill.icon
  return (
    <motion.span
      variants={scaleIn}
      whileHover={{ y: -3, scale: 1.04 }}
      className="chip gap-2 px-3.5 py-2 text-sm hover:border-brand-400/70 hover:text-slate-900 dark:hover:text-white"
    >
      <Icon className="h-4 w-4 shrink-0" style={{ color: skill.color }} />
      {skill.name}
    </motion.span>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container-x">
        <SectionHeading
          eyebrow="Tech stack"
          title="Tools I build"
          highlight="with."
          subtitle="From low-level design to pixel-perfect UI — a stack tuned for shipping scalable products fast."
        />

        <Row className="g-4">
          {skillGroups.map((group, i) => {
            const GroupIcon = groupIcon[group.icon] ?? FiCode
            return (
              <Col key={group.title} xs={12} md={6} lg={4} className="d-flex">
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={viewportOnce}
                  transition={{ delay: i * 0.05 }}
                  className="card-surface flex w-full flex-col gap-5 p-6 hover:border-brand-400/40 sm:p-7"
                >
                  <div className="flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-brand-500/15 to-accent-cyan/15 text-brand-500">
                      <GroupIcon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">{group.title}</h3>
                      <p className="text-xs font-medium text-slate-400">{group.skills.length} technologies</p>
                    </div>
                  </div>

                  <motion.div
                    variants={staggerContainer(0.05)}
                    initial="hidden"
                    whileInView="show"
                    viewport={viewportOnce}
                    className="flex flex-wrap gap-2.5"
                  >
                    {group.skills.map((skill) => (
                      <SkillChip key={skill.name} skill={skill} />
                    ))}
                  </motion.div>
                </motion.div>
              </Col>
            )
          })}
        </Row>
      </div>
    </section>
  )
}

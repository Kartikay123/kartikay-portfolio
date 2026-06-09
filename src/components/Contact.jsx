import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiGithub,
  FiLinkedin,
  FiCheckCircle,
} from 'react-icons/fi'
import { SiLeetcode } from 'react-icons/si'
import SectionHeading from './SectionHeading'
import { profile } from '../data/portfolio'
import { fadeUp, staggerContainer, viewportOnce } from '../lib/motion'

const contactCards = [
  { icon: FiMail, label: 'Email', value: profile.email, href: profile.social.email },
  { icon: FiPhone, label: 'Phone', value: profile.phone, href: `tel:${profile.phoneRaw}` },
  { icon: FiMapPin, label: 'Location', value: profile.location, href: null },
]

const socialLinks = [
  { icon: FiGithub, href: profile.social.github, label: 'GitHub' },
  { icon: FiLinkedin, href: profile.social.linkedin, label: 'LinkedIn' },
  { icon: SiLeetcode, href: profile.social.leetcode, label: 'LeetCode' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name || 'someone'}`)
    const body = encodeURIComponent(
      `Hi Kartikay,\n\n${form.message}\n\n— ${form.name}${form.email ? ` (${form.email})` : ''}`,
    )
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  const inputClass =
    'w-full rounded-xl border border-slate-200 bg-white/70 px-4 py-3 text-sm text-slate-700 outline-none transition-colors placeholder:text-slate-400 focus:border-brand-400 focus:ring-2 focus:ring-brand-400/30 dark:border-white/10 dark:bg-white/5 dark:text-slate-100 dark:placeholder:text-slate-500'

  return (
    <section id="contact" className="section">
      <div className="container-x">
        <SectionHeading
          eyebrow="Get in touch"
          title="Let’s build something"
          highlight="together."
          subtitle="Have a role, a project, or just want to say hi? My inbox is always open."
        />

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          {/* Left: info */}
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="flex flex-col gap-4"
          >
            {contactCards.map(({ icon: Icon, label, value, href }) => {
              const inner = (
                <>
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-accent-cyan text-white shadow-glow transition-transform group-hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">{label}</p>
                    <p className="truncate text-sm font-semibold text-slate-700 dark:text-slate-200">{value}</p>
                  </div>
                </>
              )
              return href ? (
                <motion.a
                  key={label}
                  variants={fadeUp}
                  href={href}
                  className="card-surface group flex items-center gap-4 p-5 hover:border-brand-400/50 hover:shadow-glow"
                >
                  {inner}
                </motion.a>
              ) : (
                <motion.div
                  key={label}
                  variants={fadeUp}
                  className="card-surface flex items-center gap-4 p-5"
                >
                  {inner}
                </motion.div>
              )
            })}

            <motion.div variants={fadeUp} className="mt-2">
              <p className="mb-3 text-sm font-semibold text-slate-500 dark:text-slate-400">Find me online</p>
              <div className="flex items-center gap-3">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="grid h-12 w-12 place-items-center rounded-2xl border border-slate-200 bg-white/70 text-slate-600 transition-all hover:-translate-y-1 hover:border-brand-400 hover:text-brand-600 hover:shadow-glow dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:text-white"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right: form */}
          <motion.form
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            onSubmit={handleSubmit}
            className="card-surface flex flex-col gap-5 p-6 sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Ada Lovelace"
                  className={inputClass}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@company.com"
                  className={inputClass}
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about the role or project…"
                className={`${inputClass} resize-none`}
              />
            </div>
            <button type="submit" className="btn-primary group w-full sm:w-auto sm:self-start">
              {sent ? (
                <>
                  <FiCheckCircle className="h-4 w-4" />
                  Opening your mail app…
                </>
              ) : (
                <>
                  <FiSend className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  Send message
                </>
              )}
            </button>
            <p className="text-xs text-slate-400">
              This opens your email client pre-filled — or write directly to{' '}
              <a href={profile.social.email} className="font-semibold text-brand-600 dark:text-brand-300">
                {profile.email}
              </a>
              .
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

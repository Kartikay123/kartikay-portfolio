import { motion, AnimatePresence } from 'framer-motion'
import { FiMoon, FiSun } from 'react-icons/fi'

export default function ThemeToggle({ theme, toggleTheme }) {
  const isDark = theme === 'dark'
  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-full border border-slate-200 bg-white/70 text-slate-700 transition-colors hover:border-brand-400 hover:text-brand-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:text-white"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ y: -18, opacity: 0, rotate: -45 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: 18, opacity: 0, rotate: 45 }}
          transition={{ duration: 0.25 }}
          className="absolute"
        >
          {isDark ? <FiSun className="h-[18px] w-[18px]" /> : <FiMoon className="h-[18px] w-[18px]" />}
        </motion.span>
      </AnimatePresence>
    </button>
  )
}

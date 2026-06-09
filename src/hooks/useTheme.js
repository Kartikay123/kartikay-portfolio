import { useCallback, useEffect, useState } from 'react'

/**
 * Dark / light theme controller.
 * Defaults to dark (the design is dark-first) but respects a stored choice.
 */
export function useTheme() {
  const [theme, setTheme] = useState('dark')

  // Dark-first by design: honour an explicit stored choice, otherwise stay dark.
  useEffect(() => {
    const stored = localStorage.getItem('theme')
    if (stored === 'light' || stored === 'dark') setTheme(stored)
  }, [])

  // Reflect the theme onto <html> and persist it.
  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') root.classList.add('dark')
    else root.classList.remove('dark')
    localStorage.setItem('theme', theme)
    const meta = document.querySelector('meta[name="theme-color"]')
    if (meta) meta.setAttribute('content', theme === 'dark' ? '#070710' : '#ffffff')
  }, [theme])

  const toggleTheme = useCallback(() => {
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'))
  }, [])

  return { theme, toggleTheme }
}

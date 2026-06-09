import { useEffect, useState } from 'react'

/**
 * Cycles through an array of words with a type / delete effect.
 */
export function useTypewriter(words, { typeSpeed = 90, deleteSpeed = 45, pause = 1600 } = {}) {
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (!words.length) return

    const current = words[index % words.length]

    // Finished typing the full word → pause, then start deleting.
    if (!deleting && subIndex === current.length) {
      const timeout = setTimeout(() => setDeleting(true), pause)
      return () => clearTimeout(timeout)
    }

    // Finished deleting → advance to next word.
    if (deleting && subIndex === 0) {
      setDeleting(false)
      setIndex((i) => (i + 1) % words.length)
      return
    }

    const timeout = setTimeout(
      () => setSubIndex((s) => s + (deleting ? -1 : 1)),
      deleting ? deleteSpeed : typeSpeed,
    )
    return () => clearTimeout(timeout)
  }, [subIndex, deleting, index, words, typeSpeed, deleteSpeed, pause])

  const text = words.length ? words[index % words.length].substring(0, subIndex) : ''
  return text
}

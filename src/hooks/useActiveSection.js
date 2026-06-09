import { useEffect, useState } from 'react'

/**
 * Scroll-spy: returns the id of the section currently in view.
 */
export function useActiveSection(ids, offset = 0.4) {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) setActive(visible[0].target.id)
      },
      {
        rootMargin: `-${Math.round(offset * 100)}% 0px -${Math.round((1 - offset) * 100)}% 0px`,
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    )

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [ids, offset])

  return active
}

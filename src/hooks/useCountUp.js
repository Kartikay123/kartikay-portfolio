import { useEffect, useRef, useState } from 'react'

/**
 * Animates a number from 0 → target once `start` becomes true.
 * Uses an ease-out curve and requestAnimationFrame.
 */
export function useCountUp(target, start, duration = 1800) {
  const [value, setValue] = useState(0)
  const frame = useRef()

  useEffect(() => {
    if (!start) return
    let startTime

    const tick = (now) => {
      if (startTime === undefined) startTime = now
      const progress = Math.min((now - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3) // easeOutCubic
      setValue(Math.round(eased * target))
      if (progress < 1) frame.current = requestAnimationFrame(tick)
    }

    frame.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame.current)
  }, [target, start, duration])

  return value
}

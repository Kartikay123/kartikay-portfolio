/**
 * Fixed decorative background: animated gradient blobs + subtle grid.
 * Sits behind all content (pointer-events: none).
 */
export default function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Base wash */}
      <div className="absolute inset-0 bg-white transition-colors duration-500 dark:bg-ink-950" />

      {/* Subtle grid */}
      <div className="bg-grid absolute inset-0 opacity-70 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

      {/* Animated colour blobs */}
      <div className="absolute -left-40 -top-32 h-[34rem] w-[34rem] animate-blob rounded-full bg-brand-400/30 opacity-60 blur-3xl dark:bg-brand-600/25" />
      <div className="absolute -right-40 top-1/4 h-[30rem] w-[30rem] animate-blob rounded-full bg-accent-cyan/20 opacity-50 blur-3xl [animation-delay:3s] dark:bg-accent-cyan/15" />
      <div className="absolute bottom-0 left-1/3 h-[28rem] w-[28rem] animate-blob rounded-full bg-accent-violet/20 opacity-50 blur-3xl [animation-delay:6s] dark:bg-accent-violet/15" />

      {/* Top glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/40 to-transparent" />
    </div>
  )
}

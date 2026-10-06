import { motion, useReducedMotion } from 'framer-motion'
import { useRef, type ReactNode } from 'react'

export function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion()
  return (
    <motion.div className={className} initial={reduce ? false : { opacity: 0, y: 34 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.8, delay, ease: [0.2, 0.7, 0.2, 1] }}>
      {children}
    </motion.div>
  )
}

/** Glass card with reveal + subtle 3D tilt (desktop, motion-enabled only). */
export function Card({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const move = (e: React.MouseEvent) => {
    if (reduce || matchMedia('(hover: none)').matches || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5
    ref.current.style.transform = `perspective(800px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateZ(6px)`
  }
  return (
    <Reveal delay={delay}>
      <div ref={ref} className={`card glass ${className}`} onMouseMove={move} onMouseLeave={() => ref.current && (ref.current.style.transform = '')}>
        {children}
      </div>
    </Reveal>
  )
}

export const Tags = ({ items }: { items: string[] }) => (
  <div className="tags">{items.map(t => <span className="tag" key={t}>{t}</span>)}</div>
)

export function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: ReactNode }) {
  return (
    <section id={id}>
      <div className="eyebrow">{eyebrow}</div>
      <Reveal><h2>{title}</h2></Reveal>
      {children}
    </section>
  )
}

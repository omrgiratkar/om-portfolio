import { useEffect, useRef } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { profile } from '../data'

export default function Hero() {
  const pic = useRef<HTMLImageElement>(null)
  const reduce = useReducedMotion()
  useEffect(() => {
    if (reduce || innerWidth < 820) return
    const f = (e: MouseEvent) => {
      const x = e.clientX / innerWidth - 0.5, y = e.clientY / innerHeight - 0.5
      if (pic.current) pic.current.style.transform = `rotateY(${x * 12}deg) rotateX(${-y * 12}deg)`
    }
    addEventListener('mousemove', f); return () => removeEventListener('mousemove', f)
  }, [reduce])
  return (
    <section id="home" style={{ maxWidth: 1180 }}>
      <motion.div initial={reduce ? false : { opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.5 }}>
        <div className="eyebrow">{profile.location}</div>
        <h1>{profile.first} <span>{profile.last}</span></h1>
        <p className="role">{profile.title}</p>
        <p className="lead">{profile.intro}</p>
        <div className="ctas">
          <a className="btn p" href="#projects">View My Work</a>
          <a className="btn" href="/Om_Giratkar_Resume.pdf" download>Download Resume</a>
        </div>
      </motion.div>
      <motion.div className="portrait" initial={reduce ? false : { opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.6 }}>
        <div className="ring" />
        <img ref={pic} src="/profile.jpg" alt={`Portrait of ${profile.name}`} width={360} height={360} />
      </motion.div>
    </section>
  )
}

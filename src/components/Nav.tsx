import { useEffect, useState } from 'react'
import { navItems } from '../data'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')
  useEffect(() => {
    const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && setActive(e.target.id)), { rootMargin: '-45% 0px -50% 0px' })
    navItems.forEach(id => { const el = document.getElementById(id); el && io.observe(el) })
    return () => io.disconnect()
  }, [])
  return (
    <nav className={open ? 'open' : ''} aria-label="Primary">
      <button id="burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(o => !o)}>☰</button>
      <div className="m">
        {navItems.map(id => (
          <a key={id} href={`#${id}`} className={active === id ? 'on' : ''} onClick={() => setOpen(false)}>{id.toUpperCase()}</a>
        ))}
      </div>
    </nav>
  )
}

import { lazy, Suspense, useEffect, useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import { About, Experience, Projects, Skills, Education, Contact } from './components/Sections'
import { profile } from './data'

const Background3D = lazy(() => import('./components/Background3D'))

export default function App() {
  const [ready, setReady] = useState(false)
  useEffect(() => { const t = setTimeout(() => setReady(true), 700); return () => clearTimeout(t) }, [])
  return (
    <>
      <div id="loader" className={ready ? 'off' : ''} aria-hidden="true">OG</div>
      <Suspense fallback={null}><Background3D /></Suspense>
      <Nav />
      <main>
        <Hero /><About /><Experience /><Projects /><Skills /><Education /><Contact />
      </main>
      <footer>© {profile.name} · {profile.location}</footer>
    </>
  )
}

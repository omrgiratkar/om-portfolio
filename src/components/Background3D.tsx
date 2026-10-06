import { useEffect, useRef } from 'react'
import * as THREE from 'three'

/** Lightweight ambient 3D scene: particles, wireframe shapes, grid, cursor + scroll parallax. */
export default function Background3D() {
  const ref = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const canvas = ref.current!
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches
    const mobile = innerWidth < 820
    let renderer: THREE.WebGLRenderer
    try { renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false }) } catch { return }
    renderer.setPixelRatio(Math.min(devicePixelRatio, mobile ? 1.25 : 1.75))
    const scene = new THREE.Scene()
    const cam = new THREE.PerspectiveCamera(60, 1, 0.1, 100); cam.position.z = 14

    const N = mobile ? 140 : 420, pos = new Float32Array(N * 3)
    for (let i = 0; i < N * 3; i++) pos[i] = (Math.random() - 0.5) * (i % 3 === 2 ? 24 : 42)
    const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(pos, 3))
    const pts = new THREE.Points(g, new THREE.PointsMaterial({ color: 0x7cc4ff, size: 0.07, transparent: true, opacity: 0.7 }))
    scene.add(pts)

    const defs: [THREE.BufferGeometry, number, number, number, number][] = [
      [new THREE.IcosahedronGeometry(1.5, 0), 0x7cc4ff, -9, 3, -4],
      [new THREE.OctahedronGeometry(1.1, 0), 0xa78bfa, 10, -4, -6],
      [new THREE.TorusGeometry(1.2, 0.03, 8, 64), 0x7cc4ff, 6, 6, -8],
    ]
    const shapes = defs.slice(0, mobile ? 2 : 3).map(([geo, c, x, y, z]) => {
      const m = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ color: c, wireframe: true, transparent: true, opacity: 0.28 }))
      m.position.set(x, y, z); scene.add(m); return m
    })
    const grid = new THREE.GridHelper(80, 40, 0x223044, 0x141c28); grid.position.y = -9; scene.add(grid)

    const resize = () => { renderer.setSize(innerWidth, innerHeight, false); cam.aspect = innerWidth / innerHeight; cam.updateProjectionMatrix() }
    resize()
    let mx = 0, my = 0, sy = 0, raf = 0
    const onMove = (e: MouseEvent) => { mx = e.clientX / innerWidth - 0.5; my = e.clientY / innerHeight - 0.5 }
    const onScroll = () => { sy = scrollY / innerHeight }
    addEventListener('resize', resize); addEventListener('mousemove', onMove); addEventListener('scroll', onScroll, { passive: true })

    const loop = (t: number) => {
      raf = requestAnimationFrame(loop)
      if (document.hidden) return
      const s = t * 0.0001
      pts.rotation.y = s * 0.6; pts.rotation.x = s * 0.2
      shapes.forEach((m, i) => { m.rotation.x = s * (2 + i); m.rotation.y = s * (1.5 + i) })
      cam.position.x += (mx * 3 - cam.position.x) * 0.04
      cam.position.y += (-my * 2 - sy * 1.2 - cam.position.y) * 0.04
      cam.lookAt(0, -sy * 1.2, 0)
      renderer.render(scene, cam)
    }
    if (reduce) renderer.render(scene, cam); else raf = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(raf)
      removeEventListener('resize', resize); removeEventListener('mousemove', onMove); removeEventListener('scroll', onScroll)
      scene.traverse(o => { const m = o as THREE.Mesh; m.geometry?.dispose(); (m.material as THREE.Material | undefined)?.dispose() })
      renderer.dispose()
    }
  }, [])
  return <canvas id="bg" ref={ref} aria-hidden="true" />
}

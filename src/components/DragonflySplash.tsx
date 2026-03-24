'use client'

import { useEffect, useRef, useState } from 'react'

export default function DragonflySplash() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [fading, setFading] = useState(false)
  const [gone, setGone] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem('dl_intro_seen')) {
      setGone(true)
      return
    }
    sessionStorage.setItem('dl_intro_seen', '1')

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    if (!ctx) return

    const DPR = Math.min(window.devicePixelRatio || 1, 2)
    const W = window.innerWidth
    const H = window.innerHeight
    canvas.width = W * DPR
    canvas.height = H * DPR
    canvas.style.width = W + 'px'
    canvas.style.height = H + 'px'
    ctx.scale(DPR, DPR)

    const img = new Image()
    img.src = '/dragonfly.jpg'

    img.onload = () => {
      // ctx is guaranteed non-null here (checked above)
      const NUM = 60
      const IDLE_MS = 700
      const EXIT_MS = 2000
      const TOTAL_MS = IDLE_MS + EXIT_MS
      const aspect = img.width / img.height

      interface DF {
        sx: number; sy: number
        endX: number; endY: number
        cpX: number; cpY: number
        size: number
        rot0: number; rotDelta: number
        depth: number
        phase: number
        exitDelay: number
      }

      const dfs: DF[] = Array.from({ length: NUM }, (_, i) => {
        // Dense center cluster + outer ring
        const angle = (i / NUM) * Math.PI * 2 + (Math.random() - 0.5) * 0.4
        const inner = Math.random() < 0.65
        const r = inner
          ? Math.random() * Math.min(W, H) * 0.28
          : Math.min(W, H) * 0.28 + Math.random() * Math.min(W, H) * 0.25

        const sx = W / 2 + Math.cos(angle) * r * 1.3 + (Math.random() - 0.5) * 80
        const sy = H / 2 + Math.sin(angle) * r * 0.85 + (Math.random() - 0.5) * 60

        // Exit outward with slight random deviation
        const exitAngle = Math.atan2(sy - H / 2, sx - W / 2) + (Math.random() - 0.5) * 0.6
        const exitDist = 750 + Math.random() * 800
        const ex = sx + Math.cos(exitAngle) * exitDist
        const ey = sy + Math.sin(exitAngle) * exitDist

        // Bezier arc for organic curved path
        const mid = 0.4 + Math.random() * 0.2
        const bx = sx + (ex - sx) * mid
        const by = sy + (ey - sy) * mid
        const perp = exitAngle + Math.PI / 2 * (Math.random() > 0.5 ? 1 : -1)
        const cpDist = 80 + Math.random() * 220
        const cpX = bx + Math.cos(perp) * cpDist
        const cpY = by + Math.sin(perp) * cpDist

        const depth = Math.random()

        return {
          sx, sy,
          endX: ex, endY: ey,
          cpX, cpY,
          size: 38 + depth * 65 + Math.random() * 18,
          rot0: Math.random() * Math.PI * 2,
          rotDelta: (Math.random() - 0.5) * Math.PI * 3.5,
          depth,
          phase: Math.random() * Math.PI * 2,
          exitDelay: Math.random() * 0.4,
        }
      })

      // Paint far dragonflies first, close ones on top
      dfs.sort((a, b) => a.depth - b.depth)

      function easeInCubic(t: number) { return t * t * t }
      function quadBezier(t: number, p0: number, p1: number, p2: number) {
        return (1 - t) ** 2 * p0 + 2 * (1 - t) * t * p1 + t * t * p2
      }

      const startTime = performance.now()
      let rafId: number

      function tick(now: number) {
        const elapsed = now - startTime
        ctx.clearRect(0, 0, W, H)

        dfs.forEach(df => {
          const timeSec = elapsed / 1000
          let x: number, y: number, rot: number, alpha: number, scaleY: number

          if (elapsed < IDLE_MS) {
            const idleT = elapsed / IDLE_MS
            const amp = 5 + df.depth * 16
            x = df.sx + Math.sin(timeSec * 1.5 + df.phase) * amp
            y = df.sy + Math.cos(timeSec * 1.1 + df.phase * 1.3) * amp * 0.55
            rot = df.rot0 + Math.sin(timeSec * 0.9 + df.phase) * 0.1
            alpha = Math.min(1, idleT * 5) * (0.4 + df.depth * 0.6)
          } else {
            const exitElapsed = elapsed - IDLE_MS
            const delayMs = df.exitDelay * EXIT_MS * 0.45
            const rawT = Math.max(0, (exitElapsed - delayMs) / (EXIT_MS - delayMs))
            const exitT = Math.min(rawT, 1)
            const easedT = easeInCubic(exitT)

            x = quadBezier(easedT, df.sx, df.cpX, df.endX)
            y = quadBezier(easedT, df.sy, df.cpY, df.endY)
            rot = df.rot0 + df.rotDelta * easedT

            // Fade starts at 40% of exit, gone by 100%
            const fadeT = Math.max(0, (exitT - 0.35) / 0.65)
            alpha = (1 - fadeT * fadeT) * (0.4 + df.depth * 0.6)
          }

          if (alpha <= 0.01) return

          // Wing flutter — faster for closer dragonflies
          const hz = 6 + df.depth * 6
          scaleY = 1 + Math.sin(timeSec * hz * Math.PI * 2 + df.phase) * 0.13

          ctx.save()
          ctx.globalAlpha = alpha
          ctx.translate(x, y)
          ctx.rotate(rot)
          ctx.scale(1, scaleY)
          const w = df.size * aspect
          const h = df.size
          ctx.drawImage(img, -w / 2, -h / 2, w, h)
          ctx.restore()
        })

        if (elapsed < TOTAL_MS) {
          rafId = requestAnimationFrame(tick)
        } else {
          setFading(true)
          setTimeout(() => setGone(true), 850)
        }
      }

      rafId = requestAnimationFrame(tick)
      return () => cancelAnimationFrame(rafId)
    }
  }, [])

  if (gone) return null

  return (
    <div
      className="fixed inset-0 z-[9999]"
      style={{
        background: '#0d2008',
        opacity: fading ? 0 : 1,
        transition: fading ? 'opacity 0.85s ease' : 'none',
        pointerEvents: fading ? 'none' : 'auto',
      }}
    >
      <canvas
        ref={canvasRef}
        style={{ display: 'block', mixBlendMode: 'screen' }}
      />
    </div>
  )
}

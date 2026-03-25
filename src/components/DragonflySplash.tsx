'use client'

import { useEffect, useRef, useState } from 'react'

/** Preprocess dragonfly JPEG: remove near-black background → true transparency */
function makeSprite(img: HTMLImageElement): HTMLCanvasElement {
  const oc = document.createElement('canvas')
  oc.width = img.naturalWidth
  oc.height = img.naturalHeight
  const c = oc.getContext('2d')!
  c.drawImage(img, 0, 0)
  const d = c.getImageData(0, 0, oc.width, oc.height)
  const px = d.data
  for (let i = 0; i < px.length; i += 4) {
    const lum = 0.299 * px[i] + 0.587 * px[i + 1] + 0.114 * px[i + 2]
    if (lum < 18) {
      px[i + 3] = 0
    } else if (lum < 60) {
      px[i + 3] = Math.round(px[i + 3] * (lum - 18) / 42)
    }
  }
  c.putImageData(d, 0, 0)
  return oc
}

interface DF {
  sx: number; sy: number
  endX: number; endY: number
  cpX: number; cpY: number
  size: number
  rot0: number; rotDelta: number
  depth: number; phase: number
  exitDelay: number; flipX: boolean
}

export default function DragonflySplash() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [fading, setFading] = useState(false)
  const [gone, setGone] = useState(false)

  useEffect(() => {
    // Clear ALL old sessionStorage keys from previous builds to avoid stale skips
    const CURRENT_KEY = 'dl_v5'
    ;['dragonfly_shown', 'dl_intro_seen', 'dl_v4'].forEach(k => sessionStorage.removeItem(k))

    if (sessionStorage.getItem(CURRENT_KEY)) {
      setGone(true)
      return
    }
    sessionStorage.setItem(CURRENT_KEY, '1')

    const canvas = canvasRef.current
    if (!canvas) return
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
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
    let rafId = 0

    const abort = () => {
      setFading(true)
      setTimeout(() => setGone(true), 600)
    }

    img.onerror = abort

    img.onload = () => {
      const sprite = makeSprite(img)
      const aspect = img.naturalWidth / img.naturalHeight

      const NUM = 70
      const IDLE_MS = 600
      const EXIT_MS = 2100
      const TOTAL_MS = IDLE_MS + EXIT_MS
      let fadeTriggered = false

      const dfs: DF[] = Array.from({ length: NUM }, (_, i) => {
        // Swarm distribution: dense center, spread across full viewport
        let sx: number, sy: number
        const zone = i / NUM
        if (zone < 0.45) {
          // Dense center cluster over hero
          const a = (i / (NUM * 0.45)) * Math.PI * 2 + (Math.random() - 0.5) * 0.5
          const r = 30 + Math.random() * Math.min(W, H) * 0.32
          sx = W / 2 + Math.cos(a) * r * 1.3 + (Math.random() - 0.5) * 70
          sy = H / 2 + Math.sin(a) * r * 0.8 + (Math.random() - 0.5) * 50
        } else if (zone < 0.8) {
          // Scattered across viewport
          sx = W * 0.05 + Math.random() * W * 0.9
          sy = H * 0.05 + Math.random() * H * 0.85
        } else {
          // Outer swarm near edges for density
          const edge = Math.floor(Math.random() * 4)
          if (edge === 0) { sx = Math.random() * W; sy = Math.random() * H * 0.2 }
          else if (edge === 1) { sx = Math.random() * W; sy = H * 0.8 + Math.random() * H * 0.2 }
          else if (edge === 2) { sx = Math.random() * W * 0.2; sy = Math.random() * H }
          else { sx = W * 0.8 + Math.random() * W * 0.2; sy = Math.random() * H }
        }

        // Exit direction: outward from center with organic deviation
        const exitAngle = Math.atan2(sy - H / 2, sx - W / 2) + (Math.random() - 0.5) * 0.6
        const exitDist = 850 + Math.random() * 750
        const ex = sx + Math.cos(exitAngle) * exitDist
        const ey = sy + Math.sin(exitAngle) * exitDist

        // Quadratic bezier control point for curved path
        const prog = 0.3 + Math.random() * 0.3
        const bx = sx + (ex - sx) * prog
        const by = sy + (ey - sy) * prog
        const perp = exitAngle + (Math.PI / 2) * (Math.random() > 0.5 ? 1 : -1)
        const cpDist = 60 + Math.random() * 200
        const depth = 0.15 + Math.random() * 0.85

        return {
          sx, sy,
          endX: ex, endY: ey,
          cpX: bx + Math.cos(perp) * cpDist,
          cpY: by + Math.sin(perp) * cpDist,
          size: 28 + depth * 72 + Math.random() * 14,
          rot0: Math.random() * Math.PI * 2,
          rotDelta: (Math.random() - 0.5) * Math.PI * 3.5,
          depth,
          phase: Math.random() * Math.PI * 2,
          exitDelay: Math.random() * 0.45,
          flipX: Math.random() > 0.5,
        }
      })

      // Depth sort: far dragonflies behind close ones
      dfs.sort((a, b) => a.depth - b.depth)

      const easeIn3 = (t: number) => t * t * t
      const qBez = (t: number, p0: number, p1: number, p2: number) =>
        (1 - t) ** 2 * p0 + 2 * (1 - t) * t * p1 + t * t * p2

      const startTime = performance.now()

      function tick(now: number) {
        const elapsed = now - startTime
        ctx.clearRect(0, 0, W, H)

        dfs.forEach(df => {
          const timeSec = elapsed / 1000
          let x: number, y: number, rot: number, alpha: number, scaleY: number

          if (elapsed < IDLE_MS) {
            // Idle: gentle organic drift while settling
            const idleT = elapsed / IDLE_MS
            const amp = 4 + df.depth * 14
            x = df.sx + Math.sin(timeSec * 1.5 + df.phase) * amp
            y = df.sy + Math.cos(timeSec * 1.2 + df.phase * 1.3) * amp * 0.6
            rot = df.rot0 + Math.sin(timeSec * 0.8 + df.phase) * 0.09
            alpha = Math.min(1, idleT * 7) * (0.45 + df.depth * 0.55)
          } else {
            // Exit: bezier curve outward with stagger
            const exitElapsed = elapsed - IDLE_MS
            const delayMs = df.exitDelay * EXIT_MS * 0.38
            const rawT = Math.max(0, (exitElapsed - delayMs) / (EXIT_MS * 0.9))
            const exitT = Math.min(rawT, 1)
            const easedT = easeIn3(exitT)

            x = qBez(easedT, df.sx, df.cpX, df.endX)
            y = qBez(easedT, df.sy, df.cpY, df.endY)
            rot = df.rot0 + df.rotDelta * easedT
            // Fade as they leave (starts at 35% of exit)
            const fadeT = Math.max(0, (exitT - 0.35) / 0.65)
            alpha = (1 - fadeT * fadeT) * (0.45 + df.depth * 0.55)
          }

          if (alpha <= 0.01) return

          // Wing flutter: faster for closer/larger dragonflies
          const hz = 5 + df.depth * 7
          scaleY = 1 + Math.sin(timeSec * hz * Math.PI * 2 + df.phase) * 0.14

          const w = df.size * aspect
          const h = df.size

          ctx.save()
          ctx.globalAlpha = alpha
          ctx.translate(x, y)
          ctx.rotate(rot)
          ctx.scale(df.flipX ? -1 : 1, scaleY)
          ctx.drawImage(sprite, -w / 2, -h / 2, w, h)
          ctx.restore()
        })

        // Start fading the overlay at 68% through exit — reveals site as they leave
        if (elapsed >= IDLE_MS + EXIT_MS * 0.68 && !fadeTriggered) {
          fadeTriggered = true
          setFading(true)
        }

        if (elapsed < TOTAL_MS) {
          rafId = requestAnimationFrame(tick)
        } else {
          setTimeout(() => setGone(true), 800)
        }
      }

      rafId = requestAnimationFrame(tick)
    }

    return () => { if (rafId) cancelAnimationFrame(rafId) }
  }, [])

  if (gone) return null

  return (
    <div
      className="fixed inset-0 z-[9999]"
      style={{
        background: '#0d2008',
        opacity: fading ? 0 : 1,
        transition: fading ? 'opacity 1s ease' : 'none',
        pointerEvents: fading ? 'none' : 'all',
      }}
    >
      <canvas
        ref={canvasRef}
        style={{ display: 'block' }}
      />
    </div>
  )
}

'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const DragonflySVG = ({ size = 40 }: { size?: number }) => (
  <svg width={size} height={size * 0.7} viewBox="0 0 100 70" fill="none">
    {/* Upper wings */}
    <ellipse cx="28" cy="25" rx="24" ry="10" fill="white" fillOpacity="0.85" transform="rotate(-12 28 25)" />
    <ellipse cx="72" cy="25" rx="24" ry="10" fill="white" fillOpacity="0.85" transform="rotate(12 72 25)" />
    {/* Lower wings */}
    <ellipse cx="30" cy="38" rx="18" ry="7" fill="white" fillOpacity="0.6" transform="rotate(8 30 38)" />
    <ellipse cx="70" cy="38" rx="18" ry="7" fill="white" fillOpacity="0.6" transform="rotate(-8 70 38)" />
    {/* Body */}
    <ellipse cx="50" cy="36" rx="3.5" ry="20" fill="#a8f0c8" />
    {/* Head */}
    <circle cx="50" cy="13" r="5.5" fill="#a8f0c8" />
    {/* Eyes */}
    <circle cx="47" cy="11" r="1.5" fill="white" />
    <circle cx="53" cy="11" r="1.5" fill="white" />
    {/* Tail */}
    <circle cx="50" cy="52" r="3" fill="#a8f0c8" />
    <circle cx="50" cy="58" r="2.5" fill="#c8b8f0" />
    <circle cx="50" cy="64" r="2" fill="#c8b8f0" />
  </svg>
)

interface DragonflyConfig {
  id: number
  endX: number
  endY: number
  size: number
  delay: number
  duration: number
  rotation: number
  startRotation: number
}

export default function DragonflySplash() {
  const [visible, setVisible] = useState(true)
  const [dragonflies, setDragonflies] = useState<DragonflyConfig[]>([])

  useEffect(() => {
    const NUM = 40
    const configs: DragonflyConfig[] = Array.from({ length: NUM }, (_, i) => {
      const angle = (i / NUM) * Math.PI * 2 + (Math.random() - 0.5) * 0.5
      const distance = 700 + Math.random() * 800
      return {
        id: i,
        endX: Math.cos(angle) * distance,
        endY: Math.sin(angle) * distance,
        size: 28 + Math.random() * 44,
        delay: Math.random() * 0.25,
        duration: 1.5 + Math.random() * 0.8,
        rotation: (Math.random() - 0.5) * 600,
        startRotation: Math.random() * 360,
      }
    })
    setDragonflies(configs)

    const timer = setTimeout(() => setVisible(false), 2800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
          style={{ background: '#0e2409' }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: 'easeInOut' }}
        >
          {/* Center burst glow */}
          <motion.div
            className="absolute rounded-full pointer-events-none"
            style={{
              width: 300,
              height: 300,
              background: 'radial-gradient(circle, rgba(168,240,200,0.3) 0%, transparent 70%)',
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 4], opacity: [0, 0.8, 0] }}
            transition={{ duration: 1.0, ease: 'easeOut' }}
          />

          {dragonflies.map((df) => (
            <motion.div
              key={df.id}
              className="absolute"
              initial={{
                x: 0,
                y: 0,
                rotate: df.startRotation,
                scale: 0.1,
                opacity: 0,
              }}
              animate={{
                x: df.endX,
                y: df.endY,
                rotate: df.startRotation + df.rotation,
                scale: [0.1, 1.3, 0.9],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: df.duration,
                delay: df.delay,
                ease: 'easeOut',
                scale: { times: [0, 0.2, 1] },
                opacity: { times: [0, 0.1, 0.55, 1] },
              }}
            >
              <DragonflySVG size={df.size} />
            </motion.div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const DragonflySVG = ({ size = 40, color = '#4a7c59' }: { size?: number; color?: string }) => (
  <svg width={size} height={size * 0.7} viewBox="0 0 100 70" fill="none">
    {/* Body */}
    <ellipse cx="50" cy="36" rx="3.5" ry="20" fill={color} />
    {/* Head */}
    <circle cx="50" cy="13" r="5.5" fill={color} />
    {/* Eyes */}
    <circle cx="47" cy="11" r="1.5" fill="#a8d5ba" />
    <circle cx="53" cy="11" r="1.5" fill="#a8d5ba" />
    {/* Upper wings left */}
    <ellipse cx="28" cy="25" rx="24" ry="9" fill="#a8d5ba" fillOpacity="0.65" transform="rotate(-12 28 25)" />
    {/* Upper wings right */}
    <ellipse cx="72" cy="25" rx="24" ry="9" fill="#a8d5ba" fillOpacity="0.65" transform="rotate(12 72 25)" />
    {/* Lower wings left */}
    <ellipse cx="30" cy="38" rx="18" ry="7" fill="#c8e6d5" fillOpacity="0.55" transform="rotate(8 30 38)" />
    {/* Lower wings right */}
    <ellipse cx="70" cy="38" rx="18" ry="7" fill="#c8e6d5" fillOpacity="0.55" transform="rotate(-8 70 38)" />
    {/* Tail segments */}
    <circle cx="50" cy="52" r="3" fill={color} />
    <circle cx="50" cy="58" r="2.5" fill={color} opacity="0.85" />
    <circle cx="50" cy="64" r="2" fill={color} opacity="0.7" />
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
  color: string
}

const COLORS = ['#4a7c59', '#2d5016', '#6b3fa0', '#3d6b4a', '#7b5ea7', '#1a3410']

export default function DragonflySplash() {
  const [visible, setVisible] = useState(true)
  const [dragonflies, setDragonflies] = useState<DragonflyConfig[]>([])

  useEffect(() => {
    const NUM = 35
    const configs: DragonflyConfig[] = Array.from({ length: NUM }, (_, i) => {
      const angle = (i / NUM) * Math.PI * 2 + (Math.random() - 0.5) * 0.5
      const distance = 600 + Math.random() * 900
      return {
        id: i,
        endX: Math.cos(angle) * distance,
        endY: Math.sin(angle) * distance,
        size: 22 + Math.random() * 38,
        delay: Math.random() * 0.3,
        duration: 1.4 + Math.random() * 0.8,
        rotation: (Math.random() - 0.5) * 720,
        startRotation: Math.random() * 360,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      }
    })
    setDragonflies(configs)

    const timer = setTimeout(() => setVisible(false), 2500)
    return () => clearTimeout(timer)
  }, [])

  if (dragonflies.length === 0) return null

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
          style={{ background: 'rgba(18, 42, 10, 0.96)' }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          {/* Center glow */}
          <motion.div
            className="absolute rounded-full"
            style={{
              width: 200,
              height: 200,
              background: 'radial-gradient(circle, rgba(168,213,186,0.25) 0%, transparent 70%)',
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 3, 1], opacity: [0, 0.6, 0] }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          />

          {dragonflies.map((df) => (
            <motion.div
              key={df.id}
              className="absolute"
              initial={{
                x: 0,
                y: 0,
                rotate: df.startRotation,
                scale: 0,
                opacity: 0,
              }}
              animate={{
                x: df.endX,
                y: df.endY,
                rotate: df.startRotation + df.rotation,
                scale: [0, 1.5, 1],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: df.duration,
                delay: df.delay,
                ease: 'easeOut',
                scale: { times: [0, 0.2, 1], ease: 'easeOut' },
                opacity: { times: [0, 0.12, 0.6, 1], ease: 'easeInOut' },
              }}
            >
              <DragonflySVG size={df.size} color={df.color} />
            </motion.div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

'use client'

import { motion } from "motion/react"
import { useEffect, useState } from "react"

interface Particle {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
  driftX: number
  driftY: number
}

export function Glitters({ count = 60, className = "" }: { count?: number, className?: string }) {
  const [particles, setParticles] = useState<Particle[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    const newParticles = Array.from({ length: count }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 5 + 2,
      duration: Math.random() * 4 + 2,
      delay: Math.random() * 5,
      driftX: (Math.random() - 0.5) * 120,
      driftY: -150,
    }))
    setParticles(newParticles)
  }, [count, mounted])

  if (!mounted) return null

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden z-30 ${className}`}>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-[#ffdf8b]"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            boxShadow: "0 0 20px #c5a059, 0 0 40px #ffdf8b, 0 0 60px rgba(255, 223, 139, 0.8)",
          }}
          animate={{
            opacity: [0, 1, 1, 0],
            scale: [0, 1.8, 1.8, 0],
            y: [0, p.driftY / 2, p.driftY],
            x: [0, p.driftX / 2, p.driftX],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}

interface FlowParticle {
  id: number
  top: number
  duration: number
  delay: number
  size: number
}

export function GlitterFlow() {
  const [particles, setParticles] = useState<FlowParticle[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    const newParticles = Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      top: Math.random() * 100,
      duration: Math.random() * 6 + 4,
      delay: Math.random() * 8,
      size: Math.random() * 3 + 2,
    }))
    setParticles(newParticles)
  }, [mounted])

  if (!mounted) return null

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-30">
      {/* Horizontal flow of glitters */}
      <div className="absolute top-1/2 left-0 w-full h-96 -translate-y-1/2">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute bg-[#ffdf8b] rounded-full"
            style={{
              top: `${p.top}%`,
              width: p.size,
              height: p.size,
              boxShadow: "0 0 15px #c5a059, 0 0 30px #ffdf8b",
            }}
            initial={{ x: "-10%", opacity: 0 }}
            animate={{
              x: "110%",
              opacity: [0, 1, 1, 0],
              scale: [0.5, 2.5, 0.5],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "linear",
            }}
          />
        ))}
      </div>
    </div>
  )
}

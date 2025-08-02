'use client'

import { motion } from 'framer-motion'
import { Heart, Flower, Sparkles } from 'lucide-react'

export default function ParticleEffect() {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    delay: Math.random() * 0.5,
    duration: 2 + Math.random() * 2,
    type: Math.random() > 0.6 ? 'heart' : Math.random() > 0.3 ? 'flower' : 'sparkle',
    size: 20 + Math.random() * 30,
    color: ['text-vibrant-pink', 'text-electric-purple', 'text-neon-blue', 'text-emerald-green', 'text-golden-yellow', 'text-magenta'][Math.floor(Math.random() * 6)]
  }))

  return (
    <div className="fixed inset-0 z-40 pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{ 
            opacity: 0, 
            scale: 0,
            x: particle.x,
            y: particle.y
          }}
          animate={{ 
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            y: particle.y - 100,
            x: particle.x + (Math.random() - 0.5) * 100
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            ease: "easeOut"
          }}
          className="absolute"
          style={{
            left: particle.x,
            top: particle.y,
          }}
        >
          {particle.type === 'heart' ? (
            <Heart 
              className={particle.color} 
              size={particle.size}
            />
          ) : particle.type === 'flower' ? (
            <Flower 
              className={particle.color} 
              size={particle.size}
            />
          ) : (
            <Sparkles 
              className={particle.color} 
              size={particle.size}
            />
          )}
        </motion.div>
      ))}
    </div>
  )
} 
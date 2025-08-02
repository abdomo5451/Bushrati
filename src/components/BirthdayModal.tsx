'use client'

import { motion } from 'framer-motion'
import { X, Heart, Flower, Sparkles } from 'lucide-react'

interface BirthdayModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function BirthdayModal({ isOpen, onClose }: BirthdayModalProps) {
  if (!isOpen) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      {/* Backdrop */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ 
          type: "spring", 
          damping: 20, 
          stiffness: 200, 
          duration: 0.6 
        }}
        className="relative bg-gradient-to-br from-vibrant-pink/20 via-electric-purple/20 to-neon-blue/20 backdrop-blur-md rounded-3xl p-8 max-w-md w-full mx-4 shadow-2xl border border-vibrant-pink/30"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-vibrant-pink/20 rounded-full transition-colors duration-300"
        >
          <X className="w-5 h-5 text-vibrant-pink" />
        </button>

        {/* Floral design at top */}
        <motion.div 
          className="flex justify-center mb-6"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex items-center gap-2">
            <div className="glow-effect-vibrant rounded-full p-2">
              <Flower className="w-6 h-6 text-vibrant-pink" />
            </div>
            <div className="glow-effect-vibrant rounded-full p-2">
              <Heart className="w-5 h-5 text-electric-purple" />
            </div>
            <div className="glow-effect-vibrant rounded-full p-2">
              <Flower className="w-6 h-6 text-neon-blue" />
            </div>
          </div>
        </motion.div>

        {/* Message */}
        <motion.div 
          className="text-center space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-2xl font-serif font-semibold" style={{ 
            background: 'linear-gradient(135deg, #FF1493, #8A2BE2, #00BFFF)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Happy Birthday, Bushra! 🎂
          </h2>
          
          <div className="text-soft-white leading-relaxed space-y-3">
            <p className="text-base">
              Today is the 3rd of August, the day in which you were born... 
              for me, it's the second greatest day in history after the day I first talked to you.
            </p>
            <p className="font-medium text-lg" style={{ 
              background: 'linear-gradient(135deg, #FF4500, #FF1493, #8A2BE2)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Happy birthday, my sweet Bushra. ❤️
            </p>
          </div>
        </motion.div>

        {/* Bottom decoration */}
        <motion.div 
          className="flex justify-center mt-6"
          initial={{ scale: 0, rotate: 180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-emerald-green" />
            <Heart className="w-4 h-4 text-vibrant-pink" />
            <Sparkles className="w-5 h-5 text-golden-yellow" />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
} 
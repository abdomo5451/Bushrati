'use client'

import { motion } from 'framer-motion'
import { Play, Heart, Moon, Sparkles } from 'lucide-react'

interface HeroSectionProps {
  onButtonClick: () => void
}

export default function HeroSection({ onButtonClick }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden section-bg-vibrant px-4 sm:px-6 lg:px-8">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-vibrant opacity-10 animate-gradient-shift" />
      
      {/* Video Background in Memory Card Style */}
      <div className="absolute inset-0 z-0 flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="memory-card-vibrant w-full max-w-4xl h-80 sm:h-96 md:h-[500px] relative overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover rounded-xl"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
            {/* Fallback gradient background */}
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark/20 to-dark/40 rounded-xl" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-2 sm:px-4">
        {/* Moon and Title */}
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="text-center mb-8"
        >
          <div className="flex justify-center mb-4">
            <div className="glow-effect-vibrant rounded-full p-2 sm:p-4">
              <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-vibrant-pink" />
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold gradient-text-vibrant mb-4">
            HBD Bushrati ❤️
          </h1>
          <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-vibrant-pink via-electric-purple to-neon-blue mx-auto rounded-full animate-gradient-shift" />
        </motion.div>

        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onButtonClick}
          className="button-vibrant inline-flex items-center gap-2 text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-3 sm:py-4"
        >
          <Play className="w-4 h-4 sm:w-5 sm:h-5" />
          Click Me
        </motion.button>
      </div>

      {/* Floating elements decoration - Responsive positioning */}
      <div className="absolute top-16 sm:top-20 left-4 sm:left-10 floating-element">
        <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-vibrant-pink opacity-80 animate-pulse" />
      </div>
      <div className="absolute top-32 sm:top-40 right-4 sm:right-20 floating-element" style={{ animationDelay: '2s' }}>
        <Heart className="w-4 h-4 sm:w-6 sm:h-6 text-electric-purple opacity-80 animate-pulse" />
      </div>
      <div className="absolute bottom-32 sm:bottom-40 left-4 sm:left-20 floating-element" style={{ animationDelay: '4s' }}>
        <Heart className="w-5 h-5 sm:w-7 sm:h-7 text-neon-blue opacity-80 animate-pulse" />
      </div>
      
      {/* Additional floating sparkles - Responsive positioning */}
      <div className="absolute top-24 sm:top-32 left-1/4 floating-element" style={{ animationDelay: '1s' }}>
        <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-green opacity-70" />
      </div>
      <div className="absolute bottom-24 sm:bottom-32 right-1/4 floating-element" style={{ animationDelay: '3s' }}>
        <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-golden-yellow opacity-70" />
      </div>
      <div className="absolute top-1/2 left-4 sm:left-16 floating-element" style={{ animationDelay: '5s' }}>
        <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-magenta opacity-70" />
      </div>
    </section>
  )
} 
'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import HeroSection from '@/components/HeroSection'
import ImportantDates from '@/components/ImportantDates'
import SpecialJune from '@/components/SpecialJune'
import AboutBushrati from '@/components/AboutBushrati'
import OurFutureHome from '@/components/OurFutureHome'
import IWish from '@/components/IWish'
import FinalSection from '@/components/FinalSection'
import BirthdayModal from '@/components/BirthdayModal'
import ParticleEffect from '@/components/ParticleEffect'
import { Play, Pause } from 'lucide-react'

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [showParticles, setShowParticles] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    // Apply body styles programmatically
    document.body.style.background = 'linear-gradient(135deg, #0a0a0a 0%, #0f0f0f 50%, #1a1a1a 100%)'
    document.body.style.backgroundAttachment = 'fixed'
    document.body.style.minHeight = '100vh'
    document.body.style.overflowX = 'hidden'

    // Loading screen logic
    const loadingDuration = 3000 // 3 seconds
    const progressInterval = 30 // Update every 30ms
    const progressIncrement = (progressInterval / loadingDuration) * 100

    const progressTimer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressTimer)
          return 100
        }
        return prev + progressIncrement
      })
    }, progressInterval)

    const loadingTimer = setTimeout(() => {
      setIsLoading(false)
    }, loadingDuration)

    return () => {
      clearTimeout(loadingTimer)
      clearInterval(progressTimer)
    }
  }, [])

  const handleButtonClick = () => {
    if (!isModalOpen) {
      setIsModalOpen(true)
    setShowParticles(true)
    }
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setShowParticles(false)
  }

  const toggleMusic = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio('/background music.mp3')
      audioRef.current.loop = true
    }

    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    } else {
      audioRef.current.play()
      setIsPlaying(true)
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#0f0f0f] to-[#1a1a1a] flex items-center justify-center relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-vibrant-pink/10 to-electric-purple/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-gradient-to-br from-neon-blue/10 to-emerald-green/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-br from-sunset-orange/5 to-vibrant-pink/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        {/* Main loading content */}
        <div className="relative z-10 text-center">
          {/* Animated logo/icon */}
          <div className="mb-8">
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-vibrant-pink via-electric-purple to-neon-blue rounded-full flex items-center justify-center animate-pulse glow-effect-vibrant">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-green via-golden-yellow to-magenta rounded-full animate-spin"></div>
            </div>
          </div>
          
          {/* Loading text */}
          <div className="space-y-4">
            <h2 className="text-3xl font-serif font-bold bg-gradient-to-r from-vibrant-pink via-electric-purple to-neon-blue bg-clip-text text-transparent">
              Loading Bushrati's Birthday
            </h2>
            <p className="text-soft-white text-lg opacity-80">
              Preparing something special...
            </p>
          </div>
          
          {/* Animated dots */}
          <div className="flex justify-center gap-2 mt-8">
            <div className="w-3 h-3 bg-vibrant-pink rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-electric-purple rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-3 h-3 bg-neon-blue rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-3 h-3 bg-emerald-green rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></div>
          </div>
          
          {/* Progress bar */}
          <div className="w-64 h-2 bg-gray-700 rounded-full mt-8 mx-auto overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-vibrant-pink via-electric-purple to-neon-blue rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          
          {/* Progress percentage */}
          <div className="mt-2 text-soft-white text-sm opacity-70">
            {progress}%
          </div>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen relative">
      {/* Music Player */}
      <div className="fixed top-6 right-6 z-50">
        <motion.button
          onClick={toggleMusic}
          className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-vibrant-pink/20 via-electric-purple/20 to-neon-blue/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {isPlaying ? (
            <Pause className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          ) : (
            <Play className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          )}
        </motion.button>
      </div>

      <HeroSection onButtonClick={handleButtonClick} />
      <ImportantDates />
      <SpecialJune />
      <AboutBushrati />
      <OurFutureHome />
      <IWish />
      <FinalSection />
      
      {/* Simple Footer */}
      <footer className="py-8 px-4 text-center">
        <p className="text-soft-white/60 text-sm font-medium">
          Made with love by Abdelrahman ❤️
        </p>
      </footer>
      
      <AnimatePresence>
        {showParticles && <ParticleEffect />}
      </AnimatePresence>
      
      <BirthdayModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </main>
  )
} 
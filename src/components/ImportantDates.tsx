'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, Heart, Sparkles } from 'lucide-react'

export default function ImportantDates() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date()
      const currentMonth = now.getMonth()
      const currentYear = now.getFullYear()
      
      // Calculate next 7th of the month
      let targetDate = new Date(currentYear, currentMonth, 7)
      if (now.getDate() >= 7) {
        targetDate = new Date(currentYear, currentMonth + 1, 7)
      }
      
      const difference = targetDate.getTime() - now.getTime()
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 section-bg-sunset">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="text-center mb-8"
        >
            <div className="flex justify-center mb-4">
            <div className="glow-effect-vibrant rounded-full p-2 sm:p-3">
              <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-vibrant-pink" />
            </div>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold gradient-text-sunset mb-2">
            Our Important Dates
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-vibrant-pink via-electric-purple to-neon-blue mx-auto rounded-full animate-gradient-shift" />
        </motion.div>

        <div className="text-center space-y-6 sm:space-y-8">
          <motion.div 
            className="bg-gradient-to-br from-vibrant-pink/20 via-electric-purple/20 to-neon-blue/20 rounded-2xl p-4 sm:p-6 border border-vibrant-pink/30 backdrop-blur-sm"
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-vibrant-pink" />
              <h3 className="text-lg sm:text-xl md:text-2xl font-serif font-semibold text-soft-white mb-2">
                The First Day We Talked
              </h3>
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-vibrant-pink" />
            </div>
            <p className="text-base sm:text-lg text-gray-300 mb-4 font-medium">7/5/2025</p>
            <p className="text-lg sm:text-xl font-medium gradient-text-vibrant">
              The best day in history
            </p>
          </motion.div>

          <motion.div 
            className="bg-gradient-to-br from-sunset-orange/20 via-vibrant-pink/20 to-electric-purple/20 rounded-2xl p-4 sm:p-6 border border-sunset-orange/30 backdrop-blur-sm"
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.3 }}
          >
              <div className="flex items-center justify-center gap-2 mb-4">
              <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-sunset-orange" />
              <h3 className="text-lg sm:text-xl font-semibold text-soft-white">
                  Countdown to Next 7th
                </h3>
              </div>
              
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-md mx-auto">
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <div className="bg-gradient-to-br from-vibrant-pink to-electric-purple text-white rounded-lg p-2 sm:p-3 mb-2 glow-effect-vibrant">
                  <span className="text-lg sm:text-2xl font-bold">{timeLeft.days}</span>
                </div>
                <span className="text-xs sm:text-sm text-gray-300">Days</span>
              </motion.div>
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <div className="bg-gradient-to-br from-electric-purple to-neon-blue text-white rounded-lg p-2 sm:p-3 mb-2 glow-effect-vibrant">
                  <span className="text-lg sm:text-2xl font-bold">{timeLeft.hours}</span>
                </div>
                <span className="text-xs sm:text-sm text-gray-300">Hours</span>
              </motion.div>
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <div className="bg-gradient-to-br from-neon-blue to-emerald-green text-white rounded-lg p-2 sm:p-3 mb-2 glow-effect-vibrant">
                  <span className="text-lg sm:text-2xl font-bold">{timeLeft.minutes}</span>
                </div>
                <span className="text-xs sm:text-sm text-gray-300">Minutes</span>
              </motion.div>
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <div className="bg-gradient-to-br from-emerald-green to-golden-yellow text-dark rounded-lg p-2 sm:p-3 mb-2 glow-effect-vibrant">
                  <span className="text-lg sm:text-2xl font-bold">{timeLeft.seconds}</span>
                </div>
                <span className="text-xs sm:text-sm text-gray-300">Seconds</span>
              </motion.div>
            </div>
          </motion.div>
          </div>
      </div>
    </section>
  )
} 
'use client'

import { motion } from 'framer-motion'
import { Sparkles, Calendar, Heart } from 'lucide-react'
import Image from 'next/image'

export default function SpecialJune() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 section-bg-vibrant">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="text-center mb-8"
        >
          <div className="flex justify-center mb-4">
            <div className="glow-effect-vibrant rounded-full p-2 sm:p-3">
              <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-vibrant-pink" />
            </div>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold gradient-text-aurora mb-2">
            Our Special June 🌸
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-vibrant-pink via-electric-purple to-neon-blue mx-auto rounded-full animate-gradient-shift" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 justify-items-center">
          {/* Movie Poster */}
            <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="memory-card-vibrant p-4 sm:p-6 lg:p-8 w-full max-w-sm"
          >
            <div className="text-center mb-4 sm:mb-6">
              <div className="flex justify-center mb-2 sm:mb-3">
                <div className="glow-effect-vibrant rounded-full p-2">
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-vibrant-pink" />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-serif font-semibold text-soft-white mb-1 sm:mb-2">
                Our First Movie Together
                </h3>
              <p className="text-gray-300 text-xs sm:text-sm lg:text-base">
                6 June 2025
              </p>
                </div>
                
            <div className="flex justify-center">
              <div className="relative w-48 h-72 sm:w-56 sm:h-84 lg:w-64 lg:h-96 overflow-hidden rounded-xl">
                <Image
                  src="/(Siko siko) first movie to watch together_.jpg"
                  alt="Movie poster - Siko siko"
                  fill
                  className="object-cover rounded-xl"
                  sizes="(max-width: 640px) 192px, (max-width: 1024px) 224px, 256px"
                />
              </div>
              </div>
            </motion.div>

          {/* Marriage Certificate */}
            <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="memory-card-vibrant p-4 sm:p-6 lg:p-8 w-full max-w-md"
          >
            <div className="text-center mb-4 sm:mb-6">
              <div className="flex justify-center mb-2 sm:mb-3">
                <div className="glow-effect-vibrant rounded-full p-2">
                  <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-vibrant-pink" />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-serif font-semibold text-soft-white mb-1 sm:mb-2">
                Virtual Marriage Certificate
                </h3>
              <p className="text-gray-300 text-xs sm:text-sm lg:text-base">
                7 June 2025
              </p>
                </div>
                
            <div className="flex justify-center">
              <div className="relative w-64 h-48 sm:w-72 sm:h-54 lg:w-80 lg:h-60 overflow-hidden rounded-xl">
                <Image
                  src="/Virtual marriage certificate_.jpg"
                  alt="Virtual marriage certificate"
                  fill
                  className="object-cover rounded-xl"
                  sizes="(max-width: 640px) 256px, (max-width: 1024px) 288px, 320px"
                />
              </div>
              </div>
            </motion.div>
        </div>
      </div>
    </section>
  )
} 
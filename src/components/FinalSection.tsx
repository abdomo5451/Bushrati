'use client'

import { motion } from 'framer-motion'
import { Heart, MessageCircle, Sparkles } from 'lucide-react'

export default function FinalSection() {
  return (
    <section className="py-20 px-4 section-bg-vibrant">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-center"
        >
          <div className="flex justify-center mb-8">
            <div className="glow-effect-vibrant rounded-full p-3">
              <MessageCircle className="w-12 h-12 text-vibrant-pink" />
            </div>
          </div>
          
          <motion.div 
            className="memory-card-vibrant p-8 md:p-12 max-w-2xl mx-auto"
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-vibrant-pink to-electric-purple rounded-full flex items-center justify-center glow-effect-vibrant">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <div>
                <h3 className="font-semibold text-soft-white">Bushra</h3>
                <p className="text-sm text-gray-400">Online</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-vibrant-pink/20 via-electric-purple/20 to-neon-blue/20 border border-vibrant-pink/30 rounded-2xl p-6 text-left backdrop-blur-sm">
              <p className="text-soft-white leading-relaxed text-lg">
                This website is just a small digital copy of a much bigger world you've built inside my heart. 
                Every day with you is a new, beautiful story. 
              </p>
              <p className="text-soft-white leading-relaxed text-lg mt-4 font-medium gradient-text-vibrant">
                Happy Birthday, Bushra. ❤️
              </p>
            </div>
            
            <div className="flex justify-between items-center mt-6 text-sm text-gray-400">
              <span>Today at 12:00 PM</span>
              <div className="flex items-center gap-1">
                <span>✓✓</span>
              </div>
            </div>
          </motion.div>
          
          <div className="mt-12">
            <div className="flex justify-center gap-4">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Heart className="w-8 h-8 text-vibrant-pink" />
              </motion.div>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5, ease: "easeInOut" }}
              >
                <Heart className="w-6 h-6 text-electric-purple" />
              </motion.div>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1, ease: "easeInOut" }}
              >
                <Heart className="w-8 h-8 text-neon-blue" />
              </motion.div>
            </div>
            <div className="flex justify-center mt-4 gap-2">
              <Sparkles className="w-4 h-4 text-emerald-green" />
              <Sparkles className="w-4 h-4 text-golden-yellow" />
              <Sparkles className="w-4 h-4 text-magenta" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 
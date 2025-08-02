'use client'

import { motion } from 'framer-motion'
import { Heart, MapPin, Plane, Users, Gem, Sparkles } from 'lucide-react'

const wishes = [
  {
    icon: Heart,
    title: "I wish that we will be happy.",
    gradient: "from-vibrant-pink to-electric-purple",
    color: "text-vibrant-pink"
  },
  {
    icon: Plane,
    title: "I wish that we travel across the world together.",
    gradient: "from-electric-purple to-neon-blue",
    color: "text-electric-purple"
  },
  {
    icon: Users,
    title: "I wish to meet your family and see Lebanon from your eyes.",
    gradient: "from-neon-blue to-emerald-green",
    color: "text-neon-blue"
  },
  {
    icon: Gem,
    title: "And finally... I wish to marry you.",
    gradient: "from-emerald-green to-golden-yellow",
    color: "text-emerald-green"
  }
]

export default function IWish() {
  return (
    <section className="py-20 px-4 section-bg-sunset">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-4">
            <div className="glow-effect-vibrant rounded-full p-3">
              <Heart className="w-8 h-8 text-vibrant-pink" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold gradient-text-sunset mb-2">
            I Wish
          </h2>
          <p className="text-lg text-gray-300 mb-4">
            In the near future when we meet, I wish...
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-sunset-orange via-vibrant-pink to-electric-purple mx-auto rounded-full animate-gradient-shift" />
        </motion.div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-vibrant-pink via-electric-purple to-neon-blue transform md:-translate-x-1/2 animate-gradient-shift" />

          <div className="space-y-12">
            {wishes.map((wish, index) => {
              const IconComponent = wish.icon
              const isEven = index % 2 === 0
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 1, x: 0 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className={`relative flex items-center ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-to-br ${wish.gradient} rounded-full transform md:-translate-x-1/2 z-10 glow-effect-vibrant`} />
                  
                  {/* Content */}
                  <div className={`ml-16 md:ml-0 md:w-1/2 ${isEven ? 'md:pr-8' : 'md:pl-8'}`}>
                    <motion.div 
                      className="memory-card-vibrant"
                      whileHover={{ scale: 1.02, y: -5 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`w-12 h-12 bg-gradient-to-br ${wish.gradient} rounded-full flex items-center justify-center glow-effect-vibrant`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex items-center gap-2">
                          <Sparkles className={`w-4 h-4 ${wish.color}`} />
                          <h3 className="text-xl font-serif font-semibold text-soft-white">
                            {wish.title}
                          </h3>
                          <Sparkles className={`w-4 h-4 ${wish.color}`} />
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
} 
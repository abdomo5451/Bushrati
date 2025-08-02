'use client'

import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import Image from 'next/image'

export default function OurFutureHome() {
  const homeImages = [
    { src: "/living room.png", alt: "Living Room", title: "Living Room" },
    { src: "/second living room_.png", alt: "Second Living Room", title: "Second Living Room" },
    { src: "/library_.png", alt: "Library", title: "Library" },
    { src: "/kitchen_.png", alt: "Kitchen", title: "Kitchen" },
    { src: "/bedroom_.png", alt: "Bedroom", title: "Bedroom" },
    { src: "/Our children rooms.png", alt: "Our Children Rooms", title: "Our Children Rooms" },
    { src: "/balcony view.png", alt: "Balcony View", title: "Balcony View" },
    { src: "/Exterior_.png", alt: "Exterior", title: "Exterior" }
  ]

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 section-bg-vibrant">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="flex justify-center mb-4">
            <div className="glow-effect-vibrant rounded-full p-2 sm:p-3">
              <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-vibrant-pink" />
            </div>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold gradient-text-aurora mb-2">
            Our Future Home 🏠
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-vibrant-pink via-electric-purple to-neon-blue mx-auto rounded-full animate-gradient-shift" />
        </motion.div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {homeImages.map((image, index) => (
        <motion.div
              key={index}
              className="break-inside-avoid mb-6 bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-white/10 h-fit"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Instagram-style post header */}
              <div className="p-4 border-b border-white/10">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-vibrant-pink to-electric-purple rounded-full flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">Our Future Home</p>
                    <p className="text-white/60 text-xs">Dream Home Collection</p>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="relative w-full bg-gradient-to-br from-vibrant-pink/10 via-electric-purple/10 to-neon-blue/10">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={0}
                  height={0}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="w-full h-auto object-contain"
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>

              {/* Instagram-style post footer */}
              <div className="p-4">
                <div className="flex items-center space-x-4 mb-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-vibrant-pink to-electric-purple rounded-full flex items-center justify-center">
                    <Sparkles className="w-3 h-3 text-white" />
                  </div>
                  <div className="w-6 h-6 bg-gradient-to-br from-neon-blue to-emerald-green rounded-full flex items-center justify-center">
                    <Sparkles className="w-3 h-3 text-white" />
                  </div>
                  <div className="w-6 h-6 bg-gradient-to-br from-sunset-orange to-golden-yellow rounded-full flex items-center justify-center">
                    <Sparkles className="w-3 h-3 text-white" />
                  </div>
                </div>
                <p className="text-white font-semibold text-sm mb-1">{image.title}</p>
                <p className="text-white/70 text-xs">A beautiful space for our future together 💕</p>
                </div>
              </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 
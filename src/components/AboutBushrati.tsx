'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Heart, Sparkles } from 'lucide-react'
import { AnimatePresence } from 'framer-motion'
import Image from 'next/image'

export default function AboutBushrati() {
  const [showSpeechBubble, setShowSpeechBubble] = useState(false)
  const [currentReason, setCurrentReason] = useState('')
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const reasons = [
    "Bcz you care for everyone around you with a warmth that is truly rare. ❤️",
    "Bcz you are super smart, and every conversation with you opens my mind to new ideas. 🧠",
    "Bcz you are super beautiful, and your smile is the brightest part of my day. ✨",
    "Bcz you are ambitious, and your drive to achieve your dreams inspires me to chase mine. 🎯",
    "Bcz you are special, a unique combination of strength and kindness that I've never found in anyone else. 🌟",
    "Bcz you are a great writer just like me, and I know we could create entire worlds together with our words. ✍️",
    "Bcz you are an ENTJ just like me, which means you understand the way my mind works without me having to explain it. 🎭",
    "Bcz you love the same \"old money\" style just like me, proving we share a taste for timeless elegance. 👑",
    "Bcz we understand each other so well that sometimes we don't even need words. 🤝",
    "Bcz we always agree on the most important things in life. 💫",
    "Bcz your intelligence isn't just about facts; it's about a deep understanding of people. 🎓",
    "Bcz your beauty isn't just on the surface; it shines from your kind heart. 💖",
    "Bcz you see the potential in everything and everyone, especially in me. 🔮",
    "Bcz the way you care for others shows your incredible capacity for empathy. 🤗",
    "Bcz I can imagine us sitting in a Victorian-style library, writing our own stories side-by-side. 📚",
    "Bcz being an ENTJ with you means we are a powerful team, ready to take on the world together. ⚡",
    "Bcz I admire your ambition and I know you are destined for great things. 🏆",
    "Bcz even in a crowd, you are the only one I see. 👀",
    "Bcz you make me feel completely understood, which is the greatest gift of all. 🎁",
    "Bcz sharing the same classic style means we see beauty in the same places. 🏛️",
    "Bcz your mind challenges me to be smarter and better. 🧩",
    "Bcz you make caring for others look so effortless and natural. 🌸",
    "Bcz when you wrote for me, I felt like I'm reading a part of your soul. 📝",
    "Bcz your ambition is not just for yourself, but for a better future. 🌅",
    "Bcz there is a special spark in your eyes when you talk about your dreams. 🔥",
    "Bcz our shared ENTJ personality means our conversations are always deep and meaningful. 💭",
    "Bcz we agree on what a beautiful home looks like, filled with classic and elegant things. 🏠",
    "Bcz you have a way of making me feel like the best version of myself. 🌈",
    "Bcz I trust your judgment completely, as you are one of the smartest people I know. 🤝",
    "Bcz every day with you feels like a new, exciting chapter in a story we are writing together. 📖",
    "Bcz you carry yourself with a grace and beauty that is both classic and modern. 👸",
    "Bcz your caring nature extends not just to people, but to ideas and dreams. 🌱",
    "Bcz in a world of temporary things, our connection feels timeless and real. ⏰"
  ]

  const [shuffledReasons] = useState(() => {
    return [...reasons].sort(() => Math.random() - 0.5)
  })

  const [usedReasons, setUsedReasons] = useState<Set<number>>(new Set())
  const [availableReasons, setAvailableReasons] = useState<string[]>(shuffledReasons)

  const styleImages = [
    { src: "/Business woman style_.jpg", alt: "Business woman style" },
    { src: "/The perfection style.jpg", alt: "The perfection style" },
    { src: "/Classic old money style_.jpg", alt: "Classic old money style" },
    { src: "/Old money style.jpg", alt: "Old money style" },
    { src: "/Upper style.jpg", alt: "Upper style" },
    { src: "/Princes style.jpg", alt: "Princes style" },
    { src: "/Cool style.jpg", alt: "Cool style" },
    { src: "/Coat over dressed style.jpg", alt: "Coat over dressed style" },
    { src: "/Denim jacket style_.jpg", alt: "Denim jacket style" },
    { src: "/Baseball jacket style_.jpg", alt: "Baseball jacket style" },
    { src: "/IMG-20250802-WA0022.jpg", alt: "Style image" }
  ]

  const favoriteThingsImages = [
    { src: "/ur favorite fruit_.png", alt: "Your favorite fruit", title: "Your Favorite Fruit 🥑" },
    { src: "/ur favorite candy bars.png", alt: "Your favorite candy bars", title: "Your Favorite Candy Bars 🍬" },
    { src: "/ur favorite colors.jpg", alt: "Your favorite colors", title: "Your Favorite Colors 🎨" }
  ]

  const songs = [
    { src: "/Konna Netlaka.jpg", alt: "كنا نتلاقى", title: "كنا نتلاقى" },
    { src: "/Mo3_rm_.jpg", alt: "مغرم", title: "مغرم" },
    { src: "/Ana lak Ala Toul.jpg", alt: "أنا لك عالطول", title: "أنا لك عالطول" },
    { src: "/Je n_ai pas changé.jpg", alt: "Je n'ai pas changé", title: "Je n'ai pas changé" }
  ]

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const handleWhyILikeYouClick = () => {
    if (availableReasons.length > 0) {
      // Clear any existing timeout first
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      
      // Get a random reason from available ones
      const randomIndex = Math.floor(Math.random() * availableReasons.length)
      const selectedReason = availableReasons[randomIndex]
      
      // Remove the selected reason from available ones
      const newAvailableReasons = availableReasons.filter((_, index) => index !== randomIndex)
      setAvailableReasons(newAvailableReasons)
      
      // If we've used all reasons, reset the available reasons
      if (newAvailableReasons.length === 0) {
        setAvailableReasons([...shuffledReasons])
      }
      
      setCurrentReason(selectedReason)
      setShowSpeechBubble(true)
      
      // Set new timeout and store it in ref (12 seconds)
      timeoutRef.current = setTimeout(() => setShowSpeechBubble(false), 12000)
    }
  }

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 section-bg-sunset">
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
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold gradient-text-sunset mb-2">
            About Bushrati ❤️
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-sunset-orange via-vibrant-pink to-electric-purple mx-auto rounded-full animate-gradient-shift" />
        </motion.div>

        <div className="space-y-12 sm:space-y-16">
          {/* Part 1: Favorite Style */}
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <h3 className="text-xl sm:text-2xl font-serif font-semibold text-soft-white text-center mb-6 sm:mb-8">
              Your Favorite Style
            </h3>
            <div className="columns-2 sm:columns-3 md:columns-4 gap-4 space-y-4">
              {styleImages.map((image, index) => (
                <motion.div
                  key={index}
                  className="break-inside-avoid mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="memory-card-vibrant p-2 overflow-hidden rounded-xl">
                    <div className="relative w-full h-auto">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-full h-auto rounded-lg object-cover"
                        style={{ width: '100%', height: 'auto' }}
                      />
                      {/* Special text overlay for "The perfection style" */}
                      {image.alt === "The perfection style" && (
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end">
                          <div className="w-full p-3 sm:p-4">
                            <p className="text-white font-serif font-semibold text-sm sm:text-base text-center drop-shadow-lg">
                              btw I fell in love with this one ⭐💕✨
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Part 2: A Few of Your Favorite Things */}
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <h3 className="text-xl sm:text-2xl font-serif font-semibold text-soft-white text-center mb-6 sm:mb-8">
              A Few of Your Favorite Things
            </h3>
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8 max-w-5xl mx-auto px-4">
              {favoriteThingsImages.map((image, index) => (
                <motion.div
                  key={index}
                  className="break-inside-avoid mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-white/10">
                    <div className="relative w-full">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={0}
                        height={0}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="w-full h-auto object-cover"
                        style={{ width: '100%', height: 'auto' }}
                      />
                      {/* Beautiful title overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end">
                        <div className="w-full p-4 sm:p-6">
                          <h4 className="text-white font-serif font-semibold text-lg sm:text-xl md:text-2xl text-center drop-shadow-lg">
                            {image.title}
                </h4>
                </div>
              </div>
                      {/* Hover effect overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Part 3: Songs */}
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <h3 className="text-xl sm:text-2xl font-serif font-semibold text-soft-white text-center mb-6 sm:mb-8">
              Songs That Are the Best Bcz U Love Them
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              {songs.map((song, i) => (
                <motion.div
                  key={i}
                  className="memory-card-vibrant text-center group cursor-pointer"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <div className="relative w-full">
                    <div className="aspect-square bg-gradient-to-br from-vibrant-pink/20 via-electric-purple/20 to-neon-blue/20 rounded-xl mb-4 overflow-hidden">
                      <Image
                        src={song.src}
                        alt={song.alt}
                        width={0}
                        height={0}
                        sizes="(max-width: 640px) 50vw, 25vw"
                        className="w-full h-full object-cover"
                        style={{ width: '100%', height: '100%' }}
                      />
                    </div>
                    <p className={`text-white font-semibold text-sm mb-1 ${song.title.includes('Je') ? 'font-poppins' : 'font-almarai'}`}>
                      {song.title}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Part 4: Why I Like You Section */}
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="text-center"
          >
            <h3 className="text-xl sm:text-2xl font-serif font-semibold text-soft-white mb-2">
              Why I Like You 💕
            </h3>
            <p className="text-soft-white/70 text-sm sm:text-base mb-6 sm:mb-8">
              Keep clicking to know why I love you ✨
            </p>
            
            {/* WhatsApp-style chat container */}
            <div className="relative bg-gradient-to-br from-vibrant-pink/10 via-electric-purple/10 to-neon-blue/10 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-vibrant-pink/20 shadow-2xl max-w-2xl mx-auto">
              {/* Chat messages area */}
              <div className="min-h-[200px] sm:min-h-[250px] mb-6 flex flex-col justify-center">
                <AnimatePresence mode="wait">
                {showSpeechBubble && (
                  <motion.div
                      initial={{ opacity: 0, y: 30, scale: 0.8 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -30, scale: 0.8 }}
                      transition={{ 
                        duration: 0.8, 
                        ease: "easeInOut",
                        type: "spring",
                        stiffness: 100,
                        damping: 15
                      }}
                      className="w-full"
                    >
                      {/* WhatsApp-style message container */}
                      <motion.div 
                        className="memory-card-vibrant p-4 sm:p-6 max-w-full mx-auto"
                        initial={{ rotateX: -15, opacity: 0 }}
                        animate={{ rotateX: 0, opacity: 1 }}
                        exit={{ rotateX: 15, opacity: 0 }}
                        transition={{ 
                          duration: 0.6, 
                          ease: "easeOut",
                          delay: 0.1
                        }}
                      >
                        {/* Message header */}
                        <motion.div 
                          className="flex items-center gap-3 mb-4"
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                        >
                          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-vibrant-pink to-electric-purple rounded-full flex items-center justify-center glow-effect-vibrant">
                            <span className="text-white font-bold text-sm sm:text-lg">B</span>
                          </div>
                          <div>
                            <h3 className="font-semibold text-soft-white text-sm sm:text-base">Bushra</h3>
                            <p className="text-xs sm:text-sm text-gray-400">Online</p>
                          </div>
                        </motion.div>
                        
                        {/* Message bubble */}
                        <motion.div 
                          className="bg-gradient-to-br from-vibrant-pink/20 via-electric-purple/20 to-neon-blue/20 border border-vibrant-pink/30 rounded-2xl p-4 sm:p-6 text-left backdrop-blur-sm"
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.6, delay: 0.3 }}
                        >
                          <p className="text-soft-white leading-relaxed text-sm sm:text-base md:text-lg">
                        {currentReason}
                      </p>
                        </motion.div>
                        
                        {/* Message footer */}
                        <motion.div 
                          className="flex justify-between items-center mt-4 text-xs sm:text-sm text-gray-400"
                          initial={{ y: 10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.4 }}
                        >
                          <span>Today at 12:00 PM</span>
                          <div className="flex items-center gap-1">
                            <span>✓✓</span>
                    </div>
                        </motion.div>
                      </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
              </div>
              
              {/* Button at bottom center */}
              <div className="flex justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleWhyILikeYouClick}
                  className="bg-gradient-to-r from-vibrant-pink via-electric-purple to-neon-blue text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-vibrant-pink/30 backdrop-blur-sm"
                >
                  <span className="flex items-center gap-2">
                    <Heart className="w-5 h-5" />
                    Why Do I Like You?
                  </span>
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Part 5: Special Names Ticker */}
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="text-center"
          >
            <h3 className="text-xl sm:text-2xl font-serif font-semibold text-soft-white mb-6 sm:mb-8">
              Special Names 😉
            </h3>
            
            <div className="relative overflow-hidden bg-gradient-to-r from-vibrant-pink/10 via-electric-purple/10 to-neon-blue/10 rounded-2xl p-4 border border-vibrant-pink/20">
              <div className="flex animate-scroll-left">
                {/* First set of names and emoji */}
                <div className="flex items-center gap-4 sm:gap-6 md:gap-8 whitespace-nowrap">
                  <span className="text-base sm:text-lg md:text-xl font-medium text-vibrant-pink">Arcturus</span>
                  <span className="text-base sm:text-lg md:text-xl font-medium text-electric-purple">Aquarius</span>
                  <span className="text-base sm:text-lg md:text-xl font-medium text-neon-blue">Capella</span>
                  <span className="text-base sm:text-lg md:text-xl font-medium text-emerald-green">Elara</span>
                  <span className="text-base sm:text-lg md:text-xl font-medium text-golden-yellow mr-8 sm:mr-12 md:mr-16">😉</span>
                  <span className="text-base sm:text-lg md:text-xl font-medium text-vibrant-pink">Arcturus</span>
                  <span className="text-base sm:text-lg md:text-xl font-medium text-electric-purple">Aquarius</span>
                  <span className="text-base sm:text-lg md:text-xl font-medium text-neon-blue">Capella</span>
                  <span className="text-base sm:text-lg md:text-xl font-medium text-emerald-green">Elara</span>
                  <span className="text-base sm:text-lg md:text-xl font-medium text-golden-yellow mr-8 sm:mr-12 md:mr-16">😉</span>
                </div>
                {/* Duplicate set for seamless loop */}
                <div className="flex items-center gap-4 sm:gap-6 md:gap-8 whitespace-nowrap">
                  <span className="text-base sm:text-lg md:text-xl font-medium text-vibrant-pink">Arcturus</span>
                  <span className="text-base sm:text-lg md:text-xl font-medium text-electric-purple">Aquarius</span>
                  <span className="text-base sm:text-lg md:text-xl font-medium text-neon-blue">Capella</span>
                  <span className="text-base sm:text-lg md:text-xl font-medium text-emerald-green">Elara</span>
                  <span className="text-base sm:text-lg md:text-xl font-medium text-golden-yellow mr-8 sm:mr-12 md:mr-16">😉</span>
                  <span className="text-base sm:text-lg md:text-xl font-medium text-vibrant-pink">Arcturus</span>
                  <span className="text-base sm:text-lg md:text-xl font-medium text-electric-purple">Aquarius</span>
                  <span className="text-base sm:text-lg md:text-xl font-medium text-neon-blue">Capella</span>
                  <span className="text-base sm:text-lg md:text-xl font-medium text-emerald-green">Elara</span>
                  <span className="text-base sm:text-lg md:text-xl font-medium text-golden-yellow mr-8 sm:mr-12 md:mr-16">😉</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 
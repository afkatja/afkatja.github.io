"use client"

import { motion, AnimatePresence } from "motion/react"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import {
  ChevronDown,
  Camera,
  Code2,
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { ImageWithFallback } from "./imageWithFallback"
import { Button } from "./ui/button"

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const router = useRouter()

  const slides = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1712430812485-a015bae5779f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGxhbmRzY2FwZSUyMHN1bnNldHxlbnwxfHx8fDE3NTU2MDc3OTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Mountain Majesty",
      location: "Swiss Alps",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1623852425488-c9ae9d7feb7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvY2VhbiUyMHdhdmVzJTIwZ29sZGVuJTIwaG91cnxlbnwxfHx8fDE3NTU2MzM2OTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Golden Waves",
      location: "Pacific Coast",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1661708978599-1c68d01bf30b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3Jlc3QlMjBtb3JuaW5nJTIwbGlnaHR8ZW58MXx8fHwxNzU1NjMzNjk4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Forest Dawn",
      location: "Redwood National Park",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1716661188771-feac4eafd19b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwYXJjaGl0ZWN0dXJlJTIwbmlnaHR8ZW58MXx8fHwxNzU1NTg3OTgxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Urban Lights",
      location: "Downtown Metropolitan",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1631887007300-3b0b43387958?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNlcnQlMjBsYW5kc2NhcGUlMjBkcmFtYXRpYyUyMHNreXxlbnwxfHx8fDE3NTU2MzM2OTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Desert Storm",
      location: "Mojave Desert",
    },
  ]

  // Auto-advance slides
  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [isPlaying, slides.length])

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  }

  const floatingVariants = {
    animate: {
      y: [-20, 20, -20],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  }

  const MotionButton = motion(Button)

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Slideshow Background */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <ImageWithFallback
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="w-full h-full object-cover"
            />
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/30" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide Controls */}
      <div className="absolute top-6 right-6 z-30 flex items-center gap-3">
        {/* Play/Pause Button */}
        <motion.button
          onClick={() => setIsPlaying(!isPlaying)}
          className="p-3 bg-black/20 backdrop-blur-sm text-white rounded-full hover:bg-black/30 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          {isPlaying ? <Pause size={20} /> : <Play size={20} />}
        </motion.button>

        {/* Navigation Buttons */}
        <motion.button
          onClick={prevSlide}
          className="p-2 bg-black/20 backdrop-blur-sm text-white rounded-full hover:bg-black/30 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
        >
          <ChevronLeft size={20} />
        </motion.button>

        <motion.button
          onClick={nextSlide}
          className="p-2 bg-black/20 backdrop-blur-sm text-white rounded-full hover:bg-black/30 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <ChevronRight size={20} />
        </motion.button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white shadow-lg"
                : "bg-white/50 hover:bg-white/70"
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 + index * 0.1 }}
          />
        ))}
      </div>

      {/* Slide Info */}
      <motion.div
        className="absolute bottom-20 left-6 z-30 text-white"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5 }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="text-sm"
          >
            <p className="font-medium">{slides[currentSlide].title}</p>
            <p className="text-white/70">{slides[currentSlide].location}</p>
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-20 left-10 opacity-20 z-10"
      >
        <Code2 size={40} className="text-white" />
      </motion.div>

      <motion.div
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: "2s" }}
        className="absolute top-40 right-20 opacity-20 z-10"
      >
        <Camera size={60} className="text-white" />
      </motion.div>

      <motion.div
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: "4s" }}
        className="absolute bottom-40 left-20 opacity-20 z-10"
      >
        <div className="w-16 h-16 rounded-full border-2 border-white" />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-20 text-center max-w-4xl mx-auto px-6">
        <motion.div variants={itemVariants} className="mb-8">
          <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl backdrop-blur-sm">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1602582058850-d6dddd0a9063?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBob3RvZ3JhcGhlcnxlbnwxfHx8fDE3NTU1NTIwOTN8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Katia Hollaar"
              className="w-full h-full object-cover"
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
          </div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg"
        >
          Katia Hollaar
        </motion.h1>

        <motion.div variants={itemVariants} className="mb-8">
          <motion.p
            className="text-xl md:text-2xl text-white/90 mb-4 drop-shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            Web Developer & Photographer
          </motion.p>

          <motion.p
            className="text-lg text-white/80 max-w-2xl mx-auto drop-shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            Creating digital experiences and capturing moments that tell
            compelling stories
          </motion.p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <MotionButton
            onClick={() => router.push("/web")}
            className="group relative px-8 py-4 bg-white/20 backdrop-blur-sm text-white border border-white/30 rounded-full overflow-hidden transition-all duration-300 hover:bg-white hover:text-black hover:shadow-xl"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              <Code2 size={20} />
              View Web Work
            </span>
          </MotionButton>

          <MotionButton
            onClick={() => router.push("/photography")}
            className="group relative px-8 py-4 bg-white/20 backdrop-blur-sm text-white border border-white/30 rounded-full overflow-hidden transition-all duration-300 hover:bg-white hover:text-black hover:shadow-xl"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              <Camera size={20} />
              View Photography
            </span>
          </MotionButton>
        </motion.div>

        <motion.div variants={itemVariants} className="flex justify-center">
          <MotionButton
            onClick={() => router.push("/about")}
            className="flex flex-col items-center text-white/80 hover:text-white transition-colors"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            whileHover={{ scale: 1.1 }}
          >
            <span className="text-sm mb-2">Learn More</span>
            <ChevronDown size={24} />
          </MotionButton>
        </motion.div>
      </div>
    </motion.section>
  )
}

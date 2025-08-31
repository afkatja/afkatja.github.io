import React, { useEffect, useState } from "react"
import { Play, Pause, ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "motion/react"
import { ImageWithFallback } from "./imageWithFallback"

const slideshow = ({
  slides,
}: {
  slides: {
    id: number
    src: string
    title: string
    category: string
    height: string
  }[]
}) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

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
  return (
    <>
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
              src={slides[currentSlide].src}
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
          />
        </AnimatePresence>
      </motion.div>
    </>
  )
}

export default slideshow

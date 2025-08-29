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
import Slideshow from "./slideshow"

export function HeroSection({
  slides,
}: {
  slides: {
    id: number
    src: string
    title: string
    category: string
    height: string
  }[]
}) {
  const router = useRouter()

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

  const MotionButton = motion.create(Button)

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative min-h-[calc(100vh-var(--header-height))] flex items-center justify-center overflow-hidden"
    >
      <Slideshow slides={slides} />
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

      {/* Main Content */}
      <div className="relative z-20 text-center max-w-4xl mx-auto px-6">
        <motion.div variants={itemVariants} className="mb-8">
          <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl backdrop-blur-sm">
            <ImageWithFallback
              src="/katja.gif"
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
            variant="ghost"
            onClick={() =>
              scrollTo({ top: window.innerHeight, behavior: "smooth" })
            }
            className="flex flex-col items-center text-white/80 transition-colors hover:bg-transparent hover:text-white hover:text-shadow-2xs"
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

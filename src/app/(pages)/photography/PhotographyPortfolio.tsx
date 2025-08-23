"use client"

import { motion, useInView, AnimatePresence } from "motion/react"
import { useRef, useState } from "react"
import { X, Eye, Heart, ZoomIn } from "lucide-react"
import { ImageWithFallback } from "@/components/imageWithFallback"
import { categories, Category, photos } from "./data"
import PhotoCard from "./PhotoCard"
import Lightbox from "./Lightbox"

export function PhotographyPortfolio() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedImage, setSelectedImage] = useState<any>(null)
  const [activeFilter, setActiveFilter] = useState("all")

  const filteredPhotos =
    activeFilter === Category.All
      ? photos
      : photos.filter(photo => photo.category === activeFilter)

  return (
    <motion.section
      ref={ref}
      className="py-20 px-6 bg-gradient-to-b from-accent/10 to-background"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Photography
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Capturing life's moments and telling stories through the lens, from
            intimate portraits to breathtaking landscapes
          </p>
        </motion.div>

        {/* Filter Categories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`relative px-6 py-3 rounded-full transition-all duration-300 ${
                activeFilter === category.id
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "bg-card border border-border hover:border-primary/50"
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            >
              <span className="flex items-center gap-2">
                <category.icon size={18} />
                {category.label}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Photo Grid */}
        <motion.div
          className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6"
          layout
        >
          {filteredPhotos.map(photo => (
            <PhotoCard
              photo={photo}
              isInView={isInView}
              onClick={setSelectedImage}
              key={photo.id}
            />
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <Lightbox onClick={() => setSelectedImage(null)} photo={selectedImage} />
    </motion.section>
  )
}

"use client"

import { motion, useInView, AnimatePresence } from "motion/react"
import { useEffect, useRef, useState } from "react"
import { Camera } from "lucide-react"

import { categories, Category, getPresentCategories } from "./data"
import PhotoCard from "./PhotoCard"
import Lightbox from "./Lightbox"
import Loader from "@/components/ui/loader"
type Photo = {
  id: number
  src: string
  title: string
  category: string
  height: string
}
export function PhotographyPortfolio() {
  const ref = useRef(null)

  const [photos, setPhotos] = useState<Photo[]>([])
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedImage, setSelectedImage] = useState<any>(null)
  const [activeFilter, setActiveFilter] = useState(Category.All)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const ac = new AbortController()
    async function fetchPhotos() {
      try {
        const response = await fetch(
          "api/portfolio-images" +
            "?url=" +
            encodeURIComponent(
              "https://katjahollaar.myportfolio.com/favorites"
            ),
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
            cache: "no-store",
          }
        )
        const { imageUrls } = await response.json()

        const list = (Array.isArray(imageUrls) ? imageUrls : []) as Array<
          string | { url: string; category?: string }
        >
        const normalized: Photo[] = list.map((item, index) => {
          const url = typeof item === "string" ? item : item.url
          const category = (
            typeof item === "string" ? "other" : item.category || "other"
          ).toLowerCase()
          const heights = ["h-64", "h-72", "h-80", "h-96", "h-[28rem]"]
          return {
            id: index,
            src: url,
            title: `Photo ${index + 1}`,
            category,
            height: heights[index % heights.length],
          }
        })
        setPhotos(normalized)
      } catch (err) {
        console.error("Error fetching photos:", err)
      } finally {
        setLoading(false)
      }
    }
    fetchPhotos()
    return () => ac.abort()
  }, [])

  const filteredPhotos =
    activeFilter === Category.All
      ? photos
      : photos.filter(photo => photo.category.toLowerCase() === activeFilter)

  // if (loading) return "loading..."
  const categoriesToDisplay = getPresentCategories(photos)
  if (loading) return <Loader />
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
          {categoriesToDisplay.map((category, index) => (
            <motion.button
              key={`${category}-${index}`}
              onClick={() => setActiveFilter(category)}
              className={`relative px-6 py-3 rounded-full transition-all duration-300 ${
                activeFilter === category
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
                <Camera size={18} />
                {category.charAt(0).toUpperCase() + category.slice(1)}
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

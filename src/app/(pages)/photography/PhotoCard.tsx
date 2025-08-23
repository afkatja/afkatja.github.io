import { motion } from "motion/react"
import React from "react"
import { ImageWithFallback } from "../../../components/imageWithFallback"
import { Heart, ZoomIn } from "lucide-react"

export interface PhotoCard {
  id: number
  src: string
  title: string
  category: string
  likes?: number
  height: string
}

const PhotoCard = ({
  photo,
  isInView,
  onClick,
}: {
  photo: PhotoCard
  isInView: boolean
  onClick: (photo: PhotoCard) => void
}) => {
  return (
    <motion.div
      key={photo.id}
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: 0.4 + photo.id * 0.1 }}
      className={`group relative break-inside-avoid cursor-pointer ${photo.height} mb-6`}
      onClick={() => onClick(photo)}
      whileHover={{ scale: 1.02 }}
    >
      <div className="relative overflow-hidden rounded-xl shadow-lg bg-card h-full">
        <ImageWithFallback
          src={photo.src}
          alt={photo.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={false}
        >
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-white font-semibold mb-2">{photo.title}</h3>
            <div className="flex items-center justify-between">
              <span className="text-white/80 text-sm capitalize">
                {photo.category}
              </span>
              {!!photo.likes && (
                <div className="flex items-center gap-1 text-white/80">
                  <Heart size={14} />
                  <span className="text-sm">{photo.likes}</span>
                </div>
              )}
            </div>
          </div>

          <motion.div
            className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full text-white"
            whileHover={{ scale: 1.1 }}
          >
            <ZoomIn size={18} />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default PhotoCard

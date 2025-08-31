import { Eye, Heart, X } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"
import React from "react"
import { ImageWithFallback } from "../../../components/imageWithFallback"
import { PhotoCard } from "./PhotoCard"

const Lightbox = ({
  onClick,
  photo,
}: {
  onClick: () => void
  photo: PhotoCard
}) => {
  return (
    <AnimatePresence>
      {photo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => onClick()}
        >
          <motion.button
            className="absolute top-6 right-6 p-2 text-white hover:bg-white/10 rounded-full transition-colors z-60"
            onClick={() => onClick()}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <X size={24} />
          </motion.button>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative max-w-7xl h-[90vh] w-full rounded-lg overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            <ImageWithFallback
              src={photo.src}
              alt={photo.title}
              className="w-full h-full object-contain"
            />

            {/*<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
              <h3 className="text-white text-2xl font-bold mb-2">
                {photo.title}
              </h3>
               <div className="flex items-center justify-between text-white/80">
                <span className="capitalize">{photo.category}</span>
                <div className="flex items-center gap-2">
                  <Eye size={16} />
                  <span>1,234 views</span>
                  <Heart size={16} className="ml-4" />
                  <span>{photo.likes}</span>
                </div>
              </div>
            </div> */}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Lightbox

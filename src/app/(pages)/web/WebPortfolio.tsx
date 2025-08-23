"use client"

import { motion, useInView } from "motion/react"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import projects, { Filter, filters } from "./data"
import ProjectCard from "./Project"

export function WebPortfolio() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeFilter, setActiveFilter] = useState<Filter>(Filter.All)

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter(project => project.category === activeFilter)
  const MotionButton = motion(Button)
  return (
    <motion.section
      ref={ref}
      className="py-20 px-6 bg-gradient-to-b from-background to-accent/10"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Web Development
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Crafting responsive, performant, and user-friendly web applications
            using modern technologies
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter, index) => (
            <MotionButton
              key={filter.id}
              variant="outline"
              size="lg"
              onClick={() => setActiveFilter(filter.id)}
              className={`relative transition-all duration-300 ${
                activeFilter === filter.id
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
                <filter.icon size={18} />
                {filter.label}
              </span>
            </MotionButton>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" layout>
          {filteredProjects.map(project => (
            <ProjectCard
              key={project.id}
              project={project}
              isInView={isInView}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}

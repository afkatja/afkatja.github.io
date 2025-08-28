// import { motion } from "motion/react"
import { ProjectCardProps } from "./data"
import { motion } from "motion/react"
import { ImageWithFallback } from "../../../components/imageWithFallback"
import { ExternalLink, Github } from "lucide-react"

const ProjectCard: React.FC<{
  project: ProjectCardProps
  isInView: boolean
}> = ({ project, isInView }) => {
  return (
    <motion.div
      key={project.id}
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: 0.4 + project.id * 0.1 }}
      className="group bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:cursor-pointer p-6 flex flex-col"
      whileHover={{ y: -10, scale: 1.02 }}
    >
      <div className="relative overflow-hidden">
        <ImageWithFallback
          src={project.imageUrl}
          alt={project.title}
          className="h-48 block mx-auto object-contain object-center transition-transform duration-300 group-hover:scale-110"
        />
        <motion.div
          className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4"
          initial={false}
        >
          <motion.a
            href={project.liveLink}
            className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ExternalLink size={20} />
          </motion.a>
          <motion.a
            href={project.githubLink}
            className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Github size={20} />
          </motion.a>
        </motion.div>
      </div>

      <div className="pt-6">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground mb-4 text-sm">
          {project.description}
        </p>
      </div>
      <footer className="flex flex-wrap gap-2 mt-auto">
        {project.technologies.map((tech: string) => (
          <motion.span
            key={tech}
            className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs"
            whileHover={{ scale: 1.05 }}
          >
            {tech}
          </motion.span>
        ))}
      </footer>
    </motion.div>
  )
}

export default ProjectCard

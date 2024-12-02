import Image from "next/image"
// import { motion } from "motion/react"
import Link from "next/link"

export interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  imageUrl: string
  githubLink?: string
  liveLink?: string
  highlight?: boolean
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  imageUrl,
  githubLink,
  liveLink,
  highlight,
}) => {
  return (
    <div
      className={`bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 project-card rounded-lg shadow-lg p-6 my-5 mx-0 md:m-0 ${
        highlight ? "col-span-4" : ""
      }`}
    >
      {imageUrl && (
        <Image
          src={imageUrl}
          alt={`${title} project screenshot`}
          width={400}
          height={250}
          className="rounded-t-lg"
        />
      )}
      <h3 className="text-xl font-bold mt-4">{title}</h3>
      <p className="mt-2">{description}</p>
      <div className="technologies mt-4">
        {technologies.map(tech => (
          <span
            key={tech}
            className="inline-block bg-neutral-200 dark:bg-neutral-400 text-neutral-700 dark:text-neutral-100 rounded-full px-3 py-1 text-sm mr-2 mb-2"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="links mt-4 flex space-x-4">
        {githubLink && (
          <Link
            href={githubLink}
            target="_blank"
            className="text-blue-600 dark:text-blue-100 hover:underline"
          >
            GitHub
          </Link>
        )}
        {liveLink && (
          <Link
            href={liveLink}
            target="_blank"
            className="text-blue-600 dark:text-blue-100 no-underline hover:underline"
          >
            Live Site
          </Link>
        )}
      </div>
    </div>
  )
}

export default ProjectCard

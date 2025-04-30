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
        highlight
          ? "md:col-span-4 md:grid md:grid-cols-2 md:gap-4"
          : "col-span-2"
      }`}
    >
      {imageUrl && (
        <Image
          src={imageUrl}
          alt={`${title} project screenshot`}
          width={highlight ? 400 : 250}
          height={highlight ? 250 : 100}
          className="rounded-t-lg mt-0"
        />
      )}
      <div className="flex flex-col h-[calc(100%-100px)]">
        <h3 className="text-xl font-bold mt-4">{title}</h3>
        <p className="mt-2">{description}</p>
        <div className="technologies my-4">
          <h4 className="font-semibold">Technologies:</h4>
          {technologies.map(tech => (
            <span
              key={tech}
              className="inline-block bg-neutral-400 dark:bg-neutral-100 text-neutral-700 dark:text-neutral-100 rounded-full px-3 py-1 text-sm mr-2 mb-2"
            >
              {tech}
            </span>
          ))}
        </div>
        {(githubLink || liveLink) && (
          <div className="links flex space-x-4 text-sm mt-auto">
            {githubLink && (
              <Link
                href={githubLink}
                target="_blank"
                className="text-blue-600 dark:text-blue-100 no-underline hover:underline"
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
        )}
      </div>
    </div>
  )
}

export default ProjectCard

import React from "react"
import ProjectCard, { ProjectCardProps } from "../web/Project"

const Projects = () => {
  return (
    <div className="md:grid grid-cols-4 gap-5 prose max-w-none dark:prose-invert prose-neutral py-5">
      {projects.map(project => (
        <ProjectCard key={crypto.randomUUID()} {...project} />
      ))}
    </div>
  )
}

export default Projects

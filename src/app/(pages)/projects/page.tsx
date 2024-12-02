import React from "react"
import ProjectCard, { ProjectCardProps } from "./Project"

const projects: ProjectCardProps[] = [
  {
    title: "Greenwheels",
    description:
      "A comprehensive web application revolutionizing urban mobility through intuitive, cross-platform car sharing solutions. Migrated from fragmented, multi-framework spaghetti code to a robust, scalable React ecosystem. Developed a multiplatform React application ensuring seamless user experience. Created a custom component library, reducing development overhead and maintaining UI/UX consistency. Integrated Google Maps Platform to enhance car findability and booking experience. Implemented cross-platform strategy enabling smooth iOS and Android app integration.Significantly improved application performance, scalability, and maintainability. Simplified urban mobility by creating an intuitive, reliable car-sharing platform that works across web and mobile environments.",
    technologies: ["React", "next.js", "styled components", "GraphQL", "node"],
    imageUrl: "greenwheels.png",
    githubLink: "",
    liveLink: "",
    highlight: true,
  },
  {
    title: "Bolster",
    description:
      "Front-end development of a flexible and versatile system of custom built components and templates to empower NGOs and independent journalistic organizations on the web. Tailoring the UI for the specific clients' needs and requirements. Constantly improving and further developing responsive and browser/OS agnostic design system.",
    technologies: ["React", "wordpress", "styled components", "node"],
    imageUrl: "",
    githubLink: "",
    liveLink: "",
    highlight: false,
  },
  {
    title: "Fietsersbond",
    description:
      "The portal website of the Dutch cyclists union, with subsites for local departments. Built with Worpress custom theme platform (Perikles), with advanced custom components and templates, using webpack, sass and ecmascript.",
    technologies: ["React", "wordpress", "sass", "node"],
    imageUrl: "",
    githubLink: "",
    liveLink: "",
    highlight: false,
  },
  {
    title: "One world",
    description:
      "The platform for the Dutch digital magazine dealing with the issues of politics, sustainability and citizen awareness.",
    technologies: ["React", "wordpress", "sass", "node"],
    imageUrl: "",
    githubLink: "",
    liveLink: "",
    highlight: false,
  },
  {
    title: "Schooltas",
    description:
      "The learning platform that combines enriched eBooks with social & collaborative learning tools. A web application with a shared interface for schoolchildren, teachers and book editors that enables entirely digital learning environment: reading, writing, making notes and drawings, reviewing homework, playing games like wordweb and enriching book content with interactive elements (video, photo, game, etc).",
    technologies: ["vue", "sass", "node"],
    liveLink: "schooltas.avif",
    imageUrl: "",
    githubLink: "",
    highlight: false,
  },
  {
    title: "Staatsloterij",
    description:
      "The website of the Dutch State lottery. Responsive webshop and website.",
    technologies: [".net", "angular", "backbone.js", "sass", "vue"],
    imageUrl: "staatsloterij.avif",
    githubLink: "",
    liveLink: "http://staatsloterij.nl",
    highlight: false,
  },
]

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

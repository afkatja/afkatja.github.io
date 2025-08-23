import { Code2, Monitor, Smartphone } from "lucide-react"

export interface ProjectCardProps {
  id: number
  title: string
  description: string
  category: string
  technologies: string[]
  imageUrl: string
  githubLink?: string
  liveLink?: string
  highlight?: boolean
}

export enum Filter {
  All = "all",
  FrontEnd = "frontend",
  Fullstack = "fullstack",
  Mobile = "mobile",
}

export const filters = [
  { id: Filter.All, label: "All Projects", icon: Code2 },
  { id: Filter.FrontEnd, label: "Frontend", icon: Monitor },
  { id: Filter.Fullstack, label: "Full Stack", icon: Code2 },
  // { id: Filter.Mobile, label: "Mobile", icon: Smartphone },
]

const projects: ProjectCardProps[] = [
  {
    id: 1,
    category: "fullstack",
    title: "Finca Guarumo",
    description:
      "A web application for a homestead farm in Costa Rica, built with React, Next.js and a headless CMS Sanity.io. The multilingual and responsive website features a blog and a booking system for an accommodation.",
    technologies: ["React", "Next.js", "Tailwindcss", "Sanity.io"],
    imageUrl: "/fincaguarumo.jpg",
    githubLink: "https://github.com/afkatja/fincaguarumo",
    liveLink: "http://fincaguarumo.com",
    highlight: true,
  },
  {
    id: 2,
    category: "fullstack",
    title: "Barra del Colorado",
    description:
      "Multilingual website for a remote eco-tourism conservation area in Costa Rica, with information for tourists and locals. Built with React, Next.js and a headless CMS Sanity.io. The website features a blog and a simple contact system for accommodations and tours.",
    technologies: ["React", "Next.js", "Tailwindcss", "Sanity.io"],
    imageUrl: "/barradelcolorado.png",
    githubLink: "https://github.com/afkatja/varacolorado",
    liveLink: "http://barradelcolorado.com",
    highlight: true,
  },
  {
    id: 3,
    category: "frontend",
    title: "Greenwheels",
    description:
      "A comprehensive web application revolutionizing urban mobility through intuitive, cross-platform car sharing solutions. Migrated from fragmented, multi-framework code to a robust, scalable React ecosystem. Developed a multiplatform React application ensuring seamless user experience. Created a custom component library, reducing development overhead and maintaining UI/UX consistency. Integrated Google Maps Platform to enhance car findability and booking experience. Implemented cross-platform strategy enabling smooth iOS and Android app integration. Significantly improved application performance, scalability, and maintainability.",
    technologies: ["React", "next.js", "styled components", "GraphQL", "node"],
    imageUrl: "greenwheels.png",
    githubLink: "",
    liveLink: "https://greenwheels.com",
    highlight: false,
  },
  {
    id: 4,
    category: "frontend",
    title: "Bolster",
    description:
      "Front-end development of a flexible and versatile system of custom built components and templates to empower NGOs and independent journalistic organizations on the web. Tailoring the UI for the specific clients' needs and requirements. Constantly improving and further developing responsive and browser/OS agnostic design system.",
    technologies: ["React", "wordpress", "styled components", "node"],
    imageUrl: "/bolster.png",
    githubLink: "",
    liveLink: "",
    highlight: false,
  },
  {
    id: 5,
    category: "frontend",
    title: "Fietsersbond",
    description:
      "The portal website of the Dutch cyclists union, with subsites for local departments. Built with Worpress custom theme platform (Perikles), with advanced custom components and templates, using webpack, sass and ecmascript.",
    technologies: ["React", "wordpress", "sass", "node"],
    imageUrl: "/fietsersbond.svg",
    githubLink: "",
    liveLink: "",
    highlight: false,
  },
  {
    id: 6,
    category: "frontend",
    title: "One world",
    description:
      "The platform for the Dutch digital magazine dealing with the issues of politics, sustainability and citizen awareness.",
    technologies: ["React", "wordpress", "sass", "node"],
    imageUrl: "/oneworld.svg",
    githubLink: "",
    liveLink: "",
    highlight: false,
  },
  {
    id: 7,
    category: "frontend",
    title: "Schooltas",
    description:
      "The learning platform that combines enriched eBooks with social & collaborative learning tools. A web application with a shared interface for schoolchildren, teachers and book editors that enables entirely digital learning environment: reading, writing, making notes and drawings, reviewing homework, playing games like wordweb and enriching book content with interactive elements (video, photo, game, etc).",
    technologies: ["vue", "sass", "node"],
    liveLink: "",
    imageUrl: "/schooltas.avif",
    githubLink: "",
    highlight: false,
  },
  {
    id: 8,
    category: "frontend",
    title: "Staatsloterij",
    description:
      "The website of the Dutch State lottery. Responsive webshop and website.",
    technologies: [".net", "angular", "backbone.js", "sass"],
    imageUrl: "staatsloterij.avif",
    githubLink: "",
    liveLink: "http://staatsloterij.nl",
    highlight: false,
  },
]

export default projects

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
      "A platform supporting NGOs and independent journalistic organizations with a flexible, versatile web presence. I worked on the front-end development, building a custom design system with React and Storybook, integrated into the Perikles WordPress framework. The system included reusable components and templates, tailored to clients’ needs, and designed for responsiveness and cross-browser compatibility.",
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
      "The portal website of the Dutch Cyclists’ Union, featuring subsites for local departments. Built on a custom WordPress theme platform (Perikles) with advanced components and templates, using React, Webpack, Sass, and ECMAScript for a scalable and maintainable front end.",
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
      "The online platform for the Dutch digital magazine focused on politics, sustainability, and citizen awareness. I developed the site on WordPress, building custom plugins to extend functionality. On the front end, we used React with styled-components to create a modern, responsive, and maintainable user experience.",
    technologies: ["React", "wordpress", "styled components", "node"],
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
      "A digital learning platform that combines enriched eBooks with social and collaborative tools for schoolchildren, teachers, and book editors. The web application supports reading, writing, note-taking, drawing, reviewing homework, playing educational games, and enriching content with interactive media. I was responsible for building the account section of the app, enabling teachers and students to manage their personal learning environment and access collaborative features. The project was built using Vue.js and Sass, following BEM and SMACSS principles for maintainable HTML5/CSS3.",
    technologies: ["vue.js", "sass", "node"],
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
      "The official website of the Dutch State Lottery, built as a responsive webshop and information portal. I was responsible for the account section, where users could interactively check their winnings through a gamified interface. The project combined  frontend frameworks (Backbone.js, Angular.js, Knockout.js) with a Java/Groovy backend, following OOcss principles for maintainable HTML5/CSS3.",
    technologies: [".net", "angular", "backbone.js", "css3", "OOcss"],
    imageUrl: "staatsloterij.avif",
    githubLink: "",
    liveLink: "http://staatsloterij.nl",
    highlight: false,
  },
]

export default projects

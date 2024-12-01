import Image from "next/image"
import Link from "next/link"
import Markdown from "react-markdown"

const home = `# Web Developer | Digital Solution Architect | Wildlife Photographer | Perpetual Learner

From the intricate syntax of human languages to the elegant structures of programming languages, my journey has been defined by curiosity and adaptation. A former linguist turned web developer, I crafted the comprehensive web application for GreenWheels.nl before trading European tech scenes for the vibrant tropical forests of Costa Rica.

My passion for capturing the nuanced beauty of wildlife through photography mirrors my approach to web development: patient, precise, and always seeking to reveal the underlying story. Specializing in React, Next.js, and headless CMS technologies, I transform complex business requirements into intuitive digital experiences.

When not writing code or tracking rare birds through the Costa Rican jungle, you'll find me welding, constructing, or diving into a new book – a perpetual student of both technology and the natural world. My work is a testament to the art of continuous learning and creative problem-solving.`

export default function Home() {
  return (
    <article className="prose mx-auto py-5">
      <Image src="/katja.jpg" alt="katja" width={800} height={500} />
      <Markdown>{home}</Markdown>
    </article>
  )
}

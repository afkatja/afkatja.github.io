import Image from "next/image"
import Link from "next/link"
import Markdown from "react-markdown"
import { HeroSection } from "../components/heroSection"
import { PageLayout } from "../components/pageLayout"

const home = `# Web Developer | Digital Solutions Architect | Wildlife Photographer | Perpetual Learner

From the intricate syntax of human languages to the elegant structures of programming languages, my journey has been defined by curiosity and adaptation. A former linguist turned web developer, I crafted the comprehensive web application for Greenwheels before trading European tech scenes for the vibrant tropical forests of Costa Rica.

My passion for capturing the nuanced beauty of wildlife through photography mirrors my approach to web development: patient, precise, and always seeking to reveal the underlying story. Specializing in React, Next.js, and headless CMS technologies, I transform complex business requirements into intuitive digital experiences.

When not writing code or tracking rare birds through the Costa Rican jungle, you'll find me welding, constructing, or diving into a new book – a perpetual student of both technology and the natural world. My work is a testament to the art of continuous learning and creative problem-solving.`

export default function Home() {
  return (
    // <article className="prose dark:prose-invert prose-neutral mx-auto py-5 md:grid grid-cols-2 text-neutral-900 dark:text-neutral-100">
    //   <Image
    //     src="/katja.gif"
    //     alt="katja"
    //     width={800}
    //     height={500}
    //     className="m-0"
    //   />
    //   <div className="bg-gradient-to-br from-blue-500 to-green-400 p-10 text-neutral-100 dark:from-blue-900 dark:to-green-700 flex flex-wrap flex-col">
    //     <h1>Hello, I'm Katja Hollaar</h1>
    //     <Link
    //       href="/contact"
    //       className="text-3xl font-bold text-white no-underline hover:animate-pulse mt-auto"
    //     >
    //       Let's Connect
    //     </Link>
    //   </div>
    //   <Markdown className="col-span-2 my-10">{home}</Markdown>
    // </article>
    <PageLayout showFooter={false}>
      <HeroSection />
    </PageLayout>
  )
}

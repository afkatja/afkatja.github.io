import Link from "next/link"
import Markdown from "react-markdown"
import { HeroSection } from "../components/heroSection"
import { PageLayout } from "../components/pageLayout"
import { fetchPhotos } from "./lib/getPortfolioImages"
import { ChevronRight } from "lucide-react"

const home = `From the intricate syntax of human languages to the elegant structures of programming languages, my journey has been defined by curiosity and adaptation. A former linguist turned web developer, I built the comprehensive web application for Greenwheels before trading European tech scenes for the vibrant tropical forests of Costa Rica.

My passion for capturing the nuanced beauty of wildlife through photography mirrors my approach to technology: patient, precise, and always seeking to reveal the underlying story. Specializing in React, Next.js, and headless CMS technologies like Sanity, I craft digital experiences that go beyond static websites—integrating APIs, AI tools, and automation to solve real-world problems elegantly and efficiently.

When not writing code, experimenting with AI-driven workflows, or tracking rare birds through the Costa Rican jungle, you'll find me welding, building, or diving into a new book—a perpetual student of both technology and the natural world. My work reflects a dedication to continuous learning, creative problem-solving, and the seamless fusion of diverse disciplines into meaningful, usable solutions.`

const Home = async () => {
  let imageUrls: { url: string; category: string }[] = []
  try {
    imageUrls = await fetchPhotos()
  } catch (err) {
    console.error("Failed to load portfolio images:", err)
    imageUrls = []
  }

  const photos: {
    id: number
    src: string
    title: string
    category: string
    height: string
  }[] = imageUrls.map(
    (item: { url: string; category: string }, index: number) => ({
      id: index,
      src: item.url,
      title: `Photo ${index + 1}`,
      category: item.category,
      height: `h-full`,
    })
  )
  const slides = photos.filter(
    photo => (photo.category ?? "").toLowerCase() === "landscape"
  )
  return (
    <PageLayout showFooter={false}>
      <HeroSection slides={slides} />
      <article
        id="home"
        className="prose dark:prose-invert prose-neutral mx-auto py-5 md:grid grid-cols-2 gap-4 text-neutral-900 dark:text-neutral-100 place-items-start"
      >
        <h2 className="col-span-2 text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          Web Developer | Digital Solutions Architect | Wildlife Photographer |
          Perpetual Learner
        </h2>
        <div>
          <Markdown>{home}</Markdown>
        </div>
        <Link
          href="/contact"
          className="text-3xl font-bold hover:animate-pulse inline-flex items-center gap-2 ml-8 mt-5"
        >
          Let's Connect
          <ChevronRight className="animate-ping" />
        </Link>
      </article>
    </PageLayout>
  )
}

export default Home

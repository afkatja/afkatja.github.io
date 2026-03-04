import Link from "next/link"
import Markdown from "react-markdown"
import { HeroSection } from "../components/heroSection"
import { PageLayout } from "../components/pageLayout"
import { fetchPhotos } from "./lib/getPortfolioImages"
import { ChevronRight } from "lucide-react"

const home = `I’m a former linguist turned full‑stack web developer, now working remotely from the tropical forests of Costa Rica. I build web applications with React, Next.js, TypeScript, Tailwind CSS, and Sanity, and I’ve shifted my focus to integrating AI into real products using LLMs/SLMs, RAG over CMS content and data from various APIs, and automation agents that help users get things done.

I enjoy designing the whole flow: fast, accessible frontends, solid backends, and AI features that are evaluated, corrected, and improved over time instead of left to “magic.” Alongside development, I run a [homestead and vacation rental](https://fincaguarumo.com), and my [wildlife photography](/photography) keeps me paying attention to detail, whether I’m tracking a rare bird or debugging a stubborn UI.`

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
    }),
  )
  const slides = photos.filter(
    photo => (photo.category ?? "").toLowerCase() === "landscape",
  )
  return (
    <PageLayout showFooter={false}>
      <HeroSection slides={slides} />
      <article
        id="home"
        className="prose dark:prose-invert prose-neutral mx-auto py-5 md:grid grid-cols-2 gap-4 text-neutral-900 dark:text-neutral-100 place-items-start"
      >
        <h2 className="col-span-2 text-3xl md:text-4xl font-bold mb-6 bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">
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

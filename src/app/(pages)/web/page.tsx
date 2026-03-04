import type { Metadata } from "next"
import { PageLayout } from "@/components/pageLayout"
import { WebPortfolio } from "./WebPortfolio"

export const metadata: Metadata = {
  title: "AI-Integrated Web Projects – Katia Hollaar",
  description:
    "Explore web applications that combine React, Next.js, and TypeScript with AI integrations, RAG, and modern APIs to deliver fast, accessible user experiences.",
  openGraph: {
    title: "AI-Integrated Web Projects – Katia Hollaar",
    description:
      "Selected projects showcasing full-stack React/Next.js applications with LLM integrations, RAG, and real-world booking and automation flows.",
    url: "https://afkatja.github.io/web",
    siteName: "Katia Hollaar – Portfolio",
    type: "website",
    images: [
      {
        url: "https://afkatja.github.io/website-resolutions.jpg",
        width: 1200,
        height: 630,
        alt: "Screenshots of AI-integrated web applications by Katia Hollaar",
      },
    ],
  },
}

export default function WebPage() {
  return (
    <PageLayout>
      <WebPortfolio />
    </PageLayout>
  )
}

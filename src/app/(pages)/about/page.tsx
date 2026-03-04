import type { Metadata } from "next"
import { PageLayout } from "../../../components/pageLayout"
import { AboutSection } from "./AboutSection"

export const metadata: Metadata = {
  title: "About – Katia Hollaar",
  description:
    "Learn about Katia Hollaar, a Costa Rica–based full-stack React/Next.js developer and photographer, specializing in AI-integrated web applications with LLMs, RAG, and modern tooling.",
  openGraph: {
    title: "About – Katia Hollaar",
    description:
      "Full-stack web developer and photographer, building AI-powered React/Next.js applications with RAG, open-source models, and real-world automation from the tropical forests of Costa Rica.",
    url: "https://afkatja.github.io/about",
    siteName: "Katia Hollaar – Portfolio",
    type: "profile",
    images: [
      {
        url: "https://afkatja.github.io/katja.jpg",
        width: 1200,
        height: 630,
        alt: "Portrait of Katia Hollaar, full-stack web developer and photographer in Costa Rica",
      },
    ],
    locale: "en_US",
  },
}

export default function AboutPage() {
  return (
    <PageLayout>
      <AboutSection />
    </PageLayout>
  )
}

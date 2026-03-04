import type { Metadata } from "next"
import { Zain } from "next/font/google"
import { AnimatePresence, motion } from "motion/react"
import "./globals.css"
import Script from "next/script"

const zain = Zain({ subsets: ["latin"], weight: ["400", "700"] })

export const metadata: Metadata = {
  title: "Katia Hollaar - Full-stack Developer & Photographer",
  description:
    "Katia Hollaar – Full‑Stack Web Developer, AI Integration Specialist & Photographer",
  icons: {
    icon: "/favicon.ico",
  },
  keywords: [
    "full-stack developer",
    "web developer",
    "frontend developer",
    "React developer",
    "Next.js developer",
    "Node.js developer",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "UI development",
    "web performance",
    "accessibility",
    "AI-assisted development",
    "AI integration",
    "LLM applications",
    "LLM agents",
    "retrieval-augmented generation",
    "RAG",
    "open-source models",
    "small language models",
    "SLMs",
    "AI evaluation pipelines",
    "generation and evaluation workflows",
    "AI developer tooling",
    "Windsurf setup",
    "API integrations",
    "full-stack AI apps",
    "Costa Rica developer",
    "remote web developer",
    "photographer",
    "photography portfolio",
  ],
  authors: [{ name: "Katia Hollaar", url: "https://afkatja.github.io" }],
  creator: "Katia Hollaar",
  alternates: {
    canonical: "https://afkatja.github.io",
  },
  openGraph: {
    title: "Katia Hollaar – Full-stack Developer & Photographer",
    description:
      "Full‑stack TypeScript/JavaScript developer building AI‑integrated web apps with LLM agents, RAG, OSS models, and eval pipelines, and wildlife photographer from Costa Rica.",
    type: "website",
    url: "https://afkatja.github.io",
    locale: "en_US",
    siteName: "Katia Hollaar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Katia Hollaar - Full-stack Developer & Photographer",
    description:
      "Full‑stack TypeScript/JavaScript developer building AI‑integrated web apps with LLM agents, RAG, OSS models, and eval pipelines, and wildlife photographer from Costa Rica.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://afkatja.github.io/#person",
      name: "Katia Hollaar",
      url: "https://afkatja.github.io",
      image: "https://afkatja.github.io/katia.jpg",
      jobTitle:
        "Full-Stack Web Developer, AI Integration Specialist & Photographer",
      description:
        "Full‑stack TypeScript/JavaScript developer building AI‑integrated web apps with LLM agents, RAG, OSS models, and eval pipelines, and wildlife photographer from Costa Rica.",
      sameAs: [
        "https://github.com/afkatja",
        "https://www.linkedin.com/in/katjahollaar",
        "https://www.instagram.com/katjahollaar",
      ],
      knowsAbout: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Node.js",
        "Tailwind CSS",
        "web accessibility",
        "web performance",
        "LLM applications",
        "retrieval-augmented generation (RAG)",
        "AI agents and tool use",
        "open-source language models",
        "small language models (SLMs)",
        "AI generation and evaluation pipelines",
        "AI-assisted development environments",
        "Windsurf",
        "API integrations",
        "frontend engineering",
        "full-stack web development",
        "photography",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://afkatja.github.io/#website",
      url: "https://afkatja.github.io",
      name: "Katia Hollaar - Full-stack Developer & Photographer",
      description:
        "Full‑stack TypeScript/JavaScript developer building AI‑integrated web apps with LLM agents, RAG, OSS models, and eval pipelines, and wildlife photographer from Costa Rica.",
      publisher: {
        "@id": "https://afkatja.github.io/#person",
      },
      inLanguage: "en",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://afkatja.github.io/search?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`bg-neutral-100 dark:bg-neutral-700 ${zain.className}`}>
        <AnimatePresence mode="wait">{children}</AnimatePresence>
        <Script
          id="json-ld"
          strategy="afterInteractive"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  )
}

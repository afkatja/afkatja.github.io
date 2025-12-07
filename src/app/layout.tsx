import type { Metadata } from "next"
import { Zain } from "next/font/google"
import { AnimatePresence, motion } from "motion/react"
import "./globals.css"
import Script from "next/script"

const zain = Zain({ subsets: ["latin"], weight: ["400", "700"] })

export const metadata: Metadata = {
  title: "Katia Hollaar - Web Developer & Photographer",
  description:
    "Portfolio of Katia Hollaar, a frontend-focused web developer and photographer building fast, accessible experiences with React, Next.js, and modern web technologies.",
  icons: {
    icon: "/favicon.ico",
  },
  keywords: [
    "frontend developer",
    "web developer",
    "React developer",
    "Next.js developer",
    "TypeScript",
    "Tailwind CSS",
    "UI development",
    "web performance",
    "accessibility",
    "AI-assisted development",
    "photographer",
    "photography portfolio",
    "Costa Rica developer",
  ],
  authors: [{ name: "Katia Hollaar", url: "https://afkatja.github.io" }],
  creator: "Katia Hollaar",
  alternates: {
    canonical: "https://afkatja.github.io",
  },
  openGraph: {
    title: "Katia Hollaar – Frontend Developer & Photographer",
    description:
      "Portfolio showcasing web development projects, AI-assisted interfaces, and photography work by Katia Hollaar.",
    type: "website",
    url: "https://afkatja.github.io",
    locale: "en_US",
    siteName: "Katia Hollaar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Katia Hollaar - Web Developer & Photographer",
    description:
      "Portfolio showcasing web development projects and photography work",
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
      jobTitle: "Web Developer & Photographer",
      description:
        "Frontend-focused web developer and photographer creating fast, accessible digital experiences and visual stories.",
      sameAs: [
        "https://github.com/afkatja",
        "https://www.linkedin.com/in/katjahollaar",
        "https://www.instagram.com/katjahollaar",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://afkatja.github.io/#website",
      url: "https://afkatja.github.io",
      name: "Katia Hollaar - Web Developer & Photographer",
      description:
        "Portfolio showcasing web development projects and photography work by Katia Hollaar.",
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

import type { Metadata } from "next"
import { Zain } from "next/font/google"
import { AnimatePresence, motion } from "motion/react"
import "./globals.css"

const zain = Zain({ subsets: ["latin"], weight: ["400", "700"] })

export const metadata: Metadata = {
  title: "Katia Hollaar - Web Developer & Photographer",
  description:
    "Portfolio of Katia Hollaar - Creating digital experiences and capturing moments that tell compelling stories",
  icons: {
    icon: "/favicon.ico",
  },
  keywords: [
    "web developer",
    "photographer",
    "portfolio",
    "React",
    "Next.js",
    "photography",
  ],
  authors: [{ name: "Katia Hollaar" }],
  creator: "Katia Hollaar",
  openGraph: {
    title: "Katia Hollaar - Web Developer & Photographer",
    description:
      "Portfolio showcasing web development projects and photography work",
    type: "website",
    locale: "en_US",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`bg-neutral-100 dark:bg-neutral-700 ${zain.className}`}>
        <AnimatePresence mode="wait">{children}</AnimatePresence>
      </body>
    </html>
  )
}

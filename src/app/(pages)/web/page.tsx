import type { Metadata } from "next"
import { PageLayout } from "@/components/pageLayout"
import { WebPortfolio } from "./WebPortfolio"

export const metadata: Metadata = {
  title: "Web Development - Katia Hollaar",
  description:
    "Explore Katia Hollaar's web development portfolio featuring responsive, performant, and user-friendly applications built with modern technologies like React, Next.js, and TypeScript.",
}

export default function WebPage() {
  return (
    <PageLayout>
      <WebPortfolio />
    </PageLayout>
  )
}

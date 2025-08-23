import type { Metadata } from "next"
import { PageLayout } from "@/components/pageLayout"
import { PhotographyPortfolio } from "./PhotographyPortfolio"

export const metadata: Metadata = {
  title: "Photography - Katia Hollaar",
  description:
    "Browse Katia Hollaar's photography portfolio featuring stunning landscapes, intimate portraits, and creative compositions that capture life's moments and tell compelling stories.",
}

export default function PhotographyPage() {
  return (
    <PageLayout>
      <PhotographyPortfolio />
    </PageLayout>
  )
}

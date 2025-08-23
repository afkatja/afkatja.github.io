import type { Metadata } from "next"
import Markdown from "react-markdown"
import { PageLayout } from "../../../components/pageLayout"
import { AboutSection } from "./AboutSection"

export const metadata: Metadata = {
  title: "About - Katia Hollaar",
  description:
    "Learn more about Katia Hollaar, a passionate web developer and photographer with over 5 years of experience in creating digital experiences and visual storytelling.",
}

export default function AboutPage() {
  return (
    <PageLayout>
      <AboutSection />
    </PageLayout>
  )
}

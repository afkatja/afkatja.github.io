import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "../styles/style.css"
import Header from "../components/header"
import Footer from "../components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Next.js on GitHub Pages",
  description: "A Next.js web application on GitHub Pages",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-[100dvh]">
          <Header />
          <main className="flex-1 w-11/12 mx-auto">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}

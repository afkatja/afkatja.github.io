import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "../styles/style.css"
import Header from "../components/header"
import Footer from "../components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Digital resume of web developer Katja Hollaar",
  description: "My portfolio of web projects",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`bg-neutral-100 dark:bg-neutral-700 ${inter.className}`}>
        <div className="flex flex-col min-h-[100dvh]">
          <Header />
          <main className="flex-1 w-11/12 mx-auto">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}

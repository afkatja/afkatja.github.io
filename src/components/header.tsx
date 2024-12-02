import Link from "next/link"
import React from "react"
import Image from "next/image"
import Navigation from "./navigation"

const navItems = [
  { name: "about", href: "/about" },
  { name: "skills", href: "/skills" },
  { name: "work", href: "/experience" },
  { name: "projects", href: "/projects" },
  // { name: "education", href: "/education" },
  { name: "contact", href: "/contact" },
]

const header = () => {
  return (
    <header className="site-header top-bar py-5 sticky top-0 bg-white/40">
      <nav className="site-nav top-bar-right mx-auto w-11/12">
        <ul className="flex flex-wrap gap-2 items-center">
          <li className="flex flex-wrap items-center">
            <Link href="/" className="top-bar-title page-link mr-5">
              <Image
                src="katja.gif"
                alt="katja"
                width={50}
                height={50}
                className="rounded-full"
              />
            </Link>
          </li>
          {navItems.map(item => (
            <li key={crypto.randomUUID()}>
              <Navigation item={item} />
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default header

import Link from "next/link"
import React from "react"

const navItems = [
  { name: "about", href: "/about" },
  { name: "skills", href: "/skills" },
  { name: "work", href: "/work" },
  { name: "projects", href: "/projects" },
  { name: "education", href: "/education" },
]

const header = () => {
  return (
    <header className="site-header top-bar py-5">
      <nav className="site-nav top-bar-right mx-auto w-11/12">
        <ul className="vertical medium-horizontal menu flex flex-wrap gap-2 items-center">
          <li>
            <Link href="/" className="top-bar-title page-link mr-5">
              KH
            </Link>
          </li>
          {navItems.map(item => (
            <li key={crypto.randomUUID()} className="active">
              <Link className="page-link" href={item.href}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default header

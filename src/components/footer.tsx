import React from "react"
import Link from "next/link"
import { motion } from "motion/react"
import {
  Camera,
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Mail,
} from "lucide-react"

const links = [
  { name: "email", href: "mailto:", icon: Mail },
  {
    name: "github",
    href: "https://github.com/afkatja",
    icon: Github,
  },
  {
    name: "linkedin",
    href: "https://www.linkedin.com/in/katjahollaar/",
    icon: Linkedin,
  },
  {
    name: "photography",
    href: "https://katjahollaar.myportfolio.com/",
    icon: Camera,
  },
  {
    name: "instagram",
    href: "https://www.instagram.com/katjahollaar",
    icon: Instagram,
  },
  {
    name: "facebook",
    href: "http://facebook.com/katja.hollaar",
    icon: Facebook,
  },
]

const footer = () => {
  return (
    <motion.footer
      className="py-8 px-6 border-t border-border bg-background/80 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
    >
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-muted-foreground">
          © 2025 Katia Hollaar. Designed and developed with ❤️
        </p>
        <ul className="grid md:grid-cols-6 grid-cols-3 gap-3 mx-auto justify-center w-11/12">
          {links.map(({ href, name, icon }) => {
            const Icon = icon
            return (
              <li
                key={crypto.randomUUID()}
                className="flex flex-wrap justify-center"
              >
                <Link href={href} className="flex flex-wrap items-center">
                  <Icon className="mr-2 w-4" /> {name}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </motion.footer>
  )
}

export default footer

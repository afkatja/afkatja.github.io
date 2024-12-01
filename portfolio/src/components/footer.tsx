import Link from "next/link"
import React from "react"
import {
  AiOutlineCamera,
  AiOutlineFacebook,
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineMail,
} from "react-icons/ai"

const links = [
  {
    name: "portfolio",
    href: "https://katjahollaar.myportfolio.com/",
    icon: AiOutlineCamera,
  },
  { name: "email", href: "mailto:", icon: AiOutlineMail },
  {
    name: "github",
    href: "https://github.com/afkatja",
    icon: AiOutlineGithub,
  },
  {
    name: "instagram",
    href: "https://www.instagram.com/katjahollaar",
    icon: AiOutlineInstagram,
  },
  {
    name: "facebook",
    href: "http://facebook.com/katja.hollaar",
    icon: AiOutlineFacebook,
  },
  {
    name: "linkedin",
    href: "https://www.linkedin.com/in/katjahollaar/",
    icon: AiOutlineLinkedin,
  },
]

const footer = () => {
  return (
    <footer className="site-footer w-11/12 mx-auto mt-8 py-5">
      <ul className="grid grid-cols-6 gap-3 mx-auto justify-center">
        {links.map(({ href, name, icon }) => {
          const Icon = icon
          return (
            <li
              key={crypto.randomUUID()}
              className="flex flex-wrap justify-center"
            >
              <Link href={href} className="flex flex-wrap items-center">
                <Icon className="mr-2" /> {name}
              </Link>
            </li>
          )
        })}
      </ul>
    </footer>
  )
}

export default footer

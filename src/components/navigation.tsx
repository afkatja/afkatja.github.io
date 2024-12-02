"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react"

const Navigation = ({ item }: { item: { href: string; name: string } }) => {
  const pathname = usePathname()

  return (
    <Link
      className={`page-link ${
        pathname === item.href ? "font-bold cursor-default" : ""
      }`}
      href={item.href}
    >
      {item.name}
    </Link>
  )
}

export default Navigation

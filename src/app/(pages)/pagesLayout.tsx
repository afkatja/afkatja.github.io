import React from "react"

const PagesLayout = async ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <article className={`prose mx-auto py-5 ${className ?? ""}`}>
      {children}
    </article>
  )
}

export default PagesLayout

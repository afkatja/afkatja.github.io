import React from "react"

const PagesLayout = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <article
      className={`prose dark:prose-invert prose-neutral mx-auto py-5 ${
        className ?? ""
      }`}
    >
      {children}
    </article>
  )
}

export default PagesLayout

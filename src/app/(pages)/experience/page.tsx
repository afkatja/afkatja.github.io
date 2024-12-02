import Link from "next/link"
import React from "react"
import Image from "next/image"

interface IWorkPlace {
  function: string
  icon: string
  href: string
  duration: string
  title: string
  description: string
}

const workPlaces: IWorkPlace[] = [
  {
    title: "Greenwheels",
    icon: "gw.svg",
    href: "//greenwheels.com",
    function: "Front-end developer",
    duration: "June 2018 - December 2022",
    description:
      "Transformed complex web application designs into functional, responsive interfaces using React and TypeScript. Played a key role in modernizing the platform's front-end architecture and developing a cohesive component library that ensured design consistency across multiple platforms.",
  },
  {
    title: "Bolster",
    icon: "bolster.png",
    href: "//bureaubolster.nl",
    function: "Front-end developer",
    duration: "November 2016 - December 2017",
    description:
      "Built a versatile web ecosystem that empowers non-technical organizations. My work focused on creating adaptable design systems that could be easily customized, enabling NGOs and independent journalists to effectively communicate their mission online through flexible, responsive web solutions.",
  },
  {
    title: "Pangaea",
    icon: "pangaea.png",
    href: "//pangaea.nl",
    function: "Front-end developer",
    duration: "December 2017 - June 2018",
    description:
      "Transformed complex healthcare technology concepts into functional web interfaces. My work bridged the gap between sophisticated design principles and user-friendly digital solutions, enabling a pan-European e-health platform that connects patients with essential therapeutic resources.",
  },
  {
    title: "Q42",
    icon: "q42.png",
    href: "//q42.com",
    function: "Software engineer",
    duration: "March 2011 - November 2016",
    description:
      "Bridged the gap between design vision and digital reality, transforming complex visual concepts into performant, responsive web applications. My work focused on creating adaptable, user-friendly interfaces that work seamlessly across different platforms and devices, always pushing the boundaries of front-end development technologies.",
  },
]

const Experience = () => {
  return (
    <article className="prose w-full mx-auto max-w-none py-5">
      <ul className="md:grid grid-cols-4 gap-5 list-none p-0">
        {workPlaces.map(place => (
          <li
            className="rounded-lg shadow-lg p-6 my-5 mx-0 md:m-0 bg-neutral-200 dark:bg-neutral-800"
            key={crypto.randomUUID()}
          >
            <Link
              href={place.href}
              target="_blank"
              className="no-underline  text-neutral-900 dark:text-neutral-100"
            >
              <h3 className="text-xl font-bold mt-4 text-neutral-900 dark:text-neutral-100">
                {place.function}
              </h3>
              {place.icon && (
                <Image
                  src={place.icon}
                  alt={place.title}
                  width={200}
                  height={50}
                  className="object-contain my-3 h-[50px] max-h-[50px] max-w-[200px]"
                />
              )}
              <h4 className="text-l font-bold mt-4  text-neutral-900 dark:text-neutral-100">
                {place.title}
              </h4>
              <p className="font-bold my-3">{place.duration}</p>
              <p>{place.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </article>
  )
}

export default Experience

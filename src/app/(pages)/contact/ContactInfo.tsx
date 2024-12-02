import React from "react"
import Link from "next/link"
import {
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineWhatsApp,
} from "react-icons/ai"
import decryptStrings from "./encryption"

const ContactInfo = () => {
  const email = btoa("afkatja@gmail.com")
  const phoneNumber = btoa("+50687495341")

  return (
    <div className="md:w-1/3 bg-gradient-to-br from-blue-500 to-green-400 p-10 text-neutral-100 dark:from-blue-900 dark:to-green-700">
      <h2 className="text-3xl font-bold mb-6 text-white">Let's Connect</h2>
      <p className="mb-6">
        Interested in collaborating or have a project in mind? I'm always open
        to discussing web development opportunities.
      </p>

      <div className="space-y-4">
        <div className="flex items-center">
          <AiOutlineMail className="mr-4" />
          <Link
            href={`mailto:${atob(email)}`}
            className="no-underline text-white hover:animate-pulse"
          >
            {atob(email)}
          </Link>
        </div>
        <div className="flex items-center">
          <AiOutlinePhone className="mr-2" />
          /
          <AiOutlineWhatsApp className="mx-2" />
          <Link
            href={`tel:${atob(phoneNumber)}`}
            className="no-underline text-white hover:animate-pulse"
          >
            {atob(phoneNumber)}
          </Link>
        </div>
        <div className="flex items-center">
          <AiOutlineLinkedin className="mr-4" />
          <Link
            href="https://www.linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline text-white hover:animate-pulse"
          >
            LinkedIn Profile
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ContactInfo

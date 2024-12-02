import React from "react"
import Link from "next/link"
import {
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineWhatsApp,
} from "react-icons/ai"
import decryptStrings from "./encryption"

const ContactInfo = async () => {
  const email = "afkatja@gmail.com"
  const phoneNumber = "+50687495341"
  const decryptedEmail = await decryptStrings(email)
  const decryptedPhone = await decryptStrings(phoneNumber)

  return (
    <div className="md:w-1/3 bg-gradient-to-br from-blue-500 to-green-400 p-10 text-white">
      <h2 className="text-3xl font-bold mb-6 text-white">Let's Connect</h2>
      <p className="mb-6">
        Interested in collaborating or have a project in mind? I'm always open
        to discussing web development opportunities.
      </p>

      <div className="space-y-4">
        <div className="flex items-center">
          <AiOutlineMail className="mr-4" />
          <Link
            href={`mailto:${decryptedEmail}`}
            className="no-underline text-white hover:animate-pulse"
          >
            {decryptedEmail}
          </Link>
        </div>
        <div className="flex items-center">
          <AiOutlinePhone className="mr-2" />
          /
          <AiOutlineWhatsApp className="mx-2" />
          <Link
            href={`tel:${decryptedPhone}`}
            className="no-underline text-white hover:animate-pulse"
          >
            {decryptedPhone}
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

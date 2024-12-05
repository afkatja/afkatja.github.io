"use client"
import React, { useState } from "react"
import {
  AiOutlineCheckCircle,
  AiOutlineExclamationCircle,
  AiOutlineInfoCircle,
} from "react-icons/ai"

enum Status {
  success = "success",
  info = "info",
  error = "error",
}

const statusObj = {
  [Status.success]: {
    message: "Thanks for your submission!",
    icon: AiOutlineCheckCircle,
    className: "text-success",
  },
  [Status.error]: {
    message: "Oops! There was a problem.",
    icon: AiOutlineExclamationCircle,
    className: "text-error",
  },
  [Status.info]: {
    message: "Submission failed. Please try again.",
    icon: AiOutlineInfoCircle,
    className: "text-info",
  },
}

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [status, setStatus] = useState<null | Status>(null)

  const handleChange: (e: any) => void = e => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit: (e: any) => void = async e => {
    e.preventDefault()
    const form = e.target
    const formspreeEndpoint = "https://formspree.io/f/myzyvezy"

    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        body: new FormData(form),
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        setStatus(Status.success)
        setFormData({ name: "", email: "", message: "" })
      } else {
        const errorData = await response.json()
        setStatus(Status.error)
        console.error(errorData)
      }
    } catch (error) {
      setStatus(Status.info)
      console.error(error)
    }
    setFormData({ name: "", email: "", message: "" })
  }

  const Icon = status ? statusObj[status].icon : statusObj[Status.error].icon

  return (
    <div className="md:w-2/3 p-10">
      <h3 className="text-2xl font-semibold mb-6 text-neutral-900 dark:text-neutral-200">
        Send me a Message
      </h3>
      {!status && (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-neutral-900 dark:text-neutral-200"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-neutral-900 dark:text-neutral-200"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-neutral-900 dark:text-neutral-200"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 hover:animate-pulse transition duration-300 dark:bg-blue-900 dark:hover:bg-blue-950"
            >
              Send Message
            </button>
          </div>
        </form>
      )}
      {status && !!Icon && (
        <p
          className={`mt-4 flex flex-wrap items-center ${statusObj[status].className}`}
        >
          <Icon className={`mr-3`} />
          {statusObj[status].message}
        </p>
      )}
    </div>
  )
}

export default ContactForm

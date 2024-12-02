import React from "react"

import ContactForm from "./ContactForm"
import ContactInfo from "./ContactInfo"
import PagesLayout from "../pagesLayout"

const ContactPage = async () => {
  return (
    <PagesLayout className="w-11/12 max-w-none">
      <div className="py-5 px-4 sm:px-6 lg:px-8">
        <div className="shadow-lg rounded-xl overflow-hidden bg-neutral-200 dark:bg-neutral-600">
          <div className="md:flex">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </div>
    </PagesLayout>
  )
}

export default ContactPage

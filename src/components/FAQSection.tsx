"use client"

import { useState } from "react"
import { ChevronDown, ChevronRight, ChevronUp } from "lucide-react"
import {
  faqData,
  generateFAQSchema,
  type FAQItem,
} from "@/app/(pages)/about/faq"

interface FAQSectionProps {
  title?: string
  subtitle?: string
  limit?: number
}

export function FAQSection({
  title = "Frequently Asked Questions",
  subtitle,
  limit,
}: FAQSectionProps) {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set())
  const displayFAQs = limit ? faqData.slice(0, limit) : faqData

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index)
    } else {
      newOpenItems.add(index)
    }
    setOpenItems(newOpenItems)
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema(displayFAQs)),
        }}
      />
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
          {subtitle && <p className="text-lg text-gray-600">{subtitle}</p>}
        </div>

        <div className="space-y-4">
          {displayFAQs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-200 hover:border-gray-300"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between bg-white hover:bg-gray-50 transition-colors duration-200"
                aria-expanded={openItems.has(index)}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 className="text-lg font-medium text-gray-900 pr-8">
                  {faq.question}
                </h3>
                <div className="shrink-0">
                  {openItems.has(index) ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </div>
              </button>

              <div
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-200 ${
                  openItems.has(index) ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-4 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {limit && limit < faqData.length && (
          <div className="text-center mt-8">
            <p className="text-primary">
              Have more questions?{" "}
              <a
                href="/about"
                className="text-neutral-600 hover:text-neutral-700 font-medium inline-flex items-center group"
              >
                View all FAQs{" "}
                <ChevronRight className="group-hover:translate-x-1 transition-all duration-200" />
              </a>
            </p>
          </div>
        )}
      </section>
    </>
  )
}

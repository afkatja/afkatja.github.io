"use client"

import { motion } from "motion/react"
import { Github, Linkedin, Mail, Globe } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface AuthorBlockProps {
  className?: string
}

export function AuthorBlock({ className = "" }: AuthorBlockProps) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Katia Hollaar",
    url: "https://afkatja.github.io",
    jobTitle: "Full-Stack Web Developer & AI Integration Specialist",
    worksFor: {
      "@type": "Organization",
      name: "Independent Freelance Developer",
    },
    knowsAbout: [
      "React Development",
      "Next.js Applications",
      "TypeScript",
      "AI Integration",
      "RAG (Retrieval-Augmented Generation)",
      "LLM Integration",
      "Full-Stack Development",
      "Web Performance Optimization",
    ],
    sameAs: [
      "https://github.com/afkatja",
      "https://linkedin.com/in/katiahollaar",
    ],
    email: "katja@hollaar.com",
  }

  const concreteOutcomes = [
    {
      title: "End-to-End Booking System",
      description:
        "Built complete booking platform with Stripe payments, Supabase backend, and real-time availability management",
    },
    {
      title: "AI Assistant with RAG",
      description:
        "Developed intelligent assistant using retrieval-augmented generation over CMS data for accurate, contextual responses",
    },
    {
      title: "Trading Platform with AI Insights",
      description:
        "Created financial platform integrating AI-powered market analysis and automated trading signals",
    },
    {
      title: "Travel Planning Assistant",
      description:
        "Launched AI-driven travel platform with personalized recommendations and booking integrations",
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/afkatja",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/katiahollaar",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:katja@hollaar.com",
      label: "Email",
    },
    {
      icon: Globe,
      href: "https://afkatja.github.io",
      label: "Portfolio",
    },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className={`mt-12 bg-linear-to-br from-primary/5 to-accent/5${className}`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="p-8">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Author Info */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold text-lg">KH</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">
                      Authored by Katia Hollaar
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Full-Stack Developer & AI Integration Specialist
                    </p>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Costa Rica-based independent developer with 15+ years building
                  web applications that combine modern React/Next.js with AI
                  integrations. Specializing in RAG systems, LLM integration,
                  and end-to-end product development.
                </p>

                {/* Social Links */}
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-background rounded-lg border border-border hover:border-primary/50 transition-colors"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index }}
                    >
                      <social.icon size={16} />
                      <span className="text-sm font-medium">
                        {social.label}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Concrete Outcomes */}
              <div className="flex-1">
                <h4 className="font-semibold mb-4 text-primary">
                  Recent Project Outcomes
                </h4>
                <div className="space-y-3">
                  {concreteOutcomes.map((outcome, index) => (
                    <motion.div
                      key={outcome.title}
                      className="p-3 bg-background/50 rounded-lg border border-border/50"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
                      viewport={{ once: true }}
                    >
                      <h5 className="font-medium text-sm mb-1">
                        {outcome.title}
                      </h5>
                      <p className="text-xs text-muted-foreground">
                        {outcome.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  )
}

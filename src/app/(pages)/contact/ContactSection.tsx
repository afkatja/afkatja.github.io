"use client"

import { motion, useInView } from "motion/react"
import { useRef } from "react"
import { Github, Linkedin, Instagram, Twitter, Facebook } from "lucide-react"
import ContactForm from "./ContactForm"
import ContactInfo from "./ContactInfo"

export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const socialLinks = [
    { icon: Github, href: "https://github.com/afkatja", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/katjahollaar/",
      label: "LinkedIn",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/katjahollaar",
      label: "Instagram",
    },
    {
      icon: Facebook,
      href: "http://facebook.com/katja.hollaar",
      label: "Facebook",
    },
  ]

  return (
    <motion.section
      ref={ref}
      className="py-20 px-6 bg-gradient-to-b from-background to-accent/10"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm always interested in new opportunities and collaborations. Let's
            discuss your next project!
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-8"
        >
          <div>
            <h3 className="text-2xl font-bold mb-6">Say hello</h3>
            <p className="text-muted-foreground mb-8">
              Whether you need a new website, have a photography project in
              mind, or just want to say hello, I'd love to hear from you.
            </p>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <ContactInfo isInView={isInView} />

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3 className="font-semibold mb-4">Let's connect</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="p-3 bg-card border border-border rounded-lg hover:border-primary/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                    target="_blank"
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <ContactForm isInView={isInView} />
        </div>
      </div>
    </motion.section>
  )
}

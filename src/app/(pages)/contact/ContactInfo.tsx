import React from "react"
import { motion } from "motion/react"
import { Mail, MapPin, Phone } from "lucide-react"

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "afkatja@gmail.com",
      href: "mailto:afkatja@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+506 87495341",
      href: "tel:+50687495341",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Puerto Jiménez, Costa Rica",
      href: "#",
    },
  ]

const ContactInfo = ({isInView}: {isInView: boolean}) => {

  return (
    <div className="space-y-4">
      {contactInfo.map((info, index) => (
        <motion.a
          key={index}
          href={info.href}
          className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300 group"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
          whileHover={{ scale: 1.02, x: 10 }}
        >
          <div className="p-3 bg-primary/10 text-primary rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
            <info.icon size={20} />
          </div>
          <div>
            <h4 className="font-semibold">{info.label}</h4>
            <p className="text-muted-foreground">{info.value}</p>
          </div>
        </motion.a>
      ))}
    </div>
  )
}

export default ContactInfo

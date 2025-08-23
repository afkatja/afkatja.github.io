"use client"

import { motion, useInView } from "motion/react"
import { useRef } from "react"
import { Code2, Camera, Palette, Zap, Award, Users } from "lucide-react"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skills = [
    { name: "React/Next.js", level: 95, icon: Code2 },
    { name: "TypeScript", level: 90, icon: Code2 },
    { name: "Portrait Photography", level: 95, icon: Camera },
    { name: "Landscape Photography", level: 85, icon: Camera },
    { name: "UI/UX Design", level: 80, icon: Palette },
    { name: "Creative Direction", level: 88, icon: Zap },
  ]

  const achievements = [
    { year: "2024", title: "Lead Developer", company: "Tech Innovation Co." },
    {
      year: "2023",
      title: "Photography Exhibition",
      company: "Gallery Modern",
    },
    { year: "2022", title: "Full Stack Developer", company: "Digital Agency" },
    {
      year: "2021",
      title: "Photography Award",
      company: "Creative Arts Foundation",
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
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm passionate about crafting beautiful digital experiences and
            capturing life's moments through photography. With over 5 years of
            experience in web development and a keen eye for visual
            storytelling.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Zap className="text-primary" />
              Skills & Expertise
            </h3>

            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <skill.icon size={20} className="text-primary" />
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {skill.level}%
                    </span>
                  </div>

                  <div className="h-3 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-primary to-primary/60 rounded-full"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{
                        duration: 1,
                        delay: 0.5 + index * 0.1,
                        ease: "easeOut",
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Award className="text-primary" />
              Experience & Achievements
            </h3>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30" />

              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="relative flex items-center gap-6 pb-8"
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                >
                  {/* Timeline Dot */}
                  <motion.div
                    className="relative z-10 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                  />

                  <motion.div
                    className="flex-1"
                    whileHover={{ scale: 1.02, x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="bg-card border border-border rounded-lg p-4 shadow-sm">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-primary">
                          {achievement.title}
                        </h4>
                        <span className="text-sm text-muted-foreground bg-secondary px-2 py-1 rounded">
                          {achievement.year}
                        </span>
                      </div>
                      <p className="text-muted-foreground">
                        {achievement.company}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { icon: Code2, number: "50+", label: "Projects Completed" },
            { icon: Camera, number: "1000+", label: "Photos Captured" },
            { icon: Users, number: "25+", label: "Happy Clients" },
            { icon: Award, number: "3", label: "Awards Won" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-card border border-border rounded-xl shadow-sm"
              whileHover={{ y: -5, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <stat.icon size={32} className="mx-auto mb-4 text-primary" />
              <motion.div
                className="text-3xl font-bold text-primary mb-2"
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
              >
                {stat.number}
              </motion.div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}

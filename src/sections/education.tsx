"use client"

import { motion } from "framer-motion"
import { GraduationCap, Award, BookOpen, Trophy } from "lucide-react"
import SectionHeading from "@/components/ui/section-heading"
import GlowCard from "@/components/ui/glow-card"
import { EDUCATION, CERTIFICATES } from "@/constants"
import { cn } from "@/lib/utils"

export default function Education() {
  return (
    <section id="education" className="section-padding relative">
      <div className="container mx-auto px-4">
        <SectionHeading title="Education" subtitle="My academic background and certifications" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 mt-8 sm:mt-12">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-bold text-foreground">Education</h3>
            </div>

            <div className="space-y-6">
              {EDUCATION.map((edu, index) => (
                <motion.div
                  key={edu.institution}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                >
                  <GlowCard className="p-6">
                    <h4 className="text-base font-bold text-foreground">{edu.institution}</h4>
                    <p className="text-primary font-medium">{edu.degree}</p>
                    <p className="text-sm text-muted mt-1">{edu.duration}</p>
                    <p className="text-sm text-muted mt-2">{edu.description}</p>

                    {edu.achievements && edu.achievements.length > 0 && (
                      <ul className="mt-4 space-y-2">
                        {edu.achievements.map((achievement) => (
                          <li key={achievement} className="flex items-center gap-2 text-sm text-muted">
                            <Trophy className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    )}
                  </GlowCard>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-8">
              <Award className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-bold text-foreground">Certifications</h3>
            </div>

            <div className="space-y-6">
              {CERTIFICATES.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                >
                  <GlowCard className="group relative flex items-start gap-4 p-5">
                    <div
                      className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5"
                    >
                      <Award className="w-6 h-6 text-primary" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-3">
                        <h4 className="font-semibold text-foreground leading-snug">{cert.name}</h4>
                        <span className="text-xs text-muted bg-foreground/5 rounded-full px-2.5 py-1 flex-shrink-0 whitespace-nowrap">
                          {cert.year}
                        </span>
                      </div>
                      <p className="text-sm text-primary mt-1">{cert.issuer}</p>

                      <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-300 ease-in-out">
                        <div className="overflow-hidden">
                          <p className="text-sm text-muted mt-3">
                            {cert.description}
                            <span className="mt-2 block text-xs font-medium text-primary">
                              Certifications
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </GlowCard>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

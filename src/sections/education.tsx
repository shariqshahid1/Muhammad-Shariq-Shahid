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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">Education</h3>
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
                    <h4 className="text-lg font-bold text-foreground">{edu.institution}</h4>
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
              <h3 className="text-2xl font-bold text-foreground">Certifications</h3>
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
                  <GlowCard className="p-6">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-secondary rounded-full" />

                    <h4 className="font-semibold text-foreground">{cert.name}</h4>
                    <p className="text-sm text-primary">{cert.issuer}</p>
                    <span className="text-xs text-muted bg-foreground/5 rounded-full px-2 py-0.5 inline-block mt-2">
                      {cert.year}
                    </span>
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

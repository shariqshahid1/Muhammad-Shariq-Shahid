"use client"

import { motion } from "framer-motion"
import SectionHeading from "@/components/ui/section-heading"
import { TECH_STACK } from "@/constants"
import { cn } from "@/lib/utils"
import { IconContext } from "react-icons"

const getIconComponent = (iconName: string) => {
  try {
    const iconModule = require(`react-icons/si`)
    const IconComponent = iconModule[`Si${iconName.charAt(0).toUpperCase() + iconName.slice(1)}`]
    if (IconComponent) return IconComponent
  } catch {}
  try {
    const faModule = require(`react-icons/fa6`)
    const IconComponent = faModule[`Fa${iconName.charAt(0).toUpperCase() + iconName.slice(1)}`]
    if (IconComponent) return IconComponent
  } catch {}
  return null
}

export default function TechStack() {
  return (
    <section id="tech-stack" className="section-padding relative">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Tech Stack"
          subtitle="Technologies I work with daily"
        />
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 sm:gap-3 md:gap-4">
          {TECH_STACK.map((tech, index) => {
            const IconComponent = getIconComponent(tech.icon)
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className={cn(
                  "bg-card border border-border rounded-xl p-3 sm:p-4 md:p-6 flex flex-col items-center justify-center gap-3",
                  "hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
                )}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: `${tech.color}15` }}
                >
                  {IconComponent ? (
                    <IconComponent className="w-6 h-6" style={{ color: tech.color }} />
                  ) : (
                    <span className="text-xl font-bold" style={{ color: tech.color }}>
                      {tech.name.charAt(0).toUpperCase()}
                    </span>
                  )}
                </div>
                <span className="text-sm font-medium text-foreground text-center">
                  {tech.name}
                </span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
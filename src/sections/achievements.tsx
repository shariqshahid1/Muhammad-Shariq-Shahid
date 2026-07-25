"use client"

import { motion } from "framer-motion"
import { Calendar, FolderOpen, Users, Cpu, Code2, Star } from "lucide-react"
import SectionHeading from "@/components/ui/section-heading"
import { useAnimatedCounter } from "@/hooks/use-animated-counter"
import { cn } from "@/lib/utils"

const stats = [
  { label: "Years Experience", value: 2, suffix: "+", Icon: Calendar, color: "from-blue-500 to-blue-600" },
  { label: "Projects", value: 50, suffix: "+", Icon: FolderOpen, color: "from-purple-500 to-purple-600" },
  { label: "Clients", value: 0, suffix: "", Icon: Users, color: "from-cyan-500 to-cyan-600" },
  { label: "Technologies", value: 25, suffix: "+", Icon: Cpu, color: "from-green-500 to-green-600" },
  { label: "GitHub Stars", value: 1200, suffix: "+", Icon: Star, color: "from-orange-500 to-orange-600" },
  { label: "Lines of Code", value: 500, suffix: "K+", Icon: Code2, color: "from-pink-500 to-pink-600" },
]

export default function Achievements() {
  return (
    <section id="achievements" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5" />
      <div className="container mx-auto px-4 relative">
        <SectionHeading
          title="Achievements"
          subtitle="Numbers that speak for themselves"
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6">
          {stats.map((stat, index) => {
            const { count, ref } = useAnimatedCounter(stat.value, 2000)
            return (
              <motion.div
                key={stat.label}
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={cn(
                  "bg-card border border-border rounded-2xl p-3 sm:p-4 md:p-6 text-center"
                )}
              >
                <div
                  className={cn(
                    "w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br flex items-center justify-center text-white mx-auto mb-2 sm:mb-3",
                    stat.color
                  )}
                >
                  <stat.Icon className="w-6 h-6" />
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
                  {count}
                  {stat.suffix}
                </div>
                <div className="text-sm text-muted">{stat.label}</div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

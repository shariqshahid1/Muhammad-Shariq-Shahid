"use client"

import { motion } from "framer-motion"
import SectionHeading from "@/components/ui/section-heading"
import GlowCard from "@/components/ui/glow-card"
import { SERVICES } from "@/constants"
import { Code2, ShoppingCart, Server, Palette, Cloud, Brain } from "lucide-react"
import { cn } from "@/lib/utils"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "code": Code2,
  "shopping-cart": ShoppingCart,
  "server": Server,
  "palette": Palette,
  "cloud": Cloud,
  "brain": Brain,
}

export default function Services() {
  return (
    <section id="services" className="section-padding relative">
      <div className="container mx-auto px-4">
        <SectionHeading title="Services" subtitle="What I can do for you" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon] || Code2
            
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GlowCard
                  className={cn(
                    "p-6 h-full transition-all duration-300",
                    "hover:border-primary/30"
                  )}
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="bg-foreground/5 text-foreground/70 text-xs rounded-full px-3 py-1"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </GlowCard>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { ExternalLink, ArrowRight } from "lucide-react"
import { SiGithub } from "react-icons/si"
import SectionHeading from "@/components/ui/section-heading"
import GlowCard from "@/components/ui/glow-card"
import { PROJECTS } from "@/constants"
import { cn } from "@/lib/utils"

const categoryMap: Record<string, string> = {
  All: "all",
  Frontend: "frontend",
  Backend: "backend",
  "Full Stack": "fullstack",
  AI: "ai",
}

const tabs = Object.keys(categoryMap)

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All")

  const filteredProjects =
    activeFilter === "All"
      ? PROJECTS
      : PROJECTS.filter(
          (project) =>
            project.category === categoryMap[activeFilter]
        )

  const getInitials = (title: string) =>
    title
      .split(" ")
      .map((w) => w[0])
      .join("")
      .toUpperCase()

  return (
    <section id="projects" className="section-padding relative">
      <SectionHeading
        title="Featured Projects"
        subtitle="A selection of my recent work"
      />

      <div className="flex flex-wrap gap-2 mb-10 justify-center">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveFilter(tab)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer",
              activeFilter === tab
                ? "bg-primary text-white"
                : "bg-card text-muted"
            )}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl overflow-hidden bg-card border border-border group"
            >
              <div className="relative h-56 overflow-hidden bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl font-bold text-foreground/10 select-none group-hover:scale-110 transition-transform duration-300">
                    {getInitials(project.title)}
                  </span>
                </div>
                <div className="absolute inset-0 bg-primary/80 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-white text-primary flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-white text-primary flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <SiGithub size={20} />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <span className="text-xs font-medium text-primary bg-primary/10 rounded-full px-3 py-1 mb-3 inline-block capitalize">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-foreground/5 text-foreground/60 rounded-md px-2 py-1"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-primary text-sm font-medium mt-4 hover:gap-2 transition-all"
                >
                  View Details <ArrowRight size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  )
}

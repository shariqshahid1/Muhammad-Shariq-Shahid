"use client"

import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { useRef, useState } from "react"
import { ExternalLink, ArrowRight } from "lucide-react"
import { SiGithub } from "react-icons/si"
import SectionHeading from "@/components/ui/section-heading"
import { PROJECTS } from "@/constants"
import { cn } from "@/lib/utils"
import { Project } from "@/types"

const categoryMap: Record<string, string> = {
  All: "all",
  Frontend: "frontend",
  Backend: "backend",
  "Full Stack": "fullstack",
  AI: "ai",
}

const tabs = Object.keys(categoryMap)

const getInitials = (title: string) =>
  title
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [70 + (index % 3) * 30, 0])
  const opacity = useTransform(scrollYProgress, [0, 0.55, 1], [0, 1, 1])
  const scale = useTransform(scrollYProgress, [0, 1], [0.92, 1])

  return (
    <motion.div
      ref={ref}
      layout
      style={{ y, opacity, scale }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      transition={{ type: "spring", stiffness: 120, damping: 24 }}
      className="rounded-2xl overflow-hidden bg-card border border-border group"
    >
      <div className="relative h-40 sm:h-56 overflow-hidden bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-6xl font-bold text-foreground/10 select-none">
            {getInitials(project.title)}
          </span>
        </div>
        <div className="absolute inset-0 bg-primary/80 flex items-center justify-center gap-4">
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-white text-primary flex items-center justify-center"
          >
            <ExternalLink size={20} />
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-white text-primary flex items-center justify-center"
          >
            <SiGithub size={20} />
          </a>
        </div>
      </div>

      <div className="p-4 sm:p-6">
        <span className="text-xs font-medium text-primary bg-primary/10 rounded-full px-3 py-1 mb-3 inline-block capitalize">
          {project.category}
        </span>
        <h3 className="text-lg font-bold text-foreground mb-2">
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
          className="flex items-center gap-1 text-primary text-sm font-medium mt-4"
        >
          View Details <ArrowRight size={14} />
        </a>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All")

  const filteredProjects =
    activeFilter === "All"
      ? PROJECTS
      : PROJECTS.filter(
          (project) => project.category === categoryMap[activeFilter]
        )

  return (
    <section id="projects" className="section-padding relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
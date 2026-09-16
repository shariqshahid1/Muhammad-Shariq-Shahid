"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import SectionHeading from "@/components/ui/section-heading";
import GlowCard from "@/components/ui/glow-card";
import { SKILLS } from "@/constants";
import { cn } from "@/lib/utils";
import { Code2, Server, Database, Cloud, Brain, Wrench, Globe, Layers } from "lucide-react";

function getSkillIcon(iconName: string): React.ComponentType<{ className?: string; style?: React.CSSProperties }> | null {
  const map: Record<string, string> = {
    react: "SiReact",
    nextjs: "SiNextdotjs",
    typescript: "SiTypescript",
    vue: "SiVuedotjs",
    tailwind: "SiTailwindcss",
    html5: "SiHtml5",
    nodejs: "SiNodedotjs",
    express: "SiExpress",
    postgresql: "SiPostgresql",
    mongodb: "SiMongodb",
    redis: "SiRedis",
    docker: "SiDocker",
    git: "SiGit",
    openai: "SiOpenai",
    gemini: "SiGooglegemini",
    claude: "SiClaude",
  };
  try {
    if (map[iconName]) {
      const siModule = require("react-icons/si");
      const Component = siModule[map[iconName]];
      if (Component) return Component;
    }
  } catch {}
  try {
    const faModule = require("react-icons/fa6");
    const Component = faModule[`Fa${iconName.charAt(0).toUpperCase() + iconName.slice(1)}`];
    if (Component) return Component;
  } catch {}
  return null;
}

const skillColors: Record<string, string> = {
  react: "#61DAFB",
  nextjs: "#000000",
  typescript: "#3178C6",
  vue: "#42B883",
  tailwind: "#06B6D4",
  html5: "#E34F26",
  css3: "#663399",
  nodejs: "#339933",
  express: "#000000",
  postgresql: "#4169E1",
  mongodb: "#47A248",
  redis: "#DC382D",
  docker: "#2496ED",
  aws: "#FF9900",
  git: "#F05032",
  openai: "#000000",
  gemini: "#4285F4",
  claude: "#D97757",
};

const categories = [
  "All",
  "Frontend",
  "Backend",
  "Database",
  "DevOps",
  "AI",
  "Languages",
] as const;

type Category = (typeof categories)[number];

const categoryMap: Record<Category, string | null> = {
  All: null,
  Frontend: "frontend",
  Backend: "backend",
  Database: "database",
  DevOps: "devops",
  AI: "ai",
  Languages: "languages",
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filteredSkills =
    activeCategory === "All"
      ? SKILLS
      : SKILLS.filter((s) => s.category === categoryMap[activeCategory]);

  return (
    <section id="skills" className="section-padding relative">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="My Skills"
          subtitle="Technologies and tools I use to bring ideas to life"
        />

        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 border",
                activeCategory === category
                  ? "bg-primary text-white border-primary shadow-lg shadow-primary/25"
                  : "bg-card text-muted border-border hover:text-foreground hover:border-primary/40 hover:bg-card-hover"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-5">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => {
              const SkillIcon = getSkillIcon(skill.icon);
              const color = skillColors[skill.icon] ?? "#2563eb";
              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <GlowCard className="group h-full p-4 sm:p-5 flex flex-col items-center text-center">
                    <div
                      className={cn(
                        "w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110",
                        color === "#000000" ? "bg-white dark:bg-white" : ""
                      )}
                      style={
                        color === "#000000"
                          ? { boxShadow: "0 8px 24px rgba(0,0,0,0.12)" }
                          : { backgroundColor: `${color}15` }
                      }
                    >
                      {SkillIcon ? (
                        <SkillIcon className="w-7 h-7" style={{ color }} />
                      ) : (
                        <span className="text-xl font-bold text-primary">
                          {skill.name.charAt(0).toUpperCase()}
                        </span>
                      )}
                    </div>

                    <span className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {skill.name}
                    </span>

                    <div className="w-full mt-4">
                      <div className="flex items-center justify-between text-xs mb-1.5">
                        <span className="text-muted">Proficiency</span>
                        <span className="font-semibold text-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 bg-foreground/10 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full rounded-full"
                          style={{
                            background: `linear-gradient(90deg, var(--color-primary), var(--color-secondary))`,
                          }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                  </GlowCard>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

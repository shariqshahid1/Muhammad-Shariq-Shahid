"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import SectionHeading from "@/components/ui/section-heading";
import GlowCard from "@/components/ui/glow-card";
import { SKILLS } from "@/constants";
import { cn } from "@/lib/utils";
import { Code2, Server, Database, Cloud, Brain, Wrench, Globe, Layers } from "lucide-react";

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
                "rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200",
                activeCategory === category
                  ? "bg-primary text-white"
                  : "bg-card text-muted hover:text-foreground"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-card border border-border rounded-xl p-5 hover:border-primary/30 transition-colors duration-200">
                  <span className="font-semibold text-foreground">
                    {skill.name}
                  </span>
                  <div className="h-2 bg-foreground/10 rounded-full overflow-hidden mt-3">
                    <motion.div
                      className="bg-gradient-to-r from-primary to-secondary rounded-full h-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1,
                        ease: "easeOut",
                        delay: index * 0.1,
                      }}
                    />
                  </div>
                  <span className="text-xs text-muted text-right mt-1 block">
                    {skill.level}%
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

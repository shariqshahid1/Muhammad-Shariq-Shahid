"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";
import { GitBranch, Star, GitFork, ExternalLink } from "lucide-react";
import SectionHeading from "@/components/ui/section-heading";
import GlowCard from "@/components/ui/glow-card";

const repos = [
  { name: "nexgen-commerce", description: "Full-stack e-commerce platform with AI recommendations", language: "TypeScript", langColor: "#3178C6", stars: 342, forks: 48, updated: "2 days ago" },
  { name: "react-component-library", description: "A collection of reusable React components", language: "JavaScript", langColor: "#F7DF1E", stars: 256, forks: 42, updated: "5 days ago" },
  { name: "nextjs-starter-kit", description: "Production-ready Next.js boilerplate", language: "TypeScript", langColor: "#3178C6", stars: 189, forks: 31, updated: "1 week ago" },
  { name: "ai-content-api", description: "AI-powered content generation API", language: "Python", langColor: "#3776AB", stars: 421, forks: 67, updated: "3 days ago" },
  { name: "devops-terraform", description: "Infrastructure as Code for cloud deployments", language: "HCL", langColor: "#844FBA", stars: 98, forks: 15, updated: "2 weeks ago" },
  { name: "portfolio-generator", description: "Build beautiful portfolios in minutes", language: "TypeScript", langColor: "#3178C6", stars: 567, forks: 89, updated: "1 day ago" },
];

export default function GitHubActivity() {
  const contributions = useMemo(() => {
    return Array.from({ length: 364 }, () => Math.floor(Math.random() * 5));
  }, []);

  const getLevelColor = (level: number) => {
    switch (level) {
      case 0: return "bg-foreground/5";
      case 1: return "bg-primary/20";
      case 2: return "bg-primary/40";
      case 3: return "bg-primary/60";
      case 4: return "bg-primary/80";
      default: return "bg-foreground/5";
    }
  };

  return (
    <section id="github" className="section-padding relative">
      <div className="container mx-auto px-4">
        <SectionHeading title="GitHub Activity" subtitle="Open source contributions and repositories" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <GlowCard>
            <div className="flex items-center gap-2">
              <GitBranch className="w-5 h-5 text-primary" />
              <span className="font-semibold text-foreground">Contribution Graph</span>
            </div>
            <div className="grid grid-rows-7 grid-flow-col gap-1 mt-4">
              {contributions.map((level, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-sm ${getLevelColor(level)}`}
                />
              ))}
            </div>
            <p className="text-xs text-muted mt-3">Last 52 weeks of contributions</p>
          </GlowCard>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo, index) => (
            <motion.div
              key={repo.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <GlowCard className="h-full">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-foreground">{repo.name}</span>
                  <ExternalLink className="text-muted text-xs" />
                </div>
                <p className="text-sm text-muted mt-2 mb-4">{repo.description}</p>
                <div className="flex items-center gap-4 text-xs text-muted mt-auto">
                  <div className="flex items-center gap-1.5">
                    <span
                      className="w-3 h-3 rounded-full inline-block"
                      style={{ backgroundColor: repo.langColor }}
                    />
                    <span>{repo.language}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star size={14} />
                    <span>{repo.stars}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <GitFork size={14} />
                    <span>{repo.forks}</span>
                  </div>
                  <span className="ml-auto">Updated {repo.updated}</span>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

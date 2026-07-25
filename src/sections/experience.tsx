"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import SectionHeading from "@/components/ui/section-heading";
import { EXPERIENCES } from "@/constants";
import { cn } from "@/lib/utils";

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative">
      <SectionHeading title="Experience" subtitle="My professional journey" />

      <div className="relative max-w-4xl mx-auto">
        <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-border" />

        {EXPERIENCES.map((experience, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: isEven ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={cn(
                "relative mb-12 last:mb-0 pl-10 sm:pl-14",
                "md:pl-0",
                isEven
                  ? "md:w-1/2 md:pr-12 md:text-right"
                  : "md:w-1/2 md:pl-12 md:ml-auto"
              )}
            >
              <div className="absolute left-6 md:left-1/2 top-6 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />

              <div className="bg-card border border-border rounded-2xl p-6">
                <h3 className="text-lg font-bold text-foreground">
                  {experience.company}
                </h3>
                <p className="text-primary font-medium">{experience.role}</p>

                <div
                  className={cn(
                    "flex items-center gap-1 text-sm text-muted",
                    !isEven && "md:justify-end md:flex-row-reverse"
                  )}
                >
                  <Calendar size={14} />
                  <span>{experience.duration}</span>
                </div>

                <p className="text-sm text-muted leading-relaxed mt-3">
                  {experience.description}
                </p>

                <div
                  className={cn(
                    "flex flex-wrap gap-2 mt-3",
                    !isEven && "md:justify-end"
                  )}
                >
                  {experience.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-primary/10 text-primary rounded-full px-2 py-1"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

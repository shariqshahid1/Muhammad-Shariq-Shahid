"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeading({ title, subtitle, centered = true }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`mb-10 md:mb-16 ${centered ? "text-center" : ""}`}
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
        {title.split(" ").map((word, i) => {
          const isLast = i === title.split(" ").length - 1;
          return (
            <span key={i}>
              {isLast ? (
                <span className="gradient-text">{word}</span>
              ) : (
                <span className="text-foreground">{word}</span>
              )}{" "}
            </span>
          );
        })}
      </h2>
      {subtitle && (
        <p className="text-muted text-lg md:text-xl max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="mt-6 flex justify-center">
        <div className="h-1 w-20 rounded-full bg-gradient-to-r from-primary via-secondary to-accent" />
      </div>
    </motion.div>
  );
}

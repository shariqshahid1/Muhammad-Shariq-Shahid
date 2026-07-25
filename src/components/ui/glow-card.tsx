"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function GlowCard({ children, className, hover = true }: GlowCardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -5, scale: 1.02 } : undefined}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={cn(
        "relative rounded-2xl bg-card border border-border p-6 transition-all duration-300",
        hover && "hover:border-primary/30 glow-card",
        className
      )}
    >
      {children}
    </motion.div>
  );
}

"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
}

export default function MagneticButton({
  children,
  className,
  onClick,
  variant = "primary",
  size = "md",
  href,
}: MagneticButtonProps) {
  const variants = {
    primary: "bg-primary hover:bg-primary-light text-white shadow-lg shadow-primary/25",
    secondary: "bg-secondary/10 text-secondary border border-secondary/30 hover:bg-secondary/20",
    ghost: "bg-transparent text-muted hover:text-foreground hover:bg-foreground/5",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      href={href}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-300 cursor-pointer",
        variants[variant],
        sizes[size],
        className
      )}
    >
      {children}
    </Component>
  );
}

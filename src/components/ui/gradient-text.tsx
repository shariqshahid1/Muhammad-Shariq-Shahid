"use client";

import { cn } from "@/lib/utils";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "accent" | "full";
}

export default function GradientText({ children, className, variant = "primary" }: GradientTextProps) {
  const gradients = {
    primary: "text-gradient-primary",
    accent: "text-gradient-accent",
    full: "gradient-text",
  };

  return (
    <span className={cn(gradients[variant], className)}>
      {children}
    </span>
  );
}

"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  Download,
  Briefcase,
  FolderOpen,
} from "lucide-react";
import { SiGithub, SiX } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import dynamic from "next/dynamic";
import MagneticButton from "@/components/ui/magnetic-button";
import { SITE_CONFIG } from "@/constants";
import { useState, useEffect } from "react";

const HeroBackground = dynamic(
  () => import("@/components/three/hero-background"),
  { ssr: false }
);

const ROLES = [
  "Full Stack Web Developer",
  "Frontend Developer",
  "Backend Developer",
  "Database Developer",
  "UI/UX Designer",
];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const currentRole = ROLES[roleIdx];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setCharIdx((prev) => prev + 1);
        if (charIdx + 1 === currentRole.length) {
          setIsPaused(true);
          setTimeout(() => {
            setIsDeleting(true);
            setIsPaused(false);
          }, 2000);
        }
      } else {
        setCharIdx((prev) => prev - 1);
        if (charIdx === 0) {
          setIsDeleting(false);
          setRoleIdx((prev) => (prev + 1) % ROLES.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [charIdx, isDeleting, roleIdx, isPaused]);

  const currentRole = ROLES[roleIdx];
  const displayedText = currentRole.slice(0, charIdx);
  const isTypingDone = charIdx === currentRole.length && !isDeleting;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <HeroBackground />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background z-[1]" />
      <div className="absolute inset-0 grid-bg z-[2]" />

      <div className="absolute inset-0 z-[1] pointer-events-none">
        <div className="w-96 h-96 bg-primary/20 rounded-full blur-3xl absolute -top-48 -left-48 animate-float" />
        <div
          className="w-72 h-72 bg-secondary/20 rounded-full blur-3xl absolute bottom-20 -right-36 animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="w-64 h-64 bg-accent/20 rounded-full blur-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-float"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 text-sm mb-8">
            Welcome to my portfolio
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight"
        >
          <span className="text-foreground">Hi, I&apos;m</span>
          <br />
          <span className="gradient-text">Muhammad Shariq Shahid Ismail</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-xl md:text-2xl text-muted mt-6"
        >
          <span>{displayedText}</span>
          <span
            className={`inline-block ml-0.5 font-mono ${
              isTypingDone ? "animate-blink" : ""
            }`}
          >
            |
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-lg text-muted max-w-xl mx-auto mt-6"
        >
          Crafting high-performance web applications with modern technologies.
          I turn complex problems into elegant, scalable solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-10"
        >
          <MagneticButton variant="primary" href="#projects">
            <FolderOpen className="w-4 h-4" />
            View Projects
          </MagneticButton>
          <MagneticButton variant="secondary">
            <Download className="w-4 h-4" />
            Download Resume
          </MagneticButton>
          <MagneticButton variant="primary" href="#contact">
            <Briefcase className="w-4 h-4" />
            Hire Me
          </MagneticButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex gap-4 justify-center mt-10"
        >
          {[
            { Icon: SiGithub, label: "GitHub", href: SITE_CONFIG.github },
            { Icon: FaLinkedinIn, label: "LinkedIn", href: SITE_CONFIG.linkedin },
            { Icon: SiX, label: "Twitter", href: SITE_CONFIG.twitter },
          ].map(({ Icon, label, href }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted hover:bg-primary hover:text-white hover:border-primary transition-all"
              aria-label={label}
            >
              <Icon className="w-4 h-4" />
            </motion.a>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted"
      >
        <span className="text-xs">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}

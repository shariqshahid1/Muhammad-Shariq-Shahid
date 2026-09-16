"use client";

import { motion } from "framer-motion";
import {
  Download,
  Briefcase,
  FolderOpen,
} from "lucide-react";
import { SiGithub, SiX } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import MagneticButton from "@/components/ui/magnetic-button";
import { SITE_CONFIG } from "@/constants";
import { useState, useEffect } from "react";

const ROLES = [
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Web Developer",
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
          }, 3000);
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
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5" />
      <div
        className="absolute inset-0 z-0 grid-bg opacity-60"
        style={{
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
        }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-background/30 to-background" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 text-sm mb-8">
            Let&apos;s build something great together
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight"
        >
          <span className="text-foreground">Hi, I&apos;m </span>
          <span className="gradient-text">Muhammad Shariq Shahid</span>
        </motion.div>

        <div className="mt-6 flex items-center justify-center gap-2 text-lg sm:text-2xl md:text-3xl">
          <span className="text-muted">I am</span>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="relative inline-flex items-center font-bold text-foreground"
          >
            <span className="invisible whitespace-nowrap">Full Stack Web Developer</span>
            <span className="absolute left-0 top-0 whitespace-nowrap">
              <span className="gradient-text">{displayedText}</span>
              <span
                className={`inline-block ml-0.5 font-mono ${
                  isTypingDone ? "animate-blink" : ""
                }`}
              >
                |
              </span>
            </span>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-base sm:text-lg text-muted max-w-xl mx-auto mt-6"
        >
          Crafting high-performance web applications with modern technologies.
          I turn complex problems into elegant, scalable solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="flex flex-col sm:flex-row gap-3 justify-center mt-8 sm:mt-10 px-2"
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
    </section>
  );
}

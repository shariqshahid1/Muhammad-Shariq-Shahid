"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Code2, Calendar, Award, Users, Zap } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import SectionHeading from "@/components/ui/section-heading";
import GlowCard from "@/components/ui/glow-card";
import { useAnimatedCounter } from "@/hooks/use-animated-counter";

const timeline = [
  {
    role: "Full Stack Web Developer",
    company: "K&H TECH SOL",
    duration: "2025-Present",
  },
  {
    role: "Full Stack Web Developer",
    company: "Freelancing",
    duration: "2024-Present",
  },
  {
    role: "Frontend Developer",
    company: "Upwork",
    duration: "2023-2024",
  },
  {
    role: "Web Designer",
    company: "Fiverr",
    duration: "2022-2024",
  },
];

const stats = [
  { label: "Years Experience", value: 2, suffix: "+", Icon: Calendar },
  { label: "Projects Completed", value: 50, suffix: "+", Icon: Award },
  { label: "Happy Clients", value: 0, suffix: "", Icon: Users },
  { label: "Technologies", value: 25, suffix: "+", Icon: Zap },
];

function StatCard({
  label,
  value,
  suffix,
  Icon,
}: {
  label: string;
  value: number;
  suffix: string;
  Icon: React.ComponentType<{ size?: number; className?: string }>;
}) {
  const { count, ref } = useAnimatedCounter(value);

  return (
    <div ref={ref} className="bg-card border border-border rounded-2xl p-4 sm:p-6 text-center">
      <Icon className="w-8 h-8 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 text-primary" />
      <div className="text-xl sm:text-2xl font-bold text-foreground">
        {count}
        {suffix}
      </div>
      <div className="text-sm text-muted mt-1">{label}</div>
    </div>
  );
}

export default function About() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);

  const updateArrows = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 10);
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 10);
  }, []);

  useEffect(() => {
    updateArrows();
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateArrows, { passive: true });
    window.addEventListener("resize", updateArrows);
    return () => {
      el.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, [updateArrows]);

  const scrollBy = useCallback((dir: number) => {
    trackRef.current?.scrollBy({ left: dir * 300, behavior: "smooth" });
  }, []);

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="About Me"
          subtitle="Passionate about creating exceptional digital experiences"
        />

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden aspect-square max-w-[250px] sm:max-w-md mx-auto border border-border/50"
          >
            <img
              src="/shariq.png"
              alt="Muhammad Shariq Shahid"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xl sm:text-2xl font-bold mb-6">Who am I?</h2>

            <p className="text-muted leading-relaxed mb-4">
              I&apos;m a Full Stack Web Developer with 2 years of experience
              building scalable web applications. Based in Pakistan, I work
              with startups and enterprises to deliver exceptional digital
              products.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              My passion lies at the intersection of design and technology. I
              believe great software should not only function flawlessly but
              also provide a delightful user experience.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              When I&apos;m not coding, you&apos;ll find me exploring new
              technologies, contributing to open-source projects, or mentoring
              aspiring developers.
            </p>

            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-lg px-4 py-2 text-sm mt-4">
              <Code2 size={16} />
              2+ Years Experience
            </div>
          </motion.div>
        </div>

        <div className="mt-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg sm:text-xl font-bold">My Journey</h2>
            <div className="flex gap-2">
              <button
                onClick={() => scrollBy(-1)}
                aria-label="Scroll left"
                disabled={!canLeft}
                className="w-10 h-10 rounded-full border border-border hover:border-primary hover:text-primary transition-colors flex items-center justify-center text-muted disabled:opacity-30 disabled:pointer-events-none"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => scrollBy(1)}
                aria-label="Scroll right"
                disabled={!canRight}
                className="w-10 h-10 rounded-full border border-border hover:border-primary hover:text-primary transition-colors flex items-center justify-center text-muted disabled:opacity-30 disabled:pointer-events-none"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          <div
            ref={trackRef}
            className="relative overflow-x-auto pb-4 scrollbar-hide cursor-grab active:cursor-grabbing select-none"
            onWheel={(e) => {
              if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
                trackRef.current?.scrollBy({ left: e.deltaY, behavior: "auto" });
              }
            }}
          >
            <div className="relative flex gap-8 items-stretch">
              <div className="absolute top-3 left-0 right-0 h-px bg-border" />
              {timeline.map((item) => (
                <div key={item.company} className="relative flex-1 min-w-[260px]">
                  <span className="block w-4 h-4 rounded-full bg-primary border-[3px] border-background relative z-10 -ml-2" />
                  <div className="mt-6 bg-card border border-border rounded-2xl p-5">
                    <div className="font-semibold text-foreground">{item.company}</div>
                    <div className="text-primary text-sm mt-1">{item.role}</div>
                    <div className="text-muted text-xs mt-1">{item.duration}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mt-12 sm:mt-16">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}

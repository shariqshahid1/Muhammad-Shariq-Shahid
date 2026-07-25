"use client";

import { motion } from "framer-motion";
import { Code2, Calendar, Award, Users, Zap } from "lucide-react";
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
    <div ref={ref} className="bg-card border border-border rounded-2xl p-6 text-center">
      <Icon className="w-12 h-12 mx-auto mb-3 text-primary" />
      <div className="text-3xl font-bold text-foreground">
        {count}
        {suffix}
      </div>
      <div className="text-sm text-muted mt-1">{label}</div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="About Me"
          subtitle="Passionate about creating exceptional digital experiences"
        />

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden aspect-square max-w-md mx-auto border border-border/50"
          >
            <img
              src="/shariq.jpeg"
              alt="Muhammad Shariq Shahid Ismail"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">Who am I?</h2>

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
          <h2 className="text-2xl font-bold mb-6">My Journey</h2>
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />
            {timeline.map((item) => (
              <div key={item.company} className="relative pl-8 pb-8 last:pb-0">
                <span className="absolute left-0 top-1 w-3 h-3 -translate-x-1/2 rounded-full bg-primary border-2 border-background" />
                <div className="font-semibold text-foreground">{item.company}</div>
                <div className="text-primary text-sm">{item.role}</div>
                <div className="text-muted text-xs">{item.duration}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}

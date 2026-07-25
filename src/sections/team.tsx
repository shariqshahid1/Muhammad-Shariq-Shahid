"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { SiGithub, SiX } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { X as CloseIcon } from "lucide-react";
import SectionHeading from "@/components/ui/section-heading";

const teamMembers = [
  {
    name: "Muhammad Shariq Shahid",
    role: "Full Stack Web Developer",
    avatar: "/shariq.png",
    github: "#",
    linkedin: "#",
    twitter: "#",
    about:
      "Full Stack Web Developer at K&H TECH SOL with 2+ years of experience. Passionate about building scalable web applications using React, Next.js, Node.js, and modern web technologies. Also into freelancing since 2024.",
    skills: ["React", "Next.js", "Node.js", "TypeScript", "Tailwind CSS", "MongoDB", "PostgreSQL", "JavaScript"],
  },
  {
    name: "Muhammad Haseeb Khalid",
    role: "Full Stack Engineer & AI Architect",
    avatar: "/haseebbhai.png",
    github: "https://github.com/a-haseeb-dev",
    linkedin: "https://www.linkedin.com/in/muhammad-haseeb-khalid/",
    twitter: "https://x.com/AHaseebDev",
    about:
      "Software Engineer at K&H TECH SOL bridging AI & Computer Vision with production-grade Full-Stack deployments. Expert in Next.js, Flutter, Python, and cloud infrastructure. Built mobile solutions for 5K+ users and production-grade scrapers with advanced anti-bot bypass.",
    skills: ["Next.js", "React", "Flutter", "Python", "Node.js", "Docker", "AWS", "OpenCV", "TensorFlow", "TypeScript"],
  },
  {
    name: "Sadiq Rashid",
    role: "Frontend & Agentic AI Developer",
    avatar: "/sadiqbhai.png",
    github: "https://github.com/SadiqKhan-Dev",
    linkedin: "https://www.linkedin.com/in/sadiq-rashid-564375158/",
    twitter: "https://x.com/saiqkhan3333",
    about:
      "Frontend Developer & Agentic AI Engineer building scalable web applications and AI agents. Proficient in Next.js, React, TypeScript, and AI/ML integration with OpenAI, LangChain, and Google Gemini. Focused on creating seamless user experiences and open-source contributions.",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Python", "FastAPI", "OpenAI", "Prisma", "Docker"],
  },
];

export default function Team() {
  const [selectedMember, setSelectedMember] = useState<number | null>(null);

  return (
    <section id="team" className="section-padding relative">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Our Team"
          subtitle="Meet the people behind the work"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-card border border-border rounded-2xl p-6 sm:p-8 text-center hover:border-primary/30 transition-colors duration-300 flex flex-col items-center"
            >
              <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-full overflow-hidden mb-4 sm:mb-5 border-2 border-border">
                {member.avatar ? (
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-3xl font-bold text-primary">
                    {member.name.charAt(0)}
                  </div>
                )}
              </div>

              <h3 className="text-xl font-bold text-foreground mb-1">
                {member.name}
              </h3>
              <p className="text-primary text-sm mb-4">{member.role}</p>

              <button
                onClick={() => setSelectedMember(index)}
                className="text-sm font-medium text-primary border border-primary/30 rounded-full px-5 py-2 hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer mb-5"
              >
                View Details
              </button>

              <div className="flex gap-3 justify-center mt-auto">
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted hover:bg-primary hover:text-white hover:border-primary transition-all"
                >
                  <SiGithub className="w-4 h-4" />
                </a>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted hover:bg-primary hover:text-white hover:border-primary transition-all"
                >
                  <FaLinkedinIn className="w-4 h-4" />
                </a>
                <a
                  href={member.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted hover:bg-primary hover:text-white hover:border-primary transition-all"
                >
                  <SiX className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedMember !== null && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
              onClick={() => setSelectedMember(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed inset-4 sm:inset-auto sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:w-full sm:max-w-lg z-50 bg-card border border-border rounded-2xl p-4 sm:p-6 md:p-8 overflow-y-auto max-h-[85vh] sm:max-h-[90vh]"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-border flex-shrink-0">
                    <img
                      src={teamMembers[selectedMember].avatar}
                      alt={teamMembers[selectedMember].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      {teamMembers[selectedMember].name}
                    </h3>
                    <p className="text-primary text-sm">
                      {teamMembers[selectedMember].role}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedMember(null)}
                  className="text-muted hover:text-foreground transition-colors cursor-pointer"
                >
                  <CloseIcon size={20} />
                </button>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-2">
                  About
                </h4>
                <p className="text-muted text-sm leading-relaxed">
                  {teamMembers[selectedMember].about}
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">
                  Skills
                </h4>
                <div className="flex flex-wrap gap-2">
                  {teamMembers[selectedMember].skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs bg-primary/10 text-primary rounded-full px-3 py-1.5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <a
                  href={teamMembers[selectedMember].github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted hover:text-primary transition-colors"
                >
                  <SiGithub className="w-4 h-4" />
                  GitHub
                </a>
                <a
                  href={teamMembers[selectedMember].linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted hover:text-primary transition-colors"
                >
                  <FaLinkedinIn className="w-4 h-4" />
                  LinkedIn
                </a>
                <a
                  href={teamMembers[selectedMember].twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted hover:text-primary transition-colors"
                >
                  <SiX className="w-4 h-4" />
                  Twitter
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}

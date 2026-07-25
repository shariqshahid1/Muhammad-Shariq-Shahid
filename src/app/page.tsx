"use client";

import dynamic from "next/dynamic";

const ThemeProvider = dynamic(() => import("@/components/providers/theme-provider"), { ssr: false });
const LoadingScreen = dynamic(() => import("@/components/layout/loading-screen"), { ssr: false });
const CustomCursor = dynamic(() => import("@/components/layout/custom-cursor"), { ssr: false });
const ScrollProgress = dynamic(() => import("@/components/layout/scroll-progress"), { ssr: false });
const Navbar = dynamic(() => import("@/components/layout/navbar"), { ssr: false });
const Hero = dynamic(() => import("@/sections/hero"), { ssr: false });
const About = dynamic(() => import("@/sections/about"), { ssr: false });
const Skills = dynamic(() => import("@/sections/skills"), { ssr: false });
const Services = dynamic(() => import("@/sections/services"), { ssr: false });
const Projects = dynamic(() => import("@/sections/projects"), { ssr: false });
const Experience = dynamic(() => import("@/sections/experience"), { ssr: false });
const Education = dynamic(() => import("@/sections/education"), { ssr: false });
const Testimonials = dynamic(() => import("@/sections/testimonials"), { ssr: false });
const Achievements = dynamic(() => import("@/sections/achievements"), { ssr: false });
const TechStack = dynamic(() => import("@/sections/tech-stack"), { ssr: false });
const GitHubActivity = dynamic(() => import("@/sections/github-activity"), { ssr: false });
const Blog = dynamic(() => import("@/sections/blog"), { ssr: false });
const FAQ = dynamic(() => import("@/sections/faq"), { ssr: false });
const Contact = dynamic(() => import("@/sections/contact"), { ssr: false });
const Footer = dynamic(() => import("@/components/layout/footer"), { ssr: false });

export default function Home() {
  return (
    <ThemeProvider>
      <LoadingScreen />
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Experience />
        <Education />
        <Testimonials />
        <Achievements />
        <TechStack />
        <GitHubActivity />
        <Blog />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

"use client";

import { motion } from "framer-motion";
import { Heart, ArrowUp, Mail, MapPin, Phone } from "lucide-react";
import { SiGithub, SiX } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { NAV_LINKS, SITE_CONFIG } from "@/constants";

const socialLinks = [
  { name: "GitHub", Icon: SiGithub, url: SITE_CONFIG.github },
  { name: "LinkedIn", Icon: FaLinkedinIn, url: SITE_CONFIG.linkedin },
  { name: "Twitter", Icon: SiX, url: SITE_CONFIG.twitter },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-b from-background to-background/80 border-t border-border">
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12"
        >
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-foreground">Muhammad</span>{" "}
              <span className="gradient-text">Shariq Shahid Ismail</span>
            </h3>
            <p className="text-muted text-sm leading-relaxed">
              Full Stack Web Developer crafting exceptional digital experiences with clean code and creative design.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted text-sm hover:text-primary transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-muted text-sm">
                <Mail className="w-4 h-4 text-primary" />
                {SITE_CONFIG.email}
              </li>
              <li className="flex items-center gap-3 text-muted text-sm">
                <Phone className="w-4 h-4 text-primary" />
                {SITE_CONFIG.phone}
              </li>
              <li className="flex items-center gap-3 text-muted text-sm">
                <MapPin className="w-4 h-4 text-primary" />
                {SITE_CONFIG.location}
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Social</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted hover:bg-primary hover:text-white hover:border-primary transition-all"
                >
                  <social.Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted text-sm flex items-center gap-1">
            &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved. Built with{" "}
            <Heart className="w-3 h-3 text-red-500 fill-red-500" /> and Next.js
          </p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted hover:bg-primary hover:text-white hover:border-primary transition-all cursor-pointer"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}

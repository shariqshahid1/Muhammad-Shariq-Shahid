"use client";

import { motion } from "framer-motion";
import { useState, FormEvent } from "react";
import { Send, Mail, Phone, MapPin, CheckCircle, Loader2 } from "lucide-react";
import { SiGithub, SiX } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import SectionHeading from "@/components/ui/section-heading";
import GlowCard from "@/components/ui/glow-card";
import { SITE_CONFIG } from "@/constants";
import { cn } from "@/lib/utils";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });
      if (res.ok) {
        setIsSubmitted(true);
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
        setTimeout(() => setIsSubmitted(false), 3000);
      }
    } catch {
      // silent fail
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactDetails = [
    { icon: Mail, label: SITE_CONFIG.email },
    { icon: Phone, label: SITE_CONFIG.phone },
    { icon: MapPin, label: SITE_CONFIG.location },
  ];

  const socialLinks = [
    { icon: SiGithub, href: SITE_CONFIG.github, name: "GitHub" },
    { icon: FaLinkedinIn, href: SITE_CONFIG.linkedin, name: "LinkedIn" },
    { icon: SiX, href: SITE_CONFIG.twitter, name: "Twitter" },
  ];

  return (
    <section id="contact" className="section-padding relative">
      <SectionHeading
        title="Get In Touch"
        subtitle="Let's work together on your next project"
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:gap-8 md:gap-12 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <GlowCard className="p-6 sm:p-8">
              <h3 className="text-2xl font-bold mb-4">Let&apos;s talk</h3>
              <p className="text-muted text-sm mb-6">
                I&apos;m always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision.
              </p>
              <div className="space-y-4">
                {contactDetails.map((detail) => (
                  <div key={detail.label} className="flex items-center gap-3 text-sm text-muted">
                    <detail.icon className="h-5 w-5 text-primary" />
                    <span>{detail.label}</span>
                  </div>
                ))}
              </div>
              <div className="flex gap-3 mt-6">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted hover:bg-primary hover:text-white hover:border-primary transition-all"
                  >
                    <link.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </GlowCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <GlowCard className="p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="text-sm font-medium text-foreground mb-2 block">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your Name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-foreground/5 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium text-foreground mb-2 block">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Your Email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-foreground/5 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="text-sm font-medium text-foreground mb-2 block">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    placeholder="Subject"
                    required
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full bg-foreground/5 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="text-sm font-medium text-foreground mb-2 block">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Your Message"
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-foreground/5 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                  />
                </div>
                <motion.button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={cn(
                    "w-full bg-primary hover:bg-primary-light text-white font-semibold rounded-xl px-6 py-3 flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed disabled:opacity-70 transition-colors"
                  )}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle className="h-5 w-5" />
                      <span>Sent!</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
              {isSubmitted && (
                <div className="flex items-center gap-2 text-green-500 mt-4">
                  <CheckCircle className="h-5 w-5" />
                  <span>Message sent successfully!</span>
                </div>
              )}
            </GlowCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

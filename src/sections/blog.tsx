"use client";

import { motion } from "framer-motion";
import { Clock, ArrowRight, Tag } from "lucide-react";
import SectionHeading from "@/components/ui/section-heading";
import GlowCard from "@/components/ui/glow-card";
import { BLOG_POSTS } from "@/constants";
import { cn, formatDate } from "@/lib/utils";

export default function Blog() {
  return (
    <section id="blog" className="section-padding relative">
      <SectionHeading title="Blog" subtitle="Latest articles and insights" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {BLOG_POSTS.map((post, index) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <GlowCard className="h-full flex flex-col">
              <span className="bg-primary/10 text-primary text-xs font-medium rounded-full px-3 py-1 inline-block self-start">
                {post.category}
              </span>

              <h3 className="text-xl font-bold text-foreground mt-4 mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                {post.title}
              </h3>

              <p className="text-sm text-muted leading-relaxed mb-4 line-clamp-3">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between mt-auto pt-2">
                <span className="text-xs text-muted">
                  {formatDate(post.date)}
                </span>
                <span className="text-xs text-muted flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {post.readTime}
                </span>
              </div>

              <div className="flex items-center gap-1 text-primary text-sm font-medium mt-4 group/link cursor-pointer">
                <span>Read More</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
              </div>
            </GlowCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

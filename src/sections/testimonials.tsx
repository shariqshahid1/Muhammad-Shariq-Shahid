"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import SectionHeading from "@/components/ui/section-heading";
import { TESTIMONIALS } from "@/constants";
import { cn } from "@/lib/utils";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  }, []);

  const prev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [isPaused, next]);

  const testimonial = TESTIMONIALS[activeIndex];

  return (
    <section id="testimonials" className="section-padding relative overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionHeading title="Testimonials" subtitle="What my clients say about working with me" />

        <div
          className="relative flex items-center justify-center gap-2 sm:gap-6"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.button
            onClick={prev}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-border bg-card flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-colors flex-shrink-0"
          >
            <ChevronLeft size={20} />
          </motion.button>

          <div className="relative w-full max-w-3xl overflow-hidden">
            <Quote size={48} className="text-primary/20 mx-auto mb-4 sm:mb-6 hidden sm:block" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="bg-card border border-border rounded-2xl p-4 sm:p-6 md:p-8"
              >
                <p className="text-sm sm:text-lg md:text-xl text-foreground/80 leading-relaxed italic mb-6">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-sm sm:text-xl font-bold flex-shrink-0">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-primary">
                      {testimonial.role} • {testimonial.company}
                    </p>
                  </div>
                  <div className="flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.button
            onClick={next}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-border bg-card flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-colors flex-shrink-0"
          >
            <ChevronRight size={20} />
          </motion.button>
        </div>

        <div className="flex gap-2 justify-center mt-8">
          {TESTIMONIALS.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "h-2 rounded-full transition-all",
                index === activeIndex ? "w-8 bg-primary" : "w-2 bg-foreground/20"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { heroHighlights, siteConfig } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-navy-950 via-navy-900 to-navy-700 pb-20 pt-32 sm:pb-28 sm:pt-40"
    >
      <div className="pointer-events-none absolute inset-0 bg-hero-grid bg-[size:48px_48px] opacity-40" />
      <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-azure-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-azure-400/10 blur-3xl" />

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-azure-200"
          >
            {siteConfig.trainingMode}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Master Cloud &amp; DevOps Technologies with{" "}
            <span className="text-gradient">Real-Time Industry Experts</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-navy-100/80 sm:text-lg"
          >
            Advance your career through live online training, hands-on
            projects, interview preparation, and industry-focused learning.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button href="#courses" variant="primary" icon={<ArrowRight className="h-4 w-4" />}>
              Explore Courses
            </Button>
            <Button href={siteConfig.whatsappHref} variant="outline-light" icon={<MessageCircle className="h-4 w-4" />}>
              Talk to an Expert
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-14 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-2"
          >
            {heroHighlights.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2.5 rounded-xl glass px-4 py-3 text-left"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 text-azure-400" />
                <span className="text-sm font-medium text-white/90">{item}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

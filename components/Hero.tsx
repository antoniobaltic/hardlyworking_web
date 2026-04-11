"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import MoneyCounter from "./MoneyCounter";
import AppStoreBadge from "./AppStoreBadge";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Parallax: mascot moves slower, text moves slightly faster
  const mascotY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const gridOpacity = useTransform(scrollYProgress, [0, 0.5], [0.03, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center px-6 pt-20 pb-16 overflow-hidden"
    >
      {/* Faint grid background with parallax fade */}
      <motion.div
        className="absolute inset-0"
        style={{
          opacity: gridOpacity,
          backgroundImage:
            "linear-gradient(var(--text-primary) 1px, transparent 1px), linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-4xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Left: Text + CTA */}
        <motion.div
          style={{ y: textY }}
          className="flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-1"
        >
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight"
          >
            We&apos;re Hiring!
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="font-mono text-sm sm:text-base text-text-primary/50 mt-5 max-w-md leading-relaxed"
          >
            Join the world&apos;s leading time reclamation firm.
            {" "}Track your breaks. Calculate your reclaimed wages.
            {" "}No experience required.
          </motion.p>

          {/* Corp. tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55, duration: 0.4 }}
            className="font-mono text-[10px] text-text-primary/40 tracking-widest uppercase mt-3"
          >
            Hardly Working Corp. · Time Reclamation Solutions
          </motion.p>

          {/* Formula bar counter */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-8"
          >
            <MoneyCounter />
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-8 flex flex-col items-center gap-3"
          >
            <AppStoreBadge />
            <span className="font-mono text-[10px] text-text-primary/50">
              iOS 26+ · Start your onboarding today!
            </span>
          </motion.div>
        </motion.div>

        {/* Right: Mascot with parallax */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{ y: mascotY }}
          className="flex justify-center md:justify-end order-1 md:order-2"
        >
          <img
            src="/mascot_welcome.png"
            alt="Hardly Working Corp. mascot — a wooden-toy office worker holding a clipboard"
            className="w-48 sm:w-56 md:w-72 lg:w-80 h-auto drop-shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}

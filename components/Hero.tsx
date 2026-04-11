"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import MoneyCounter from "./MoneyCounter";

const APP_STORE_URL = "https://apps.apple.com/app/id6761917321";

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
            <a
              href={APP_STORE_URL}
              className="inline-flex items-center gap-3 bg-black text-white font-mono text-sm sm:text-base font-semibold px-6 sm:px-10 py-4 sm:py-5 rounded-2xl hover:bg-black/85 transition-all hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              Apply Now · Free on the App Store
            </a>
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

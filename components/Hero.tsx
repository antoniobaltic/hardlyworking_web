"use client";

import { motion } from "framer-motion";
import MoneyCounter from "./MoneyCounter";

const APP_STORE_URL = "https://apps.apple.com/app/id6761917321";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-16 overflow-hidden">
      {/* Faint grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(var(--text-primary) 1px, transparent 1px), linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Mascot placeholder */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative w-52 h-72 mb-8 rounded-2xl border-2 border-dashed border-text-primary/10 flex items-center justify-center bg-card-bg/50"
      >
        <div className="text-center">
          <span className="text-4xl">👔</span>
          <p className="font-mono text-[10px] text-text-primary/20 mt-2">
            MASCOT PLACEHOLDER
          </p>
        </div>
      </motion.div>

      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-4xl sm:text-5xl md:text-6xl font-light text-center max-w-2xl leading-tight"
      >
        Your employer&apos;s time
        <br />
        <span className="text-dead-blue">is a construct.</span>
      </motion.h1>

      {/* Subheadline */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="font-mono text-sm sm:text-base text-text-primary/50 text-center mt-5 max-w-md"
      >
        The time reclamation platform for the modern professional.
        Track what you&apos;re{" "}
        <span className="line-through opacity-60">not</span> doing at work.
      </motion.p>

      {/* Formula bar counter */}
      <div className="mt-8">
        <MoneyCounter />
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="mt-10 flex flex-col items-center gap-3"
      >
        <a
          href={APP_STORE_URL}
          className="inline-flex items-center gap-2 bg-text-primary text-white font-mono text-sm font-semibold px-8 py-4 rounded-xl hover:bg-text-primary/90 transition-all hover:scale-[1.02] active:scale-[0.98]"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
          </svg>
          Download Free
        </a>
        <span className="font-mono text-[10px] text-text-primary/40">
          iOS 17+ · No account required to start
        </span>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border-2 border-text-primary/10 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 rounded-full bg-text-primary/20" />
        </motion.div>
      </motion.div>
    </section>
  );
}

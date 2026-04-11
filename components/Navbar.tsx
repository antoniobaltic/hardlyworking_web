"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const APP_STORE_URL = "https://apps.apple.com/app/id6761917321";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-text-primary/[0.06] shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#" className="font-mono font-bold text-sm tracking-tight text-text-primary">
          Hardly Working Corp<span className="text-dead-blue">.</span>
        </a>

        <div className="flex items-center gap-6">
          <a
            href="/memos"
            className="hidden sm:inline font-mono text-xs text-text-primary/60 hover:text-text-primary/80 transition-colors"
          >
            Memos
          </a>
          <a
            href="/privacy"
            className="hidden sm:inline font-mono text-xs text-text-primary/60 hover:text-text-primary/80 transition-colors"
          >
            Privacy
          </a>
          <a
            href="/terms"
            className="hidden sm:inline font-mono text-xs text-text-primary/60 hover:text-text-primary/80 transition-colors"
          >
            Terms
          </a>
          <a
            href={APP_STORE_URL}
            className="font-mono text-xs font-semibold text-white bg-text-primary px-4 py-2 rounded-lg hover:bg-text-primary/90 transition-colors"
          >
            Apply Now
          </a>
        </div>
      </div>
    </motion.nav>
  );
}

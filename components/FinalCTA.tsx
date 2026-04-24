"use client";

import { motion } from "framer-motion";
import Confetti from "./Confetti";
import AppStoreBadge from "./AppStoreBadge";

export default function FinalCTA() {
  return (
    <section className="relative py-24 px-6" style={{ background: "var(--card-bg)" }}>
      <Confetti />
      <div className="relative max-w-2xl mx-auto text-center">
        {/* Mascot placeholder */}
        <motion.img
          src="/mascot_honest.png"
          alt="Hardly Working Corp. mascot"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-42 h-auto mx-auto mb-8 drop-shadow-md"
        />

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-text-primary mb-4"
        >
          Your orientation is complete!
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-mono text-sm text-text-primary/50 mb-10 max-w-lg mx-auto leading-relaxed"
        >
          Welcome to Hardly Working Corp. Download the official app and start reclaiming immediately. Your other employer will never know. <span className="italic">Probably.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <AppStoreBadge />
          <p className="font-mono text-[10px] text-text-primary/50 mt-3">
            Apply Now!
          </p>
        </motion.div>
      </div>
    </section>
  );
}

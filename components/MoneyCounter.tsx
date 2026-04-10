"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function MoneyCounter() {
  const [amount, setAmount] = useState(47.23);

  useEffect(() => {
    const interval = setInterval(() => {
      setAmount((prev) => {
        const increment = 0.01 + Math.random() * 0.03;
        return Math.round((prev + increment) * 100) / 100;
      });
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.5 }}
      className="inline-flex items-center gap-3 px-5 py-3 rounded-lg border border-text-primary/[0.06]"
      style={{ background: "var(--card-bg)" }}
    >
      <span className="font-mono text-xs text-text-primary/40 font-bold">
        A1
      </span>
      <span className="w-px h-4 bg-text-primary/10" />
      <span className="font-mono text-xs text-text-primary/30 italic font-serif font-bold">
        fx
      </span>
      <span className="font-mono text-xs text-text-primary/50">
        =SUM(time_reclaimed)
      </span>
      <span className="font-mono text-lg font-bold money tabular-nums">
        ${amount.toFixed(2)}
      </span>
    </motion.div>
  );
}

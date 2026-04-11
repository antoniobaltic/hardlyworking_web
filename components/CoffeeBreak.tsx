"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CoffeeBreak() {
  const [tipped, setTipped] = useState(false);
  const [amount, setAmount] = useState(0);
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = () => {
    if (tipped) return;
    setTipped(true);

    // Count up the amount
    const target = 0.04;
    const steps = 12;
    const stepTime = 80;
    let current = 0;

    const interval = setInterval(() => {
      current += target / steps;
      if (current >= target) {
        current = target;
        clearInterval(interval);
        setTimeout(() => setShowMessage(true), 300);
      }
      setAmount(current);
    }, stepTime);
  };

  return (
    <section className="py-12 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        {/* The scene */}
        <div
          className="relative cursor-pointer select-none"
          onClick={handleClick}
        >
          {/* Cup */}
          <motion.div
            animate={
              tipped
                ? { rotate: 85, x: 20, y: 10 }
                : { rotate: 0, x: 0, y: 0 }
            }
            transition={
              tipped
                ? { type: "spring", stiffness: 200, damping: 12 }
                : {}
            }
            className="text-6xl sm:text-7xl origin-bottom-right"
            style={{ transformOrigin: "70% 90%" }}
          >
            ☕
          </motion.div>

          {/* Puddle */}
          <AnimatePresence>
            {tipped && (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.12 }}
                transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                className="absolute top-[85%] left-[40%] w-32 h-5 rounded-full"
                style={{ background: "#6B4C11" }}
              />
            )}
          </AnimatePresence>

          {/* Hover hint */}
          {!tipped && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="font-mono text-[10px] text-text-primary/30 text-center mt-2"
            >
              click to take a break
            </motion.p>
          )}
        </div>

        {/* Amount counter */}
        <AnimatePresence>
          {tipped && amount > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="mt-4 text-center"
            >
              <p className="font-mono text-lg font-bold money tabular-nums">
                +${amount.toFixed(2)}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Message */}
        <AnimatePresence>
          {showMessage && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-2 text-center"
            >
              <p className="font-mono text-xs text-text-primary/50">
                Coffee break logged. Session recorded.
              </p>
              <p className="font-mono text-[10px] text-text-primary/30 mt-1">
                ACTIVITY CODE 01 · DURATION: 0.7 SEC · STATUS: RECLAIMED
              </p>
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                onClick={() => {
                  setTipped(false);
                  setAmount(0);
                  setShowMessage(false);
                }}
                className="mt-3 font-mono text-[10px] text-dead-blue/50 hover:text-dead-blue/80 transition-colors"
              >
                ↻ Refill
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

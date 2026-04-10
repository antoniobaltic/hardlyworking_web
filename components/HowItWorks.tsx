"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Start Slacking",
    description: "Tap a category. The timer starts. You start not working.",
    accent: "var(--blood-red)",
  },
  {
    number: "02",
    title: "Track Everything",
    description:
      "Every session logged. Every minute counted. Every dollar calculated.",
    accent: "var(--dead-blue)",
  },
  {
    number: "03",
    title: "Reclaim Your Time",
    description:
      "See exactly how much you've reclaimed. Share your stats. Feel empowered.",
    accent: "var(--reclaimed-green)",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 px-6" style={{ background: "var(--card-bg)" }}>
      <div className="max-w-5xl mx-auto">
        <p className="section-header text-center mb-4">
          STANDARD OPERATING PROCEDURE
        </p>
        <p className="font-mono text-sm text-text-primary/40 text-center mb-16">
          Three steps to operational inefficiency.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="text-center"
            >
              <div
                className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 font-mono text-2xl font-bold text-white"
                style={{ background: step.accent }}
              >
                {step.number}
              </div>
              <h3 className="font-mono text-lg font-semibold mb-3 text-text-primary">
                {step.title}
              </h3>
              <p className="font-mono text-sm text-text-primary/50 leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Annual projection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="font-mono text-xs text-text-primary/30 mb-2">
            =FORECAST(annual_reclamation)
          </p>
          <p className="font-mono text-sm text-text-primary/50">
            The average user reclaims{" "}
            <span className="money text-xl">$4,200</span> worth of time per
            year.
          </p>
          <p className="font-mono text-[10px] text-text-primary/20 mt-2">
            *Based on absolutely nothing. Your results will vary.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

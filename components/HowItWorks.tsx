"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Clock In",
    description:
      "Select your activity. Tap to start the break timer. Your shift at Hardly Working Corp. has begun.",
    accent: "var(--blood-red)",
  },
  {
    number: "02",
    title: "Log Everything",
    description:
      "Every session is recorded. Every minute counted. Every dollar of reclaimed wages calculated automatically.",
    accent: "var(--dead-blue)",
  },
  {
    number: "03",
    title: "Collect Your Earnings",
    description:
      "Review your reclamation reports. Compare against industry benchmarks. Share your performance review.",
    accent: "var(--reclaimed-green)",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 px-6" style={{ background: "var(--card-bg)" }}>
      <div className="max-w-5xl mx-auto">
        <p className="font-mono text-xl sm:text-2xl font-extrabold tracking-[0.15em] uppercase text-text-primary/70 text-center mb-4">
          YOUR JOB DESCRIPTION
        </p>
        <p className="font-mono text-sm text-text-primary/50 text-center mb-12">
          Three responsibilities. Zero accountability.
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
          <p className="font-mono text-xs text-text-primary/45 mb-2">
            =FORECAST(annual_reclamation)
          </p>
          <p className="font-mono text-sm text-text-primary/50 max-w-xs sm:max-w-none mx-auto leading-relaxed">
            The average Hardly Working Corp. employee reclaims{" "}
            <span className="money text-lg sm:text-xl">$4,200</span> worth of
            time per year.
          </p>
          <p className="font-mono text-[10px] text-text-primary/45 mt-3 max-w-[250px] sm:max-w-none mx-auto">
            *Based on internal projections. Individual results vary by department.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

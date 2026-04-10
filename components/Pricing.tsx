"use client";

import { motion } from "framer-motion";

const APP_STORE_URL = "https://apps.apple.com/app/id6761917321";

const freeFeatures = [
  "Full timer (all 10 categories)",
  "Today + This Week dashboard",
  "Benchmarks summary",
  "Join friend groups",
  "Share cards (with watermark)",
  "Achievements (10 free)",
];

const proFeatures = [
  "Everything in Free, plus:",
  "Month, Year, Lifetime dashboards",
  "Insights engine (\"Audit Findings\")",
  "Personal records & category rankings",
  "Full country & industry benchmarks",
  "Create friend groups (unlimited)",
  "Custom categories",
  "CSV data export",
  "Premium share cards (no watermark)",
  "Pro achievements (5 exclusive)",
];

export default function Pricing() {
  return (
    <section className="py-24 px-6" style={{ background: "var(--card-bg)" }}>
      <div className="max-w-4xl mx-auto">
        <p className="section-header text-center mb-4">
          COMPENSATION PACKAGES
        </p>
        <p className="font-mono text-sm text-text-primary/40 text-center mb-12">
          Standard clearance is free. Pro clearance unlocks everything.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Free */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 rounded-2xl bg-white border border-text-primary/[0.06]"
          >
            <div className="mb-6">
              <p className="font-mono text-xs font-bold text-text-primary/45 tracking-wider uppercase mb-2">
                Standard Clearance
              </p>
              <p className="text-3xl font-light text-text-primary">
                Free
              </p>
              <p className="font-mono text-xs text-text-primary/45 mt-1">
                Forever. No tricks.
              </p>
            </div>

            <ul className="space-y-3">
              {freeFeatures.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <span className="text-reclaimed-green text-sm mt-0.5">✓</span>
                  <span className="font-mono text-sm text-text-primary/60">
                    {f}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href={APP_STORE_URL}
              className="mt-8 block text-center font-mono text-sm font-semibold text-dead-blue border border-dead-blue px-6 py-3 rounded-xl hover:bg-dead-blue/5 transition-colors"
            >
              Download Free
            </a>
          </motion.div>

          {/* Pro */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative p-8 rounded-2xl bg-white border-2 border-dead-blue/20 shadow-lg"
          >
            <div className="absolute -top-3 right-6">
              <span className="font-mono text-[10px] font-bold text-white bg-dead-blue px-3 py-1 rounded-full tracking-wider">
                RECOMMENDED
              </span>
            </div>

            <div className="mb-6">
              <p className="font-mono text-xs font-bold text-dead-blue tracking-wider uppercase mb-2">
                Pro Clearance
              </p>
              <div className="flex items-baseline gap-2">
                <p className="text-3xl font-light text-text-primary">
                  $39.99
                </p>
                <p className="font-mono text-xs text-text-primary/40">
                  /year
                </p>
              </div>
              <p className="font-mono text-xs text-reclaimed-green mt-1">
                7-day free trial · Save 85% vs weekly
              </p>
            </div>

            <ul className="space-y-3">
              {proFeatures.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <span className="text-reclaimed-green text-sm mt-0.5">✓</span>
                  <span className="font-mono text-sm text-text-primary/60">
                    {f}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href={APP_STORE_URL}
              className="mt-8 block text-center font-mono text-sm font-semibold text-white bg-dead-blue px-6 py-3 rounded-xl hover:bg-dead-blue/90 transition-colors"
            >
              Start Free Trial
            </a>

            <p className="font-mono text-[10px] text-text-primary/40 text-center mt-3">
              Also available: $4.99/week (no trial)
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

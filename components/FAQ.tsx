"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Is this legal?",
    a: "Hardly Working is a time tracking app. What you track is your business. We are not lawyers, and this does not constitute legal advice regarding your employment. We do however note that tracking your own time is not a crime in any jurisdiction we're aware of.",
  },
  {
    q: "Will my employer find out?",
    a: "Your data stays on your device. Only anonymized aggregate statistics are used for benchmarks, and those cannot be traced back to you. We don't share individual data with anyone — especially not your employer. Or HR. Or that guy from Compliance.",
  },
  {
    q: "Is my data private?",
    a: "Yes. Time entries are stored locally on your device and synced via iCloud to your other devices. Only anonymized aggregate stats (total hours per day) are sent to our servers for benchmarking. We use Supabase for authentication and RevenueCat for subscriptions. Full details in our Privacy Policy.",
  },
  {
    q: "Does it work offline?",
    a: "Absolutely. The timer, categories, and all local features work without internet. Syncing to benchmarks and friend group leaderboards requires a connection, but your data is never lost.",
  },
  {
    q: "What counts as 'slacking'?",
    a: "Whatever you want it to count as. We provide 10 default categories ranging from 'Coffee Run' to 'Into the Void.' Pro users can create custom categories. We don't judge. The Department of Employee Morale has been dissolved.",
  },
  {
    q: "Can I really reclaim $4,200 a year?",
    a: "That number is entirely made up. Your actual reclamation amount depends on your hourly rate, how much you slack, and your personal definition of 'working.' The app calculates it honestly based on the data you provide.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <p className="section-header text-center mb-2">
          FREQUENTLY ASKED QUESTIONS
        </p>
        <p className="font-mono text-[10px] text-text-primary/25 text-center mb-12">
          INTERNAL MEMO | REF: FAQ-HW-2026 | CLASSIFICATION: PUBLIC
        </p>

        <div className="space-y-0">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border-b border-text-primary/[0.06] last:border-b-0"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left py-5 flex items-center justify-between gap-4 group"
              >
                <span className="font-mono text-sm font-medium text-text-primary/70 group-hover:text-text-primary transition-colors">
                  {faq.q}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === i ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-text-primary/45 text-lg flex-shrink-0"
                >
                  +
                </motion.span>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="font-mono text-sm text-text-primary/50 leading-relaxed pb-5">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

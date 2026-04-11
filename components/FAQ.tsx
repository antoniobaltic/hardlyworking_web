"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Is this legal?",
    a: "Hardly Working Corp. provides a break timer and wage calculator for personal use. What you track is your business. We are not lawyers, and this does not constitute legal advice regarding your employment. We do note that tracking your own time is not a crime in any jurisdiction we're aware of.",
  },
  {
    q: "Will my actual employer find out?",
    a: "Your data stays on your device. Only anonymized aggregate statistics are used for industry benchmarks, and those cannot be traced back to you. Hardly Working Corp. does not share individual employee data with anyone — especially not your other employer. Or HR. Or that guy from Compliance.",
  },
  {
    q: "Is my data private?",
    a: "Yes. Time entries are stored locally on your device and synced via iCloud to your other devices. Only anonymized daily totals are sent to our servers for benchmarking. We use Supabase for authentication and RevenueCat for subscriptions. Full details in our Privacy Policy.",
  },
  {
    q: "Does the app work offline?",
    a: "Absolutely. The break timer, activity codes, and all local features work without internet. Syncing to industry benchmarks and reclamation unit leaderboards requires a connection, but your data is never lost.",
  },
  {
    q: "What counts as a 'break'?",
    a: "Whatever you want it to count as. Hardly Working Corp. provides 10 pre-approved activity codes ranging from 'Coffee Run' to 'Into the Void.' Promoted employees can create custom codes. The Department of Employee Morale has been dissolved and can no longer judge you.",
  },
  {
    q: "Can I really reclaim $4,200 a year?",
    a: "That figure is based on internal projections. Your actual reclamation amount depends on your hourly rate, your dedication to not-working, and your personal definition of 'productive.' The app calculates it honestly based on the data you provide.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <p className="font-mono text-sm font-extrabold tracking-[0.15em] uppercase text-text-primary/60 text-center mb-2">
          FREQUENTLY ASKED QUESTIONS
        </p>
        <p className="font-mono text-[10px] text-text-primary/25 text-center mb-12">
          INTERNAL MEMO | REF: FAQ-HWC-2026 | HARDLY WORKING CORP. | CLASSIFICATION: PUBLIC
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

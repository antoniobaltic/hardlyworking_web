"use client";

import { motion } from "framer-motion";

const categories = [
  { emoji: "☕", name: "Coffee Run" },
  { emoji: "🚻", name: "Bathroom Break" },
  { emoji: "💬", name: "Chatting" },
  { emoji: "📱", name: "Doom Scrolling" },
  { emoji: "🛒", name: "Online Shopping" },
  { emoji: "🏃", name: "Errands" },
  { emoji: "💼", name: "Looking Busy" },
  { emoji: "🤔", name: '"Thinking"' },
  { emoji: "🕳️", name: "Into the Void" },
  { emoji: "🍽️", name: "Long Lunch" },
];

export default function Categories() {
  return (
    <section className="py-20 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <p className="section-header text-center mb-4">
          APPROVED ACTIVITY CODES
        </p>
        <p className="font-mono text-sm text-text-primary/40 text-center mb-12 max-w-lg mx-auto">
          All Hardly Working Corp. employees receive 10 pre-approved break
          categories. From innocent to existential. Promoted employees may create custom ones.
        </p>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.06 } },
          }}
          className="flex flex-wrap justify-center gap-3"
        >
          {categories.map((cat) => (
            <motion.div
              key={cat.name}
              variants={{
                hidden: { opacity: 0, scale: 0.8, y: 20 },
                show: {
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  transition: { type: "spring", stiffness: 300, damping: 20 },
                },
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-text-primary/[0.08] bg-white hover:bg-card-bg transition-colors cursor-default"
            >
              <span className="text-base">{cat.emoji}</span>
              <span className="font-mono text-xs font-medium text-text-primary/70">
                {cat.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

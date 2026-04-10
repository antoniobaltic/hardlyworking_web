"use client";

import { motion } from "framer-motion";

const features = [
  {
    icon: "⏱",
    title: "Time Sheet",
    description:
      "One tap to start. One tap to stop. Track every coffee run, bathroom break, and existential crisis with military precision.",
    formula: "=SUM(today_reclaimed)",
  },
  {
    icon: "📊",
    title: "Performance Review",
    description:
      "Day, week, month, year, and lifetime dashboards. Watch your career of underachievement unfold in beautiful charts.",
    formula: "=AVG(weekly_hours)",
  },
  {
    icon: "🏆",
    title: "Benchmarks",
    description:
      "See how you rank against anonymous professionals worldwide. Country rankings. Industry comparisons. Are you normal? Probably not.",
    formula: "=PERCENTILE(global, you)",
  },
  {
    icon: "👥",
    title: "Friend Groups",
    description:
      "Form private reclamation units with coworkers. Weekly leaderboards. QR code invites. Accountability through shared negligence.",
    formula: "=COUNTA(my_groups)",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function Features() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="section-header text-center mb-16">CORE COMPETENCIES</p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={item}
              className="group relative p-8 rounded-2xl border border-text-primary/[0.04] bg-card-bg/30 hover:bg-card-bg/60 transition-colors duration-300"
            >
              {/* Formula bar accent */}
              <div className="flex items-center gap-2 mb-6">
                <span className="font-mono text-[10px] font-bold text-text-primary/30 bg-card-bg px-2 py-1 rounded">
                  fx
                </span>
                <span className="font-mono text-[10px] text-text-primary/35">
                  {feature.formula}
                </span>
              </div>

              <span className="text-3xl">{feature.icon}</span>

              <h3 className="font-mono text-lg font-semibold mt-4 mb-2 text-text-primary">
                {feature.title}
              </h3>

              <p className="font-mono text-sm text-text-primary/50 leading-relaxed">
                {feature.description}
              </p>

              {/* Screenshot placeholder */}
              <div className="mt-6 w-full aspect-[9/16] max-w-[180px] mx-auto rounded-2xl border-2 border-dashed border-text-primary/[0.06] flex items-center justify-center bg-white/50">
                <p className="font-mono text-[9px] text-text-primary/15 text-center px-4">
                  SCREENSHOT
                  <br />
                  PLACEHOLDER
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

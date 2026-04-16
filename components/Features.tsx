"use client";

import { motion } from "framer-motion";

type Feature = {
  image: string;
  imageAlt: string;
  formula: string;
  dept: string;
  title: string;
  description: string;
  strikethrough?: string;
  descriptionSuffix?: string;
};

const features: Feature[] = [
  {
    image: "/screenshots/2.png",
    imageAlt: "Hardly Working break timer running, with reclaimed wages counting up in real time",
    formula: "=SUM(today_reclaimed)",
    dept: "DEPT. OF TIME RECLAMATION",
    title: "The Break Timer",
    description:
      "Ten pre-approved activity codes. One tap to start a session. One tap to stop. The dollar value of your non-productive time accumulates in real time. Every entry is filed automatically.",
  },
  {
    image: "/screenshots/3.png",
    imageAlt: "Country and industry rankings screen showing global slacking benchmarks",
    formula: "=PERCENTILE(you, everyone)",
    dept: "DEPT. OF COMPETITIVE ANALYSIS",
    title: "Industry Benchmarks",
    description:
      "Compare your reclamation rate against anonymous global data. See which countries slack hardest. See which industries lead in Doom Scrolling. No one is told where you personally rank.",
  },
  {
    image: "/screenshots/4.png",
    imageAlt: "Reclamation Unit leaderboard showing coworkers ranked by reclaimed wages",
    formula: "=RANK(you, unit)",
    dept: "DEPT. OF GROUP OPERATIONS",
    title: "Reclamation Units",
    description:
      "Form a private unit with your coworkers. Generate a QR code invite. Run weekly leaderboards. Hold each other accountable through shared professional negligence. Visible only to members.",
  },
  {
    image: "/screenshots/5.png",
    imageAlt: "Employee commendations screen showing achievement tiers",
    formula: "=COUNTA(commendations)",
    dept: "DEPT. OF EMPLOYEE RECOGNITION",
    title: "Employee Commendations",
    description:
      "Fifteen commendations across five rarity tiers. Awarded automatically for sustained underachievement. Legendary-tier awarded rarely, silently, and without warning. Displayed in your personnel file.",
  },
  {
    image: "/screenshots/6.png",
    imageAlt: "Personnel dossier screen showing employee ID, clearance level, and reclamation history",
    formula: "=LOOKUP(employee_id)",
    dept: "DEPT. OF RECORDS",
    title: "Personnel File",
    description:
      "Your Employee ID is issued on enrollment. Your clearance level is earned through accumulated service. Your full reclamation history is stored locally on your device. HR does not have access.",
  },
  {
    image: "/screenshots/7.png",
    imageAlt: "Career performance dashboard showing day, week, month, year, and lifetime reports",
    formula: "=SUM(career_reclaimed)",
    dept: "DEPT. OF ANALYTICS",
    title: "Performance Dashboard",
    description:
      "Day, week, month, year, and lifetime reports. Personal records. Category rankings. Audit findings. Watch your career of strategic underachievement unfold in beautiful charts. Management would ",
    strikethrough: "not",
    descriptionSuffix: " be impressed.",
  },
];

const row = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function Features() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="font-mono text-xl sm:text-2xl font-extrabold tracking-[0.15em] uppercase text-text-primary/70 text-center mb-4">
          EMPLOYEE TOOLKIT
        </p>
        <p className="font-mono text-sm text-text-primary/50 text-center mb-20 max-w-md mx-auto">
          Every new hire receives access to our full suite of time reclamation tools.
        </p>

        <div className="space-y-24 md:space-y-32">
          {features.map((feature, index) => {
            const imageOnLeft = index % 2 === 0;

            return (
              <motion.div
                key={feature.title}
                variants={row}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
                className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center"
              >
                {/* Screenshot */}
                <div
                  className={`flex justify-center ${
                    imageOnLeft ? "md:order-1" : "md:order-2"
                  }`}
                >
                  <img
                    src={feature.image}
                    alt={feature.imageAlt}
                    loading="lazy"
                    width={1320}
                    height={2868}
                    className="w-full max-w-[280px] sm:max-w-[320px] h-auto rounded-[28px] shadow-[0_25px_60px_-20px_rgba(29,53,87,0.25)]"
                  />
                </div>

                {/* Copy */}
                <div
                  className={`${
                    imageOnLeft ? "md:order-2" : "md:order-1"
                  } text-center md:text-left`}
                >
                  {/* Formula bar */}
                  <div className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-md border border-text-primary/[0.06] bg-card-bg/60">
                    <span className="font-mono text-[10px] font-bold text-text-primary/50">
                      fx
                    </span>
                    <span className="font-mono text-[11px] text-text-primary/55">
                      {feature.formula}
                    </span>
                  </div>

                  <p className="font-mono text-[11px] text-dead-blue/65 tracking-wider uppercase mb-2">
                    {feature.dept}
                  </p>

                  <h3 className="font-mono text-2xl sm:text-3xl font-semibold text-text-primary mb-4 leading-tight">
                    {feature.title}
                  </h3>

                  <p className="font-mono text-sm sm:text-base text-text-primary/60 leading-relaxed max-w-md mx-auto md:mx-0">
                    {feature.description}
                    {feature.strikethrough && (
                      <span className="line-through opacity-50">
                        {feature.strikethrough}
                      </span>
                    )}
                    {feature.descriptionSuffix}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

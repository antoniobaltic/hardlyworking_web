"use client";

import { useCallback, useEffect, useState } from "react";
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
    imageAlt:
      "Hardly Working break timer running, with reclaimed wages counting up in real time",
    formula: "=SUM(today_reclaimed)",
    dept: "DEPT. OF TIME RECLAMATION",
    title: "The Break Timer",
    description:
      "Ten pre-approved activity codes. One tap to start a session. One tap to stop. The dollar value of your non-productive time accumulates in real time. Every entry is filed automatically.",
  },
  {
    image: "/screenshots/3.png",
    imageAlt:
      "Career performance dashboard showing day, week, month, year, and lifetime reports",
    formula: "=SUM(career_reclaimed)",
    dept: "DEPT. OF ANALYTICS",
    title: "Performance Dashboard",
    description:
      "Day, week, month, year, and lifetime reports. Personal records. Category rankings. Audit findings. Watch your career of strategic underachievement unfold in beautiful charts. Management would ",
    strikethrough: "not",
    descriptionSuffix: " be impressed.",
  },
  {
    image: "/screenshots/4.png",
    imageAlt: "Employee commendations screen showing achievement tiers",
    formula: "=COUNTA(commendations)",
    dept: "DEPT. OF EMPLOYEE RECOGNITION",
    title: "Employee Commendations",
    description:
      "Fifteen commendations across five rarity tiers. Awarded automatically for sustained underachievement. Legendary-tier awarded rarely, silently, and without warning. Displayed in your personnel file.",
  },
  {
    image: "/screenshots/5.png",
    imageAlt:
      "Personnel dossier screen showing employee ID, clearance level, and reclamation history",
    formula: "=LOOKUP(employee_id)",
    dept: "DEPT. OF RECORDS",
    title: "Personnel File",
    description:
      "Your Employee ID is issued on enrollment. Your clearance level is earned through accumulated service. Your full reclamation history is stored locally on your device. HR does not have access.",
  },
  {
    image: "/screenshots/6.png",
    imageAlt:
      "Country and industry rankings screen showing global slacking benchmarks",
    formula: "=PERCENTILE(you, everyone)",
    dept: "DEPT. OF COMPETITIVE ANALYSIS",
    title: "Industry Benchmarks",
    description:
      "Compare your reclamation rate against anonymous global data. See which countries slack hardest. See which industries lead in Doom Scrolling. No one is told where you personally rank.",
  },
  {
    image: "/screenshots/7.png",
    imageAlt:
      "Reclamation Unit leaderboard showing coworkers ranked by reclaimed wages",
    formula: "=RANK(you, unit)",
    dept: "DEPT. OF GROUP OPERATIONS",
    title: "Reclamation Units",
    description:
      "Form a private unit with your coworkers. Generate a QR code invite. Run weekly leaderboards. Hold each other accountable through shared professional negligence. Visible only to members.",
  },
];

// Swipe gesture threshold — how far (px) a horizontal drag needs to travel
// before it counts as a "next" / "prev" intent. Lower = too jumpy.
const SWIPE_THRESHOLD = 60;

export default function Features() {
  const [index, setIndex] = useState(0);
  // Direction is used by the slide animation: +1 advances right-to-left,
  // -1 goes left-to-right. Reset after every transition.
  const [direction, setDirection] = useState(0);

  const total = features.length;

  const goTo = useCallback(
    (next: number) => {
      const clamped = (next + total) % total;
      setDirection(clamped > index || (clamped === 0 && index === total - 1) ? 1 : -1);
      setIndex(clamped);
    },
    [index, total],
  );

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  // Keyboard navigation — left/right arrows when this section is focused.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      // Ignore when user is typing in an input/textarea elsewhere.
      const target = e.target as HTMLElement | null;
      if (
        target?.tagName === "INPUT" ||
        target?.tagName === "TEXTAREA" ||
        target?.isContentEditable
      ) {
        return;
      }
      if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  const feature = features[index];

  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="font-mono text-xl sm:text-2xl font-extrabold tracking-[0.15em] uppercase text-text-primary/70 text-center mb-4">
          EMPLOYEE TOOLKIT
        </p>
        <p className="font-mono text-sm text-text-primary/50 text-center mb-12 max-w-md mx-auto">
          Every new hire receives access to our full suite of time
          reclamation tools.
        </p>

        {/* Gallery */}
        <div className="relative">
          {/* Arrow buttons — absolute, vertically centered on the slide.
              Hidden on small screens since drag-to-swipe is the primary
              input there. Still keyboard-accessible via tab + enter. */}
          <button
            type="button"
            onClick={prev}
            aria-label="Previous feature"
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-8 z-10 w-11 h-11 items-center justify-center rounded-full bg-white border border-text-primary/[0.08] text-text-primary/60 hover:text-text-primary hover:border-text-primary/20 hover:shadow-md transition-all"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next feature"
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-8 z-10 w-11 h-11 items-center justify-center rounded-full bg-white border border-text-primary/[0.08] text-text-primary/60 hover:text-text-primary hover:border-text-primary/20 hover:shadow-md transition-all"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          {/* Slide viewport. overflow-hidden clips the drag overflow. */}
          <div className="overflow-hidden">
            {/* Drag layer — separate from the keyed content layer so the
                drag handlers don't get torn down on slide change. */}
            <motion.div
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              dragSnapToOrigin
              onDragEnd={(_, info) => {
                if (info.offset.x < -SWIPE_THRESHOLD) next();
                else if (info.offset.x > SWIPE_THRESHOLD) prev();
              }}
              className="cursor-grab active:cursor-grabbing"
            >
              {/* Content layer — re-mounts on index change via key, so the
                  fade+slide animation triggers cleanly on navigation. */}
              <motion.div
                key={index}
                initial={{ x: direction > 0 ? 40 : direction < 0 ? -40 : 0, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 34 },
                  opacity: { duration: 0.25 },
                }}
                className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center"
              >
                {/* Screenshot — always left on desktop */}
                <div className="flex justify-center md:justify-start select-none">
                  <img
                    src={feature.image}
                    alt={feature.imageAlt}
                    draggable={false}
                    width={1320}
                    height={2868}
                    className="w-full max-w-[260px] sm:max-w-[300px] md:max-w-[320px] h-auto rounded-[28px] shadow-[0_25px_60px_-20px_rgba(29,53,87,0.25)] pointer-events-none"
                  />
                </div>

                {/* Copy — always right on desktop */}
                <div className="text-center md:text-left">
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
            </motion.div>
          </div>
        </div>

        {/* Dot indicators — clickable, also show current position */}
        <div className="flex justify-center items-center gap-2 mt-10">
          {features.map((f, i) => {
            const active = i === index;
            return (
              <button
                key={f.title}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to feature ${i + 1}: ${f.title}`}
                aria-current={active ? "true" : undefined}
                className={`h-1.5 rounded-full transition-all ${
                  active
                    ? "w-8 bg-dead-blue"
                    : "w-1.5 bg-text-primary/20 hover:bg-text-primary/40"
                }`}
              />
            );
          })}
        </div>

        {/* Counter — small, below dots */}
        <p className="font-mono text-[10px] text-text-primary/40 text-center mt-4 tabular-nums">
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </p>
      </div>
    </section>
  );
}

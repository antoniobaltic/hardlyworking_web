"use client";

import { motion } from "framer-motion";

const recentMemos = [
  {
    slug: "were-hiring",
    ref: "MEMO-2026-010",
    date: "Apr 11",
    title: "We're Hiring: A Message from the Chief Slacking Officer",
    excerpt:
      "Hardly Working Corp. opens its doors to the public. The application is available for download.",
  },
  {
    slug: "the-case-for-doing-nothing",
    ref: "MEMO-2026-009",
    date: "Apr 7",
    title: "Employee Wellness Update: The Case for Doing Nothing",
    excerpt:
      "A final report from the dissolved Department of Employee Morale. On burnout, guilt, and strategic disengagement.",
  },
  {
    slug: "a-note-on-bullshit-jobs",
    ref: "MEMO-2026-008",
    date: "Apr 2",
    title: 'A Note on "Bullshit Jobs" — Required Reading',
    excerpt:
      "David Graeber identified five types of pointless work. The Department of Professional Development asks: which one is yours?",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

export default function RecentMemos() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="font-mono text-xl sm:text-2xl font-extrabold tracking-[0.15em] uppercase text-text-primary/70 text-center mb-4">
          RECENT MEMOS
        </p>
        <p className="font-mono text-sm text-text-primary/50 text-center mb-12">
          Latest dispatches from Internal Communications.
        </p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {recentMemos.map((memo) => (
            <motion.a
              key={memo.slug}
              href={`/memos/${memo.slug}`}
              variants={item}
              className="group block p-6 rounded-xl border border-text-primary/[0.04] bg-card-bg/30 hover:bg-card-bg/60 transition-colors duration-300"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="font-mono text-[10px] text-dead-blue/60 tracking-wider uppercase">
                  {memo.ref}
                </span>
                <span className="font-mono text-[10px] text-text-primary/40">
                  {memo.date}
                </span>
              </div>

              <h3 className="font-mono text-sm font-semibold text-text-primary group-hover:text-dead-blue transition-colors mb-2 leading-snug">
                {memo.title}
              </h3>

              <p className="font-mono text-xs text-text-primary/50 leading-relaxed">
                {memo.excerpt}
              </p>

              <p className="font-mono text-[10px] text-dead-blue/50 mt-4 group-hover:text-dead-blue/80 transition-colors">
                Read memo →
              </p>
            </motion.a>
          ))}
        </motion.div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          <a
            href="/memos"
            className="font-mono text-sm text-dead-blue hover:text-dead-blue/80 transition-colors"
          >
            View all memos →
          </a>
          <span className="font-mono text-xs text-text-primary/30 hidden sm:inline">
            ·
          </span>
          <a
            href="https://hardlyworkingcorp.substack.com/subscribe"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-dead-blue hover:text-dead-blue/80 transition-colors"
          >
            Subscribe to new memos →
          </a>
        </div>
      </div>
    </section>
  );
}

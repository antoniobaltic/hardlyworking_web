"use client";

import { motion } from "framer-motion";

const SUBSTACK_URL = "https://hardlyworkingcorp.substack.com/subscribe";

export default function MemoSubscribe() {
  return (
    <section
      className="py-20 px-6"
      style={{ background: "var(--card-bg)" }}
    >
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-[11px] text-dead-blue/60 tracking-wider uppercase mb-3">
            Dept. of Internal Communications
          </p>

          <h2 className="font-mono text-2xl sm:text-3xl font-semibold text-text-primary mb-4 leading-tight">
            Receive future memos.
          </h2>

          <p className="font-mono text-sm text-text-primary/55 leading-relaxed mb-8 max-w-md mx-auto">
            Hardly Working Corp. publishes internal memos on operations,
            research findings, and personnel matters. Distribution is
            semi-regular. Subscription is voluntary.
          </p>

          <a
            href={SUBSTACK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-mono text-sm font-semibold text-white bg-dead-blue px-7 py-3.5 rounded-xl hover:bg-dead-blue/90 transition-colors"
          >
            Request Enrollment →
          </a>

          <p className="font-mono text-[10px] text-text-primary/40 mt-5">
            Unsubscribe at any time. Subject to standard corporate discretion.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

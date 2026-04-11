"use client";

import { motion } from "framer-motion";

const APP_STORE_URL = "https://apps.apple.com/app/id6761917321";

export default function FinalCTA() {
  return (
    <section className="py-24 px-6" style={{ background: "var(--card-bg)" }}>
      <div className="max-w-2xl mx-auto text-center">
        {/* Mascot placeholder */}
        <motion.img
          src="/mascot_honest.png"
          alt="Hardly Working Corp. mascot"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-42 h-auto mx-auto mb-8 drop-shadow-md"
        />

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-text-primary mb-4"
        >
          Your orientation is complete!
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-mono text-sm text-text-primary/50 mb-10 max-w-lg mx-auto leading-relaxed"
        >
          Welcome to Hardly Working Corp. Download your employee handbook and start reclaiming immediately. Your other employer will never know. <span className="italic">Probably.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <a
            href={APP_STORE_URL}
            className="inline-flex items-center gap-3 bg-black text-white font-mono text-base font-semibold px-10 py-5 rounded-2xl hover:bg-black/85 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            Apply Now · Free on the App Store
          </a>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

const reviews = [
  {
    name: "Employee #4782",
    role: "Office Drone · Joined Q1 2026",
    avatar: "/avatar1.jpg",
    rating: 5,
    text: "Hardly Working Corp. has completely transformed my relationship with productivity. My quarterly output has never been lower. HR has questions.",
  },
  {
    name: "Anonymous Bureaucrat",
    role: "Bureaucrat · Joined Q2 2026",
    avatar: "/avatar2.jpg",
    rating: 5,
    text: "I reclaimed $2,400 last quarter. My real employer's performance review says I'm 'exceeding expectations.' Both statements are somehow true.",
  },
  {
    name: "Concerned Manager",
    role: "Suit & Tie · Joined Q1 2026",
    avatar: "/avatar3.jpg",
    rating: 4,
    text: "I downloaded this to understand what my team was doing. Now I use it more than they do. Requesting a transfer to the Reclamation Unit.",
  },
  {
    name: "Reformed Workaholic",
    role: "Tech Bro · Joined Q2 2026",
    avatar: "/avatar4.jpg",
    rating: 5,
    text: "Best employer I've ever had. The onboarding was seamless. I used to feel guilty about bathroom breaks. Now I feel empowered.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="font-mono text-xl sm:text-2xl font-extrabold tracking-[0.15em] uppercase text-text-primary/70 text-center mb-4">
          EMPLOYEE TESTIMONIALS
        </p>
        <p className="font-mono text-xs text-text-primary/50 text-center mb-12">
          FORM ES-4782 | REV. 3.1 | HARDLY WORKING CORP. DEPT. OF MORALE
        </p>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {reviews.map((review) => (
            <motion.div
              key={review.name}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
              }}
              className="p-6 rounded-xl border border-text-primary/[0.04] bg-card-bg/30 hover:bg-card-bg/50 transition-colors"
            >
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <span key={i} className="text-caution-yellow text-sm">
                    ★
                  </span>
                ))}
                {Array.from({ length: 5 - review.rating }).map((_, i) => (
                  <span key={i} className="text-text-primary/20 text-sm">
                    ★
                  </span>
                ))}
              </div>

              <p className="font-mono text-sm text-text-primary/60 leading-relaxed mb-4">
                &ldquo;{review.text}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-10 h-10 rounded-full object-cover border border-text-primary/[0.06]"
                />
                <div>
                  <p className="font-mono text-xs font-semibold text-text-primary/60">
                    {review.name}
                  </p>
                  <p className="font-mono text-[10px] text-text-primary/50">
                    {review.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <p className="font-mono text-[10px] text-text-primary/50 text-center mt-8">
          * All testimonials are from fictional Hardly Working Corp. employees.
          Any resemblance to your actual coworkers is purely coincidental.
        </p>
      </div>
    </section>
  );
}

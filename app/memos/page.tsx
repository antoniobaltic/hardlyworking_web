import Link from "next/link";

export const metadata = {
  title: "Memos — Hardly Working Corp. Internal Communications",
  description:
    "Official memos from Hardly Working Corp. — insights on slacking, time reclamation, workplace culture, and the art of not working. The company newsletter nobody asked for.",
  openGraph: {
    title: "Memos — Hardly Working Corp.",
    description:
      "Official internal communications from the world's leading time reclamation firm.",
  },
};

// Future memos will be added here as data
const memos: {
  slug: string;
  ref: string;
  date: string;
  title: string;
  excerpt: string;
  readTime: string;
}[] = [];

export default function Memos() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto px-6 py-20">
        <Link
          href="/"
          className="font-mono text-xs text-dead-blue hover:text-dead-blue/70 transition-colors"
        >
          ← Back to Home
        </Link>

        <div className="mt-8 mb-4">
          <p className="font-mono text-xs text-text-primary/40 tracking-widest uppercase mb-2">
            Internal Communications
          </p>
          <h1 className="text-3xl font-bold text-text-primary">
            Memos
          </h1>
        </div>
        <p className="font-mono text-xs text-text-primary/50 mb-12">
          Official dispatches from Hardly Working Corp. headquarters.
        </p>

        {memos.length > 0 ? (
          <div className="space-y-0">
            {memos.map((memo) => (
              <Link
                key={memo.slug}
                href={`/memos/${memo.slug}`}
                className="block group border-b border-text-primary/[0.06] last:border-b-0"
              >
                <div className="py-6 transition-colors group-hover:bg-card-bg/30 -mx-4 px-4 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono text-[10px] text-dead-blue/60 tracking-wider uppercase">
                      {memo.ref}
                    </span>
                    <span className="font-mono text-[10px] text-text-primary/30">
                      {memo.date}
                    </span>
                    <span className="font-mono text-[10px] text-text-primary/30">
                      {memo.readTime}
                    </span>
                  </div>
                  <h2 className="font-mono text-base font-semibold text-text-primary group-hover:text-dead-blue transition-colors mb-2">
                    {memo.title}
                  </h2>
                  <p className="font-mono text-sm text-text-primary/50 leading-relaxed">
                    {memo.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="font-mono text-4xl text-text-primary/[0.08] font-bold mb-4">
              #N/A
            </p>
            <p className="font-mono text-sm text-text-primary/40 mb-2">
              No memos have been issued yet.
            </p>
            <p className="font-mono text-xs text-text-primary/30">
              The Department of Internal Communications is currently
              on a break. Check back soon.
            </p>
          </div>
        )}

        <div className="mt-16 pt-8 border-t border-text-primary/[0.04]">
          <p className="font-mono text-[10px] text-text-primary/30 text-center">
            HARDLY WORKING CORP. · DEPT. OF INTERNAL COMMUNICATIONS · EST. 2026
          </p>
        </div>
      </div>
    </div>
  );
}

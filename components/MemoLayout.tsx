import Link from "next/link";

export default function MemoLayout({
  memoRef,
  date,
  title,
  classification,
  department,
  readTime,
  children,
}: {
  memoRef: string;
  date: string;
  title: string;
  classification?: string;
  department?: string;
  readTime: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto px-6 py-20">
        <Link
          href="/memos"
          className="font-mono text-xs text-dead-blue hover:text-dead-blue/70 transition-colors"
        >
          ← All Memos
        </Link>

        {/* Header */}
        <div className="mt-8 mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="font-mono text-[11px] text-dead-blue/60 tracking-wider uppercase">
              {memoRef}
            </span>
            <span className="font-mono text-[11px] text-text-primary/40">
              {date}
            </span>
            <span className="font-mono text-[11px] text-text-primary/40">
              {readTime}
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold text-text-primary leading-tight mb-4">
            {title}
          </h1>

          <div className="flex flex-wrap gap-3 font-mono text-[10px] text-text-primary/35 tracking-wider uppercase">
            {department && <span>{department}</span>}
            {classification && (
              <>
                <span>·</span>
                <span>Classification: {classification}</span>
              </>
            )}
          </div>
        </div>

        {/* Body */}
        <div className="font-mono text-sm text-text-primary/70 leading-relaxed space-y-5 [&_h2]:text-base [&_h2]:font-semibold [&_h2]:text-text-primary [&_h2]:mt-8 [&_h2]:mb-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:space-y-2 [&_blockquote]:border-l-2 [&_blockquote]:border-dead-blue/20 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-text-primary/50 [&_strong]:text-text-primary/80 [&_em]:text-text-primary/60">
          {children}
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-text-primary/[0.04]">
          <p className="font-mono text-[10px] text-text-primary/30 text-center">
            HARDLY WORKING CORP. · DEPT. OF INTERNAL COMMUNICATIONS · EST. 2026
          </p>
          <div className="mt-6 text-center">
            <Link
              href="/memos"
              className="font-mono text-xs text-dead-blue hover:text-dead-blue/70 transition-colors"
            >
              ← Back to all memos
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

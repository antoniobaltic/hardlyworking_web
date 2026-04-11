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
}[] = [
  {
    slug: "were-hiring",
    ref: "MEMO-2026-010",
    date: "April 11, 2026",
    title: "We're Hiring: A Message from the Chief Slacking Officer",
    excerpt:
      "Today, Hardly Working Corp. opens its doors to the public. The app is live. Your time has value, even when your employer says it doesn't.",
    readTime: "3 min",
  },
  {
    slug: "the-case-for-doing-nothing",
    ref: "MEMO-2026-009",
    date: "April 7, 2026",
    title: "Employee Wellness Update: The Case for Doing Nothing",
    excerpt:
      "A final report from the dissolved Department of Employee Morale. On burnout, guilt, and why the system — not you — is the problem.",
    readTime: "4 min",
  },
  {
    slug: "a-note-on-bullshit-jobs",
    ref: "MEMO-2026-008",
    date: "April 2, 2026",
    title: 'A Note on "Bullshit Jobs" — Required Reading for All Departments',
    excerpt:
      "David Graeber identified five types of pointless work. The Department of Professional Development asks: which one is yours?",
    readTime: "5 min",
  },
  {
    slug: "q1-performance-report",
    ref: "MEMO-2026-007",
    date: "March 31, 2026",
    title: "Q1 Performance Report: State of the Workforce",
    excerpt:
      "Sector breakdowns, category rankings, and the revelation that Looking Busy grew 340% quarter-over-quarter. Presented with the gravity of an earnings call.",
    readTime: "5 min",
  },
  {
    slug: "the-reclamation-index",
    ref: "MEMO-2026-006",
    date: "March 25, 2026",
    title: "The Reclamation Index: Why We Don't Say 'Stealing'",
    excerpt:
      "A corporate language policy that accidentally makes the case that your employer is the one doing the taking. The politeness is the critique.",
    readTime: "4 min",
  },
  {
    slug: "on-the-subject-of-bathroom-breaks",
    ref: "MEMO-2026-005",
    date: "March 18, 2026",
    title: "On the Subject of Bathroom Breaks",
    excerpt:
      "Bathroom breaks account for 11.3% of reclaimed time. The Department of Analytics has concerns. Management does not share them. Some things are sacred.",
    readTime: "3 min",
  },
  {
    slug: "approved-activity-codes",
    ref: "MEMO-2026-004",
    date: "March 10, 2026",
    title: "Approved Activity Codes: A Classification Guide",
    excerpt:
      "The official guide to the 10 activity categories — from Coffee Run to Into the Void. Each one described with the gravity of a corporate compliance manual.",
    readTime: "4 min",
  },
  {
    slug: "the-2-9-hour-finding",
    ref: "MEMO-2026-003",
    date: "February 28, 2026",
    title: "Department of Research: The 2.9-Hour Finding",
    excerpt:
      "The average employee is productive for 2 hours and 53 minutes per day. The productivity industry spent $102 billion trying to change this. It didn't work.",
    readTime: "4 min",
  },
  {
    slug: "what-counts-as-work",
    ref: "MEMO-2026-002",
    date: "February 14, 2026",
    title: 'Q1 Employee Handbook: What Counts as "Work"?',
    excerpt:
      "An attempt to define 'work' that fails philosophically and succeeds diagnostically. Includes an 8-question self-assessment. Score 6+ and you're one of us.",
    readTime: "4 min",
  },
  {
    slug: "notice-of-incorporation",
    ref: "MEMO-2026-001",
    date: "February 2, 2026",
    title: "Notice of Incorporation: Hardly Working Corp. Is Open for Business",
    excerpt:
      "The founding announcement. A bland corporate press release about a new time reclamation firm — and a quiet manifesto about the gap between employment and productivity.",
    readTime: "3 min",
  },
];

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

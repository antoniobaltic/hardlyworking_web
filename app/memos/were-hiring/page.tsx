import MemoLayout from "@/components/MemoLayout";

export const metadata = {
  title: "We're Hiring: A Message from the CSO — Hardly Working Corp.",
  description:
    "The launch announcement of Hardly Working — a free iOS break timer and wage calculator. A letter from the Chief Slacking Officer to all future employees.",
};

export default function Memo() {
  return (
    <MemoLayout
      memoRef="MEMO-2026-010"
      date="April 11, 2026"
      title="We&rsquo;re Hiring: A Message from the Chief Slacking Officer"
      department="Office of the CSO"
      classification="All-Hands"
      readTime="3 min read"
    >
      <p>
        To all employees, past, present, and future,
      </p>

      <p>
        Today, Hardly Working Corp. opens its doors to the public.
      </p>

      <p>
        The app is live on the{" "}
        <a
          href="https://apps.apple.com/app/id6761917321"
          target="_blank"
          rel="noopener noreferrer"
          className="text-dead-blue underline underline-offset-2"
        >
          iOS App Store
        </a>
        . It is free to download. It takes thirty seconds to set up. It does
        not require your employer&apos;s permission, your manager&apos;s
        approval, or anyone&apos;s consent but your own.
      </p>

      <h2>What We Built</h2>

      <p>
        A break timer. A wage calculator. A way to see, in plain numbers,
        what your non-productive time is worth.
      </p>

      <p>
        Ten activity categories — from Coffee Run to Into the Void. Dashboards
        that show your day, your week, your career. Benchmarks that tell you
        how you compare to professionals in your country and industry. Friend
        groups where you and your coworkers can hold each other accountable
        through shared professional negligence.
      </p>

      <p>
        And underneath all of it, a simple idea: your time has value, even
        when your employer says it doesn&apos;t.
      </p>

      <h2>Why We Built It</h2>

      <p>
        I started this project in February because I was tired of pretending.
      </p>

      <p>
        Pretending that eight hours of presence equals eight hours of work.
        Pretending that staring at a screen is the same as thinking. Pretending
        that the guilt I felt about a fifteen-minute coffee break was rational
        when three hours of my day were spent in meetings that produced nothing.
      </p>

      <p>
        I looked for an app that would track the real shape of my workday —
        not the productive hours, but the other ones. The ones nobody counts.
        The ones that, if I was being honest, made up the majority of my time.
      </p>

      <p>
        That app did not exist. So I built it.
      </p>

      <h2>Thank You</h2>

      <p>
        To the founding employees who tested early builds, filed bugs, and
        sent me screenshots of their reclamation totals at midnight: thank
        you. You are the reason this works.
      </p>

      <p>
        To everyone downloading today: welcome to the firm. Your orientation
        is brief. Your expectations are zero. Your time is yours.
      </p>

      <h2>What&apos;s Next</h2>

      <p>
        More features. More benchmarks. More ways to understand how you
        spend the hours between 9 and 5.
      </p>

      <p>
        But first: open the app. Start a timer. Pick a category. Watch the
        number tick up. That number is yours. It always was.
      </p>

      <p>
        The Department of Employee Morale has been permanently dissolved.
        In its place, we offer something better: honesty.
      </p>

      <p>
        We&apos;re hiring. No experience required.
      </p>

      <p>
        <em>
          — Antonio Baltic
          <br />
          Chief Slacking Officer
          <br />
          Hardly Working Corp.
          <br />
          Graz, Austria
        </em>
      </p>
    </MemoLayout>
  );
}

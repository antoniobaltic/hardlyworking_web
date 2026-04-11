import MemoLayout from "@/components/MemoLayout";

export const metadata = {
  title: "Notice of Incorporation — Hardly Working Corp.",
  description:
    "Official founding announcement of Hardly Working Corp., the world's leading time reclamation firm. February 2, 2026.",
};

export default function Memo() {
  return (
    <MemoLayout
      memoRef="MEMO-2026-001"
      date="February 2, 2026"
      title="Notice of Incorporation: Hardly Working Corp. Is Open for Business"
      department="Office of the Founder"
      classification="Public"
      readTime="3 min read"
    >
      <p>
        To all future employees,
      </p>

      <p>
        It is with measured enthusiasm that we announce the formation of{" "}
        <strong>Hardly Working Corp.</strong>, a time reclamation solutions firm
        headquartered in Graz, Austria. Effective immediately, the company is
        open for enrollment.
      </p>

      <p>
        Our mission is straightforward: to quantify the gap between employment
        and productivity, and to provide every professional with the tools to
        understand what that gap is worth.
      </p>

      <h2>The Problem</h2>

      <p>
        Modern employment operates on a simple arrangement. You agree to be
        somewhere for eight hours. Your employer agrees to pay you for eight
        hours. What happens during those eight hours is, statistically speaking,
        not eight hours of work.
      </p>

      <p>
        Studies suggest the average knowledge worker is genuinely productive for
        roughly three hours per day. The remaining five are spent in meetings
        that could have been emails, emails that could have been nothing, and a
        persistent low-grade performance of looking busy.
      </p>

      <p>
        Nobody talks about this. Everyone knows.
      </p>

      <h2>The Solution</h2>

      <p>
        Hardly Working Corp. does not solve this problem. We are not in the
        business of making you more productive. There are plenty of apps for
        that, and you have ignored all of them.
      </p>

      <p>
        Instead, we offer a tool that does something no productivity app has ever
        done: track the other hours. The ones between tasks. The coffee runs. The
        bathroom scrolls. The long lunches. The staring.
      </p>

      <p>
        We track them, we categorize them, and we calculate exactly how much
        they are worth at your hourly rate. Not to make you feel guilty. To make
        you feel informed.
      </p>

      <h2>What We Believe</h2>

      <p>
        We believe your time has value — even the time your employer considers
        wasted. Especially that time.
      </p>

      <p>
        We believe the modern workplace runs on a polite fiction: that being
        present equals being productive. We do not intend to dismantle this
        fiction. We simply intend to measure it.
      </p>

      <p>
        We believe that if you are going to spend a third of your life at work,
        you deserve to know exactly how much of that time was yours.
      </p>

      <h2>What Happens Next</h2>

      <p>
        In the coming weeks, we will be rolling out the Hardly Working
        application on iOS. It is free to use. It does not require your
        employer&apos;s permission. It does not share your data with anyone —
        especially not your employer.
      </p>

      <p>
        If this sounds like something you need, it probably is.
      </p>

      <p>
        Welcome to the firm.
      </p>

      <p>
        <em>
          — Antonio Baltic
          <br />
          Chief Slacking Officer
          <br />
          Hardly Working Corp.
        </em>
      </p>
    </MemoLayout>
  );
}

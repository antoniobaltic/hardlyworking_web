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

      <h2>Background</h2>

      <p>
        Hardly Working Corp. was incorporated in February 2026 after a routine
        market analysis identified a gap in available tooling. Existing time
        tracking solutions focused exclusively on productive output.
        Non-productive time — which, per Department of Research findings
        (MEMO-2026-003), constitutes the majority of a standard workday —
        remained untracked and unquantified.
      </p>

      <p>
        This was determined to be a significant oversight. Development
        commenced. The product is now available.
      </p>

      <h2>Acknowledgments</h2>

      <p>
        The founding employee cohort provided extensive testing data and
        operational feedback during the pre-launch period. Their contributions
        have been noted in their personnel files.
      </p>

      <p>
        New employees downloading today are welcomed to the firm. Orientation
        materials are available in-app. No prior experience is required.
      </p>

      <h2>What&apos;s Next</h2>

      <p>
        More features. More benchmarks. More ways to understand how you
        spend the hours between 9 and 5.
      </p>

      <p>
        Standard onboarding procedure: install the application, initialize a
        timer, select an activity code. The system will handle the rest.
      </p>

      <p>
        The Department of Employee Morale has been permanently dissolved.
        Its functions have not been reassigned.
      </p>

      <p>
        We&apos;re hiring. No experience required. No questions asked.
      </p>

      <p>
        <em>
          — J. Pemberton
          <br />
          Chief Slacking Officer
          <br />
          Hardly Working Corp.
        </em>
      </p>
    </MemoLayout>
  );
}

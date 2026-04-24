import MemoLayout from "@/components/MemoLayout";

export const metadata = {
  title: "On the Subject of Bathroom Breaks — Hardly Working Corp.",
  description:
    "Hardly Working Corp. addresses the analytics department's concerns about bathroom break duration. A memo on workplace surveillance, privacy, and the human right to scroll in peace.",
};

export default function Memo() {
  return (
    <MemoLayout
      memoRef="MEMO-2026-005"
      date="March 18, 2026"
      title="On the Subject of Bathroom Breaks"
      department="Dept. of Analytics"
      classification="Sensitive"
      readTime="3 min read"
    >
      <p>
        To all departments,
      </p>

      <p>
        The Department of Analytics has flagged a trend in the Q1 reclamation
        data that requires company-wide acknowledgment.
      </p>

      <p>
        Bathroom breaks now account for <strong>11.3%</strong>{" "}
        of all reclaimed time across the Hardly Working employee base. This
        represents a 2.1 percentage point increase from our February baseline,
        and positions the bathroom as the third most popular reclamation venue
        after &ldquo;desk&rdquo; and &ldquo;break room.&rdquo;
      </p>

      <h2>The Data</h2>

      <p>
        Average bathroom break duration has increased from 4.2 minutes in
        pre-smartphone studies to an estimated 8.9 minutes in our current
        dataset. The Department of Analytics attributes this increase to what
        it clinically refers to as &ldquo;secondary screen engagement during
        primary biological functions.&rdquo;
      </p>

      <p>
        In plain language: people are on their phones.
      </p>

      <p>
        This is not a revelation. This is a statistic.
      </p>

      <h2>The Concern</h2>

      <p>
        Several members of the Analytics team have asked whether Hardly Working
        Corp. should address this trend — whether through awareness campaigns,
        suggested time limits, or gentle nudges within the application.
      </p>

      <p>
        The answer is no.
      </p>

      <h2>Our Position</h2>

      <p>
        Hardly Working Corp. does not monitor, regulate, or express opinions
        about how its employees spend their bathroom time. This policy is
        non-negotiable.
      </p>

      <p>
        We note that a growing number of employers have installed timed locks
        on bathroom stalls, placed bathroom usage on performance dashboards,
        or designed office layouts where the bathroom is visible from the
        manager&apos;s desk. These practices are documented in our files.
        We have no further comment.
      </p>

      <p>
        If an employee chooses to spend nine minutes in the bathroom instead
        of four, this falls outside the scope of organizational review. The
        matter is between the employee, their phone, and their digestive
        system.
      </p>

      <h2>Recommendation</h2>

      <p>
        The Department of Analytics is instructed to continue tracking
        bathroom break data for aggregate benchmarking purposes only.
        Individual bathroom durations will not be surfaced, ranked, or
        compared.
      </p>

      <p>
        Employees are reminded that they may log their bathroom time under
        Code 02 (Bathroom Break) without further detail. The system does not
        ask what you were doing in there. It never will.
      </p>

      <p>
        This concludes the Department&apos;s assessment. No follow-up is
        required.
      </p>

      <p>
        <em>
          — Dept. of Analytics
          <br />
          Reviewed by: Dept. of Employee Morale (dissolved)
        </em>
      </p>
    </MemoLayout>
  );
}

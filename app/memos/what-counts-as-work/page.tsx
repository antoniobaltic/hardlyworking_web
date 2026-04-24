import MemoLayout from "@/components/MemoLayout";

export const metadata = {
  title: "Q1 Employee Handbook: What Counts as Work? — Hardly Working Corp.",
  description:
    "An attempt to define 'work' for Hardly Working Corp. employees. A philosophical HR document that asks the hard questions about workplace productivity.",
};

export default function Memo() {
  return (
    <MemoLayout
      memoRef="MEMO-2026-002"
      date="February 14, 2026"
      title='Q1 Employee Handbook: What Counts as "Work"?'
      department="Dept. of Human Resources"
      classification="Internal"
      readTime="4 min read"
    >
      <p>
        To all employees,
      </p>

      <p>
        As part of our Q1 onboarding process, the Department of Human Resources
        has been asked to provide a clear definition of &ldquo;work&rdquo; for
        classification purposes within the Hardly Working time reclamation
        system.
      </p>

      <p>
        After three weeks of internal deliberation, the Department has
        determined that this task presents unexpected definitional challenges.
      </p>

      <h2>The Diagnostic</h2>

      <p>
        Please answer the following questions about your current occupation.
        Responses are confidential and will not be reviewed by management.
      </p>

      <ol>
        <li>Does your daily output exist in a form that can be seen, touched, or measured?</li>
        <li>If you did not show up tomorrow, would anyone notice within 48 hours?</li>
        <li>Could you explain what you do to a stranger in one sentence without using jargon?</li>
        <li>Have you ever completed a task that was immediately undone by another department?</li>
        <li>Do you attend meetings about meetings?</li>
        <li>Has your job title changed more than twice without your responsibilities changing at all?</li>
        <li>Could a moderately trained golden retriever perform your core function?</li>
        <li>Have you ever spent an entire afternoon on something that was later described as &ldquo;no longer a priority&rdquo;?</li>
      </ol>

      <h2>Scoring</h2>

      <p>
        <strong>0–2 &ldquo;yes&rdquo; answers:</strong>{" "}
        You may be performing what economists call &ldquo;real work.&rdquo;{" "}
        This is unusual. Please report to the Department of Anomalies.
      </p>

      <p>
        <strong>3–5 &ldquo;yes&rdquo; answers:</strong> You are a standard
        knowledge worker. Your role is a complex blend of actual contribution
        and organizational theater. This is normal.
      </p>

      <p>
        <strong>6–8 &ldquo;yes&rdquo; answers:</strong> Welcome to Hardly
        Working Corp. You are exactly who we built this for.
      </p>

      <h2>A Note on Definitions</h2>

      <p>
        The Department of Human Resources has concluded that &ldquo;work&rdquo;
        cannot be meaningfully defined in the context of the modern office.
        Activities that appear productive (attending meetings, replying to
        emails, updating spreadsheets) may produce nothing. Activities that
        appear unproductive (staring out a window, taking a long walk, browsing
        the internet) may produce your best idea of the quarter.
      </p>

      <p>
        We have therefore abandoned the concept of defining work and will
        instead focus on defining <em>not-work</em>, which is significantly
        easier and more honest.
      </p>

      <p>
        Not-work is anything you do during paid hours that you would not
        describe to your manager with a straight face. This is what Hardly
        Working tracks.
      </p>

      <h2>Conclusion</h2>

      <p>
        Time spent reading this memo should be logged under the appropriate
        activity code.
      </p>

      <p>
        <em>
          — Dept. of Human Resources
          <br />
          (Currently on a coffee break)
        </em>
      </p>
    </MemoLayout>
  );
}

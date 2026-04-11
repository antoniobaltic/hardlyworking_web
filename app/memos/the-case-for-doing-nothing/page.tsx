import MemoLayout from "@/components/MemoLayout";

export const metadata = {
  title: "The Case for Doing Nothing — Hardly Working Corp.",
  description:
    "An employee wellness memo from Hardly Working Corp. arguing that strategic disengagement improves mental health, creativity, and job satisfaction. The system is the problem, not you.",
};

export default function Memo() {
  return (
    <MemoLayout
      memoRef="MEMO-2026-009"
      date="April 7, 2026"
      title="Employee Wellness Update: The Case for Doing Nothing"
      department="Dept. of Employee Morale (Dissolved)"
      classification="Wellness Advisory"
      readTime="4 min read"
    >
      <p>
        To all employees,
      </p>

      <p>
        This memo is issued posthumously by the Department of Employee Morale,
        which was formally dissolved in March 2026 due to budget constraints
        and a general consensus that morale cannot be administered from above.
      </p>

      <p>
        Before its dissolution, the Department completed one final report. We
        publish it here, unedited, as a matter of record.
      </p>

      <h2>The Problem with &ldquo;Productivity&rdquo;</h2>

      <p>
        The modern employee is expected to be productive for eight consecutive
        hours, five days a week, fifty weeks a year, for approximately forty
        years. This expectation has no basis in biology, psychology, or common
        sense.
      </p>

      <p>
        The human brain is not designed for sustained focus. Research
        consistently shows that cognitive performance degrades after 90 minutes
        of concentrated effort. Creativity requires idle time. Problem-solving
        improves after breaks. Memory consolidation happens during rest.
      </p>

      <p>
        And yet, the professional world has constructed an elaborate system of
        rewards and punishments designed to keep you at your desk, performing
        focus, for the entire duration of the workday — regardless of whether
        there is anything meaningful to focus on.
      </p>

      <h2>The Guilt</h2>

      <p>
        The following section addresses an underexamined variable.
      </p>

      <p>
        Not the idle time itself. The data on idle time is unambiguous (see
        MEMO-2026-003: The 2.9-Hour Finding). The variable that correlates
        with negative outcomes is the <em>psychological burden</em> associated
        with perceived non-productivity.
      </p>

      <p>
        The employee who spends twenty minutes scrolling their phone does not
        report reduced wellbeing from the scrolling itself. The reduction
        correlates with the belief that they should not be scrolling. They
        observe colleagues who appear busy and conclude that they alone
        deviate from the norm.
      </p>

      <p>
        Department analysis indicates that their colleagues are also scrolling.
        The norm is the deviation. This finding is consistent across all
        sectors.
      </p>

      <h2>What the Research Says</h2>

      <p>
        The Department of Employee Morale reviewed 47 studies on workplace
        wellbeing published between 2018 and 2025. The findings are consistent:
      </p>

      <ul>
        <li>
          <strong>Burnout</strong> is not caused by working too hard. It is
          caused by working without meaning, without autonomy, and without
          rest. The employee who does meaningful work for three hours and rests
          for five is healthier than the employee who performs meaningless work
          for eight.
        </li>
        <li>
          <strong>Guilt about unproductive time</strong> correlates with
          higher rates of anxiety, depression, and job dissatisfaction — even
          when the actual amount of unproductive time is identical between
          guilty and non-guilty groups.
        </li>
        <li>
          <strong>Employees who track their time</strong> (including
          non-productive time) report higher satisfaction than those who do
          not. The act of measurement replaces guilt with data. You cannot
          feel bad about a number.
        </li>
      </ul>

      <h2>Our Recommendation</h2>

      <p>
        Do nothing. Specifically:
      </p>

      <ul>
        <li>
          Coffee breaks should be taken without concurrent email monitoring.
        </li>
        <li>
          Window-facing intervals of five minutes or fewer are classified
          as cognitive processing time and require no justification.
        </li>
        <li>
          When no tasks are pending, no tasks should be fabricated.
          Presence fulfills the employment contract.
        </li>
        <li>
          Non-productive time should be tracked — not to reduce it, but to
          quantify it. Quantification has been shown to reduce the guilt
          of your colleagues is also doing.
        </li>
      </ul>

      <h2>A Final Word</h2>

      <p>
        The Department of Employee Morale was dissolved after standard
        intervention strategies (memos, catered events, team-building
        initiatives) were determined ineffective by internal review.
      </p>

      <p>
        Morale metrics correlate positively with autonomy, transparency, and
        the absence of surveillance protocols. These findings are consistent
        across the literature and require no further elaboration.
      </p>

      <p>
        Hardly Working Corp. does not modify workplace conditions. The tool
        provides measurement. Measurement replaces assumption. Beyond that,
        outcomes are user-specific and outside departmental scope.
      </p>

      <p>
        <em>
          — Dept. of Employee Morale
          <br />
          Status: Dissolved
          <br />
          Final act: This memo
          <br />
          No further communications will be issued.
        </em>
      </p>
    </MemoLayout>
  );
}

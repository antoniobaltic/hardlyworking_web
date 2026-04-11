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
        This is the part no one talks about.
      </p>

      <p>
        Not the slacking itself. Everyone slacks. The data is unambiguous (see
        MEMO-2026-003: The 2.9-Hour Finding). What damages people is not the
        idle time — it is the <em>guilt</em> they feel about it.
      </p>

      <p>
        The employee who spends twenty minutes scrolling their phone does not
        suffer because of the scrolling. They suffer because they believe they
        should not be scrolling. They look around the office, see colleagues
        who appear busy, and conclude that they alone are the problem.
      </p>

      <p>
        They are not the problem. Their colleagues are also scrolling. Everyone
        is performing. The performance is the problem.
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
          Take your coffee break without checking your email during it.
        </li>
        <li>
          Stare out the window for five minutes and call it what it is:
          necessary.
        </li>
        <li>
          When there is nothing to do, do nothing. Do not invent busywork
          to justify your salary. Your salary is justified. You showed up.
        </li>
        <li>
          Track your non-productive time. Not to minimize it. To understand
          it. To stop feeling guilty about something that every single one
          of your colleagues is also doing.
        </li>
      </ul>

      <h2>A Final Word</h2>

      <p>
        The Department of Employee Morale was dissolved because the company
        concluded that morale is not something you can fix with memos, pizza
        parties, or mandatory fun. We agree with this assessment.
      </p>

      <p>
        Morale improves when people are treated like adults. When they are
        trusted to manage their own time. When they are not surveilled,
        micromanaged, or guilt-tripped into performing productivity they do
        not feel.
      </p>

      <p>
        Hardly Working Corp. cannot change your workplace. But it can give
        you permission to stop pretending. And sometimes that is enough.
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

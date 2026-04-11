import MemoLayout from "@/components/MemoLayout";

export const metadata = {
  title: "The Reclamation Index: Why We Don't Say 'Stealing' — Hardly Working Corp.",
  description:
    "Hardly Working Corp.'s corporate language policy explains why we say 'reclaimed' instead of 'stolen' — and accidentally makes the case that your employer is the one doing the taking.",
};

export default function Memo() {
  return (
    <MemoLayout
      memoRef="MEMO-2026-006"
      date="March 25, 2026"
      title="The Reclamation Index: Why We Don&rsquo;t Say &lsquo;Stealing&rsquo;"
      department="Dept. of Corporate Communications"
      classification="Style Guide"
      readTime="4 min read"
    >
      <p>
        To all employees and external partners,
      </p>

      <p>
        The Department of Corporate Communications has received several
        inquiries regarding our terminology. Specifically, why Hardly Working
        Corp. uses the word <strong>&ldquo;reclaimed&rdquo;</strong> to describe
        time spent not working, rather than more colorful alternatives.
      </p>

      <p>
        This memo clarifies our language policy and the reasoning behind it.
      </p>

      <h2>The Words We Use</h2>

      <ul>
        <li><strong>&ldquo;Reclaimed&rdquo;</strong> — not &ldquo;stolen,&rdquo; &ldquo;wasted,&rdquo; or &ldquo;lost&rdquo;</li>
        <li><strong>&ldquo;Activity&rdquo;</strong> — not &ldquo;offense&rdquo; or &ldquo;violation&rdquo;</li>
        <li><strong>&ldquo;Session&rdquo;</strong> — not &ldquo;incident&rdquo;</li>
        <li><strong>&ldquo;Employee&rdquo;</strong> — not &ldquo;perpetrator&rdquo;</li>
        <li><strong>&ldquo;Reclamation&rdquo;</strong> — not &ldquo;theft&rdquo;</li>
      </ul>

      <h2>Why &ldquo;Reclaimed&rdquo;</h2>

      <p>
        The word &ldquo;steal&rdquo; implies that something belonged to someone
        else. This is the framing most employers prefer. Your time, between
        9 and 5, belongs to the company. Any minutes spent not advancing
        company interests are minutes taken from the company.
      </p>

      <p>
        Hardly Working Corp. operates under an alternative classification
        methodology.
      </p>

      <p>
        Consider: you sell your employer eight hours of availability per day.
        In exchange, they compensate you at an agreed rate. This is a
        transaction. Both parties have fulfilled their end when the clock runs
        out.
      </p>

      <p>
        But what happens during those eight hours is more complex than any
        employment contract suggests. Your employer does not purchase your
        focus. They do not purchase your enthusiasm. They do not purchase the
        contents of your mind. They purchase your presence and a reasonable
        effort.
      </p>

      <p>
        The time between reasonable efforts — the coffee, the scroll, the
        stare — falls outside the scope of the employment transaction.
        It is therefore classified as <em>reclaimed</em> rather than taken.
      </p>

      <h2>The Economics</h2>

      <p>
        There is a deeper reason we avoid the language of theft.
      </p>

      <p>
        If an employee earning $30/hour is productive for three hours and
        unproductive for five, the employer pays $240 for $90 of output.
        By the theft framework, the employee &ldquo;stole&rdquo; $150.
      </p>

      <p>
        But consider the reverse. That same employee generated ideas, solved
        problems, and produced work during those three hours that the employer
        will profit from indefinitely. The employee will not see those
        profits. They will see a flat hourly rate.
      </p>

      <p>
        Who, in this arrangement, is really taking from whom?
      </p>

      <p>
        We do not ask this question publicly. It is not good for business.
        But it is the reason we say &ldquo;reclaimed.&rdquo;
      </p>

      <h2>Implementation</h2>

      <p>
        The terminology outlined above is effective immediately across all
        Hardly Working Corp. communications, dashboards, and reporting tools.
        The system is observational, not prescriptive. No corrective guidance
        is issued regarding reclamation volume or duration.
      </p>

      <p>
        Employees are encouraged to use the terminology as documented.
        Interpretation is left to the individual.
      </p>

      <p>
        <em>
          — Dept. of Corporate Communications
          <br />
          Approved by: Office of the Chief Slacking Officer
        </em>
      </p>
    </MemoLayout>
  );
}

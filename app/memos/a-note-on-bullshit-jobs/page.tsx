import MemoLayout from "@/components/MemoLayout";

export const metadata = {
  title: 'A Note on "Bullshit Jobs" — Required Reading — Hardly Working Corp.',
  description:
    "Hardly Working Corp. makes David Graeber's 'Bullshit Jobs' mandatory corporate training material. A memo on the five types of pointless work — and why your role might be one of them.",
};

export default function Memo() {
  return (
    <MemoLayout
      memoRef="MEMO-2026-008"
      date="April 2, 2026"
      title='A Note on "Bullshit Jobs" — Required Reading for All Departments'
      department="Dept. of Professional Development"
      classification="Training Material"
      readTime="5 min read"
    >
      <p>
        To all employees,
      </p>

      <p>
        The Department of Professional Development has added a new title to
        the Hardly Working Corp. mandatory reading list:{" "}
        <strong>&ldquo;Bullshit Jobs: A Theory&rdquo;</strong> by the late
        anthropologist David Graeber (1961–2020).
      </p>

      <p>
        All employees are expected to familiarize themselves with the core
        arguments of this text. Not because we agree with everything in it.
        But because it articulates something that most of our employees already
        feel in their bones and have never been given the vocabulary to express.
      </p>

      <h2>Background</h2>

      <p>
        In 2013, Graeber published an essay titled &ldquo;On the Phenomenon of
        Bullshit Jobs.&rdquo; It went viral. In 2018, he expanded it into a
        book. The central thesis is simple:
      </p>

      <blockquote>
        A bullshit job is a form of paid employment that is so completely
        pointless, unnecessary, or pernicious that even the employee cannot
        justify its existence — even though, as part of the conditions of
        employment, the employee feels obliged to pretend that this is not
        the case.
      </blockquote>

      <p>
        Graeber estimated that between 20% and 50% of all jobs in advanced
        economies are, by this definition, bullshit. Subsequent surveys
        have broadly confirmed this range. In a YouGov poll, 37% of British
        workers said their job made no meaningful contribution to the world.
      </p>

      <p>
        That is not a fringe opinion. That is more than a third of the
        workforce.
      </p>

      <h2>The Five Types</h2>

      <p>
        Graeber identified five categories of bullshit jobs. The Department of
        Professional Development has translated them into corporate-friendly
        language for training purposes:
      </p>

      <ul>
        <li>
          <strong>Flunkies</strong> — Roles that exist primarily to make
          someone else feel important. If your job is to be present so that a
          senior person appears to have staff, you may be a flunky. No
          judgment. The system created the role, not you.
        </li>
        <li>
          <strong>Goons</strong> — Roles that exist only because competitors
          have them. Corporate lobbyists. Armies of in-house lawyers. PR teams
          whose sole purpose is countering the other company&apos;s PR team. If
          your role would be unnecessary in a world where your competitors
          didn&apos;t exist, you may be a goon.
        </li>
        <li>
          <strong>Duct Tapers</strong> — Roles that exist to fix problems that
          should not exist. If your job is to manually reconcile data between
          two systems that should talk to each other, or to smooth over
          failures caused by organizational dysfunction, you are a duct taper.
          You are essential. Your job should not be.
        </li>
        <li>
          <strong>Box Tickers</strong> — Roles that exist to create the
          appearance that something is being done. Compliance officers who file
          reports no one reads. Diversity consultants hired after a scandal who
          produce a strategy document that sits in a drawer. If the primary
          output of your role is documentation of activity rather than activity
          itself, you may be a box ticker.
        </li>
        <li>
          <strong>Taskmasters</strong> — Roles that exist to manage people who
          do not need managing, or to create work for others to do. The
          manager who generates busywork. The supervisor who supervises
          self-sufficient teams. If you were removed and your reports
          continued unchanged, you may be a taskmaster.
        </li>
      </ul>

      <h2>Department Self-Assessment</h2>

      <p>
        As part of this training initiative, each department is asked to
        conduct a brief self-assessment:
      </p>

      <ol>
        <li>If your department disappeared tomorrow, would the company notice within 30 days?</li>
        <li>Can you describe your department&apos;s output in one sentence without using the word &ldquo;facilitate&rdquo;?</li>
        <li>Has your department ever produced a report about the need to produce fewer reports?</li>
      </ol>

      <p>
        Please submit your answers to your direct supervisor. Or don&apos;t. We
        suspect the exercise of answering these questions honestly is more
        valuable than anything your supervisor would do with the answers.
      </p>

      <h2>Why This Matters</h2>

      <p>
        Hardly Working Corp. was not built to mock work. It was built because
        millions of people spend their days in roles that do not require eight
        hours of attention, in offices that do not require their presence, on
        tasks that do not require their talents — and they are made to feel
        guilty about the surplus time that inevitably results.
      </p>

      <p>
        Graeber&apos;s insight was that this guilt is the real product of the
        modern workplace. Not software. Not widgets. Not quarterly reports.
        Guilt. The feeling that you should be doing more, even when there is
        nothing more to do.
      </p>

      <p>
        Hardly Working does not solve this. But it gives you a number. And
        sometimes a number is enough to replace guilt with understanding.
      </p>

      <p>
        <em>
          — Dept. of Professional Development
          <br />
          In memory of David Graeber, who noticed what everyone else
          pretended not to see.
        </em>
      </p>
    </MemoLayout>
  );
}

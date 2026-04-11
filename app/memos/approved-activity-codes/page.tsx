import MemoLayout from "@/components/MemoLayout";

export const metadata = {
  title: "Approved Activity Codes: A Classification Guide — Hardly Working Corp.",
  description:
    "The official Hardly Working Corp. guide to the 10 approved break timer categories — from Coffee Run to Into the Void. A corporate compliance document for the modern slacker.",
};

export default function Memo() {
  return (
    <MemoLayout
      memoRef="MEMO-2026-004"
      date="March 10, 2026"
      title="Approved Activity Codes: A Classification Guide"
      department="Dept. of Compliance"
      classification="All Employees"
      readTime="4 min read"
    >
      <p>
        To all employees,
      </p>

      <p>
        Effective immediately, Hardly Working Corp. has standardized the
        classification system for non-productive time. All employees are
        required to log their reclamation activities using one of the ten
        approved activity codes listed below.
      </p>

      <p>
        These codes have been arranged in order of escalation, from innocent to
        existential. Please select the code that most accurately describes your
        current state of not-working.
      </p>

      <h2>Code 01: Coffee Run ☕</h2>
      <p>
        The procurement of caffeinated beverages during allocated work hours.
        Includes travel time to and from the machine, the line, the
        conversation you didn&apos;t plan to have, and the five minutes you
        spent staring at your phone while waiting for the milk to froth.
        Industry standard: 2–4 instances per day.
      </p>

      <h2>Code 02: Bathroom Break 🚽</h2>
      <p>
        The exercise of basic biological functions. Hardly Working Corp. does
        not monitor the duration of bathroom visits. We note, however, that
        the average bathroom break has increased 340% since the introduction
        of smartphones. We do not consider this a coincidence.
      </p>

      <h2>Code 03: Chatting 🗣</h2>
      <p>
        Verbal communication with colleagues on topics unrelated to any
        assigned deliverable. Includes gossip, complaints about management,
        discussions about lunch, and the phrase &ldquo;Did you see that
        email?&rdquo; followed by twenty minutes of analysis.
      </p>

      <h2>Code 04: Doom Scrolling 📱</h2>
      <p>
        Passive digital content consumption during allocated work hours.
        Characterized by repetitive thumb movement and a vague sense of
        despair. Platforms include but are not limited to: social media,
        news sites, Reddit, and whatever has replaced TikTok this quarter.
      </p>

      <h2>Code 05: Online Shopping 🛒</h2>
      <p>
        The browsing and/or purchasing of goods and services using employer-
        provided internet access. Includes adding items to cart, removing
        items from cart, adding them again, reading reviews, and closing the
        tab in shame. Actual purchases are optional.
      </p>

      <h2>Code 06: Errands 📋</h2>
      <p>
        Personal administrative tasks performed during work hours. Scheduling
        appointments, paying bills, texting your landlord, researching flights
        for a vacation you cannot afford. The administrative overhead of
        being alive.
      </p>

      <h2>Code 07: Looking Busy ⌨️</h2>
      <p>
        The deliberate performance of productivity in the absence of actual
        output. Typing purposefully while reading nothing. Furrowing your brow
        at a spreadsheet you do not understand. Nodding during a meeting you
        stopped listening to fourteen minutes ago. This activity requires
        advanced professional competencies.
      </p>

      <h2>Code 08: &ldquo;Thinking&rdquo; 💭</h2>
      <p>
        The quotation marks are deliberate. This code covers the gray area
        between genuine creative contemplation and simply staring at a wall.
        If asked what you are doing, the correct answer is &ldquo;thinking
        through the architecture&rdquo; or &ldquo;letting the idea
        marinate.&rdquo; No one will question this.
      </p>

      <h2>Code 09: Into the Void 👁</h2>
      <p>
        Unstructured cognitive disengagement. The mind has left the building.
        The body remains at the desk. You are not thinking about work. You are
        not thinking about not-work. You are not thinking. This state is more
        common than any HR department would like to acknowledge, and more
        necessary than any productivity consultant would admit.
      </p>

      <h2>Code 10: Long Lunch 🍽️</h2>
      <p>
        A meal break that has exceeded its socially acceptable duration by a
        margin that can no longer be attributed to a slow kitchen. Includes
        the walk, the restaurant selection debate, the dessert you said you
        wouldn&apos;t order, and the slow return during which you check your
        phone to see if anyone noticed.
      </p>

      <h2>A Note on Accuracy</h2>

      <p>
        Employees are encouraged to select the code that most honestly reflects
        their activity. There is no wrong answer. There is no judgment. The
        Department of Employee Morale has been dissolved and can no longer
        audit your selections.
      </p>

      <p>
        Promoted employees (Executive tier) may create custom activity codes
        for activities not covered by this guide. We anticipate this will be
        necessary.
      </p>

      <p>
        <em>
          — Dept. of Compliance
          <br />
          This memo was drafted during a Long Lunch.
        </em>
      </p>
    </MemoLayout>
  );
}

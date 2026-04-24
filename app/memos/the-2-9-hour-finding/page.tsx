import MemoLayout from "@/components/MemoLayout";

export const metadata = {
  title: "The 2.9-Hour Finding — Hardly Working Corp.",
  description:
    "How much time do employees actually work per day? Hardly Working Corp.'s Department of Research examines the data on workplace productivity — and finds a market opportunity.",
};

export default function Memo() {
  return (
    <MemoLayout
      memoRef="MEMO-2026-003"
      date="February 28, 2026"
      title="Department of Research: The 2.9-Hour Finding"
      department="Dept. of Research & Development"
      classification="Internal"
      readTime="4 min read"
    >
      <p>
        To all departments,
      </p>

      <p>
        The Department of Research has completed its preliminary analysis of
        global workplace productivity data. The findings confirm established
        productivity research.
      </p>

      <h2>Executive Summary</h2>

      <p>
        The average office worker is genuinely productive for{" "}
        <strong>2 hours and 53 minutes per day</strong>.
      </p>

      <p>
        This figure, sourced from multiple independent studies conducted between
        2019 and 2025, has remained remarkably stable across industries,
        countries, and economic conditions. Recessions do not make people work
        harder. Neither do ping-pong tables.
      </p>

      <h2>Where the Other 5.1 Hours Go</h2>

      <p>
        The research identifies the following breakdown for a standard
        eight-hour workday:
      </p>

      <ul>
        <li><strong>Reading news and social media:</strong> 1 hr 5 min</li>
        <li><strong>Discussing non-work topics with colleagues:</strong> 44 min</li>
        <li><strong>Searching for new jobs:</strong> 26 min</li>
        <li><strong>Taking breaks (smoke, snack, coffee):</strong> 23 min</li>
        <li><strong>Making personal calls and texts:</strong> 18 min</li>
        <li><strong>Making food:</strong> 17 min</li>
        <li><strong>Staring at nothing in particular:</strong> estimated, untracked</li>
      </ul>

      <p>
        The final category — staring at nothing — does not appear in most
        studies because researchers could not agree on how to measure it. We
        classify it under our proprietary category, &ldquo;Into the Void.&rdquo;
      </p>

      <h2>Market Implications</h2>

      <p>
        The productivity industry is worth $102 billion. It is built entirely
        on the premise that the 2.9-hour figure is a problem to be solved.
        Hundreds of apps, methodologies, and corporate training programs exist
        to push that number higher.
      </p>

      <p>
        None of them have moved it.
      </p>

      <p>
        In forty years of personal computing, twenty years of smartphones, and
        ten years of AI-assisted productivity tools, the number has not
        meaningfully changed. People work about three hours a day. They always
        have.
      </p>

      <p>
        Hardly Working Corp. classifies the 2.9-hour figure as a natural
        constant — comparable in reliability to gravity or the speed of light.
        Historical intervention attempts have yielded negligible results.
        Measurement, by contrast, is inexpensive and produces actionable data.
      </p>

      <h2>The Opportunity</h2>

      <p>
        If the average worker earns $28/hour and is unproductive for 5.1 hours
        per day, they are reclaiming approximately <strong>$142.80 per day</strong>,{" "}
        <strong>$714 per week</strong>, and <strong>$37,128 per year</strong>.
      </p>

      <p>
        Current market solutions do not surface this data. Hardly Working
        Corp. addresses this measurement gap.
      </p>

      <p>
        Our tool provides quantification. Application of the resulting
        metrics remains at the discretion of the individual user.
      </p>

      <h2>Recommendation</h2>

      <p>
        The Department of Research recommends that Hardly Working Corp.
        proceed with its current strategy of tracking non-productive time
        without attempting to reduce it.
      </p>

      <p>
        The data is clear: people do not want to work more. They want to know
        the truth about how they spend their time. These are very different
        things.
      </p>

      <p>
        <em>
          — Dept. of Research & Development
          <br />
          Time spent preparing this memo: 4.2 hours
          <br />
          Time that could reasonably be called &ldquo;productive&rdquo;: 1.1 hours
        </em>
      </p>
    </MemoLayout>
  );
}

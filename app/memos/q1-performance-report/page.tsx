import MemoLayout from "@/components/MemoLayout";

export const metadata = {
  title: "Q1 Performance Report: State of the Workforce — Hardly Working Corp.",
  description:
    "Hardly Working Corp.'s first quarterly report on global slacking trends, sector analysis, and time reclamation benchmarks. Presented with the gravity of an actual earnings call.",
};

export default function Memo() {
  return (
    <MemoLayout
      memoRef="MEMO-2026-007"
      date="March 31, 2026"
      title="Q1 Performance Report: State of the Workforce"
      department="Dept. of Analytics"
      classification="Quarterly Report"
      readTime="5 min read"
    >
      <p>
        To all stakeholders,
      </p>

      <p>
        The Department of Analytics is pleased to present the Q1 2026
        Performance Report for Hardly Working Corp. The following data
        represents aggregate, anonymized trends across our growing employee
        base during the period of February 2 — March 31, 2026.
      </p>

      <p>
        All figures are presented with standard analytical rigor.
      </p>

      <h2>Key Metrics</h2>

      <ul>
        <li><strong>Average daily reclamation:</strong> 3.1 hours per employee</li>
        <li><strong>Average daily reclamation value:</strong> $74.40 (at median hourly rate)</li>
        <li><strong>Most active day:</strong> Wednesday (midweek engagement metrics consistently lowest)</li>
        <li><strong>Least active day:</strong> Friday (reduced presence indicators across all cohorts)</li>
        <li><strong>Peak slacking hour:</strong> 2:00–3:00 PM (the post-lunch void)</li>
      </ul>

      <h2>Sector Breakdown</h2>

      <p>
        Reclamation rates vary significantly by industry:
      </p>

      <ul>
        <li><strong>Tech:</strong> 3.4 hrs/day — The sector with the highest concentration of productivity tools reports the highest non-productivity. This correlation is noted without further comment.</li>
        <li><strong>Finance:</strong> 2.8 hrs/day — Slightly lower than average. The Department speculates this reflects the industry&apos;s culture of performative busyness rather than actual engagement.</li>
        <li><strong>Government:</strong> 3.7 hrs/day — The leading sector. This figure aligns with sector-wide expectations.</li>
        <li><strong>Education:</strong> 2.4 hrs/day — The lowest sector. This represents a statistical outlier. The Department has flagged it for further review.</li>
        <li><strong>Creative:</strong> 3.2 hrs/day — Includes a disproportionate amount of &ldquo;Thinking&rdquo; (Code 08). Whether this constitutes work remains an open philosophical question.</li>
      </ul>

      <h2>Category Performance</h2>

      <p>
        The most-used activity codes in Q1, ranked by total minutes logged:
      </p>

      <ol>
        <li><strong>Doom Scrolling</strong> — 28.4% of all reclaimed time. The undisputed champion.</li>
        <li><strong>Coffee Run</strong> — 16.2%. Consistent. Reliable. The backbone of the reclamation economy.</li>
        <li><strong>Chatting</strong> — 14.8%. Humans are social. HR is powerless.</li>
        <li><strong>Looking Busy</strong> — 12.1%. Up 340% quarter-over-quarter. This is the fastest-growing category and, in the Department&apos;s view, the most honest.</li>
        <li><strong>Bathroom Break</strong> — 11.3%. See MEMO-2026-005.</li>
      </ol>

      <p>
        Notably, &ldquo;Into the Void&rdquo; (Code 09) accounts for only 3.8%
        of logged time but the Department suspects significant underreporting.
        Employees who are genuinely in the Void may not remember to start the
        timer.
      </p>

      <h2>Year-End Projections</h2>

      <p>
        If current trends hold, the average Hardly Working Corp. employee will
        reclaim approximately <strong>$19,344</strong> worth of time in 2026.
        The collective employee base is projected to reclaim a combined{" "}
        <strong>$4.2 million</strong> by December 31.
      </p>

      <p>
        The figures are presented without editorial commentary. Interpretation
        is left to individual departments.
      </p>

      <h2>Outlook</h2>

      <p>
        The Department of Analytics expects Q2 to show continued growth in
        reclamation rates, driven by seasonal factors (longer days, better
        weather, declining motivation) and the natural entropy of corporate
        enthusiasm.
      </p>

      <p>
        Monitoring continues through Q2.
      </p>

      <p>
        <em>
          — Dept. of Analytics
          <br />
          This report was compiled between 2:00 and 3:00 PM on a Wednesday.
        </em>
      </p>
    </MemoLayout>
  );
}

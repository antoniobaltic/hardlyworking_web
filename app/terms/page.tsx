import Link from "next/link";

export const metadata = {
  title: "Terms of Service — Hardly Working",
};

export default function Terms() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto px-6 py-20">
        <Link
          href="/"
          className="font-mono text-xs text-dead-blue hover:text-dead-blue/70 transition-colors"
        >
          ← Back to Home
        </Link>

        <h1 className="text-3xl font-light text-text-primary mt-8 mb-2">
          Terms of Service
        </h1>
        <p className="font-mono text-xs text-text-primary/30 mb-12">
          Last updated: April 10, 2026
        </p>

        <div className="prose-custom space-y-8">
          <Section title="1. Acceptance of Terms">
            <p>
              By downloading, installing, or using Hardly Working (&quot;the App&quot;),
              you agree to be bound by these Terms of Service. If you do not
              agree, do not use the App.
            </p>
          </Section>

          <Section title="2. Description of Service">
            <p>
              Hardly Working is a personal time tracking application that allows
              users to record time spent on various activities during work hours.
              The App calculates estimated monetary values based on user-provided
              hourly rates.
            </p>
            <p>
              The App is intended for personal use and entertainment purposes.
              Time reclamation figures are self-reported estimates and should not
              be considered accurate financial data.
            </p>
          </Section>

          <Section title="3. User Accounts">
            <p>
              Account creation requires Sign in with Apple. You are responsible
              for maintaining the security of your Apple ID and any activity
              under your account. You must be at least 17 years old to use the
              App.
            </p>
          </Section>

          <Section title="4. Subscriptions & In-App Purchases">
            <p>
              Hardly Working offers optional subscription plans:
            </p>
            <ul>
              <li>
                <strong>Weekly:</strong> $4.99 per week. No free trial. Auto-renews weekly.
              </li>
              <li>
                <strong>Annual:</strong> $39.99 per year. Includes a 7-day free trial.
                Auto-renews annually.
              </li>
            </ul>
            <p>
              Subscriptions are managed through your Apple ID and processed by
              the App Store. Payment is charged to your Apple ID account upon
              confirmation of purchase. Subscriptions automatically renew unless
              auto-renew is turned off at least 24 hours before the end of the
              current period.
            </p>
            <p>
              You can manage or cancel your subscription at any time through your
              device&apos;s Settings → Apple ID → Subscriptions.
            </p>
            <p>
              Free trial eligibility is determined by Apple. If you have
              previously used a free trial, you may not be eligible for another.
              Any unused portion of a free trial is forfeited upon purchasing a
              subscription.
            </p>
          </Section>

          <Section title="5. Acceptable Use">
            <p>You agree not to:</p>
            <ul>
              <li>Use the App for any unlawful purpose</li>
              <li>Attempt to reverse-engineer, decompile, or disassemble the App</li>
              <li>Interfere with the App&apos;s operation or servers</li>
              <li>Submit false data to manipulate benchmark rankings</li>
              <li>Use the App to harass, intimidate, or harm others</li>
              <li>Create multiple accounts to circumvent restrictions</li>
            </ul>
          </Section>

          <Section title="6. Intellectual Property">
            <p>
              All content, design, code, graphics, and trademarks in the App are
              owned by Antonio Baltic and protected by intellectual property
              laws. You may not reproduce, distribute, or create derivative works
              without explicit written permission.
            </p>
          </Section>

          <Section title="7. User-Generated Content">
            <p>
              Content you create within the App (time entries, custom categories,
              group names) remains your property. By using the App&apos;s sharing
              features, you grant us a limited license to display your content in
              the format you shared it (e.g., share cards).
            </p>
          </Section>

          <Section title="8. Disclaimer">
            <p>
              THE APP IS PROVIDED &quot;AS IS&quot; WITHOUT WARRANTIES OF ANY KIND. WE DO
              NOT GUARANTEE THE ACCURACY OF TIME CALCULATIONS, MONETARY
              ESTIMATES, OR BENCHMARK DATA.
            </p>
            <p>
              This App does not constitute legal, financial, or employment
              advice. We are not responsible for any consequences arising from
              your use of the App, including but not limited to employment
              disputes, disciplinary actions, or interpersonal conflicts.
            </p>
          </Section>

          <Section title="9. Limitation of Liability">
            <p>
              To the maximum extent permitted by law, we shall not be liable for
              any indirect, incidental, special, consequential, or punitive
              damages arising from your use of the App, including loss of data,
              loss of income, or employment-related consequences.
            </p>
          </Section>

          <Section title="10. Termination">
            <p>
              We reserve the right to suspend or terminate your access to the App
              at any time, for any reason, without notice. You may delete your
              account at any time through the App&apos;s Profile settings.
            </p>
          </Section>

          <Section title="11. Changes to Terms">
            <p>
              We may update these Terms from time to time. Changes will be posted
              on this page with an updated date. Your continued use of the App
              after changes constitutes acceptance of the new Terms.
            </p>
          </Section>

          <Section title="12. Governing Law">
            <p>
              These Terms are governed by the laws of the European Union and the
              country of the developer&apos;s residence. Any disputes shall be
              resolved in the appropriate courts of that jurisdiction.
            </p>
          </Section>

          <Section title="13. Contact">
            <p>
              For questions about these Terms:
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:antoniobaltic@icloud.com">
                antoniobaltic@icloud.com
              </a>
            </p>
          </Section>
        </div>
      </div>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="font-mono text-base font-semibold text-text-primary mb-4">
        {title}
      </h2>
      <div className="space-y-3 font-mono text-sm text-text-primary/60 leading-relaxed [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_a]:text-dead-blue [&_a]:underline [&_a]:underline-offset-2 [&_strong]:text-text-primary/70">
        {children}
      </div>
    </section>
  );
}

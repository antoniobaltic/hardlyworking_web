import Link from "next/link";

export const metadata = {
  title: "Privacy Policy — Hardly Working",
};

export default function Privacy() {
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
          Privacy Policy
        </h1>
        <p className="font-mono text-xs text-text-primary/30 mb-12">
          Last updated: April 10, 2026
        </p>

        <div className="prose-custom space-y-8">
          <Section title="1. Overview">
            <p>
              Hardly Working (&quot;the App&quot;) is a time tracking application developed by
              Antonio Baltic (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). This Privacy Policy explains how
              we collect, use, and protect your information when you use our App.
            </p>
            <p>
              We are committed to protecting your privacy. Your time entries and
              personal data are treated with the utmost care and are never sold
              to third parties.
            </p>
          </Section>

          <Section title="2. Data We Collect">
            <h4>Information You Provide</h4>
            <ul>
              <li>
                <strong>Account information:</strong> When you sign in with Apple, we receive a
                unique user identifier. We do not receive your name or email
                unless you choose to share them.
              </li>
              <li>
                <strong>Profile data:</strong> Hourly rate, work schedule, country, and industry
                (used for benchmarking and in-app calculations).
              </li>
              <li>
                <strong>Time entries:</strong> Activity categories, start/end times, and durations
                that you manually record.
              </li>
            </ul>

            <h4>Information Collected Automatically</h4>
            <ul>
              <li>
                <strong>Device identifiers:</strong> For analytics attribution (via AppsFlyer SDK).
                Subject to your App Tracking Transparency (ATT) consent.
              </li>
              <li>
                <strong>Subscription status:</strong> Managed through RevenueCat to verify your
                subscription entitlements.
              </li>
              <li>
                <strong>Aggregated usage statistics:</strong> Daily totals (total seconds, session
                count, top category) synced to our servers for anonymous
                benchmarking.
              </li>
            </ul>
          </Section>

          <Section title="3. How We Use Your Data">
            <ul>
              <li>To provide core app functionality (timer, dashboards, achievements)</li>
              <li>To calculate and display your personal statistics</li>
              <li>To generate anonymous aggregate benchmarks (country, industry, global)</li>
              <li>To manage your subscription and in-app purchases</li>
              <li>To measure advertising attribution (with your consent)</li>
              <li>To improve the App based on aggregate usage patterns</li>
            </ul>
          </Section>

          <Section title="4. Third-Party Services">
            <p>We use the following third-party services:</p>
            <ul>
              <li>
                <strong>Supabase</strong> — Authentication, profile storage, and aggregated statistics.
                Data is stored in the EU (eu-central-1). Privacy policy:{" "}
                <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer">
                  supabase.com/privacy
                </a>
              </li>
              <li>
                <strong>RevenueCat</strong> — Subscription management and purchase verification.
                Privacy policy:{" "}
                <a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener noreferrer">
                  revenuecat.com/privacy
                </a>
              </li>
              <li>
                <strong>AppsFlyer</strong> — Mobile attribution analytics (subject to ATT consent).
                Privacy policy:{" "}
                <a href="https://www.appsflyer.com/privacy-policy/" target="_blank" rel="noopener noreferrer">
                  appsflyer.com/privacy-policy
                </a>
              </li>
              <li>
                <strong>Apple (iCloud/CloudKit)</strong> — Device-to-device sync of your time entries.
                Governed by Apple&apos;s privacy policy.
              </li>
            </ul>
          </Section>

          <Section title="5. Data Storage & Security">
            <p>
              Your time entries are stored locally on your device and synced via
              iCloud to your other Apple devices. Only aggregated daily
              statistics (not individual entries) are sent to our servers.
            </p>
            <p>
              Server-side data is stored in Supabase (EU region, eu-central-1)
              with encryption at rest and in transit. We follow industry-standard
              security practices.
            </p>
          </Section>

          <Section title="6. Your Rights">
            <p>You have the right to:</p>
            <ul>
              <li>
                <strong>Access:</strong> View all data we hold about you (via the app&apos;s Profile
                section and CSV export feature).
              </li>
              <li>
                <strong>Delete:</strong> Permanently delete your account and all associated data
                (via Profile → Account → Delete Account).
              </li>
              <li>
                <strong>Export:</strong> Export your complete time entry history as a CSV file (Pro
                feature).
              </li>
              <li>
                <strong>Opt out of tracking:</strong> Decline the App Tracking Transparency prompt
                to prevent advertising attribution data collection.
              </li>
            </ul>
            <p>
              For GDPR (EU) and CCPA (California) purposes, you may exercise
              these rights by contacting us at the email below or using the
              in-app controls.
            </p>
          </Section>

          <Section title="7. Data Retention">
            <p>
              We retain your data for as long as your account is active. When you
              delete your account, all server-side data (profile, daily stats,
              group memberships) is permanently removed. Local data on your
              device is also erased.
            </p>
          </Section>

          <Section title="8. Children&apos;s Privacy">
            <p>
              Hardly Working is not intended for users under 17 years of age. We
              do not knowingly collect personal information from children.
            </p>
          </Section>

          <Section title="9. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. Changes will
              be posted on this page with an updated &quot;Last updated&quot; date. Your
              continued use of the App constitutes acceptance of any changes.
            </p>
          </Section>

          <Section title="10. Contact">
            <p>
              For privacy inquiries, data requests, or concerns:
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
      <div className="space-y-3 font-mono text-sm text-text-primary/60 leading-relaxed [&_h4]:font-semibold [&_h4]:text-text-primary/70 [&_h4]:mt-4 [&_h4]:mb-2 [&_h4]:text-sm [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_a]:text-dead-blue [&_a]:underline [&_a]:underline-offset-2 [&_strong]:text-text-primary/70">
        {children}
      </div>
    </section>
  );
}

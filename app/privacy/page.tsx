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
        <p className="font-mono text-xs text-text-primary/50 mb-12">
          Effective: April 23, 2026 · Last updated: April 23, 2026
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
              or shared with third parties for advertising purposes.
            </p>
          </Section>

          <Section title="2. What We Do Not Do">
            <p>
              Before describing what we do collect, a clear statement of what we
              do not:
            </p>
            <ul>
              <li>We do not track you across other apps or websites.</li>
              <li>
                We do not use third-party analytics or advertising attribution
                SDKs (no AppsFlyer, no Adjust, no Firebase Analytics, no Mixpanel,
                nothing of the sort).
              </li>
              <li>We do not display advertising of any kind inside the App.</li>
              <li>We do not collect your advertising identifier (IDFA).</li>
              <li>
                We do not request permission under Apple&apos;s App Tracking
                Transparency framework, because we have nothing to ask permission
                for.
              </li>
              <li>We do not sell your data. We do not share it with data brokers.</li>
            </ul>
          </Section>

          <Section title="3. Data We Collect">
            <h4>Information You Provide</h4>
            <ul>
              <li>
                <strong>Account information:</strong> When you sign in with Apple, we receive a
                unique user identifier. We do not receive your name or email
                unless you choose to share them.
              </li>
              <li>
                <strong>Profile data:</strong> Hourly rate, currency, work schedule (hours per day,
                days per week), country, industry, achievement level, and display title
                (used for benchmarking, group leaderboards, and in-app calculations).
              </li>
              <li>
                <strong>Time entries:</strong> Activity categories, start/end times, and durations
                that you manually record. Stored locally on your device only.
                These are never sent to our servers as individual rows.
              </li>
              <li>
                <strong>Friend groups:</strong> If you create or join a friend group, your anonymous
                user ID, group name, description, emoji, invite code, and aggregated daily
                statistics are stored on our servers and visible to other group members.
              </li>
            </ul>

            <h4>Information Collected Automatically</h4>
            <ul>
              <li>
                <strong>Subscription status:</strong> Managed through RevenueCat, which collects
                purchase history and anonymous device identifiers to verify your subscription
                entitlements.
              </li>
              <li>
                <strong>Aggregated usage statistics:</strong> Daily totals (total seconds, session
                count, top category) synced to our servers for anonymous benchmarking.
                Individual time entries are never sent to our servers.
              </li>
              <li>
                <strong>Notifications:</strong> We may request permission to send local notifications
                (timer reminders). Notification content is generated on your device and is not
                transmitted to our servers.
              </li>
            </ul>
          </Section>

          <Section title="4. How We Use Your Data">
            <ul>
              <li>To provide core app functionality (timer, dashboards, achievements)</li>
              <li>To calculate and display your personal statistics and reclaimed wages</li>
              <li>To generate anonymous aggregate benchmarks (country, industry, global)</li>
              <li>To power friend group leaderboards with aggregated statistics</li>
              <li>To manage your subscription and in-app purchases</li>
              <li>To improve the App based on aggregate usage patterns</li>
            </ul>
          </Section>

          <Section title="5. Legal Basis for Processing (GDPR)">
            <p>We process your data on the following legal bases:</p>
            <ul>
              <li>
                <strong>Contract performance:</strong> To provide the core app functionality
                you requested — timer, dashboards, subscription management, and friend groups.
              </li>
              <li>
                <strong>Legitimate interest:</strong> To generate anonymous aggregate benchmarks
                and improve the App. Individual data is never used for profiling or automated
                decision-making.
              </li>
            </ul>
          </Section>

          <Section title="6. Third-Party Services">
            <p>We use exactly two third-party services:</p>
            <ul>
              <li>
                <strong>Supabase</strong> — Authentication, profile storage, friend groups, and
                aggregated statistics. Data is stored in the EU (eu-central-1). Privacy policy:{" "}
                <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer">
                  supabase.com/privacy
                </a>
              </li>
              <li>
                <strong>RevenueCat</strong> — Subscription management and purchase verification.
                Collects purchase history and anonymous device identifiers. Data is processed
                in the United States. Privacy policy:{" "}
                <a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener noreferrer">
                  revenuecat.com/privacy
                </a>
              </li>
            </ul>
            <p>
              Apple processes your Sign in with Apple authentication and, if you
              have iCloud Backup enabled on your device, may include the App&apos;s
              local data in your device&apos;s standard iOS backup. This backup is
              governed by{" "}
              <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">
                Apple&apos;s privacy policy
              </a>{" "}
              and is not something we integrate with directly.
            </p>
          </Section>

          <Section title="7. International Data Transfers">
            <p>
              Your data may be transferred to and processed in countries outside your
              country of residence, including the United States (RevenueCat) and
              the European Union (Supabase). These transfers are protected by:
            </p>
            <ul>
              <li>Standard Contractual Clauses (SCCs) approved by the European Commission</li>
              <li>The service providers&apos; compliance with applicable data protection frameworks</li>
              <li>Encryption in transit and at rest</li>
            </ul>
          </Section>

          <Section title="8. Data Storage & Security">
            <p>
              Your time entries are stored locally on your device. They are not
              transmitted to our servers as individual rows. If you have iCloud
              Backup enabled on your iPhone, those local entries may be included
              in your standard device backup — that&apos;s Apple&apos;s backup
              mechanism, not an active sync integration on our side.
            </p>
            <p>
              Server-side data (your profile, aggregated daily statistics, and
              friend-group membership) is stored in Supabase (EU region,
              eu-central-1) with encryption at rest and in transit. We follow
              industry-standard security practices to protect your data.
            </p>
          </Section>

          <Section title="9. Your Rights">
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
                <strong>Rectification:</strong> Update your profile data at any time via the app&apos;s
                Profile → Preferences section.
              </li>
            </ul>
          </Section>

          <Section title="10. California Privacy Rights (CCPA/CPRA)">
            <p>If you are a California resident, you have additional rights:</p>
            <ul>
              <li>
                <strong>Right to Know:</strong> You may request the categories and specific pieces
                of personal information we have collected about you in the last 12 months.
              </li>
              <li>
                <strong>Right to Delete:</strong> You may request deletion of your personal information.
              </li>
              <li>
                <strong>Right to Opt Out:</strong> We do not sell or share your personal information
                as defined by the CCPA. No opt-out is necessary.
              </li>
              <li>
                <strong>Right to Non-Discrimination:</strong> We will not discriminate against you
                for exercising any of these rights.
              </li>
            </ul>
            <p>Categories of personal information collected in the last 12 months:</p>
            <ul>
              <li>Identifiers (Apple user ID)</li>
              <li>Commercial information (subscription status, purchase history)</li>
              <li>Internet or network activity (aggregated usage statistics)</li>
              <li>Professional information (industry, self-reported)</li>
              <li>Geolocation (country, self-reported — not GPS)</li>
            </ul>
          </Section>

          <Section title="11. Data Retention">
            <p>
              We retain your data for as long as your account is active. When you
              delete your account, all server-side data (profile, daily stats,
              group memberships, and groups you created) is permanently removed.
              Local data on your device is also erased. Aggregated, anonymized
              benchmark data that cannot be linked back to you may be retained.
            </p>
          </Section>

          <Section title="12. Children's Privacy">
            <p>
              Hardly Working is not intended for users under 17 years of age. We
              do not knowingly collect personal information from children. If we
              learn that we have collected data from a child under 17, we will
              delete it promptly.
            </p>
          </Section>

          <Section title="13. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. Changes will
              be posted on this page with an updated date. Material changes will
              be communicated through the App. Your continued use of the App after
              changes constitutes acceptance of the updated policy.
            </p>
          </Section>

          <Section title="14. Contact">
            <p>
              For privacy inquiries, data requests, or concerns:
            </p>
            <p>
              <strong>Data Controller:</strong> Antonio Baltic
              <br />
              <strong>Email:</strong>{" "}
              <a href="mailto:antoniobaltic@icloud.com">
                antoniobaltic@icloud.com
              </a>
            </p>
            <p>
              We aim to respond to all privacy-related requests within 30 days.
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

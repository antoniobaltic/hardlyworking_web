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
        <p className="font-mono text-xs text-text-primary/50 mb-12">
          Effective: April 23, 2026 · Last updated: April 23, 2026
        </p>

        <div className="prose-custom space-y-8">
          <Section title="1. Acceptance of Terms">
            <p>
              By downloading, installing, or using Hardly Working (&quot;the App&quot;),
              you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not
              agree, do not use the App. These Terms constitute a legally binding agreement
              between you and Antonio Baltic (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;).
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

          <Section title="3. Eligibility">
            <p>
              You must be at least 17 years old to use the App. By using the App,
              you represent and warrant that you are at least 17 years of age and
              have the legal capacity to enter into these Terms. Account creation
              requires Sign in with Apple.
            </p>
          </Section>

          <Section title="4. Subscriptions & In-App Purchases">
            <p>
              Hardly Working offers optional subscription plans:
            </p>
            <ul>
              <li>
                <strong>Weekly:</strong> $2.99 per week. No free trial. Auto-renews weekly.
              </li>
              <li>
                <strong>Annual:</strong> $24.99 per year. Includes a 7-day free trial.
                Auto-renews annually.
              </li>
            </ul>
            <p>
              Hardly Working Pro includes: extended dashboards (Month, Year, and
              Lifetime), insights engine (Audit Findings), personal records and
              category rankings, full country and industry benchmarks, friend group
              creation and management, custom activity categories, CSV data export,
              premium share cards, and exclusive achievements.
            </p>
            <p>
              Subscriptions are managed through your Apple ID and processed by
              the App Store. Payment is charged to your Apple ID account upon
              confirmation of purchase. Subscriptions automatically renew unless
              auto-renew is turned off at least 24 hours before the end of the
              current period.
            </p>
            <p>
              Subscriptions renew at the same price unless we notify you of a
              price change in advance, giving you the opportunity to cancel. No
              refund is provided for the unused portion of the current subscription
              period upon cancellation.
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
              <li>Use automated scripts or bots to interact with the App</li>
            </ul>
          </Section>

          <Section title="6. Intellectual Property">
            <p>
              All content, design, code, graphics, mascot artwork, and trademarks
              in the App are owned by Antonio Baltic and protected by intellectual
              property laws. You may not reproduce, distribute, or create derivative
              works without explicit written permission.
            </p>
          </Section>

          <Section title="7. User-Generated Content">
            <p>
              Content you create within the App (time entries, custom categories,
              group names, group descriptions) remains your property. By using the
              App&apos;s sharing features, you grant us a limited, non-exclusive license
              to display your content in the format you shared it (e.g., share cards).
            </p>
            <p>
              When you participate in friend groups, your aggregated daily statistics
              (total time, session count) and display title become visible to other
              group members. Individual time entries are never shared with group members.
            </p>
          </Section>

          <Section title="8. Privacy">
            <p>
              Your use of the App is also governed by our{" "}
              <a href="/privacy">Privacy Policy</a>, which describes how we collect,
              use, and protect your data. By using the App, you acknowledge that you
              have read and understood our Privacy Policy.
            </p>
            <p>
              Hardly Working does not track you across other apps or websites, does
              not use third-party analytics or advertising attribution SDKs, and does
              not display advertising of any kind. The App does not request permission
              under Apple&apos;s App Tracking Transparency framework because it
              performs no tracking that would require such permission.
            </p>
            <p>
              The App uses two third-party services: Supabase (for authentication,
              profile storage, and aggregate benchmark data) and RevenueCat (for
              subscription management). Both are described in our Privacy Policy.
              By using the App, you also agree to the applicable terms of these
              third-party services.
            </p>
          </Section>

          <Section title="9. Disclaimer of Warranties">
            <p>
              THE APP IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES
              OF ANY KIND, EXPRESS OR IMPLIED. WE DO NOT GUARANTEE THE ACCURACY OF
              TIME CALCULATIONS, MONETARY ESTIMATES, BENCHMARK DATA, OR THE
              CONTINUOUS AVAILABILITY OF THE SERVICE.
            </p>
            <p>
              This App does not constitute legal, financial, or employment
              advice. We are not responsible for any consequences arising from
              your use of the App, including but not limited to employment
              disputes, disciplinary actions, or interpersonal conflicts.
            </p>
          </Section>

          <Section title="10. Limitation of Liability">
            <p>
              To the maximum extent permitted by law, we shall not be liable for
              any indirect, incidental, special, consequential, or punitive
              damages arising from your use of the App, including loss of data,
              loss of income, or employment-related consequences.
            </p>
            <p>
              Our total liability for any claims arising from these Terms or your
              use of the App shall not exceed the amount you paid us in the 12
              months preceding the claim.
            </p>
          </Section>

          <Section title="11. Termination">
            <p>
              We reserve the right to suspend or terminate your access to the App
              if you violate these Terms or engage in conduct harmful to other users
              or our services. You may delete your account at any time through the
              App&apos;s Profile → Account → Delete Account.
            </p>
            <p>
              Upon termination, your right to use the App ceases immediately. Sections
              relating to intellectual property, disclaimers, limitation of liability,
              and governing law survive termination.
            </p>
          </Section>

          <Section title="12. Governing Law & Disputes">
            <p>
              These Terms are governed by the laws of the Republic of Austria,
              without regard to conflict of law provisions. Any disputes arising
              from these Terms shall be resolved in the competent courts of
              Graz, Austria.
            </p>
            <p>
              If you are an EU consumer, you retain the right to bring claims in
              the courts of your country of residence. Nothing in these Terms
              affects your statutory rights as a consumer under applicable law.
            </p>
            <p>
              Before initiating any formal dispute, you agree to contact us at{" "}
              <a href="mailto:antoniobaltic@icloud.com">antoniobaltic@icloud.com</a>{" "}
              and attempt to resolve the matter informally within 30 days.
            </p>
          </Section>

          <Section title="13. Changes to Terms">
            <p>
              We may update these Terms from time to time. Changes will be posted
              on this page with an updated date. Material changes will be communicated
              through the App. Your continued use of the App after changes
              constitutes acceptance of the new Terms.
            </p>
          </Section>

          <Section title="14. Apple App Store Terms">
            <p>
              These Terms constitute an agreement between you and Antonio Baltic
              only, and not with Apple Inc. (&quot;Apple&quot;). Apple is not responsible for
              the App or its content.
            </p>
            <p>
              The license granted to you is limited to a non-transferable right
              to use the App on Apple-branded products that you own or control,
              as permitted by the App Store Terms of Service, including Family
              Sharing where applicable.
            </p>
            <p>
              Antonio Baltic, not Apple, is solely responsible for the App,
              including any maintenance, support, warranty, product liability, and
              intellectual property claims. In the event the App fails to conform
              to any applicable warranty, you may notify Apple for a refund of the
              purchase price (if any); beyond that, Apple has no other warranty
              obligation.
            </p>
            <p>
              Antonio Baltic, not Apple, is responsible for addressing any claims
              relating to the App, including product liability claims, claims that
              the App fails to meet legal or regulatory requirements, and claims
              arising under consumer protection, privacy, or similar legislation.
            </p>
            <p>
              In the event of any third-party claim that the App infringes a
              third party&apos;s intellectual property rights, Antonio Baltic, not
              Apple, is responsible for the investigation, defense, settlement,
              and discharge of such claim.
            </p>
            <p>
              You represent and warrant that you are not located in a country
              subject to a U.S. Government embargo or designated as a
              &quot;terrorist supporting&quot; country, and you are not listed on any
              U.S. Government prohibited or restricted parties list.
            </p>
            <p>
              Apple and its subsidiaries are third-party beneficiaries of these
              Terms. Upon your acceptance, Apple has the right (and is deemed to
              have accepted the right) to enforce these Terms against you as a
              third-party beneficiary.
            </p>
          </Section>

          <Section title="15. General Provisions">
            <p>
              If any provision of these Terms is found to be unenforceable or
              invalid, that provision will be limited or eliminated to the minimum
              extent necessary, and the remaining provisions will remain in full
              force and effect.
            </p>
            <p>
              These Terms, together with our{" "}
              <a href="/privacy">Privacy Policy</a>, constitute the entire agreement
              between you and Antonio Baltic regarding the App and supersede all
              prior agreements.
            </p>
            <p>
              Our failure to enforce any right or provision of these Terms does not
              constitute a waiver of that right or provision.
            </p>
          </Section>

          <Section title="16. Contact">
            <p>
              For questions about these Terms:
            </p>
            <p>
              <strong>Antonio Baltic</strong>
              <br />
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

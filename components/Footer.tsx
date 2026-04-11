export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-text-primary/[0.04]">
      <div className="max-w-5xl mx-auto">
        {/* Top row: brand + links */}
        <div className="flex flex-col items-center gap-8">
          <div className="text-center">
            <p className="font-mono text-xs font-bold text-text-primary/50">
              Hardly Working Corp<span className="text-dead-blue">.</span>
            </p>
            <p className="font-mono text-[10px] text-text-primary/45 mt-1">
              © 2026 Hardly Working Corp. All rights reclaimed.
            </p>
          </div>

          {/* Links — centered, wrap nicely */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <a
              href="/memos"
              className="font-mono text-xs text-text-primary/50 hover:text-text-primary/70 transition-colors"
            >
              Memos
            </a>
            <a
              href="/privacy"
              className="font-mono text-xs text-text-primary/50 hover:text-text-primary/70 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="font-mono text-xs text-text-primary/50 hover:text-text-primary/70 transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="mailto:antoniobaltic@icloud.com?subject=Hardly%20Working%20%E2%80%94%20Support%20Request"
              className="font-mono text-xs text-text-primary/50 hover:text-text-primary/70 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 pt-6 border-t border-text-primary/[0.03]">
          <p className="font-mono text-[11px] text-text-primary/40 text-center leading-relaxed max-w-xl mx-auto">
            CORPORATE NOTICE: Hardly Working Corp. is a fictional entity and is
            not affiliated with, endorsed by, or connected to your actual
            employer. Time reclamation figures are self-reported and should not be
            used in performance reviews, salary negotiations, or legal
            proceedings. The Department of Employee Morale has been permanently
            dissolved. Hardly Working Corp. · Time Reclamation Solutions · Est. 2026.
          </p>
        </div>
      </div>
    </footer>
  );
}

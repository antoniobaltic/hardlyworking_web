export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-text-primary/[0.04]">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <p className="font-mono text-xs font-bold text-text-primary/30">
              Hardly Working<span className="text-dead-blue">.</span>
            </p>
            <p className="font-mono text-[10px] text-text-primary/35 mt-1">
              © 2026 Hardly Working. All rights reclaimed.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="/privacy"
              className="font-mono text-xs text-text-primary/30 hover:text-text-primary/60 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="font-mono text-xs text-text-primary/30 hover:text-text-primary/60 transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="mailto:antoniobaltic@icloud.com"
              className="font-mono text-xs text-text-primary/30 hover:text-text-primary/60 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-text-primary/[0.03]">
          <p className="font-mono text-[9px] text-text-primary/30 text-center leading-relaxed max-w-xl mx-auto">
            NOTICE: This application is not endorsed, sponsored, or affiliated
            with your employer. Any resemblance to actual workplace productivity
            tools is purely coincidental. Time reclamation figures are
            self-reported and should not be used in performance reviews, salary
            negotiations, or legal proceedings. The Department of Employee Morale
            has been permanently dissolved.
          </p>
        </div>
      </div>
    </footer>
  );
}

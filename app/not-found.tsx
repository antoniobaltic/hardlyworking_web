import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6">
      <img
        src="/mascot_welcome.png"
        alt="John D., Employee Relations Officer"
        className="w-44 h-auto mb-8 drop-shadow-md"
      />

      <p className="font-mono text-6xl sm:text-7xl font-bold text-text-primary/[0.06] mb-2">
        404
      </p>

      <h1 className="font-mono text-xl sm:text-2xl font-bold text-text-primary mb-3">
        #EMPLOYEE_NOT_FOUND
      </h1>

      <p className="font-mono text-sm text-text-primary/50 text-center max-w-sm mb-2">
        The requested resource does not exist in our records.
        This incident has been logged.
      </p>

      <p className="font-mono text-[10px] text-text-primary/35 text-center max-w-xs mb-8">
        If you believe this is an error, please contact the Department of
        Internal Communications. Note: the Department may not respond.
      </p>

      <Link
        href="/"
        className="font-mono text-sm text-dead-blue hover:text-dead-blue/70 transition-colors"
      >
        ← Return to headquarters
      </Link>

      <p className="font-mono text-[10px] text-text-primary/30 mt-12">
        HARDLY WORKING CORP. · ERROR HANDLING DEPT. · REF: 404-NF
      </p>
    </div>
  );
}

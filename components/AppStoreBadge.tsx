const APP_STORE_URL = "https://apps.apple.com/app/id6761917321";

export default function AppStoreBadge({ className = "" }: { className?: string }) {
  return (
    <a
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block hover:opacity-80 transition-opacity ${className}`}
    >
      <img
        src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83"
        alt="Download on the App Store"
        className="h-14 sm:h-16 w-auto"
      />
    </a>
  );
}

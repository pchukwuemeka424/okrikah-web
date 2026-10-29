import { SITE } from '@/lib/site';

type Props = {
  className?: string;
  size?: 'md' | 'lg';
};

export function StoreBadges({ className = '', size = 'md' }: Props) {
  const h = size === 'lg' ? 'h-14' : 'h-12';

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <a
        href={SITE.appStoreUrl}
        aria-label="Download on the App Store"
        className={`${h} inline-flex items-center gap-3 rounded-xl bg-ink px-4 text-white transition hover:bg-navy-deep`}
      >
        <AppleLogo className="h-7 w-7 shrink-0" />
        <span className="flex flex-col leading-tight text-left">
          <span className="text-[10px] font-medium tracking-wide opacity-80">
            Download on the
          </span>
          <span className="text-[17px] font-semibold tracking-tight">App Store</span>
        </span>
      </a>

      <a
        href={SITE.playStoreUrl}
        aria-label="Get it on Google Play"
        className={`${h} inline-flex items-center gap-3 rounded-xl border border-line-strong bg-surface px-4 text-ink transition hover:border-navy hover:bg-navy-soft`}
      >
        <GooglePlayLogo className="h-7 w-7 shrink-0" />
        <span className="flex flex-col leading-tight text-left">
          <span className="text-[10px] font-medium tracking-wide text-muted">GET IT ON</span>
          <span className="text-[17px] font-semibold tracking-tight">Google Play</span>
        </span>
      </a>
    </div>
  );
}

function AppleLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

function GooglePlayLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path fill="#EA4335" d="M3.6 2.3c-.3.2-.5.6-.5 1v17.4c0 .4.2.8.5 1l.1.1 9.7-9.7v-.2L3.7 2.2l-.1.1z" />
      <path fill="#FBBC04" d="m14.1 12.9-2.2 2.2 2.9 2.9 3.6-2.1c.5-.3.8-.8.8-1.4 0-.5-.3-1-.8-1.3l-4.3-2.5v2.2z" />
      <path fill="#4285F4" d="m16.7 6.2-3.6-2.1-2.9 2.9 2.2 2.2 4.3-2.5c.4-.2.6-.5.6-.8 0-.4-.2-.7-.6-.7z" />
      <path fill="#34A853" d="M3.6 21.7c.2.1.4.2.6.2.3 0 .6-.1.9-.3l9.7-5.6-2.9-2.9-8.3 8.6z" />
      <path fill="#188038" d="m11.9 12-2.2-2.2L3.6 2.3v.1L11.9 12z" opacity=".2" />
    </svg>
  );
}

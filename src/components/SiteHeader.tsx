import Image from 'next/image';
import Link from 'next/link';
import { SITE } from '@/lib/site';

const NAV = [
  { href: '/#features', label: 'Features' },
  { href: '/#screens', label: 'App' },
  { href: '/privacy', label: 'Privacy' },
  { href: '/account-deletion', label: 'Delete account' },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5">
        <Link href="/" className="flex items-center gap-2.5" aria-label={`${SITE.name} home`}>
          <Image
            src="/brand/logo.png"
            alt={SITE.name}
            width={150}
            height={40}
            className="h-8 w-auto"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate transition hover:text-navy"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/#download"
          className="inline-flex h-10 items-center rounded-full bg-navy px-4 text-sm font-semibold text-white transition hover:bg-navy-deep"
        >
          Get the app
        </Link>
      </div>
    </header>
  );
}

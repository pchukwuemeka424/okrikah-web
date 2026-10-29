import Image from 'next/image';
import Link from 'next/link';
import { StoreBadges } from '@/components/StoreBadges';
import { SITE } from '@/lib/site';

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.2fr_1fr_1fr]">
        <div className="space-y-4">
          <Image src="/brand/logo.png" alt={SITE.name} width={160} height={42} className="h-9 w-auto" />
          <p className="max-w-sm text-sm leading-relaxed text-slate">{SITE.description}</p>
          <StoreBadges />
        </div>

        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-muted">
            Product
          </p>
          <ul className="space-y-2 text-sm text-slate">
            <li>
              <Link href="/#features" className="hover:text-navy">
                Features
              </Link>
            </li>
            <li>
              <Link href="/#screens" className="hover:text-navy">
                Screens
              </Link>
            </li>
            <li>
              <Link href="/#download" className="hover:text-navy">
                Download
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-muted">
            Legal
          </p>
          <ul className="space-y-2 text-sm text-slate">
            <li>
              <Link href="/privacy" className="hover:text-navy">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-navy">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href="/account-deletion" className="hover:text-navy">
                Account deletion
              </Link>
            </li>
            <li>
              <a href={`mailto:${SITE.contactEmail}`} className="hover:text-navy">
                {SITE.contactEmail}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p>{SITE.tagline}</p>
        </div>
      </div>
    </footer>
  );
}

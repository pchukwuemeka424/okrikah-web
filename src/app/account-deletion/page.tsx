import type { Metadata } from 'next';
import Link from 'next/link';
import { AccountDeletionForm } from '@/components/AccountDeletionForm';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Delete account',
  description: `Permanently delete your ${SITE.name} account by entering your email and confirming.`,
  authors: [{ name: SITE.owner }],
  creator: SITE.owner,
  robots: { index: false, follow: true },
};

export default function AccountDeletionPage() {
  return (
    <div className="border-b border-line bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:gap-12 sm:px-5 sm:py-16 lg:grid-cols-[1fr_1.05fr] lg:items-start">
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
            Account & data
          </p>
          <h1 className="mt-3 font-display text-[2rem] font-semibold tracking-tight text-ink sm:text-4xl">
            Delete your account
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-slate">
            Permanently remove your {SITE.name} profile, shop, listings, feed posts, and uploaded
            media. This action cannot be undone.
          </p>

          <div className="mt-8 rounded-2xl border border-crimson/20 bg-crimson-soft p-5">
            <p className="text-sm font-semibold text-crimson">Before you continue</p>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-ink/80">
              <li>Finish or cancel any open orders first.</li>
              <li>Enter the email on your account, then confirm in the popup.</li>
              <li>Deleted accounts cannot be recovered.</li>
            </ul>
          </div>

          <div className="mt-10 space-y-6 text-sm leading-relaxed text-slate">
            <div>
              <h2 className="font-display text-lg font-semibold text-ink">What we delete</h2>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Profile, username, and login credentials</li>
                <li>Shop details and payout information</li>
                <li>Listings, feed posts, favourites, and offers</li>
                <li>Uploaded photos, videos, and KYC media</li>
              </ul>
            </div>
            <div>
              <h2 className="font-display text-lg font-semibold text-ink">Prefer the app?</h2>
              <p className="mt-2">
                You can also delete from the app under You → Security → Delete account.
              </p>
            </div>
            <p>
              Questions?{' '}
              <a
                href={`mailto:${SITE.contactEmail}`}
                className="font-medium text-navy underline underline-offset-2"
              >
                {SITE.contactEmail}
              </a>
              {' · '}
              <Link href="/privacy" className="font-medium text-navy underline underline-offset-2">
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>

        <AccountDeletionForm />
      </div>
    </div>
  );
}

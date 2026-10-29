import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `How ${SITE.name}, owned by ${SITE.owner}, collects, uses, and protects your information.`,
  authors: [{ name: SITE.owner }],
  creator: SITE.owner,
};

export default function PrivacyPage() {
  return (
    <div className="border-b border-line bg-surface">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-5 sm:py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">Legal</p>
        <h1 className="mt-3 font-display text-[2rem] font-semibold tracking-tight text-ink sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-3 text-sm font-medium text-muted">Last updated {SITE.updated}</p>

        <div className="legal-prose mt-10">
          <h2>Who we are</h2>
          <p>
            {SITE.name} (“we”, “us”) is a marketplace for buying and selling fashion in Nigeria,
            owned and operated by {SITE.owner} ({SITE.company}). Visit{' '}
            <a href={SITE.companyUrl} target="_blank" rel="noopener noreferrer">
              {SITE.companyUrl.replace(/^https?:\/\//, '').replace(/\/$/, '')}
            </a>
            . This policy explains what information we collect and how we use it when you use the{' '}
            {SITE.name} app.
          </p>

          <h2>Information we collect</h2>
          <p>
            Account details you provide (name, email, phone, username, avatar, bio, and location).
            For sellers: shop details, bank payout information, and KYC documents. Listings,
            orders, offers, messages, feed posts, favourites, and device push tokens so we can
            notify you about orders and account activity.
          </p>

          <h2>How we use your information</h2>
          <p>
            To create and secure your account, run the marketplace (listings, offers, checkout,
            delivery updates), verify sellers, prevent fraud, send transactional notifications,
            and improve the product. We do not sell your personal information.
          </p>

          <h2>Sharing</h2>
          <p>
            We share data with service providers that help us operate {SITE.name} (for example
            hosting, payments, and push delivery), and when required by law. Other users may see
            your public profile, shop, listings, and feed activity.
          </p>

          <h2>Payments & KYC</h2>
          <p>
            Bank transfer details and identity documents are used only to complete orders and
            verify sellers. Keep your login secure and never share one-time codes.
          </p>

          <h2>Your choices</h2>
          <p>
            You can update profile details in the app, manage notification permissions on your
            device, and request account deletion from Security in the app or via our{' '}
            <Link href="/account-deletion">account deletion page</Link>. Contact us if you need
            help accessing or correcting your data.
          </p>

          <h2>Data retention</h2>
          <p>
            We keep account and transaction records as long as needed to operate the marketplace,
            meet legal obligations, and resolve disputes. When you delete your account, we remove
            profile, shop, listings, feed posts, and uploaded media as described on the account
            deletion page, subject to records we must retain by law.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about privacy:{' '}
            <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>
          </p>
        </div>
      </div>
    </div>
  );
}

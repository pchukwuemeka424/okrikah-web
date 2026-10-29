import type { Metadata } from 'next';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: `Terms of use for the ${SITE.name} fashion marketplace, owned by ${SITE.owner}.`,
  authors: [{ name: SITE.owner }],
  creator: SITE.owner,
};

export default function TermsPage() {
  return (
    <div className="border-b border-line bg-surface">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-5 sm:py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">Legal</p>
        <h1 className="mt-3 font-display text-[2rem] font-semibold tracking-tight text-ink sm:text-4xl">
          Terms & Conditions
        </h1>
        <p className="mt-3 text-sm font-medium text-muted">Last updated {SITE.updated}</p>

        <div className="legal-prose mt-10">
          <h2>Agreement</h2>
          <p>
            By using {SITE.name}, you agree to these Terms & Conditions. If you do not agree, do
            not use the app. {SITE.name} provides a platform for buyers and sellers to discover,
            offer on, and purchase fashion items.
          </p>

          <h2>Accounts</h2>
          <p>
            You must provide accurate information and keep your login secure. You are responsible
            for activity under your account. Vendors must complete shop setup and any required
            identity checks before selling.
          </p>

          <h2>Buying & selling</h2>
          <p>
            Listings, prices, offers, and payment instructions are between buyers and sellers.{' '}
            {SITE.name} helps facilitate discovery and order flow, but sellers are responsible for
            item accuracy, fulfilment, and lawful sale. Buyers are responsible for paying as
            agreed and providing a valid delivery address.
          </p>

          <h2>Payments</h2>
          <p>
            Orders may be paid by bank transfer or other methods shown in the app. Do not send
            payment outside the agreed checkout flow. Disputes should first be raised with the
            other party; contact support if you need help.
          </p>

          <h2>Content & feed</h2>
          <p>
            You retain rights to content you post, and grant {SITE.name} a licence to host and
            display it in the app. Do not post illegal, infringing, or harmful content. We may
            remove content or restrict accounts that break these terms.
          </p>

          <h2>Prohibited use</h2>
          <p>
            You may not misuse the platform, attempt unauthorized access, scrape data, harass
            others, or list prohibited goods. We may suspend or terminate accounts that violate
            these terms.
          </p>

          <h2>Limitation of liability</h2>
          <p>
            {SITE.name} is provided as available. To the fullest extent permitted by law, we are
            not liable for indirect losses, or for disputes arising solely between buyers and
            sellers. Nothing in these terms limits rights you have under applicable Nigerian
            consumer law.
          </p>

          <h2>Changes</h2>
          <p>
            We may update these terms. Continued use after changes means you accept the updated
            terms. The date above shows the latest revision.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about these terms:{' '}
            <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>
          </p>
        </div>
      </div>
    </div>
  );
}

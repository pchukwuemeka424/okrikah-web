import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `How ${SITE.name} collects, uses, shares, and protects your personal information, and how you can delete your account.`,
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
          <h2>1. Introduction</h2>
          <p>
            This Privacy Policy explains how {SITE.name} (“{SITE.name}”, “we”, “us”, or “our”)
            collects, uses, stores, shares, and protects personal information when you use our
            mobile application and related services (together, the “Service”). {SITE.name} is a
            fashion marketplace that helps people discover, buy, and sell thrift and second-hand
            fashion in Nigeria.
          </p>
          <p>
            By creating an account or using the Service, you acknowledge that you have read and
            understood this Policy. If you do not agree, please do not use the Service.
          </p>

          <h2>2. Information we collect</h2>
          <p>We collect information in the following categories:</p>
          <ul>
            <li>
              <strong>Account information.</strong> Name, email address, phone number, username,
              password (stored in hashed form), profile photo, bio, and location details you
              choose to provide.
            </li>
            <li>
              <strong>Seller and shop information.</strong> Shop name, shop description, cover or
              logo images, delivery preferences, and other details needed to operate a storefront.
            </li>
            <li>
              <strong>Identity and payout information (sellers).</strong> KYC documents or selfie
              verification materials, and bank account details used to receive payouts.
            </li>
            <li>
              <strong>Marketplace activity.</strong> Listings, photos and videos, prices, offers,
              orders, favourites, reviews, questions, reports, and related status history.
            </li>
            <li>
              <strong>Communications.</strong> In-app messages between buyers and sellers, support
              requests, and feedback you send to us.
            </li>
            <li>
              <strong>Community content.</strong> Feed posts, comments, and related interactions.
            </li>
            <li>
              <strong>Device and technical data.</strong> Device type, operating system, app
              version, push notification tokens, approximate network information, and diagnostic
              logs needed to keep the Service reliable and secure.
            </li>
            <li>
              <strong>Payment-related data.</strong> Transaction references and status from our
              payment partners. We do not store full card numbers on our servers when payments are
              processed by third-party payment providers.
            </li>
          </ul>

          <h2>3. How we use your information</h2>
          <p>We use personal information to:</p>
          <ul>
            <li>Create, authenticate, and secure your account</li>
            <li>Operate marketplace features such as browsing, listing, offers, checkout, and order tracking</li>
            <li>Display public profiles, shops, listings, and feed content to other users as intended by the Service</li>
            <li>Verify sellers, reduce fraud, and enforce our terms and community standards</li>
            <li>Process payments and seller payouts through our payment partners</li>
            <li>Send transactional notices (for example order updates, offer activity, and security alerts)</li>
            <li>Provide customer support and respond to requests</li>
            <li>Improve product performance, reliability, and user experience</li>
            <li>Comply with legal obligations and protect the rights, safety, and property of {SITE.name}, our users, and others</li>
          </ul>
          <p>
            We do <strong>not</strong> sell your personal information to third parties for their
            independent marketing purposes.
          </p>

          <h2>4. How we share information</h2>
          <p>We may share information only as needed to operate the Service:</p>
          <ul>
            <li>
              <strong>With other users.</strong> Public profile details, shop information,
              listings, offers you make or receive in the normal flow of a transaction, and feed
              content you choose to post may be visible to other users.
            </li>
            <li>
              <strong>With service providers.</strong> Trusted vendors that help us with hosting,
              databases, media storage, analytics or crash diagnostics, email or push delivery,
              payments, and identity verification, under appropriate contractual safeguards.
            </li>
            <li>
              <strong>For legal and safety reasons.</strong> When required by law, regulation,
              legal process, or to investigate fraud, abuse, or security incidents.
            </li>
            <li>
              <strong>Business transfers.</strong> If we are involved in a merger, acquisition, or
              asset transfer, personal information may be transferred as part of that transaction,
              subject to this Policy or equivalent protections.
            </li>
          </ul>

          <h2>5. Payments, banking, and KYC</h2>
          <p>
            Seller bank details and identity documents are used only to verify sellers, complete
            payouts, and meet anti-fraud and compliance needs. Payment processing may be handled by
            third-party providers. You should never share one-time passwords, banking PINs, or
            recovery codes with anyone claiming to represent {SITE.name}.
          </p>

          <h2>6. Data retention</h2>
          <p>
            We retain personal information for as long as your account remains active and for as
            long as reasonably necessary to provide the Service, resolve disputes, enforce
            agreements, prevent abuse, and meet legal, tax, or accounting requirements.
          </p>
          <p>
            When you delete your account, we delete or de-identify personal data associated with
            your profile as described below, except where we must keep limited records (for
            example completed transaction history required for financial, legal, or fraud
            prevention purposes).
          </p>

          <h2>7. Account deletion</h2>
          <p>You may request permanent deletion of your {SITE.name} account at any time:</p>
          <ul>
            <li>
              In the app: go to <strong>You → Security → Delete account</strong>
            </li>
            <li>
              On the web:{' '}
              <Link href="/account-deletion">okrikah account deletion page</Link>
            </li>
          </ul>
          <p>When deletion is completed, we permanently remove:</p>
          <ul>
            <li>Your profile, username, and login credentials</li>
            <li>Shop details and payout information linked to your account</li>
            <li>Your listings, feed posts, favourites, and offers</li>
            <li>Uploaded photos, videos, and KYC media associated with your account</li>
          </ul>
          <p>
            Account deletion cannot be undone. Before deleting, please finish or cancel open
            orders where possible. Some anonymised or legally required records may remain after
            deletion.
          </p>

          <h2>8. Your choices and rights</h2>
          <p>Depending on applicable law, you may be able to:</p>
          <ul>
            <li>Access and update account information in the app</li>
            <li>Correct inaccurate personal details</li>
            <li>Manage device notification permissions</li>
            <li>Request deletion of your account and related personal data</li>
            <li>Contact us with privacy questions or requests</li>
          </ul>
          <p>
            To exercise these options, use in-app settings where available, the{' '}
            <Link href="/account-deletion">account deletion page</Link>, or email{' '}
            <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>.
          </p>

          <h2>9. Security</h2>
          <p>
            We use administrative, technical, and organisational measures designed to protect
            personal information against unauthorised access, loss, misuse, or alteration. No
            method of transmission or storage is completely secure, so we cannot guarantee absolute
            security. You are responsible for keeping your login credentials confidential.
          </p>

          <h2>10. Children’s privacy</h2>
          <p>
            {SITE.name} is not directed to children under 18. We do not knowingly collect personal
            information from children. If you believe a child has provided us with personal
            information, contact us and we will take appropriate steps to delete it.
          </p>

          <h2>11. International processing</h2>
          <p>
            Our Service may be supported by infrastructure or vendors located outside Nigeria.
            Where personal information is processed in another country, we take steps reasonably
            designed to ensure it continues to be protected in line with this Policy and applicable
            law.
          </p>

          <h2>12. Changes to this Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. When we do, we will revise the
            “Last updated” date above. Continued use of the Service after an update means you
            accept the revised Policy. If changes are material, we may provide additional notice in
            the app or by email where appropriate.
          </p>

          <h2>13. Contact us</h2>
          <p>
            For privacy questions, data requests, or concerns about how your information is
            handled, contact us at{' '}
            <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>.
          </p>
          <p>
            Related pages:{' '}
            <Link href="/terms">Terms &amp; Conditions</Link>
            {' · '}
            <Link href="/account-deletion">Delete account</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

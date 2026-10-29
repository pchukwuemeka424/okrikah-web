import Image from 'next/image';
import Link from 'next/link';
import { FeatureIcon } from '@/components/FeatureIcon';
import { PhoneShot } from '@/components/PhoneShot';
import { StoreBadges } from '@/components/StoreBadges';
import { FEATURES, SCREENSHOTS, SITE } from '@/lib/site';

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line">
        <div className="absolute inset-0">
          <Image
            src="/images/marketing-hero.jpg"
            alt="Flat-lay fashion pieces for the Okrikah marketplace"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-ink/55" />
        </div>

        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
          <div className="text-white">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/75">
              Nigerian fashion resale
            </p>
            <Image
              src="/brand/logo.png"
              alt={SITE.name}
              width={220}
              height={58}
              className="mb-5 h-12 w-auto brightness-0 invert"
              priority
            />
            <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-[3.4rem]">
              {SITE.tagline}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
              {SITE.description}
            </p>
            <div id="download" className="mt-8 scroll-mt-28">
              <StoreBadges size="lg" />
            </div>
            <p className="mt-4 text-sm text-white/65">
              Available on iOS and Android. Free to browse — sellers set up a shop in minutes.
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-[280px] lg:max-w-[300px]">
            <PhoneShot
              src="/screenshots/home.png"
              alt="Okrikah home screen"
              priority
              className="max-w-none"
            />
          </div>
        </div>
      </section>

      <section id="features" className="scroll-mt-20 border-b border-line bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
              Features
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Everything you need to buy and sell fashion
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate">
              Okrikah connects thrift hunters and sellers with listings, offers, shops, and a
              style feed — built for Nigeria.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((feature) => (
              <article
                key={feature.title}
                className="rounded-2xl border border-line bg-bg p-6 transition hover:border-navy/30"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-navy-soft text-navy">
                  <FeatureIcon name={feature.icon} />
                </div>
                <h3 className="text-lg font-semibold text-ink">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">{feature.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="screens" className="scroll-mt-20 border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
              Inside the app
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Real screens from Okrikah
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate">
              Home discovery, browse filters, seller onboarding, and the community feed —
              captured from the live iOS build.
            </p>
          </div>

          <div className="mt-14 flex gap-6 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-3 md:gap-8 md:overflow-visible lg:grid-cols-5">
            {SCREENSHOTS.map((shot, index) => (
              <div key={shot.src} className="w-[220px] shrink-0 md:w-auto">
                <PhoneShot
                  src={shot.src}
                  alt={shot.alt}
                  label={shot.label}
                  priority={index < 2}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-navy">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Start selling your wardrobe
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-white/80">
              Open a shop, list clothes, bags, shoes, and hair, then reach buyers across
              Nigeria. Offers, orders, and payouts stay in one place.
            </p>
            <div className="mt-8">
              <StoreBadges size="lg" />
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[260px]">
            <PhoneShot src="/screenshots/sell.png" alt="Sell on Okrikah" className="max-w-none" />
          </div>
        </div>
      </section>

      <section className="bg-bg-alt">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <div className="rounded-3xl border border-line bg-surface p-8 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
              <div>
                <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                  Privacy & account control
                </h2>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate sm:text-base">
                  Read how we handle your data, or request permanent account deletion. You stay
                  in control of your Okrikah profile.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/privacy"
                  className="inline-flex h-11 items-center rounded-full bg-navy px-5 text-sm font-semibold text-white hover:bg-navy-deep"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/account-deletion"
                  className="inline-flex h-11 items-center rounded-full border border-line-strong bg-surface px-5 text-sm font-semibold text-ink hover:border-navy hover:bg-navy-soft"
                >
                  Delete account
                </Link>
                <Link
                  href="/terms"
                  className="inline-flex h-11 items-center rounded-full border border-transparent px-5 text-sm font-semibold text-slate hover:text-navy"
                >
                  Terms
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

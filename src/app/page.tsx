import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FeatureIcon } from '@/components/FeatureIcon';
import { PhoneShot } from '@/components/PhoneShot';
import { StoreBadges } from '@/components/StoreBadges';
import { FEATURES, SCREENSHOTS, SELLER_QUESTIONS, SELLER_STEPS, SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: {
    absolute: SITE.title,
  },
  description: SITE.description,
  alternates: { canonical: '/' },
  openGraph: {
    title: SITE.title,
    description: SITE.description,
    url: '/',
  },
};

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line">
        <div className="absolute inset-0">
          <Image
            src="/images/marketing-hero.jpg"
            alt="Thriftwear, jeans, and sneakers styled for the Ọkrikah fashion marketplace in Nigeria"
            fill
            priority
            fetchPriority="high"
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* Left-weighted scrim keeps headline readable over the full-bleed photo */}
          <div className="absolute inset-0 bg-gradient-to-r from-ink/88 via-ink/72 to-ink/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-ink/25" />
        </div>

        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:gap-12 sm:px-5 sm:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:py-28">
          <div className="hero-copy min-w-0 text-white">
            <Image
              src="/brand/logo.png"
              alt={SITE.brandName}
              width={240}
              height={64}
              className="mb-6 h-11 w-auto brightness-0 invert sm:mb-7 sm:h-14"
              priority
            />
            <h1 className="font-display text-[1.85rem] font-semibold leading-[1.12] tracking-tight sm:text-[2.75rem] lg:text-[3.25rem]">
              Do You Sell Thriftwear, Wigs, Bags or Shoes?
            </h1>
            <p className="mt-5 max-w-xl font-display text-xl font-medium leading-snug text-white sm:mt-6 sm:text-2xl">
              Take your business online with Ọkrikah!
            </p>
            <p className="mt-4 max-w-lg text-[0.98rem] leading-relaxed text-white/88 sm:text-lg">
              Create your online store, showcase your products, and connect with customers
              looking to shop. Download the Ọkrikah app, register your business, and start
              selling today!
            </p>
            <div id="download" className="mt-8 scroll-mt-28 sm:mt-9">
              <StoreBadges size="lg" />
            </div>
          </div>

          <div className="hero-device relative mx-auto w-full max-w-[220px] sm:max-w-[260px] lg:max-w-[300px]">
            <PhoneShot
              src="/screenshots/sell.png"
              alt="Create a shop and sell thriftwear on the Ọkrikah app"
              priority
              className="max-w-none"
            />
          </div>
        </div>
      </section>

      <section id="sell-steps" className="scroll-mt-20 border-b border-line bg-bg-alt">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-5 sm:py-20">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
              Start selling
            </p>
            <h2 className="mt-3 font-display text-[1.75rem] font-semibold tracking-tight text-ink sm:text-4xl">
              From download to your first customers
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate sm:text-base">
              Ọkrikah helps thrift sellers in Nigeria open an online store and reach shoppers
              looking for fashion, wigs, bags, and shoes.
            </p>
          </div>

          <ol className="mt-10 grid gap-8 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
            {SELLER_STEPS.map((step, index) => (
              <li key={step.title} className="min-w-0">
                <p className="font-display text-3xl font-semibold text-navy/25">{index + 1}</p>
                <h3 className="mt-3 text-lg font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="features" className="scroll-mt-20 border-b border-line bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-5 sm:py-20">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
              Features
            </p>
            <h2 className="mt-3 font-display text-[1.75rem] font-semibold tracking-tight text-ink sm:text-4xl">
              Everything you need to buy and sell fashion
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate sm:text-base">
              Ọkrikah connects thrift hunters and sellers with listings, offers, shops, and a
              style feed, built for Nigeria by {SITE.company}.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:mt-12 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((feature) => (
              <article
                key={feature.title}
                className="rounded-2xl border border-line bg-bg p-5 sm:p-6 transition hover:border-navy/30"
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
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-5 sm:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
              Inside the app
            </p>
            <h2 className="mt-3 font-display text-[1.75rem] font-semibold tracking-tight text-ink sm:text-4xl">
              Real screens from Okrikah
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate sm:text-base">
              Home discovery, browse filters, seller onboarding, and the community feed,
              captured from the live iOS build.
            </p>
          </div>

          <div className="-mx-4 mt-10 flex gap-4 overflow-x-auto px-4 pb-4 [-ms-overflow-style:none] [scrollbar-width:none] snap-x snap-mandatory [&::-webkit-scrollbar]:hidden sm:mx-0 sm:mt-14 sm:gap-6 sm:px-0 md:grid md:grid-cols-3 md:gap-8 md:overflow-visible lg:grid-cols-5">
            {SCREENSHOTS.map((shot, index) => (
              <div key={shot.src} className="w-[180px] shrink-0 snap-start sm:w-[220px] md:w-auto">
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

      <section id="seller-questions" className="scroll-mt-20 border-b border-line bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-5 sm:py-20">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
              Seller questions
            </p>
            <h2 className="mt-3 font-display text-[1.75rem] font-semibold tracking-tight text-ink sm:text-4xl">
              Answers shoppers and sellers look for
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate sm:text-base">
              Clear answers about selling thriftwear, wigs, bags, and shoes on Ọkrikah in Nigeria.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:mt-12 lg:grid-cols-2">
            {SELLER_QUESTIONS.map((item) => (
              <article key={item.question} className="min-w-0 border-t border-line pt-5">
                <h3 className="text-lg font-semibold text-ink">{item.question}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate sm:text-base">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-navy">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-12 sm:gap-10 sm:px-5 sm:py-16 lg:grid-cols-2">
          <div className="min-w-0">
            <h2 className="font-display text-[1.75rem] font-semibold tracking-tight text-white sm:text-4xl">
              Start selling your wardrobe
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/80 sm:text-base">
              Open a shop, list clothes, bags, shoes, and hair, then reach buyers across
              Nigeria. Offers, orders, and payouts stay in one place.
            </p>
            <div className="mt-7 sm:mt-8">
              <StoreBadges size="lg" />
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[200px] sm:max-w-[260px]">
            <PhoneShot src="/screenshots/sell.png" alt="Sell on Okrikah" className="max-w-none" />
          </div>
        </div>
      </section>

      <section className="bg-bg-alt">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-5 sm:py-16">
          <div className="rounded-2xl border border-line bg-surface p-6 sm:rounded-3xl sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
              <div className="min-w-0">
                <h2 className="font-display text-xl font-semibold tracking-tight text-ink sm:text-3xl">
                  Privacy & account control
                </h2>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate sm:text-base">
                  Read how we handle your data, or request permanent account deletion. You stay
                  in control of your Okrikah profile.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  href="/privacy"
                  className="inline-flex h-11 items-center justify-center rounded-full bg-navy px-5 text-sm font-semibold text-white hover:bg-navy-deep"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="inline-flex h-11 items-center justify-center rounded-full border border-line-strong bg-surface px-5 text-sm font-semibold text-ink hover:border-navy hover:bg-navy-soft"
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

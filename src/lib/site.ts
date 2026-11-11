export const SITE = {
  name: 'Okrikah',
  brandName: 'Ọkrikah',
  tagline: 'Buy. Sell. Offer.',
  /** ~60-char SERP title for click-through */
  title: 'Ọkrikah App | Sell Thrift Online in Nigeria',
  /** ~155-char SERP description with benefit + CTA */
  description:
    'Create your online thrift store with Ọkrikah. Sell thriftwear, wigs, bags and shoes to shoppers across Nigeria. Free on iOS and Android. Start selling today.',
  longDescription:
    'Ọkrikah is a Nigerian fashion marketplace for thriftwear, wigs, bags, and shoes. Sellers create an online store in the app, showcase products, and connect with customers ready to shop.',
  owner: 'AceHub Technologies Ltd',
  company: 'AceHub Technologies Ltd',
  companyUrl: 'https://acehubtechnologiesltd.co.uk/',
  contactEmail: 'contact@okrikah.shop',
  /**
   * Canonical production origin used for metadata, sitemap, and robots.
   * Live hosting redirects apex -> www, so www is the indexed host.
   */
  primaryDomain: 'https://www.okrikah.com',
  /** Additional brand domains that resolve to the same site. */
  domains: [
    'https://www.okrikah.com',
    'https://okrikah.com',
    'https://www.okrikah.shop',
    'https://okrikah.shop',
    'https://www.okrikah.app',
    'https://okrikah.app',
  ] as const,
  appStoreUrl:
    process.env.NEXT_PUBLIC_APP_STORE_URL ||
    'https://apps.apple.com/ca/app/okrikah/id6829230872',
  playStoreUrl:
    process.env.NEXT_PUBLIC_PLAY_STORE_URL ||
    'https://play.google.com/store/apps/details?id=com.okrikah.app&hl=en',
  updated: '11 November 2026',
  keywords: [
    'Okrikah',
    'Ọkrikah',
    'okrikah.com',
    'okrikah.shop',
    'okrikah.app',
    'AceHub Technologies Ltd',
    'sell thrift online Nigeria',
    'thriftwear Nigeria',
    'Nigerian thrift marketplace',
    'fashion marketplace Nigeria',
    'second-hand fashion Nigeria',
    'online store for thrift sellers',
    'sell wigs online Nigeria',
    'sell bags and shoes Nigeria',
    'okrika fashion app',
    'create online thrift store',
    'buy sell thrift Nigeria',
  ],
} as const;

/** Product-specific seller questions for on-page search clarity (not invented marketing). */
export const SELLER_STEPS = [
  {
    title: 'Download the Ọkrikah app',
    body: 'Get the free app on the App Store or Google Play.',
  },
  {
    title: 'Register your business',
    body: 'Create your seller profile and set up your online store in minutes.',
  },
  {
    title: 'Showcase your products',
    body: 'List thriftwear, wigs, bags, and shoes with photos or video.',
  },
  {
    title: 'Connect with customers',
    body: 'Reach shoppers, manage offers and orders, and get paid in one place.',
  },
] as const;

export const SELLER_QUESTIONS = [
  {
    question: 'What can I sell on Ọkrikah?',
    answer:
      'You can sell thriftwear, clothing, wigs and hair, bags, shoes, and fashion accessories to shoppers across Nigeria.',
  },
  {
    question: 'How do I create an online store?',
    answer:
      'Download the Ọkrikah app, register your business, set up your shop, then list products with photos or video.',
  },
  {
    question: 'Is Ọkrikah free to download?',
    answer:
      'Yes. Ọkrikah is free to download on iOS and Android. Browse listings for free and open a shop from your phone.',
  },
  {
    question: 'How do buyers find my products?',
    answer:
      'Buyers discover items through home browsing, category filters, offers, and the community style feed inside the app.',
  },
] as const;

export function getSiteUrl() {
  return (process.env.NEXT_PUBLIC_SITE_URL || SITE.primaryDomain).replace(/\/$/, '');
}

export function getSiteDomains() {
  const primary = getSiteUrl();
  const aliases = SITE.domains.map((domain) => domain.replace(/\/$/, ''));
  return Array.from(new Set([primary, ...aliases]));
}

export const FEATURES = [
  {
    title: 'Browse thrift & brands',
    body: 'Shop clothing, shoes, wigs & hair, bags, and accessories from sellers near you.',
    icon: 'browse',
  },
  {
    title: 'Make an offer',
    body: 'Negotiate prices directly with sellers. Offers expire automatically so deals stay fair.',
    icon: 'offer',
  },
  {
    title: 'Sell from your phone',
    body: 'Set up a shop, list pieces with photos or video, and get paid to your bank account.',
    icon: 'sell',
  },
  {
    title: 'Community feed',
    body: 'Follow sellers, share style inspiration, and discover fresh drops every day.',
    icon: 'feed',
  },
  {
    title: 'Verified sellers',
    body: 'KYC checks and shop verification help buyers shop with confidence.',
    icon: 'verify',
  },
  {
    title: 'Secure checkout',
    body: 'Pay in-app with trusted payment rails. Track orders from purchase to delivery.',
    icon: 'pay',
  },
] as const;

export const SCREENSHOTS = [
  {
    src: '/screenshots/home.png',
    alt: 'Okrikah home screen with thrift categories and new arrivals',
    label: 'Home',
  },
  {
    src: '/screenshots/browse.png',
    alt: 'Browse listings with filters and product grid',
    label: 'Browse',
  },
  {
    src: '/screenshots/sell.png',
    alt: 'Sell on Okrikah shop setup screen',
    label: 'Sell',
  },
  {
    src: '/screenshots/feed.png',
    alt: 'Community feed with seller posts',
    label: 'Feed',
  },
  {
    src: '/screenshots/welcome.png',
    alt: 'Okrikah welcome screen',
    label: 'Welcome',
  },
] as const;

export const SITE_PAGES = [
  {
    path: '/',
    changeFrequency: 'weekly' as const,
    priority: 1,
  },
  {
    path: '/privacy',
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  },
  {
    path: '/terms',
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  },
  {
    path: '/account-deletion',
    changeFrequency: 'monthly' as const,
    priority: 0.4,
  },
] as const;

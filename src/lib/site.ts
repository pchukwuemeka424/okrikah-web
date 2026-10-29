export const SITE = {
  name: 'Okrikah',
  tagline: 'Buy. Sell. Offer.',
  description:
    'Discover vintage and second-hand fashion — thrift clothing, wigs, bags, shoes and accessories from trusted sellers across Nigeria.',
  contactEmail: 'contact@okrikah.shop',
  appStoreUrl: process.env.NEXT_PUBLIC_APP_STORE_URL || '#download',
  playStoreUrl: process.env.NEXT_PUBLIC_PLAY_STORE_URL || '#download',
  updated: '26 September 2026',
} as const;

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

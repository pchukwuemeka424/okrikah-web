import { FEATURES, getSiteDomains, getSiteUrl, SELLER_STEPS, SITE } from '@/lib/site';

export function JsonLd() {
  const siteUrl = getSiteUrl();
  const domains = getSiteDomains();
  const companyUrl = SITE.companyUrl.replace(/\/$/, '');
  const logoUrl = `${siteUrl}/brand/icon.png`;
  const heroUrl = `${siteUrl}/images/marketing-hero.jpg`;

  const company = {
    '@type': 'Organization',
    '@id': `${companyUrl}/#organization`,
    name: SITE.company,
    url: companyUrl,
  };

  const brandOrg = {
    '@type': 'Organization',
    '@id': `${siteUrl}/#organization`,
    name: SITE.brandName,
    legalName: SITE.company,
    alternateName: [SITE.name, 'okrikah.com', 'okrikah.shop', 'okrikah.app'],
    url: siteUrl,
    email: SITE.contactEmail,
    foundingLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'NG',
      },
    },
    areaServed: {
      '@type': 'Country',
      name: 'Nigeria',
    },
    logo: {
      '@type': 'ImageObject',
      url: logoUrl,
      width: 1024,
      height: 1024,
    },
    image: heroUrl,
    description: SITE.longDescription,
    parentOrganization: { '@id': `${companyUrl}/#organization` },
    sameAs: [...domains, companyUrl, SITE.appStoreUrl, SITE.playStoreUrl],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: SITE.contactEmail,
      availableLanguage: ['en'],
      areaServed: 'NG',
    },
  };

  const website = {
    '@type': 'WebSite',
    '@id': `${siteUrl}/#website`,
    name: SITE.brandName,
    alternateName: [SITE.name, 'okrikah.com'],
    url: siteUrl,
    description: SITE.description,
    inLanguage: 'en-NG',
    publisher: { '@id': `${siteUrl}/#organization` },
    creator: { '@id': `${companyUrl}/#organization` },
    copyrightHolder: { '@id': `${companyUrl}/#organization` },
  };

  const webPage = {
    '@type': 'WebPage',
    '@id': `${siteUrl}/#webpage`,
    url: siteUrl,
    name: SITE.title,
    description: SITE.description,
    inLanguage: 'en-NG',
    isPartOf: { '@id': `${siteUrl}/#website` },
    about: { '@id': `${siteUrl}/#app` },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: heroUrl,
      width: 1200,
      height: 630,
    },
    mainEntity: { '@id': `${siteUrl}/#app` },
  };

  const appBase = {
    name: SITE.brandName,
    alternateName: SITE.name,
    applicationCategory: 'ShoppingApplication',
    applicationSubCategory: 'FashionMarketplace',
    description: SITE.longDescription,
    image: [logoUrl, heroUrl],
    screenshot: FEATURES.length
      ? [`${siteUrl}/screenshots/home.png`, `${siteUrl}/screenshots/sell.png`]
      : undefined,
    url: siteUrl,
    author: { '@id': `${companyUrl}/#organization` },
    creator: { '@id': `${companyUrl}/#organization` },
    copyrightHolder: { '@id': `${companyUrl}/#organization` },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'NGN',
      availability: 'https://schema.org/InStock',
    },
    featureList: FEATURES.map((feature) => feature.title),
    countriesSupported: 'NG',
    inLanguage: 'en',
  };

  const iosApp = {
    '@type': 'SoftwareApplication',
    '@id': `${siteUrl}/#ios-app`,
    ...appBase,
    operatingSystem: 'iOS',
    downloadUrl: SITE.appStoreUrl,
    installUrl: SITE.appStoreUrl,
  };

  const androidApp = {
    '@type': 'SoftwareApplication',
    '@id': `${siteUrl}/#android-app`,
    ...appBase,
    operatingSystem: 'Android',
    downloadUrl: SITE.playStoreUrl,
    installUrl: SITE.playStoreUrl,
  };

  const mobileApp = {
    '@type': 'MobileApplication',
    '@id': `${siteUrl}/#app`,
    ...appBase,
    operatingSystem: 'iOS, Android',
    downloadUrl: [SITE.appStoreUrl, SITE.playStoreUrl],
    installUrl: [SITE.appStoreUrl, SITE.playStoreUrl],
  };

  const howTo = {
    '@type': 'HowTo',
    '@id': `${siteUrl}/#howto-sell`,
    name: 'How to start selling on Ọkrikah',
    description:
      'Open an online store on Ọkrikah and sell thriftwear, wigs, bags, and shoes to customers in Nigeria.',
    totalTime: 'PT15M',
    step: SELLER_STEPS.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.title,
      text: step.body,
      url: `${siteUrl}/#sell-steps`,
    })),
  };

  const featureList = {
    '@type': 'ItemList',
    '@id': `${siteUrl}/#features`,
    name: `${SITE.brandName} features`,
    numberOfItems: FEATURES.length,
    itemListElement: FEATURES.map((feature, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: feature.title,
      description: feature.body,
    })),
  };

  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      company,
      brandOrg,
      website,
      webPage,
      mobileApp,
      iosApp,
      androidApp,
      howTo,
      featureList,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(graph).replace(/</g, '\\u003c'),
      }}
    />
  );
}

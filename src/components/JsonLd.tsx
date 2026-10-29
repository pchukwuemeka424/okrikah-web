import { getSiteUrl, SITE } from '@/lib/site';

export function JsonLd() {
  const siteUrl = getSiteUrl();
  const companyUrl = SITE.companyUrl.replace(/\/$/, '');

  const company = {
    '@type': 'Organization',
    '@id': `${companyUrl}/#organization`,
    name: SITE.company,
    url: companyUrl,
  };

  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      company,
      {
        '@type': 'Organization',
        '@id': `${siteUrl}/#organization`,
        name: SITE.name,
        url: siteUrl,
        email: SITE.contactEmail,
        logo: `${siteUrl}/brand/icon.png`,
        image: `${siteUrl}/images/marketing-hero.jpg`,
        description: SITE.description,
        parentOrganization: { '@id': `${companyUrl}/#organization` },
        sameAs: [companyUrl],
      },
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        name: SITE.name,
        url: siteUrl,
        description: SITE.description,
        publisher: { '@id': `${siteUrl}/#organization` },
        creator: { '@id': `${companyUrl}/#organization` },
        author: { '@id': `${companyUrl}/#organization` },
        inLanguage: 'en',
      },
      {
        '@type': 'MobileApplication',
        '@id': `${siteUrl}/#app`,
        name: SITE.name,
        operatingSystem: 'iOS, Android',
        applicationCategory: 'ShoppingApplication',
        description: SITE.description,
        image: `${siteUrl}/images/marketing-hero.jpg`,
        url: siteUrl,
        author: { '@id': `${companyUrl}/#organization` },
        creator: { '@id': `${companyUrl}/#organization` },
        copyrightHolder: { '@id': `${companyUrl}/#organization` },
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'NGN',
        },
      },
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

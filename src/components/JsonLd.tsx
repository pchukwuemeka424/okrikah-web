import { getSiteUrl, SITE } from '@/lib/site';

export function JsonLd() {
  const siteUrl = getSiteUrl();
  const companyUrl = SITE.companyUrl.replace(/\/$/, '');
  const owner = {
    '@type': 'Person',
    name: SITE.owner,
    jobTitle: 'Founder & Owner',
    url: companyUrl,
    sameAs: [companyUrl],
  };

  const company = {
    '@type': 'Organization',
    '@id': `${companyUrl}/#organization`,
    name: SITE.company,
    url: companyUrl,
    founder: owner,
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
        founder: owner,
        owner,
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
        creator: owner,
        author: owner,
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
        author: owner,
        creator: owner,
        copyrightHolder: owner,
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'NGN',
        },
      },
      {
        '@type': 'Person',
        '@id': `${siteUrl}/#owner`,
        name: SITE.owner,
        jobTitle: 'Founder & Owner',
        worksFor: [
          { '@id': `${siteUrl}/#organization` },
          { '@id': `${companyUrl}/#organization` },
        ],
        url: companyUrl,
        sameAs: [companyUrl],
        knowsAbout: ['fashion marketplace', 'thrift fashion', 'Nigeria ecommerce'],
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

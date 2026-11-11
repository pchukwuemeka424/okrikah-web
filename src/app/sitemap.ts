import type { MetadataRoute } from 'next';
import { getSiteUrl, SITE, SITE_PAGES } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const lastModified = new Date(SITE.updated);

  return SITE_PAGES.map((page) => {
    const url = page.path === '/' ? siteUrl : `${siteUrl}${page.path}`;

    if (page.path === '/') {
      return {
        url,
        lastModified,
        changeFrequency: page.changeFrequency,
        priority: page.priority,
        images: [`${siteUrl}/images/marketing-hero.jpg`],
      };
    }

    return {
      url,
      lastModified,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    };
  });
}

import type { MetadataRoute } from 'next';
import { getSiteUrl } from '@/lib/site';

export default function robots(): MetadataRoute.Robots {
  const siteUrl = getSiteUrl();

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    // One canonical sitemap only. Listing alias hosts caused Search Console URL errors.
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}

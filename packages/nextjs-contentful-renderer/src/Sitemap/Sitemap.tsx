import { getDynamicRoutes } from '../getDynamicRoutes';
import { getStaticRoutes } from '../getStaticRoutes';
import { GetServerSideProps } from 'next';
import { getServerSideSitemapLegacy } from 'next-sitemap';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const staticRoutes = await getStaticRoutes(process.env.SITE_DOMAIN, process.env.CONTENTFUL_PREVIEW === 'true');
  const dynamicRoutes = await getDynamicRoutes(process.env.SITE_DOMAIN, process.env.CONTENTFUL_PREVIEW === 'true');

  const fields = [{ slug: '/' }, ...staticRoutes, ...dynamicRoutes].map((route) => ({
    loc: `${process.env.SITE_URL}${route.slug}`,
    lastmod: route?.lastmod ?? new Date().toISOString(),
  }));

  return getServerSideSitemapLegacy(ctx, fields);
};

export default function Sitemap() {
  // do nothing
}
import { getApolloClient } from '../utils/getApolloClient';
import { getRouteBySlug } from '../utils/contentful';
import { getPageById } from '../utils/getPageById';

export const getStaticPageContent = async (slug: string, preview = false, domain: string | undefined = undefined) => {
  const apolloClient = getApolloClient({ preview });

  const route = await getRouteBySlug(apolloClient, slug, preview, domain);
  // We always take the first variant of the route for static pages
  const pageId = route?.variants?.[0]?.page;
  if (!pageId) return undefined;

  return await getPageById(apolloClient, pageId, preview);
};

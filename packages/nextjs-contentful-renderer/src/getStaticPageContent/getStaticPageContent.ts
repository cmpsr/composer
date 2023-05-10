import { getApolloClient } from '../utils/getApolloClient';
import { getRouteBySlug } from '../utils/contentful';
import { getPageById } from '../utils/getPageById';
import type { Route } from '../utils/contentful/getRouteBySlug/types';
import { isReplica } from '../utils/isReplica';

export const getStaticPageContent = async (slug: string, preview = false, domain: string | undefined = undefined) => {
  const apolloClient = getApolloClient({ preview });

  const replicaRoute = await getRouteBySlug(apolloClient, slug, preview, domain);

  if (replicaRoute && isReplica(replicaRoute)) {
    return await getPageById(apolloClient, replicaRoute.page, preview, replicaRoute);
  }

  // We always take the first variant of the route for static pages
  const route = replicaRoute as Route;
  const pageId = route?.variants?.[0]?.page;
  if (!pageId) return undefined;

  return await getPageById(apolloClient, pageId, preview);
};

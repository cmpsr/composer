import { getApolloClient } from '../utils/getApolloClient';
import { getRouteBySlug } from '../utils/contentful';
import { getPageById } from '../utils/getPageById';
import type { Replica, Route } from '../utils/contentful/getRouteBySlug/types';
import { isReplica } from 'src/utils/isReplica';

export const getStaticPageContent = async (slug: string, preview = false, domain: string | undefined = undefined) => {
  const apolloClient = getApolloClient({ preview });

  const replicaRoute = await getRouteBySlug(apolloClient, slug, preview, domain);

  if (replicaRoute && isReplica(replicaRoute)) {
    const replica = replicaRoute as Replica;
    return await getPageById(apolloClient, replica.page, preview, replica.modelData);
  }

  // We always take the first variant of the route for static pages
  const route = replicaRoute as Route;
  const pageId = route?.variants?.[0]?.page;
  if (!pageId) return undefined;

  return await getPageById(apolloClient, pageId, preview);
};

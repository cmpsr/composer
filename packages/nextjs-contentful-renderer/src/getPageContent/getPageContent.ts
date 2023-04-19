import { GetServerSidePropsContext } from 'next';
import { getPageById } from '../utils/getPageById';
import { getRouteBySlug } from '../utils/contentful';
import { Page } from '../utils/contentful/getPageById/types';
import { getApolloClient } from '../utils/getApolloClient';
import { getPageId } from '../utils/getPageId';
import { getSlug } from '../utils/getSlug';
import type { Replica } from '../utils/contentful/getRouteBySlug/types';
import { isReplica } from '../utils/isReplica';

export const getPageContent = async (
  context: GetServerSidePropsContext,
  domain: string | undefined = undefined
): Promise<Page> => {
  const preview = context.preview || context.query.preview !== undefined;

  const apolloClient = getApolloClient({ preview });

  const slug = getSlug(context.query.slug || '/');

  const replicaRoute = await getRouteBySlug(apolloClient, slug, preview, domain);

  if (!replicaRoute) return undefined;

  const modelData = isReplica(replicaRoute) ? (replicaRoute as Replica).modelData : null;

  const pageId = getPageId(replicaRoute, context.query.utm_campaign);
  const page = await getPageById(apolloClient, pageId, preview, modelData);

  return page;
};

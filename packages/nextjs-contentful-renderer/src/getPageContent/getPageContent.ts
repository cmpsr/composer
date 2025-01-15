import { GetServerSidePropsContext } from 'next';
import { getPageById } from '../utils/getPageById';
import { getRouteBySlug } from '../utils/contentful';
import { Page } from '../utils/contentful/getPageById/types';
import { getApolloClient } from '../utils/getApolloClient';
import { getPageId } from '../utils/getPageId';
import { getSlug } from '../utils/getSlug';
import { getVisitedPageIdFromCookies, setCookie } from '../utils/cookies';
import { isReplica } from '../utils/isReplica';

export const getPageContent = async (
  context: GetServerSidePropsContext,
  domain: string | undefined = undefined,
): Promise<Page> => {
  const preview = context.preview || context.query.preview !== undefined;

  const apolloClient = getApolloClient({ preview });

  const slug = getSlug(context?.query?.slug || '/');

  const replicaRoute = await getRouteBySlug(apolloClient, slug, preview, domain);

  if (!replicaRoute) return undefined;

  const existingPageId = getVisitedPageIdFromCookies(context, slug);
  const pageId = getPageId(replicaRoute, context.query.utm_campaign, existingPageId);
  const page = await getPageById(apolloClient, pageId, preview, isReplica(replicaRoute) ? replicaRoute : undefined);

  if (!isReplica(replicaRoute)) {
    setCookie(context, slug, pageId);
  }

  return page;
};

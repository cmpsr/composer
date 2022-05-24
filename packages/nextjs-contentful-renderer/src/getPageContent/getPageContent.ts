import { GetServerSidePropsContext } from 'next';
import { getPageById, getRouteBySlug } from '../utils/contentful';
import { Page } from '../utils/contentful/getPageById/types';
import { getVisitedPageIdFromCookies, setCookie } from '../utils/cookies';
import { getApolloClient } from '../utils/getApolloClient';
import { getPageId } from '../utils/getPageId';
import { getSlug } from '../utils/getSlug';

export const getPageContent = async (
  context: GetServerSidePropsContext,
  domain: string | undefined = undefined,
  skipTheme?: boolean
): Promise<Page> => {
  const preview = context.query.preview !== undefined;

  const apolloClient = getApolloClient({ preview });

  const slug = getSlug(context.query.slug || '/');

  const existingPageId = getVisitedPageIdFromCookies(context, slug);
  if (existingPageId) {
    const page = await getPageById({ apolloClient, pageId: existingPageId, preview, skipTheme });
    if (page) {
      return page;
    }
  }

  const route = await getRouteBySlug(apolloClient, slug, preview, domain);
  if (!route) return undefined;

  const pageId = getPageId(route, context.query.utm_campaign);
  const pageContent = await getPageById({ apolloClient, pageId, preview, skipTheme });
  setCookie(context, slug, pageId);
  return pageContent;
};

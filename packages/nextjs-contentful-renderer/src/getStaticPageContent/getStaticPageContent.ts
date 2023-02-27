import { getApolloClient } from '../utils/getApolloClient';
import { getRouteBySlug } from '../utils/contentful';
import { getPageById } from '../utils/getPageById';
import type { PageModel, Route } from '../utils/contentful/getRouteBySlug/types';

export const getStaticPageContent = async (slug: string, preview = false, domain: string | undefined = undefined) => {
  const apolloClient = getApolloClient({ preview });

  const pageModelRoute = await getRouteBySlug(apolloClient, slug, preview, domain);

  if (Object.keys(pageModelRoute).includes('modelData')) {
    const pageModel = pageModelRoute as PageModel;
    return await getPageById(apolloClient, pageModel.page, preview, pageModel.modelData);
  }

  // We always take the first variant of the route for static pages
  const route = pageModelRoute as Route;
  const pageId = route?.variants?.[0]?.page;
  if (!pageId) return undefined;

  return await getPageById(apolloClient, pageId, preview);
};

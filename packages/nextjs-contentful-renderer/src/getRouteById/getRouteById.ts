import { getApolloClient } from '../utils/getApolloClient';
import { getRouteById as getRouteByIdContentful } from '../utils/contentful';

export const getRouteById = async (routeId: string, preview = false, domain = process.env.SITE_DOMAIN) =>
  await getRouteByIdContentful(getApolloClient({ preview }), routeId, preview, domain);

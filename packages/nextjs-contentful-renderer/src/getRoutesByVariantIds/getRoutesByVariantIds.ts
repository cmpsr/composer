import { getApolloClient } from '../utils/getApolloClient';
import { getRoutesByVariantIds as getRoutesByVariantIdsContentful } from '../utils/contentful';

export const getRoutesByVariantIds = async (variantIds: string[], preview = false, domain = process.env.SITE_DOMAIN) =>
  await getRoutesByVariantIdsContentful(getApolloClient({ preview }), variantIds, preview, domain);

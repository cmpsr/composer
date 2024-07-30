import { getApolloClient } from '../utils/getApolloClient';
import { getVariantsByPageIds as getVariantsByPageIdsContentful } from '../utils/contentful';

export const getVariantsByPageIds = async (pageIds: string[], preview = false, domain = process.env.SITE_DOMAIN) =>
  await getVariantsByPageIdsContentful(getApolloClient({ preview }), pageIds, preview, domain);

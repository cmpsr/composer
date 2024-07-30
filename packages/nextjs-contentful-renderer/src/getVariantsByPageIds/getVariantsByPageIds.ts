import { getApolloClient } from '../utils/getApolloClient';
import { getVariantsByPageIds as getVariantsByPageIdsContentful } from '../utils/contentful';

export const getVariantsByPageIds = async (pageIds: string[], preview = false) =>
  await getVariantsByPageIdsContentful(getApolloClient({ preview }), pageIds, preview);

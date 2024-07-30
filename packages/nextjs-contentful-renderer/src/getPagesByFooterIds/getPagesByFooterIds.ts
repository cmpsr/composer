import { getApolloClient } from '../utils/getApolloClient';
import { getPagesByFooterIds as getPagesByFooterIdsContentful } from '../utils/contentful';

export const getPagesByFooterIds = async (themeIds: string[], preview = false) =>
  await getPagesByFooterIdsContentful(getApolloClient({ preview }), themeIds, preview);

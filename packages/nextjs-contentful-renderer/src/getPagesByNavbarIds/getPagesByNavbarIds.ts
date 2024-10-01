import { getApolloClient } from '../utils/getApolloClient';
import { getPagesByNavbarIds as getPagesByNavbarIdsContentful } from '../utils/contentful';

export const getPagesByNavbarIds = async (themeIds: string[], preview = false) =>
  await getPagesByNavbarIdsContentful(getApolloClient({ preview }), themeIds, preview);

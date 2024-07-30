import { getApolloClient } from '../utils/getApolloClient';
import { getPagesByThemeIds as getPagesByThemeIdsContentful } from '../utils/contentful';

export const getPagesByThemeIds = async (themeIds: string[], preview = false) =>
  await getPagesByThemeIdsContentful(getApolloClient({ preview }), themeIds, preview);

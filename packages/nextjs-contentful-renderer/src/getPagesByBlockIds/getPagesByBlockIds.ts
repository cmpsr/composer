import { getApolloClient } from '../utils/getApolloClient';
import { getPagesByBlockIds as getPagesByBlockIdsContentful } from '../utils/contentful';

export const getPagesByBlockIds = async (blockIds: string[], preview = false, domain = process.env.SITE_DOMAIN) =>
  await getPagesByBlockIdsContentful(getApolloClient({ preview }), blockIds, preview, domain);

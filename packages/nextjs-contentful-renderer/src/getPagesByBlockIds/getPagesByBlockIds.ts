import { getApolloClient } from '../utils/getApolloClient';
import { getPagesByBlockIds as getPagesByBlockIdsContentful } from '../utils/contentful';

export const getPagesByBlockIds = async (blockIds: string[], preview = false) =>
  await getPagesByBlockIdsContentful(getApolloClient({ preview }), blockIds, preview);

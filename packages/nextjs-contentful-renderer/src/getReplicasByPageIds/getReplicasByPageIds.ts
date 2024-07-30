import { getApolloClient } from '../utils/getApolloClient';
import { getReplicasByPageIds as getReplicasByPageIdsContentful } from '../utils/contentful';

export const getReplicasByPageIds = async (pageIds: string[], preview = false, domain = process.env.SITE_DOMAIN) =>
  await getReplicasByPageIdsContentful(getApolloClient({ preview }), pageIds, preview, domain);

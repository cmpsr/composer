import { getApolloClient } from '../utils/getApolloClient';
import { getReplicaById as getReplicaByIdContentful } from '../utils/contentful';

export const getReplicaById = async (routeId: string, preview = false, domain = process.env.SITE_DOMAIN) =>
  await getReplicaByIdContentful(getApolloClient({ preview }), routeId, preview, domain);

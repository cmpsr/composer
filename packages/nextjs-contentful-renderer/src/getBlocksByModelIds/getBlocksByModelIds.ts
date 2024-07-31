import { getApolloClient } from '../utils/getApolloClient';
import { getBlocksByModelIds as getBlocksByModelIdsContentful } from '../utils/contentful';

export const getBlocksByModelIds = async (modelIds: string[], preview = false) =>
  await getBlocksByModelIdsContentful(getApolloClient({ preview }), modelIds, preview);

import { getApolloClient } from '../utils/getApolloClient';
import { getDefaultTheme as getDefaultThemeContentful } from '../utils/contentful';

export const getDefaultTheme = async (preview: boolean, domain: string = process.env.SITE_DOMAIN) => {
  const apolloClient = getApolloClient({ preview });
  return await getDefaultThemeContentful(apolloClient, domain, preview);
};

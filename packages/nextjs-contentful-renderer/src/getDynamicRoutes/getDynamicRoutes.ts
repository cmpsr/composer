import { getApolloClient } from '../utils/getApolloClient';
import { getDynamicRoutes as getData } from '../utils/contentful';

export const getDynamicRoutes = async (domain = process.env.SITE_DOMAIN, preview = false) =>
  await getData(getApolloClient({ preview }), preview, domain);

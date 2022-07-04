import { getApolloClient } from '../utils/getApolloClient';
import { getStaticRoutes as getData } from '../utils/contentful';

export const getStaticRoutes = async (domain = process.env.SITE_DOMAIN, preview = false) =>
  await getData(getApolloClient({ preview }), preview, domain);

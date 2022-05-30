import { ApolloClient, gql, NormalizedCacheObject } from '@apollo/client';

export const getDefaultNavbar = async (
  apolloClient: ApolloClient<NormalizedCacheObject>,
  domain: string = process.env.SITE_DOMAIN,
  preview: boolean
) => {
  const { data } = await apolloClient.query({
    query: gql`
      query DefaultNavbar($domain: String!, $preview: Boolean!) {
        navbarCollection(where: { isDefault: true, domain: $domain }, limit: 1, preview: $preview) {
          items {
            id
            model {
              id
            }
          }
        }
      }
    `,
    variables: {
      domain,
      preview,
    },
    fetchPolicy: 'cache-first',
  });

  return !data.navbarCollection?.items?.length ? undefined : data.navbarCollection.items[0];
};

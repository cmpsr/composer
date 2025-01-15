import { ApolloClient, gql, NormalizedCacheObject } from '@apollo/client';
import { Theme } from '@cmpsr/components';

export const getDefaultTheme = async (
  apolloClient: ApolloClient<NormalizedCacheObject>,
  domain: string,
  preview: boolean,
): Promise<Partial<Theme> | undefined> => {
  const { data } = await apolloClient.query({
    query: gql`
      query DefaultTheme($domain: String!, $preview: Boolean!) {
        themeCollection(where: { isDefault: true, domain: $domain }, limit: 1, preview: $preview) {
          items {
            id
            theme
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

  return !data.themeCollection?.items?.length ? undefined : data.themeCollection.items[0].theme;
};

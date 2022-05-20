import { ApolloClient, gql, NormalizedCacheObject } from '@apollo/client';

export const getThemeByPageId = async (
  apolloClient: ApolloClient<NormalizedCacheObject>,
  pageId: string,
  preview: boolean
): Promise<Record<string, unknown>> => {
  const { data } = await apolloClient.query({
    query: gql`
      query getThemeByPageId($pageId: String!, $preview: Boolean) {
        page(id: $pageId, preview: $preview) {
          themesCollection {
            items {
              defaultTheme
              theme
            }
          }
        }
      }
    `,
    variables: {
      pageId,
      preview,
    },
  });

  if (!data.page) return undefined;

  const { themesCollection } = data.page;

  const themes = themesCollection?.items || [];
  const defaultThemeItem = themes.find((theme) => theme.defaultTheme === true);

  if (!defaultThemeItem && themes.length > 0) {
    return themes[0]?.theme;
  }

  return defaultThemeItem?.theme || {};
};

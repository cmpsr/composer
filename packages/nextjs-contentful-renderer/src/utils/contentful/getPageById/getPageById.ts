import { ApolloClient, gql, NormalizedCacheObject } from '@apollo/client';
import { ModelCollectionFragment, ModelFragment } from './fragments';
import { Page } from './types';

export const getPageById = async (
  apolloClient: ApolloClient<NormalizedCacheObject>,
  pageId: string,
  preview: boolean,
): Promise<Page | undefined> => {
  const { data } = await apolloClient.query({
    query: gql`
      query getPageById($pageId: String!, $preview: Boolean) {
        page(id: $pageId, preview: $preview) {
          id
          title
          metaConfiguration
          globalVariables
          navbar {
            modelsCollection {
              items {
                ...ModelFragment
              }
            }
            propsValue
          }
          footer {
            modelsCollection {
              items {
                ...ModelFragment
              }
            }
            propsValue
          }
          theme {
            theme
          }
          contentCollection {
            items {
              modelsCollection {
                ...ModelCollectionFragment
              }
              propsValue
            }
          }
        }
      }
      ${ModelCollectionFragment}
      ${ModelFragment}
    `,
    variables: {
      pageId,
      preview,
    },
  });

  if (!data.page) return undefined;

  const { id, title, metaConfiguration, globalVariables, contentCollection } = data.page;
  const theme = data.page.theme?.theme || null;
  const navbar = data.page.navbar
    ? [{ models: [data.page.navbar.modelsCollection?.items?.[0]], propsValues: data.page.navbar.propsValue || [] }]
    : null;
  const footer = data.page.footer
    ? [{ models: [data.page.footer.modelsCollection?.items?.[0]], propsValues: data.page.footer.propsValue || [] }]
    : null;

  const content = contentCollection.items.map((item) => ({
    models: item.modelsCollection.items,
    propsValues: item.propsValue || [],
  }));

  return { id, title, content, metaConfiguration, globalVariables, theme, navbar, footer };
};

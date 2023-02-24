import { ApolloClient, gql, NormalizedCacheObject } from '@apollo/client';
import { PageModel, Route } from './types';

export const getRouteBySlug = async (
  apolloClient: ApolloClient<NormalizedCacheObject>,
  slug: string,
  preview: boolean,
  domain = process.env.SITE_DOMAIN
): Promise<PageModel | Route> => {
  const normalizedSlug = slug.startsWith('/') ? slug : `/${slug}`;
  const { data } = await apolloClient.query({
    query: gql`
      query routeBySlug($slug: String, $domain: String, $preview: Boolean) {
        pageModel: pageModelCollection(where: { domain: $domain, slug: $slug }, preview: $preview) {
          items {
            sys {
              id
            }
            id
            domain
            modelData
            pageTemplate {
              sys {
                id
              }
            }
            slug
          }
        }
        route: routeCollection(where: { domain: $domain, slug: $slug }, preview: $preview) {
          items {
            id
            variants: variantsCollection(limit: 10) {
              items {
                traffic
                utmCampaign
                page {
                  sys {
                    id
                  }
                }
              }
            }
          }
        }
      }
    `,
    variables: {
      slug: normalizedSlug,
      domain,
      preview,
    },
  });

  // Resolve with PageModel, if available
  if (data.pageModels.items.length) {
    return data.pageModel.items.map((pageModel) => ({
      id: pageModel.id,
      modelData: pageModel.modelData,
      page: pageModel?.pageTemplate?.sys?.id,
      slug,
    }))[0];
  }

  // Resolve with Route
  return data.route.items.map((route) => ({
    id: route.id,
    slug,
    variants: route.variants.items.map((variant: any) => ({
      traffic: variant.traffic,
      page: variant.page.sys.id,
      utmCampaign: variant.utmCampaign,
    })),
  }))[0];
};

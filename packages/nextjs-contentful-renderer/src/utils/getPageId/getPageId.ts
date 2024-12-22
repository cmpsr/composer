import { Replica, Route, RouteVariant } from '../contentful/getRouteBySlug/types';
import { isReplica } from '../isReplica';

export const getPageId = (
  replicaRoute: Replica | Route,
  campaign: undefined | string | string[] = undefined,
  existingPageId: undefined | string = undefined,
): string => {
  if (isReplica(replicaRoute) && replicaRoute.page !== undefined) {
    return replicaRoute.page;
  }

  const route = replicaRoute as Route;

  // If we already cookied the user into a previous variant, confirm them page we
  // cookied is still valid. If so, return that. If not, continue to the next
  if (existingPageId) {
    const isValidPage = route.variants.some((variant) => variant.page === existingPageId);

    if (isValidPage) return existingPageId;
  }

  // Return variant associated with campaign if it exists
  if (campaign !== undefined) {
    const pageId = getCampaignVariant(route.variants, campaign);
    if (pageId) return pageId;
  }

  return getRandomVariant(route.variants);
};

const getCampaignVariant = (variants: RouteVariant[], campaign: string | string[]): string | undefined => {
  const currentCampaign = typeof campaign === 'string' ? campaign : campaign[0];
  for (let i = 0; i < variants.length; i++) {
    if (variants[i].utmCampaign === currentCampaign) return variants[i].page as string;
  }
  return undefined;
};

const getRandomVariant = (variants: RouteVariant[]): string => {
  const rand = Math.random();
  let accumulatedTraffic = 0;
  for (let i = 0; i < variants.length; i++) {
    accumulatedTraffic += variants[i].traffic;
    if (accumulatedTraffic > rand) return variants[i].page;
  }
  // if the config of the variants is wrong we just return the first page
  return variants[0].page;
};

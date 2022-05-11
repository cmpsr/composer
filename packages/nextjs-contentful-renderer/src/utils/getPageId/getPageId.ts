import { Route, RouteVariant } from '../contentful/getRouteBySlug/types';

export const getPageId = (route: Route, campaign: undefined | string | string[] = undefined): string => {
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

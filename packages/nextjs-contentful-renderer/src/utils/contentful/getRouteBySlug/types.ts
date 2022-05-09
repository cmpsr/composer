export interface RouteVariants {
  traffic: number;
  page: string;
  utmCampaign?: string;
}

export interface Route {
  id: string;
  variants: RouteVariants;
}

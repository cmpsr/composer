export interface PageModel {
  id: string;
  modelData: any;
  page: string;
  slug: string;
}

export interface RouteVariant {
  traffic: number;
  page: string;
  utmCampaign?: string;
}

export interface Route {
  id: string;
  slug: string;
  variants: RouteVariant[];
}

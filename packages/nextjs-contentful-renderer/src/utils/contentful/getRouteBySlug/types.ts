import { PropsValue } from '@cmpsr/cml';

export interface Replica {
  id: string;
  modelData: PropsValue[][];
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

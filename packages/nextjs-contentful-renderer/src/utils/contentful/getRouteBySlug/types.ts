import { PropsValue } from '@cmpsr/cml';
import { PageMetaData } from '../getPageById/types';

export interface Replica {
  id: string;
  metaConfiguration?: PageMetaData;
  modelData?: PropsValue[][];
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

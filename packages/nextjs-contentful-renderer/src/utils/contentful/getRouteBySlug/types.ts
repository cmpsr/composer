import { PropsValue } from '@cmpsr/cml';
import { PageMetaData } from '../getPageById/types';

export interface Replica {
  id: string;
  metaConfiguration?: PageMetaData;
  globalVariables?: PropsValue;
  modelData?: PropsValue[][];
  page: string;
  slug: string;
  title?: string;
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

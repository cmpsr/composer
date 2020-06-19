import { RouteQuery } from 'types/RouteQuery';
import { Variant } from 'types/Variant';

import { randomTrafficSelector } from '../randomTrafficSelector';
import { getVariantByQueryParams } from '../getVariantByQueryParams';

const randomVariant = (ref: string, variants: Variant[]): Variant => {
  console.log('Getting variant by traffic split');
  return randomTrafficSelector(variants, (item) => {
    return {
      ...item,
      ref,
    };
  });
};

export const getRouteVariantByQuery = (routeQuery: RouteQuery, params) => {
  const route = routeQuery.routeCollection.items[0];
  const variants: Variant[] = route.variants.variants;
  const ref = route.slug;

  return (
    getVariantByQueryParams(ref, variants, params) ||
    randomVariant(ref, variants)
  );
};

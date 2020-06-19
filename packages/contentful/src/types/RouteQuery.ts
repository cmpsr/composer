/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: RouteQuery
// ====================================================

export interface RouteQuery_routeCollection_items {
  id: string | null;
  slug: string | null;
  variants: any | null;
}

export interface RouteQuery_routeCollection {
  items: (RouteQuery_routeCollection_items | null)[];
}

export interface RouteQuery {
  routeCollection: RouteQuery_routeCollection | null;
}

export interface RouteQueryVariables {
  slug: string;
  siteId?: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Link
// ====================================================

export interface Link_sys {
  id: string;
}

export interface Link_asset {
  contentType: string | null;
  title: string | null;
  url: string | null;
}

export interface Link_route {
  slug: string | null;
}

export interface Link {
  sys: Link_sys;
  asset: Link_asset | null;
  title: string | null;
  type: string | null;
  embeddedType: string | null;
  route: Link_route | null;
  style: any | null;
  url: string | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Footer
// ====================================================

export interface Footer_sys {
  id: string;
}

export interface Footer_logo_sys {
  id: string;
}

export interface Footer_logo_asset {
  contentType: string | null;
  title: string | null;
  url: string | null;
}

export interface Footer_logo_route {
  slug: string | null;
}

export interface Footer_logo {
  sys: Footer_logo_sys;
  asset: Footer_logo_asset | null;
  title: string | null;
  type: string | null;
  embeddedType: string | null;
  route: Footer_logo_route | null;
  style: any | null;
  url: string | null;
}

export interface Footer_contentCollection_items_Link_sys {
  id: string;
}

export interface Footer_contentCollection_items_Link_asset {
  contentType: string | null;
  title: string | null;
  url: string | null;
}

export interface Footer_contentCollection_items_Link_route {
  slug: string | null;
}

export interface Footer_contentCollection_items_Link {
  sys: Footer_contentCollection_items_Link_sys;
  asset: Footer_contentCollection_items_Link_asset | null;
  title: string | null;
  type: string | null;
  embeddedType: string | null;
  route: Footer_contentCollection_items_Link_route | null;
  style: any | null;
  url: string | null;
}

export interface Footer_contentCollection_items_Grid_sys {
  id: string;
}

export interface Footer_contentCollection_items_Grid {
  sys: Footer_contentCollection_items_Grid_sys;
  style: any | null;
  type: string | null;
}

export type Footer_contentCollection_items = Footer_contentCollection_items_Link | Footer_contentCollection_items_Grid;

export interface Footer_contentCollection {
  items: (Footer_contentCollection_items | null)[];
}

export interface Footer_secondaryContentCollection_items_Section {}

export interface Footer_secondaryContentCollection_items_Link_sys {
  id: string;
}

export interface Footer_secondaryContentCollection_items_Link_asset {
  contentType: string | null;
  title: string | null;
  url: string | null;
}

export interface Footer_secondaryContentCollection_items_Link_route {
  slug: string | null;
}

export interface Footer_secondaryContentCollection_items_Link {
  sys: Footer_secondaryContentCollection_items_Link_sys;
  asset: Footer_secondaryContentCollection_items_Link_asset | null;
  title: string | null;
  type: string | null;
  embeddedType: string | null;
  route: Footer_secondaryContentCollection_items_Link_route | null;
  style: any | null;
  url: string | null;
}

export type Footer_secondaryContentCollection_items = Footer_secondaryContentCollection_items_Section | Footer_secondaryContentCollection_items_Link;

export interface Footer_secondaryContentCollection {
  items: (Footer_secondaryContentCollection_items | null)[];
}

export interface Footer {
  sys: Footer_sys;
  copy: string | null;
  style: any | null;
  type: string | null;
  logo: Footer_logo | null;
  contentCollection: Footer_contentCollection | null;
  secondaryContentCollection: Footer_secondaryContentCollection | null;
}

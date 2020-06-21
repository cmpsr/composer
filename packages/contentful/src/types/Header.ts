/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Header
// ====================================================

export interface Header_sys {
  id: string;
}

export interface Header_logo_sys {
  id: string;
}

export interface Header_logo_asset {
  contentType: string | null;
  title: string | null;
  url: string | null;
}

export interface Header_logo_route {
  slug: string | null;
}

export interface Header_logo {
  sys: Header_logo_sys;
  asset: Header_logo_asset | null;
  title: string | null;
  type: string | null;
  embeddedType: string | null;
  route: Header_logo_route | null;
  style: any | null;
  url: string | null;
}

export interface Header_contentCollection_items_Link_sys {
  id: string;
}

export interface Header_contentCollection_items_Link_asset {
  contentType: string | null;
  title: string | null;
  url: string | null;
}

export interface Header_contentCollection_items_Link_route {
  slug: string | null;
}

export interface Header_contentCollection_items_Link {
  sys: Header_contentCollection_items_Link_sys;
  asset: Header_contentCollection_items_Link_asset | null;
  title: string | null;
  type: string | null;
  embeddedType: string | null;
  route: Header_contentCollection_items_Link_route | null;
  style: any | null;
  url: string | null;
}

export interface Header_contentCollection_items_Grid_sys {
  id: string;
}

export interface Header_contentCollection_items_Grid {
  sys: Header_contentCollection_items_Grid_sys;
  style: any | null;
  type: string | null;
}

export type Header_contentCollection_items = Header_contentCollection_items_Link | Header_contentCollection_items_Grid;

export interface Header_contentCollection {
  items: (Header_contentCollection_items | null)[];
}

export interface Header_secondaryContentCollection_items_Section {}

export interface Header_secondaryContentCollection_items_Link_sys {
  id: string;
}

export interface Header_secondaryContentCollection_items_Link_asset {
  contentType: string | null;
  title: string | null;
  url: string | null;
}

export interface Header_secondaryContentCollection_items_Link_route {
  slug: string | null;
}

export interface Header_secondaryContentCollection_items_Link {
  sys: Header_secondaryContentCollection_items_Link_sys;
  asset: Header_secondaryContentCollection_items_Link_asset | null;
  title: string | null;
  type: string | null;
  embeddedType: string | null;
  route: Header_secondaryContentCollection_items_Link_route | null;
  style: any | null;
  url: string | null;
}

export type Header_secondaryContentCollection_items = Header_secondaryContentCollection_items_Section | Header_secondaryContentCollection_items_Link;

export interface Header_secondaryContentCollection {
  items: (Header_secondaryContentCollection_items | null)[];
}

export interface Header {
  sys: Header_sys;
  style: any | null;
  type: string | null;
  logo: Header_logo | null;
  contentCollection: Header_contentCollection | null;
  secondaryContentCollection: Header_secondaryContentCollection | null;
}

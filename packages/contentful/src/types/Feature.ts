/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Feature
// ====================================================

export interface Feature_sys {
  id: string;
}

export interface Feature_desktopAsset {
  contentType: string | null;
  title: string | null;
  url: string | null;
}

export interface Feature_mobileAsset {
  contentType: string | null;
  title: string | null;
  url: string | null;
}

export interface Feature_embeddedAsset {
  contentType: string | null;
  title: string | null;
  url: string | null;
}

export interface Feature_contentCollection_items_sys {
  id: string;
}

export interface Feature_contentCollection_items_asset {
  contentType: string | null;
  title: string | null;
  url: string | null;
}

export interface Feature_contentCollection_items_route {
  slug: string | null;
}

export interface Feature_contentCollection_items {
  sys: Feature_contentCollection_items_sys;
  asset: Feature_contentCollection_items_asset | null;
  title: string | null;
  type: string | null;
  embeddedType: string | null;
  route: Feature_contentCollection_items_route | null;
  style: any | null;
  url: string | null;
}

export interface Feature_contentCollection {
  items: (Feature_contentCollection_items | null)[];
}

export interface Feature {
  sys: Feature_sys;
  title: string | null;
  type: string | null;
  embeddedType: string | null;
  eyebrow: string | null;
  subtitle: string | null;
  desktopAsset: Feature_desktopAsset | null;
  mobileAsset: Feature_mobileAsset | null;
  embeddedAsset: Feature_embeddedAsset | null;
  style: any | null;
  contentCollection: Feature_contentCollection | null;
}

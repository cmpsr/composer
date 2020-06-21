/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FeatureByIdQuery
// ====================================================

export interface FeatureByIdQuery_feature_sys {
  id: string;
}

export interface FeatureByIdQuery_feature_desktopAsset {
  contentType: string | null;
  title: string | null;
  url: string | null;
}

export interface FeatureByIdQuery_feature_mobileAsset {
  contentType: string | null;
  title: string | null;
  url: string | null;
}

export interface FeatureByIdQuery_feature_embeddedAsset {
  contentType: string | null;
  title: string | null;
  url: string | null;
}

export interface FeatureByIdQuery_feature_contentCollection_items_sys {
  id: string;
}

export interface FeatureByIdQuery_feature_contentCollection_items_asset {
  contentType: string | null;
  title: string | null;
  url: string | null;
}

export interface FeatureByIdQuery_feature_contentCollection_items_route {
  slug: string | null;
}

export interface FeatureByIdQuery_feature_contentCollection_items {
  sys: FeatureByIdQuery_feature_contentCollection_items_sys;
  asset: FeatureByIdQuery_feature_contentCollection_items_asset | null;
  title: string | null;
  type: string | null;
  embeddedType: string | null;
  route: FeatureByIdQuery_feature_contentCollection_items_route | null;
  style: any | null;
  url: string | null;
}

export interface FeatureByIdQuery_feature_contentCollection {
  items: (FeatureByIdQuery_feature_contentCollection_items | null)[];
}

export interface FeatureByIdQuery_feature {
  sys: FeatureByIdQuery_feature_sys;
  title: string | null;
  type: string | null;
  embeddedType: string | null;
  eyebrow: string | null;
  subtitle: string | null;
  desktopAsset: FeatureByIdQuery_feature_desktopAsset | null;
  mobileAsset: FeatureByIdQuery_feature_mobileAsset | null;
  embeddedAsset: FeatureByIdQuery_feature_embeddedAsset | null;
  style: any | null;
  contentCollection: FeatureByIdQuery_feature_contentCollection | null;
}

export interface FeatureByIdQuery {
  feature: FeatureByIdQuery_feature | null;
}

export interface FeatureByIdQueryVariables {
  id: string;
}

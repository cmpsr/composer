/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: HeroByIdQuery
// ====================================================

export interface HeroByIdQuery_hero_sys {
  id: string;
}

export interface HeroByIdQuery_hero_desktopAsset {
  contentType: string | null;
  title: string | null;
  url: string | null;
}

export interface HeroByIdQuery_hero_mobileAsset {
  contentType: string | null;
  title: string | null;
  url: string | null;
}

export interface HeroByIdQuery_hero_contentCollection_items_sys {
  id: string;
}

export interface HeroByIdQuery_hero_contentCollection_items_asset {
  contentType: string | null;
  title: string | null;
  url: string | null;
}

export interface HeroByIdQuery_hero_contentCollection_items_route {
  slug: string | null;
}

export interface HeroByIdQuery_hero_contentCollection_items {
  sys: HeroByIdQuery_hero_contentCollection_items_sys;
  asset: HeroByIdQuery_hero_contentCollection_items_asset | null;
  title: string | null;
  type: string | null;
  embeddedType: string | null;
  route: HeroByIdQuery_hero_contentCollection_items_route | null;
  style: any | null;
  url: string | null;
}

export interface HeroByIdQuery_hero_contentCollection {
  items: (HeroByIdQuery_hero_contentCollection_items | null)[];
}

export interface HeroByIdQuery_hero {
  sys: HeroByIdQuery_hero_sys;
  title: string | null;
  type: string | null;
  eyebrow: string | null;
  subtitle: string | null;
  desktopAsset: HeroByIdQuery_hero_desktopAsset | null;
  mobileAsset: HeroByIdQuery_hero_mobileAsset | null;
  style: any | null;
  contentCollection: HeroByIdQuery_hero_contentCollection | null;
}

export interface HeroByIdQuery {
  hero: HeroByIdQuery_hero | null;
}

export interface HeroByIdQueryVariables {
  id: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SectionByIdQuery
// ====================================================

export interface SectionByIdQuery_section_sys {
  id: string;
}

export interface SectionByIdQuery_section_contentCollection_items_Link {}

export interface SectionByIdQuery_section_contentCollection_items_BodyCopy_sys {
  id: string;
}

export interface SectionByIdQuery_section_contentCollection_items_BodyCopy {
  sys: SectionByIdQuery_section_contentCollection_items_BodyCopy_sys;
  type: string | null;
  style: any | null;
  copy: string | null;
}

export interface SectionByIdQuery_section_contentCollection_items_Experiment_sys {
  id: string;
}

export interface SectionByIdQuery_section_contentCollection_items_Experiment {
  sys: SectionByIdQuery_section_contentCollection_items_Experiment_sys;
  variants: any | null;
}

export interface SectionByIdQuery_section_contentCollection_items_Feature_sys {
  id: string;
}

export interface SectionByIdQuery_section_contentCollection_items_Feature_desktopAsset {
  contentType: string | null;
  title: string | null;
  url: string | null;
}

export interface SectionByIdQuery_section_contentCollection_items_Feature_mobileAsset {
  contentType: string | null;
  title: string | null;
  url: string | null;
}

export interface SectionByIdQuery_section_contentCollection_items_Feature_embeddedAsset {
  contentType: string | null;
  title: string | null;
  url: string | null;
}

export interface SectionByIdQuery_section_contentCollection_items_Feature_contentCollection_items_sys {
  id: string;
}

export interface SectionByIdQuery_section_contentCollection_items_Feature_contentCollection_items_asset {
  contentType: string | null;
  title: string | null;
  url: string | null;
}

export interface SectionByIdQuery_section_contentCollection_items_Feature_contentCollection_items_route {
  slug: string | null;
}

export interface SectionByIdQuery_section_contentCollection_items_Feature_contentCollection_items {
  sys: SectionByIdQuery_section_contentCollection_items_Feature_contentCollection_items_sys;
  asset: SectionByIdQuery_section_contentCollection_items_Feature_contentCollection_items_asset | null;
  title: string | null;
  type: string | null;
  embeddedType: string | null;
  route: SectionByIdQuery_section_contentCollection_items_Feature_contentCollection_items_route | null;
  style: any | null;
  url: string | null;
}

export interface SectionByIdQuery_section_contentCollection_items_Feature_contentCollection {
  items: (SectionByIdQuery_section_contentCollection_items_Feature_contentCollection_items | null)[];
}

export interface SectionByIdQuery_section_contentCollection_items_Feature {
  sys: SectionByIdQuery_section_contentCollection_items_Feature_sys;
  title: string | null;
  type: string | null;
  embeddedType: string | null;
  eyebrow: string | null;
  subtitle: string | null;
  desktopAsset: SectionByIdQuery_section_contentCollection_items_Feature_desktopAsset | null;
  mobileAsset: SectionByIdQuery_section_contentCollection_items_Feature_mobileAsset | null;
  embeddedAsset: SectionByIdQuery_section_contentCollection_items_Feature_embeddedAsset | null;
  style: any | null;
  contentCollection: SectionByIdQuery_section_contentCollection_items_Feature_contentCollection | null;
}

export interface SectionByIdQuery_section_contentCollection_items_Footer_sys {
  id: string;
}

export interface SectionByIdQuery_section_contentCollection_items_Footer_logo_sys {
  id: string;
}

export interface SectionByIdQuery_section_contentCollection_items_Footer_logo_asset {
  contentType: string | null;
  title: string | null;
  url: string | null;
}

export interface SectionByIdQuery_section_contentCollection_items_Footer_logo_route {
  slug: string | null;
}

export interface SectionByIdQuery_section_contentCollection_items_Footer_logo {
  sys: SectionByIdQuery_section_contentCollection_items_Footer_logo_sys;
  asset: SectionByIdQuery_section_contentCollection_items_Footer_logo_asset | null;
  title: string | null;
  type: string | null;
  embeddedType: string | null;
  route: SectionByIdQuery_section_contentCollection_items_Footer_logo_route | null;
  style: any | null;
  url: string | null;
}

export interface SectionByIdQuery_section_contentCollection_items_Footer_contentCollection_items_Link_sys {
  id: string;
}

export interface SectionByIdQuery_section_contentCollection_items_Footer_contentCollection_items_Link_asset {
  contentType: string | null;
  title: string | null;
  url: string | null;
}

export interface SectionByIdQuery_section_contentCollection_items_Footer_contentCollection_items_Link_route {
  slug: string | null;
}

export interface SectionByIdQuery_section_contentCollection_items_Footer_contentCollection_items_Link {
  sys: SectionByIdQuery_section_contentCollection_items_Footer_contentCollection_items_Link_sys;
  asset: SectionByIdQuery_section_contentCollection_items_Footer_contentCollection_items_Link_asset | null;
  title: string | null;
  type: string | null;
  embeddedType: string | null;
  route: SectionByIdQuery_section_contentCollection_items_Footer_contentCollection_items_Link_route | null;
  style: any | null;
  url: string | null;
}

export interface SectionByIdQuery_section_contentCollection_items_Footer_contentCollection_items_Grid_sys {
  id: string;
}

export interface SectionByIdQuery_section_contentCollection_items_Footer_contentCollection_items_Grid {
  sys: SectionByIdQuery_section_contentCollection_items_Footer_contentCollection_items_Grid_sys;
  style: any | null;
  type: string | null;
}

export type SectionByIdQuery_section_contentCollection_items_Footer_contentCollection_items = SectionByIdQuery_section_contentCollection_items_Footer_contentCollection_items_Link | SectionByIdQuery_section_contentCollection_items_Footer_contentCollection_items_Grid;

export interface SectionByIdQuery_section_contentCollection_items_Footer_contentCollection {
  items: (SectionByIdQuery_section_contentCollection_items_Footer_contentCollection_items | null)[];
}

export interface SectionByIdQuery_section_contentCollection_items_Footer_secondaryContentCollection_items_Section {}

export interface SectionByIdQuery_section_contentCollection_items_Footer_secondaryContentCollection_items_Link_sys {
  id: string;
}

export interface SectionByIdQuery_section_contentCollection_items_Footer_secondaryContentCollection_items_Link_asset {
  contentType: string | null;
  title: string | null;
  url: string | null;
}

export interface SectionByIdQuery_section_contentCollection_items_Footer_secondaryContentCollection_items_Link_route {
  slug: string | null;
}

export interface SectionByIdQuery_section_contentCollection_items_Footer_secondaryContentCollection_items_Link {
  sys: SectionByIdQuery_section_contentCollection_items_Footer_secondaryContentCollection_items_Link_sys;
  asset: SectionByIdQuery_section_contentCollection_items_Footer_secondaryContentCollection_items_Link_asset | null;
  title: string | null;
  type: string | null;
  embeddedType: string | null;
  route: SectionByIdQuery_section_contentCollection_items_Footer_secondaryContentCollection_items_Link_route | null;
  style: any | null;
  url: string | null;
}

export type SectionByIdQuery_section_contentCollection_items_Footer_secondaryContentCollection_items = SectionByIdQuery_section_contentCollection_items_Footer_secondaryContentCollection_items_Section | SectionByIdQuery_section_contentCollection_items_Footer_secondaryContentCollection_items_Link;

export interface SectionByIdQuery_section_contentCollection_items_Footer_secondaryContentCollection {
  items: (SectionByIdQuery_section_contentCollection_items_Footer_secondaryContentCollection_items | null)[];
}

export interface SectionByIdQuery_section_contentCollection_items_Footer {
  sys: SectionByIdQuery_section_contentCollection_items_Footer_sys;
  copy: string | null;
  style: any | null;
  type: string | null;
  logo: SectionByIdQuery_section_contentCollection_items_Footer_logo | null;
  contentCollection: SectionByIdQuery_section_contentCollection_items_Footer_contentCollection | null;
  secondaryContentCollection: SectionByIdQuery_section_contentCollection_items_Footer_secondaryContentCollection | null;
}

export interface SectionByIdQuery_section_contentCollection_items_Grid_sys {
  id: string;
}

export interface SectionByIdQuery_section_contentCollection_items_Grid {
  sys: SectionByIdQuery_section_contentCollection_items_Grid_sys;
  style: any | null;
  type: string | null;
}

export interface SectionByIdQuery_section_contentCollection_items_Header_sys {
  id: string;
}

export interface SectionByIdQuery_section_contentCollection_items_Header_logo_sys {
  id: string;
}

export interface SectionByIdQuery_section_contentCollection_items_Header_logo_asset {
  contentType: string | null;
  title: string | null;
  url: string | null;
}

export interface SectionByIdQuery_section_contentCollection_items_Header_logo_route {
  slug: string | null;
}

export interface SectionByIdQuery_section_contentCollection_items_Header_logo {
  sys: SectionByIdQuery_section_contentCollection_items_Header_logo_sys;
  asset: SectionByIdQuery_section_contentCollection_items_Header_logo_asset | null;
  title: string | null;
  type: string | null;
  embeddedType: string | null;
  route: SectionByIdQuery_section_contentCollection_items_Header_logo_route | null;
  style: any | null;
  url: string | null;
}

export interface SectionByIdQuery_section_contentCollection_items_Header_contentCollection_items_Link_sys {
  id: string;
}

export interface SectionByIdQuery_section_contentCollection_items_Header_contentCollection_items_Link_asset {
  contentType: string | null;
  title: string | null;
  url: string | null;
}

export interface SectionByIdQuery_section_contentCollection_items_Header_contentCollection_items_Link_route {
  slug: string | null;
}

export interface SectionByIdQuery_section_contentCollection_items_Header_contentCollection_items_Link {
  sys: SectionByIdQuery_section_contentCollection_items_Header_contentCollection_items_Link_sys;
  asset: SectionByIdQuery_section_contentCollection_items_Header_contentCollection_items_Link_asset | null;
  title: string | null;
  type: string | null;
  embeddedType: string | null;
  route: SectionByIdQuery_section_contentCollection_items_Header_contentCollection_items_Link_route | null;
  style: any | null;
  url: string | null;
}

export interface SectionByIdQuery_section_contentCollection_items_Header_contentCollection_items_Grid_sys {
  id: string;
}

export interface SectionByIdQuery_section_contentCollection_items_Header_contentCollection_items_Grid {
  sys: SectionByIdQuery_section_contentCollection_items_Header_contentCollection_items_Grid_sys;
  style: any | null;
  type: string | null;
}

export type SectionByIdQuery_section_contentCollection_items_Header_contentCollection_items = SectionByIdQuery_section_contentCollection_items_Header_contentCollection_items_Link | SectionByIdQuery_section_contentCollection_items_Header_contentCollection_items_Grid;

export interface SectionByIdQuery_section_contentCollection_items_Header_contentCollection {
  items: (SectionByIdQuery_section_contentCollection_items_Header_contentCollection_items | null)[];
}

export interface SectionByIdQuery_section_contentCollection_items_Header_secondaryContentCollection_items_Section {}

export interface SectionByIdQuery_section_contentCollection_items_Header_secondaryContentCollection_items_Link_sys {
  id: string;
}

export interface SectionByIdQuery_section_contentCollection_items_Header_secondaryContentCollection_items_Link_asset {
  contentType: string | null;
  title: string | null;
  url: string | null;
}

export interface SectionByIdQuery_section_contentCollection_items_Header_secondaryContentCollection_items_Link_route {
  slug: string | null;
}

export interface SectionByIdQuery_section_contentCollection_items_Header_secondaryContentCollection_items_Link {
  sys: SectionByIdQuery_section_contentCollection_items_Header_secondaryContentCollection_items_Link_sys;
  asset: SectionByIdQuery_section_contentCollection_items_Header_secondaryContentCollection_items_Link_asset | null;
  title: string | null;
  type: string | null;
  embeddedType: string | null;
  route: SectionByIdQuery_section_contentCollection_items_Header_secondaryContentCollection_items_Link_route | null;
  style: any | null;
  url: string | null;
}

export type SectionByIdQuery_section_contentCollection_items_Header_secondaryContentCollection_items = SectionByIdQuery_section_contentCollection_items_Header_secondaryContentCollection_items_Section | SectionByIdQuery_section_contentCollection_items_Header_secondaryContentCollection_items_Link;

export interface SectionByIdQuery_section_contentCollection_items_Header_secondaryContentCollection {
  items: (SectionByIdQuery_section_contentCollection_items_Header_secondaryContentCollection_items | null)[];
}

export interface SectionByIdQuery_section_contentCollection_items_Header {
  sys: SectionByIdQuery_section_contentCollection_items_Header_sys;
  style: any | null;
  type: string | null;
  logo: SectionByIdQuery_section_contentCollection_items_Header_logo | null;
  contentCollection: SectionByIdQuery_section_contentCollection_items_Header_contentCollection | null;
  secondaryContentCollection: SectionByIdQuery_section_contentCollection_items_Header_secondaryContentCollection | null;
}

export interface SectionByIdQuery_section_contentCollection_items_Hero_sys {
  id: string;
}

export interface SectionByIdQuery_section_contentCollection_items_Hero_desktopAsset {
  contentType: string | null;
  title: string | null;
  url: string | null;
}

export interface SectionByIdQuery_section_contentCollection_items_Hero_mobileAsset {
  contentType: string | null;
  title: string | null;
  url: string | null;
}

export interface SectionByIdQuery_section_contentCollection_items_Hero_contentCollection_items_sys {
  id: string;
}

export interface SectionByIdQuery_section_contentCollection_items_Hero_contentCollection_items_asset {
  contentType: string | null;
  title: string | null;
  url: string | null;
}

export interface SectionByIdQuery_section_contentCollection_items_Hero_contentCollection_items_route {
  slug: string | null;
}

export interface SectionByIdQuery_section_contentCollection_items_Hero_contentCollection_items {
  sys: SectionByIdQuery_section_contentCollection_items_Hero_contentCollection_items_sys;
  asset: SectionByIdQuery_section_contentCollection_items_Hero_contentCollection_items_asset | null;
  title: string | null;
  type: string | null;
  embeddedType: string | null;
  route: SectionByIdQuery_section_contentCollection_items_Hero_contentCollection_items_route | null;
  style: any | null;
  url: string | null;
}

export interface SectionByIdQuery_section_contentCollection_items_Hero_contentCollection {
  items: (SectionByIdQuery_section_contentCollection_items_Hero_contentCollection_items | null)[];
}

export interface SectionByIdQuery_section_contentCollection_items_Hero {
  sys: SectionByIdQuery_section_contentCollection_items_Hero_sys;
  title: string | null;
  type: string | null;
  eyebrow: string | null;
  subtitle: string | null;
  desktopAsset: SectionByIdQuery_section_contentCollection_items_Hero_desktopAsset | null;
  mobileAsset: SectionByIdQuery_section_contentCollection_items_Hero_mobileAsset | null;
  style: any | null;
  contentCollection: SectionByIdQuery_section_contentCollection_items_Hero_contentCollection | null;
}

export type SectionByIdQuery_section_contentCollection_items = SectionByIdQuery_section_contentCollection_items_Link | SectionByIdQuery_section_contentCollection_items_BodyCopy | SectionByIdQuery_section_contentCollection_items_Experiment | SectionByIdQuery_section_contentCollection_items_Feature | SectionByIdQuery_section_contentCollection_items_Footer | SectionByIdQuery_section_contentCollection_items_Grid | SectionByIdQuery_section_contentCollection_items_Header | SectionByIdQuery_section_contentCollection_items_Hero;

export interface SectionByIdQuery_section_contentCollection {
  items: (SectionByIdQuery_section_contentCollection_items | null)[];
}

export interface SectionByIdQuery_section {
  sys: SectionByIdQuery_section_sys;
  title: string | null;
  subtitle: string | null;
  style: any | null;
  type: string | null;
  contentCollection: SectionByIdQuery_section_contentCollection | null;
}

export interface SectionByIdQuery {
  section: SectionByIdQuery_section | null;
}

export interface SectionByIdQueryVariables {
  id: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: LinkByIdQuery
// ====================================================

export interface LinkByIdQuery_link_sys {
  id: string;
}

export interface LinkByIdQuery_link_asset {
  contentType: string | null;
  title: string | null;
  url: string | null;
}

export interface LinkByIdQuery_link_route {
  slug: string | null;
}

export interface LinkByIdQuery_link {
  sys: LinkByIdQuery_link_sys;
  asset: LinkByIdQuery_link_asset | null;
  title: string | null;
  type: string | null;
  embeddedType: string | null;
  route: LinkByIdQuery_link_route | null;
  style: any | null;
  url: string | null;
}

export interface LinkByIdQuery {
  link: LinkByIdQuery_link | null;
}

export interface LinkByIdQueryVariables {
  id: string;
}

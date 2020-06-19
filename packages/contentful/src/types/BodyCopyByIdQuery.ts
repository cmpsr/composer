/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: BodyCopyByIdQuery
// ====================================================

export interface BodyCopyByIdQuery_bodyCopy_sys {
  id: string;
}

export interface BodyCopyByIdQuery_bodyCopy {
  sys: BodyCopyByIdQuery_bodyCopy_sys;
  type: string | null;
  style: any | null;
  copy: string | null;
}

export interface BodyCopyByIdQuery {
  bodyCopy: BodyCopyByIdQuery_bodyCopy | null;
}

export interface BodyCopyByIdQueryVariables {
  id: string;
}

import { gql } from '@apollo/client';

export const ModelFragment = gql`
  fragment ModelFragment on Mdx {
    id
    base
    md
    lg
    xl
    xxl
  }
`;

export const ModelCollectionFragment = gql`
  fragment ModelCollectionFragment on BlockModelsCollection {
    items {
      ...ModelFragment
    }
  }
  ${ModelFragment}
`;

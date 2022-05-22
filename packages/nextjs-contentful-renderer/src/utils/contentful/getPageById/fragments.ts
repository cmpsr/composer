import { gql } from '@apollo/client';

export const ModelCollectionFragment = gql`
  fragment ModelFragment on BlockModelsCollection {
    items {
      id
      base
      md
      lg
      xl
      xxl
    }
  }
`;

export const CommonBlockFragment = gql`
  fragment CommonBlockFragment on ReusableBlock {
    default
    position
    block {
      propsValue
      modelsCollection(limit: 1) {
        ...ModelCollectionFragment
      }
    }
  }
  ${ModelCollectionFragment}
`;

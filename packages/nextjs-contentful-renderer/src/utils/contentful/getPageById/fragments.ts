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

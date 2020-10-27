import { ReactElement, useContext } from 'react';
import { useQuery } from '@apollo/client';
import { DocumentNode } from 'graphql';

import { ContentfulContext } from 'context';
import renderFromContentfulModel from 'utils/renderFromContentfulModel';

type Props = {
  id: string;
  query: DocumentNode;
  name: string;
};

export const getContent = <T>({ id, query, name }: Props): ReactElement => {
  const contentfulContext = useContext(ContentfulContext);
  const { data }: { data: T } = useQuery(query, {
    variables: { id }
  });
  if (!data) return null;

  return renderFromContentfulModel(contentfulContext, data[name], 0);
};

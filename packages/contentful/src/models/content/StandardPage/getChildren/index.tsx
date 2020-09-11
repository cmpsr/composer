import React, { ReactElement, useContext } from 'react';
import { useQuery } from '@apollo/client';

import { ContentfulContext } from 'context';
import renderFromContentfulModel from 'utils/renderFromContentfulModel';
import { StandardPageByIdQuery as StandardPageByIdQueryType } from 'types/StandardPageByIdQuery';

import StandardPageByIdQuery from '../queries/StandardPageByIdQuery.graphql';

type Props = {
  id: string;
  preview?: boolean;
};

export const getChildren = ({ id, preview = false }: Props): ReactElement => {
  const contentfulContext = useContext(ContentfulContext);
  const { data }: { data: StandardPageByIdQueryType } = useQuery(
    StandardPageByIdQuery,
    {
      variables: { id, preview }
    }
  );

  if (!data) return null;

  const header =
    data.standardPage.header &&
    renderFromContentfulModel(contentfulContext, data.standardPage.header);
  const contentItems = data.standardPage.contentCollection.items.map(
    (item, index) =>
      renderFromContentfulModel(contentfulContext, item, index, id)
  );
  const footer =
    data.standardPage.footer &&
    renderFromContentfulModel(contentfulContext, data.standardPage.footer);

  return (
    <>
      {header}
      {contentItems}
      {footer}
    </>
  );
};

import React, { ReactElement, useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { ContentfulContext } from '../../context';
import { ComponentRenderer } from '../ComponentRenderer';

export type ChildProps = {
  componentMap?: any;
  queryMap?: any;
  type: string;
  variables: { [key: string]: string };
};

export const ComponentRendererWithQuery = ({
  componentMap: componentMapOverride,
  queryMap: queryMapOverride,
  type,
  variables,
}: ChildProps): ReactElement | null => {
  const {
    componentMap: componentMapDefault,
    queryMap: queryMapDefault,
  } = useContext(ContentfulContext);

  const query = (queryMapOverride || queryMapDefault)[type]();
  const { data } = useQuery(query, {
    variables,
  });
  if (!data) return null;

  const key = Object.keys(data)[0];
  if (!key) return null;

  const dataToParse =
    key.indexOf('Collection') >= 0 ? data[key].items[0] : data[key];
  return (
    <ComponentRenderer
      data={dataToParse}
      componentMap={componentMapOverride || componentMapDefault}
    />
  );
};

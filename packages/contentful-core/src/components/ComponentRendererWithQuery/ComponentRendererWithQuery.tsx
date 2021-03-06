import React, { ReactElement, useContext } from 'react';
import { useQuery } from '@apollo/client';
import { ContentfulContext } from '../../context';
import { ComponentRenderer } from '../ComponentRenderer';

export type ChildProps = {
  className?: string;
  componentMap?: any;
  context?: any;
  queryMap?: any;
  type: string;
  variables: { [key: string]: string | boolean | number };
  loadingPlaceholder?: ReactElement;
};

export const ComponentRendererWithQuery = ({
  className,
  componentMap: componentMapOverride,
  context,
  queryMap: queryMapOverride,
  type,
  variables,
  loadingPlaceholder,
}: ChildProps): ReactElement | null => {
  try {
    const { componentMap: componentMapDefault, queryMap: queryMapDefault } = useContext(
      ContentfulContext,
    );

    const query = (queryMapOverride || queryMapDefault)[type]();
    const { data, loading } = useQuery(query, {
      variables,
      context,
    });

    if (loadingPlaceholder && loading) {
      return loadingPlaceholder;
    }

    if (!data) return null;

    const key = Object.keys(data)[0];

    if (!key) return null;

    const dataToParse = key.indexOf('Collection') >= 0 ? data[key].items[0] : data[key];

    return (
      <ComponentRenderer
        className={className}
        data={dataToParse}
        componentMap={componentMapOverride || componentMapDefault}
      />
    );
  } catch (e) {
    console.log('error', e);
    return null;
  }
};

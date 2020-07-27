import React, { ReactElement } from 'react';
import { ContentfulProvider } from '../../context';
import { ComponentRendererWithQuery } from '../ComponentRendererWithQuery';

export type ChildProps = {
  componentMap: any;
  queryMap: any;
  type: string;
  variables: { [key: string]: string };
};

export const ComponentRendererWithContext = ({
  variables,
  componentMap,
  queryMap,
  type,
}: ChildProps): ReactElement | null => (
  <ContentfulProvider componentMap={componentMap} queryMap={queryMap}>
    <ComponentRendererWithQuery type={type} variables={variables} />
  </ContentfulProvider>
);

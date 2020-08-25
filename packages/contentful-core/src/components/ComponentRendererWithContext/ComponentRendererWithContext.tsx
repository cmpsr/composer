import React, { ReactElement } from 'react';
import { ContentfulProvider } from '../../context';
import { ComponentRendererWithQuery } from '../ComponentRendererWithQuery';

export type ChildProps = {
  className?: string;
  componentMap: any;
  queryMap: any;
  type: string;
  variables: { [key: string]: string | boolean | number };
};

export const ComponentRendererWithContext = ({
  className,
  variables,
  componentMap,
  queryMap,
  type
}: ChildProps): ReactElement | null => (
    <ContentfulProvider componentMap={componentMap} queryMap={queryMap}>
      <ComponentRendererWithQuery
        className={className}
        type={type}
        variables={variables}
      />
    </ContentfulProvider>
  );

import React, { ReactElement } from 'react';
import { ContentfulProvider } from '../../context';
import { ComponentRendererWithQuery } from '../ComponentRendererWithQuery';

export type ChildProps = {
  className?: string;
  componentMap: any;
  context?: any;
  queryMap: any;
  type: string;
  variables: { [key: string]: string | boolean | number };
};

export const ComponentRendererWithContext = ({
  className,
  variables,
  componentMap,
  context,
  queryMap,
  type,
}: ChildProps): ReactElement | null => (
    <ContentfulProvider componentMap={componentMap} queryMap={queryMap}>
      <ComponentRendererWithQuery
        className={className}
        context={context}
        type={type}
        variables={variables}
      />
    </ContentfulProvider>
  );

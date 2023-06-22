import React, { FC, useEffect, useMemo, useState } from 'react';
import * as Composer from '@cmpsr/components';
import { getMDXComponent } from 'mdx-bundler/client';
import { MdxRendererProps } from './types';
import { components } from './components';

export const MdxRenderer: FC<MdxRendererProps> = ({ content = {}, componentMap = {} }) => {
  const [isClient, setIsClient] = useState(false);
  const code = Composer.useBreakpointValue(content) || content.base;
  const MdxComponent = useMemo(() => getMDXComponent(code), [code]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return !isClient ? null : <MdxComponent components={{ ...components, ...componentMap }} />;
};

export * from './MarkdownContext';
export * from './MarkdownContext/types';

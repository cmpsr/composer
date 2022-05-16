import React, { FC, useMemo } from 'react';
import * as Composer from '@cmpsr/components';
import { getMDXComponent } from 'mdx-bundler/client';
import { Paragraph, Text } from './components';
import { MdxRendererProps } from './types';

const components: any = Object.keys(Composer).reduce(
  (acc, key) => {
    const descriptor = Reflect.getOwnPropertyDescriptor(Composer, key);
    if (
      descriptor?.get &&
      (typeof descriptor.get() === 'function' || typeof descriptor?.get()?.render === 'function')
    ) {
      return { ...acc, [key]: descriptor.get() };
    } else {
      return acc;
    }
  },
  {
    p: Paragraph,
    h1: (props: Composer.TextProps) => <Composer.Text as="h1" variant="text-header-4XL" {...props} />,
    h2: (props: Composer.TextProps) => <Composer.Text as="h2" variant="text-header-3XL" {...props} />,
    h3: (props: Composer.TextProps) => <Composer.Text as="h3" variant="text-header-2XL" {...props} />,
    h4: (props: Composer.TextProps) => <Composer.Text as="h4" variant="text-header-XL" {...props} />,
    h5: (props: Composer.TextProps) => <Composer.Text as="h5" variant="text-header-L" {...props} />,
    h6: (props: Composer.TextProps) => <Composer.Text as="h6" variant="text-header-M" {...props} />,
    a: (props: Composer.LinkProps) => <Composer.Link display="inline-flex" {...props} />,
    img: Composer.Image,
  }
);

export const MdxRenderer: FC<MdxRendererProps> = ({ content = {}, componentMap = {} }) => {
  const hasNoMdx = Object.values(content).every((item) => !item);
  if (hasNoMdx) {
    return null;
  }
  const code = Composer.useBreakpointValue(content) || content.base;
  const MdxComponent = useMemo(() => getMDXComponent(code), [code]);
  return typeof window === 'undefined' ? null : <MdxComponent components={{ ...components, Text, ...componentMap }} />;
};

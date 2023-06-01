import React, { FC, useEffect, useMemo, useState } from 'react';
import * as Composer from '@cmpsr/components';
import * as Blocks from '@cmpsr/blocks';
import { getMDXComponent } from 'mdx-bundler/client';
import { MdxRendererProps } from './types';
import { MarkdownProps, useMarkdown } from './MarkdownContext';

const renderText = ({ children, ...props }: Composer.TextProps, as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p') => {
  const variants = {
    h1: 'text-header-4XL' as const,
    h2: 'text-header-3XL' as const,
    h3: 'text-header-2XL' as const,
    h4: 'text-header-XL' as const,
    h5: 'text-header-L' as const,
    h6: 'text-header-M' as const,
  };
  const { paragraph = {}, [as]: current } = useMarkdown();
  return (
    <Composer.Text marginBottom="1rem" as={as} variant={variants[as]} {...paragraph} {...current} {...props}>
      {children}
    </Composer.Text>
  );
};

const renderLink = ({ children, ...props }: Composer.LinkProps) => {
  const { link = {} } = useMarkdown();
  return (
    <Composer.Link display="inline-flex" {...props} {...link}>
      {children}
    </Composer.Link>
  );
};

const SignalWireComponents: Record<string, unknown> = {};

try {
  const { VideoChat } = require('@cmpsr/signalwire/client');
  SignalWireComponents['VideoChat'] = VideoChat;
} catch {
  // Intentionally left blank
}

const CarouselComponents: Record<string, unknown> = {};

try {
  const { Carousel } = require('@cmpsr/carousel');
  CarouselComponents['Carousel'] = Carousel;
} catch {
  // Intentionally left blank
}

const composerComponents: any = Object.keys(Composer).reduce(
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
    ul: (props: Composer.UnorderedListProps) => <Composer.UnorderedList marginBottom="1rem" {...props} />,
    ol: (props: Composer.OrderedListProps) => <Composer.OrderedList marginBottom="1rem" {...props} />,
    li: Composer.UnorderedList.Item,
    p: (props: Composer.TextProps) => renderText(props, 'p'),
    h1: (props: Composer.TextProps) => renderText(props, 'h1'),
    h2: (props: Composer.TextProps) => renderText(props, 'h2'),
    h3: (props: Composer.TextProps) => renderText(props, 'h3'),
    h4: (props: Composer.TextProps) => renderText(props, 'h4'),
    h5: (props: Composer.TextProps) => renderText(props, 'h5'),
    h6: (props: Composer.TextProps) => renderText(props, 'h6'),
    a: (props: Composer.LinkProps) => renderLink(props),
    img: Composer.Image,
    ...SignalWireComponents,
    ...CarouselComponents,
    MarkdownProps,
  }
);

const components: any = Object.keys(Blocks).reduce((acc, key) => {
  const descriptor = Reflect.getOwnPropertyDescriptor(Blocks, key);
  if (descriptor?.get && (typeof descriptor.get() === 'function' || typeof descriptor?.get()?.render === 'function')) {
    return { ...acc, [key]: descriptor.get() };
  } else {
    return acc;
  }
}, composerComponents);

export const MdxRenderer: FC<MdxRendererProps> = ({ content = {}, componentMap = {} }) => {
  const [isClient, setIsClient] = useState(false);
  const code = Composer.useBreakpointValue(content) || content.base;
  const MdxComponent = useMemo(() => getMDXComponent(code), [code]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return !isClient ? null : <MdxComponent components={{ ...components, ...componentMap }} />;
};

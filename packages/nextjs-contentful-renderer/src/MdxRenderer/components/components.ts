import * as Composer from '@cmpsr/components';
import * as Blocks from '@cmpsr/blocks';
import { renderLink, renderListItem, renderOrderedList, renderText, renderUnorderedList } from '../renderers';
import { MarkdownProps, MarkdownProvider } from '../MarkdownContext';

const SignalWireComponents: Record<string, unknown> = {};

try {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { VideoChat } = require('@cmpsr/signalwire/client');
  SignalWireComponents['VideoChat'] = VideoChat;
} catch {
  // Intentionally left blank
}

const CarouselComponents: Record<string, unknown> = {};

try {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
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
    ul: (props: Composer.UnorderedListProps) => renderUnorderedList(props),
    ol: (props: Composer.OrderedListProps) => renderOrderedList(props),
    li: (props: Composer.ListItemProps) => renderListItem(props),
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
    MarkdownProvider,
  },
);

export const components: any = Object.keys(Blocks).reduce((acc, key) => {
  const descriptor = Reflect.getOwnPropertyDescriptor(Blocks, key);
  if (descriptor?.get && (typeof descriptor.get() === 'function' || typeof descriptor?.get()?.render === 'function')) {
    return { ...acc, [key]: descriptor.get() };
  } else {
    return acc;
  }
}, composerComponents);

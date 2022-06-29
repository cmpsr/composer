import { FlexProps, ImageProps, LinkProps, TextPairingProps } from '@cmpsr/components';
import { FC } from 'react';
export { FlexProps as HeroProps } from '@cmpsr/components';

export interface HeroContentProps extends FlexProps {
  contentAlignment?: 'start' | 'end' | 'left' | 'right' | 'center';
}

export interface HeroStaticMembers {
  Image: FC<ImageProps>;
  Content: FC<HeroContentProps>;
  TextPairing: FC<TextPairingProps>;
  Link: FC<LinkProps>;
  LinkGroup: FC<FlexProps>;
}

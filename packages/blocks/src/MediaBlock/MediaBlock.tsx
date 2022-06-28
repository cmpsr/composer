import React, { FC } from 'react';
import { Flex, Image, TextPairing } from '@cmpsr/components';
import { MediaBlockProps, MediaBlockStaticMembers } from './types';

export const MediaBlock: FC<MediaBlockProps> & MediaBlockStaticMembers = (props) => {
  const { variant = 'horizontal', justifyContent = 'start', ...rest } = props;
  const isHorizontal = variant === 'horizontal';
  const alignItems = isHorizontal ? 'center' : 'start';
  return (
    <Flex
      direction={isHorizontal ? 'row' : 'column'}
      gap={isHorizontal ? '1.25rem' : '1rem'}
      justifyContent={justifyContent}
      alignItems={alignItems}
      textAlign={isHorizontal ? 'start' : props.alignItems}
      {...rest}
    />
  );
};

MediaBlock.Image = Image;
MediaBlock.TextPairing = TextPairing;

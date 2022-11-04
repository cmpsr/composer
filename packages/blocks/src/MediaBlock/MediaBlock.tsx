import React, { FC } from 'react';
import { Card, Flex, Image, Link, Tag, Text, TextPairing, TextProps } from '@cmpsr/components';
import { MediaBlockType } from './types';

export const MediaBlock: MediaBlockType = (props) => {
  const { variant = 'vertical', justifyContent = 'start', bounded, ...rest } = props;
  const isHorizontal = variant === 'horizontal';
  return (
    <Flex
      direction={isHorizontal ? 'row' : 'column'}
      gap={isHorizontal ? '1.25rem' : '1rem'}
      justifyContent={justifyContent}
      alignItems="start"
      textAlign={isHorizontal ? 'start' : props.alignItems}
      {...{
        ...(bounded && {
          as: Card,
        }),
      }}
      {...rest}
    />
  );
};

const MediaBlockOverline: FC<TextProps> = (props) => (
  <Text color="text-secondary" variant="text-body-medium" textTransform="uppercase" {...props} />
);

MediaBlock.Image = Image;
MediaBlock.Title = TextPairing;
MediaBlock.Tag = Tag;
MediaBlock.Action = Link;
MediaBlock.Overline = MediaBlockOverline;

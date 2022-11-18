import React, { FC } from 'react';
import { Card, Flex, Image, Link, Tag, Text, TextPairing, TextProps } from '@cmpsr/components';
import { MediaBlockType } from './types';
import { TagProps } from '@cmpsr/components';

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

const MediaBlockTag: FC<TagProps> = (props) => <Tag size="s" alignSelf="start" {...props} />;

MediaBlock.Image = Image;
MediaBlock.Title = TextPairing;
MediaBlock.Tag = MediaBlockTag;
MediaBlock.Action = Link;
MediaBlock.Overline = MediaBlockOverline;

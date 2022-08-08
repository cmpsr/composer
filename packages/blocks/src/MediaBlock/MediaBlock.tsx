import React from 'react';
import { Card, Flex, Image, Link, Tag, TextPairing } from '@cmpsr/components';
import { MediaBlockType } from './types';

export const MediaBlock: MediaBlockType = (props) => {
  const { variant = 'horizontal', justifyContent = 'start', bounded, ...rest } = props;
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

MediaBlock.Image = Image;
MediaBlock.TextPairing = TextPairing;
MediaBlock.Tag = Tag;
MediaBlock.Link = Link;

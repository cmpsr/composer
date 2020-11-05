import React from 'react';
import { Video } from 'components/primitives/Video';
import { Image } from 'components/primitives/Image';
import { Props, Type, ContentType } from './Asset.types';

export const Asset: Type = ({
  autoPlay,
  controls,
  className,
  imageClassName,
  asset: { contentType, title, url },
}: Props) => {
  return contentType === ContentType.Video ? (
    <Video
      className={className}
      video={{ url }}
      autoPlay={autoPlay}
      controls={controls}
    />
  ) : (
    <Image
      className={className}
      imageClassName={imageClassName}
      image={{ title, url }}
    />
  );
};

Asset.ContentType = ContentType;

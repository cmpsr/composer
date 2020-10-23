import React from 'react';
import { Props } from './Image.types';
import { StyledImage, StyledSource } from './Image.styled';

export const Image = ({
  className,
  imageClassName,
  image: { title, url },
  testId = 'image',
  onLoad,
}: Props) => {
  return (
    <picture className={className}>
      <StyledSource
        className={imageClassName}
        data-testid={testId}
        type="image/webp"
        srcSet={`${url}?fm=webp`}
      />
      <StyledImage
        data-testid="imageContent"
        onLoad={onLoad}
        className={imageClassName}
        alt={title}
        src={url}
      />
    </picture>
  );
};

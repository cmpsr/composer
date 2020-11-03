import React from 'react';
import { Props } from './Image.types';
import { StyledImage } from './Image.styled';

export const Image = ({
  className,
  imageClassName,
  customCss,
  image: { title, url },
  testId = 'image',
  onLoad,
}: Props) => {
  return (
    <picture className={className}>
      <StyledImage
        as="source"
        css={customCss}
        className={imageClassName}
        data-testid={testId}
        type="image/webp"
        srcSet={`${url}?fm=webp`}
      />
      <StyledImage
        data-testid="imageContent"
        onLoad={onLoad}
        css={customCss}
        className={imageClassName}
        alt={title}
        src={url}
      />
    </picture>
  );
};

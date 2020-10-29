import React from 'react';
import cn from 'classnames';
import { Props } from './Image.types';
import { StyledImage, StyledSource } from './Image.styled';

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
      <StyledSource
        css={customCss}
        className={cn(imageClassName, { custom: customCss })}
        data-testid={testId}
        type="image/webp"
        srcSet={`${url}?fm=webp`}
      />
      <StyledImage
        data-testid="imageContent"
        onLoad={onLoad}
        css={customCss}
        className={cn(imageClassName, { custom: customCss })}
        alt={title}
        src={url}
      />
    </picture>
  );
};

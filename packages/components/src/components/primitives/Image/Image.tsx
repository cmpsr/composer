import React from 'react';
import cn from 'classnames';
import { Image as ImageType } from 'types';

export const IMAGE_CONTENT_DEFAULT_TEST_ID = 'imageContent';
export const IMAGE_DEFAULT_TEST_ID = 'image';

type Props = {
  className?: string;
  imageClassName?: string;
  image: ImageType;
  testId?: string;
  onLoad?: () => void;
};

export const Image = ({
  className,
  imageClassName,
  image: { title, url },
  testId = IMAGE_DEFAULT_TEST_ID,
  onLoad,
}: Props) => {
  return (
    <picture className={className}>
      <source
        className={cn('select-none', imageClassName)}
        data-testid={testId}
        type="image/webp"
        srcSet={`${url}?fm=webp`}
      />
      <img
        data-testid={IMAGE_CONTENT_DEFAULT_TEST_ID}
        onLoad={onLoad}
        className={cn('select-none', imageClassName)}
        alt={title}
        src={url}
      />
    </picture>
  );
};

import React from "react";
import cn from "classnames";

import { Image as ImageType } from "types";
export const IMAGE_DEFAULT_TEST_ID = "image";

type Props = {
  className?: string;
  imageClassName?: string;
  image: ImageType;
  testId?: string;
};

export const Image = ({
  className,
  imageClassName,
  image: { title, url },
  testId = IMAGE_DEFAULT_TEST_ID,
}: Props) => {
  return (
    <picture className={className}>
      <source
        className={cn("select-none", imageClassName)}
        type="image/webp"
        srcSet={`${url}?fm=webp`}
        data-testid={testId}
      />
      <img
        className={cn("select-none", imageClassName)}
        alt={title}
        src={url}
      />
    </picture>
  );
};

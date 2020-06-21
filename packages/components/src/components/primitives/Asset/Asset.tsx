import React from "react";
import cn from "classnames";
import { Video } from "../Video";
import { Image } from "../Image";

import { Asset as AssetType } from "types";

type Props = {
  className?: string;
  imageClassName?: string;
  asset: AssetType;
  autoPlay?: boolean;
  controls?: boolean;
};

export const Asset = ({
  autoPlay,
  controls,
  className,
  imageClassName,
  asset: { contentType, title, url },
}: Props) => {
  return contentType.indexOf("video") >= 0 ? (
    <Video
      className={cn("select-none", className)}
      video={{ url }}
      autoPlay={autoPlay}
      controls={controls}
    />
  ) : (
    <Image
      className={cn("select-none", className)}
      imageClassName={imageClassName}
      image={{ title, url }}
    />
  );
};

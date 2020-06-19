import React from "react";
import cn from "classnames";

import { Video as VideoType } from "types";

type Props = {
  autoPlay?: boolean;
  controls?: boolean;
  className?: string;
  video: VideoType;
  testId?: string;
};

export const VIDEO_DEFAULT_TEST_ID = "video";

export const Video = ({
  autoPlay,
  controls,
  className,
  video: { url },
  testId = VIDEO_DEFAULT_TEST_ID,
}: Props) => {
  return (
    <video
      className={cn("select-none", className)}
      src={url}
      autoPlay={autoPlay}
      controls={controls}
      data-testid={testId}
    />
  );
};

import React from 'react';
import { Props } from './Video.types';
import { StyledVideo } from './Video.styled';

export const Video = ({
  autoPlay,
  controls,
  className,
  video: { url },
  testId = 'video',
}: Props) => {
  return (
    <StyledVideo
      className={className}
      src={url}
      autoPlay={autoPlay}
      controls={controls}
      data-testid={testId}
    />
  );
};

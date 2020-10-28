import React, { useState } from 'react';
import cn from 'classnames';
import {
  StyledMessage,
  StyledMessageWrapper,
  TextWrapper,
  TimeWrapper,
  StyledMediaWrapper,
  StyledMediaLoader,
  BadgeLoader,
  NumberOfMediaFiles,
} from './Message.styled';
import { Typography } from 'components/primitives/Typography';
import { Image } from 'components/primitives/Image';
import { Colors, Props, Placements } from './Message.types';

export const MESSAGE_DEFAULT_TEST_ID = 'message';
export const WRAPPER_MESSAGE_DEFAULT_TEST_ID = 'wrapperMessage';

export const Message = ({
  text,
  className,
  testId = MESSAGE_DEFAULT_TEST_ID,
  color = Colors.Primary,
  placement = Placements.Right,
  time,
  mediaFiles = [],
  onMediaClick,
  onLoadMedia,
}: Props) => {
  const [isMediaLoaded, setMediaLoaded] = useState(false);
  const onClickMediaFiles = () => {
    onMediaClick && onMediaClick(mediaFiles);
  };
  const handleMediaLoad = () => {
    setMediaLoaded(true);
    onLoadMedia && onLoadMedia();
  };
  const { hasMedia, hasMultipleMedia, thumbnail } = {
    hasMedia: mediaFiles.length > 0,
    hasMultipleMedia: mediaFiles.length > 1,
    thumbnail: mediaFiles && mediaFiles[0]?.url,
  };

  return (
    <StyledMessage
      data-testid={WRAPPER_MESSAGE_DEFAULT_TEST_ID}
      className={cn(className, placement, { hasTime: !!time})}
    >
      <StyledMessageWrapper
        data-testid={testId}
        className={cn('StyledMessageWrapper', placement, color)}
      >
        {hasMedia && (
          <StyledMediaWrapper
            onClick={onClickMediaFiles}
            data-testid="mediaWrapper"
          >
            {!isMediaLoaded && (
              <StyledMediaLoader 
                data-testid="mediaLoader"
                className={cn(placement, { hasText: !!text})}
              >
                <BadgeLoader>
                  {/* <Circular color={CircularColor.White} /> */}
                </BadgeLoader>
              </StyledMediaLoader>
            )}
            <Image
              className="imageWrapper"
              onLoad={handleMediaLoad}
              imageClassName={cn('mediaPreview', placement, { hasText: !!text, isMediaLoaded: isMediaLoaded})}
              image={{
                title: 'Media Asset',
                url: thumbnail,
              }}
            />
            {hasMultipleMedia && isMediaLoaded && (
              <NumberOfMediaFiles data-testid="mediaFilesIndicator">
                <Typography
                  mode={Typography.Modes.Light100}
                  tag={Typography.Tags.H6}
                  type={Typography.Types.Headline6}
                >
                  +{mediaFiles.length}
                </Typography>
              </NumberOfMediaFiles>
            )}
          </StyledMediaWrapper>
        )}
        {!!text && (
          <TextWrapper className={cn({hasMedia})} data-testid="textMessage">
            <Typography
              mode={Typography.Modes.Dark100}
              tag={Typography.Tags.Span}
              type={Typography.Types.Form}
            >
              {text}
            </Typography>
          </TextWrapper>
        )}
      </StyledMessageWrapper>
      {time && (
        <TimeWrapper className={cn({hasTime: !!time })}>
          <Typography
            mode={Typography.Modes.Dark50}
            tag={Typography.Tags.Span}
            type={Typography.Types.Eyebrow}
          >
            {time}
          </Typography>
        </TimeWrapper>
      )}
    </StyledMessage>
  );
};

Message.Colors = Colors;
Message.Placements = Placements;

import React, { useState } from 'react';
import cn from 'classnames';
import {
  StyledMessage,
  MessageWrapper,
  TextWrapper,
  TimeWrapper,
  MediaWrapper,
  MediaLoader,
  BadgeLoader,
} from './Message.styled';
import {
  Typography,
} from 'components/primitives/Typography';
import { Image } from 'components/primitives/Image';
import { Color, Props, MessagePlacement } from './Message.types';

export const MESSAGE_DEFAULT_TEST_ID = 'message';
export const WRAPPER_MESSAGE_DEFAULT_TEST_ID = 'wrapperMessage';

export const Message = ({
  text,
  className,
  testId = MESSAGE_DEFAULT_TEST_ID,
  backgroundColor = Color.Primary,
  placement = MessagePlacement.Right,
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
      <StyledMessage placement={placement} hasTime={!!time} className={cn(className)}>
        <MessageWrapper placement={placement} className={backgroundColor}>
          {hasMedia && (
            <MediaWrapper
              isMediaLoaded={isMediaLoaded}
              placement={placement}
              hasText={!!text}
              onClick={onClickMediaFiles}
            >
              {!isMediaLoaded && (
                <MediaLoader hasText={!!text} placement={placement}>
                  <BadgeLoader>{/* TODO: Pending circular component */}</BadgeLoader>
                </MediaLoader>
              )}
              <Image
                className="imageWrapper"
                onLoad={handleMediaLoad}
                imageClassName="mediaPreview"
                image={{
                  title: 'Media Asset',
                  url: thumbnail,
                }}
              />
              {hasMultipleMedia && isMediaLoaded && (
                <div
                  data-testid="mediaFilesIndicator"
                  className="numberOfMediaFiles"
                >
                  <Typography
                    mode={Typography.Modes.Light100}
                    tag={Typography.Tags.H6}
                    type={Typography.Types.Headline6}
                  >
                    +{mediaFiles.length}
                  </Typography>
                </div>
              )}
            </MediaWrapper>
          )}
          {!!text && (
            <TextWrapper hasMedia={hasMedia}>
              <Typography 
                mode={Typography.Modes.Dark100}
                tag={Typography.Tags.Span}
                type={Typography.Types.Form}
              >
                {text}
              </Typography>
            </TextWrapper>
          )}
        </MessageWrapper>
        {time && (
          <TimeWrapper hasTime={!!time}>
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

import React, { useState } from 'react';
import cn from 'classnames';
import {
  StyledMessage,
  StyledMessageWrapper,
  StyledTextWrapper,
  StyledTimeWrapper,
  StyledMediaWrapper,
  StyledMediaLoader,
  StyledBadgeLoader,
  StyledNumberOfMediaFiles,
  mediaPreview,
} from './Message.styled';
import { Typography } from 'components/primitives/Typography';
import { Image } from 'components/primitives/Image';
import { Colors, Props, Placements } from './Message.types';
import { Spinner } from 'components/primitives/Spinner';

export const Message = ({
  text,
  className,
  testId = 'message',
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
      data-testid="wrapperMessage"
      className={cn(className, placement, { hasTime: !!time })}
    >
      <StyledMessageWrapper
        data-testid={testId}
        className={cn(placement, color)}
      >
        {hasMedia && (
          <StyledMediaWrapper
            onClick={onClickMediaFiles}
            data-testid="mediaWrapper"
          >
            {!isMediaLoaded && (
              <StyledMediaLoader
                data-testid="mediaLoader"
                className={cn(placement, { hasText: !!text })}
              >
                <StyledBadgeLoader>
                  <Spinner color={Spinner.Colors.White} />
                </StyledBadgeLoader>
              </StyledMediaLoader>
            )}
            <Image
              className="imageWrapper"
              onLoad={handleMediaLoad}
              customCss={mediaPreview}
              imageClassName={cn(placement, {
                hasText: !!text,
                isMediaLoaded: isMediaLoaded,
              })}
              image={{
                title: 'Media Asset',
                url: thumbnail,
              }}
            />
            {hasMultipleMedia && isMediaLoaded && (
              <StyledNumberOfMediaFiles data-testid="mediaFilesIndicator">
                <Typography
                  mode={Typography.Modes.Light100}
                  tag={Typography.Tags.H6}
                  type={Typography.Types.Headline6}
                >
                  +{mediaFiles.length}
                </Typography>
              </StyledNumberOfMediaFiles>
            )}
          </StyledMediaWrapper>
        )}
        {!!text && (
          <StyledTextWrapper className={cn({ hasMedia })} data-testid="textMessage">
            <Typography
              mode={Typography.Modes.Dark100}
              tag={Typography.Tags.Span}
              type={Typography.Types.Form}
            >
              {text}
            </Typography>
          </StyledTextWrapper>
        )}
      </StyledMessageWrapper>
      {time && (
        <StyledTimeWrapper className={cn({ hasTime: !!time })}>
          <Typography
            mode={Typography.Modes.Dark50}
            tag={Typography.Tags.Span}
            type={Typography.Types.Eyebrow}
          >
            {time}
          </Typography>
        </StyledTimeWrapper>
      )}
    </StyledMessage>
  );
};

Message.Colors = Colors;
Message.Placements = Placements;

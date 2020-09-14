import React from 'react';
import cn from 'classnames';
import {
  Typography,
  TypographyTypes,
  TypographyMode,
} from 'components/primitives/Typography';
import { Image } from 'components/primitives/Image';
import { getStyles } from 'utils/getMessageClasses';

export const MESSAGE_DEFAULT_TEST_ID = 'message';
export const WRAPPER_MESSAGE_DEFAULT_TEST_ID = 'wrapperMessage';

export enum MessageBackgroundColor {
  Black100 = 'bg-fill-black-100',
  Secondary600 = 'bg-fill-secondary-600',
  Primary600 = 'bg-fill-primary-600',
}

export enum MessagePlacement {
  Left = 'left',
  Right = 'right',
}

type Media = {
  contentType: string;
  url: string;
};

type Props = {
  text?: string;
  className?: string;
  testId?: string;
  backgroundColor?: MessageBackgroundColor;
  placement?: MessagePlacement;
  time?: string;
  mediaFiles?: Media[];
  onMediaClick?: (mediaFiles: Media[]) => void;
};

export const Message = ({
  text,
  className,
  testId = MESSAGE_DEFAULT_TEST_ID,
  backgroundColor = MessageBackgroundColor.Primary600,
  placement = MessagePlacement.Right,
  time,
  mediaFiles = [],
  onMediaClick,
}: Props) => {
  const onClickMediaFiles = () => {
    onMediaClick && onMediaClick(mediaFiles);
  };
  const { hasMedia, hasMultipleMedia, thumbnail } = {
    hasMedia: mediaFiles.length > 0,
    hasMultipleMedia: mediaFiles.length > 1,
    thumbnail: mediaFiles && mediaFiles[0]?.url,
  };
  const {
    wrapperClasses,
    messageClasses,
    timeClasses,
    textWrapper,
    mediaPreview,
    numberOfMediaFiles,
    mediaWrapper,
  } = getStyles(placement, backgroundColor, !!time, !!text, hasMedia);

  return (
    <div
      data-testid={WRAPPER_MESSAGE_DEFAULT_TEST_ID}
      className={cn(className, wrapperClasses)}
    >
      <div data-testid={testId} className={cn(messageClasses)}>
        {hasMedia && (
          <div
            className={mediaWrapper}
            data-testid="mediaWrapper"
            onClick={onClickMediaFiles}
          >
            <Image
              imageClassName={mediaPreview}
              image={{
                title: 'Media Asset',
                url: thumbnail,
              }}
            />
            {hasMultipleMedia && (
              <div
                data-testid="mediaFilesIndicator"
                className={numberOfMediaFiles}
              >
                <Typography
                  mode={TypographyMode.Light100}
                  tag={'h6'}
                  type={TypographyTypes.Headline6}
                >
                  +{mediaFiles.length}
                </Typography>
              </div>
            )}
          </div>
        )}
        {!!text && (
          <div className={cn(textWrapper)} data-testid="textMessage">
            <Typography
              mode={TypographyMode.Dark100}
              tag={'span'}
              type={TypographyTypes.Form}
            >
              {text}
            </Typography>
          </div>
        )}
      </div>
      {time && (
        <div className={timeClasses}>
          <Typography
            mode={TypographyMode.Dark50}
            tag={'span'}
            type={TypographyTypes.Eyebrow}
          >
            {time}
          </Typography>
        </div>
      )}
    </div>
  );
};

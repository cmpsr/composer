import React from 'react';
import cn from 'classnames';
import { getStyles } from './MediaMessage.styles';
import {
  MessageBackgroundColor,
  MessagePlacement,
} from 'components/primitives/Chat/Conversation/Message';
import {
  Typography,
  TypographyTypes,
  TypographyMode,
} from 'components/primitives/Typography';
import { Image } from 'components/primitives/Image';

export const MEDIA_MESSAGE_DEFAULT_TEST_ID = 'mediaMessage';

type Media = {
  contentType: string;
  url: string;
};

type Props = {
  text?: string;
  className?: string;
  testId?: string;
  placement?: MessagePlacement;
  backgroundColor?: MessageBackgroundColor;
  time?: string;
  mediaFiles: Media[];
  onClick?: (mediaFiles: Media[]) => void;
};

export const MediaMessage = ({
  text,
  className,
  testId = MEDIA_MESSAGE_DEFAULT_TEST_ID,
  placement = MessagePlacement.Right,
  backgroundColor = MessageBackgroundColor.Primary600,
  time,
  mediaFiles,
  onClick,
}: Props) => {
  const onClickMediaFiles = () => {
    onClick && onClick(mediaFiles);
  };
  const {
    wrapperClasses,
    messageClasses,
    timeClasses,
    textWrapper,
    mediaPreview,
    numberOfMediaFiles,
    mediaWrapper,
  } = getStyles(placement, backgroundColor, !!time, !!text);
  const hasMultipleMedia = mediaFiles.length > 1;
  const thumbnail = mediaFiles[0].url;
  return (
    <div data-testid={testId} className={cn(className, wrapperClasses)}>
      <div className={messageClasses} data-testid="message">
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

import React from 'react';
import cn from 'classnames';
import { Image } from 'components/primitives/Image';
import { Image as ImageType } from 'types';
import {
  Typography,
  TypographyTypes,
  TypographyMode,
} from 'components/primitives/Typography';
import { getStyles } from './MediaMessage.styles';

export const WRAPPER_MEDIA_MESSAGE_DEFAULT_TEST_ID = 'wrapperMediaMessage';

export enum MediaMessageBorderColor {
  Black10 = 'border-fill-black-10',
  Primary25 = 'border-fill-primary-25',
  Secondary25 = 'border-fill-secondary-25',
}

export enum MessagePlacement {
  Left = 'left',
  Right = 'right',
}

type Props = {
  className?: string;
  borderColor?: MediaMessageBorderColor;
  time?: string;
  placement?: MessagePlacement;
  image: ImageType;
  onClick?: () => void;
  testId?: string;
};

export const MediaMessage = ({
  className,
  borderColor = MediaMessageBorderColor.Secondary25,
  time,
  placement = MessagePlacement.Left,
  image,
  onClick,
  testId = WRAPPER_MEDIA_MESSAGE_DEFAULT_TEST_ID,
}: Props) => {
  const {
    wrapperClasses,
    messageClasses,
    imageClasses,
    timeClasses,
  } = getStyles(placement, borderColor);
  return (
    <div data-testid={testId} className={cn(wrapperClasses)}>
      <div
        role="button"
        className={cn(className, messageClasses)}
        onClick={onClick}
      >
        <Image imageClassName={imageClasses} image={image} />
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

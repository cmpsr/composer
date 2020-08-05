import React from 'react';
import cn from 'classnames';
import {
  Typography,
  TypographyTypes,
  TypographyMode,
} from 'components/primitives/Typography';
import { getMessageClasses } from 'utils/getMessageClasses';

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

type Props = {
  text: string;
  className?: string;
  testId?: string;
  backgroundColor?: MessageBackgroundColor;
  placement?: MessagePlacement;
  time?: string;
};

export const Message = ({
  text,
  className,
  testId = MESSAGE_DEFAULT_TEST_ID,
  backgroundColor = MessageBackgroundColor.Primary600,
  placement = MessagePlacement.Right,
  time,
}: Props) => {
  const { wrapperClasses, messageClasses, timeClasses } = getMessageClasses(
    placement,
    backgroundColor,
    !!time
  );

  return (
    <div
      data-testid={WRAPPER_MESSAGE_DEFAULT_TEST_ID}
      className={cn(className, wrapperClasses)}
    >
      <div data-testid={testId} className={cn(messageClasses)}>
        <Typography
          mode={TypographyMode.Dark100}
          tag={'span'}
          type={TypographyTypes.Form}
        >
          {text}
        </Typography>
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

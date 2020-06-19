import React from 'react';
import cn from 'classnames';
import { Typography, TypographyTypes } from 'components/primitives/Typography';
import { Icon } from 'components/primitives/Icon';
import { error as Error } from 'components/primitives/Icon/icons/alert';
import { getMessageErrorClasses } from 'utils/getMessageErrorClasses';
import {
  Message,
  MessageBackgroundColor,
  MessagePlacement,
} from 'components/primitives/Chat/Conversation/Message';

export const MESSAGE_ERROR_DEFAULT_TEST_ID = 'messageError';

type Props = {
  text: string;
  className?: string;
  testId?: string;
  placement?: MessagePlacement;
  errorText?: string;
  onErrorClick?: () => void;
};

export const MessageError = ({
  text,
  className,
  testId = MESSAGE_ERROR_DEFAULT_TEST_ID,
  placement = MessagePlacement.Right,
  errorText,
  onErrorClick,
}: Props) => {
  const {
    wrapper,
    message,
    messageWrapper,
    iconWrapper,
    icon,
    description,
  } = getMessageErrorClasses(placement);

  return (
    <div data-testid={testId} className={cn(className, wrapper)}>
      <div className={messageWrapper}>
        <Message
          text={text}
          className={cn(message)}
          backgroundColor={MessageBackgroundColor.Black10}
          placement={placement}
        />
        <div
          className={iconWrapper}
          data-testid="errorIcon"
          onClick={onErrorClick}
        >
          <Icon className={icon}>
            <Error type="rounded" />
          </Icon>
        </div>
      </div>
      {errorText && (
        <div onClick={onErrorClick} className={description}>
          <Typography
            className="text-fill-system-error"
            tag={'p'}
            type={TypographyTypes.Detail}
          >
            {errorText}
          </Typography>
        </div>
      )}
    </div>
  );
};

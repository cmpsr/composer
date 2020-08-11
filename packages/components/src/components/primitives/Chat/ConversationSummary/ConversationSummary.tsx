import React from 'react';
import cn from 'classnames';
import {
  Typography,
  TypographyTypes,
  TypographyMode,
} from 'components/primitives/Typography';
import {
  AvatarText,
  AvatarSize,
  AvatarBackgroundColor,
} from 'components/primitives/Avatars/AvatarText';
import {
  NumericBadge,
  BadgeColor,
} from 'components/primitives/Badges/NumericBadge';
import { Icon } from 'components/primitives/Icon';
import { error as Error } from 'components/primitives/Icon/icons/alert';
import { getConversationSummaryClasses } from 'utils/getConversationSummaryClasses';

export const CONVERSATION_SUMMARY_DEFAULT_TEST_ID = 'conversationSummary';

export type Props = {
  id: string;
  title: string;
  description: string;
  message: string;
  unreadMessages?: number;
  avatarText?: string;
  isHighlighted?: boolean;
  isActive?: boolean;
  isError?: boolean;
  time: string;
  className?: string;
  messageClassName?: string;
  testId?: string;
  onClick?: (id: string) => void;
};

export const ConversationSummary = ({
  id,
  title,
  description,
  message,
  unreadMessages,
  avatarText,
  isHighlighted,
  isActive,
  isError,
  time,
  className,
  messageClassName,
  testId = CONVERSATION_SUMMARY_DEFAULT_TEST_ID,
  onClick,
}: Props) => {
  const {
    wrapper,
    avatarWrapper,
    avatar,
    profile,
    profileWrapper,
    profileTitle,
    profileDescription,
    profileMessage,
    notification,
    notificationTime,
    notificationError,
  } = getConversationSummaryClasses(isError, isActive);
  const showUnreadMessages = unreadMessages !== 0 && unreadMessages && !isError;
  return (
    <div
      onClick={() => onClick(id)}
      className={cn(className, wrapper)}
      data-testid={testId}
    >
      <div className={profile}>
        <div className={avatarWrapper}>
          <AvatarText
            highlightClassName={avatar}
            size={AvatarSize.Small}
            backgroundColor={AvatarBackgroundColor.Primary600}
            text={avatarText}
            isHighlighted={isHighlighted}
          />
        </div>
        <div className={profileWrapper}>
          <Typography
            className={profileTitle}
            mode={TypographyMode.Dark100}
            tag={'p'}
            type={TypographyTypes.Body}
          >
            <b>{title}</b>
          </Typography>
          <Typography
            className={profileDescription}
            mode={TypographyMode.Dark100}
            tag={'p'}
            type={TypographyTypes.Detail}
          >
            {description}
          </Typography>
          <Typography
            className={cn(messageClassName, profileMessage)}
            tag={'p'}
            type={TypographyTypes.Detail}
          >
            {message}
            {'\u00A0'}
          </Typography>
        </div>
      </div>
      <div className={notification}>
        <Typography
          className={notificationTime}
          mode={TypographyMode.Dark50}
          tag={'span'}
          type={TypographyTypes.Detail}
        >
          {time}
        </Typography>
        {showUnreadMessages && (
          <NumericBadge number={unreadMessages} color={BadgeColor.Secondary} />
        )}
        {isError && (
          <Icon
            viewBoxWidth={21}
            viewBoxHeight={24}
            className={notificationError}
          >
            <Error type="rounded" />
          </Icon>
        )}
      </div>
    </div>
  );
};

import React from 'react';
import cn from 'classnames';
import { Typography } from 'components/primitives/Typography';
import { AvatarText } from 'components/primitives/Avatars/AvatarText';
import { NumericBadge } from 'components/primitives/Badges/NumericBadge';
import { Icon, error as Error } from 'components/primitives/Icon';
import { Props } from './ConversationSummary.types';
import {
  StyledContainer,
  StyledProfileContainer,
  StyledAvatarWrapper,
  StyledProfileWrapper,
  StyledProfileTitle,
  StyledProfileDescription,
  StyledProfileMessage,
  StyledNotificationContainer,
  StyledNotificationTime,
  StyledIcon,
} from './ConversationSummary.styled';

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
  customCss,
  messageClassName,
  messageCustomCss,
  testId = 'conversationSummary',
  onClick,
}: Props) => {
  const showUnreadMessages = unreadMessages !== 0 && unreadMessages && !isError;
  return (
    <StyledContainer
      onClick={() => onClick(id)}
      className={cn(className, { active: isActive })}
      data-testid={testId}
      css={customCss}
    >
      <StyledProfileContainer>
        <StyledAvatarWrapper>
          <AvatarText
            highlightClassName="margin-left: -0.22rem"
            size={AvatarText.Sizes.Small}
            backgroundColor={AvatarText.BackgroundColors.Primary600}
            text={avatarText}
            isHighlighted={isHighlighted}
          />
        </StyledAvatarWrapper>
        <StyledProfileWrapper>
          <StyledProfileTitle
            mode={Typography.Modes.Dark100}
            tag={Typography.Tags.Paragraph}
            type={Typography.Types.Body}
          >
            <b>{title}</b>
          </StyledProfileTitle>
          <StyledProfileDescription
            mode={Typography.Modes.Dark100}
            tag={Typography.Tags.Paragraph}
            type={Typography.Types.Detail}
          >
            {description}
          </StyledProfileDescription>
          <StyledProfileMessage
            className={cn({ error: isError }, messageClassName)}
            tag={Typography.Tags.Paragraph}
            type={Typography.Types.Detail}
            css={messageCustomCss}
          >
            {message}
            {'\u00A0'}
          </StyledProfileMessage>
        </StyledProfileWrapper>
      </StyledProfileContainer>
      <StyledNotificationContainer>
        <StyledNotificationTime
          mode={Typography.Modes.Dark50}
          tag={Typography.Tags.Span}
          type={Typography.Types.Detail}
        >
          {time}
        </StyledNotificationTime>
        {showUnreadMessages && (
          <NumericBadge
            number={unreadMessages}
            color={NumericBadge.Color.Secondary}
          />
        )}
        {isError && (
          <StyledIcon viewBoxWidth={21} viewBoxHeight={24}>
            <Error type={Icon.Types.Rounded} />
          </StyledIcon>
        )}
      </StyledNotificationContainer>
    </StyledContainer>
  );
};

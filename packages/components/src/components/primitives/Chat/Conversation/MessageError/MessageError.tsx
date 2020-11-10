import React from 'react';
import cn from 'classnames';
import {
  StyledMessageContainer,
  StyledMessageWrapper,
  StyledMessage,
  StyledIconWrapper,
  StyledIcon,
  StyledErrorText,
  StyledErrorWrapper,
} from './MessageError.styled';
import { Icon, error as Error } from 'components/primitives/Icon';
import { Props } from './MessageError.types';
import { Message } from 'components/primitives';

export const MessageError = ({
  text,
  className,
  customCss,
  testId = 'messageError',
  placement,
  errorText,
  onErrorClick,
}: Props) => (
  <StyledMessageContainer
    data-testid={testId}
    css={customCss}
    className={cn(className, placement)}
  >
    <StyledMessageWrapper>
      <StyledMessage text={text} placement={placement} className={placement} />
      <StyledIconWrapper
        data-testid="errorIcon"
        onClick={onErrorClick}
        className={placement}
      >
        <StyledIcon>
          <Error type={Icon.Types.Rounded} />
        </StyledIcon>
      </StyledIconWrapper>
    </StyledMessageWrapper>
    {errorText && (
      <StyledErrorWrapper onClick={onErrorClick}>
        <StyledErrorText
          tag={StyledErrorText.Tags.Paragraph}
          type={StyledErrorText.Types.Detail}
        >
          {errorText}
        </StyledErrorText>
      </StyledErrorWrapper>
    )}
  </StyledMessageContainer>
);

MessageError.Placements = Message.Placements;

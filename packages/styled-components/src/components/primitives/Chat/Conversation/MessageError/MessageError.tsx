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

export const MessageError = ({
  text,
  className,
  placement = StyledMessage.Placements.Left,
  errorText,
  onErrorClick,
}: Props) => {
  return (
    <StyledMessageContainer className={cn(className, placement)}>
      <StyledMessageWrapper>
        <StyledMessage
          text={text}
          placement={placement}
          className={cn(placement)}
        />
        <StyledIconWrapper
          data-testid="errorIcon"
          onClick={onErrorClick}
          className={cn(placement)}
        >
          <StyledIcon viewBoxWidth={21} viewBoxHeight={24}>
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
};

MessageError.Placement = StyledMessage.Placements;

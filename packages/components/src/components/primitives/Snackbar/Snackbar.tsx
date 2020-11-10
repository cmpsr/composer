import React from 'react';
import cn from 'classnames';
import { toast } from 'react-toastify';
import { Typography, Button } from 'components/primitives';
import {
  ShowSnackbarProps,
  SnackbarProps,
  Positions,
  TextPositions,
  Types,
} from './Snackbar.types';
import {
  StyledWrapper,
  StyledInformation,
  StyledButton,
  StyledToastContainer,
  StyledTypography,
} from './Snackbar.styled';

export const hideSnackbar = () => toast.dismiss();

export const showSnackbar = ({
  className,
  testId = 'showSnackbar',
  message,
  description,
  textPosition = TextPositions.Right,
  type = Types.Default,
  position,
  autoClose = 5000,
  action,
  onClose,
}: ShowSnackbarProps) => {
  const snackbarContent = (
    <StyledWrapper className={textPosition} data-testid={testId}>
      <StyledInformation className={textPosition}>
        <StyledTypography
          type={Typography.Types.Body}
          mode={Typography.Modes.Light100}
          tag={Typography.Tags.Paragraph}
        >
          {message}
        </StyledTypography>
        {description && (
          <StyledTypography
            type={Typography.Types.Detail}
            mode={Typography.Modes.Light100}
            tag={Typography.Tags.Paragraph}
          >
            {description}
          </StyledTypography>
        )}
      </StyledInformation>
      {action ? (
        <StyledButton
          className={textPosition}
          onClick={action.onClickAction}
          type={Button.Types.Primary}
          shape={Button.Shapes.Rectangle}
        >
          {action.childAction}
        </StyledButton>
      ) : null}
    </StyledWrapper>
  );
  toast(snackbarContent, {
    className: cn(type, className),
    position,
    onClose,
    autoClose,
  });
};

export const Snackbar = ({ className, testId = 'snackbar' }: SnackbarProps) => {
  return (
    <div data-testid={testId}>
      <StyledToastContainer
        className={className}
        hideProgressBar={true}
        closeButton={null}
        draggable={false}
      />
    </div>
  );
};

Snackbar.Types = Types;
Snackbar.Positions = Positions;
Snackbar.TextPositions = TextPositions;

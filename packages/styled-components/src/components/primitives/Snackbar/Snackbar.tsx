import React from 'react';
import cn from 'classnames';
import { toast } from 'react-toastify';
import { Typography } from 'components/primitives/Typography';
import { Props, Positions, TextPositions, Types } from './Snackbar.types';
import {
  StyledWrapper,
  StyledInformation,
  StyledButton,
  StyledToastContainer,
  StyledTypography,
} from './Snackbar.styled';
import './Snackbar.css';

export const hideSnackbar = () => toast.dismiss();

export const showSnackbar = ({
  className,
  testId = 'showSnackbar',
  message,
  description,
  textPosition = TextPositions.Right,
  type = Types.Default,
  position = Positions.TopCenter,
  autoClose = 5000,
  action,
  onClose,
}: Props) => {
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
        <StyledButton className={textPosition} onClick={action.onClickAction}>
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

type SnackbarProps = {
  className?: string;
  testId?: string;
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

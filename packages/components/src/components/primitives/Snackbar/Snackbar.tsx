import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { getStyle } from './Snackbar.styles';
import {
  Typography,
  TypographyMode,
  TypographyTypes,
} from 'components/primitives/Typography';
import { Button } from 'components/primitives/Button';

export const SNACKBAR_DEFAULT_TEST_ID = 'snackbar';

export enum SnackbarType {
  Default = 'default',
  Success = 'success',
  Warning = 'warning',
  Error = 'error',
}

export enum SnackbarTextPosition {
  Left = 'left',
  Right = 'right',
}

export enum SnackbarPosition {
  TopCenter = 'top-center',
  TopRight = 'top-right',
  TopLeft = 'top-left',
  BottomRight = 'bottom-right',
  BottomCenter = 'bottom-center',
  BottomLeft = 'bottom-left',
}

type Props = {
  testId?: string;
  open: boolean;
  message: string;
  description?: string;
  textPosition?: SnackbarTextPosition;
  type?: SnackbarType;
  position?: SnackbarPosition;
  autoClose?: number;
  action?: {
    childAction: React.ReactNode;
    onClickAction?: () => void;
  };
  onClose?: () => void;
};

export const Snackbar = ({
  testId = SNACKBAR_DEFAULT_TEST_ID,
  open = false,
  message,
  description,
  textPosition = SnackbarTextPosition.Right,
  type = SnackbarType.Default,
  position = SnackbarPosition.TopCenter,
  autoClose = 5000,
  action,
  onClose,
}: Props) => {
  const isTextRightPosition = textPosition === SnackbarTextPosition.Right;
  const styles = getStyle(isTextRightPosition, type);
  const snackbarContent = (
    <div className={styles.snackbarWrapper}>
      <div className={styles.informationWrapper}>
        <Typography
          type={TypographyTypes.Body}
          mode={TypographyMode.Light100}
          tag="p"
        >
          {message}
        </Typography>
        {description && (
          <Typography
            type={TypographyTypes.Detail}
            mode={TypographyMode.Light100}
            tag="p"
          >
            {description}
          </Typography>
        )}
      </div>
      {action ? (
        <Button className={styles.ctaWrapper} onClick={action.onClickAction}>
          {action.childAction}
        </Button>
      ) : null}
    </div>
  );

  useEffect(() => {
    let hasBeenOpened = false;
    if (open) {
      toast(snackbarContent, {
        className: styles.toastContainer,
        position,
        onClose,
      });
      hasBeenOpened = true;
    } else {
      if (hasBeenOpened) {
        toast.dismiss();
        hasBeenOpened = false;
      }
    }
  }, [open]);

  return (
    <div data-testid={testId}>
      <ToastContainer
        autoClose={autoClose}
        hideProgressBar={true}
        closeButton={null}
        draggable={false}
      />
    </div>
  );
};

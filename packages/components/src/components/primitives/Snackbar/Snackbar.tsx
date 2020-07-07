import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { getStyle } from './Snackbar.styles';
import {
  Typography,
  TypographyMode,
  TypographyTypes,
} from 'components/primitives/Typography';
import { Icon } from 'components/primitives/Icon';

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
  open?: boolean;
  message: string;
  description?: string;
  showIcon?: boolean;
  icon?: React.ReactNode;
  textPosition?: SnackbarTextPosition;
  showButton?: boolean;
  buttonText?: string;
  type?: SnackbarType;
  position?: SnackbarPosition;
  autoClose?: number;
};

export const Snackbar = ({
  testId = SNACKBAR_DEFAULT_TEST_ID,
  open = false,
  message,
  description,
  showIcon,
  icon,
  textPosition = SnackbarTextPosition.Right,
  showButton,
  buttonText,
  type = SnackbarType.Default,
  position = SnackbarPosition.TopCenter,
  autoClose = 5000,
}: Props) => {
  const isTextRightPosition = textPosition === 'right';
  const styles = getStyle({ isTextRightPosition, type });
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
      {showIcon ? (
        <div className={styles.ctaWrapper}>
          <Icon className={styles.icon}>{icon}</Icon>
        </div>
      ) : showButton ? (
        <Typography
          className={styles.ctaWrapper}
          type={TypographyTypes.Button}
          mode={TypographyMode.Light100}
          tag="p"
        >
          {buttonText}
        </Typography>
      ) : null}
    </div>
  );

  useEffect(() => {
    if (open) {
      toast(snackbarContent, { className: styles.toastContainer, position });
    } else {
      toast.dismiss();
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

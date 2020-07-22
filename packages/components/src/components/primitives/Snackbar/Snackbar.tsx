import React from 'react';
import cn from 'classnames';
import { ToastContainer, toast } from 'react-toastify';
import { getStyle } from './Snackbar.styles';
import {
  Typography,
  TypographyMode,
  TypographyTypes,
} from 'components/primitives/Typography';
import { Button } from 'components/primitives/Button';

export const SHOW_SNACKBAR_DEFAULT_TEST_ID = 'showSnackbar';
export const SNACKBAR_DEFAULT_TEST_ID = 'Snackbar';

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
  className?: string;
  testId?: string;
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
export const hideSnackbar = () => toast.dismiss();

export const showSnackbar = ({
  className,
  testId = SHOW_SNACKBAR_DEFAULT_TEST_ID,
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
    <div className={styles.snackbarWrapper} data-testid={testId}>
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
  toast(snackbarContent, {
    className: cn(styles.toastContainer, className),
    position,
    onClose,
    autoClose,
  });
};

type SnackbarProps = {
  className?: string;
  testId?: string;
};

export const Snackbar = ({
  className,
  testId = SNACKBAR_DEFAULT_TEST_ID,
}: SnackbarProps) => {
  return (
    <div data-testid={testId}>
      <ToastContainer
        className={className}
        hideProgressBar={true}
        closeButton={null}
        draggable={false}
      />
    </div>
  );
};

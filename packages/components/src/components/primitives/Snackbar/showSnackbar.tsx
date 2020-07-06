import React from 'react';
import { toast } from 'react-toastify';
import {
  Typography,
  TypographyMode,
  TypographyTypes,
} from 'components/primitives/Typography';
import { Icon } from 'components/primitives/Icon';
import { getStyle } from './Snackbar.styles';

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

type ShowSnackbarProps = {
  message: string;
  description?: string;
  showIcon?: boolean;
  icon?: React.ReactNode;
  textPosition?: SnackbarTextPosition;
  showButton?: boolean;
  buttonText?: string;
  type?: SnackbarType;
  position?: SnackbarPosition;
};

export const showSnackbar = ({
  message,
  description,
  showIcon,
  icon,
  textPosition = SnackbarTextPosition.Right,
  showButton,
  buttonText,
  type = SnackbarType.Default,
  position = SnackbarPosition.TopCenter,
}: ShowSnackbarProps) => {
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
  toast(snackbarContent, { className: styles.toastContainer, position });
};

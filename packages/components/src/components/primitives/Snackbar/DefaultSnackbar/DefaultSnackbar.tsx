import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import {
  Typography,
  TypographyMode,
  TypographyTypes,
} from 'components/primitives/Typography';
import { Icon } from 'components/primitives/Icon';
import { getStyle } from './DefaultSnackbar.styles';

export const DEFAULT_SNACKBAR_DEFAULT_TEST_ID = 'snackbar';

export enum SnackbarPosition {
  TopCenter = 'top-center',
  TopRight = 'top-right',
  TopLeft = 'top-left',
  BottomRight = 'bottom-right',
  BottomCenter = 'bottom-center',
  BottomLeft = 'bottom-left',
}

export enum TextPosition {
  Left = 'left',
  Right = 'right',
}

type ShowSnackbarProps = {
  message: string;
  description?: string;
  showIcon?: boolean;
  icon?: React.ReactNode;
  textPosition?: TextPosition;
  showButton?: boolean;
  buttonText?: string;
};

export const showSnackbar = ({
  message,
  description,
  showIcon,
  icon,
  textPosition = TextPosition.Right,
  showButton,
  buttonText,
}: ShowSnackbarProps) => {
  const isIconRightPosition = textPosition === 'right';
  const styles = getStyle(isIconRightPosition);
  toast(
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
};

type Props = {
  testId?: string;
  position?: SnackbarPosition;
};

export const DefaultSnackbar = ({
  testId = DEFAULT_SNACKBAR_DEFAULT_TEST_ID,
  position = SnackbarPosition.TopCenter,
}: Props) => {
  const styles = getStyle();
  return (
    <div data-testid={testId}>
      <ToastContainer
        autoClose={5000}
        hideProgressBar={true}
        toastClassName={styles.toastContainer}
        position={position}
        closeButton={null}
        draggable={false}
      />
    </div>
  );
};

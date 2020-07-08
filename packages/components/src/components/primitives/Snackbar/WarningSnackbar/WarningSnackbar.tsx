import React from 'react';
import {
  DefaultSnackbar,
  SnackbarType,
  SnackbarTextPosition,
  SnackbarPosition,
  SnackbarProps,
} from 'components/primitives/Snackbar/DefaultSnackbar';

export const WARNING_SNACKBAR_DEFAULT_TEST_ID = 'warningSnackbar';

export const WarningSnackbar = ({
  testId = WARNING_SNACKBAR_DEFAULT_TEST_ID,
  open = false,
  message,
  description,
  textPosition = SnackbarTextPosition.Right,
  position = SnackbarPosition.TopCenter,
  autoClose = 5000,
  action,
}: SnackbarProps) => {
  return (
    <div data-testid={testId}>
      <DefaultSnackbar
        open={open}
        message={message}
        description={description}
        textPosition={textPosition}
        type={SnackbarType.Warning}
        position={position}
        autoClose={autoClose}
        action={action}
      />
    </div>
  );
};

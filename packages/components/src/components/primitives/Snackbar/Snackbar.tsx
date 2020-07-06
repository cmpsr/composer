import React from 'react';
import { ToastContainer } from 'react-toastify';
export {
  showSnackbar,
  SnackbarType,
  SnackbarTextPosition,
  SnackbarPosition,
} from './showSnackbar';

export const SNACKBAR_DEFAULT_TEST_ID = 'snackbar';

type Props = {
  testId?: string;
};

export const Snackbar = ({ testId = SNACKBAR_DEFAULT_TEST_ID }: Props) => {
  return (
    <div data-testid={testId}>
      <ToastContainer
        autoClose={5000}
        hideProgressBar={true}
        closeButton={null}
        draggable={false}
      />
    </div>
  );
};

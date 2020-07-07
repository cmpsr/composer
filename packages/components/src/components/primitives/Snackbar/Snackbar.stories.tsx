import React from 'react';
import {
  Snackbar,
  SnackbarTextPosition,
  SnackbarPosition,
  SnackbarType,
} from './Snackbar';
import { select, text, boolean, number } from '@storybook/addon-knobs';
import { close as Close } from '../Icon/icons/navigation';

export default {
  title: 'Composer/Primitive/Snackbar',
  component: Snackbar,
};

export const withBase = () => {
  return (
    <div className="p-48">
      <Snackbar
        open={boolean('Open', false)}
        message={text('Message', 'Prompt Option')}
        description={text('Description', 'Detail Info')}
        showIcon={boolean('Show close icon', true)}
        icon={<Close type="filled" />}
        textPosition={select(
          'Text Position',
          SnackbarTextPosition,
          SnackbarTextPosition.Right
        )}
        showButton={boolean('Show button', false)}
        buttonText={text('Button text', 'Button')}
        type={select('Type', SnackbarType, SnackbarType.Default)}
        position={select(
          'Position',
          SnackbarPosition,
          SnackbarPosition.TopCenter
        )}
        autoClose={number('Auto close', 5000)}
      />
    </div>
  );
};

withBase.story = {
  name: 'Base',
};

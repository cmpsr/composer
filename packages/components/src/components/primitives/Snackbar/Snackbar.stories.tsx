import React from 'react';
import {
  Snackbar,
  SnackbarTextPosition,
  SnackbarPosition,
  SnackbarType,
} from './Snackbar';
import { close as Close } from '../Icon/icons/navigation';
import { select, text, boolean, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

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
        onClickButton={action('On click button')}
      />
    </div>
  );
};

withBase.story = {
  name: 'Base',
};

export const withIcon = () => {
  return (
    <div className="p-48">
      <Snackbar
        open={true}
        message="Prompt Option"
        description="Detail Info"
        showIcon
        icon={<Close type="filled" />}
        textPosition={SnackbarTextPosition.Right}
        type={SnackbarType.Default}
        position={SnackbarPosition.TopCenter}
      />
    </div>
  );
};

withIcon.story = {
  name: 'Icon',
};

export const withButton = () => {
  return (
    <div className="p-48">
      <Snackbar
        open={true}
        message="Prompt Option"
        description="Detail Info"
        showButton
        buttonText="ButtonText"
        textPosition={SnackbarTextPosition.Left}
        type={SnackbarType.Default}
        position={SnackbarPosition.TopCenter}
      />
    </div>
  );
};

withButton.story = {
  name: 'Button',
};

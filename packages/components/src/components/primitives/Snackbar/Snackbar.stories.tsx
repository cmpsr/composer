import React from 'react';
import {
  Snackbar,
  SnackbarTextPosition,
  SnackbarPosition,
  SnackbarType,
} from './Snackbar';
import { close as Close } from '../Icon/icons/navigation';
import { Icon } from '../Icon';
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
        textPosition={select(
          'Text Position',
          SnackbarTextPosition,
          SnackbarTextPosition.Right
        )}
        type={select('Type', SnackbarType, SnackbarType.Default)}
        position={select(
          'Position',
          SnackbarPosition,
          SnackbarPosition.TopCenter
        )}
        autoClose={number('Auto close', 5000)}
        action={{
          childAction: (
            <Icon className="text-fill-white fill-current">
              <Close type="filled" />
            </Icon>
          ),
          onClickAction: action('On click action'),
        }}
        onClose={action('On close')}
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
        action={{
          childAction: (
            <Icon className="text-fill-white fill-current">
              <Close type="filled" />
            </Icon>
          ),
          onClickAction: action('On click action'),
        }}
        textPosition={SnackbarTextPosition.Right}
        type={SnackbarType.Default}
        position={SnackbarPosition.TopCenter}
        onClose={action('On close')}
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
        action={{
          childAction: <div className="text-fill-white">buttonContent</div>,
          onClickAction: action('On click action'),
        }}
        textPosition={SnackbarTextPosition.Left}
        type={SnackbarType.Default}
        position={SnackbarPosition.TopCenter}
        onClose={action('On close')}
      />
    </div>
  );
};

withButton.story = {
  name: 'Button',
};

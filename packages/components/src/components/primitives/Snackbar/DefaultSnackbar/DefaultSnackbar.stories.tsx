import React from 'react';
import {
  DefaultSnackbar,
  SnackbarTextPosition,
  SnackbarPosition,
  SnackbarType,
} from './DefaultSnackbar';
import { close as Close } from '../../Icon/icons/navigation';
import { select, text, boolean, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Composer/Primitive/Snackbar/DefaultSnackbar',
  component: DefaultSnackbar,
};

export const withBase = () => {
  return (
    <div className="p-48">
      <DefaultSnackbar
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
          childAction: <Close type="filled" />,
          onClickAction: action('On click action'),
        }}
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
      <DefaultSnackbar
        open={true}
        message="Prompt Option"
        description="Detail Info"
        action={{
          childAction: <Close type="filled" />,
          onClickAction: action('On click action'),
        }}
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
      <DefaultSnackbar
        open={true}
        message="Prompt Option"
        description="Detail Info"
        action={{
          childAction: <div>buttonContent</div>,
          onClickAction: action('On click action'),
        }}
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

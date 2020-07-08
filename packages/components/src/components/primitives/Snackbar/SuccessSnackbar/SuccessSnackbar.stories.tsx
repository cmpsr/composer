import React from 'react';
import { SuccessSnackbar } from './SuccessSnackbar';
import { SnackbarTextPosition, SnackbarPosition } from '../DefaultSnackbar';
import { Icon } from '../../Icon';
import { done as Done } from '../../Icon/icons/action';
import { select, text, boolean, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Composer/Primitive/Snackbar/SuccessSnackbar',
  component: SuccessSnackbar,
};

export const withBase = () => {
  return (
    <div className="p-48">
      <SuccessSnackbar
        open={boolean('Open', false)}
        message={text('Message', 'Prompt Option')}
        description={text('Description', 'Detail Info')}
        textPosition={select(
          'Text Position',
          SnackbarTextPosition,
          SnackbarTextPosition.Right
        )}
        position={select(
          'Position',
          SnackbarPosition,
          SnackbarPosition.TopCenter
        )}
        autoClose={number('Auto close', 5000)}
        action={{
          childAction: (
            <Icon className="text-fill-white fill-current">
              <Done type="filled" />
            </Icon>
          ),
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
      <SuccessSnackbar
        open={true}
        message="Prompt Option"
        description="Detail Info"
        action={{
          childAction: (
            <Icon className="text-fill-white fill-current">
              <Done type="filled" />
            </Icon>
          ),
          onClickAction: action('On click action'),
        }}
        textPosition={SnackbarTextPosition.Right}
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
      <SuccessSnackbar
        open={true}
        message="Prompt Option"
        description="Detail Info"
        action={{
          childAction: <div className="text-fill-white">buttonContent</div>,
          onClickAction: action('On click action'),
        }}
        textPosition={SnackbarTextPosition.Left}
        position={SnackbarPosition.TopCenter}
      />
    </div>
  );
};

withButton.story = {
  name: 'Button',
};

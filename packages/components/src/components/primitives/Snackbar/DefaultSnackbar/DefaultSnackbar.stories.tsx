import React from 'react';
import {
  DefaultSnackbar,
  showSnackbar,
  TextPosition,
  SnackbarPosition,
} from './DefaultSnackbar';
import { select, text, boolean } from '@storybook/addon-knobs';
import { close as Close } from '../../Icon/icons/navigation';

export default {
  title: 'Composer/Primitive/Snackbar/DefaultSnackbar',
  component: DefaultSnackbar,
};

export const withBase = () => {
  const snackbarOptions = {
    message: text('Message', 'Prompt Message'),
    description: text('Description', 'Detail Info'),
    showIcon: boolean('Show close icon', true),
    icon: <Close type="filled" />,
    textPosition: select('Text Position', TextPosition, TextPosition.Right),
    showButton: boolean('Show button', false),
    buttonText: text('Button text', 'Button'),
  };

  return (
    <div className="p-48">
      <div onClick={() => showSnackbar(snackbarOptions)}>Show snackbar</div>
      <DefaultSnackbar
        position={select(
          'Position',
          SnackbarPosition,
          SnackbarPosition.TopCenter
        )}
      />
    </div>
  );
};

withBase.story = {
  name: 'Base',
};

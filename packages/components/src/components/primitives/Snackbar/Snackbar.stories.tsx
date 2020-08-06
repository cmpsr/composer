import React, { useEffect } from 'react';
import {
  Snackbar,
  SnackbarTextPosition,
  SnackbarPosition,
  SnackbarType,
  showSnackbar,
  hideSnackbar,
} from './Snackbar';
import { close as Close } from '../Icon/icons/navigation';
import { Icon } from '../Icon';
import { select, text, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Composer/Primitive/Snackbar',
  component: Snackbar,
};

export const withBase = () => {
  const props = {
    className: text('ClassName', 'text-fill-primary-900'),
    message: text('Message', 'Prompt Option'),
    description: text('Description', 'Detail Info'),
    textPosition: select(
      'Text Position',
      SnackbarTextPosition,
      SnackbarTextPosition.Right
    ),
    type: select('Type', SnackbarType, SnackbarType.Default),
    position: select('Position', SnackbarPosition, SnackbarPosition.TopCenter),
    autoClose: number('Auto close', 5000),
    onClose: action('On close'),
    action: {
      childAction: (
        <Icon className="text-fill-white fill-current">
          <Close type="filled" />
        </Icon>
      ),
      onClickAction: action('On click action'),
    },
  };

  useEffect(() => {
    showSnackbar(props);
  }, [props]);

  return (
    <div className="p-48">
      <Snackbar className={text('ClassName', 'text-fill-primary-900')} />
      <button onClick={hideSnackbar}>Hide snackbar</button>
    </div>
  );
};

withBase.story = {
  name: 'Base',
};

export const withIcon = () => {
  const props = {
    className: 'text-fill-primary-900',
    message: 'Prompt Option',
    description: 'Detail Info',
    textPosition: SnackbarTextPosition.Right,
    type: SnackbarType.Default,
    position: SnackbarPosition.TopCenter,
    autoClose: 5000,
    onClose: action('On close'),
    action: {
      childAction: (
        <Icon className="text-fill-white fill-current">
          <Close type="filled" />
        </Icon>
      ),
      onClickAction: action('On click action'),
    },
  };

  useEffect(() => {
    showSnackbar(props);
  }, []);

  return (
    <div className="p-48">
      <Snackbar />
    </div>
  );
};

withIcon.story = {
  name: 'Icon',
};

export const withButton = () => {
  const props = {
    className: 'text-fill-primary-900',
    message: 'Prompt Option',
    description: 'Detail Info',
    textPosition: SnackbarTextPosition.Left,
    type: SnackbarType.Default,
    position: SnackbarPosition.TopCenter,
    autoClose: 5000,
    onClose: action('On close'),
    action: {
      childAction: <div className="text-fill-white">buttonContent</div>,
      onClickAction: action('On click action'),
    },
  };

  useEffect(() => {
    showSnackbar(props);
  }, []);

  return (
    <div className="p-48">
      <Snackbar />
    </div>
  );
};

withButton.story = {
  name: 'Button',
};

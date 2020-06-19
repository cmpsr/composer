import React from 'react';
import { boolean, text, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { Modal, ModalShapes } from '..';
import { Typography, TypographyTypes, TypographyMode } from '../../Typography';

import { Button, ButtonTypes, ButtonShapes } from '../../Button';

export default {
  title: 'Composer/Primitive/Modal',
  component: Modal,
};

export const basic = () => (
  <Modal
    shape={select('shape', ModalShapes, ModalShapes.Rectangle)}
    className={text('className', 'w-480')}
    isOpen={boolean('isOpen', true)}
    closeButton={boolean('closeButton', true)}
  >
    <div className="flex flex-col items-center mb-3-5">
      <Typography
        mode={TypographyMode.Dark100}
        tag="h4"
        type={TypographyTypes.Headline4}
      >
        {text('Body title', 'Main Title')}
      </Typography>
      <Typography
        mode={TypographyMode.Dark50}
        tag="span"
        type={TypographyTypes.Body}
      >
        {text('Body subtitle', 'Details')}
      </Typography>
    </div>
    <div className="flex justify-between">
      <Button
        type={ButtonTypes.Secondary}
        onClick={action('Button Click')}
        shape={ButtonShapes.Rounded}
      >
        <Typography
          tag="span"
          type={TypographyTypes.Button}
          mode={TypographyMode.Dark100}
        >
          {text('cancel button text', 'Cancel')}
        </Typography>
      </Button>
      <Button
        type={ButtonTypes.Primary}
        onClick={action('Button Click')}
        shape={ButtonShapes.Rounded}
      >
        <Typography
          tag="span"
          type={TypographyTypes.Button}
          mode={TypographyMode.Light100}
        >
          {text('Log out button text', 'Log out')}
        </Typography>
      </Button>
    </div>
  </Modal>
);

basic.story = {
  name: 'Basic',
};

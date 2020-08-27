import React from 'react';
import { MessageError } from '..';
import { MessagePlacement } from '../../Message';
import { action } from '@storybook/addon-actions';
import { text, select } from '@storybook/addon-knobs';

export default {
  title: 'Composer/Primitive/Chat/Conversation/MessageError',
  component: MessageError,
};

export const withLeft = () => (
  <div className="p-10">
    <MessageError
      placement={select('Placement', MessagePlacement, MessagePlacement.Left)}
      errorText={text('Error Text', "I'm an error")}
      text={text('Text', "I'm a fancy message")}
    />
  </div>
);

withLeft.story = {
  name: 'With error on left',
};

export const withRight = () => (
  <div className="p-10">
    <MessageError
      placement={select('Placement', MessagePlacement, MessagePlacement.Right)}
      errorText={text('Error Text', "I'm an error")}
      text={text('Text', "I'm a fancy message")}
    />
  </div>
);

withRight.story = {
  name: 'With error on right',
};

export const withMultipleErrors = () => (
  <div className="p-10">
    <MessageError
      placement={select('First Placement', MessagePlacement, MessagePlacement.Right)}
      errorText={text('First Error Text', "I'm on the right side!")}
      text={text('First Text', "I'm a fancy message :)")}
    />
    <MessageError
      placement={select('Second Placement', MessagePlacement, MessagePlacement.Left)}
      errorText={text('Second Error Text', "I'm on the left side!")}
      text={text('Second Text', "I'm a fancy message :(")}
    />
  </div>
);

withMultipleErrors.story = {
  name: 'With multiple errors',
};

export const withOnErrorClick = () => (
  <div className="p-10">
    <MessageError
      errorText={text('Error Text', "I'm an error")}
      text={text('Text', "I'm a fancy message")}
      onErrorClick={action('Call on error click')}
    />
  </div>
);

withOnErrorClick.story = {
  name: 'With on error click',
};
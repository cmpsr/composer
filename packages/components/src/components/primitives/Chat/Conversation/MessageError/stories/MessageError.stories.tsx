import React from 'react';
import { MessageError } from '..';
import { MessagePlacement } from '../../Message';
import { action } from '@storybook/addon-actions';
import { text, select } from '@storybook/addon-knobs';

export default {
  title: 'Composer/Primitive/Chat/Conversation/MessageError',
  component: MessageError,
};

export const basic = () => (
  <div className="p-10">
    <MessageError
      placement={select('Placement', MessagePlacement, MessagePlacement.Left)}
      errorText={text('Error Text', "I'm an error")}
      text={text('Text', "I'm a fancy message")}
    />
  </div>
);

basic.story = {
  name: 'Basic',
};

export const withMultipleErrors = () => (
  <div className="p-10">
    <MessageError
      placement={select('Placement 1', MessagePlacement, MessagePlacement.Right)}
      errorText={text('Error Text 1', "I'm on the right side!")}
      text={text('Text 1', "I'm a fancy message :)")}
    />
    <MessageError
      placement={select('Placement 2', MessagePlacement, MessagePlacement.Left)}
      errorText={text('Error Text 2', "I'm on the left side!")}
      text={text('Text 2', "I'm a fancy message :(")}
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

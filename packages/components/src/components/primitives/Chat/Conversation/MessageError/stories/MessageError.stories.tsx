import React from 'react';
import { MessageError } from '..';
import { MessagePlacement } from '../../Message';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Composer/Primitive/Chat/Conversation/MessageError',
  component: MessageError,
};

export const withLeft = () => (
  <div className="p-10">
    <MessageError
      placement={MessagePlacement.Left}
      errorText="I'm an error"
      text="I'm a fancy message"
    />
  </div>
);

withLeft.story = {
  name: 'With error on left',
};

export const withRight = () => (
  <div className="p-10">
    <MessageError
      placement={MessagePlacement.Right}
      errorText="I'm an error"
      text="I'm a fancy message"
    />
  </div>
);

withRight.story = {
  name: 'With error on right',
};

export const withMultipleErrors = () => (
  <div className="p-10">
    <MessageError
      placement={MessagePlacement.Right}
      errorText="I'm on the right side!"
      text="I'm a fancy message :)"
    />
    <MessageError
      placement={MessagePlacement.Left}
      errorText="I'm on the left side!"
      text="I'm a fancy message :("
    />
  </div>
);

withMultipleErrors.story = {
  name: 'With multiple errors',
};

export const withOnErrorClick = () => (
  <div className="p-10">
    <MessageError
      errorText="I'm an error"
      text="I'm a fancy message"
      onErrorClick={action('Call on error click')}
    />
  </div>
);

withOnErrorClick.story = {
  name: 'With on error click',
};

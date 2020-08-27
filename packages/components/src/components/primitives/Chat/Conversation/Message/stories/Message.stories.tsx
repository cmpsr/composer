import React from 'react';
import { Message, MessagePlacement, MessageBackgroundColor } from '..';
import { text, select } from '@storybook/addon-knobs';

export default {
  title: 'Composer/Primitive/Chat/Conversation/Message',
  component: Message,
};

export const withLeft = () => (
  <div className="p-10">
    <Message placement={select('Placement', MessagePlacement, MessagePlacement.Left)} text={text('Text', "I'm a fancy message")} />
  </div>
);

withLeft.story = {
  name: 'With left placement',
};

export const withRight = () => (
  <div className="p-10">
    <Message placement={select('Placement', MessagePlacement, MessagePlacement.Right)} text={text('Text', "I'm a fancy message")} />
  </div>
);

withRight.story = {
  name: 'With right placement',
};

export const withColors = () => (
  <div className="p-10">
    <Message
      backgroundColor={select('BackgroundColor', MessageBackgroundColor, MessageBackgroundColor.Primary600)}
      text={text('Text', "I'm a primary 25 color")}
    />
    <Message
      backgroundColor={select('BackgroundColor', MessageBackgroundColor, MessageBackgroundColor.Secondary600)}
      text={text('Text', "I'm a secondary 25 color")}
    />

    <Message
      backgroundColor={select('BackgroundColor', MessageBackgroundColor, MessageBackgroundColor.Black100)}
      text={text('Text', "I'm a black 10 color")}
    />
  </div>
);

withColors.story = {
  name: 'With colors',
};

export const withTime = () => (
  <div className="p-10">
    <Message time={text('Time', "10:23 AM")} text={text('Text', "I'm a fancy message")} />
  </div>
);

withTime.story = {
  name: 'With time',
};

export const withMultipleMessages = () => (
  <div className="p-10">
    <Message text="Hi Pau! Welcome Aboard!" />
    <Message time="01:32 PM" text="We should talk about this deal :)" />
    <Message
      time="02:37 PM"
      backgroundColor={MessageBackgroundColor.Secondary600}
      placement={MessagePlacement.Left}
      text="Absolutely! I'm really interested."
    />
    <Message text="Oops, sorry. I'm having some issues, my internet connection is super unstable..." />
  </div>
);

withMultipleMessages.story = {
  name: 'With multiple messages',
};
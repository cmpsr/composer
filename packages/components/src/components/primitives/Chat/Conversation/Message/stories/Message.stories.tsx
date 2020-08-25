import React from 'react';
import { Message, MessagePlacement, MessageBackgroundColor } from '..';
import { text, select } from '@storybook/addon-knobs';

export default {
  title: 'Composer/Primitive/Chat/Conversation/Message',
  component: Message,
};

export const basic = () => (
  <div className="p-10">
    <Message
      placement={select('Placement', MessagePlacement, MessagePlacement.Left)}
      backgroundColor={select('BackgroundColor', MessageBackgroundColor, MessageBackgroundColor.Primary600)}
      text={text('Text', "I'm a fancy message")}
    />
  </div>
);

basic.story = {
  name: 'Basic',
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
    <Message text={text('Text 1', "Hi Pau! Welcome Aboard!")} />
    <Message time={text('Time 2', "01:32 PM")} text={text('Text 2', "We should talk about this deal :)")} />
    <Message
      time={text('Time 3', "02:37 PM")}
      backgroundColor={select('BackgroundColor', MessageBackgroundColor, MessageBackgroundColor.Secondary600)}
      placement={select('Placement', MessagePlacement, MessagePlacement.Left)}
      text={text('Text 3', "Absolutely! I'm really interested.")}
    />
    <Message text={text('Text 4', "Oops, sorry. I'm having some issues, my internet connection is super unstable...")} />
  </div>
);

withMultipleMessages.story = {
  name: 'With multiple messages',
};

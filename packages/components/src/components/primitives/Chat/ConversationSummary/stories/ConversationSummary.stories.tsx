import React from 'react';
import { ConversationSummary } from '..';
import { action } from '@storybook/addon-actions';
import { text, boolean, number } from '@storybook/addon-knobs';

export default {
  title: 'Composer/Primitive/Chat/ConversationSummary',
  component: ConversationSummary,
};

export const basic = () => (
  <div className="p-10">
    <ConversationSummary
      id="1"
      title={text('title', 'Pau Teruel')}
      description={text('description', '2003 Acura TL')}
      message={text(
        'message',
        'My car broke down! Can I talk to someone please'
      )}
      time={text('time', '10:21 AM')}
      avatarText={text('avatarText', '')}
      isHighlighted={boolean('isHighlighted', false)}
      isActive={boolean('isActive', false)}
      unreadMessages={number('unreadMessages', 3)}
      onClick={action('On click')}
    />
  </div>
);

basic.story = {
  name: 'With basic',
};

export const withErrorIcon = () => (
  <div className="p-10">
    <ConversationSummary
      id="1"
      title={text('title', 'Pau Teruel')}
      description={text('description', '2003 Acura TL')}
      message={text(
        'message',
        'My car broke down! Can I talk to someone please'
      )}
      time={text('time', '10:21 AM')}
      avatarText={text('avatarText', '')}
      isHighlighted={boolean('isHighlighted', false)}
      isActive={boolean('isActive', false)}
      isError
    />
  </div>
);

withErrorIcon.story = {
  name: 'With error icon',
};

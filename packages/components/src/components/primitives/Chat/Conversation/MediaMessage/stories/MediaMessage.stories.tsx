import React from 'react';
import { MediaMessage, MediaMessageBorderColor, MessagePlacement } from '..';
import { select, text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions';

export default {
  title: 'Composer/Primitive/Chat/Conversation/MediaMessage',
  component: MediaMessage,
};

export const basic = () => (
  <div className="p-10">
    <MediaMessage
      time={text("Time", "15:05 PM")}
      borderColor={select('Border Color', MediaMessageBorderColor, MediaMessageBorderColor.Secondary25)}
      placement={select('Placement', MessagePlacement, MessagePlacement.Left)}
      image={
        {
          title: 'title',
          url: 'https://images.ctfassets.net/o9153kt66j4s/2ClCasVvBEEKCAnWbctHQt/195c416b76203751ad8d62f231e84855/Screen_Shot_2020-07-30_at_2.07.47_PM.png',
        }
      }
      onClick={action('Media Message on Click')}
    />
  </div>
);

basic.story = {
  name: 'Basic',
};

export const withMultipleMessages = () => (
  <div className="p-10">
    <MediaMessage
      time={text("Time", "15:05 PM")}
      borderColor={select('Border Color', MediaMessageBorderColor, MediaMessageBorderColor.Secondary25)}
      placement={select('Placement', MessagePlacement, MessagePlacement.Left)}
      image={
        {
          title: 'title',
          url: 'https://images.ctfassets.net/o9153kt66j4s/2ClCasVvBEEKCAnWbctHQt/195c416b76203751ad8d62f231e84855/Screen_Shot_2020-07-30_at_2.07.47_PM.png',
        }
      }
      onClick={action('Media Message on Click')}
    />
    <MediaMessage
      time={text("Time", "15:05 PM")}
      borderColor={select('Border Color', MediaMessageBorderColor, MediaMessageBorderColor.Secondary25)}
      placement={select('Placement', MessagePlacement, MessagePlacement.Left)}
      image={
        {
          title: 'title',
          url: 'https://images.ctfassets.net/o9153kt66j4s/2ClCasVvBEEKCAnWbctHQt/195c416b76203751ad8d62f231e84855/Screen_Shot_2020-07-30_at_2.07.47_PM.png',
        }
      }
      onClick={action('Media Message on Click')}
    />
  </div >
);

withMultipleMessages.story = {
  name: 'With multiple messages',
};

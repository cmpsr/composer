import React from 'react';
import { MediaMessage } from '..';
import { MessagePlacement, MessageBackgroundColor } from '../../Message';
import { action } from '@storybook/addon-actions';
import { select, text } from '@storybook/addon-knobs';

export default {
  title: 'Composer/Primitive/Chat/Conversation/MediaMessage',
  component: MediaMessage,
};

export const base = () => (
  <div className="p-10">
    <MediaMessage
      placement={MessagePlacement.Left}
      text="Base message"
      onClick={action('On Click')}
      backgroundColor={MessageBackgroundColor.Primary600}
      time="20:00 PM"
      mediaFiles={[
        {
          contentType: 'image/jpeg',
          url:
            'https://www.autobild.es/sites/autobild.es/public/styles/main_element/public/dc/fotos/tesla_model_S_001.jpg?itok=jttOEAGK',
        },
        {
          contentType: 'image/jpeg',
          url:
            'https://www.autobild.es/sites/autobild.es/public/styles/main_element/public/dc/fotos/tesla_model_S_001.jpg?itok=jttOEAGK',
        },
      ]}
    />
  </div>
);

base.story = {
  name: 'Base',
};

export const interactive = () => (
  <div className="p-10">
    <MediaMessage
      placement={select('Placement', MessagePlacement, MessagePlacement.Left)}
      text={text('Text', 'Base Message')}
      onClick={action('On Click')}
      backgroundColor={select(
        'Background Color',
        MessageBackgroundColor,
        MessageBackgroundColor.Primary600
      )}
      time={text('Time', '20:00 PM')}
      mediaFiles={[
        {
          contentType: 'image/jpeg',
          url:
            'https://www.autobild.es/sites/autobild.es/public/styles/main_element/public/dc/fotos/tesla_model_S_001.jpg?itok=jttOEAGK',
        },
        {
          contentType: 'image/jpeg',
          url:
            'https://www.autobild.es/sites/autobild.es/public/styles/main_element/public/dc/fotos/tesla_model_S_001.jpg?itok=jttOEAGK',
        },
      ]}
    />
  </div>
);

interactive.story = {
  name: 'Interactive',
};

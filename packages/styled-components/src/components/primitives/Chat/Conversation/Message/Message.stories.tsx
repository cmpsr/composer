import React from 'react';
import { Message } from '.';
import { action } from '@storybook/addon-actions';
import { text, select } from '@storybook/addon-knobs';

export default {
  title: 'Primitives/Chat/Conversation/Message',
  component: Message,
};

const mediaFile = {
      contentType: 'image/jpeg',
      url:
        'https://www.autobild.es/sites/autobild.es/public/styles/main_element/public/dc/fotos/tesla_model_S_001.jpg?itok=jttOEAGK',
    };

const mediaFiles = {
  none: [],
  one: [mediaFile],
  two: [mediaFile, mediaFile],
};

export const Placements = () => (
  <>
    <h1>Message placements</h1>
    {Object.keys(Message.Placements).map((placement: any) => (
      <>
        <Message
          placement={Message.Placements[placement]}
          text="I'm a fancy message"
        />
      </>
    ))}
  </>
);

export const Colors = () => (
  <>
    <h1>Message colors</h1>
    {Object.keys(Message.BackgroundColors).map((color: any) => (
      <>
        <Message backgroundColor={Message.BackgroundColors[color]} text="I'm a fancy message" />
      </>
    ))}
  </>
);

export const Media = () => (
  <>
    <h1>Message media</h1>
    <Message mediaFiles={mediaFiles.two} onMediaClick={action('On media click')} text="I'm a media message" />
  </>
)

export const Playground = () => (
  <>
    <h1>Playground</h1>
    <Message
      text={text('Text', 'fancy message')}
      placement={select(
        'Message placement',
        Message.Placements,
        Message.Placements.Left
      )}
      time={text('Time', '10:30 Am')}
      onMediaClick={action('On media click')}
      mediaFiles={select('MediaFiles', mediaFiles, mediaFiles.none)}
    />
  </>
);

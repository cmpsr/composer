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
  url: 'https://avatars0.githubusercontent.com/u/67131017?s=200&v=4',
};

const mediaFiles = {
  none: [],
  one: [mediaFile],
  two: [mediaFile, mediaFile],
};

const styles = `
  background: #c3f7d3;
  padding: 10px;
`;

export const Placements = () => (
  <>
    <h1>Message placements</h1>
    {Object.keys(Message.Placements).map((placement: any, i) => (
      <div key={i}>
        <Message
          placement={Message.Placements[placement]}
          text="I'm a fancy message"
        />
      </div>
    ))}
  </>
);

export const Colors = () => (
  <>
    <h1>Message colors</h1>
    {Object.keys(Message.BackgroundColors).map((backgroundColor: any, i) => (
      <div key={i}>
        <Message
          backgroundColor={Message.BackgroundColors[backgroundColor]}
          text="I'm a fancy message"
        />
      </div>
    ))}
  </>
);

export const Media = () => (
  <>
    <h1>Message media</h1>
    <Message
      mediaFiles={mediaFiles.two}
      onMediaClick={action('On media click')}
      text="I'm a media message"
    />
  </>
);

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
      backgroundColor={select(
        'Message background color',
        Message.BackgroundColors,
        Message.BackgroundColors.Primary
      )}
      time={text('Time', '10:30 Am')}
      onMediaClick={action('On media click')}
      mediaFiles={select('MediaFiles', mediaFiles, mediaFiles.none)}
      customCss={text('Message styles', styles)}
    />
  </>
);

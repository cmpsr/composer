import React from 'react';
import { MessageError } from '.';
import { action } from '@storybook/addon-actions';
import { text, select } from '@storybook/addon-knobs';

export default {
  title: 'Primitives/Chat/Conversation/MessageError',
};

const styles = `
  background: #c3f7d3;
  padding: 10px;
`;

export const Placement = () => (
  <>
    <h1>Message placements</h1>
    {Object.keys(MessageError.Placements).map((placement: any, i) => (
      <div key={i}>
        <MessageError
          text="I'm a fancy message"
          errorText="I'm an error"
          placement={MessageError.Placements[placement]}
        />
      </div>
    ))}
  </>
);

export const Playground = () => (
  <>
    <h1>Playground</h1>
    <MessageError
      text={text('Text', 'fancy message')}
      errorText={text('Error text', 'fancy error')}
      placement={select(
        'Message placement',
        MessageError.Placements,
        MessageError.Placements.Left
      )}
      onErrorClick={action('On error click')}
      customCss={text('Message styles', styles)}
    />
  </>
);

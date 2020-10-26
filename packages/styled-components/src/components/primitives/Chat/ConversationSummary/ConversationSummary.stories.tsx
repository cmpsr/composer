import React from 'react';
import { ConversationSummary } from '.';
import { action } from '@storybook/addon-actions';
import { text, boolean, number } from '@storybook/addon-knobs';
import styled from 'styled-components';

export default {
  title: 'Primitives/Chat/ConversationSummary',
  component: ConversationSummary,
};

const Container = styled.div`
  padding: 2.5rem;
`;

export const UnreadMessages = () => (
  <Container>
    <ConversationSummary
      id="1"
      title="Pau Teruel"
      description="(234) 230-3897"
      message="My car broke down! Can I talk to someone please"
      time="10:21 AM"
      avatarText="PT"
      isHighlighted={false}
      isActive={false}
      unreadMessages={3}
      onClick={action('On click')}
    />
  </Container>
);

export const Error = () => (
  <Container>
    <ConversationSummary
      id="1"
      title="Pau Teruel"
      description="(234) 230-3897"
      message="My car broke down! Can I talk to someone please"
      time="10:21 AM"
      avatarText="PT"
      isHighlighted={false}
      isActive={false}
      unreadMessages={3}
      onClick={action('On click')}
      isError
    />
  </Container>
);

export const Playground = () => (
  <Container>
    <ConversationSummary
      id="1"
      title={text('title', 'Pau Teruel')}
      description={text('description', '(234) 230-3897')}
      message={text(
        'message',
        'My car broke down! Can I talk to someone please'
      )}
      time={text('time', '10:21 AM')}
      avatarText={text('avatarText', 'PT')}
      isHighlighted={boolean('isHighlighted', false)}
      isActive={boolean('isActive', false)}
      unreadMessages={number('unreadMessages', 3)}
      onClick={action('On click')}
      isError={boolean('Is Error', false)}
    />
  </Container>
);

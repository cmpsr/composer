import React from 'react';
import { ConversationList } from '.';
import { action } from '@storybook/addon-actions';
import { text, boolean, number } from '@storybook/addon-knobs';

export default {
  title: 'Primitives/Chat/ConversationList',
  component: ConversationList,
};

export const Empty = () => (
  <>
    <h1>Empty</h1>
    <ConversationList
      conversations={[]}
      emptyCaseElement={<div>You don't have any conversation yet</div>}
    />
  </>
);

export const Conversations = () => (
  <>
    <h1>Conversations</h1>
    <ConversationList
      conversations={[
        {
          id: 1,
          title: 'Pau Teruel',
          description: 'Description',
          message: 'Message',
          time: '10:20 PM',
          avatarText: 'PT',
          isHighlighted: false,
          isError: false,
          unreadMessages: 0,
        },
        {
          id: 2,
          title: 'John Cena',
          description: 'Description',
          message: 'Message',
          time: '10:23 PM',
          avatarText: 'JC',
          isHighlighted: true,
          isError: false,
          unreadMessages: 3,
        },
      ]}
    />
  </>
);

export const Playground = () => (
  <>
    <h1>Playground</h1>
    <ConversationList
      conversations={[
        {
          id: text('First Conversation id', '1'),
          title: text('First Conversation title', 'Pau Teruel'),
          description: text('First Conversation description', 'Description'),
          message: text('First Conversation message', 'Message'),
          time: text('First Conversation time', '10:20 PM'),
          avatarText: text('First Conversation avatarText', 'PT'),
          isHighlighted: boolean('First Conversation isHighlighted', false),
          isError: boolean('First Conversation isError', false),
          unreadMessages: number('First Conversation unreadMessages', 3),
          onClick: action('First Conversation on click'),
        },
        {
          id: text('Second Conversation id', '2'),
          title: text('Second Conversation title', 'John Cena'),
          description: text('Second Conversation description', 'Description'),
          message: text('Second Conversation message', 'Message'),
          time: text('Second Conversation time', '10:20 PM'),
          avatarText: text('Second Conversation avatarText', 'PT'),
          isHighlighted: boolean('Second Conversation isHighlighted', true),
          isError: boolean('Second Conversation isError', false),
          unreadMessages: number('Second Conversation unreadMessages', 5),
          onClick: action('Second Conversation on click'),
        },
      ]}
    />
  </>
);

import React from 'react';
import { ConversationList } from '..';
import { action } from '@storybook/addon-actions';
import { text, boolean, number } from '@storybook/addon-knobs';

export default {
  title: 'Composer/Primitive/Chat/ConversationList',
  component: ConversationList,
};

export const basic = () => (
  <div className="p-10">
    <ConversationList
      selectedConversationId={text('selectedConversationId', '')}
      conversations={[
        {
          id: text('First Conversation id', '1'),
          title: text('First Conversation title', 'Pau Teruel'),
          description: text('First Conversation description', 'Description'),
          message: text('First Conversation message', 'Message'),
          messageClassName: text(
            'First Conversation messageClassName',
            'not-italic'
          ),
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
          messageClassName: text(
            'Second Conversation messageClassName',
            'italic'
          ),
          time: text('Second Conversation time', '10:20 PM'),
          avatarText: text('Second Conversation avatarText', 'PT'),
          isHighlighted: boolean('Second Conversation isHighlighted', true),
          isError: boolean('Second Conversation isError', false),
          unreadMessages: number('Second Conversation unreadMessages', 5),
          onClick: action('Second Conversation on click'),
        },
      ]}
    />
  </div>
);

basic.story = {
  name: 'With basic',
};

export const withEmptyConversations = () => (
  <div className="p-10">
    <ConversationList
      conversations={[]}
      emptyCaseElement={
        <div className="p-5 text-light-100 bg-fill-primary-100">
          You don't have any conversation yet
        </div>
      }
    />
  </div>
);

withEmptyConversations.story = {
  name: 'With empty conversation',
};

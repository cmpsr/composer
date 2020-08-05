import React, { ReactNode } from 'react';
import cn from 'classnames';
import {
  Props as ConversationSummaryProps,
  ConversationSummary,
} from 'components/primitives/Chat/ConversationSummary';
export const CONVERSATION_LIST_DEFAULT_TEST_ID = 'conversationList';

type Props = {
  id?: string;
  conversations: ConversationSummaryProps[];
  selectedConversationId?: string;
  emptyCaseElement?: ReactNode;
  className?: string;
  testId?: string;
};

export const ConversationList = ({
  id,
  conversations,
  emptyCaseElement,
  className,
  selectedConversationId,
  testId = CONVERSATION_LIST_DEFAULT_TEST_ID,
}: Props) => {
  const hasConversations = conversations.length > 0;
  const renderConversations = () => {
    return (
      <ul className="list-none">
        {conversations.map((conversation) => {
          return (
            <li key={conversation.id}>
              <ConversationSummary
                {...conversation}
                isActive={conversation.id === selectedConversationId}
              />
              <div className="ml-8 border-b border-outline-background-400"></div>
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <div id={id} className={cn(className)} data-testid={testId}>
      {hasConversations ? renderConversations() : emptyCaseElement}
    </div>
  );
};

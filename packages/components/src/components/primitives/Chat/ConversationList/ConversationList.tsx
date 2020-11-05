import React from 'react';
import { ConversationSummary } from 'components/primitives/Chat/ConversationSummary';
import { Props } from './ConversationList.types';
import { StyledUnorderedList, StyledDivider } from './ConversationList.styled';

export const ConversationList = ({
  id,
  conversations,
  emptyCaseElement,
  className,
  selectedConversationId,
  testId = 'conversationList',
}: Props) => {
  const hasConversations = conversations.length > 0;
  const renderConversations = () => (
    <StyledUnorderedList>
      {conversations.map((conversation) => {
        return (
          <li key={conversation.id}>
            <ConversationSummary
              {...conversation}
              isActive={conversation.id === selectedConversationId}
            />
            <StyledDivider />
          </li>
        );
      })}
    </StyledUnorderedList>
  );

  return (
    <div id={id} className={className} data-testid={testId}>
      {hasConversations ? renderConversations() : emptyCaseElement}
    </div>
  );
};

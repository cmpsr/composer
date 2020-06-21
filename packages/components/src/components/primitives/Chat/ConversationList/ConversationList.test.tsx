import React from 'react';
import { render, screen } from '@testing-library/react';
import {
  ConversationList,
  CONVERSATION_LIST_DEFAULT_TEST_ID,
} from './ConversationList';

describe('ConversationList', () => {
  it('should render classname', () => {
    render(<ConversationList className="className" conversations={[]} />);
    const conversationList = screen.getByTestId(
      CONVERSATION_LIST_DEFAULT_TEST_ID
    );
    expect(conversationList).toHaveClass('className');
  });
  it('should render emptyCaseElement when conversations is empty', () => {
    render(
      <ConversationList
        conversations={[]}
        emptyCaseElement={<span>Empty</span>}
      />
    );
    const emptyCaseElement = screen.getByText('Empty');
    expect(emptyCaseElement).toBeInTheDocument();
  });
  it('should render conversations', () => {
    render(
      <ConversationList
        conversations={[
          {
            id: '1',
            title: 'title',
            description: 'description',
            message: 'message',
            messageClassName: 'italic',
            time: 'time',
            avatarText: 'avatarText',
            isHighlighted: false,
            isActive: false,
            isError: false,
            unreadMessages: 3,
            onClick: () => {},
          },
          {
            id: '2',
            title: 'title',
            description: 'description',
            message: 'message',
            messageClassName: 'italic',
            time: 'time',
            avatarText: 'avatarText',
            isHighlighted: false,
            isActive: false,
            isError: false,
            unreadMessages: 3,
            onClick: () => {},
          },
        ]}
      />
    );
    const conversationList = screen.getByTestId(
      CONVERSATION_LIST_DEFAULT_TEST_ID
    );
    const conversationUnOrderedList = conversationList.lastChild;
    const conversationUnOrderedItems =
      conversationList.lastChild.childNodes.length;
    expect(conversationUnOrderedList).toBeInTheDocument();
    expect(conversationUnOrderedItems).toBe(2);
  });
});

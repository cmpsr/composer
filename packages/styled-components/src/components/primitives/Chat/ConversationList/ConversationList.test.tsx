import React from 'react';
import { render, screen } from '@testing-library/react';
import { ConversationList } from '.';

describe('ConversationList', () => {
  const testId = 'conversationList';
  it('should render classname', () => {
    render(<ConversationList className="foo" conversations={[]} />);
    const conversationList = screen.getByTestId(testId);
    expect(conversationList).toHaveClass('foo');
  });
  it('should render empty case', () => {
    render(
      <ConversationList
        conversations={[]}
        emptyCaseElement={<span>Empty</span>}
      />
    );
    screen.getByText('Empty');
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
    const conversationList = screen.getByTestId(testId);
    const conversationUnOrderedList = conversationList.lastChild;
    const conversationUnOrderedItems = conversationList.lastChild.childNodes;
    expect(conversationUnOrderedList).toBeInTheDocument();
    expect(conversationUnOrderedItems).toHaveLength(2);
  });
});

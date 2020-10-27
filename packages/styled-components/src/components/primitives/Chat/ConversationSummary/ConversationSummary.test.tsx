import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ConversationSummary } from './ConversationSummary';

describe('ConversationSummary', () => {
  const testID = 'conversationSummary';
  const avatarTestId = 'avatarText';
  const badgeTestId = 'numericBadge';
  it('should render custom css class', () => {
    render(
      <ConversationSummary
        id="1"
        className="foo"
        title="I'm a fancy title"
        description="I'm a fancy description"
        message="I'm the message"
        time="02:30 PM"
      />
    );
    const summary = screen.getByTestId(testID);
    expect(summary).toHaveClass('foo');
  });
  it('should render custom css class for message', () => {
    render(
      <ConversationSummary
        id="1"
        messageCss="customCss"
        title="I'm a fancy title"
        description="I'm a fancy description"
        message="I'm the message"
        time="02:30 PM"
      />
    );
    const message = screen.getByText("I'm the message");
    expect(message).toHaveClass('custom');
  });
  it('should render title, description, message and time', () => {
    render(
      <ConversationSummary
        id="1"
        title="title"
        description="description"
        message="message"
        time="time"
      />
    );
    screen.getByText('title');
    screen.getByText('description');
    screen.getByText('message');
    screen.getByText('time');
  });
  it('should render unread messages', () => {
    render(
      <ConversationSummary
        id="1"
        title="title"
        description="description"
        message="message"
        time="time"
        unreadMessages={5}
      />
    );
    screen.getByText('5');
  });
  it('should not render unread messages when is error', () => {
    render(
      <ConversationSummary
        id="1"
        title="title"
        description="description"
        message="message"
        time="time"
        unreadMessages={5}
        isError
      />
    );
    const unreadMessages = screen.queryByTestId(badgeTestId);
    expect(unreadMessages).not.toBeInTheDocument();
  });
  it('should not render unread messages no unread messages', () => {
    render(
      <ConversationSummary
        id="1"
        title="title"
        description="description"
        message="message"
        time="time"
        unreadMessages={0}
        isError
      />
    );
    const unreadMessages = screen.queryByTestId(badgeTestId);
    expect(unreadMessages).not.toBeInTheDocument();
  });
  it('should render error icon', () => {
    render(
      <ConversationSummary
        id="1"
        title="title"
        description="description"
        message="message"
        time="time"
        isError
      />
    );
    screen.getByTestId('icon');
  });
  it('should render active state when active', () => {
    render(
      <ConversationSummary
        id="1"
        title="title"
        description="description"
        message="message"
        time="time"
        isActive
      />
    );
    const summary = screen.getByTestId(testID);
    expect(summary).toHaveClass('active');
  });
  it('should render avatarText and highlight avatar', () => {
    render(
      <ConversationSummary
        id="1"
        title="title"
        description="description"
        message="message"
        time="time"
        avatarText="AT"
        isHighlighted
      />
    );
    const avatar = screen.getByTestId(avatarTestId);
    expect(avatar).toHaveTextContent('AT');
    screen.getByTestId('avatarTextHighlight');
  });
  it('should call onClick when clicked', () => {
    const mockOnClick = jest.fn();
    render(
      <ConversationSummary
        id="1"
        title="title"
        description="description"
        message="message"
        time="time"
        onClick={mockOnClick}
      />
    );
    const summary = screen.getByTestId(testID);
    fireEvent.click(summary);
    expect(mockOnClick).toBeCalledWith('1');
    expect(mockOnClick).toBeCalledTimes(1);
  });
});

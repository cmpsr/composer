import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import {
  ConversationSummary,
  CONVERSATION_SUMMARY_DEFAULT_TEST_ID,
} from './ConversationSummary';
import { AVATAR_TEXT_DEFAULT_TEST_ID } from '../../Avatars/AvatarText';
import { NUMERIC_BADGE_DEFAULT_TEST_ID } from '../../Badges/NumericBadge';

describe('ConversationSummary', () => {
  it('should render classname', () => {
    render(
      <ConversationSummary
        id="1"
        className="className"
        title="I'm a fancy title"
        description="I'm a fancy description"
        message="I'm the message"
        time="02:30 PM"
      />
    );
    const summary = screen.getByTestId(CONVERSATION_SUMMARY_DEFAULT_TEST_ID);
    expect(summary).toHaveClass('className');
  });
  it('should render message classname', () => {
    render(
      <ConversationSummary
        id="1"
        messageClassName="messageClassName"
        title="I'm a fancy title"
        description="I'm a fancy description"
        message="I'm the message"
        time="02:30 PM"
      />
    );
    const message = screen.getByText("I'm the message");
    expect(message).toHaveClass('messageClassName');
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
    const title = screen.getByText('title');
    const description = screen.getByText('description');
    const message = screen.getByText('message');
    const time = screen.getByText('time');
    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(message).toBeInTheDocument();
    expect(time).toBeInTheDocument();
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
    const unreadMessages = screen.getByText('5');
    expect(unreadMessages).toBeInTheDocument();
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
    const unreadMessages = screen.queryByTestId(NUMERIC_BADGE_DEFAULT_TEST_ID);
    expect(unreadMessages).not.toBeInTheDocument();
  });
  it('should not render unread messages when unreadMessages is 0', () => {
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
    const unreadMessages = screen.queryByTestId(NUMERIC_BADGE_DEFAULT_TEST_ID);
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
    const errorIcon = screen.getByTestId('icon');
    expect(errorIcon).toBeInTheDocument();
  });
  it('should render different background when is active', () => {
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
    const summary = screen.getByTestId(CONVERSATION_SUMMARY_DEFAULT_TEST_ID);
    expect(summary).toHaveClass('bg-fill-background-100');
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
    const avatar = screen.getByTestId(AVATAR_TEXT_DEFAULT_TEST_ID);
    const avatarHighlight = screen.getByTestId('avatarTextHighlight');
    expect(avatar).toHaveTextContent('AT');
    expect(avatarHighlight).toBeInTheDocument();
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
    const summary = screen.getByTestId(CONVERSATION_SUMMARY_DEFAULT_TEST_ID);
    fireEvent.click(summary);
    expect(mockOnClick).toBeCalledWith('1');
    expect(mockOnClick).toBeCalledTimes(1);
  });
});

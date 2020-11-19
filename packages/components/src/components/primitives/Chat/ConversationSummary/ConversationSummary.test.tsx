import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ConversationSummary } from './ConversationSummary';
import 'jest-styled-components';

describe('ConversationSummary', () => {
  const testID = 'conversationSummary';
  const avatarTestId = 'avatarText';
  const badgeTestId = 'numericBadge';
  it('should render custom css class', () => {
    givenComponentRendered({ className: 'foo' });
    const summary = screen.getByTestId(testID);
    expect(summary).toHaveClass('foo');
  });
  it('should render custom css', () => {
    givenComponentRendered({ customCss: 'color: violet' });
    const summary = screen.getByTestId(testID);
    expect(summary).toHaveStyleRule('color', 'violet', {
      modifier: '&',
    });
  });
  it('should render custom css class for message', () => {
    givenComponentRendered({
      message: "I'm the message",
      messageClassName: 'foo',
    });
    const message = screen.getByText("I'm the message");
    expect(message).toHaveClass('foo');
  });
  it('should render custom css for message', () => {
    givenComponentRendered({
      message: "I'm the message",
      messageCustomCss: 'color: violet',
    });
    const message = screen.getByText("I'm the message");
    expect(message).toHaveStyleRule('color', 'violet', {
      modifier: '&',
    });
  });
  it('should render title, description, message and time', () => {
    givenComponentRendered();
    screen.getByText('title');
    screen.getByText('description');
    screen.getByText('message');
    screen.getByText('time');
  });
  it('should render unread messages', () => {
    givenComponentRendered({ unreadMessages: 5 });
    screen.getByText('5');
  });
  it('should not render unread messages when is error', () => {
    givenComponentRendered({ unreadMessages: 5, isError: true });
    const unreadMessages = screen.queryByTestId(badgeTestId);
    expect(unreadMessages).not.toBeInTheDocument();
  });
  it('should not render unread messages when no unread messages', () => {
    givenComponentRendered({ unreadMessages: 0 });
    const unreadMessages = screen.queryByTestId(badgeTestId);
    expect(unreadMessages).not.toBeInTheDocument();
  });
  it('should render error icon', () => {
    givenComponentRendered({ isError: true });
    screen.getByTestId('icon');
  });
  it('should render active state when active', () => {
    givenComponentRendered({ isActive: true });
    const summary = screen.getByTestId(testID);
    expect(summary).toHaveClass('active');
  });
  it('should render avatarText and highlight avatar', () => {
    givenComponentRendered({ avatarText: 'AT', isHighlighted: true });
    const avatar = screen.getByTestId(avatarTestId);
    expect(avatar).toHaveTextContent('AT');
    screen.getByTestId('avatarTextHighlight');
  });
  it('should call onClick when clicked', () => {
    const mockOnClick = jest.fn();
    givenComponentRendered({ onClick: mockOnClick });
    const summary = screen.getByTestId(testID);
    fireEvent.click(summary);
    expect(mockOnClick).toBeCalledWith('1');
    expect(mockOnClick).toBeCalledTimes(1);
  });

  const givenComponentRendered = (props?: any) =>
    render(
      <ConversationSummary
        id="1"
        title="title"
        description="description"
        message="message"
        time="time"
        {...props}
      />
    );
});

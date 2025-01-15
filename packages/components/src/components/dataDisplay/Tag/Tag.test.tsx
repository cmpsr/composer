import React from 'react';
import '@testing-library/jest-dom';
import { renderWithProviders, screen } from '@tests/renderWithProviders';
import { Tag } from './Tag';
import { IconAlertCircle } from '@components';

describe('Tag', () => {
  const givenComponentRendered = ({ showLeftIcon = false, showRightIcon = false } = {}) =>
    renderWithProviders(
      <Tag>
        {showLeftIcon && <Tag.LeftIcon data-testid="cmpsr.tag.left-icon" as={IconAlertCircle} />}
        <Tag.Label>Hello</Tag.Label>
        {showRightIcon && <Tag.RightIcon data-testid="cmpsr.tag.right-icon" as={IconAlertCircle} />}
      </Tag>,
    );

  test('should render default tag component with a simple text', () => {
    givenComponentRendered();
    screen.getByText(/Hello/i);
  });

  test('should render a tag with a left icon', () => {
    givenComponentRendered({ showLeftIcon: true });
    expect(screen.getByTestId('cmpsr.tag.left-icon')).toBeInTheDocument();
  });

  test('should render a tag a right icon', () => {
    givenComponentRendered({ showRightIcon: true });
    expect(screen.getByTestId('cmpsr.tag.right-icon')).toBeInTheDocument();
  });
});

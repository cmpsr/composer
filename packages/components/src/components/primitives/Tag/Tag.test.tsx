import React from 'react';
import '@testing-library/jest-dom';
import { renderWithProviders } from 'tests/renderWithProviders';
import { screen } from '@testing-library/react';
import { Tag } from './Tag';
import { IconAlertCircle } from '../Icons';

describe('Tag', () => {
  test('should render default tag component with a simple text', () => {
    renderWithProviders(<Tag>Hello</Tag>);
    screen.getByText(/Hello/i);
  });

  test('should render a tag with leading icon', () => {
    renderWithProviders(
      <Tag>
        <Tag.RightIcon as={IconAlertCircle} data-testid="cmpsr.leadingIcon" />
        <Tag.Label data-testid="cmpsr.label">Hello</Tag.Label>
      </Tag>
    );

    screen.getByTestId('cmpsr.label');
    screen.getByTestId('cmpsr.leadingIcon');
  });

  test('should render a tag with trailing icon', () => {
    renderWithProviders(
      <Tag>
        <Tag.Label data-testid="cmpsr.label">Hello</Tag.Label>
        <Tag.RightIcon as={IconAlertCircle} data-testid="cmpsr.trailingIcon" />
      </Tag>
    );

    screen.getByTestId('cmpsr.label');
    screen.getByTestId('cmpsr.trailingIcon');
  });
});

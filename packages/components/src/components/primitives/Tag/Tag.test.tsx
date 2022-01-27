import React from 'react';
import '@testing-library/jest-dom';
import { renderWithProviders } from 'tests/renderWithProviders';
import { screen } from '@testing-library/react';
import { Tag } from './Tag';
import { IconAdjustments } from '../Icons';

describe('Tag', () => {
  test('should render default tag component with a simple text', () => {
    renderWithProviders(<Tag label="Hello" />);
    screen.getByText(/Hello/i);
  });

  test('should render a tag with a left icon', () => {
    renderWithProviders(
      <Tag label="Hello" icon={IconAdjustments} iconPosition="left" />
    );
    screen.getByTestId('cmpsr.tag.left-icon');
  });

  test('should render a tag a right icon', () => {
    renderWithProviders(
      <Tag label="Hello" icon={IconAdjustments} iconPosition="right" />
    );
    screen.getByTestId('cmpsr.tag.right-icon');
  });
});

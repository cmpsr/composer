import React from 'react';
import { render, screen } from '@testing-library/react';
import { DropdownSingleSelect } from './';

describe('DropdownSingleSelect', () => {
  const options = [
    { value: 1, label: 'Option 1' },
    { value: 2, label: 'Option 2' },
    { value: 3, label: 'Option 3' },
  ];
  it('should render downshift select for desktop version', () => {
    render(<DropdownSingleSelect options={options} />);
    screen.getByRole('button');
  });
});

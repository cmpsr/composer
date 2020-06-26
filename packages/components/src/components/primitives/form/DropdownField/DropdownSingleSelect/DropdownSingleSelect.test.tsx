import React from 'react';
import { render, screen } from '@testing-library/react';
import { DROPDOWN_NATIVE_DEFAULT_TEST_ID } from '../DropdownNativeSelect';
import { DROPDOWN_DOWNSHIFT_DEFAULT_TEST_ID } from '../DropdownDownshiftSelect';
import { DropdownSingleSelect } from './';

jest.mock('react-device-detect');

describe('DropdownSingleSelect', () => {
  const options = [
    { value: 1, label: 'Option 1' },
    { value: 2, label: 'Option 2' },
    { value: 3, label: 'Option 3' },
  ];
  it('should render downshift select for desktop version', () => {
    const deviceDetect = require('react-device-detect');
    deviceDetect.isMobile = false;
    render(<DropdownSingleSelect options={options} />);
    screen.getByTestId(DROPDOWN_DOWNSHIFT_DEFAULT_TEST_ID);
  });
  it('should render native select for desktop version', () => {
    const deviceDetect = require('react-device-detect');
    deviceDetect.isMobile = true;
    render(<DropdownSingleSelect options={options} />);
    screen.getByTestId(DROPDOWN_NATIVE_DEFAULT_TEST_ID);
  });
});

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { DropdownField } from './';

jest.mock('react-device-detect');

const options = [
  { value: 1, label: 'Option 1' },
  { value: 2, label: 'Option 2' },
  { value: 3, label: 'Option 3' },
];
const deviceDetect = require('react-device-detect');

describe('DropdownField', () => {
  it('should render desktop dropdown', () => {
    deviceDetect.isMobile = false;
    render(<DropdownField options={options} />);
    screen.getByTestId('dropdownDesktop');
  });
  it('should render mobile dropdown', () => {
    deviceDetect.isMobile = true;
    render(<DropdownField options={options} />);
    screen.getByTestId('dropdownMobile');
  });
});

describe('DropdownMobile', () => {
  beforeEach(() => (deviceDetect.isMobile = true));
  const testId = 'dropdownMobile';
  it('should render placeholder', () => {
    givenComponentRendered({ placeholder: 'foo' });
    screen.getByText('foo');
  });
  it('should select initial item', () => {
    const initialItem = options[1];
    givenComponentRendered({ initialSelectedOption: initialItem });
    screen.getByText(initialItem.label);
  });
  it('should call onChange method', () => {
    const mockOnChange = jest.fn();
    givenComponentRendered({ onItemChange: mockOnChange });
    const dropdown = screen.getByTestId(testId);
    fireEvent.change(dropdown, {
      target: { value: 2 },
    });
    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });
  it('should render disabled', () => {
    givenComponentRendered({ disabled: true });
    const dropdown = screen.getByTestId(testId);
    expect(dropdown).toBeDisabled();
  });
  it('should render element with name', () => {
    givenComponentRendered({ name: 'foo' });
    const dropdown = screen.getByTestId(testId);
    expect(dropdown).toHaveAttribute('name', 'foo');
  });
  it('should render invalid', () => {
    givenComponentRendered({ invalid: true });
    const dropdown = screen.getByTestId(testId);
    expect(dropdown).toHaveClass('invalid');
  });
  it('should render custom css', () => {
    givenComponentRendered({ customCss: 'color: violet' });
    const dropdown = screen.getByTestId(testId);
    expect(dropdown).toHaveStyleRule('color', 'violet', {
      modifier: '&&&',
    });
  });
  const givenComponentRendered = (props?: any) =>
    render(
      <DropdownField
        options={options}
        placeholder="foo"
        onItemChange={() => {}}
        {...props}
      />
    );
});

describe('DropdownDesktop', () => {
  beforeEach(() => (deviceDetect.isMobile = false));
  const testId = 'dropdownDesktop';
  it('should render placeholder', () => {
    givenComponentRendered({ placeholder: 'foo' });
    screen.getByText('foo');
  });
  it('should select initial item', () => {
    const initialItem = options[1];
    givenComponentRendered({ initialSelectedOption: initialItem });
    screen.getByText(initialItem.label);
  });
  it('should call onChange method', () => {
    const mockOnChange = jest.fn();
    givenComponentRendered({ onItemChange: mockOnChange });
    const dropdown = screen.getByTestId(testId);
    fireEvent.click(dropdown);
    fireEvent.keyDown(dropdown);
    const item = screen.getByText('Option 1');
    fireEvent.click(item);
    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });
  it('should render disabled', () => {
    givenComponentRendered({ disabled: true });
    const dropdown = screen.getByTestId(testId);
    expect(dropdown).toBeDisabled();
  });
  it('should render element with name', () => {
    givenComponentRendered({ name: 'foo' });
    const dropdown = screen.getByTestId(testId);
    expect(dropdown).toHaveAttribute('name', 'foo');
  });
  it('should render invalid', () => {
    givenComponentRendered({ invalid: true });
    const dropdown = screen.getByTestId(testId);
    expect(dropdown).toHaveClass('invalid');
  });
  it('should render custom css', () => {
    givenComponentRendered({ customCss: 'color: violet' });
    const dropdown = screen.getByTestId(testId);
    expect(dropdown).toHaveStyleRule('color', 'violet', {
      modifier: '&&&',
    });
  });
  const givenComponentRendered = (props?: any) =>
    render(
      <DropdownField
        options={options}
        placeholder="foo"
        onItemChange={() => {}}
        {...props}
      />
    );
});

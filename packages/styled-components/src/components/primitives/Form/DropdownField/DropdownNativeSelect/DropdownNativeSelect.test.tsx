import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { DropdownNativeSelect } from '.';

describe('DropdownNativeSelect', () => {
  const options = [
    { value: 1, label: 'Option 1' },
    { value: 2, label: 'Option 2' },
    { value: 3, label: 'Option 3' },
  ];
  const testId = 'dropdownNativeSelect';
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
      <DropdownNativeSelect
        options={options}
        placeholder="foo"
        onItemChange={() => {}}
        {...props}
      />
    );
});

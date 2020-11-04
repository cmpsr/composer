import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { DropdownFieldMulti } from '.';

describe('DropdownFieldMulti', () => {
  const options = [
    { value: 1, label: 'Option 1' },
    { value: 2, label: 'Option 2' },
    { value: 3, label: 'Option 3' },
  ];
  const testId = 'dropdownFieldMulti';
  it('should render placeholder', () => {
    givenComponentRendered({ placeholder: 'foo' });
    screen.getByText('foo');
  });
  it('should render options on click', () => {
    givenComponentRendered();
    const button = screen.getByText('foo');
    fireEvent.click(button);
    screen.getByText('Option 1');
  });
  it('should call onChange method two times for multi-select', () => {
    const mockOnChange = jest.fn();
    givenComponentRendered({ onItemChange: mockOnChange });
    const dropdown = screen.getByTestId(testId);
    fireEvent.click(dropdown);
    fireEvent.keyDown(dropdown);
    const item = screen.getByText('Option 1');
    fireEvent.click(item);
    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });
  it('should not select the same option twice', () => {
    givenComponentRendered();
    const dropdown = screen.getByTestId(testId);
    fireEvent.click(dropdown);
    fireEvent.keyDown(dropdown);
    const item = screen.getByText('Option 1');
    fireEvent.click(item);
    fireEvent.click(dropdown);
    fireEvent.keyDown(dropdown);
    fireEvent.click(item);
    const itemsSelected = screen.getByTestId('items-selected');
    expect(itemsSelected.children).toHaveLength(1);
  });
  it('should call removeItem method when click on x icon', () => {
    givenComponentRendered();
    const dropdown = screen.getByTestId(testId);
    fireEvent.click(dropdown);
    fireEvent.keyDown(dropdown);
    const item = screen.getByText('Option 1');
    fireEvent.click(item);
    const itemSelected = screen.getAllByTestId('icon');
    fireEvent.click(itemSelected[0].parentElement);
    screen.getByText('foo');
  });
  it('should render initial option', () => {
    givenComponentRendered({ initialSelectedOption: options[1] });
    screen.getByText('Option 2');
  });
  it('should render disabled', () => {
    givenComponentRendered({ disabled: true });
    const dropdown = screen.getByTestId(testId);
    expect(dropdown).toBeDisabled();
  });
  const givenComponentRendered = (props?: any) =>
    render(
      <DropdownFieldMulti
        options={options}
        onItemChange={() => {}}
        placeholder="foo"
        {...props}
      />
    );
});

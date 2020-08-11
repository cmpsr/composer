import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import { DropdownNativeSelect, DROPDOWN_NATIVE_DEFAULT_TEST_ID } from '.';
import { ICON_DEFAULT_TEST_ID } from 'components/primitives/Icon';

describe('DropdownNativeSelect', () => {
  const options = [
    { value: 1, label: 'Option 1' },
    { value: 2, label: 'Option 2' },
    { value: 3, label: 'Option 3' },
  ];
  const onChange = jest.fn();
  it('should render element with default placeholder', () => {
    render(<DropdownNativeSelect options={options} onItemChange={onChange} />);
    screen.getByText('Select an item');
  });
  it('should render element with placeholder', () => {
    render(
      <DropdownNativeSelect
        options={options}
        onItemChange={onChange}
        placeHolder="Placeholder"
      />
    );
    screen.getByText('Placeholder');
  });
  it('should select initial item', () => {
    const initialItem = options[1];
    render(
      <DropdownNativeSelect
        options={options}
        initialSelectedOption={initialItem}
        onItemChange={onChange}
        placeHolder="Placeholder"
      />
    );
    screen.getByText(initialItem.label);
  });
  it('should render options on click', () => {
    render(
      <DropdownNativeSelect
        options={options}
        onItemChange={onChange}
        placeHolder="Placeholder"
      />
    );
    const button = screen.getByText('Placeholder');
    fireEvent.click(button);
    const option = screen.getAllByText('Option 1');
    expect(option[0]).toBeInTheDocument();
  });
  it('should render icon', () => {
    render(
      <DropdownNativeSelect
        options={options}
        onItemChange={onChange}
        placeHolder="Placeholder"
      />
    );
    screen.getByTestId(ICON_DEFAULT_TEST_ID);
  });
  it('should call onChange method', () => {
    render(
      <DropdownNativeSelect
        options={options}
        onItemChange={onChange}
        placeHolder="Placeholder"
      />
    );
    const dropdown = screen.getByTestId(DROPDOWN_NATIVE_DEFAULT_TEST_ID);
    fireEvent.change(dropdown, {
      target: { value: 2 },
    });
    expect(onChange).toHaveBeenCalledTimes(1);
  });
  it('should not crash if no onChange method', () => {
    render(
      <DropdownNativeSelect options={options} placeHolder="Placeholder" />
    );
    const dropdown = screen.getByTestId(DROPDOWN_NATIVE_DEFAULT_TEST_ID);
    fireEvent.click(dropdown);
    fireEvent.keyDown(dropdown);
    const item = screen.getByText('Option 1');
    expect(() => fireEvent.click(item)).not.toThrow();
  });
  it('should add disabled true', () => {
    render(
      <DropdownNativeSelect
        options={options}
        onItemChange={onChange}
        placeHolder="Placeholder"
        disabled={true}
      />
    );
    const dropdown = screen.getByTestId(
      DROPDOWN_NATIVE_DEFAULT_TEST_ID
    ) as HTMLButtonElement;
    expect(dropdown).toBeDisabled();
  });
  it('should add disabled false', () => {
    render(
      <DropdownNativeSelect
        options={options}
        onItemChange={onChange}
        placeHolder="Placeholder"
        disabled={false}
      />
    );
    const dropdown = screen.getByTestId(
      DROPDOWN_NATIVE_DEFAULT_TEST_ID
    ) as HTMLButtonElement;
    expect(dropdown).not.toBeDisabled();
  });
  it('should render element with name', () => {
    render(
      <DropdownNativeSelect
        name="name"
        options={options}
        onItemChange={onChange}
      />
    );
    const dropdown = screen.getByTestId(
      DROPDOWN_NATIVE_DEFAULT_TEST_ID
    ) as HTMLButtonElement;
    expect(dropdown.name).toBe('name');
  });
  it('should apply classnames when is invalid', () => {
    render(
      <DropdownNativeSelect
        options={options}
        onItemChange={onChange}
        placeHolder="Placeholder"
        invalid
      />
    );
    const dropdown = screen.getByTestId(
      DROPDOWN_NATIVE_DEFAULT_TEST_ID
    ) as HTMLButtonElement;
    expect(dropdown).toHaveClass('!border-fill-system-error');
  });
  it('should call onItemChange with right value selected', async () => {
    const mockOnChange = jest.fn().mockImplementation((item) => item);
    const value = 2;
    render(
      <DropdownNativeSelect
        options={options}
        onItemChange={mockOnChange}
        placeHolder="Placeholder"
      />
    );
    const select = (await waitFor(() =>
      screen.getByTestId('dropdown-native')
    )) as HTMLSelectElement;
    fireEvent.change(select, { target: { value } });
    expect(mockOnChange).toBeCalledWith({ label: 'Option 2', value });
  });
});

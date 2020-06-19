import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { DropdownSingleSelect, DROPDOWN_DEFAULT_TEST_ID } from '.';
import { ICON_DEFAULT_TEST_ID } from 'components/primitives/Icon';

describe('DropdownSingleSelect', () => {
  const options = [
    { value: 1, label: 'Option 1' },
    { value: 2, label: 'Option 2' },
    { value: 3, label: 'Option 3' },
  ];
  const onChange = jest.fn();
  it('should render element with default placeholder', () => {
    render(<DropdownSingleSelect options={options} onItemChange={onChange} />);
    const dropdown = screen.getByText('Select an item');
    expect(dropdown).toBeInTheDocument();
  });
  it('should render element with placeholder', () => {
    render(
      <DropdownSingleSelect
        options={options}
        onItemChange={onChange}
        placeHolder="Placeholder"
      />
    );
    const dropdown = screen.getByText('Placeholder');
    expect(dropdown).toBeInTheDocument();
  });
  it('should select initial item', () => {
    const initialItem = options[1];
    render(
      <DropdownSingleSelect
        options={options}
        initialSelectedOption={initialItem}
        onItemChange={onChange}
        placeHolder="Placeholder"
      />
    );
    const option2 = screen.getByText(initialItem.label);
    expect(option2).toBeInTheDocument();
  });
  it('should render options on click', () => {
    render(
      <DropdownSingleSelect
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
      <DropdownSingleSelect
        options={options}
        onItemChange={onChange}
        placeHolder="Placeholder"
      />
    );
    const icon = screen.getByTestId(ICON_DEFAULT_TEST_ID);
    expect(icon).toBeInTheDocument();
  });
  it('should call onChange method', () => {
    render(
      <DropdownSingleSelect
        options={options}
        onItemChange={onChange}
        placeHolder="Placeholder"
      />
    );
    const dropdown = screen.getByTestId(DROPDOWN_DEFAULT_TEST_ID);
    fireEvent.click(dropdown);
    fireEvent.keyDown(dropdown);
    const item = screen.getByText('Option 1');
    fireEvent.click(item);
    expect(onChange).toHaveBeenCalledTimes(1);
  });
  it('should not crash if no onChange method', () => {
    render(
      <DropdownSingleSelect options={options} placeHolder="Placeholder" />
    );
    const dropdown = screen.getByTestId(DROPDOWN_DEFAULT_TEST_ID);
    fireEvent.click(dropdown);
    fireEvent.keyDown(dropdown);
    const item = screen.getByText('Option 1');
    expect(() => fireEvent.click(item)).not.toThrow();
  });
  it('should add disabled true', () => {
    render(
      <DropdownSingleSelect
        options={options}
        onItemChange={onChange}
        placeHolder="Placeholder"
        disabled={true}
      />
    );
    const dropdown = screen.getByTestId(
      DROPDOWN_DEFAULT_TEST_ID
    ) as HTMLButtonElement;
    expect(dropdown.disabled).toBe(true);
  });
  it('should add disabled false', () => {
    render(
      <DropdownSingleSelect
        options={options}
        onItemChange={onChange}
        placeHolder="Placeholder"
        disabled={false}
      />
    );
    const dropdown = screen.getByTestId(
      DROPDOWN_DEFAULT_TEST_ID
    ) as HTMLButtonElement;
    expect(dropdown).not.toBeDisabled();
  });
  it('should render element with name', () => {
    render(
      <DropdownSingleSelect
        name="name"
        options={options}
        onItemChange={onChange}
      />
    );
    const dropdown = screen.getByTestId(
      DROPDOWN_DEFAULT_TEST_ID
    ) as HTMLButtonElement;
    expect(dropdown.name).toBe('name');
  });
  it('should apply classnames when is invalid', () => {
    render(
      <DropdownSingleSelect
        options={options}
        onItemChange={onChange}
        placeHolder="Placeholder"
        invalid
      />
    );
    const dropdown = screen.getByTestId(
      DROPDOWN_DEFAULT_TEST_ID
    ) as HTMLButtonElement;
    expect(dropdown).toHaveClass('border-fill-system-error');
  });
});

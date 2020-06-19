import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { DropdownMultiSelect, DROPDOWN_DEFAULT_TEST_ID } from '.';
import { ICON_DEFAULT_TEST_ID } from 'components/primitives/Icon';

describe('DropdownMultiSelect', () => {
  const options = [
    { value: 1, label: 'Option 1' },
    { value: 2, label: 'Option 2' },
    { value: 3, label: 'Option 3' },
  ];
  const onChange = jest.fn();

  it('should render element with default placeholder', () => {
    render(<DropdownMultiSelect options={options} onItemChange={onChange} />);
    const dropdown = screen.getByText('Select an item');
    expect(dropdown).toBeInTheDocument();
  });
  it('should render element with placeholder', () => {
    render(
      <DropdownMultiSelect
        options={options}
        onItemChange={onChange}
        placeHolder="Placeholder"
      />
    );
    const dropdown = screen.getByText('Placeholder');
    expect(dropdown).toBeInTheDocument();
  });
  it('should render options on click', () => {
    render(
      <DropdownMultiSelect
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
      <DropdownMultiSelect
        options={options}
        onItemChange={onChange}
        placeHolder="Placeholder"
      />
    );

    const icon = screen.getByTestId(ICON_DEFAULT_TEST_ID);
    expect(icon).toBeInTheDocument();
  });
  it('should call onChange method two times for multi-select', () => {
    render(
      <DropdownMultiSelect
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

    fireEvent.click(dropdown);
    fireEvent.keyDown(dropdown);
    const item2 = screen.getByText('Option 2');
    fireEvent.click(item2);

    expect(onChange).toHaveBeenCalledTimes(2);
  });
  it('should not select the same option twice', () => {
    render(
      <DropdownMultiSelect
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
    const itemSelected = screen.getByText('Option 1');
    expect(itemSelected).toBeInTheDocument();

    fireEvent.click(dropdown);
    fireEvent.keyDown(dropdown);
    const Item2 = screen.getByText('Option 2');
    fireEvent.click(Item2);
    const item2Selected = screen.getByText('Option 2');
    expect(item2Selected).toBeInTheDocument();

    fireEvent.click(dropdown);
    fireEvent.keyDown(dropdown);
    const sameItem1 = screen.getAllByText('Option 1');
    fireEvent.click(sameItem1[1]);

    const itemsSelected = screen.getByTestId('items-selected');
    expect(itemsSelected.children.length).toEqual(2);
  });
  it('should call removeItem method when click on x icon', () => {
    render(
      <DropdownMultiSelect
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
    const itemSelected = screen.getAllByTestId(ICON_DEFAULT_TEST_ID);

    fireEvent.click(itemSelected[0].parentElement);

    const placeHolder = screen.getByText('Placeholder');
    expect(placeHolder).toBeInTheDocument();
  });
  it('should not crash it no onChange method', () => {
    render(<DropdownMultiSelect options={options} placeHolder="Placeholder" />);
    const dropdown = screen.getByTestId(DROPDOWN_DEFAULT_TEST_ID);
    fireEvent.click(dropdown);
    fireEvent.keyDown(dropdown);
    const item = screen.getByText('Option 1');
    expect(() => fireEvent.click(item)).not.toThrow();
  });
  it('should add disabled true', () => {
    render(
      <DropdownMultiSelect
        options={options}
        onItemChange={onChange}
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
      <DropdownMultiSelect
        options={options}
        onItemChange={onChange}
        disabled={false}
      />
    );

    const dropdown = screen.getByTestId(
      DROPDOWN_DEFAULT_TEST_ID
    ) as HTMLButtonElement;
    expect(dropdown.disabled).toBe(false);
  });
});

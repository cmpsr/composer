import React from 'react';
import { screen, renderWithProviders, fireEvent, within } from '@tests/renderWithProviders';
import { AutocompleteMultiSelect } from './AutocompleteMultiSelect';

describe('AutocompleteMultiSelect', () => {
  const items = ['foo', 'bar'];

  test('should render items', () => {
    renderWithProviders(
      <AutocompleteMultiSelect items={items}>
        <AutocompleteMultiSelect.SelectedItems />
        <AutocompleteMultiSelect.Input placeholder="AutocompleteMultiSelect" />
        <AutocompleteMultiSelect.List renderItem={(item: string) => <div>{item}</div>} />
      </AutocompleteMultiSelect>
    );
    const input = screen.getByPlaceholderText(/AutocompleteMultiSelect/);
    fireEvent.focus(input);
    const list = screen.getByRole('listbox');
    expect(list.children).toHaveLength(items.length);
  });
  test('should add and remove selected items correctly', async () => {
    renderWithProviders(
      <AutocompleteMultiSelect items={items}>
        <AutocompleteMultiSelect.SelectedItems />
        <AutocompleteMultiSelect.Input placeholder="Select an item" />
        <AutocompleteMultiSelect.List renderItem={(item: string) => <div>{item}</div>} />
      </AutocompleteMultiSelect>
    );

    const input = screen.getByPlaceholderText(/Select an item/);
    fireEvent.focus(input);
    fireEvent.change(input, { target: { value: 'foo' } });

    const list = screen.getByRole('listbox');
    fireEvent.click(list.firstElementChild);

    let selectedItem = screen.getByText('foo');
    expect(selectedItem).toBeInTheDocument();

    const removeButton = selectedItem.parentElement.querySelector(
      '[data-testid="cmpsr.autocompleteMultiSelect.clear-tag-button"]'
    );
    expect(removeButton).toBeInTheDocument();
    fireEvent.click(removeButton);

    expect(selectedItem).not.toBeInTheDocument();
  });
  test('should clear selected item when clear button is clicked', () => {
    renderWithProviders(
      <AutocompleteMultiSelect items={items}>
        <AutocompleteMultiSelect.Input placeholder="AutocompleteMultiSelect" />
        <AutocompleteMultiSelect.List renderItem={(item: string) => <div>{item}</div>} />
      </AutocompleteMultiSelect>
    );
    const input = screen.getByPlaceholderText(/AutocompleteMultiSelect/);
    fireEvent.focus(input);
    fireEvent.change(input, { target: { value: 'foo' } });

    const clearButton = screen.getByTestId('cmpsr.autocompleteMultiSelect.clear-button');
    fireEvent.click(clearButton);
    expect(input).toHaveValue('');
  });
  test('should render no results', () => {
    renderWithProviders(
      <AutocompleteMultiSelect items={[]}>
        <AutocompleteMultiSelect.Input placeholder="AutocompleteMultiSelect" />
        <AutocompleteMultiSelect.List renderItem={(item: string) => <div>{item}</div>} />
      </AutocompleteMultiSelect>
    );
    const input = screen.getByPlaceholderText(/AutocompleteMultiSelect/);
    fireEvent.focus(input);
    const list = screen.getByRole('listbox');
    expect(list.children).toHaveLength(1);
    within(list).getByText(/No results/);
  });
  test('should render no results custom', () => {
    renderWithProviders(
      <AutocompleteMultiSelect items={[]}>
        <AutocompleteMultiSelect.Input placeholder="AutocompleteMultiSelect" />
        <AutocompleteMultiSelect.List
          renderItem={(item: string) => <div>{item}</div>}
          noResultsContent={<div>No results custom</div>}
        />
      </AutocompleteMultiSelect>
    );
    const input = screen.getByPlaceholderText(/AutocompleteMultiSelect/);
    fireEvent.focus(input);
    const list = screen.getByRole('listbox');
    expect(list.children).toHaveLength(1);
    within(list).getByText(/No results custom/);
  });
  test('should call onSelectedItemsChange when input value changes', () => {
    const mockOnSelectedItemsChange = jest.fn();

    renderWithProviders(
      <AutocompleteMultiSelect
        items={items}
        useMultipleSelectionProps={{ onSelectedItemsChange: mockOnSelectedItemsChange }}
      >
        <AutocompleteMultiSelect.Input placeholder="AutocompleteMultiSelect" />
        <AutocompleteMultiSelect.List renderItem={(item: string) => <div>{item}</div>} />
      </AutocompleteMultiSelect>
    );
    const input = screen.getByPlaceholderText(/AutocompleteMultiSelect/);
    fireEvent.focus(input);
    fireEvent.change(input, { target: { value: 'foo' } });
    const list = screen.getByRole('listbox');
    fireEvent.click(list.firstElementChild);

    expect(mockOnSelectedItemsChange).toHaveBeenCalled();
  });
  test('should render items with renderItem', () => {
    const mockRenderItem = jest.fn().mockImplementation((item: string) => <div>renderItem: {item}</div>);
    renderWithProviders(
      <AutocompleteMultiSelect items={items}>
        <AutocompleteMultiSelect.Input placeholder="AutocompleteMultiSelect" />
        <AutocompleteMultiSelect.List renderItem={mockRenderItem} />
      </AutocompleteMultiSelect>
    );
    const input = screen.getByPlaceholderText(/AutocompleteMultiSelect/);
    fireEvent.focus(input);
    expect(mockRenderItem).toHaveBeenCalledTimes(items.length);
    screen.getByText('renderItem: foo');
    screen.getByText('renderItem: bar');
  });

  test('should render selectedItems with renderSelectedItem', () => {
    const mockRenderSelectedItem = jest
      .fn()
      .mockImplementation(({ selectedItem }) => <div>renderSelectedItem: {selectedItem}</div>);

    renderWithProviders(
      <AutocompleteMultiSelect items={items}>
        <AutocompleteMultiSelect.SelectedItems renderSelectedItem={mockRenderSelectedItem} />
        <AutocompleteMultiSelect.Input placeholder="AutocompleteMultiSelect" />
        <AutocompleteMultiSelect.List renderItem={(item: string) => <div>{item}</div>} />
      </AutocompleteMultiSelect>
    );

    const input = screen.getByPlaceholderText(/AutocompleteMultiSelect/);
    fireEvent.focus(input);
    fireEvent.change(input, { target: { value: 'foo' } });

    const list = screen.getByRole('listbox');
    fireEvent.click(list.firstElementChild);

    screen.getByText('renderSelectedItem: foo');
  });

  test('should not show clear button', () => {
    renderWithProviders(
      <AutocompleteMultiSelect items={items}>
        <AutocompleteMultiSelect.SelectedItems />
        <AutocompleteMultiSelect.Input placeholder="AutocompleteMultiSelect" clearButtonMode="never" />
        <AutocompleteMultiSelect.List renderItem={(item: string) => <div>{item}</div>} />
      </AutocompleteMultiSelect>
    );

    const input = screen.getByPlaceholderText(/AutocompleteMultiSelect/);
    fireEvent.focus(input);

    expect(screen.queryByTestId('cmpsr.autocompleteMultiSelect.clear-button')).not.toBeInTheDocument();

    fireEvent.change(input, { target: { value: 'foo' } });

    expect(screen.queryByTestId('cmpsr.autocompleteMultiSelect.clear-button')).not.toBeInTheDocument();

    const list = screen.getByRole('listbox');
    fireEvent.click(list.firstElementChild);

    expect(screen.queryByTestId('cmpsr.autocompleteMultiSelect.clear-button')).not.toBeInTheDocument();
  });

  test('should show clear button when input field has value', () => {
    renderWithProviders(
      <AutocompleteMultiSelect items={items}>
        <AutocompleteMultiSelect.SelectedItems />
        <AutocompleteMultiSelect.Input placeholder="AutocompleteMultiSelect" clearButtonMode="has-value" />
        <AutocompleteMultiSelect.List renderItem={(item: string) => <div>{item}</div>} />
      </AutocompleteMultiSelect>
    );

    expect(screen.queryByTestId('cmpsr.autocompleteMultiSelect.clear-button')).not.toBeInTheDocument();

    const input = screen.getByPlaceholderText(/AutocompleteMultiSelect/);
    fireEvent.focus(input);

    fireEvent.change(input, { target: { value: 'foo' } });
    screen.getByTestId('cmpsr.autocompleteMultiSelect.clear-button');
  });

  test('should always show clear button', () => {
    renderWithProviders(
      <AutocompleteMultiSelect items={items}>
        <AutocompleteMultiSelect.SelectedItems />
        <AutocompleteMultiSelect.Input placeholder="AutocompleteMultiSelect" clearButtonMode="always" />
        <AutocompleteMultiSelect.List renderItem={(item: string) => <div>{item}</div>} />
      </AutocompleteMultiSelect>
    );

    screen.getByTestId('cmpsr.autocompleteMultiSelect.clear-button');
  });

  test('should set focus on the input when clear button is clicked', () => {
    renderWithProviders(
      <AutocompleteMultiSelect items={items}>
        <AutocompleteMultiSelect.SelectedItems />
        <AutocompleteMultiSelect.Input placeholder="AutocompleteMultiSelect" clearButtonMode="always" />
        <AutocompleteMultiSelect.List renderItem={(item: string) => <div>{item}</div>} />
      </AutocompleteMultiSelect>
    );

    const input = screen.getByPlaceholderText(/AutocompleteMultiSelect/);
    fireEvent.focus(input);

    fireEvent.change(input, { target: { value: 'foo' } });
    screen.getByTestId('cmpsr.autocompleteMultiSelect.clear-button');

    fireEvent.click(screen.getByTestId('cmpsr.autocompleteMultiSelect.clear-button'));
    expect(input).toHaveFocus();
  });

  test('should show chevron up when list is open', () => {
    renderWithProviders(
      <AutocompleteMultiSelect items={items}>
        <AutocompleteMultiSelect.SelectedItems />
        <AutocompleteMultiSelect.Input placeholder="AutocompleteMultiSelect" />
        <AutocompleteMultiSelect.List renderItem={(item: string) => <div>{item}</div>} />
      </AutocompleteMultiSelect>
    );

    const input = screen.getByPlaceholderText(/AutocompleteMultiSelect/);
    fireEvent.focus(input);

    const list = screen.getByRole('listbox');
    fireEvent.click(list.firstElementChild);

    screen.getByTestId('cmpsr.autocompleteMultiSelect.chevron-up');
  });

  test('should show chevron down when list is closed', () => {
    renderWithProviders(
      <AutocompleteMultiSelect items={items}>
        <AutocompleteMultiSelect.SelectedItems />
        <AutocompleteMultiSelect.Input placeholder="AutocompleteMultiSelect" />
        <AutocompleteMultiSelect.List renderItem={(item: string) => <div>{item}</div>} />
      </AutocompleteMultiSelect>
    );

    screen.getByTestId('cmpsr.autocompleteMultiSelect.chevron-down');
  });
});

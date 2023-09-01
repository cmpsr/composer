import React from 'react';
import { screen, renderWithProviders, fireEvent, within } from '@tests/renderWithProviders';
import { Autocomplete } from './Autocomplete';

describe('Autocomplete', () => {
  const items = ['foo', 'bar'];

  test('should render items', () => {
    renderWithProviders(
      <Autocomplete items={items}>
        <Autocomplete.Input placeholder="Autocomplete" />
        <Autocomplete.List renderItem={(item: string) => <div>{item}</div>} />
      </Autocomplete>
    );
    const input = screen.getByPlaceholderText(/Autocomplete/);
    fireEvent.focus(input);
    fireEvent.change(input, { target: { value: 'foo' } });
    const list = screen.getByRole('listbox');
    expect(list.children).toHaveLength(items.length);
  });
  test('should display clear button when there is an item selected', () => {
    renderWithProviders(
      <Autocomplete items={items}>
        <Autocomplete.Input placeholder="Autocomplete" showClearButton />
        <Autocomplete.List renderItem={(item: string) => <div>{item}</div>} />
      </Autocomplete>
    );
    const input = screen.getByPlaceholderText(/Autocomplete/);
    fireEvent.focus(input);
    fireEvent.change(input, { target: { value: 'foo' } });
    const list = screen.getByRole('listbox');
    fireEvent.click(list.firstElementChild);
    screen.getByTestId('cmpsr.autocomplete.clear-button');
  });
  test('should clear selected item when clear button is clicked', () => {
    renderWithProviders(
      <Autocomplete items={items}>
        <Autocomplete.Input placeholder="Autocomplete" showClearButton />
        <Autocomplete.List renderItem={(item: string) => <div>{item}</div>} />
      </Autocomplete>
    );
    const input = screen.getByPlaceholderText(/Autocomplete/);
    fireEvent.focus(input);
    fireEvent.change(input, { target: { value: 'foo' } });
    const list = screen.getByRole('listbox');
    fireEvent.click(list.firstElementChild);
    const clearButton = screen.getByTestId('cmpsr.autocomplete.clear-button');
    fireEvent.click(clearButton);
    expect(input).toHaveValue('');
  });
  test('should render no results', () => {
    renderWithProviders(
      <Autocomplete items={[]}>
        <Autocomplete.Input placeholder="Autocomplete" />
        <Autocomplete.List renderItem={(item: string) => <div>{item}</div>} />
      </Autocomplete>
    );
    const input = screen.getByPlaceholderText(/Autocomplete/);
    fireEvent.focus(input);
    fireEvent.change(input, { target: { value: 'foo' } });
    const list = screen.getByRole('listbox');
    expect(list.children).toHaveLength(1);
    within(list).getByText(/No results/);
  });
  test('should render no results custom', () => {
    renderWithProviders(
      <Autocomplete items={[]}>
        <Autocomplete.Input placeholder="Autocomplete" showClearButton />
        <Autocomplete.List
          renderItem={(item: string) => <div>{item}</div>}
          noResultsContent={<div>No results custom</div>}
        />
      </Autocomplete>
    );
    const input = screen.getByPlaceholderText(/Autocomplete/);
    fireEvent.focus(input);
    fireEvent.change(input, { target: { value: 'foo' } });
    const list = screen.getByRole('listbox');
    expect(list.children).toHaveLength(1);
    within(list).getByText(/No results custom/);
  });
  test('should call onInputValueChange when input value changes', () => {
    const mockOnInputValueChange = jest.fn();
    renderWithProviders(
      <Autocomplete items={items} onInputValueChange={mockOnInputValueChange}>
        <Autocomplete.Input placeholder="Autocomplete" />
        <Autocomplete.List renderItem={(item: string) => <div>{item}</div>} />
      </Autocomplete>
    );
    const input = screen.getByPlaceholderText(/Autocomplete/);
    fireEvent.focus(input);
    fireEvent.change(input, { target: { value: 'foo' } });
    expect(mockOnInputValueChange).toHaveBeenCalled();
  });
  test('should render items with renderItem', () => {
    const mockRenderItem = jest.fn().mockImplementation((item: string) => <div>renderItem: {item}</div>);
    renderWithProviders(
      <Autocomplete items={items}>
        <Autocomplete.Input placeholder="Autocomplete" />
        <Autocomplete.List renderItem={mockRenderItem} />
      </Autocomplete>
    );
    const input = screen.getByPlaceholderText(/Autocomplete/);
    fireEvent.focus(input);
    fireEvent.change(input, { target: { value: 'foo' } });
    expect(mockRenderItem).toHaveBeenCalledTimes(items.length);
    screen.getByText('renderItem: foo');
    screen.getByText('renderItem: bar');
  });

  test('should not render items when input value is empty', () => {
    const mockRenderItem = jest.fn().mockImplementation((item: string) => <div>renderItem: {item}</div>);
    renderWithProviders(
      <Autocomplete items={items}>
        <Autocomplete.Input placeholder="Autocomplete" />
        <Autocomplete.List renderItem={mockRenderItem} />
      </Autocomplete>
    );

    const input = screen.getByPlaceholderText(/Autocomplete/);
    fireEvent.focus(input);

    expect(mockRenderItem).not.toHaveBeenCalled();
    expect(screen.queryByText('renderItem')).not.toBeInTheDocument();

    fireEvent.change(input, { target: { value: '' } });
    expect(mockRenderItem).not.toHaveBeenCalled();
    expect(screen.queryByText('renderItem')).not.toBeInTheDocument();

    fireEvent.change(input, { target: { value: 'foo' } });
    expect(mockRenderItem).toHaveBeenCalledTimes(items.length);
    screen.getByText('renderItem: foo');

    fireEvent.change(input, { target: { value: '' } });
    expect(screen.queryByText('renderItem')).not.toBeInTheDocument();
  });
});

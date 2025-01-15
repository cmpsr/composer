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
      </Autocomplete>,
    );
    const input = screen.getByPlaceholderText(/Autocomplete/);
    fireEvent.focus(input);
    const list = screen.getByRole('listbox');
    expect(list.children).toHaveLength(items.length);
  });
  test('should clear selected item when clear button is clicked', () => {
    renderWithProviders(
      <Autocomplete items={items}>
        <Autocomplete.Input placeholder="Autocomplete" />
        <Autocomplete.List renderItem={(item: string) => <div>{item}</div>} />
      </Autocomplete>,
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
      </Autocomplete>,
    );
    const input = screen.getByPlaceholderText(/Autocomplete/);
    fireEvent.focus(input);
    const list = screen.getByRole('listbox');
    expect(list.children).toHaveLength(1);
    within(list).getByText(/No results/);
  });
  test('should render no results custom', () => {
    renderWithProviders(
      <Autocomplete items={[]}>
        <Autocomplete.Input placeholder="Autocomplete" />
        <Autocomplete.List
          renderItem={(item: string) => <div>{item}</div>}
          noResultsContent={<div>No results custom</div>}
        />
      </Autocomplete>,
    );
    const input = screen.getByPlaceholderText(/Autocomplete/);
    fireEvent.focus(input);
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
      </Autocomplete>,
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
      </Autocomplete>,
    );
    const input = screen.getByPlaceholderText(/Autocomplete/);
    fireEvent.focus(input);
    expect(mockRenderItem).toHaveBeenCalledTimes(items.length);
    screen.getByText('renderItem: foo');
    screen.getByText('renderItem: bar');
  });

  test('should not render items when input value length is less than minCharsToShowList', () => {
    const mockRenderItem = jest.fn().mockImplementation((item: string) => <div>renderItem: {item}</div>);
    renderWithProviders(
      <Autocomplete items={items} minCharsToShowList={3}>
        <Autocomplete.Input placeholder="Autocomplete" />
        <Autocomplete.List renderItem={mockRenderItem} />
      </Autocomplete>,
    );

    const input = screen.getByPlaceholderText(/Autocomplete/);
    fireEvent.focus(input);

    expect(mockRenderItem).not.toHaveBeenCalled();
    expect(screen.queryByText('renderItem')).not.toBeInTheDocument();

    fireEvent.change(input, { target: { value: 'fo' } });
    expect(mockRenderItem).not.toHaveBeenCalled();
    expect(screen.queryByText('renderItem')).not.toBeInTheDocument();

    fireEvent.change(input, { target: { value: 'foo' } });
    expect(mockRenderItem).toHaveBeenCalledTimes(items.length);
    screen.getByText('renderItem: foo');

    fireEvent.change(input, { target: { value: '' } });
    expect(screen.queryByText('renderItem')).not.toBeInTheDocument();
  });

  test('should not show clear button', () => {
    renderWithProviders(
      <Autocomplete items={items}>
        <Autocomplete.Input placeholder="Autocomplete" clearButtonMode="never" />
        <Autocomplete.List renderItem={(item: string) => <div>{item}</div>} />
      </Autocomplete>,
    );

    const input = screen.getByPlaceholderText(/Autocomplete/);
    fireEvent.focus(input);

    expect(screen.queryByTestId('cmpsr.autocomplete.clear-button')).not.toBeInTheDocument();

    fireEvent.change(input, { target: { value: 'foo' } });

    expect(screen.queryByTestId('cmpsr.autocomplete.clear-button')).not.toBeInTheDocument();

    const list = screen.getByRole('listbox');
    fireEvent.click(list.firstElementChild);

    expect(screen.queryByTestId('cmpsr.autocomplete.clear-button')).not.toBeInTheDocument();
  });

  test('should show clear button when an item is selected', () => {
    renderWithProviders(
      <Autocomplete items={items}>
        <Autocomplete.Input placeholder="Autocomplete" clearButtonMode="item-selected" />
        <Autocomplete.List renderItem={(item: string) => <div>{item}</div>} />
      </Autocomplete>,
    );

    const input = screen.getByPlaceholderText(/Autocomplete/);
    fireEvent.focus(input);
    fireEvent.change(input, { target: { value: 'foo' } });

    expect(screen.queryByTestId('cmpsr.autocomplete.clear-button')).not.toBeInTheDocument();

    const list = screen.getByRole('listbox');
    fireEvent.click(list.firstElementChild);

    screen.getByTestId('cmpsr.autocomplete.clear-button');
  });

  test('should show clear button when input field has value', () => {
    renderWithProviders(
      <Autocomplete items={items}>
        <Autocomplete.Input placeholder="Autocomplete" clearButtonMode="has-value" />
        <Autocomplete.List renderItem={(item: string) => <div>{item}</div>} />
      </Autocomplete>,
    );

    expect(screen.queryByTestId('cmpsr.autocomplete.clear-button')).not.toBeInTheDocument();

    const input = screen.getByPlaceholderText(/Autocomplete/);
    fireEvent.focus(input);

    fireEvent.change(input, { target: { value: 'foo' } });
    screen.getByTestId('cmpsr.autocomplete.clear-button');
  });

  test('should always show clear button', () => {
    renderWithProviders(
      <Autocomplete items={items}>
        <Autocomplete.Input placeholder="Autocomplete" clearButtonMode="always" />
        <Autocomplete.List renderItem={(item: string) => <div>{item}</div>} />
      </Autocomplete>,
    );

    screen.getByTestId('cmpsr.autocomplete.clear-button');
  });

  test('should set focus on the input when clear button is clicked', () => {
    renderWithProviders(
      <Autocomplete items={items}>
        <Autocomplete.Input placeholder="Autocomplete" clearButtonMode="always" />
        <Autocomplete.List renderItem={(item: string) => <div>{item}</div>} />
      </Autocomplete>,
    );

    const input = screen.getByPlaceholderText(/Autocomplete/);
    fireEvent.focus(input);

    fireEvent.change(input, { target: { value: 'foo' } });
    screen.getByTestId('cmpsr.autocomplete.clear-button');

    fireEvent.click(screen.getByTestId('cmpsr.autocomplete.clear-button'));
    expect(input).toHaveFocus();
  });
});

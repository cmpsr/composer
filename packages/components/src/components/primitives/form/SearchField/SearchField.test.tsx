import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { SearchField, IconPosition } from './SearchField';
import { ICON_DEFAULT_TEST_ID } from 'components/primitives/Icon';

describe('SearchField', () => {
  const onChange = jest.fn();
  it('should render element with name', () => {
    const { getByPlaceholderText } = render(
      <SearchField
        name="text-field"
        placeholder="placeholder"
        onChange={onChange}
      />
    );
    const input = getByPlaceholderText('placeholder') as HTMLInputElement;
    expect(input).toBeInTheDocument();
    expect(input.name).toBe('text-field');
  });
  it('should render search as type by default', () => {
    const { getByPlaceholderText } = render(
      <SearchField
        name="text-field"
        placeholder="placeholder"
        onChange={onChange}
      />
    );
    const input = getByPlaceholderText('placeholder') as HTMLInputElement;
    expect(input.type).toBe('search');
  });
  it('should render type', () => {
    const { getByPlaceholderText } = render(
      <SearchField
        name="text-field"
        placeholder="placeholder"
        type="text"
        onChange={onChange}
      />
    );
    const input = getByPlaceholderText('placeholder') as HTMLInputElement;
    expect(input.type).toBe('text');
  });
  it('should render class', () => {
    const { getByPlaceholderText } = render(
      <SearchField
        name="text-field"
        placeholder="placeholder"
        className="foo"
        onChange={onChange}
      />
    );
    const input = getByPlaceholderText('placeholder');
    expect(input.classList).toContain('foo');
  });
  it('should render aria label', () => {
    const { getByPlaceholderText } = render(
      <SearchField
        name="text-field"
        placeholder="placeholder"
        ariaLabel="foo"
        onChange={onChange}
      />
    );
    const input = getByPlaceholderText('placeholder');
    expect(input.getAttribute('aria-label')).toBe('foo');
  });
  it('should add required true', () => {
    const { getByPlaceholderText } = render(
      <SearchField
        name="text-field"
        placeholder="placeholder"
        required={true}
        onChange={onChange}
      />
    );
    const input = getByPlaceholderText('placeholder') as HTMLInputElement;
    expect(input.required).toBe(true);
  });
  it('should add required false', () => {
    const { getByPlaceholderText } = render(
      <SearchField
        name="text-field"
        placeholder="placeholder"
        required={false}
        onChange={onChange}
      />
    );
    const input = getByPlaceholderText('placeholder') as HTMLInputElement;
    expect(input.required).toBe(false);
  });
  it('should call onChange', () => {
    const { getByPlaceholderText } = render(
      <SearchField
        name="text-field"
        placeholder="placeholder"
        required={true}
        onChange={onChange}
      />
    );
    const input = getByPlaceholderText('placeholder');
    fireEvent.change(input, { target: { value: 'new value' } });
    expect(onChange).toBeCalled();
  });
  it('should render icon position left by default', () => {
    const { getByTestId } = render(
      <SearchField
        name="text-field"
        placeholder="placeholder"
        required={true}
        onChange={onChange}
      />
    );

    const icon = getByTestId(ICON_DEFAULT_TEST_ID);
    expect(icon).toBeInTheDocument();
    expect(icon.parentElement.classList).toContain('left-0');
  });
  it('should render icon position right', () => {
    const { getByTestId } = render(
      <SearchField
        name="text-field"
        placeholder="placeholder"
        required={true}
        iconPosition={IconPosition.Right}
        onChange={onChange}
      />
    );

    const icon = getByTestId(ICON_DEFAULT_TEST_ID);
    expect(icon).toBeInTheDocument();
    expect(icon.parentElement.classList).toContain('right-0');
  });
});
